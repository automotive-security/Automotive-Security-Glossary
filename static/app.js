// ═══════════════════════════════════════════
// State
// ═══════════════════════════════════════════
var GLOSSARY_DATA = null;   // { catStats, firstCharStats, fullCategories }
var RELATION_MAP = null;    // { forward, inverse, allTerms }
var graphChart = null;      // ECharts instance for relation graph
var currentCat = null;       // null = "All Terms"
var currentView = 'dashboard';
var catChart = null;
var fcChart = null;

// ═══════════════════════════════════════════
// Markdown Parser for README.md
// ═══════════════════════════════════════════
function parseReadme(md) {
  var entries = [];
  var lines = md.split(/\r?\n/);
  var i = 0;
  var firstCharCounts = {};

  // Skip preamble (before first "## A" or similar section heading)
  var fc = '#';
  while (i < lines.length && !/^## [A-Z0-9]/.test(lines[i])) {
    i++;
  }

  while (i < lines.length) {
    // Skip section headings (## A, ## B, etc.)
    if (/^## [A-Z0-9]/.test(lines[i])) {
      var fc = lines[i].replace(/^## /, '').trim().charAt(0).toUpperCase();
      i++;
      continue;
    }

    // Match term entry: ### Term Name
    if (/^### /.test(lines[i])) {
      var term = lines[i].replace(/^### /, '').trim();
      i++;

      var fullName = '';
      var category = '';
      var description = '';
      var related = [];

      // Read metadata lines and description
      while (i < lines.length && !/^### /.test(lines[i]) && !/^## [A-Z0-9]/.test(lines[i])) {
        var line = lines[i];

        // **Full Name:** value
        var fnMatch = line.match(/^\*\*Full Name:\*\*\s*(.+)/);
        if (fnMatch) {
          fullName = fnMatch[1].trim();
          i++; continue;
        }

        // **Category:** value
        var catMatch = line.match(/^\*\*Category:\*\*\s*(.+)/);
        if (catMatch) {
          category = catMatch[1].trim();
          i++; continue;
        }

        // **Related:** a, b, c
        var relMatch = line.match(/^\*\*Related:\*\*\s*(.+)/);
        if (relMatch) {
          related = relMatch[1].split(/,\s*/).map(function(s){ return s.trim(); }).filter(Boolean);
          i++; continue;
        }

        // Skip empty lines between metadata
        if (/^\s*$/.test(line)) {
          i++; continue;
        }

        // Any other non-empty, non-heading line is description
        if (description) description += ' ';
        description += line.trim();
        i++;
      }

      // Track first char
      var fc2 = firstCharCounts[fc] || 0;
      firstCharCounts[fc] = fc2 + 1;

      entries.push({
        term: term,
        full_name: fullName,
        category: category || 'Uncategorized',
        description: description,
        related: related,
        first_char: fc
      });
    } else {
      i++;
    }
  }

  // Build category stats (sorted by count desc)
  var catCounts = {};
  var catEntries = {};  // category -> entries mapping
  entries.forEach(function(e) {
    var cat = e.category;
    catCounts[cat] = (catCounts[cat] || 0) + 1;
    if (!catEntries[cat]) catEntries[cat] = [];
    catEntries[cat].push(e);
  });

  var catStats = Object.keys(catCounts).map(function(cat) {
    return { name: cat, value: catCounts[cat] };
  });
  catStats.sort(function(a, b) { return a.name.localeCompare(b.name); });

  // Sort entries within each category alphabetically
  Object.keys(catEntries).forEach(function(cat) {
    catEntries[cat].sort(function(a, b) {
      return a.term.toLowerCase().localeCompare(b.term.toLowerCase());
    });
  });

  // Build first char stats
  var fcStats = Object.keys(firstCharCounts).map(function(fc) {
    return { name: fc, value: firstCharCounts[fc] };
  });
  fcStats.sort(function(a, b) { return a.name.localeCompare(b.name); });

  return {
    catStats: catStats,
    firstCharStats: fcStats,
    fullCategories: catEntries,
    totalTerms: entries.length
  };
}

// ═══════════════════════════════════════════
// Data Loading
// ═══════════════════════════════════════════
function loadData() {
  var overlay = document.getElementById('loadingOverlay');
  overlay.classList.remove('hidden');

  fetch('README.md?' + Date.now())
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(function(md) {
      GLOSSARY_DATA = parseReadme(md);
      RELATION_MAP = buildRelationMaps();
      // Update stats
      document.getElementById('statTerms').textContent = GLOSSARY_DATA.totalTerms;
      document.getElementById('statCategories').textContent = GLOSSARY_DATA.catStats.length;
      document.getElementById('statFirstLetters').textContent = GLOSSARY_DATA.firstCharStats.length;

      // Show sidebar and content
      document.getElementById('sidebar').classList.remove('hidden');
      document.getElementById('contentArea').classList.remove('hidden');
      document.getElementById('errorView').classList.add('hidden');

      init();
      fetchGitHubStars();
      overlay.classList.add('hidden');
    })
    .catch(function(err) {
      console.error('Failed to load README.md:', err);
      overlay.classList.add('hidden');
      document.getElementById('sidebar').classList.remove('hidden');
      document.getElementById('contentArea').classList.add('hidden');
      document.getElementById('errorView').classList.remove('hidden');
    });
}

// ═══════════════════════════════════════════
// GitHub Stars
// ═══════════════════════════════════════════
function fetchGitHubStars() {
  fetch('https://api.github.com/repos/automotive-security/Automotive-Security-Glossary')
    .then(function(res) {
      if (!res.ok) throw new Error('GitHub API ' + res.status);
      return res.json();
    })
    .then(function(data) {
      var count = data.stargazers_count;
      var el = document.getElementById('ghStarCount');
      if (el && typeof count === 'number') {
        el.textContent = count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count;
      }
    })
    .catch(function() {
      var el = document.getElementById('ghStarCount');
      if (el) el.style.display = 'none';
    });
}

// ═══════════════════════════════════════════
// Relationship Graph
// ═══════════════════════════════════════════
function buildRelationMaps() {
  if (!GLOSSARY_DATA) return null;
  var forward = {};
  var allTerms = {};
  var termToCat = {};
  var allEntries = [];

  Object.keys(GLOSSARY_DATA.fullCategories).forEach(function(cat) {
    GLOSSARY_DATA.fullCategories[cat].forEach(function(e) {
      allEntries.push(e);
      forward[e.term] = (e.related || []).slice();
      allTerms[e.term] = true;
      termToCat[e.term] = cat;
    });
  });

  // Build inverse map: which terms point TO this term
  var inverse = {};
  allEntries.forEach(function(e) {
    (e.related || []).forEach(function(rel) {
      if (!inverse[rel]) inverse[rel] = [];
      if (inverse[rel].indexOf(e.term) === -1) inverse[rel].push(e.term);
    });
  });

  return { forward: forward, inverse: inverse, allTerms: allTerms, termToCat: termToCat };
}

function showRelationGraph(term) {
  if (!RELATION_MAP) return;
  var forward = RELATION_MAP.forward[term] || [];
  var inverse = RELATION_MAP.inverse[term] || [];
  var allTerms = RELATION_MAP.allTerms;
  var termToCat = RELATION_MAP.termToCat || {};

  var centerCat = termToCat[term] || null;

  // Collect unique related terms (center + direct neighbors)
  var relatedMap = {};
  relatedMap[term] = true;
  forward.forEach(function(t) { relatedMap[t] = true; });
  inverse.forEach(function(t) { relatedMap[t] = true; });

  // Collect categories of all involved terms
  var catNames = {};
  if (centerCat) catNames[centerCat] = true;
  Object.keys(relatedMap).forEach(function(t) {
    var c = termToCat[t];
    if (c) catNames[c] = true;
  });

  // Build node list — terms first, then categories
  var nodeList = Object.keys(relatedMap);
  var catList = Object.keys(catNames);

  var nodes = [];
  var termToIdx = {};
  var offset = 0;

  // Term nodes
  nodeList.forEach(function(t, idx) {
    termToIdx[t] = idx;
    var isCenter = t === term;
    var exists = !!allTerms[t];
    nodes.push({
      name: t,
      itemStyle: {
        color: isCenter ? '#5c6bc0' : (exists ? '#9fa8da' : '#e0e0e0')
      },
      symbolSize: isCenter ? 28 : (exists ? 20 : 14),
      category: 0,
      label: {
        show: true,
        fontSize: isCenter ? 13 : 11,
        fontWeight: isCenter ? 'bold' : 'normal'
      }
    });
  });
  offset = nodes.length;

  // Category nodes
  var catToIdx = {};
  catList.forEach(function(c, idx) {
    var gIdx = offset + idx;
    catToIdx[c] = gIdx;
    var isCenterCat = c === centerCat;
    nodes.push({
      name: c,
      itemStyle: {
        color: isCenterCat ? '#ff8f00' : '#ffb74d'
      },
      symbolSize: isCenterCat ? 24 : 18,
      symbol: 'roundRect',
      category: 1,
      label: { show: true }
    });
  });

  var edges = [];

  // Term-to-term edges
  forward.forEach(function(rel) {
    if (termToIdx[rel] !== undefined && rel !== term) {
      edges.push({ source: term, target: rel, lineStyle: { color: '#c5cae9', width: 1.5 } });
    }
  });
  inverse.forEach(function(src) {
    if (termToIdx[src] !== undefined && src !== term) {
      edges.push({ source: src, target: term, lineStyle: { color: '#c5cae9', width: 1.5 } });
    }
  });

  // Term-to-category edges
  nodeList.forEach(function(t) {
    var c = termToCat[t];
    if (c && catToIdx[c] !== undefined) {
      var isCtr = t === term;
      edges.push({
        source: t,
        target: c,
        lineStyle: {
          color: isCtr ? '#ff8f00' : '#ffe0b2',
          width: isCtr ? 2 : 1,
          type: 'dashed'
        }
      });
    }
  });

  // Render
  var dom = document.getElementById('relationGraph');
  if (graphChart) graphChart.dispose();
  graphChart = echarts.init(dom);
  graphChart.setOption({
    tooltip: { trigger: 'item', formatter: '{b}' },
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: nodeList.length > 20 ? 500 : 350,
        edgeLength: [80, 200],
        gravity: 0.08
      },
      roam: true,
      draggable: true,
      data: nodes,
      edges: edges,
      categories: [
        { name: 'Term', itemStyle: { color: '#5c6bc0' } },
        { name: 'Category', itemStyle: { color: '#ff8f00' } }
      ],
      edgeSymbol: ['none', 'arrow'],
      edgeSymbolSize: [0, 6],
      lineStyle: { curveness: 0.2 },
      label: { show: true, position: 'right', fontSize: 11 },
      emphasis: {
        focus: 'adjacency',
        lineStyle: { width: 3 }
      }
    }],
    backgroundColor: 'transparent'
  });

  graphChart.on('click', function(params) {
    if (params.dataType === 'node') {
      var name = params.name;
      if (name === term) return;
      // Category node → show all terms in this category
      if (catToIdx[name] !== undefined) {
        showCategoryGraph(name);
        return;
      }
      // Term node → show its graph
      if (allTerms[name]) {
        showRelationGraph(name);
      }
    }
  });

  document.getElementById('graphTitle').textContent = term + ' - Relation Graph';
  document.getElementById('graphModal').classList.remove('hidden');
  setTimeout(function() { graphChart.resize(); }, 100);
}

function closeRelationGraph() {
  document.getElementById('graphModal').classList.add('hidden');
}

// Escape key to close graph
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeRelationGraph();
});

// ═══════════════════════════════════════════
// Category Graph
// ═══════════════════════════════════════════
function showCategoryGraph(catName) {
  if (!GLOSSARY_DATA || !RELATION_MAP) return;
  var entries = GLOSSARY_DATA.fullCategories[catName] || [];
  var allTerms = RELATION_MAP.allTerms;

  var nodes = [];
  var edges = [];
  var nodeMap = {};

  // Center: the category node
  nodes.push({
    name: catName,
    itemStyle: { color: '#ff8f00' },
    symbolSize: 30,
    symbol: 'roundRect',
    category: 1,
    label: { show: true }
  });
  nodeMap[catName] = 0;

  // Terms in this category
  entries.forEach(function(e, idx) {
    var t = e.term;
    var gIdx = idx + 1;
    nodeMap[t] = gIdx;
    nodes.push({
      name: t,
      itemStyle: { color: '#9fa8da' },
      symbolSize: 20,
      category: 0,
      label: { show: true, fontSize: 11 }
    });
    edges.push({ source: catName, target: t, lineStyle: { color: '#ffe0b2', width: 1.5, type: 'dashed' } });
  });

  // Term-to-term edges within this category (from Related: field)
  var termNames = {};
  entries.forEach(function(e) { termNames[e.term] = true; });

  entries.forEach(function(e) {
    if (e.related) {
      e.related.forEach(function(rel) {
        if (termNames[rel] && nodeMap[rel] !== undefined && nodeMap[e.term] !== undefined && rel !== e.term) {
          edges.push({ source: e.term, target: rel, lineStyle: { color: '#c5cae9', width: 1 } });
        }
      });
    }
  });

  // Render
  var dom = document.getElementById('relationGraph');
  if (graphChart) graphChart.dispose();
  graphChart = echarts.init(dom);
  graphChart.setOption({
    tooltip: { trigger: 'item', formatter: '{b}' },
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 400,
        edgeLength: [100, 250],
        gravity: 0.15
      },
      roam: true,
      draggable: true,
      data: nodes,
      edges: edges,
      categories: [
        { name: 'Term', itemStyle: { color: '#9fa8da' } },
        { name: 'Category', itemStyle: { color: '#ff8f00' } }
      ],
      edgeSymbol: ['none', 'arrow'],
      edgeSymbolSize: [0, 6],
      lineStyle: { curveness: 0.2 },
      label: { show: true, position: 'right', fontSize: 11 },
      emphasis: {
        focus: 'adjacency',
        lineStyle: { width: 3 }
      }
    }],
    backgroundColor: 'transparent'
  });

  graphChart.on('click', function(params) {
    if (params.dataType === 'node') {
      var name = params.name;
      if (name === catName) return;
      if (allTerms[name]) {
        showRelationGraph(name);
      }
    }
  });

  document.getElementById('graphTitle').textContent = catName + ' - Category Graph';
  document.getElementById('graphModal').classList.remove('hidden');
  setTimeout(function() { graphChart.resize(); }, 100);
}

// ═══════════════════════════════════════════
// View Switching
// ═══════════════════════════════════════════
function switchView(viewName) {
  if (!GLOSSARY_DATA) return;
  currentView = viewName;

  document.querySelectorAll('#sidebarTopMenu .nav-link').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-view') === viewName);
  });

  // Mutual exclusion: only one item selected at a time
  var allCatItems = document.querySelectorAll('#sidebarCatMenu .nav-link');
  if (viewName === 'dashboard' || viewName === 'browse') {
    allCatItems.forEach(function(el) { el.classList.remove('active'); });
    if (viewName === 'browse') currentCat = null;
  }

  var dashView = document.getElementById('viewDashboard');
  var browseView = document.getElementById('viewBrowse');
  if (viewName === 'dashboard') {
    dashView.classList.remove('hidden');
    browseView.classList.add('hidden');
    setTimeout(renderCharts, 50);
  } else {
    dashView.classList.add('hidden');
    browseView.classList.remove('hidden');
    renderContent();
  }
}

// ═══════════════════════════════════════════
// Sidebar Category List
// ═══════════════════════════════════════════

// SVG icon paths (Feather-style 24x24, stroke-width 2)
var CAT_ICONS = {
  'Attack': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'Security': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  'Network Security': '<path d="M1 12s3.5-7 11-7 11 7 11 7-3.5 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
  'Vehicle Architecture': '<path d="M5 11l1.5-4h11l1.5 4M5 11v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5M5 11h14M7 8h10"/>',
  'Hardware Security': '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  'Cryptography': '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777z"/><path d="M22 12a10 10 0 01-10 10"/>',
  'Security Architecture': '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  'Vulnerability': '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  'Identity & Access Management': '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'Vehicle Security': '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
  'Diagnostics': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'Automotive Network': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  'Boot Security': '<path d="M18.36 6.64a9 9 0 11-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>',
  'Operating System': '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  'Penetration Testing': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>',
  'Intrusion Detection': '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  'Vehicle Connectivity': '<circle cx="12" cy="12" r="1"/><path d="M19.78 4.22a8 8 0 010 15.56"/><path d="M16.24 7.76a5 5 0 010 8.48"/>',
  'Android': '<line x1="8" y1="5" x2="8" y2="3"/><circle cx="8" cy="2" r="1.5"/><circle cx="16" cy="2" r="1.5"/><line x1="16" y1="5" x2="16" y2="3"/><path d="M6 10a6 6 0 0112 0"/><rect x="7" y="10" width="10" height="8" rx="2"/><line x1="7" y1="13" x2="3" y2="15"/><line x1="17" y1="13" x2="21" y2="15"/><line x1="9" y1="18" x2="9" y2="21"/><line x1="15" y1="18" x2="15" y2="21"/>',
  'Reverse Engineering': '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  'Threat Modeling': '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2"/>',
  'Standards': '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  'Side Channel': '<polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'ADAS': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/>',
  'Cloud Security': '<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>',
  'Functional Safety': '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'Security Tool': '<path d="M14.7 6.3a1 1 0 000-1.4l-1.4-1.4a1 1 0 00-1.4 0l-1.4 1.4a1 1 0 000 1.4l1.4 1.4a1 1 0 001.4 0l1.4-1.4z"/><path d="M10.4 10.4l-7.2 7.2a2 2 0 002.8 2.8l7.2-7.2"/>',
  'OTA': '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  'AUTOSAR': '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/>',
  'Malware': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  'Virtualization': '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  'Forensics': '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  'Supply Chain Security': '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',
  'AI': '<rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="9" y1="15" x2="9.01" y2="15"/><line x1="15" y1="15" x2="15.01" y2="15"/>'
};

var CAT_ICON_DEFAULT = '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>';

function getCatIcon(catName) {
  var paths = CAT_ICONS[catName] || CAT_ICON_DEFAULT;
  return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
}

function renderSidebar() {
  if (!GLOSSARY_DATA) return;
  var container = document.getElementById('sidebarCatMenu');
  var html = '';
  GLOSSARY_DATA.catStats.forEach(function(s) {
    var catName = s.name;
    html += '<li class="nav-link cat-link" data-cat="' + escAttr(catName) + '" onclick="selectCategory(\'' + escAttr(catName) + '\')">';
    html += getCatIcon(catName);
    html += '<span>' + escHtml(catName) + '</span>';
    html += '<span class="badge">' + s.value + '</span>';
    html += '</li>';
  });
  container.innerHTML = html;
}

function selectCategory(catName) {
  currentCat = catName;
  currentView = 'browse';
  document.getElementById('viewDashboard').classList.add('hidden');
  document.getElementById('viewBrowse').classList.remove('hidden');

  document.querySelectorAll('#sidebarCatMenu .nav-link').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-cat') === catName);
  });
  document.querySelectorAll('#sidebarTopMenu .nav-link').forEach(function(el) {
    el.classList.remove('active');
  });

  renderContent();
  document.getElementById('contentSearchInput').value = '';
}

// ═══════════════════════════════════════════
// Content Rendering
// ═══════════════════════════════════════════
function renderContent() {
  if (!GLOSSARY_DATA) return;
  var container = document.getElementById('contentBody');
  var rawInput = document.getElementById('contentSearchInput').value.trim();

  // Parse Google Dorking-style prefixes: A: (all fields), D: (description)
  // Default (no prefix): term only
  var scope = 'term';   // 'term' | 'all' | 'desc'
  var query = rawInput;
  if (/^A:\s*/i.test(query)) {
    scope = 'all';
    query = query.replace(/^A:\s*/i, '');
  } else if (/^D:\s*/i.test(query)) {
    scope = 'desc';
    query = query.replace(/^D:\s*/i, '');
  } else if (/^A\s+/i.test(query)) {
    scope = 'all';
    query = query.replace(/^A\s+/i, '');
  } else if (/^D\s+/i.test(query)) {
    scope = 'desc';
    query = query.replace(/^D\s+/i, '');
  }
  var searchText = query.toLowerCase().trim();

  var entries;
  if (currentCat) {
    entries = GLOSSARY_DATA.fullCategories[currentCat] || [];
    document.getElementById('contentTitle').textContent = currentCat;
  } else {
    entries = [];
    var cats = Object.keys(GLOSSARY_DATA.fullCategories);
    cats.forEach(function(cat) {
      var catEntries = GLOSSARY_DATA.fullCategories[cat];
      catEntries.forEach(function(e) { entries.push(e); });
    });
    // Sort alphabetically
    entries.sort(function(a, b) {
      return a.term.toLowerCase().localeCompare(b.term.toLowerCase());
    });
    document.getElementById('contentTitle').textContent = 'All Terms';
  }

  var matched = entries;
  if (searchText) {
    matched = entries.filter(function(e) {
      if (scope === 'desc') {
        return (e.description || '').toLowerCase().indexOf(searchText) !== -1;
      } else if (scope === 'all') {
        return (e.term || '').toLowerCase().indexOf(searchText) !== -1 ||
               (e.description || '').toLowerCase().indexOf(searchText) !== -1 ||
               (e.full_name || '').toLowerCase().indexOf(searchText) !== -1;
      } else {
        // Default: term only
        return (e.term || '').toLowerCase().indexOf(searchText) !== -1;
      }
    });
  }

  var meta = matched.length + ' entries';
  if (currentCat && GLOSSARY_DATA.fullCategories[currentCat]) {
    meta = 'Showing ' + matched.length + ' of ' + entries.length + ' entries';
  }
  if (searchText) {
    var scopeLabel = (scope === 'desc') ? ' [description]' : (scope === 'all') ? ' [all fields]' : ' [term]';
    meta += ' matching &quot;' + escHtml(searchText) + '&quot;' + scopeLabel;
  }
  document.getElementById('contentMeta').innerHTML = meta;

  var html = '';
  if (matched.length === 0) {
    html = '<div class="no-result">No matching entries found</div>';
  } else {
    matched.forEach(function(e) {
      var fnHtml = e.full_name ? '<span class="fullname">(' + escHtml(e.full_name) + ')</span>' : '';
      var relatedHtml = '';
      if (e.related && e.related.length) {
        relatedHtml = '<div class="meta"><strong>Related:</strong> ' + e.related.map(escHtml).join(', ') + '</div>';
      }
      var catTag = '';
      if (!currentCat) {
        catTag = '<div class="cat-tag" onclick="event.stopPropagation();selectCategory(\'' + escAttr(e.category) + '\')">' + escHtml(e.category) + '</div>';
      }
      html += '<div class="entry-item" onclick="toggleEntry(this)">';
      html += '<div class="entry-row">';
      html += '<span class="term">' + escHtml(e.term) + '</span>' + fnHtml;
      html += '<span class="entry-spacer"></span>';
      html += '<button class="rel-btn" onclick="event.stopPropagation();showRelationGraph(\'' + escAttr(e.term) + '\')" title="Relation graph"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><circle cx="12" cy="5" r="2.5"/><line x1="7.5" y1="12" x2="16.5" y2="12"/><line x1="8" y1="10" x2="11" y2="6.5"/><line x1="16" y1="10" x2="13" y2="6.5"/></svg></button>';
      html += '</div>';
      html += '<div class="desc">' + escHtml(e.description || '') + relatedHtml + catTag + '</div>';
      html += '</div>';
    });
  }
  container.innerHTML = html;
}

function toggleEntry(el) {
  var desc = el.querySelector('.desc');
  if (desc) desc.classList.toggle('show');
}

function onSearch() {
  renderContent();
}

// ═══════════════════════════════════════════
// Charts
// ═══════════════════════════════════════════
function renderCharts() {
  if (!GLOSSARY_DATA) return;
  var catDom = document.getElementById('chartCategory');
  var fcDom = document.getElementById('chartFirstChar');
  if (!catDom || !fcDom) return;
  if (catDom.clientWidth === 0) return;

  if (catChart) catChart.dispose();
  if (fcChart) fcChart.dispose();

  catChart = echarts.init(catDom);
  var cd = GLOSSARY_DATA.catStats;
  // Limit to top 25 for readability
  var cdDisplay = cd.slice(0, 25);
  catChart.setOption({
    title: { text: 'Entries per Category (Top 25)', left: 'center', textStyle: { fontSize: 14 } },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '20%', top: '18%', containLabel: true },
    xAxis: { type: 'category', data: cdDisplay.map(function(d){return d.name;}), axisLabel: { rotate: 40, fontSize: 10 } },
    yAxis: { type: 'value', show: false },
    series: [{
      type: 'bar', data: cdDisplay.map(function(d){return d.value;}),
      itemStyle: { color: new echarts.graphic.LinearGradient(0,0,0,1,[
        {offset:0,color:'#5c6bc0'},{offset:1,color:'#9fa8da'}
      ]) },
      label: { show: true, position: 'top', fontSize: 10 }
    }],
    backgroundColor: 'transparent'
  });

  catChart.on('click', function(params) {
    selectCategory(params.name);
  });

  fcChart = echarts.init(fcDom);
  var fd = GLOSSARY_DATA.firstCharStats;
  fcChart.setOption({
    title: { text: 'Entries per First Letter', left: 'center', textStyle: { fontSize: 14 } },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '3%', bottom: '10%', top: '18%', containLabel: true },
    xAxis: { type: 'category', data: fd.map(function(d){return d.name;}) },
    yAxis: { type: 'value', show: false },
    series: [{
      type: 'bar', data: fd.map(function(d){return d.value;}),
      itemStyle: { color: function(p){ return ['#ef5350','#ab47bc','#5c6bc0','#42a5f5','#26a69a','#66bb6a','#ffa726','#8d6e63'][p.dataIndex%8]; } },
      label: { show: true, position: 'top', fontSize: 10 }
    }],
    backgroundColor: 'transparent'
  });
}

// ═══════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════
function escHtml(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(s) {
  return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;');
}

// ═══════════════════════════════════════════
// Init
// ═══════════════════════════════════════════
function init() {
  if (!GLOSSARY_DATA) return;
  renderSidebar();
  renderCharts();
}

// Resize charts with window
window.addEventListener('resize', function() {
  if (catChart) catChart.resize();
  if (fcChart) fcChart.resize();
  if (graphChart) graphChart.resize();
});

// Bootstrap — load data on page start
loadData();

// Baidu Analytics
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ac13cdc4658b85224a344b0e187b0bf9";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();