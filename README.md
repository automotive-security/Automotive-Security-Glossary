# Automotive Security Glossary

**Automotive Security Glossary** is a glossary of automotive cybersecurity terminology that provides clear and concise definitions of automotive security concepts. It is designed to serve as a practical reference for security researchers, engineers, students, and automotive professionals, promoting a consistent understanding of automotive security terminology and best practices.

## A
### A/B OTA Upgrade
**Category:** OTA
A firmware update strategy using dual partitions (A and B) to ensure safe upgrade and rollback capability.
**Related:** A/B Slot, Atomic OTA

### A/B Slot
**Category:** OTA
A dual-partition firmware update mechanism that stores the active and inactive system images separately, enabling fail-safe over-the-air (OTA) updates with rollback capability.
**Related:** OTA, Bootloader, Rollback Protection
### A2B
**Full Name:** Automotive Audio Bus
**Category:** Automotive Network
A high-bandwidth digital audio bus developed by Analog Devices for automotive infotainment and audio distribution.
**Related:** MOST, Ethernet AVB
### AAD
**Full Name:** Additional Authenticated Data
**Category:** Cryptography
Data authenticated but not encrypted in authenticated encryption algorithms such as AES-GCM.
**Related:** AES-GCM, AEAD
### AADL
**Full Name:** Architecture Analysis & Design Language
**Category:** System Engineering
A modeling language used to describe embedded system architectures, including software, hardware, timing, and safety properties.
**Related:** AUTOSAR, SysML
### ABI
**Full Name:** Application Binary Interface
**Category:** Software
A low-level interface defining binary compatibility between applications, libraries, and operating systems.
### ABI Compatibility
**Category:** Software Security
Ensures binary-level compatibility between compiled applications and system libraries across updates.
### ABR
**Full Name:** Automatic Boot Recovery
**Category:** Boot Security
A mechanism that restores a bootable firmware image after update failures or corrupted firmware.
### ABR Mechanism
**Category:** Boot Security
Automatic Boot Recovery mechanism used to restore system bootability after failed updates.
### Absolute Address
**Category:** Memory
A fixed memory address used directly by processors or firmware.
### Access Control
**Category:** Security
The process of restricting access to vehicle resources according to identities, permissions, or security policies.
**Related:** RBAC, ACL
### Access Control Decision Point (ACDP)
**Category:** Access Control
A logical entity that evaluates access requests based on policies and attributes.
### Access Control Enforcement Point (ACEP)
**Category:** Access Control
A system component that enforces access control decisions in runtime.
### Access Control List (ACL)
**Category:** Authorization
A list defining which users, devices, or applications are permitted to access specific resources.
### Access Point (AP)
**Category:** Wireless
A wireless networking device providing Wi-Fi connectivity.
### Access Token
**Category:** Authentication
A credential representing successful authentication and authorization to access protected resources.
### Account Lockout
**Category:** Authentication
A security mechanism that temporarily disables authentication after repeated failed login attempts.
### ACK
**Full Name:** Acknowledgment
**Category:** Communication
A message confirming successful reception of transmitted data.
### Acoustic Attack
**Category:** Side-Channel Attack
An attack that extracts sensitive information by analyzing acoustic emissions from electronic devices.
### ACRN
**Category:** Hypervisor
An open-source reference hypervisor for embedded automotive systems, developed by Intel, designed for safety-critical real-time applications and consolidation of mixed-criticality workloads.
**Related:** Hypervisor, QNX Hypervisor, COQOS
### Active Attack
**Category:** Threat
An attack that modifies, injects, interrupts, or destroys communications or system behavior.
### Active Attack Surface
**Category:** Threat Modeling
The portion of the attack surface that is currently exposed and reachable during system operation.
### Active Diagnostic Session
**Category:** UDS
A diagnostic communication session currently established between a tester and an ECU.
### Active Safety
**Category:** Vehicle Safety
Technologies designed to prevent accidents, such as ABS, ESC, and AEB.
### Adaptive Cruise Control (ACC)
**Category:** ADAS
A driver assistance function that automatically adjusts vehicle speed to maintain a safe distance from preceding vehicles.
### Adaptive Security Architecture
**Category:** Security Architecture
A security design approach that dynamically adjusts controls based on runtime conditions and threats.
### ADAS
**Full Name:** Advanced Driver Assistance Systems
**Category:** Vehicle System
Electronic systems assisting drivers with perception, decision-making, and vehicle control.
### ADB
**Full Name:** Android Debug Bridge
**Category:** Android
A command-line tool for communicating with Android devices for debugging and development.
### ADC
**Full Name:** Analog-to-Digital Converter
**Category:** Hardware
A hardware component converting analog signals into digital values.
### Address Space Layout Randomization (ASLR)
**Category:** Memory Protection
A security technique that randomizes memory layout to increase resistance against memory corruption attacks.
### Address Translation
**Category:** Memory Management
The mapping between virtual and physical memory addresses used in embedded and ECU systems.
### AEAD
**Full Name:** Authenticated Encryption with Associated Data
**Category:** Cryptography
An encryption method providing confidentiality, integrity, and authenticity.
### AER
**Full Name:** Advanced Error Reporting
**Category:** Hardware / PCIe Security
A mechanism in PCIe systems for reporting and handling hardware errors, useful in forensic analysis.
### AES
**Full Name:** Advanced Encryption Standard
**Category:** Cryptography
A symmetric encryption algorithm widely used for securing automotive communication and stored data.
### AES-CBC
**Category:** Cryptography
AES operating in Cipher Block Chaining mode.
### AES-CCM
**Category:** Cryptography
An authenticated encryption mode combining CTR encryption with CBC-MAC authentication.
### AES-GCM
**Category:** Cryptography
An authenticated encryption mode combining counter-mode encryption with Galois authentication.
### AF_ALG
**Category:** Linux
A Linux socket interface providing access to kernel cryptographic APIs.
### AF_CAN
**Category:** Linux
A Linux socket family used for CAN bus communication.
### AF_PACKET
**Category:** Linux
A Linux socket family enabling direct access to Layer 2 network packets.
### AF_QIPCRTR
**Category:** Qualcomm
A Linux socket family used for Qualcomm IPC Router communication.
### AF_UNIX
**Category:** Linux
A socket family supporting inter-process communication on the same host.
### AF_XDP
**Category:** Linux Networking
A high-performance Linux socket type used for fast packet processing, often used in IDS/IPS systems.
### AFL
**Full Name:** American Fuzzy Lop
**Category:** Fuzzing
A coverage-guided fuzzing framework widely used for vulnerability discovery.
### AFL++
**Category:** Fuzzing
An enhanced version of AFL with improved instrumentation, mutation strategies, and performance.
### Air Gap
**Category:** Security
A security measure physically isolating systems from external networks.
### Air Interface
**Category:** Cellular
The radio communication interface between mobile devices and cellular base stations.
### Airbag ECU
**Category:** ECU
An electronic control unit responsible for monitoring crash sensors and deploying airbags.
### Aircrack-ng
**Category:** Security Tool
A suite of tools for auditing wireless networks (802.11 a/b/g), including packet capture, WEP/WPA cracking, and evil twin attack capabilities; used in automotive Wi-Fi penetration testing.
**Related:** Evil Twin Attack, WPA2, BSSID, ESSID, WiFi Pineapple
### Algorithm Agility
**Category:** Cryptography
The ability of a system to replace cryptographic algorithms without significant architectural changes.
### Alignment
**Category:** Memory
The arrangement of data in memory according to processor alignment requirements.
### ALKS
**Full Name:** Automated Lane Keeping System
**Category:** ADAS
A standardized autonomous driving function that maintains lane position without driver input under defined conditions.
### Allowlist
**Category:** Security
A list of explicitly permitted applications, commands, devices, or communication endpoints.
### Android Activity
**Category:** Android
A user interface component representing a single application screen.
### Android Auto
**Category:** Vehicle Connectivity
A smartphone projection technology developed by Google that mirrors Android device functionality onto a vehicle's infotainment display, creating a potential attack surface through USB and Bluetooth connections.
**Related:** CarPlay, MirrorLink, SmartDeviceLink
### Android Automotive Emulator
**Category:** Development
A virtual environment used to develop and test Android Automotive applications.
### Android Automotive OS (AAOS)
**Category:** Operating System
Google's Android-based operating system designed specifically for in-vehicle infotainment systems.
### Android Binder IPC
**Category:** Android
Android's primary inter-process communication mechanism used by system services and applications.
### Android Broadcast Receiver
**Category:** Android
A component that receives and processes broadcast messages from the operating system or applications.
### Android Car Service
**Category:** Android Automotive
A privileged system service that manages communication between Android applications and vehicle hardware.
### Android Content Provider
**Category:** Android
A component that securely shares structured application data.
### Android Fastboot
**Category:** Bootloader
A protocol and tool used for flashing partitions and debugging Android devices.
### Android HAL
**Full Name:** Hardware Abstraction Layer
**Category:** Android
A software layer providing standardized interfaces between Android framework components and hardware.
### Android Hardware-backed Keystore
**Category:** Hardware Security
A keystore implementation that stores keys inside secure hardware such as a TEE or StrongBox.
### Android Intent
**Category:** Android
A messaging object used to request actions between Android components.
### Android Keystore
**Category:** Android Security
A secure storage system for cryptographic keys, often backed by hardware security modules.
### Android Open Source Project (AOSP)
**Category:** Operating System
The open-source project providing the base Android operating system.
### Android Permission Model
**Category:** Android Security
The framework controlling application access to protected system resources.
### Android Recovery
**Category:** System Recovery
A minimal runtime environment used for factory reset, OTA installation, and recovery operations.
### Android SELinux
**Category:** Operating System Security
The mandatory access control framework used by Android to isolate applications and system services.
### Android Service
**Category:** Android
A background component that performs long-running operations without a user interface.
### Android Vehicle HAL (VHAL)
**Category:** Android Automotive
A hardware abstraction layer providing vehicle property access for Android Automotive OS.
### Android Vehicle Property
**Category:** Android Automotive
A standardized property representing vehicle information such as speed, gear position, or HVAC status.
### Android Verified Boot (AVB)
**Category:** Secure Boot
A boot integrity verification mechanism ensuring only trusted operating system images are loaded.
### Anti-Cloning
**Category:** Security
Mechanisms designed to prevent unauthorized duplication of software, firmware, or hardware identities.
### Anti-Debugging
**Category:** Software Protection
Techniques designed to prevent or detect debugging during software execution.
### Anti-Malware
**Category:** Endpoint Security
Software that detects, prevents, and removes malicious software.
### Anti-Replay
**Category:** Communication Security
A protection mechanism preventing attackers from successfully replaying previously captured messages.
### Anti-Rollback
**Category:** Firmware Security
A mechanism preventing installation of firmware versions older than an approved security baseline.
### Anti-Spoofing
**Category:** Network Security
Mechanisms designed to detect and prevent identity spoofing attacks.
### Anti-Tamper
**Category:** Hardware Security
Techniques intended to detect or resist physical or logical tampering.
### Anti-Theft System
**Category:** Vehicle Security
Electronic systems designed to prevent unauthorized vehicle access or theft.
### AP Isolation
**Category:** Wireless Security
A wireless security feature that prevents direct communication between clients connected to the same access point.
### APDU
**Full Name:** Application Protocol Data Unit
**Category:** Smart Card
The communication unit exchanged between a smart card and a card reader according to ISO/IEC 7816.
**Related:** eSIM, eUICC, Secure Element
### APEX
**Category:** Android System
A modular system update format used in Android for delivering low-level system components such as native libraries and runtime modules.
**Related:** Android OTA, System Update
### API Abuse
**Category:** API Security
The misuse of legitimate API functionality to bypass intended restrictions or consume excessive resources.
### API Authentication
**Category:** API Security
The process of verifying the identity of API clients before granting access.
### API Authorization
**Category:** API Security
The process of determining whether an authenticated API client has permission to perform requested operations.
### API Endpoint
**Category:** API Security
A specific URL or interface through which an API service is accessed.
### API Enumeration
**Category:** Security Testing
The process of identifying available API endpoints, methods, parameters, and versions.
### API Fuzzing
**Category:** Fuzz Testing
A testing technique that sends malformed or unexpected requests to APIs to identify vulnerabilities.
### API Gateway
**Category:** Cloud Security
A service that manages authentication, routing, rate limiting, and monitoring for APIs.
### API Gateway Authentication
**Category:** API Security
The authentication mechanisms enforced by an API gateway before forwarding requests.
### API Gateway Rate Limiting
**Category:** API Security
A mechanism that limits the number of API requests within a specified period to mitigate abuse and denial-of-service attacks.
### API Key
**Category:** Authentication
A unique identifier used to authenticate API clients.
### API Rate Limiting
**Category:** API Security
A mechanism that limits the number of requests accepted from clients within a defined period.
### API Security
**Category:** Cloud Security
Practices and technologies protecting APIs from unauthorized access and attacks.
### API Security Testing
**Category:** Security Assessment
The evaluation of APIs for authentication, authorization, input validation, and business logic vulnerabilities.
### API Token
**Category:** Authentication
A credential issued to software clients for accessing protected APIs.
### APK
**Full Name:** Android Package
**Category:** Android
The package format used to distribute Android applications.
### APK Signature Scheme
**Category:** Android Security
The cryptographic signing mechanism used to verify the authenticity and integrity of Android application packages.
### APN
**Full Name:** Access Point Name
**Category:** Cellular Network
The configuration that identifies the gateway between a mobile network and an external IP network.
### APN Authentication
**Category:** Cellular Security
The authentication process used when establishing a mobile data connection through an APN.
### APN Configuration
**Category:** Cellular Security
The parameters defining how a cellular device connects to a carrier's packet data network.
### APN Isolation
**Category:** Mobile Network Security
A carrier feature that logically separates traffic belonging to different APNs.
### App Sandbox
**Category:** Android Security
An operating system security mechanism isolating applications from each other.
### Application Firewall
**Category:** Network Security
A firewall designed to inspect and filter application-layer traffic.
### Application Hardening
**Category:** Software Security
The process of reducing the attack surface of an application through secure configuration and protection mechanisms.
### Application Isolation
**Category:** Operating System
A security mechanism that prevents applications from interfering with each other by enforcing execution boundaries.
### Application Layer Gateway (ALG)
**Category:** Network Security
A network component that understands and manages specific application-layer protocols.
### Application Layer Security
**Category:** Network Security
Security mechanisms implemented at the application layer such as authentication, encryption, and validation.
### Application Lifecycle Management (ALM)
**Category:** Software Engineering
The process of managing application development, deployment, update, and retirement.
### Application Manifest
**Category:** Android
A configuration file describing application components, permissions, and capabilities.
### Application Programming Interface (API)
**Category:** Software
A defined interface enabling software components to communicate with one another.
### Application Security Testing (AST)
**Category:** Security Testing
The practice of evaluating software applications for security vulnerabilities using static, dynamic, or interactive techniques.
### Application Whitelisting
**Category:** Endpoint Security
A security policy that permits only explicitly approved applications to execute.
### Approval Workflow
**Category:** Security Process
A defined process requiring authorized review and approval before changes or deployments are accepted.
### Arbitration
**Category:** CAN Bus
The process by which CAN nodes determine which message gains bus access based on identifier priority.
### Arm CCA (Arm Confidential Compute Architecture)
**Category:** Hardware Security Architecture
Arm's security architecture providing hardware-enforced realm-based isolation for confidential computing, allowing multiple tenants (e.g., vehicle OEM, third-party apps, diagnostics) to execute in isolated realms with hardware-assured confidentiality and integrity protection against privileged software attacks.
**Related:** ARM TrustZone, TEE, Hypervisor, Realm Management Extension (RME)
### ARM TrustZone
**Category:** Hardware Security
A hardware security architecture separating secure and non-secure execution environments.
### ARP
**Full Name:** Address Resolution Protocol
**Category:** Network Protocol
A protocol used to map IPv4 addresses to MAC addresses on a local network.
### ARP Cache
**Category:** Network
A table storing recently resolved IP-to-MAC address mappings.
### ARP Cache Poisoning
**Category:** Network Attack
A technique that inserts forged ARP entries into a victim's ARP cache to redirect network traffic.
### ARP Inspection
**Category:** Network Security
A security mechanism that validates ARP packets to prevent spoofing attacks.
### ARP Spoofing
**Category:** Network Attack
An attack that sends forged ARP messages to redirect network traffic through an attacker's device.
### ARP Storm
**Category:** Network Attack
A condition where excessive ARP traffic disrupts network communication.
### ARP Table
**Category:** Networking
A local database containing IP address and MAC address mappings.
### ARQ
**Full Name:** Automatic Repeat reQuest
**Category:** Communication Protocol
A reliability mechanism that retransmits lost or corrupted packets.
### Array Bounds Check
**Category:** Software Security
A validation process ensuring array accesses remain within valid memory boundaries.
### Array Index Out-of-Bounds
**Category:** Vulnerability
A programming error in which an array is accessed outside its allocated range.
### Artificial Neural Network (ANN)
**Category:** Artificial Intelligence
A computational model inspired by biological neural networks and widely used in autonomous driving applications.
### ARXML
**Full Name:** AUTOSAR XML
**Category:** AUTOSAR
The XML configuration format used throughout AUTOSAR projects.
### ASAM
**Full Name:** Association for Standardization of Automation and Measuring Systems
**Category:** Standard
An international organization developing standards for automotive development, testing, calibration, and diagnostics.
### ASAM A2L
**Category:** Calibration
A standardized file format describing ECU measurement and calibration parameters.
### ASAM MCD-3D
**Category:** Diagnostics
A standard defining interfaces between diagnostic applications and vehicle communication servers.
### ASAM MDF
**Full Name:** Measurement Data Format
**Category:** Data Logging
A standardized file format for storing automotive measurement and logging data.
### ASAM ODX
**Full Name:** Open Diagnostic Data Exchange
**Category:** Diagnostics
An XML-based standard describing diagnostic services, ECU functions, and communication parameters.
### ASAM XIL
**Category:** Testing
A standardized interface supporting Hardware-in-the-Loop (HIL), Software-in-the-Loop (SIL), and Model-in-the-Loop (MIL) testing.
### ASIL
**Full Name:** Automotive Safety Integrity Level
**Category:** Functional Safety
A risk classification defined in ISO 26262 ranging from ASIL A to ASIL D.
### ASIL A
**Category:** Functional Safety
The lowest Automotive Safety Integrity Level defined by ISO 26262.
### ASIL B
**Category:** Functional Safety
A moderate Automotive Safety Integrity Level requiring additional safety measures.
### ASIL C
**Category:** Functional Safety
A high Automotive Safety Integrity Level requiring rigorous development and verification.
### ASIL D
**Category:** Functional Safety
The highest Automotive Safety Integrity Level defined by ISO 26262.
### ASIL Decomposition
**Category:** Functional Safety
A technique that splits a safety requirement into redundant elements to reduce implementation complexity.
### ASN.1
**Full Name:** Abstract Syntax Notation One
**Category:** Data Format
A standard language for describing structured data exchanged between systems.
### ASPICE (Automotive SPICE)
**Category:** Process Assessment
A process assessment model for automotive software development derived from ISO/IEC 15504 (SPICE), used by OEMs to evaluate supplier software development capabilities and maturity.
**Related:** ISO 21434, VDA, TISAX
### Asset
**Category:** Threat Modeling
Anything of value requiring protection, including hardware, software, data, credentials, and services.
### Asset Criticality
**Category:** Risk Assessment
A measure of the importance of an asset based on its impact on safety, operations, or cybersecurity.
### Asset Discovery
**Category:** Asset Management
The process of identifying hardware, software, services, communication interfaces, and digital assets within a vehicle ecosystem.
### Asset Exposure Analysis
**Category:** Threat Modeling
The process of evaluating how and where assets are exposed to potential attackers.
### Asset Fingerprinting
**Category:** Asset Management
The identification of devices based on unique hardware, software, protocol, or behavioral characteristics.
### Asset Inventory
**Category:** Asset Management
A maintained list of hardware, software, ECUs, services, certificates, and digital assets.
### Asset Mapping
**Category:** Threat Modeling
The process of documenting relationships among ECUs, applications, cloud services, and communication channels.
### Asset Owner
**Category:** Governance
The individual or organization responsible for the protection and management of a specific asset.
### Asset Visibility
**Category:** Asset Management
The ability to continuously identify and monitor connected assets.
### Assisted Driving
**Category:** ADAS
Driving functionality in which the driver remains responsible while automation assists with specific tasks.
### Asymmetric Cryptography
**Category:** Cryptography
A cryptographic system using mathematically related public and private keys.
### Asymmetric Key
**Category:** Cryptography
A cryptographic key pair consisting of a public key and a private key.
### Asynchronous Communication
**Category:** Communication
Communication in which participants operate independently without requiring synchronized timing.
### Asynchronous ECU
**Category:** ECU
An electronic control unit operating independently of synchronized communication cycles.
### Atomic Operation
**Category:** Software Engineering
An operation that is completed entirely or not executed at all, without intermediate observable states.
### Atomic Update
**Category:** OTA
A software update process that either completes successfully or leaves the original software unchanged.
### Attack Attribution
**Category:** Threat Intelligence
The process of identifying the likely source or origin of a cyber attack.
### Attack Campaign
**Category:** Threat Intelligence
A coordinated series of cyber attacks conducted to achieve specific objectives.
### Attack Chain
**Category:** Threat Intelligence
A sequence of attacker actions performed to achieve an objective.
### Attack Chain Modeling
**Category:** Threat Intelligence
A structured representation of multi-step attack progression from initial access to final objective.
### Attack Detection
**Category:** Intrusion Detection
The identification of malicious activities targeting vehicle systems or infrastructure.
### Attack Graph
**Category:** Threat Modeling
A graphical representation of possible attack paths through interconnected vulnerabilities.
### Attack Path
**Category:** Threat Modeling
A possible sequence of vulnerabilities or weaknesses leading to successful compromise.
### Attack Pattern
**Category:** Threat Intelligence
A reusable description of techniques commonly employed by attackers.
### Attack Prerequisite
**Category:** Threat Modeling
A condition that must be satisfied before an attack can be successfully executed.
### Attack Resistance
**Category:** Security Engineering
The ability of a system to withstand deliberate cyber attacks.
### Attack Scenario
**Category:** Threat Modeling
A structured description of how an attacker could compromise a system.
### Attack Simulation
**Category:** Security Testing
The controlled execution of realistic attack techniques to evaluate security defenses.
### Attack Simulation Platform
**Category:** Security Testing
A platform used to emulate realistic attack scenarios for evaluating cybersecurity controls.
### Attack Surface
**Category:** Security
The total collection of interfaces through which attackers may interact with a system.
### Attack Surface Analysis
**Category:** Threat Modeling
The systematic identification and evaluation of all externally reachable interfaces, services, communication channels, and entry points that could be exploited by an attacker.
**Related:** Attack Surface, Threat Modeling
### Attack Surface Enumeration
**Category:** Security Assessment
The process of discovering exposed assets, services, ports, APIs, protocols, and interfaces that contribute to the attack surface.
### Attack Surface Reduction
**Category:** Security Engineering
Techniques used to minimize exposed interfaces, services, and attack vectors.
### Attack Toolchain
**Category:** Offensive Security
A collection of tools used in sequence for reconnaissance, exploitation, and persistence.
### Attack Tree
**Category:** Threat Modeling
A hierarchical representation of attack goals and possible attack methods.
### Attack Tree Analysis
**Category:** Threat Modeling
A structured analysis method that evaluates attack paths using hierarchical attack trees to estimate likelihood and impact.
### Attack Vector
**Category:** Security
The method or pathway used by an attacker to compromise a system.
### Attacker Model
**Category:** Threat Modeling
A description of an attacker's capabilities, objectives, resources, privileges, and assumptions.
### Attestation
**Category:** Trusted Computing
A process proving the integrity or authenticity of hardware or software.
### Attestation Evidence
**Category:** Trusted Computing
Cryptographic proof used to validate system integrity or boot state.
### Attestation Key
**Category:** Trusted Computing
A cryptographic key used to prove the integrity or identity of a hardware or software component.
### Attribute Certificate
**Category:** PKI
A digital certificate that binds authorization attributes or roles to an identity rather than a public key.
### Attribute Validation
**Category:** Identity Management
The process of verifying the correctness and legitimacy of identity attributes before authorization decisions are made.
### Attribute-Based Access Control (ABAC)
**Category:** Access Control
An authorization model that evaluates attributes of users, resources, and environments to make access decisions.
### Attribute-Based Encryption (ABE)
**Category:** Cryptography
An encryption scheme where decryption depends on attributes rather than individual identities.
### Audit
**Category:** Security Management
A systematic examination of systems, configurations, processes, or records to verify compliance with security policies, standards, or regulations.
**Related:** Compliance, Assessment
### Audit Event
**Category:** Logging
A recorded security-relevant action generated by users, applications, operating systems, or network devices.
### Audit Log
**Category:** Logging
A chronological record of security-relevant events used for monitoring, investigation, and forensic analysis.
### Audit Policy
**Category:** Security Policy
Rules defining which security events must be logged and how logs are retained and protected.
### Audit Record
**Category:** Logging
A structured entry describing a single audited event.
### Audit Trail
**Category:** Forensics
A complete sequence of recorded activities that enables reconstruction of system events and user actions.
### Auditability
**Category:** Governance
The capability of a system to produce sufficient evidence for compliance verification and forensic investigations.
### Augmented Reality Head-Up Display (AR-HUD)
**Category:** HMI
A display system projecting navigation and driving information onto the windshield using augmented reality techniques.
### Authentication
**Category:** Security
The process of verifying the identity of users, devices, or services.
### Authentication Bypass
**Category:** Vulnerability
A security flaw that allows an attacker to gain access without successfully completing the authentication process.
### Authentication Context
**Category:** Authentication
Information describing how and under what conditions an identity was authenticated.
### Authentication Context Class Reference (ACR)
**Category:** Identity Management
A parameter indicating the strength or method of authentication used.
### Authentication Credential
**Category:** Authentication
Evidence presented to verify an identity, including passwords, certificates, cryptographic keys, or biometrics.
### Authentication Factor
**Category:** Authentication
A category of evidence used to verify identity, such as knowledge (password), possession (token), or inherence (biometric).
### Authentication Failure
**Category:** Authentication
An unsuccessful attempt to verify the identity of a user, device, or service.
### Authentication Failure Threshold
**Category:** Authentication
The maximum number of consecutive failed authentication attempts allowed before protective actions are taken.
### Authentication Protocol
**Category:** Security Protocol
A protocol defining how identities are verified during communication.
### Authentication Protocol Attack
**Category:** Attack Technique
An attack targeting weaknesses in authentication protocols to impersonate users or devices.
### Authentication Replay
**Category:** Authentication Attack
An attack in which previously captured authentication messages are resent to obtain unauthorized access.
### Authentication Server
**Category:** Identity Management
A server responsible for validating credentials and issuing authentication decisions or tokens.
### Authentication Timeout
**Category:** Authentication
The period after which an authenticated session must be revalidated.
### Authentication Token
**Category:** Authentication
A cryptographically protected token representing an authenticated identity.
### Authentication Vector
**Category:** Cellular Security
A collection of cryptographic parameters used during subscriber authentication in cellular networks.
### Authority Key Identifier (AKI)
**Category:** PKI
An X.509 certificate extension identifying the public key corresponding to the certificate issuer.
### Authorization
**Category:** Security
The process of determining what authenticated entities are permitted to do.
### Authorization Boundary
**Category:** Access Control
A logical separation defining the limits of permissions granted to authenticated entities.
### Authorization Context
**Category:** Access Control
The environmental and identity-based conditions used during authorization decisions.
### Authorization Decision
**Category:** Access Control
The result of evaluating whether an authenticated subject is permitted to perform a requested action.
### Authorization Policy
**Category:** Access Control
A set of rules determining which actions authenticated entities are allowed to perform.
### Authorization Server
**Category:** Identity Management
A server that grants authorization to clients after validating permissions.
### Authorization Token
**Category:** Authorization
A token representing permissions granted to an authenticated subject.
### Authorized Diagnostic Tool
**Category:** Diagnostics
A diagnostic device permitted to access protected vehicle functions based on security policies.
### Authorized Firmware
**Category:** Firmware Security
Firmware that has been authenticated and approved for installation by the manufacturer.
### Auto Provisioning
**Category:** Device Management
The automatic configuration and enrollment of devices into a managed environment.
### Auto Recovery
**Category:** System Reliability
A mechanism that automatically restores normal system operation following failures or crashes.
### Auto Update
**Category:** OTA
The automated downloading, verification, and installation of software updates.
### Auto-Discovery
**Category:** Network Management
A mechanism that automatically detects devices, services, or network resources.
### Auto-ISAC
**Category:** Threat Intelligence
The Automotive Information Sharing and Analysis Center, an industry-wide organization for sharing cybersecurity threat intelligence and best practices among automotive stakeholders.
**Related:** C-Auto-ISAC, TARA, Threat Intelligence
### Auto-Negotiation
**Category:** Automotive Ethernet
A protocol that allows connected Ethernet devices to automatically determine communication parameters.
### Automatic Certificate Management
**Category:** PKI
The automated enrollment, renewal, revocation, and lifecycle management of digital certificates.
### Automatic Emergency Braking (AEB)
**Category:** ADAS
An advanced driver assistance feature that automatically applies braking to reduce or avoid collisions.
### Automatic Key Rotation
**Category:** Cryptography
A security practice that periodically replaces cryptographic keys to reduce the impact of key compromise.
### Automatic Vulnerability Scanning
**Category:** Security Testing
The use of automated tools to identify known security weaknesses in systems or applications.
### Automotive Cybersecurity
**Category:** Cybersecurity
The discipline focused on protecting connected vehicles, ECUs, cloud services, mobile applications, and automotive infrastructure from cyber threats.
### Automotive Ethernet
**Category:** Automotive Network
A family of Ethernet technologies designed for high-speed in-vehicle communication.
### Automotive Gateway
**Category:** ECU
An electronic control unit responsible for routing, filtering, and securing communication between multiple in-vehicle networks.
### Automotive Grade Linux (AGL)
**Category:** Operating System
An open-source Linux platform developed specifically for automotive infotainment and digital cockpit systems.
### Automotive Security Operation Center (Auto-SOC)
**Category:** Security Operations
A security operations center dedicated to monitoring, detecting, and responding to cybersecurity events affecting connected vehicles.
### Automotive Threat Analysis and Risk Assessment (TARA)
**Category:** ISO 21434
A structured methodology for identifying cybersecurity threats and assessing associated risks in road vehicles.
### Automotive Threat Intelligence
**Category:** Threat Intelligence
Threat intelligence specifically focused on vulnerabilities, attacks, threat actors, and risks affecting the automotive ecosystem.
### Autonomous Driving
**Category:** AD
Vehicle operation with varying levels of automated driving capability as defined by SAE J3016.
### Autonomous Emergency Lane Keeping
**Category:** ADAS
A safety feature that automatically steers a vehicle to remain within lane boundaries during emergencies.
### Autonomous Emergency Steering (AES)
**Category:** ADAS
A vehicle safety feature that automatically performs steering maneuvers to avoid collisions when braking alone is insufficient.
### Autonomous Mode
**Category:** Autonomous Driving
A driving mode in which automated systems perform some or all driving tasks without continuous driver control.
### Autonomous Parking
**Category:** ADAS
A function that enables a vehicle to perform parking maneuvers with minimal or no driver intervention.
### Autonomous Vehicle (AV)
**Category:** Intelligent Vehicle
A vehicle capable of sensing its environment and performing driving tasks with varying levels of automation.
### AUTOSAR
**Full Name:** AUTomotive Open System ARchitecture
**Category:** Automotive Software
An open automotive software architecture standard for ECU software development.
### AUTOSAR Adaptive
**Category:** AUTOSAR
The high-performance AUTOSAR platform supporting service-oriented architectures and POSIX operating systems.
### AUTOSAR Basic Software (BSW)
**Category:** AUTOSAR
A standardized software layer providing hardware abstraction, communication services, memory services, and system functions.
### AUTOSAR Classic
**Category:** AUTOSAR
The traditional AUTOSAR platform designed for resource-constrained embedded ECUs and real-time operation.
### AUTOSAR COM
**Category:** AUTOSAR Communication
A communication module responsible for signal packing, unpacking, and transmission.
### AUTOSAR Complex Device Driver (CDD)
**Category:** AUTOSAR
A special software component used when standard AUTOSAR interfaces cannot meet hardware-specific requirements.
### AUTOSAR Crypto Service Manager (CSM)
**Category:** Cryptography
The AUTOSAR module responsible for managing cryptographic operations and key usage.
### AUTOSAR Crypto Stack
**Category:** Cryptography
A collection of standardized AUTOSAR modules providing cryptographic services.
### AUTOSAR Diagnostic Communication Manager (DCM)
**Category:** Diagnostics
An AUTOSAR module implementing Unified Diagnostic Services (UDS).
### AUTOSAR ECU Abstraction Layer
**Category:** AUTOSAR
A software layer that abstracts ECU-specific hardware devices from upper software components.
### AUTOSAR Key Manager (KeyM)
**Category:** Cryptography
An AUTOSAR module responsible for key lifecycle management, including provisioning, storage, and updates.
### AUTOSAR MCAL
**Full Name:** Microcontroller Abstraction Layer
**Category:** AUTOSAR
The lowest AUTOSAR software layer that provides standardized access to microcontroller peripherals.
### AUTOSAR Network Management (NM)
**Category:** Network Management
An AUTOSAR module responsible for coordinating network sleep and wake-up behavior.
### AUTOSAR OS
**Category:** Operating System
The standardized real-time operating system defined by AUTOSAR Classic Platform.
### AUTOSAR PDU Router (PduR)
**Category:** AUTOSAR Communication
A routing module that forwards protocol data units (PDUs) between communication modules.
### AUTOSAR Runtime Environment (RTE)
**Category:** AUTOSAR
Middleware that enables communication between AUTOSAR software components and the basic software.
### AUTOSAR Secure Hardware Extension (SHE)
**Category:** Hardware Security
A standardized secure hardware interface supporting secure key storage and cryptographic operations.
### AUTOSAR Secure Onboard Communication (SecOC)
**Category:** AUTOSAR Security
An AUTOSAR module providing message authentication and freshness protection for in-vehicle communication.
### AUTOSAR Service Discovery (SD)
**Category:** AUTOSAR
A SOME/IP-based mechanism that enables ECUs to dynamically discover and advertise services within an in-vehicle network.
**Related:** SOME/IP, Adaptive AUTOSAR
### AUTOSAR Watchdog Manager (WdgM)
**Category:** Functional Safety
A module supervising software execution to detect failures and improve system reliability.
### Auxiliary ECU
**Category:** ECU
An electronic control unit providing supporting functions rather than primary vehicle control.
### Availability
**Category:** CIA
The property that systems and services remain accessible when required.
### Availability Attack
**Category:** Cyber Attack
An attack intended to reduce or eliminate access to systems or services.
**Related:** DoS, DDoS
### Availability Monitoring
**Category:** Security Monitoring
Continuous observation of system availability to detect outages, degradation, or denial-of-service attacks.
### Availability Requirement
**Category:** Security Requirement
A requirement specifying acceptable levels of service uptime and resilience.
### Availability Zone
**Category:** Cloud Security
An isolated cloud infrastructure designed to improve service availability and fault tolerance.
### AVB
**Full Name:** Audio Video Bridging
**Category:** Automotive Ethernet
A collection of IEEE standards providing deterministic transmission of time-sensitive audio and video streams.
### AVB Stream Reservation Protocol (SRP)
**Category:** Automotive Ethernet
A protocol used to reserve bandwidth for time-sensitive streams on Ethernet networks.
### AVCTP
**Full Name:** Audio/Video Control Transport Protocol
**Category:** Bluetooth
A transport protocol used by Bluetooth audio/video control profiles.
### AVCTP Message Integrity
**Category:** Bluetooth Security
The verification of AVCTP messages to ensure they have not been altered during transmission.
### AVDTP
**Full Name:** Audio/Video Distribution Transport Protocol
**Category:** Bluetooth
A Bluetooth protocol used to stream audio and video between devices.
### AVNU Alliance
**Category:** Automotive Ethernet
An industry consortium promoting interoperability for Time-Sensitive Networking (TSN) and AVB technologies.
### AVP
**Full Name:** Automated Valet Parking
**Category:** Intelligent Driving
A feature allowing a vehicle to park itself in designated parking facilities without driver supervision.
### AVRCP
**Full Name:** Audio/Video Remote Control Profile
**Category:** Bluetooth
A Bluetooth profile allowing remote control of multimedia devices.
### AVSS
**Full Name:** Automotive Vehicle Security System
**Category:** Vehicle Security
A generic term for integrated security systems protecting vehicle networks and ECUs.
### AVTP
**Full Name:** Audio Video Transport Protocol
**Category:** Automotive Ethernet
A protocol defined by IEEE 1722 for transporting synchronized multimedia streams over Ethernet.
### AXI
**Full Name:** Advanced eXtensible Interface
**Category:** Hardware
A high-performance on-chip bus protocol defined by ARM AMBA specifications.
### AXI Interconnect Security
**Category:** Hardware Security
Security controls applied to ARM AXI bus communication between SoC components.

## B
### Backdoor
**Category:** Security / Malware
A hidden method of bypassing normal authentication or control mechanisms to gain unauthorized access to a system.
**Related:** Authentication Bypass, Trojan
### Backdoor Injection
**Category:** Malware / Supply Chain
The intentional insertion of hidden access mechanisms into firmware, software, or hardware during development or supply chain stages.
### Backplane Bus
**Category:** Hardware / Automotive Network
A physical or logical bus architecture used to interconnect multiple ECU modules or system components.
### Backpressure
**Category:** Network / System Design
A mechanism to prevent overload in communication systems by signaling upstream components to slow down data transmission.
### Backtrace
**Category:** Debugging / Reverse Engineering
A technique used to trace the sequence of function calls that led to a specific point in execution, commonly used in crash analysis.
### Backtracking Attack
**Category:** Attack Technique
An attack method where adversaries iteratively explore system states to recover secrets or bypass controls.
### Backup ECU
**Category:** Vehicle Architecture
A redundant ECU used to take over functions when the primary ECU fails.
### Bad Block Management
**Category:** Memory / Flash Storage
A technique used in flash memory systems to handle defective memory blocks and maintain data integrity.
### Bandwidth Arbitration
**Category:** Automotive Network
A mechanism used in in-vehicle networks to allocate communication bandwidth among ECUs.
### Base Address Register (BAR)
**Category:** Hardware / PCIe
A register used to define memory-mapped I/O regions for devices in PCI/PCIe systems.
### Base Station Emulation
**Category:** Cellular Attack
A technique where a malicious device mimics a cellular base station to intercept communication.
### Baseband Firmware Downgrade
**Category:** Cellular Attack
An attack that forces baseband firmware to revert to a vulnerable version.
### Baseband Processor
**Category:** Cellular / Modem Security
A dedicated processor handling cellular communication (4G/5G), often a high-value attack target in connected vehicles.
### Baseband Signal Injection
**Category:** Cellular Attack
Injection of malicious signals into cellular communication channels.
### Baseband Traffic Analysis
**Category:** Reverse Engineering
The analysis of cellular communication patterns to infer system behavior or vulnerabilities.
### Baseline Security Configuration
**Category:** Security Engineering
A predefined secure configuration state used as a reference for compliance and hardening.
### Batch OTA Update
**Category:** OTA
A firmware update strategy where updates are deployed to multiple ECUs or vehicles in grouped batches.
### Battery Management System (BMS)
**Category:** EV / Automotive
A system that monitors and controls battery charging, discharging, temperature, and safety in electric vehicles.
### BCM (Body Control Module)
**Category:** Vehicle Architecture
An ECU that controls body functions such as lighting, windows, door locks, wipers, and climate; a central node often targeted in vehicle security assessments.
**Related:** ECU, CAN Bus, Gateway ECU
### Beacon Frame
**Category:** Wireless / Wi-Fi
A management frame used in Wi-Fi networks to announce the presence of an access point.
### Behavioral Analysis
**Category:** Intrusion Detection
A detection technique that identifies anomalies based on deviations from normal system behavior.
### Behavioral Baseline Modeling
**Category:** Intrusion Detection
A technique that establishes normal system behavior for anomaly detection.
### Behavioral Bypass Detection Evasion
**Category:** Intrusion Evasion
Techniques used to avoid detection by behavior-based intrusion detection systems.
### Behavioral Drift Detection
**Category:** Security Monitoring
Detection of deviations from established behavioral baselines in vehicle systems.
### Benchmark ECU
**Category:** Testing
A reference ECU used for performance, security, or compatibility comparison.
### Binary Analysis
**Category:** Reverse Engineering
The process of analyzing compiled executables to understand behavior, vulnerabilities, or logic.
### Binary Control Flow Graph (CFG)
**Category:** Reverse Engineering
A graph representation of all possible execution paths in a binary.
### Binary Diff
**Category:** Reverse Engineering
A technique used to compare two binary versions to identify changes, patches, or vulnerabilities.
### Binary Execution Flow Analysis
**Category:** Reverse Engineering
The study of program execution paths to identify vulnerabilities or logic flaws.
### Binary Instrumentation
**Category:** Security Testing
A method of inserting analysis or monitoring code into binary execution flow.
### Binary Integrity Verification
**Category:** Software Security
A process ensuring binaries have not been modified or corrupted.
### Binary Patch
**Category:** Software Update
A modification applied directly to compiled binaries to fix vulnerabilities or alter behavior.
### Binary Runtime Instrumentation
**Category:** Security Testing
A method that modifies program execution at runtime for analysis or monitoring.
### Binary Signature Validation
**Category:** Software Security
Verification of digital signatures attached to executable binaries.
### BIOS Integrity Check
**Category:** Boot Security
A mechanism verifying the integrity of BIOS firmware during system startup.
### BIST (Built-In Self-Test)
**Category:** Hardware Testing
A hardware-level self-diagnostic feature that automatically tests components at power-on or during runtime to detect faults before they cause safety-critical failures.
**Related:** Functional Safety, ISO 26262, FMEA
### Bit Error Rate (BER)
**Category:** Communication
A metric measuring the rate of errors in transmitted bits over a communication channel.
### Bit Flipping Attack
**Category:** Cryptography / Attack
An attack that modifies bits in encrypted or transmitted data to alter system behavior.
### Bit Timing
**Category:** CAN Bus
The configuration of timing parameters that define how bits are transmitted and sampled on a CAN network.
### Bit-Level Manipulation Attack
**Category:** Cryptographic Attack
An attack that modifies individual bits in structured or encrypted data.
### Black Box Testing
**Category:** Security Testing
A testing method where internal system structure is unknown to the tester.
### Black Channel Communication
**Category:** Automotive Safety
A communication model where safety is ensured independently of underlying network reliability.
### Blacklist
**Category:** Access Control
A list of explicitly denied entities such as IPs, applications, or devices.
### Blacklist Evasion
**Category:** Attack Technique
Methods used to bypass blacklist-based security filtering.
### BladeRF
**Category:** Security Tool / SDR
An open-source software-defined radio platform (by Nuand) supporting full-duplex 2x2 MIMO operation, used in automotive security testing for creating rogue BTS and cellular network analysis.
**Related:** SDR, HackRF One, RTL-SDR, USRP, OpenBTS, YateBTS
### Blind Attack
**Category:** Attack Technique
An attack performed without direct feedback from the target system.
### Block Cipher
**Category:** Cryptography
A symmetric encryption algorithm that processes fixed-size blocks of data.
### Block Replay Attack
**Category:** Network Security
An attack that reuses previously captured valid data blocks to gain unauthorized actions.
### BlueBorne
**Category:** Wireless Attack
A set of Bluetooth protocol vulnerabilities allowing airborne attacks that can take over devices without pairing, affecting Linux, Android, and Windows Bluetooth stacks.
**Related:** Bluetooth, KNOB Attack, Bluesnarfing
### Bluebugging
**Category:** Wireless Attack
An attack that exploits Bluetooth to remotely issue AT commands to a device, enabling unauthorized access to calls, messages, and data.
**Related:** Bluetooth, Bluesnarfing, Bluejacking
### BlueFrag
**Category:** Wireless Attack
A critical Bluetooth vulnerability (CVE-2020-0022) enabling remote code execution on Android devices via crafted Bluetooth packets without user interaction.
**Related:** BlueBorne, Bluetooth, RCE
### Bluejacking
**Category:** Wireless Attack
An attack that sends unsolicited messages to Bluetooth-enabled devices by exploiting the OBEX protocol in discoverable mode, primarily used for spam or social engineering.
**Related:** Bluetooth, Bluesnarfing, Bluebugging
### Bluesnarfing
**Category:** Wireless Attack
An attack that exploits Bluetooth OBEX vulnerabilities to steal data (contacts, calendar, messages) from a target device without the user's knowledge.
**Related:** Bluetooth, Bluejacking, Bluebugging, OBEX
### Bluetooth Advertising Attack
**Category:** Bluetooth Security
An attack exploiting BLE advertising packets to inject or spoof device presence.
### Bluetooth Beacon Spoofing
**Category:** Wireless Attack
An attack that impersonates legitimate Bluetooth beacon devices.
### Bluetooth Classic
**Category:** Wireless
A Bluetooth protocol used for continuous data streaming such as audio.
### Bluetooth Connection Hijacking
**Category:** Bluetooth Attack
An attack that takes over an active Bluetooth connection between legitimate devices.
### Bluetooth Device Fingerprinting
**Category:** Wireless Security
A technique used to identify Bluetooth devices based on unique communication patterns.
### Bluetooth Low Energy (BLE)
**Category:** Wireless / IoT
A low-power Bluetooth protocol widely used in automotive digital keys and sensors.
### Bluetooth Pairing
**Category:** Wireless Security
The process of establishing a trusted relationship between Bluetooth devices.
### Bluetooth Pineapple
**Category:** Wireless Attack
A rogue Bluetooth access device that impersonates trusted devices to intercept or manipulate Bluetooth connections, analogous to the Wi-Fi Pineapple for Bluetooth networks.
**Related:** Bluetooth Spoofing, Evil Twin Attack, KNOB Attack
### Bluetooth Spoofing
**Category:** Wireless Attack
An attack where a device impersonates a trusted Bluetooth device.
### Boot Anomaly Detection
**Category:** Security Monitoring
A technique that detects abnormal behavior during system startup, such as modified boot sequences or unexpected firmware changes.
### Boot Attack
**Category:** Boot Security
An attack targeting the system startup process to gain early execution control.
### Boot Chain of Trust
**Category:** Secure Boot
A sequence of verification steps ensuring each boot stage validates the next.
### Boot Environment Variable Injection
**Category:** Boot Security
Injection of malicious variables into bootloader or system initialization environment.
### Boot Firmware Chain Validation
**Category:** Secure Boot
A process verifying each stage of boot firmware before execution.
### Boot Image
**Category:** Operating System
A system image containing kernel and ramdisk used during boot.
### Boot Image Verification
**Category:** Secure Boot
Validation of kernel and ramdisk images before execution during system startup.
### Boot Integrity
**Category:** Security
The assurance that boot components have not been tampered with.
### Boot Integrity Check Failure
**Category:** Secure Boot
A failure condition indicating that boot components have been tampered with or do not match expected hashes.
### Boot Loader
**Category:** Boot Security
A program responsible for initializing system hardware and loading the operating system.
### Boot Measurement Log
**Category:** Trusted Computing
A log recording cryptographic measurements of boot components used for attestation.
### Boot Partition
**Category:** Storage
A dedicated storage partition containing boot-related system files.
### Boot Partition Integrity Verification
**Category:** Secure Boot
A verification process ensuring that boot partitions have not been modified or corrupted.
### Boot ROM
**Category:** Hardware Security
Read-only memory containing immutable boot code executed at system startup.
### Boot Script Tampering
**Category:** Linux / Embedded Attack
Modification of startup scripts to execute malicious code during boot.
### Boot Sequence
**Category:** System Architecture
The ordered process of system initialization from power-on to full OS execution.
### Boot Sequence Hijacking
**Category:** Boot Security Attack
An attack that modifies the system boot order or execution sequence.
### Boot State Attestation
**Category:** Trusted Computing
A remote verification process that confirms system boot integrity based on cryptographic evidence.
### Boot Trust Anchor Failure
**Category:** Trusted Computing
A failure in the root-of-trust mechanism used to verify system integrity.
### Bootkit
**Category:** Malware
Malicious software that infects the boot process to gain persistent control.
### Bootloader Anti-Tamper Check
**Category:** Boot Security
Mechanisms that detect unauthorized modification of bootloader code or configuration.
### Bootloader Configuration Table
**Category:** Boot Security
A structured configuration defining boot parameters, memory layout, and execution flow.
### Bootloader Lock State
**Category:** Boot Security
A security state indicating whether the bootloader is locked or unlocked for flashing operations.
### Bootloader Rollback Protection
**Category:** Secure Boot
A mechanism preventing downgrade attacks by blocking older firmware versions.
### Bootloader Secure Flag
**Category:** Secure Boot
A hardware or software flag indicating whether secure boot enforcement is enabled.
### Boundary Check
**Category:** Software Security
A validation mechanism ensuring memory access remains within valid limits.
### Boundary Overflow Attack
**Category:** Vulnerability
A memory corruption attack caused by exceeding buffer boundaries.
### Boundary Validation Failure
**Category:** Software Vulnerability
A failure to properly validate input or memory boundaries leading to exploitation.
### Brake ECU
**Category:** Vehicle Control
An ECU responsible for managing braking systems including ABS and ESC.
### Branch Prediction Attack
**Category:** Side Channel Attack
An attack that exploits CPU branch prediction mechanisms to infer sensitive data.
### Branch Target Injection
**Category:** Spectre-Class Attack
A speculative execution attack manipulating branch prediction to leak information.
### Broadcast Authentication
**Category:** Network Security
A mechanism ensuring the authenticity of broadcast messages in vehicular networks.
### Broadcast Encryption
**Category:** Cryptography
A scheme that allows encrypted messages to be securely sent to multiple recipients.
### Broadcast Frame
**Category:** Network
A network frame sent to all nodes in a broadcast domain.
### Broadcast Storm Control
**Category:** Network Security
A control mechanism that limits excessive broadcast traffic in Ethernet or in-vehicle networks.
### Broker (MQTT Broker)
**Category:** IoT / Vehicle Cloud
A message broker that routes MQTT messages between publishers and subscribers.
### Broker Authentication Failure
**Category:** IoT Security
A failure in MQTT or message broker authentication allowing unauthorized access.
### Broker Message Injection
**Category:** IoT Attack
Injection of malicious messages into MQTT or publish-subscribe systems.
### Brute Force Attack
**Category:** Cryptography / Authentication
An attack that attempts all possible combinations to guess credentials or keys.
### BSSID (Basic Service Set Identifier)
**Category:** Wireless Network
The MAC address that uniquely identifies each Basic Service Set (BSS) in an 802.11 Wi-Fi network; used for evil twin attacks and wireless reconnaissance of in-vehicle hotspots.
**Related:** ESSID, Evil Twin Attack, Aircrack-ng, WiFi Pineapple
### BTS (Base Transceiver Station)
**Category:** Cellular Infrastructure
The radio equipment that provides wireless connectivity between mobile devices and a cellular network; in automotive security, the target of rogue BTS attacks against vehicle TCUs.
**Related:** Rogue BTS, IMSI Catcher, GSM, TCU, OsmocomBB, OpenBTS
### Buffer Overflow
**Category:** Vulnerability
A memory corruption vulnerability caused by writing beyond allocated buffer boundaries.
### Bus Arbitration
**Category:** CAN / Automotive Network
The process of determining which ECU gains control of the bus in contention scenarios.
### Bus Authentication Failure
**Category:** Network Security
A failure in verifying the authenticity of messages transmitted over vehicle buses.
### Bus Encryption
**Category:** Automotive Security
Encryption applied to in-vehicle network communication such as CAN-FD or Ethernet.
### Bus Error Injection
**Category:** Automotive Attack
A technique that intentionally introduces errors into bus communication to trigger fault states.
### Bus Guardian
**Category:** Functional Safety
A hardware mechanism that prevents faulty nodes from disrupting communication buses.
### Bus Load Monitoring
**Category:** Vehicle Network Security
The measurement and analysis of network utilization on CAN, LIN, or Ethernet buses.
### Bus Off Recovery Attack
**Category:** CAN Attack
An attack that manipulates CAN bus recovery behavior after a node enters bus-off state.
### Bus Off State
**Category:** CAN Bus
A fault state in CAN where a node is disconnected due to excessive transmission errors.
### Bus Protocol Fuzzing
**Category:** Fuzzing
A technique that sends malformed or unexpected frames to in-vehicle communication protocols.
### Bus Timing Manipulation
**Category:** Automotive Attack
An attack that alters message timing to exploit synchronization or arbitration weaknesses.
### Bus Topology
**Category:** Network Architecture
A network architecture where all nodes share a single communication medium.
### BYOD (Bring Your Own Device)
**Category:** Security Policy
A policy allowing personal devices to connect to vehicle or enterprise systems under controlled conditions.
### Bypass Chain Exploit
**Category:** Attack Technique
A multi-stage attack that sequentially bypasses multiple security mechanisms.
### Bytecode Injection
**Category:** Attack Technique
An attack that injects malicious bytecode into runtime environments such as JVM or ART.

## C
### C-Auto-ISAC
**Category:** Threat Intelligence
The Chinese Automotive Information Sharing and Analysis Center, China's counterpart to Auto-ISAC for sharing automotive cybersecurity threat intelligence.
**Related:** Auto-ISAC, Threat Intelligence
### Calibration Attack
**Category:** Automotive Attack
Manipulating ECU calibration data to alter vehicle behavior.
### Calibration Data
**Category:** ECU
Data used to tune ECU behavior.
### CAN (Controller Area Network)
**Category:** Automotive Network
A robust vehicle bus protocol designed for real-time communication between ECUs.
**Related:** CAN FD, CAN XL
### CAN Arbitration
**Category:** Network Control
The process by which ECUs compete for bus access based on message ID priority.
### CAN Bus Off Attack
**Category:** Automotive Attack
An attack that forces ECUs into bus-off state to disrupt communication.
### CAN Calibration Protocol (CCP)
**Category:** Calibration Protocol
A master-slave protocol used for ECU calibration and measurement data acquisition over CAN bus, defined by ASAM.
**Related:** XCP, A2L, CAN
### CAN Diagnostic Protocol
**Category:** Diagnostics
Protocols used for ECU diagnostics over CAN.
### CAN FD (Flexible Data-rate)
**Category:** Automotive Network
An extension of CAN supporting larger payloads and higher data rates.
### CAN Fuzzing
**Category:** Security Testing
A technique that sends malformed CAN frames to discover ECU vulnerabilities.
### CAN Gateway
**Category:** ECU / Network
An ECU responsible for routing and filtering CAN traffic between domains.
### CAN IDS
**Category:** Intrusion Detection
A system that detects anomalies or attacks on CAN networks.
### CAN Injection Attack
**Category:** Automotive Attack
Injection of malicious CAN frames into the vehicle network.
### CAN Replay Attack
**Category:** Automotive Attack
Re-sending previously captured CAN frames to manipulate vehicle behavior.
### CAN Security Gateway
**Category:** Vehicle Security
A secure ECU that enforces filtering, authentication, and segmentation of CAN traffic.
### CAN Security Model
**Category:** Automotive Security
A conceptual model describing CAN threats and protections.
### CAN Signal Spoofing
**Category:** Automotive Attack
Forging CAN signals to impersonate legitimate ECU behavior.
### CAN Sniffing
**Category:** Reverse Engineering
Passive capture of CAN traffic for analysis.
### CAN Timing Attack
**Category:** Side Channel
An attack exploiting timing differences in CAN communication.
### CAN Transport Protocol (ISO-TP)
**Category:** Automotive Network
A protocol enabling segmentation and reassembly of CAN messages.
### CAN XL
**Category:** Automotive Network
Next-generation CAN protocol supporting up to 2048-byte payloads and enhanced security.
### CAPEC
**Full Name:** Common Attack Pattern Enumeration and Classification
**Category:** Threat Intelligence
A catalog of attack patterns used in cybersecurity analysis.
### Car API
**Category:** Android Automotive
APIs that allow applications to interact with vehicle data and services.
### Car HAL (Hardware Abstraction Layer)
**Category:** Android Automotive
A layer that bridges Android framework and vehicle hardware.
### Car Service
**Category:** Android Automotive
System service managing vehicle data access for applications.
### Car Whisperer
**Category:** Wireless Attack
A Bluetooth attack tool that exploits default PIN codes in car hands-free kits to inject and intercept audio on automotive Bluetooth systems, demonstrating vulnerabilities in vehicle Bluetooth implementations.
**Related:** Bluetooth, Bluebugging, Bluesnarfing
### CarLife
**Category:** Vehicle Connectivity
A smartphone projection technology developed by Baidu for the Chinese market, enabling mobile app integration with vehicle infotainment systems.
**Related:** CarPlay, Android Auto, MirrorLink
### CarPlay
**Category:** Vehicle Connectivity
A smartphone projection technology developed by Apple that mirrors iPhone functionality onto a vehicle's infotainment display via USB or wireless connection.
**Related:** Android Auto, MirrorLink, SmartDeviceLink
### CCC (Car Connectivity Consortium)
**Category:** Industry Alliance
An international organization developing standards for smartphone-to-vehicle connectivity, including the Digital Key standard for NFC and UWB-based vehicle access.
**Related:** ICCOA, Digital Key, NFC
### CCS (Combined Charging System)
**Category:** Charging Standard
An international standard for DC fast charging of electric vehicles, combining AC and DC charging pins in a single connector, supporting high-power charging with PLC-based communication.
**Related:** CHAdeMO, ISO 15118, GB/T 20234
### CDD (Custom Diagnostic Description)
**Category:** Diagnostic Data Format
A proprietary diagnostic description file format used by Vector tools to describe ECU diagnostic capabilities, communication parameters, and service definitions.
**Related:** ODX, PDX, DEXT, ARXML
### Cellular Network Attack
**Category:** Mobile Security
Attacks targeting LTE/5G communication in connected vehicles.
### Certificate
**Category:** PKI
A digital document binding a public key to an identity.
### Certificate Authority (CA)
**Category:** PKI
An entity that issues and manages digital certificates.
### Certificate Chain
**Category:** PKI
A sequence of certificates validating trust from root CA to end entity.
### Certificate Pinning
**Category:** Security
A technique that binds an application to specific certificates to prevent MITM attacks.
### Certificate Revocation
**Category:** PKI
The process of invalidating a previously issued certificate.
### Certificate Validation Failure
**Category:** Security Vulnerability
A failure in verifying certificate authenticity or trust chain.
### CGW (Central Gateway)
**Category:** Vehicle Architecture
A central gateway ECU that routes and filters communication between different in-vehicle network domains (e.g., CAN, LIN, Ethernet), acting as a security boundary and protocol translator in modern vehicle architectures.
**Related:** Gateway ECU, CAN Gateway, Domain Controller, Network Segmentation
### CHAdeMO
**Category:** Charging Standard
A Japanese DC fast charging standard for electric vehicles, using a proprietary connector and CAN-based communication between charger and vehicle.
**Related:** CCS, GB/T 20234, ISO 15118
### Challenge-Response Authentication
**Category:** Authentication
A protocol that verifies identity using cryptographic challenges.
### Channel Injection
**Category:** Network Attack
Injection of malicious data into communication channels.
### Checksum
**Category:** Data Integrity
A value used to verify data integrity in communication or storage.
### CIA Triad
**Category:** Security Model
The foundational security model consisting of Confidentiality (preventing unauthorized disclosure), Integrity (preventing unauthorized modification), and Availability (ensuring timely access), used as a basis for automotive cybersecurity risk assessment.
**Related:** Confidentiality, Integrity, Availability, ISO 21434, Risk Assessment
### Cipher
**Category:** Cryptography
An algorithm used for encryption and decryption.
### Cipher Suite
**Category:** TLS Security
A set of cryptographic algorithms used in secure communication.
### Ciphertext
**Category:** Cryptography
Encrypted data that cannot be read without decryption.
### Circuit-Level Attack
**Category:** Hardware Attack
An attack targeting electrical or hardware circuit behavior.
### Cloud API
**Category:** Cloud Security
Interfaces provided by cloud platforms for vehicle connectivity.
### Cloud Backend
**Category:** Automotive Cloud
Server infrastructure supporting connected vehicle services.
### Cloud Credential Theft
**Category:** Cloud Attack
Unauthorized access to cloud credentials used in vehicle ecosystems.
### Cloud ECU Communication
**Category:** Vehicle Cloud
Communication between ECUs and cloud services.
### Cloud Messaging Broker
**Category:** IoT / Vehicle Cloud
A system for routing messages between vehicles and cloud services.
### Cluster ECU
**Category:** Vehicle Architecture
An ECU responsible for instrument cluster display and data processing.
### CMAC (Cipher-based Message Authentication Code)
**Category:** Cryptography
A block-cipher-based MAC algorithm (defined in NIST SP 800-38B) that uses AES to produce a tag for message authentication and integrity, widely adopted in automotive protocols such as AUTOSAR SecOC and ISO 14229 (UDS) for authenticating in-vehicle communication.
**Related:** AES, SecOC, HMAC, Message Authentication Code
### Code Execution
**Category:** Vulnerability
The ability of an attacker to execute arbitrary code on a target system.
### Code Injection
**Category:** Attack Technique
Injection of malicious code into a running process.
### Code Obfuscation
**Category:** Software Protection
Techniques used to make code difficult to reverse engineer.
### Cold Boot Attack
**Category:** Hardware Attack
An attack extracting memory contents after power loss.
### Command Injection
**Category:** Vulnerability
An attack that injects malicious commands into system execution context.
### Common Criteria (CC)
**Category:** Security Standard
An international standard for evaluating security of IT products.
### Communication Bus
**Category:** Automotive Network
A shared communication system used by ECUs.
### Communication Isolation
**Category:** Vehicle Security
Segmentation of communication domains to prevent cross-domain attacks.
### Compromise Detection
**Category:** Intrusion Detection
Identification of security breaches in vehicle systems.
### Confidentiality
**Category:** CIA Model
Ensuring information is accessible only to authorized entities.
### Configuration Attack
**Category:** Security
An attack exploiting misconfigured systems or services.
### Control Flow Integrity (CFI)
**Category:** Software Security
A security mechanism preventing unauthorized modification of execution flow.
### Control Unit
**Category:** ECU
A system component controlling specific vehicle functions.
### Controller Area Network Security (CAN Security)
**Category:** Automotive Security
Security mechanisms protecting CAN communication from attacks.
### CooC (Components Developed Out of Context)
**Category:** ISO 21434
An ISO 21434 concept referring to cybersecurity components (hardware, software, or systems) developed without knowledge of the specific vehicle context in which they will be deployed, requiring reassessment of suitability and risks during integration.
**Related:** ISO 21434, COTS, Supply Chain Security
### Cookie Hijacking
**Category:** Web / IVI Security
Stealing session cookies to impersonate users.
### COTS (Commercial Off-The-Shelf)
**Category:** Supply Chain
Commercially available hardware or software components used in automotive systems without modification, offering cost efficiency but introducing supply chain security risks and potential vulnerabilities from third-party code.
**Related:** CooC, ISO 21434, Supply Chain Security, Third-Party Risk
### Credential
**Category:** Authentication
Information used to verify identity.
### Credential Dumping
**Category:** Attack Technique
Extraction of stored authentication credentials.
### Credential Replay
**Category:** Authentication Attack
Reusing captured credentials to gain unauthorized access.
### Credential Stuffing
**Category:** Attack Technique
Automated login attempts using leaked credentials.
### CRL (Certificate Revocation List)
**Category:** PKI
A signed list of revoked certificates published by a Certificate Authority, used in vehicle PKI and V2X communication to reject compromised certificates before their expiration.
**Related:** PKI, Certificate Authority, OCSP, V2X PKI
### Cross-Domain Attack
**Category:** Vehicle Security
Attacks that cross isolated vehicle system domains.
### Cross-Site Request Forgery (CSRF)
**Category:** Web Security
An attack that forces a user to execute unwanted actions.
### Cross-Site Scripting (XSS)
**Category:** Web Security
Injection of malicious scripts into web applications.
### Cryptanalysis
**Category:** Cryptography
The study of breaking cryptographic systems.
### Crypto Module
**Category:** Automotive Security
A software or hardware component providing cryptographic services.
### Cryptographic Engine
**Category:** Hardware Security
A hardware module performing cryptographic operations.
### Cryptographic Key
**Category:** Cryptography
A value used in encryption and decryption operations.
### Cryptographic Protocol
**Category:** Security Protocol
A protocol using cryptographic methods for secure communication.
### CSI-2 (MIPI Camera Serial Interface 2)
**Category:** Automotive Interface
A high-speed serial interface standard developed by MIPI Alliance for connecting cameras to processors, widely used in automotive vision systems for ADAS and autonomous driving applications.
**Related:** MIPI, D-PHY, Camera ECU, ADAS
### CSIA (Cybersecurity Interface Agreement)
**Category:** ISO 21434
An agreement defined in ISO/SAE 21434 (Clause 5.4) specifying cybersecurity responsibilities, interfaces, and communication between parties involved in the vehicle lifecycle (OEMs, Tier 1s, Tier 2s, and service providers), ensuring accountability for cybersecurity activities across the supply chain.
**Related:** ISO 21434, Distributed Cybersecurity Audit, Supply Chain Security, CSMS
### CSMS (Cybersecurity Management System)
**Category:** Regulatory Compliance
A management system defined by UN R155 requiring vehicle manufacturers to establish, implement, and maintain processes for identifying and managing cybersecurity risks throughout the vehicle lifecycle.
**Related:** UN R155, ISO 21434, TARA
### CVE (Common Vulnerabilities and Exposures)
**Category:** Vulnerability Management
A list of publicly disclosed cybersecurity vulnerabilities, each assigned a unique CVE ID (e.g., CVE-2025-12345) by MITRE Corporation and tracked by NVD.
**Related:** CVSS, CWE, NVD, Zero-Day
### CVSS (Common Vulnerability Scoring System)
**Category:** Vulnerability Management
A standardized framework for scoring the severity of security vulnerabilities from 0.0 to 10.0, considering attack vector, complexity, privileges required, user interaction, scope, and impact metrics (CVSS v3.1/v4.0).
**Related:** CVE, CWE, NVD, Base Score, Temporal Score, Environmental Score
### CWE (Common Weakness Enumeration)
**Category:** Vulnerability Management
A community-developed catalog of software and hardware weakness types (e.g., CWE-119 Buffer Overflow, CWE-79 XSS), maintained by MITRE to classify root causes of vulnerabilities.
**Related:** CVE, CVSS, MITRE, OWASP Top 10
### Cyber Kill Chain
**Category:** Attack Model
A framework developed by Lockheed Martin describing the stages of a cyberattack from reconnaissance to action on objectives, used to understand and model automotive cyber threats.
**Related:** STRIDE, Attack Tree, TARA
### Cyber Physical System (CPS)
**Category:** Automotive Systems
Systems integrating computation, networking, and physical processes.
### Cyber Range
**Category:** Security Testing
A simulated environment for cybersecurity training and testing.
### Cyber Threat Intelligence
**Category:** Security Intelligence
Information about potential or active cyber threats.
### Cybersecurity Incident
**Category:** Security Operations
An event that violates security policy or compromises system integrity.
### Cybersecurity Monitoring
**Category:** Security Operations
Continuous observation of systems for security events.
### Cybersecurity Policy
**Category:** Governance
Rules defining security requirements and enforcement mechanisms.
### Cybersecurity Validation
**Category:** Automotive Security
Testing process ensuring security requirements are met.

## D
### D-Bus
**Category:** Linux IPC
An inter-process communication system used in Linux-based automotive systems such as IVI and infotainment platforms.
**Related:** Binder, IPC
### DAP Debug Interface
**Category:** Hardware Debug 
Debug Access Port used in Infineon MCUs.
### Data Exfiltration
**Category:** Cyber Attack
Unauthorized transfer of data from a vehicle system to an external attacker.
### Data Injection Attack
**Category:** Automotive Attack
An attack that injects malicious or falsified data into vehicle communication systems.
### Data Integrity
**Category:** Security
The assurance that data has not been altered or tampered with.
### Data Logging ECU
**Category:** Vehicle Systems
An ECU responsible for recording vehicle operational data.
### Data Spoofing
**Category:** Attack Technique
Manipulation of data values to mislead systems or sensors.
### DBC (Database for CAN)
**Category:** Data Format
A file format for describing CAN bus communication, defining messages, signals, and encoding rules. Widely used for CAN network simulation, analysis, and attack tooling.
**Related:** CAN, LDF, FIBEX, DBF
### DBF (BUSMASTER Database File)
**Category:** Data Format
A bus database file format used by the BUSMASTER tool for describing CAN and LIN network communication configurations.
**Related:** DBC, FIBEX, LDF
### DCM (Diagnostic Communication Manager)
**Category:** AUTOSAR / Diagnostics
An AUTOSAR module handling diagnostic communication services such as UDS.
### DDoS (Distributed Denial of Service)
**Category:** Network Attack
An attack that overwhelms a target system with traffic from multiple sources, causing service disruption.
### Debug Authentication Bypass
**Category:** Attack Technique
Circumventing authentication mechanisms protecting debug interfaces.
### Debug Bypass
**Category:** Attack Technique
A method to bypass debug authentication or restrictions.
### Debug Interface
**Category:** Hardware Security
Interfaces such as JTAG or UART used for system debugging and often exploited for attacks.
### Debug Mode
**Category:** System Security
A special operating mode enabling enhanced system access for development.
### Debug Port
**Category:** Hardware Security
A physical or logical interface allowing low-level system access.
### Debug UART Attack
**Category:** Hardware Attack
Exploitation of UART debug interfaces to gain system access.
### Decryption
**Category:** Cryptography
The process of converting ciphertext into readable plaintext.
### Decryption Key
**Category:** Cryptography
A cryptographic key used to decrypt encrypted data.
### Defense in Depth
**Category:** Security Architecture
A layered security approach combining multiple defensive mechanisms.
### Denial of Service (DoS)
**Category:** Network Attack
An attack that disrupts system availability by exhausting resources.
### Device Authentication
**Category:** Security
The process of verifying the identity of a device in a network.
### Device Fingerprinting
**Category:** Security
Identifying devices based on unique behavioral or hardware characteristics.
### Device Identity
**Category:** Identity Management
A unique identity assigned to a device within a system.
### Device Provisioning
**Category:** IoT Security
The process of securely onboarding devices into a managed system.
### DEXT (Diagnostic Extract Template)
**Category:** Diagnostic Data Format
An AUTOSAR template for extracting diagnostic data from system descriptions, providing a standardized exchange format between development tools.
**Related:** ODX, ARXML, CDD, AUTOSAR
### DFD (Data Flow Diagram)
**Category:** Threat Modeling
A diagrammatic representation of how data flows between processes, data stores, and external entities in a system; used in automotive threat modeling (e.g., STRIDE) to identify trust boundaries and attack surfaces.
**Related:** STRIDE, PASTA, Trust Boundary, Threat Modeling, TARA
### DH (Diffie-Hellman)
**Category:** Cryptography
A key exchange protocol allowing two parties to establish a shared secret over an insecure channel, foundational to automotive secure communication protocols such as TLS, IPsec, and AUTOSAR CryptoStack.
**Related:** Key Exchange, TLS, ECC, Perfect Forward Secrecy
### Diagnostic Fuzzing
**Category:** Security Testing
A technique that sends malformed diagnostic requests to ECUs.
### Diagnostic Gateway
**Category:** Vehicle Network
An ECU that routes diagnostic traffic between networks.
### Diagnostic Request
**Category:** Diagnostics
A message sent from a tester to an ECU requesting diagnostic information.
### Diagnostic Response
**Category:** Diagnostics
A message returned by an ECU containing diagnostic results.
### Diagnostic Security Access
**Category:** UDS Security
A security mechanism controlling access to protected diagnostic functions.
### Diagnostic Security Seed-Key
**Category:** UDS Security
A challenge-response mechanism used to unlock protected ECU functions.
### Diagnostic Service
**Category:** Diagnostics
A service used to query or modify ECU data.
### Diagnostic Session
**Category:** UDS / Diagnostics
A communication session established between tester and ECU.
### Diagnostic Session Control (0x10)
**Category:** UDS
A UDS service used to manage ECU diagnostic sessions.
### DID (Data Identifier)
**Category:** Diagnostics
Identifiers used in UDS services to access ECU data.
### Differential Attack
**Category:** Cryptanalysis
An attack method analyzing differences in inputs and outputs of cryptographic algorithms.
### Digital Certificate
**Category:** PKI
A cryptographic document binding a public key to an identity.
### Digital Key
**Category:** Automotive Security
A smartphone-based or cloud-based system allowing vehicle access and ignition authorization.
### Digital Key Relay Attack
**Category:** Automotive Attack
An attack that extends or relays wireless signals to unlock or start vehicles.
### Digital Signature
**Category:** Cryptography
A cryptographic mechanism ensuring data authenticity and integrity.
### Digital Twin
**Category:** Automotive Cloud
A virtual representation of a physical vehicle or ECU used for simulation and monitoring.
### DIN 70121
**Category:** Charging Standard
A German standard for DC charging communication between electric vehicles and charging infrastructure, based on CAN communication. Predecessor to ISO 15118.
**Related:** ISO 15118, GB/T 27930, CHAdeMO
### Direct Memory Access (DMA)
**Category:** Hardware
A mechanism allowing hardware components to access memory without CPU intervention.
### Disassembler
**Category:** Reverse Engineering
A tool that converts binary code into assembly language.
### Disk Encryption
**Category:** Storage Security
Encryption applied to persistent storage to protect data confidentiality.
### Distributed ECU Architecture
**Category:** Vehicle Architecture
An architecture where vehicle functions are distributed across multiple ECUs.
### Distributed Gateway
**Category:** Vehicle Network
A system distributing routing and filtering responsibilities across multiple gateways.
### DLC (Data Link Connector)
**Category:** Diagnostics
The standardized 16-pin OBD-II connector providing physical access to vehicle diagnostic networks, serving as a primary attack surface for physical access.
**Related:** OBD-II, J1962, UDS
### DLP (Data Loss Prevention)
**Category:** Security
Strategies and technologies designed to prevent unauthorized exfiltration or transmission of sensitive vehicle data (e.g., PII, telemetry, firmware) from in-vehicle systems, backend servers, or development environments.
**Related:** Data Exfiltration, PII, Insider Threat
### DLT (Diagnostic Log and Trace)
**Category:** Diagnostics / Logging
An AUTOSAR protocol for ECU logging and tracing, enabling runtime diagnostic data collection for debugging and security analysis.
**Related:** AUTOSAR, XCP, UDS
### DMA Attack
**Category:** Hardware Attack
An attack using DMA to read or modify system memory directly.
### Docker Container Security
**Category:** Cloud / DevSecOps
Security practices for isolating and protecting containerized workloads.
### Docker Escape
**Category:** Container Attack
An attack that breaks out of container isolation to access host systems.
### DoIP (Diagnostic over IP)
**Category:** Automotive Diagnostics 
UDS over IP-based diagnostic protocol.
### DoIP (Diagnostics over IP)
**Category:** Automotive Diagnostics
A protocol that transports diagnostic messages over Ethernet/IP networks.
### Domain Controller ECU
**Category:** Vehicle Architecture
A high-performance ECU that manages multiple vehicle domains such as ADAS, infotainment, and powertrain.
### Domain Firewall
**Category:** Vehicle Security
A firewall enforcing communication rules between vehicle domains.
### Domain Isolation
**Category:** Vehicle Security
A security architecture that separates vehicle systems into isolated functional domains.
### Domain Separation
**Category:** Security Architecture
A design principle that prevents unauthorized communication between system domains.
### DPI (Deep Packet Inspection)
**Category:** Network Security
A packet filtering technique that examines both the header and payload of network traffic at the application layer, used in automotive Ethernet firewalls and IDS to detect malicious patterns in in-vehicle communication.
**Related:** Firewall, IDS, Automotive Ethernet, Network Segmentation
### DRBG (Deterministic Random Bit Generator)
**Category:** Cryptography
A cryptographically secure pseudo-random number generator defined in NIST SP 800-90A, used in automotive security systems to generate keys, nonces, and challenges with sufficient entropy for cryptographic operations.
**Related:** TRNG, PRNG, NIST SP 800-90A, Entropy
### Drift Detection
**Category:** Security Monitoring
Detection of deviations from expected system or behavioral baselines.
### Drive-by-wire
**Category:** Vehicle Architecture
A vehicle control system replacing mechanical linkages (steering, braking, throttle) with electronic controls, increasing attack surface through potential ECU manipulation.
**Related:** ECU, CAN, Attack Surface, Throttle-by-wire, Brake-by-wire
### Driver Assistance System
**Category:** ADAS
Systems assisting drivers in perception, decision, and control tasks.
### Driver Monitoring System (DMS)
**Category:** ADAS
A system that monitors driver attention, fatigue, and behavior.
### Driver Override
**Category:** Vehicle Control
A mechanism allowing driver input to override automated systems.
### Driverless Mode
**Category:** Autonomous Driving
A vehicle operating mode where no human driver input is required.
### DRM (Digital Rights Management)
**Category:** Security / Content Protection
Technology used to control access to copyrighted digital content and software; in automotive contexts, used to protect infotainment content, map data, and firmware from unauthorized copying or redistribution.
**Related:** Licensing, Content Protection, OTA Update
### DSRC (Dedicated Short-Range Communication)
**Category:** V2X Communication
A one-way or two-way short-range to medium-range wireless communication channel designed for automotive use, operating on the 5.9 GHz band per IEEE 802.11p and ASTM E2213 standards; the foundation for V2V and V2I safety communications.
**Related:** WAVE, IEEE 802.11p, V2X, V2V, VANET, ITS
### DTC (Diagnostic Trouble Code)
**Category:** Diagnostics
A standardized code used by ECUs to report faults or abnormal conditions.
### DUT (Device Under Test)
**Category:** Testing
The automotive ECU, module, or component being subjected to security testing, fuzzing, or compliance validation in a laboratory or production environment.
**Related:** HIL, SIL, Fuzzing, Penetration Testing
### DVR (Digital Video Recorder)
**Category:** Automotive Component
An in-vehicle recording device that captures and stores video from dashcams or surround-view cameras; may contain sensitive driving data and require security protection against tampering or data theft.
**Related:** Dashcam, Camera ECU, Data Privacy
### Dynamic Analysis
**Category:** Security Testing
Analysis of software behavior during execution.
### Dynamic Attack Surface
**Category:** Threat Modeling
The portion of the attack surface that changes during system runtime.
### Dynamic Binary Instrumentation (DBI)
**Category:** Reverse Engineering
A technique for analyzing binary execution at runtime.
### Dynamic Key Rotation
**Category:** Cryptography
The process of periodically changing cryptographic keys.

## E
### E/E Architecture
**Category:** Vehicle Architecture
Electrical/Electronic architecture defining how ECUs, networks, and computing domains are structured in modern vehicles.
**Related:** Domain Controller, Zonal Architecture
### E2E Communication
**Category:** AUTOSAR
A safety mechanism ensuring data integrity across communication channels.
### E2E Counter
**Category:** Communication Security
A counter used to prevent replay attacks in automotive networks.
### E2E CRC
**Category:** Data Integrity
Cyclic redundancy check used in end-to-end protection.
### E2E Freshness Value
**Category:** Security
A value ensuring message freshness and preventing replay attacks.
### E2E Protection (End-to-End Protection)
**Category:** Automotive Security
A mechanism ensuring integrity and authenticity of signals from sender ECU to receiver ECU.
### EBCM (Electronic Brake Control Module)
**Category:** Vehicle Control
An ECU dedicated to controlling electronic braking systems including ABS, ESC, and regenerative braking; a safety-critical component often communicating via CAN and subject to security hardening.
**Related:** Brake ECU, ABS, ESC, ISO 26262
### eCall Spoofing
**Category:** Attack
Manipulating eCall systems to trigger false emergency messages.
### eCall System
**Category:** Automotive Safety
An emergency communication system that automatically contacts emergency services during accidents.
### ECC (Elliptic Curve Cryptography)
**Category:** Cryptography
A public-key cryptography approach based on elliptic curve mathematics, offering equivalent security to RSA with smaller key sizes, widely used in automotive for TLS, digital signatures, and key exchange (e.g., ECDSA, ECDH).
**Related:** RSA, ECDSA, ECDH, PQC, TLS
### ECE R10
**Category:** Automotive Regulation
UN Economic Commission for Europe Regulation No. 10 governing electromagnetic compatibility (EMC) of vehicles and electronic sub-assemblies.
**Related:** EMC, WP.29
### ECM (Engine Control Module)
**Category:** Vehicle Control
An ECU that manages engine operation parameters such as fuel injection, ignition timing, and emissions control; historically one of the first ECUs targeted in automotive security research.
**Related:** ECU, Powertrain, CAN Bus, OBD-II
### ECU (Electronic Control Unit)
**Category:** Automotive System
A computing unit responsible for controlling specific vehicle functions such as braking, engine, infotainment, or ADAS.
### ECU Authentication
**Category:** Security
Verification of ECU identity before allowing communication or updates.
### ECU Authorization
**Category:** Access Control
Determining allowed actions for an authenticated ECU.
### ECU Bricking
**Category:** System Failure
A condition where ECU becomes non-functional due to failed firmware or corruption.
### ECU Communication Gateway Attack
**Category:** Automotive Attack
Attacks targeting gateway ECUs to bypass network segmentation.
### ECU Communication Stack
**Category:** Automotive Network
Protocol stack used for ECU communication including CAN, Ethernet, and diagnostics layers.
### ECU Configuration
**Category:** Vehicle Engineering
Settings and parameters defining ECU behavior.
### ECU Debug Interface Exploit
**Category:** Hardware Attack
Exploitation of ECU debug interfaces such as JTAG, SWD, or UART.
### ECU Exploit
**Category:** Attack
A method used to compromise ECU functionality.
### ECU Firmware
**Category:** Embedded Security
Software running on ECUs that controls hardware behavior.
### ECU Firmware Integrity Check
**Category:** Secure Boot
Verification of ECU firmware before execution.
### ECU Flashing
**Category:** Diagnostics / OTA
The process of writing firmware to ECU memory.
### ECU Fuzzing
**Category:** Security Testing
Sending malformed inputs to ECU interfaces to find vulnerabilities.
### ECU Gateway
**Category:** Vehicle Network
A central ECU responsible for routing communication between networks.
### ECU Identity
**Category:** Security
A unique identifier assigned to each ECU for authentication.
### ECU Isolation
**Category:** Vehicle Security
Segmentation of ECUs to prevent cross-domain attacks.
### ECU Reprogramming
**Category:** Diagnostics
Updating ECU firmware via diagnostic or OTA mechanisms.
### ECU Reverse Engineering
**Category:** Reverse Engineering
Analyzing ECU firmware to understand functionality and vulnerabilities.
### ECU Runtime Monitoring
**Category:** Security Monitoring
Monitoring ECU behavior during execution to detect anomalies.
### ECU Scheduling
**Category:** Real-Time Systems
Mechanism that schedules tasks within ECU operating systems.
### ECU Secure Boot
**Category:** Boot Security
A mechanism ensuring only trusted firmware is executed on ECU startup.
### ECU Secure Update
**Category:** OTA Security
Secure mechanism for updating ECU firmware.
### ECU Security Policy
**Category:** Security Governance
Rules defining allowed ECU behavior and communication.
### ECU Telemetry
**Category:** Vehicle Data
Data collected from ECUs for monitoring and analytics.
### ECU Unlock
**Category:** Security / Attack
Bypassing ECU security mechanisms to gain full control.
### EDR (Event Data Recorder)
**Category:** Vehicle Forensics
A system that records vehicle data before and after crash events.
### EDR Data Extraction
**Category:** Forensics Attack
Retrieving stored crash or telemetry data from EDR systems.
### EEPROM
**Category:** Memory
Electrically erasable programmable read-only memory used in ECUs for persistent storage.
### EEPROM Attack
**Category:** Hardware Attack
Modification of EEPROM content to alter ECU behavior.
### EEPROM Dump
**Category:** Reverse Engineering
Extraction of EEPROM data for analysis.
### eFuse
**Category:** Hardware Security
One-time-programmable electronic fuses used in microcontrollers to permanently store security settings such as debug disable flags, secure boot keys, and encryption keys; once blown, the configuration cannot be reversed.
**Related:** Secure Boot, OTP, Hardware Root of Trust
### Embedded Cryptography Module
**Category:** Security
A module providing cryptographic operations in embedded systems.
### Embedded Debug Interface
**Category:** Hardware Security
Low-level interfaces such as JTAG or SWD used for debugging embedded systems.
### Embedded Linux
**Category:** Operating System
A Linux-based operating system used in automotive infotainment and gateway systems.
### Embedded Security
**Category:** Security
Security mechanisms applied to embedded automotive systems.
### Embedded System
**Category:** Automotive Computing
A computing system integrated into vehicle hardware for dedicated functions.
### EMFI (Electromagnetic Fault Injection)
**Category:** Hardware Attack
A physical attack technique that uses localized electromagnetic fields to inject faults into microprocessor computations, enabling bypass of security checks or extraction of cryptographic keys in automotive ECUs.
**Related:** Fault Injection, Glitching, HSM, Side Channel Attack
### EMI (Electromagnetic Interference)
**Category:** Hardware / EMC
Electromagnetic disturbances that can disrupt electronic vehicle components, potentially causing safety-critical ECU malfunctions; managed through EMC compliance testing per standards like ECE R10 and ISO 11452.
**Related:** ECE R10, EMC, ISO 11452, EMFI
### eMMC (embedded Multi Media Card)
**Category:** Storage
Embedded flash storage commonly used in automotive infotainment and telematics systems; contains firmware and user data requiring protection against physical extraction and tampering.
**Related:** UFS, Flash Storage, RPMB
### Encryption
**Category:** Cryptography
The process of converting plaintext into ciphertext.
### Encryption Engine
**Category:** Hardware Security
Hardware module performing cryptographic operations.
### Encryption Key
**Category:** Cryptography
A key used to encrypt or decrypt data.
### End-to-End Encryption (E2EE)
**Category:** Security
Encryption ensuring only sender and receiver can access plaintext data.
### Endpoint Security
**Category:** Security
Protection of endpoints such as ECUs, IVI systems, or gateways.
### ENISA
**Category:** Security Organization
The European Union Agency for Cybersecurity, providing guidance, best practices, and threat intelligence for automotive cybersecurity, including guidelines for connected vehicle security and IoT protection.
**Related:** ETSI, NIS Directive, Threat Intelligence, ISO 21434
### EPS (Electric Power Steering)
**Category:** Vehicle Control
A steering system assisted by electric motors controlled by an ECU, replacing hydraulic systems; a safety-critical component vulnerable to cyber attacks targeting steering control manipulation.
**Related:** Steer-by-wire, ISO 26262, ASIL, CAN Bus
### Error Frame (CAN)
**Category:** CAN Protocol
A frame indicating transmission errors in CAN communication.
### Error Injection
**Category:** Automotive Attack
Deliberate introduction of faults into system communication or hardware.
### eSIM (embedded SIM)
**Category:** Connectivity
A soldered-in SIM chip supporting remote SIM provisioning, used in automotive telematics for cellular connectivity; introduces security considerations for profile management and over-the-air SIM switching.
**Related:** Remote SIM Provisioning, GSMA, Telematics, IMEI
### ESSID (Extended Service Set Identifier)
**Category:** Wireless Network
The human-readable name identifying an 802.11 Wi-Fi network (commonly called the SSID); targeted during evil twin attacks and wireless reconnaissance of in-vehicle hotspots.
**Related:** BSSID, Evil Twin Attack, Aircrack-ng, WiFi Pineapple
### Ethernet Automotive
**Category:** Automotive Network
High-speed network technology used for in-vehicle communication.
### Ethernet Frame Injection
**Category:** Network Attack
Injection of malicious Ethernet frames into vehicle networks.
### Ethernet Sniffing
**Category:** Reverse Engineering
Capturing Ethernet traffic for analysis.
### Ethernet TSN (Time Sensitive Networking)
**Category:** Automotive Network
A set of IEEE standards enabling deterministic Ethernet communication in vehicles.
### ETSI (European Telecommunications Standards Institute)
**Category:** Standards Organization
A European standards organization producing ICT standards including GSM, UMTS, LTE, C-V2X, and ITS-G5; relevant to automotive cellular connectivity and V2X communication security.
**Related:** GSM, LTE, C-V2X, ITS, IEEE 802.11p
### Event Correlation
**Category:** Security Analytics
Analyzing multiple events to detect complex attack patterns.
### Event Logging
**Category:** Security Monitoring
Recording system events for auditing and analysis.
### Evil Twin Attack
**Category:** Wireless Attack
A wireless attack where a rogue Wi-Fi access point impersonates a legitimate network (matching ESSID/BSSID) to intercept traffic from vehicle hotspots or mobile devices; executed using tools like Airbase-NG, MitmAP, or WiFi Pineapple.
**Related:** Aircrack-ng, BSSID, ESSID, MitM, WiFi Pineapple, Airbase-NG
### EVITA
**Category:** Security Framework
E-safety Vehicle Intrusion Protected Applications, a project defining HSM security levels (full, medium, light) for automotive ECUs, specifying cryptographic services and hardware security requirements for in-vehicle communication.
**Related:** HSM, SHE, SecOC, AUTOSAR
### EVSE (Electric Vehicle Supply Equipment)
**Category:** EV Charging
The charging station infrastructure for electric vehicles, communicating with the vehicle via protocols like ISO 15118; presents an attack surface for grid-to-vehicle communication, payment, and charging control.
**Related:** ISO 15118, CCS, CHAdeMO, Smart Charging
### Execution Environment
**Category:** System Architecture
Runtime environment where software executes.
### Execution Flow
**Category:** Software
The sequence in which instructions are executed in a program.
### Execution Flow Hijacking
**Category:** Attack
Manipulating program execution to run attacker-controlled code.
### Execution Policy
**Category:** Security
Rules governing what code or processes are allowed to execute.
### Exploit
**Category:** Vulnerability
A method or code that takes advantage of a security flaw.
### Exploit Chain
**Category:** Attack
A sequence of exploits used to achieve full system compromise.
### Exploit Detection
**Category:** Security Monitoring
Identification of exploit attempts in system behavior.
### Exploit Mitigation
**Category:** Security
Techniques used to prevent or limit exploitation of vulnerabilities.
### Extended ECU
**Category:** Vehicle Architecture
High-performance ECU used in domain or zonal computing architectures.
### External Diagnostic Interface
**Category:** Diagnostics
Interfaces such as OBD-II used for vehicle diagnostics.

## F
### Fallback Firmware
**Category:** Firmware
Backup firmware used when primary firmware fails validation.
### Fallback Mode
**Category:** Vehicle System
A degraded operational mode activated when primary systems fail or become unavailable.
### Fast Boot Attack
**Category:** Boot Security Attack
Exploitation of reduced security checks during fast boot processes.
### FAT (File Allocation Table)
**Category:** File System
A file system structure used in embedded and automotive storage systems.
### Fault Detection
**Category:** Monitoring
Mechanisms used to identify system faults or abnormal behavior.
### Fault Injection
**Category:** Hardware Attack
A technique that deliberately introduces faults into a system (voltage, clock, EM) to bypass security or extract secrets.
### Fault Isolation
**Category:** Safety Architecture
Techniques used to isolate faulty components to prevent system-wide failure.
### Fault Logging
**Category:** Diagnostics
Recording system faults for later analysis.
### Fault Tolerance
**Category:** Functional Safety
The ability of a system to continue operation despite failures.
### Fault Tree Analysis (FTA)
**Category:** Safety Engineering
A top-down analytical method used to identify causes of system failures.
### Feature Abuse
**Category:** Attack Technique
Exploitation of legitimate system features to achieve malicious goals.
### FFI (Foreign Function Interface)
**Category:** Software
A mechanism allowing programs to call functions written in other languages.
### Firewall
**Category:** Network Security
A system that controls incoming and outgoing network traffic based on security rules.
### Firewall Bypass
**Category:** Network Attack
Techniques used to circumvent firewall restrictions.
### Firewall Rule Injection
**Category:** Attack
Insertion of malicious rules into firewall configuration.
### Firmware
**Category:** Embedded System
Software embedded in hardware devices such as ECUs that controls system behavior.
### Firmware Analysis
**Category:** Reverse Engineering
The process of analyzing firmware to understand behavior and vulnerabilities.
### Firmware Attack
**Category:** Hardware Attack
An attack targeting firmware to gain persistent control over a device.
### Firmware Backdoor
**Category:** Malware / Attack
Hidden functionality embedded in firmware allowing unauthorized access.
### Firmware Dump
**Category:** Forensics
A complete extraction of firmware memory contents.
### Firmware Extraction
**Category:** Reverse Engineering
Retrieving firmware from hardware or storage for analysis.
### Firmware Integrity Check
**Category:** Security
Checking whether firmware has been tampered with.
### Firmware Modification
**Category:** Attack
Unauthorized alteration of firmware code or configuration.
### Firmware Over-the-Air (FOTA)
**Category:** OTA
Remote firmware update mechanism over wireless or network connections.
### Firmware Reflash
**Category:** OTA / Diagnostics
The process of rewriting firmware to a device or ECU.
### Firmware Rollback Attack
**Category:** Security Attack
Forcing a system to downgrade to a vulnerable firmware version.
### Firmware Signing
**Category:** Security
Digital signing of firmware to ensure authenticity and integrity.
### Firmware Supply Chain Attack
**Category:** Supply Chain Security
Compromising firmware during development, build, or distribution stages.
### Firmware Verification
**Category:** Secure Boot
Validation of firmware before execution.
### Flash Attack
**Category:** Hardware Attack
Manipulating flash memory to alter system behavior.
### Flash Bootloader
**Category:** Boot Security
A specialized bootloader that resides in a protected region of ECU flash memory and manages firmware programming, verification, and activation via in-vehicle network protocols (CAN, LIN, FlexRay, Ethernet). Flash bootloaders typically operate in a diagnostic session (e.g., UDS 0x34-0x36 routine) and implement security mechanisms including cryptographic signature verification, rollback protection, and secure diagnostic access authentication to prevent unauthorized firmware modifications.
**Related:** UDS, CAN Bootloader, SBL, SecOC, OTA, Firmware Signing, Rollback Protection
### Flash Dump
**Category:** Reverse Engineering
Extraction of flash memory contents for analysis.
### Flash Injection Attack
**Category:** Automotive Attack
Injecting malicious code into flash memory regions.
### Flash Memory
**Category:** Storage
Non-volatile memory used in ECUs to store firmware and data.
### Flash Reprogramming
**Category:** OTA / Diagnostics
Updating firmware stored in flash memory.
### Flash Wear Leveling
**Category:** Storage Management
A technique used to extend flash memory lifespan by distributing writes.
### Fleet Management System
**Category:** Automotive Cloud
A system for managing and monitoring vehicle fleets.
### Fleet Telemetry
**Category:** Vehicle Data
Real-time data collected from multiple vehicles in a fleet.
### FlexRay
**Category:** Automotive Network
A deterministic, fault-tolerant vehicle bus protocol for safety-critical applications such as X-by-Wire, offering higher bandwidth and redundancy compared to CAN.
**Related:** CAN, LIN, Automotive Ethernet
### Flow Control
**Category:** Networking
Mechanisms used to regulate data transmission rates between systems.
### Flow Control Attack
**Category:** Network Attack
Manipulating flow control mechanisms to cause denial of service or data loss.
### FMEA (Failure Mode and Effects Analysis)
**Category:** Safety Engineering
A systematic technique for identifying potential failure modes in a system, their causes, and effects, used in automotive safety engineering (ISO 26262) to assess risks and define mitigation measures; extended as FMECA to include criticality analysis.
**Related:** ISO 26262, FTA, HARA, RPN, ASIL
### FMVSS
**Category:** Automotive Regulation
U.S. Federal Motor Vehicle Safety Standards, mandatory regulations administered by NHTSA governing the safety of vehicles sold in the United States.
**Related:** WP.29, GB 44495, ECE R10
### Forensics Analysis
**Category:** Security Investigation
The process of analyzing system artifacts to reconstruct security incidents.
### Forensics Dump
**Category:** Incident Response
A full extraction of system memory or storage for investigation.
### Forwarding ECU
**Category:** Vehicle Network
An ECU responsible for routing messages between network segments.
### Frame Injection
**Category:** Automotive Network Attack
Injection of malicious frames into CAN, Ethernet, or LIN networks.
### Frame Replay
**Category:** Attack
Re-sending captured network frames to manipulate system behavior.
### Frame Sniffing
**Category:** Reverse Engineering
Capturing communication frames from vehicle networks.
### Frame Spoofing
**Category:** Network Attack
Forging network frames to impersonate legitimate ECUs.
### Frame Timing Manipulation
**Category:** Automotive Attack
Altering message timing to exploit ECU synchronization logic.
### Frequency Hopping
**Category:** Wireless Security
A technique used in wireless communication to reduce interception and interference.
### FTTI (Fault Tolerant Time Interval)
**Category:** Functional Safety
The maximum time span during which a vehicle system can operate with a fault before the safety goal is violated, defined per ISO 26262; determines the urgency required for fault detection, diagnosis, and safe-state transition in automotive systems.
**Related:** ISO 26262, ASIL, Fault Tolerance, Functional Safety
### Full System Dump
**Category:** Forensics
Complete extraction of system memory, storage, and state for analysis.
### Function Hook Injection
**Category:** Attack Technique
Injecting hooks into system functions to alter execution flow.
### Function Hooking
**Category:** Reverse Engineering / Attack
Intercepting function calls to modify or observe behavior.
### Function Safety Mechanism
**Category:** Safety Engineering
Mechanisms that ensure system functions meet safety requirements.
### Functional Decomposition
**Category:** System Architecture
Breaking system functions into smaller components for analysis or design.
### Functional Safety (FuSa)
**Category:** Automotive Safety
A discipline ensuring safety-related systems operate correctly in the presence of failures.
### Functional Testing
**Category:** QA / Security
Testing system functionality against expected behavior.
### Fuzzer
**Category:** Security Tool
A tool used to perform fuzz testing.
### Fuzzing
**Category:** Security Testing
An automated technique that sends random or malformed inputs to detect vulnerabilities.
### Fuzzing Campaign
**Category:** Security Testing
A structured fuzzing operation targeting specific systems or protocols.
### Fuzzing Coverage
**Category:** Testing Metrics
Measurement of how much of the system is exercised during fuzzing.
### Fuzzing Engine
**Category:** Security Tool
Core component that generates and mutates test inputs.
### Fuzzing Target
**Category:** Security Testing
The system, interface, or protocol being tested by fuzzing.

## G
### 4G/5G Modem Gateway
**Category:** Vehicle Connectivity
A module providing cellular connectivity between vehicle systems and cloud services.
### 5G Vehicle Connectivity
**Category:** Automotive Cloud
Use of 5G networks for V2X and cloud-connected vehicle services.
### Gateway Bypass
**Category:** Automotive Attack
A technique used to circumvent gateway filtering rules and access restricted vehicle networks.
### Gateway Diagnostic Bypass
**Category:** Automotive Attack
Bypassing gateway restrictions to access diagnostic services.
### Gateway ECU
**Category:** Vehicle Network / Security
An ECU responsible for routing, filtering, and controlling communication between different in-vehicle network domains.
**Related:** Domain Controller, CAN Gateway
### Gateway ECU Firmware Attack
**Category:** Firmware Attack
Compromising firmware running on gateway ECUs.
### Gateway Firewall
**Category:** Vehicle Security
A firewall implemented on or within a gateway ECU to enforce communication policies.
### Gateway IDS
**Category:** Intrusion Detection
Intrusion detection system deployed at vehicle gateways.
### Gateway Isolation Failure
**Category:** Security Vulnerability
Failure in separating communication domains through gateway systems.
### Gateway Load Balancing
**Category:** Vehicle Architecture
Distribution of network traffic across multiple gateway ECUs.
### Gateway Protocol Translation
**Category:** Vehicle Network
Translation of communication between different in-vehicle protocols.
### Gateway Runtime Monitoring
**Category:** Security Monitoring
Real-time observation of gateway ECU behavior for anomalies.
### Gateway Secure Boot
**Category:** Secure Boot
Ensuring gateway ECU firmware integrity during boot process.
### Gateway Traffic Manipulation
**Category:** Network Attack
Altering or rerouting traffic passing through vehicle gateways.
### GATT (Generic Attribute Profile)
**Category:** Bluetooth / BLE
A BLE protocol defining how data is structured and exchanged.
### GATT Exploit
**Category:** Bluetooth Attack
Exploitation of vulnerabilities in BLE GATT services.
### GB 38031-2020
**Category:** Automotive Safety Standard
Chinese mandatory national standard specifying safety requirements for traction batteries used in electric vehicles, covering electrical, mechanical, and thermal safety.
**Related:** EV Safety, Battery Safety
### GB 44495-2024
**Category:** Automotive Cybersecurity Standard
Chinese mandatory national standard specifying technical requirements for vehicle-level information security, covering external communication, in-vehicle network, and data security. Effective from January 1, 2026.
**Related:** ISO 21434, UN R155, GB/T 40861
### GB 44496-2024
**Category:** Automotive Cybersecurity Standard
Chinese mandatory national standard specifying general technical requirements for vehicle software updates, including update package security, rollback mechanisms, and failure handling. Effective from January 1, 2026.
**Related:** UN R156, ISO 24089, OTA
### GB 44497-2024
**Category:** Automotive Safety Standard
Chinese mandatory national standard specifying technical requirements for automated driving data recording systems in intelligent connected vehicles.
**Related:** Autonomous Driving, Data Security
### GB/T 20234
**Category:** Charging Standard
Chinese recommended national standard for electric vehicle conductive charging connection systems, defining AC and DC charging connector interfaces and pinouts.
**Related:** GB/T 27930, CCS, CHAdeMO
### GB/T 27930
**Category:** Charging Standard
Chinese recommended national standard defining the communication protocol between EV battery management systems and off-board chargers, based on CAN communication with 29-bit extended frames.
**Related:** GB/T 20234, DIN 70121, ISO 15118
### GB/T 32960
**Category:** Telematics Standard
Chinese recommended national standard for electric vehicle remote service and management systems, defining data collection, transmission, and management requirements for EV monitoring.
**Related:** GB/T 40855, JT/T 808, NGTP
### GB/T 40855-2021
**Category:** Automotive Cybersecurity Standard
Chinese recommended national standard specifying information security technical requirements and test methods for electric vehicle remote service and management systems.
**Related:** GB 44495, EV Connectivity
### GB/T 40856-2021
**Category:** Automotive Cybersecurity Standard
Chinese recommended national standard specifying information security technical requirements and test methods for vehicle information interaction systems.
**Related:** GB 44495, V2X
### GB/T 40857-2021
**Category:** Automotive Cybersecurity Standard
Chinese recommended national standard specifying information security technical requirements and test methods for vehicle gateways.
**Related:** GB 44495, Gateway ECU
### GB/T 40861-2021
**Category:** Automotive Cybersecurity Standard
Chinese recommended national standard specifying general technical requirements for automotive information security, providing a foundational framework for vehicle cybersecurity.
**Related:** GB 44495, ISO 21434
### GB/T 41871-2022
**Category:** Data Security Standard
Chinese recommended national standard specifying security requirements for vehicle data processing, covering data collection, storage, transmission, and use.
**Related:** GDPR, Data Security
### GDPR (General Data Protection Regulation)
**Category:** Data Protection Regulation
EU regulation governing the processing of personal data and privacy, applicable to connected vehicles that collect and process driver and passenger data.
**Related:** Data Privacy, GB/T 41871
### GENIVI/COVESA
**Category:** Industry Alliance
An industry alliance (now COVESA - Connected Vehicle Systems Alliance) developing open standards for in-vehicle infotainment, connectivity, and vehicle software architecture.
**Related:** AUTOSAR, AGL, Android Automotive
### Geo-Based Access Control
**Category:** Security Policy
Access control based on geographic location constraints.
### Geofencing
**Category:** Vehicle Cloud
Restricting vehicle functionality based on geographic location.
### Geofencing Bypass
**Category:** Attack
Circumventing location-based restrictions in vehicle systems.
### GGSN (Gateway GPRS Support Node)
**Category:** Cellular Infrastructure
A network node in GSM/GPRS architecture that provides internetworking between the mobile cellular network and external packet data networks; relevant to automotive telematics backend connectivity.
**Related:** GPRS, GSM, TCU, BTS
### GID (Group Identifier)
**Category:** Access Control
Identifier used to manage group-based permissions.
### Global ECU Coordination
**Category:** Vehicle Architecture
Coordination mechanism across multiple ECUs in distributed systems.
### Global Key Management
**Category:** Cryptography
System for managing cryptographic keys across distributed vehicle ecosystems.
### Global Threat Intelligence
**Category:** Security Intelligence
Aggregated cybersecurity intelligence across vehicles and cloud platforms.
### Global Vehicle Platform
**Category:** Automotive Architecture
A unified software/hardware platform used across multiple vehicle models.
### GMSL (Gigabit Multimedia Serial Link)
**Category:** Automotive Interface
A high-speed serial link technology developed by Maxim Integrated (now Analog Devices) for transmitting video, audio, and control data over a single cable or fiber, widely used in automotive camera, display, and infotainment systems; presents an attack surface for sensor data injection.
**Related:** FPD-Link, MIPI CSI-2, Camera ECU, Display ECU
### GNSS
**Category:** Navigation Systems
Global Navigation Satellite Systems including GPS, Galileo, GLONASS, BeiDou.
### GNSS Receiver Spoof Detection
**Category:** Navigation Security
Mechanisms detecting falsified satellite navigation signals.
### GNSS Spoofing
**Category:** Attack
Manipulating satellite navigation signals to alter perceived location.
### Governance Policy
**Category:** Security Governance
Rules and frameworks governing automotive cybersecurity management.
### GPGPU (General-Purpose GPU Computing)
**Category:** Compute
Using GPU for non-graphics computation, often used in AI or ADAS workloads.
### GPIO Attack
**Category:** Hardware Attack
Manipulation of General Purpose Input/Output pins to influence system behavior.
### GPRS (General Packet Radio Service)
**Category:** Cellular Communication
A packet-oriented mobile data service for GSM networks providing IP connectivity for vehicle telematics control units (TCUs); superseded by 3G/4G/5G but still used in legacy vehicles.
**Related:** GSM, GGSN, TCU, BTS, Cellular Network Attack
### GPRS Exploit
**Category:** Cellular Attack
Exploitation of packet data services in GSM networks.
### GPS (Global Positioning System)
**Category:** Navigation / Vehicle Systems
A satellite-based positioning system used in vehicles for navigation and tracking.
### GPS Jamming
**Category:** Wireless Attack
Blocking or disrupting GPS signals to degrade navigation accuracy.
### GPS Spoofing
**Category:** Wireless Attack
An attack that transmits fake GPS signals to mislead vehicle positioning systems.
### GPU (Graphics Processing Unit)
**Category:** Hardware / IVI
A processor used for rendering graphics and accelerating compute tasks in IVI systems.
### GPU Driver Exploit
**Category:** System Attack
Exploitation of vulnerabilities in GPU driver software.
### GPU Memory Leak
**Category:** Vulnerability
Unauthorized access to GPU memory due to isolation failures.
### GPU Rendering Pipeline Attack
**Category:** Attack Technique
Manipulating rendering processes to execute malicious operations or leak data.
### GPU Shader Attack
**Category:** Graphics Security
Exploitation of GPU shader programs for unauthorized computation or leakage.
### Graph Attack Path Discovery
**Category:** Threat Modeling
Identifying possible attack paths using graph-based analysis.
### Graph Security Analysis
**Category:** Security Analytics
Applying graph theory to analyze relationships between assets, vulnerabilities, and attacks.
### Graph Traversal Attack
**Category:** Advanced Attack Modeling
Using graph traversal techniques to identify multi-stage attack paths.
### Graph-Based Attack Modeling
**Category:** Threat Modeling
Using graph structures to represent multi-step attack paths in complex systems.
### Ground Truth Validation
**Category:** Security Testing
Verification of system behavior against known correct states.
### GSM Attack Surface
**Category:** Cellular Security
The set of vulnerabilities exposed in GSM-based communication systems.
Exploitation of vulnerabilities in GSM baseband firmware.
### GSM Interception
**Category:** Wireless Attack
Intercepting GSM communication between vehicle and infrastructure.
### GSM SIM Cloning
**Category:** Cellular Attack
Cloning SIM identity to impersonate a legitimate device.
### GStreamer Pipeline Security
**Category:** Multimedia Security
Security analysis of media processing pipelines used in IVI systems.
### Guest Isolation Bypass
**Category:** Virtualization Attack
Breaking isolation between guest OS instances.
### Guest Memory Isolation
**Category:** Virtualization Security
Isolation of memory between virtual machines in automotive systems.
### Guest OS (IVI Virtualization)
**Category:** Automotive OS
A virtualized operating system running inside IVI or cockpit systems.

## H
### HackRF One
**Category:** Security Tool / SDR
An open-source software-defined radio peripheral by Great Scott Gadgets operating from 1 MHz to 6 GHz, used in automotive security research for cellular network analysis, GPS spoofing, and RF signal capture.
**Related:** SDR, BladeRF, RTL-SDR, USRP, GSM, Rogue BTS
### Handoff Attack (Cellular)
**Category:** Cellular Security
Exploiting handover mechanisms between cellular base stations.
### Handoff Failure Attack
**Category:** Cellular Attack
Disrupting cellular network handoff processes to cause service interruption.
### HARA (Hazard Analysis and Risk Assessment)
**Category:** Safety Engineering
A systematic process defined in ISO 26262 for identifying vehicle hazards, assessing their risk based on severity, exposure, and controllability, and assigning ASIL levels; foundational for linking functional safety with cybersecurity risk assessment in ISO/SAE 21434.
**Related:** ISO 26262, ASIL, TARA, FMEA, HAZOP
### Hardware Acceleration Attack
**Category:** Hardware Security
Exploiting vulnerabilities in hardware acceleration components.
### Hardware Event Logging
**Category:** Security Monitoring
Recording hardware-level events for security analysis.
### Hardware Performance Counter Attack
**Category:** Side Channel Attack
Using CPU performance counters to infer sensitive information.
### Hardware Root Certificate
**Category:** PKI / Hardware Security
A trusted certificate stored in hardware used for boot and authentication.
### Hardware Security Enforcement
**Category:** Security Architecture
Mechanisms enforcing security policies at hardware level.
### Hardware Timing Attack
**Category:** Side Channel Attack
Exploiting timing differences in hardware operations to extract secrets.
### Hash Collision Attack
**Category:** Cryptographic Attack
Finding two inputs that produce the same hash output.
### HAZOP (Hazard and Operability Study)
**Category:** Safety Engineering
A structured and systematic technique for examining a system to identify potential hazards and operability problems, using guide-word-based deviation analysis on design parameters; applied in automotive safety and cybersecurity analysis to uncover failure modes.
**Related:** HARA, FMEA, ISO 26262, TARA
### Head Unit (IVI Head Unit)
**Category:** Automotive System
Central infotainment system in a vehicle.
### Headless ECU
**Category:** Vehicle Architecture
An ECU without direct user interface, typically backend control units.
### HEAVENS
**Category:** Security Framework
HEAling Vulnerabilities to ENhance Software Security and Safety, a threat analysis model combining STRIDE with CIA triad assessment for automotive E/E systems, mapping threats to security properties and impact levels.
**Related:** STRIDE, TARA, EVITA, Attack Tree
### Heterogeneous ECU Architecture
**Category:** Vehicle Architecture
Architecture combining different types of processors and ECUs.
### Hicar
**Category:** Vehicle Connectivity
A smartphone projection technology developed by Huawei for integrating mobile devices with vehicle infotainment systems, widely used in Chinese-market vehicles.
**Related:** CarPlay, Android Auto, CarLife
### High-Speed CAN Gateway
**Category:** Automotive Network
Gateway handling high-speed CAN communication between ECUs.
### HMAC (Hash-based Message Authentication Code)
**Category:** Cryptography
A mechanism used to verify data integrity and authenticity.
### HMI (Human Machine Interface)
**Category:** IVI / UX Security
Interface between human users and vehicle systems, including dashboards and infotainment systems.
### HMI Display Injection
**Category:** Attack
Manipulating vehicle display output to show false information.
### HMI Firmware
**Category:** IVI System
Firmware controlling human-machine interface components.
### HMI Injection Attack
**Category:** Automotive Attack
Injection of malicious content into vehicle displays or control interfaces.
### HMI Spoofing
**Category:** Attack Technique
Manipulating UI elements to mislead users.
### HNI (Home Network Identity)
**Category:** Cellular Identity
A unique identifier combining MCC (Mobile Country Code) and MNC (Mobile Network Code) that identifies a specific mobile network operator; used in vehicle TCU SIM provisioning and IMSI-based attacks.
**Related:** MCC, MNC, IMSI, TCU, GSM
### Host ECU
**Category:** Vehicle Architecture
Primary ECU hosting multiple services or virtualized systems.
### Host Isolation Bypass
**Category:** Virtualization Attack
Breaking isolation between host system and guest environments.
### HPSE (Hardware Protected Security Environment)
**Category:** Hardware Security
A hardware-isolated security environment providing a trusted execution context within automotive ECUs, offering protected storage, cryptographic services, and secure execution isolated from the main processor; conceptually similar to ARM TrustZone and used as a foundation for secure boot and key management.
**Related:** HSM, TrustZone, Secure Element, Hardware Root of Trust
### HSM (Hardware Security Module)
**Category:** Hardware Security
A dedicated hardware component used to securely store cryptographic keys and perform cryptographic operations.
**Related:** TPM, Secure Element
### HSM Firmware
**Category:** Embedded Security
Firmware running inside the HSM responsible for cryptographic operations and secure storage.
### HTA (Hardware Trust Anchor)
**Category:** Hardware Security
A hardware component serving as the root of trust in an automotive ECU, providing immutable security functions such as secure boot verification, key storage, and cryptographic operations that cannot be bypassed by software; the foundation upon which the chain of trust is built.
**Related:** Hardware Root of Trust, HSM, Secure Boot, eFuse, TPM
### HTTP API Exploit
**Category:** API Security
Exploitation of vulnerabilities in HTTP-based APIs.
### HTTP Request Injection
**Category:** Web Attack
Injecting malicious payloads into HTTP requests.
### HTTPS Interception
**Category:** Network Attack
Intercepting encrypted HTTPS traffic via MITM techniques.
### Hybrid Communication Stack
**Category:** Vehicle Network
A communication architecture combining multiple protocols (CAN, Ethernet, LIN).
### Hybrid ECU
**Category:** Vehicle Architecture
An ECU that combines multiple functional domains such as infotainment, ADAS, and connectivity.
### Hybrid Security Model
**Category:** Security Architecture
A model combining hardware, software, and cloud security mechanisms.
### Hypervisor
**Category:** Virtualization
A software layer that creates and manages multiple virtual machines on a single hardware platform.
### Hypervisor Escape
**Category:** Virtualization Attack
An attack that breaks isolation between virtual machines and the hypervisor.
### Hypervisor Memory Isolation
**Category:** Security
Mechanisms ensuring memory separation between virtual machines.
### Hypervisor Security Domain
**Category:** Security Architecture
Isolated execution domain managed by a hypervisor.
### Hysteresis Attack
**Category:** Control Systems Attack
Exploiting system threshold behavior to induce unsafe states.

## I
### I2C (Inter-Integrated Circuit)
**Category:** Hardware / Bus Protocol
A short-distance, two-wire serial communication protocol used for connecting low-speed peripherals (sensors, EEPROMs, GPIO expanders) to ECUs in automotive systems; lacks built-in security mechanisms, making it a target for bus sniffing and data manipulation.
**Related:** SPI, CAN, LIN, Sensor Bus
### IAM (Identity and Access Management)
**Category:** Security Architecture
A framework for managing digital identities and controlling access to resources in automotive and cloud systems.
### IATF 16949
**Category:** Quality Standard
The International Automotive Task Force quality management system standard for automotive production and service parts, harmonizing national standards; while primarily quality-focused, its requirements for defect prevention and risk management intersect with cybersecurity and functional safety.
**Related:** ISO 9001, ISO 26262, ASPICE, Quality Management
### ICCOA
**Category:** Industry Alliance
The Intelligent Connected Car Open Alliance, a Chinese industry alliance developing standards for smartphone-to-vehicle connectivity, digital key, and cross-platform interoperability.
**Related:** CCC, CarPlay, Android Auto
### Identity
**Category:** Security
A unique representation of an entity such as ECU, user, or service within a vehicle system.
### Identity Provisioning
**Category:** Security
Process of assigning identities to ECUs or devices.
### Identity Spoofing
**Category:** Attack Technique
Impersonating a legitimate identity to gain unauthorized access.
### Identity Verification
**Category:** Security
Validation of claimed identity against trusted sources.
### IDS Evasion
**Category:** Attack Technique
Methods used to bypass intrusion detection systems.
### IDS for CAN
**Category:** Automotive Security
Intrusion detection system designed for CAN bus networks.
### IDSM (Intrusion Detection System Manager)
**Category:** Security Architecture
An AUTOSAR module that manages intrusion detection sensors and security events across ECUs, forwarding detected anomalies to a central security operations center for analysis and response.
**Related:** AUTOSAR, IDS, CAN IDS, SecOC
### IEC 61851
**Category:** Charging Standard
International standard for electric vehicle conductive charging systems, defining general requirements, safety, and PWM-based signaling between charging infrastructure and vehicles.
**Related:** ISO 15118, GB/T 20234, DIN 70121
### IEEE 802.11p
**Category:** Wireless Standard
An amendment to the IEEE 802.11 standard for WAVE (Wireless Access in Vehicular Environments), operating on the 5.9 GHz band with up to 1000 m range; the physical layer for DSRC-based V2X communication.
**Related:** DSRC, WAVE, V2X, ITS, VANET
### Image Verification (Boot Image)
**Category:** Secure Boot
Validation of system images before execution.
### IMEI (International Mobile Equipment Identity)
**Category:** Mobile Identity
A unique 15-digit number identifying individual mobile equipment; used to identify vehicle TCUs on cellular networks and targetable for tracking or interception.
**Related:** IMSI, MSISDN, TCU, GSM, BTS
### IMSI (International Mobile Subscriber Identity)
**Category:** Mobile Identity
A unique number (up to 15 digits) identifying a cellular subscriber on GSM/UMTS/LTE networks; stored in the TCU's SIM card and targetable by IMSI catchers and rogue BTS attacks.
**Related:** IMEI, MSISDN, IMSI Catcher, TCU, GSM, Rogue BTS
### In-Vehicle Network (IVN)
**Category:** Automotive Network
Communication networks inside a vehicle including CAN, LIN, FlexRay, Ethernet.
### Information Flow Control (IFC)
**Category:** Security Architecture
A mechanism controlling how data flows between system components.
### Information Leakage
**Category:** Security Vulnerability
Unauthorized disclosure of sensitive data.
### Initialization Attack
**Category:** Boot Security Attack
Exploiting system initialization to gain early execution control.
### Initialization Sequence
**Category:** System Boot
The process of initializing system components during startup.
### Initialization Vector (IV)
**Category:** Cryptography
A random value used in encryption to ensure uniqueness.
### Injection Attack
**Category:** Security Attack
A broad category of attacks that inject malicious input into systems.
### Input Validation Failure
**Category:** Vulnerability
A security flaw caused by improper validation of input data.
### Insecure Deserialization
**Category:** Vulnerability
Processing untrusted serialized data leading to code execution.
### Instruction Flow Hijacking
**Category:** Attack
Manipulating execution flow of CPU instructions.
### Integrity Check
**Category:** Security
Verification that data or system state has not been altered.
### Integrity Monitoring
**Category:** Security Monitoring
Continuous observation of system integrity state.
### Integrity Violation
**Category:** Security Incident
A condition where system integrity is compromised.
### Interconnect Security
**Category:** Hardware Security
Protection of internal chip or SoC communication pathways.
### Interrupt Handling Attack
**Category:** Hardware Attack
Exploiting interrupt mechanisms to manipulate system execution.
### Intrusion Detection System (IDS)
**Category:** Security Monitoring
A system that detects unauthorized or malicious activities in a network or system.
### Intrusion Prevention System (IPS)
**Category:** Security Defense
A system that actively blocks detected malicious activity.
### IOMMU (Input/Output Memory Management Unit)
**Category:** Hardware Security
A hardware unit that restricts DMA access to authorized memory regions, preventing unauthorized peripheral devices from reading or writing system memory; critical for isolating untrusted hardware components in automotive SoCs and virtualized IVI platforms.
**Related:** DMA Attack, SMMU, Hypervisor, Memory Isolation
### IP Gateway Attack
**Category:** Network Attack
Exploiting IP-based gateways in vehicle connectivity systems.
### IP Spoofing
**Category:** Network Attack
Forging IP addresses to impersonate another system.
### IP Stack Exploit
**Category:** Network Vulnerability
Exploitation of vulnerabilities in TCP/IP stack implementations.
### IPC (Inter-Process Communication)
**Category:** Operating System
Mechanisms allowing processes to communicate within a system.
### IPC Attack
**Category:** System Attack
Exploiting IPC mechanisms to intercept or manipulate communication.
### IPC Hijacking
**Category:** Attack Technique
Taking control of IPC channels to alter data flow between processes.
### IPC Injection
**Category:** Attack
Injecting malicious messages into IPC communication channels.
### ISMS (Information Security Management System)
**Category:** Security Management
A systematic approach to managing information security risks based on ISO/IEC 27001, establishing policies, procedures, and controls; increasingly relevant to automotive organizations as connected vehicle programs require formalized security governance alongside ISO 21434 and UN R155 compliance.
**Related:** ISO 27001, ISO 21434, CSMS, Risk Management
### ISO 11898
**Category:** Automotive Network Standard
International standard defining the CAN physical layer and data link layer, covering high-speed (Part 2) and low-speed fault-tolerant (Part 3) CAN physical layers.
**Related:** CAN, CAN FD, ISO-TP
### ISO 14229 (UDS)
**Category:** Diagnostics
Unified Diagnostic Services protocol for ECU communication.
### ISO 14230 (KWP2000)
**Category:** Diagnostics Protocol
Keyword Protocol 2000, a diagnostic communication protocol over K-Line for ECU diagnostics and flashing, predecessor to UDS. Defined in ISO 14230.
**Related:** UDS, ISO 9141, OBD-II, KWP2000
### ISO 15118
**Category:** Vehicle Communication Standard
International standard for vehicle-to-grid (V2G) communication defining secure communication between electric vehicles and charging infrastructure.
**Related:** V2G, Charging Security
### ISO 21448 (SOTIF)
**Category:** Functional Safety Standard
International standard for Safety of the Intended Functionality, addressing hazards arising from functional insufficiencies rather than system failures.
**Related:** ISO 26262, Autonomous Driving
### ISO 22900 (MVCI)
**Category:** Diagnostics Standard
Modular Vehicle Communication Interface, an international standard defining the interface between diagnostic testers and vehicle ECUs, including D-PDU API for pass-through communication.
**Related:** UDS, DoIP, OBD-II, SAE J1979
### ISO 24089
**Category:** Automotive Software Standard
International standard for road vehicle software update engineering, defining requirements for secure and reliable OTA and wired update processes.
**Related:** ISO 21434, UN R156, OTA
### ISO 26262
**Category:** Functional Safety Standard
International standard for functional safety of electrical/electronic systems in road vehicles, defining ASIL classification from A to D and safety lifecycle requirements.
**Related:** ASIL, ISO 21448, SOTIF
### ISO 9141
**Category:** Diagnostics Protocol
An OBD-II physical layer communication standard using K-Line and L-Line for serial communication between diagnostic tools and ECUs, used primarily in European and Asian vehicles.
**Related:** KWP2000, ISO 14230, OBD-II
### ISO Stack Vulnerability
**Category:** Network Security
Weaknesses in protocol stack implementations.
### ISO-TP (ISO 15765-2)
**Category:** Diagnostics
Transport protocol used over CAN for diagnostic communication.
### ISO/SAE 21434:2021
**Category:** Automotive Cybersecurity Standard
Joint ISO/SAE international standard defining cybersecurity engineering requirements for road vehicles throughout their lifecycle, including risk assessment (TARA), threat analysis, and cybersecurity management.
**Related:** TARA, ISO 26262, UN R155, GB 44495
### ISO/SAE PAS 5112
**Category:** Automotive Cybersecurity Standard
A publicly available specification providing guidelines for auditing and assessing cybersecurity in road vehicle engineering, supporting ISO/SAE 21434 compliance.
**Related:** ISO 21434, CSMS
### Isolation Boundary
**Category:** Security Architecture
Logical separation between secure and non-secure components.
### Isolation Failure
**Category:** Security Vulnerability
Failure to maintain separation between system components.
### ITS (Intelligent Transport System)
**Category:** Transportation Infrastructure
An integrated system combining vehicles, infrastructure, and communication technologies to improve transportation safety and efficiency; encompasses V2X, VANET, and DSRC technologies.
**Related:** V2X, VANET, DSRC, WAVE, IEEE 802.11p, ETSI
### IVC (Inter-Vehicle Communication)
**Category:** V2X Communication
Wireless communication between vehicles for exchanging safety, mobility, and environmental data; a subset of V2X enabled by DSRC/WAVE or C-V2X technologies.
**Related:** V2V, V2X, DSRC, WAVE, VANET
### IVI (In-Vehicle Infotainment)
**Category:** Automotive System
A system providing entertainment, navigation, and connectivity functions in vehicles.
### IVI App Sandbox Escape
**Category:** Attack
Breaking isolation between IVI applications.
### IVI Browser Exploit
**Category:** Automotive Attack
Exploitation of browser vulnerabilities in infotainment systems.
### IVI Exploit
**Category:** Attack
A vulnerability exploitation targeting infotainment systems.
### IVI Exploitation Chain
**Category:** Attack
Multi-step exploitation targeting infotainment systems.
### IVI Firmware
**Category:** Embedded System
Software controlling infotainment system behavior.
### IVI Malware
**Category:** Malware
Malicious software targeting infotainment systems.
### IVI Network Bridge
**Category:** Vehicle Security
Bridge between IVI and vehicle networks.
### IVI Remote Access
**Category:** Security
Remote control or access to IVI systems.
### IVI Root Access
**Category:** Attack
Gaining root privileges in infotainment systems.
### IVI Security Model
**Category:** Security Architecture
Security framework for infotainment systems.
### IVI System Update
**Category:** OTA
Update process for infotainment systems.
### IVN Attack
**Category:** Automotive Attack
Attacks targeting in-vehicle networks.
### IVN Gateway
**Category:** Vehicle Architecture
A system connecting different in-vehicle networks.
### IVN Injection
**Category:** Automotive Attack
Injecting malicious messages into in-vehicle networks.
### IVN Sniffing
**Category:** Reverse Engineering
Capturing in-vehicle network traffic.

## J
### IVI Jailbreak
**Category:** Automotive Attack
Jailbreaking infotainment systems to gain unauthorized access to system functions.
### J1708 Protocol
**Category:** Automotive Network
Legacy serial communication protocol used in older vehicle systems.
### J1939 Message Injection
**Category:** Automotive Attack
Injection of malicious messages into J1939 communication networks.
### J1939 Protocol
**Category:** Automotive Network
A CAN-based protocol used in heavy-duty vehicles for communication between ECUs.
### Jailbreak
**Category:** System Attack
Bypassing software restrictions on embedded systems or infotainment platforms to gain root access.
### Jailbreak Detection
**Category:** Security Monitoring
Mechanisms that detect whether a system has been compromised or jailbroken.
### Jailbreak Exploit Chain
**Category:** Attack
Multi-step exploitation process used to achieve system jailbreak.
### Jailbreak Persistence
**Category:** Attack
Maintaining unauthorized root access after reboot or update.
### Java Automotive Stack
**Category:** Software Architecture
Java-based runtime environments used in infotainment or Android Automotive systems.
### Java Class Loading Attack
**Category:** Runtime Attack
Manipulating class loading mechanisms to execute malicious code.
### Java Native Interface (JNI) Attack
**Category:** Android Security
Exploiting JNI boundary between Java and native code.
### Java Reflection Attack
**Category:** Software Attack
Using reflection mechanisms to bypass access controls in Java systems.
### JavaScript Injection
**Category:** Web / IVI Attack
Injection of malicious JavaScript into IVI browsers or web-based interfaces.
### Jitter Attack
**Category:** Timing Attack
Manipulating timing variations in communication or processing to disrupt system behavior.
### Jitter Buffer Exploit
**Category:** Network Attack
Exploiting buffering mechanisms used to smooth timing variations.
### Jitter Measurement Manipulation
**Category:** Timing Attack
Altering system timing measurements to hide malicious behavior.
### JNI Memory Corruption
**Category:** Vulnerability
Memory corruption occurring in JNI layer interactions.
### Job Preemption Attack
**Category:** OS Attack
Forcing task preemption to manipulate execution order or cause denial of service.
### Job Queue Manipulation
**Category:** System Attack
Modifying execution order of scheduled tasks to influence system behavior.
### Join Operation Attack
**Category:** Database / Cloud Attack
Exploiting join operations in distributed or cloud-based automotive systems.
### JOP (Jump-Oriented Programming)
**Category:** Exploit Technique
An advanced code-reuse attack technique similar to ROP but using indirect jump instructions instead of return addresses to chain gadgets and execute arbitrary computation, bypassing DEP and return-address protections in automotive ECU firmware.
**Related:** ROP, DEP, ASLR, Code Reuse Attack, Exploit Mitigation
### JSON Injection
**Category:** API Security
Injection of malicious JSON payloads into APIs or message systems.
### JSON Parsing Vulnerability
**Category:** Software Vulnerability
Security flaw caused by improper parsing of JSON data.
### JSON Web Token (JWT)
**Category:** Authentication
A compact token format used for secure authentication in APIs.
### JT/T 808
**Category:** Telematics Protocol
Chinese industry standard for satellite positioning system terminal communication, defining the data format and protocol for vehicle telematics and location tracking systems.
**Related:** JT/T 1078, GB/T 32960, NGTP
### JTAG (Joint Test Action Group)
**Category:** Hardware Debug
A standardized hardware debugging interface used for testing, flashing, and low-level system access in ECUs and SoCs.
### JTAG Fuse Protection
**Category:** Hardware Security
Security mechanism disabling JTAG access via hardware fuses.
### JTAG Over Ethernet (JTAGoE)
**Category:** Debug / Network
Remote JTAG access over network interfaces.
### JTAG Reverse Engineering
**Category:** Hardware Security
Using JTAG to analyze firmware and system behavior.
### JTAG Security Lock
**Category:** Hardware Security
Hardware-level mechanism restricting JTAG access.
### Junction Attack Point
**Category:** Threat Modeling
A system point where multiple communication paths converge and become vulnerable.
### JWT Attack
**Category:** API Security
Exploitation of vulnerabilities in JWT implementation or validation.
### JWT Signature Bypass
**Category:** Attack
Bypassing signature verification in JWT-based authentication systems.

## K
### KASLR (Kernel Address Space Layout Randomization)
**Category:** Security Mitigation
Security mechanism that randomizes kernel memory layout.
### KDF Attack
**Category:** Cryptanalysis
Attacks targeting weaknesses in key derivation functions.
### Kernel
**Category:** Operating System
The core component of an operating system managing hardware and system resources.
### Kernel API Abuse
**Category:** Attack Technique
Misuse of kernel APIs to bypass security controls.
### Kernel Debug Interface
**Category:** Debug Security
Interfaces used for kernel-level debugging.
### Kernel Driver Exploit
**Category:** System Attack
Exploiting vulnerabilities in kernel drivers.
### Kernel Exploit
**Category:** System Attack
An exploit targeting vulnerabilities in the operating system kernel to gain elevated privileges.
### Kernel Hardening
**Category:** Security
Techniques used to improve kernel security and resist attacks.
### Kernel Memory Corruption
**Category:** Vulnerability
Corruption of kernel memory leading to crashes or code execution.
### Kernel Module (LKM)
**Category:** Linux Security
Loadable kernel module that extends kernel functionality.
### Kernel Module Exploit
**Category:** Attack
Exploiting vulnerabilities in kernel modules to gain control.
### Kernel Panic
**Category:** System Failure
A critical error causing the operating system kernel to halt.
### Kernel Privilege Escalation
**Category:** Attack
Gaining root or system-level access via kernel vulnerabilities.
### Kernel Rootkit
**Category:** Malware
Malicious kernel module hiding system activity.
### Kernel Runtime Integrity
**Category:** Security Monitoring
Monitoring kernel behavior to detect tampering.
### Kernel Sandbox Escape
**Category:** Attack
Escaping restricted execution environments via kernel vulnerabilities.
### Kernel Syscall Attack
**Category:** System Attack
Abusing system call interfaces to execute privileged operations.
### Kernel Timer Attack
**Category:** Timing Attack
Exploiting kernel scheduling timers to infer system behavior.
### Kernel Trace Attack
**Category:** Side Channel
Using kernel execution traces to infer sensitive information.
### Key
**Category:** Cryptography
A secret value used in cryptographic algorithms for encryption, decryption, signing, or authentication.
### Key Agreement Failure
**Category:** Security Vulnerability
Failure in establishing secure shared keys.
### Key Agreement Protocol
**Category:** Cryptography
A protocol allowing two parties to derive a shared secret key.
### Key Authentication
**Category:** Cryptography
Verification that a cryptographic key is valid and trusted.
### Key Compromise
**Category:** Security Incident
A situation where cryptographic keys are exposed or stolen.
### Key Escrow
**Category:** Security Policy
A mechanism where cryptographic keys are stored for recovery purposes.
### Key Exchange
**Category:** Cryptography
Process of securely sharing cryptographic keys between entities.
### Key Exchange Bypass
**Category:** Attack
Circumventing secure key exchange protocols.
### Key Fob
**Category:** Vehicle Access
A wireless device used to control vehicle locking and unlocking.
### Key Fob Relay Attack
**Category:** Wireless Attack
Extending key fob signal range to impersonate legitimate proximity.
### Key Fob Replay Attack
**Category:** Automotive Attack
Replaying captured key fob signals to unlock or start vehicles.
### Key Injection
**Category:** Automotive Security
The process of securely loading cryptographic keys into ECUs or secure elements.
### Key Injection Attack
**Category:** Automotive Attack
Unauthorized insertion of cryptographic keys into systems.
### Key Leakage
**Category:** Security Incident
Exposure of cryptographic keys through software or hardware flaws.
### Key Management
**Category:** Security Architecture
The lifecycle management of cryptographic keys including generation, storage, rotation, and destruction.
### Key Provisioning Server
**Category:** Cloud Security
Server responsible for distributing cryptographic keys to devices.
### Key Replay Attack
**Category:** Cryptographic Attack
Reusing previously captured cryptographic keys or derived secrets.
### Key Revocation
**Category:** Security
Process of invalidating compromised cryptographic keys.
### Key Rotation
**Category:** Security
Periodic replacement of cryptographic keys to reduce exposure risk.
### Key Storage Hardware (HSM/TPM)
**Category:** Hardware Security
Secure hardware component used to store cryptographic keys.
### Key Vault
**Category:** Cloud Security
Secure storage system for cryptographic keys.
### Keyless Entry Attack
**Category:** Automotive Attack
Attacks targeting wireless keyless entry systems such as relay attacks.
### Keyless Entry System
**Category:** Vehicle Access
A system allowing vehicle unlocking and ignition without physical keys.
### Kismet
**Category:** Security Tool
An open-source 802.11 wireless network detector, sniffer, and intrusion detection system that passively scans for Wi-Fi networks and devices; used in automotive wireless reconnaissance to identify in-vehicle hotspots and connected mobile devices.
**Related:** Aircrack-ng, Airodump-NG, WiFi Pineapple, Evil Twin Attack, BSSID
### KNOB Attack (Key Negotiation of Bluetooth)
**Category:** Wireless Attack
A Bluetooth vulnerability (CVE-2019-9506) that forces negotiation of short encryption keys (as low as 1 byte) between paired devices, enabling brute-force decryption of Bluetooth traffic; affects automotive Bluetooth implementations using EDR connections.
**Related:** Bluetooth, BlueBorne, Bluetooth Pineapple, Encryption Key
### Known Plaintext Attack
**Category:** Cryptanalysis
An attack where attacker has access to both plaintext and corresponding ciphertext.
### KVM (Kernel-based Virtual Machine)
**Category:** Virtualization
A Linux virtualization infrastructure enabling hardware-assisted virtual machines.
### KVM Escape
**Category:** Virtualization Attack
Breaking isolation between virtual machines and host system.
### KVM Guest Isolation
**Category:** Security
Mechanism ensuring separation between virtual machines.

## L
### KWP2000
**Category:** Diagnostics Protocol
Keyword Protocol 2000, a diagnostic communication protocol used over K-Line or CAN for ECU diagnostics and programming, superseded by UDS (ISO 14229).
**Related:** ISO 14230, ISO 9141, UDS, OBD-II
### L2 Cache Side Channel
**Category:** Hardware Attack
Exploiting CPU L2 cache behavior to extract sensitive information.
### L2/L3 Network Attack
**Category:** Network Security
Attacks targeting OSI Layer 2 or Layer 3 protocols in vehicle networks.
### Latency Manipulation Attack
**Category:** Timing Attack
Altering system latency to affect communication or control behavior.
### Launch Control ECU
**Category:** Powertrain System
ECU responsible for managing vehicle acceleration launch behavior.
### LD_PRELOAD Attack
**Category:** Linux Attack
Using LD_PRELOAD to override system library functions.
### LDF (LIN Description File)
**Category:** Diagnostic File Format
A Vector proprietary file format describing LIN network configuration, including signals, frame triggers, and schedule tables; used for LIN bus simulation and testing.
**Related:** LIN, DBC, FIBEX, Vector CANoe
### Legacy ECU
**Category:** Vehicle Architecture
Older ECUs with limited security capabilities.
### Legacy Protocol Exploit
**Category:** Attack
Exploiting outdated automotive communication protocols.
### Library Hijacking
**Category:** Software Attack
Replacing or modifying shared libraries to execute malicious code.
### License Key Attack
**Category:** Software Attack
Bypassing or forging software license mechanisms in automotive systems.
### License Validation Bypass
**Category:** Attack
Circumventing license verification mechanisms.
### Lidar
**Category:** ADAS Sensor
A sensing technology using laser light to measure distance and create 3D maps.
### Lidar Attack
**Category:** Sensor Attack
Manipulating lidar sensors using optical or signal interference.
### Lidar Data Injection
**Category:** Automotive Attack
Manipulating raw lidar data before processing.
### Lidar Spoofing
**Category:** Attack
Injecting false lidar reflections to mislead perception systems.
### Lifecycle Management (ECU)
**Category:** Vehicle Engineering
Managing ECU states from production to decommission.
### Lightweight Encryption
**Category:** Cryptography
Encryption methods optimized for embedded automotive systems.
### Lightweight Protocol Exploit
**Category:** Network Attack
Exploitation of lightweight automotive communication protocols.
### LIN (Local Interconnect Network)
**Category:** Automotive Network
A low-cost serial communication protocol used for non-critical vehicle components such as windows, seats, and mirrors.
### LIN Bus Attack
**Category:** Automotive Attack
Exploitation of LIN bus communication to inject or modify signals.
### LIN Injection
**Category:** Automotive Attack
Injecting malicious frames into LIN bus communication.
### LIN Sniffing
**Category:** Reverse Engineering
Capturing LIN network traffic for analysis.
### Link Layer Attack
**Category:** Network Attack
Attacks targeting data link layer communication such as CAN or Ethernet.
### Link State Attack
**Category:** Network Attack
Manipulating routing or link-state information in vehicle networks.
### Linker Hijacking
**Category:** Attack Technique
Manipulating dynamic linking process to load malicious libraries.
### Linker Script Attack
**Category:** System Attack
Manipulating linker scripts to alter program memory layout.
### Linux
**Category:** Operating System
A widely used open-source operating system forming the base of many automotive IVI and gateway systems.
### Linux Container Escape
**Category:** Container Attack
Breaking out of Linux container isolation.
### Linux Driver Exploit
**Category:** System Attack
Exploitation of vulnerabilities in Linux kernel drivers.
### Linux IPC Exploit
**Category:** System Attack
Abusing Linux IPC mechanisms such as D-Bus or sockets.
### Linux Privilege Escalation
**Category:** Attack
Gaining elevated privileges through Linux system vulnerabilities.
### Liveness Attack
**Category:** Attack
Bypassing liveness detection mechanisms.
### Liveness Detection
**Category:** Security
Mechanism ensuring a system or identity is actively present and not replayed.
### LKM Rootkit
**Category:** Malware
A malicious kernel module used to hide system activity.
### Load Balancer ECU
**Category:** Vehicle Architecture
An ECU responsible for distributing processing or communication load.
### Loadable Kernel Module (LKM)
**Category:** Linux Kernel
Kernel module that can be dynamically loaded or unloaded.
### Location Spoofing
**Category:** Attack
Manipulating GPS or GNSS location data.
### Log Analysis
**Category:** Security Monitoring
Analyzing system logs to detect anomalies or attacks.
### Log Correlation
**Category:** Security Analytics
Combining multiple logs to detect complex attack patterns.
### Log Injection
**Category:** Security Attack
Injecting malicious entries into system logs.
### Log Spoofing
**Category:** Attack
Forging log entries to mislead security systems.
### Log Tampering
**Category:** Security Attack
Modifying logs to hide malicious activity or alter forensic evidence.
### Logging ECU
**Category:** Automotive System
An ECU responsible for recording system and diagnostic logs.
### Logic Bomb
**Category:** Malware
Malicious code triggered by specific conditions.
### Logic Vulnerability
**Category:** Software Vulnerability
Flaws in system logic leading to unintended behavior.
### Long Range Attack
**Category:** Automotive Attack
Attacks executed from distant network or wireless sources.
### LRU (Least Recently Used) Cache Attack
**Category:** Side Channel
Exploiting cache replacement behavior to infer sensitive data.
### LTE IMSI Catcher
**Category:** Wireless Attack
Fake base station used to intercept LTE communication.
### LTE Jamming
**Category:** Wireless Attack
Disrupting LTE communication signals.
### LTE Modem
**Category:** Connectivity
Cellular communication module used in connected vehicles.

## M
### MAC Spoofing
**Category:** Network Attack
Forging MAC addresses to impersonate devices.
### MACsec (Media Access Control Security)
**Category:** Network Security
An IEEE 802.1AE standard providing layer-2 encryption and integrity for Ethernet frames, used in automotive Ethernet networks to secure communication between ECUs, switches, and domain controllers; relies on MKA (MACsec Key Agreement) for key establishment.
**Related:** Automotive Ethernet, IEEE 802.1AE, MKA, TLS
### MCC (Mobile Country Code)
**Category:** Cellular Identity
A three-digit code identifying a country in the ITU E.212 standard; combined with MNC to form the HNI that identifies a mobile network operator, used in vehicle TCU SIM provisioning.
**Related:** MNC, HNI, IMSI, TCU, GSM
### MCU (Microcontroller Unit)
**Category:** Embedded System
A compact computing unit used in ECUs to control specific vehicle functions with real-time constraints.
### MCU Exploit
**Category:** Hardware Attack
Exploitation of vulnerabilities in microcontroller firmware or peripherals.
### MCU Firmware
**Category:** Embedded Security
Software running on microcontrollers that directly controls hardware behavior.
### MCU Reset Attack
**Category:** Hardware Attack
Forcing microcontroller reset to manipulate system state.
### Memory Corruption
**Category:** Software Vulnerability
A class of vulnerabilities where memory is improperly modified, leading to crashes or code execution.
### Memory Disclosure
**Category:** Vulnerability
Unauthorized access to sensitive memory regions.
### Memory Dump
**Category:** Forensics
Extraction of system memory for analysis and reverse engineering.
### Memory Forensics
**Category:** Security Analysis
Analysis of memory dumps to reconstruct system state or attacks.
### Memory Integrity Check
**Category:** Security
Ensuring memory has not been modified maliciously.
### Memory Isolation Failure
**Category:** Security Vulnerability
Failure to properly isolate memory between processes or domains.
### Memory Leak
**Category:** Software Bug
Failure to properly release memory, potentially leading to performance degradation or exploitation.
### Memory Management Unit (MMU)
**Category:** System Hardware
Hardware that maps virtual memory to physical memory.
### Memory Protection Bypass
**Category:** Attack
Circumventing hardware or software memory protection mechanisms.
### Memory Protection Unit (MPU)
**Category:** Hardware Security
Hardware component enforcing memory access restrictions.
### Memory Randomization Attack
**Category:** Attack
Attempting to bypass ASLR or memory layout randomization.
### Memory Safety Exploit
**Category:** Attack
Exploiting unsafe memory operations to gain control.
### Memory Safety Violation
**Category:** Security
Any violation of safe memory access rules such as buffer overflow or use-after-free.
### Memory Tagging Attack
**Category:** Advanced Memory Attack
Bypassing memory tagging mechanisms used for security.
### Message Authentication Code (MAC)
**Category:** Cryptography
A short piece of information used to verify data integrity and authenticity.
### Message Broker
**Category:** Vehicle Cloud / IoT
A system that routes messages between ECUs, cloud services, and applications.
### Message Broker Injection
**Category:** Cloud Attack
Injecting malicious messages into broker-based systems such as MQTT or DDS.
### Message Injection
**Category:** Automotive Attack
Injecting malicious messages into vehicle communication networks.
### Message Queue Overflow
**Category:** Vulnerability
Overflowing message queues leading to crashes or exploit conditions.
### Message Replay
**Category:** Attack
Re-sending previously captured messages to manipulate systems.
### Message Spoofing
**Category:** Attack
Forging messages to impersonate legitimate ECUs or services.
### Metasploit Framework
**Category:** Security Tool
An open-source penetration testing framework for developing and executing exploit code against remote targets; used in automotive post-exploitation to gain persistent access to vehicle head units and TCUs.
**Related:** Meterpreter, Penetration Testing, PTES, Reverse Shell
### MFA (Multi-Factor Authentication)
**Category:** Authentication
A security mechanism requiring two or more independent authentication factors (e.g., password, token, biometric) to verify identity; used in automotive cloud services, fleet management portals, and remote vehicle access to reduce credential-based attack risk.
**Related:** Authentication, OTP, Identity and Access Management
### Microcontroller Security Boundary
**Category:** Embedded Security
Security separation within MCU-based systems.
### Microservice Architecture (Vehicle Cloud)
**Category:** Cloud Architecture
Distributed architecture used in automotive backend systems.
### Middleware
**Category:** Software Architecture
A software layer that connects different system components or services in automotive systems.
### Middleware Exploit
**Category:** Attack
Exploitation of vulnerabilities in middleware communication layers.
### Middleware IPC Bridge Attack
**Category:** Attack
Exploiting bridges between IPC mechanisms in middleware systems.
### Middleware Serialization Attack
**Category:** Attack
Exploiting serialization/deserialization in middleware layers.
### MirrorLink
**Category:** Connectivity Standard
A smartphone-to-vehicle connectivity standard developed by the Car Connectivity Consortium (CCC), mirroring smartphone apps onto the vehicle infotainment display via USB or Bluetooth.
**Related:** CarPlay, Android Auto, CarLife, CCC, SmartDeviceLink
### Misconfiguration
**Category:** Security Vulnerability
Incorrect system configuration leading to security exposure.
### Misconfiguration Exploit
**Category:** Attack
Exploiting insecure or default configurations in automotive systems.
### MISRA C/C++
**Category:** Coding Standard
Coding guidelines developed by the Motor Industry Software Reliability Association for C and C++ programming, widely adopted in automotive software development to reduce coding defects and security vulnerabilities.
**Related:** ASPICE, ISO 21434, AUTOSAR
### Misuse Case Modeling
**Category:** Threat Modeling
Modeling how systems can be misused to identify vulnerabilities.
### MitM (Man-in-the-Middle)
**Category:** Network Attack
An attack where communication between two parties is intercepted or altered.
### MitM Attack on Vehicle Network
**Category:** Automotive Attack
Intercepting and modifying communication between ECUs or cloud services.
### MITRE
**Category:** Threat Intelligence
The MITRE Corporation maintains cybersecurity knowledge bases including CVE, CWE, CAPEC, and ATT&CK framework, widely used in vulnerability classification and threat modeling.
**Related:** CVE, CWE, CAPEC, ATT&CK, NVD
### MMS (Multimedia Messaging Service)
**Category:** Mobile Communication
A standard for sending multimedia content (images, audio, video) over cellular networks; in automotive contexts, may be used for telematics notifications or V2X applications, presenting an attack surface for message injection and content-based exploits.
**Related:** SMS, Cellular Network, Telematics
### MNC (Mobile Network Code)
**Category:** Cellular Identity
A two- or three-digit code identifying a specific mobile network operator within a country; combined with MCC to form the HNI used in vehicle TCU SIM identification.
**Related:** MCC, HNI, IMSI, TCU, GSM
### Mobile App Vehicle Interface
**Category:** Vehicle Cloud
Mobile applications used to interact with vehicle systems.
### Mobile Key Attack
**Category:** Automotive Attack
Exploiting smartphone-based digital key systems.
### Mobile-to-Vehicle Communication
**Category:** Connectivity
Communication between mobile devices and vehicle systems.
### Model Drift
**Category:** AI Security
Degradation of model performance over time due to changing input data distributions.
### Model Inference Attack
**Category:** AI Security
Extracting information about machine learning models used in ADAS or autonomous driving.
### Model Poisoning
**Category:** AI Attack
Injecting malicious data into training sets of automotive AI systems.
### Model-Based Security
**Category:** Security Engineering
Security approach based on system models such as threat models or digital twins.
### Modem
**Category:** Connectivity
A device that provides cellular communication (4G/5G/LTE) for vehicles.
### Modem Baseband Exploit
**Category:** Cellular Attack
Exploitation of vulnerabilities in baseband processor firmware.
### Modem Firmware
**Category:** Embedded Security
Software running on cellular baseband hardware.
### MOST (Media Oriented Systems Transport)
**Category:** Automotive Network
A multimedia bus protocol for transmitting audio, video, and data in vehicles, defining all seven OSI layers. Used in infotainment and multimedia systems.
**Related:** A2B, Automotive Ethernet, CAN
### MQTT (Message Queuing Telemetry Transport)
**Category:** Vehicle Cloud Protocol
A lightweight publish/subscribe messaging protocol widely used in connected vehicles.
### MQTT Authentication Bypass
**Category:** Attack
Circumventing authentication mechanisms in MQTT systems.
### MQTT Broker Attack
**Category:** Cloud Attack
Exploitation of MQTT brokers through unauthorized access or message injection.
### MQTT Replay Attack
**Category:** Network Attack
Re-sending captured MQTT messages to manipulate system behavior.
### MQTT Topic Injection
**Category:** Attack
Injecting malicious or unauthorized MQTT topics into vehicle communication systems.
### MSISDN (Mobile Subscriber ISDN Number)
**Category:** Cellular Identity
The phone number associated with a mobile subscription (E.164 format); used to identify and target vehicle TCUs on cellular networks for IMSI catching and rogue BTS attacks.
**Related:** IMSI, IMEI, TCU, GSM, Rogue BTS, BTS
### MVCI (Modular Vehicle Communication Interface)
**Category:** Diagnostics Standard
An ISO 22900 standard defining a modular interface between diagnostic testers and vehicle ECUs, specifying the D-PDU API for pass-through diagnostic communication.
**Related:** ISO 22900, UDS, DoIP, OBD-II

## N
### Namespace Escape
**Category:** Container Attack
Breaking out of isolated namespaces to gain broader system access.
### Namespace Isolation
**Category:** Linux Security
A Linux kernel feature that isolates system resources between processes or containers.
### NAT Traversal Attack
**Category:** Network Security
Exploiting NAT traversal mechanisms to bypass network boundaries.
### Navigation Data Injection
**Category:** Automotive Attack
Injecting false routing or location data into navigation systems.
### Navigation Spoofing
**Category:** Attack
Manipulating navigation data to mislead vehicle positioning systems.
### Navigation System
**Category:** Vehicle System
Subsystem responsible for GPS-based route planning and positioning.
### Near Field Attack
**Category:** Wireless Attack
Attacks performed using short-range communication channels like NFC or BLE.
### Near Real-Time System Attack
**Category:** Timing Attack
Exploiting timing constraints in real-time vehicle systems.
### Network Access Control (NAC)
**Category:** Security
Policy-based control over network device access.
### Network Behavior Profiling
**Category:** Security Analytics
Creating behavioral models of network communication patterns.
### Network Boot Attack
**Category:** Boot Security Attack
Attacks targeting systems during network-based boot processes.
### Network Bootstrapping
**Category:** System Initialization
Process of initializing networked vehicle systems.
### Network Bridge Attack
**Category:** Automotive Attack
Exploiting bridges between isolated networks.
### Network Delay Injection
**Category:** Network Attack
Introducing artificial latency into communication channels.
### Network ECU Coordination
**Category:** Vehicle Architecture
Coordination of multiple ECUs within network domains.
### Network Firewall Bypass
**Category:** Attack
Circumventing network firewall rules in automotive systems.
### Network Gateway Node
**Category:** Vehicle Architecture
A node responsible for routing between different network domains.
### Network Identity Spoofing
**Category:** Attack
Impersonating a network identity to gain unauthorized access.
### Network Injection
**Category:** Automotive Attack
Injecting malicious packets or frames into vehicle networks.
### Network Interface Exploit
**Category:** System Attack
Exploiting vulnerabilities in network interface drivers or hardware.
### Network Isolation Failure
**Category:** Security Vulnerability
Failure to properly separate network domains.
### Network Layer Attack (L3)
**Category:** Networking
Attacks targeting the network layer of the OSI model.
### Network Link Layer Attack (L2)
**Category:** Networking
Attacks targeting data link layer communication.
### Network Node (ECU Node)
**Category:** Vehicle Architecture
Any ECU or device participating in in-vehicle or external communication networks.
### Network Partition Attack
**Category:** Network Attack
Disrupting network connectivity to isolate nodes or ECUs.
### Network Protocol Exploit
**Category:** Security Vulnerability
Exploitation of weaknesses in communication protocols.
### Network Protocol Stack Exploit
**Category:** Attack
Exploiting vulnerabilities across multiple layers of a network stack.
### Network Replay Attack
**Category:** Automotive Attack
Replaying captured network traffic to manipulate system behavior.
### Network Security Policy
**Category:** Security Governance
Rules defining allowed network communication.
### Network Sniffing
**Category:** Reverse Engineering
Capturing network traffic for analysis.
### Network Spoofing
**Category:** Attack
Forging network identities or packets to impersonate legitimate nodes.
### Network Stack
**Category:** Networking
The layered set of protocols used for communication in automotive systems, including TCP/IP, UDP, CAN, and Ethernet stacks.
### Network Time Synchronization Attack
**Category:** Timing Attack
Manipulating time synchronization in distributed vehicle systems.
### Network Traffic Analysis
**Category:** Security Monitoring
Analyzing network traffic for anomalies or attacks.
### NFC (Near Field Communication)
**Category:** Wireless Security
Short-range wireless communication technology used in keyless entry and mobile vehicle access.
### NFC Key System
**Category:** Vehicle Access
Vehicle access system using NFC-enabled devices or cards.
### NFC Relay Attack
**Category:** Automotive Attack
Extending NFC communication to impersonate proximity-based authentication.
### NFC Spoofing
**Category:** Attack
Forging NFC tags or communication signals.
### NGTP
**Category:** Telematics Protocol
Next Generation Telematics Protocol, an open standard for vehicle telematics service delivery, enabling standardized communication between in-vehicle systems and backend service providers.
**Related:** JT/T 808, GB/T 32960, T-Box
### NHTSA (National Highway Traffic Safety Administration)
**Category:** Regulatory Body
The U.S. Department of Transportation agency responsible for vehicle safety regulation, publishing cybersecurity best practices for modern vehicles (2016) and aftermarket autonomous vehicle cybersecurity guidance; a key reference for automotive cybersecurity compliance in the U.S. market.
**Related:** Auto-ISAC, ISO 21434, UN R155, NIST, SAE J3061
### NIDP (Network Intrusion Detection and Prevention)
**Category:** Network Security
A security system combining intrusion detection (IDS) and active prevention (IPS) capabilities for in-vehicle networks, capable of detecting and blocking malicious CAN/Ethernet traffic in real time; deployed as standalone network IDS/IPS or integrated into gateway ECUs.
**Related:** IDS, IPS, CAN IDS, Network Security, Gateway ECU
### NIST (National Institute of Standards and Technology)
**Category:** Security Standard
A U.S. federal agency publishing cybersecurity standards and guidelines including NIST SP 800-82 (ICS security), NIST CSF (Cybersecurity Framework), and FIPS 140-3 (cryptographic module validation).
**Related:** CVSS, NVD, FIPS, CSF
### NMEA
**Category:** GNSS Protocol
A standard data format for communication between marine electronics and GNSS receivers, widely used in vehicle navigation systems for positioning data output.
**Related:** GNSS, RTCM, NTRIP
### Node Authentication
**Category:** Security
Verifying identity of network nodes (ECUs or devices).
### Node Behavior Analysis
**Category:** Security Monitoring
Monitoring ECU or device behavior for anomalies.
### Node Enumeration
**Category:** Reconnaissance
Identifying all ECUs or devices in a vehicle network.
### Node Isolation Failure
**Category:** Security Vulnerability
Failure to properly isolate network nodes.
### Node Spoofing
**Category:** Attack
Impersonating a legitimate network node.
### Node Trust Model
**Category:** Security Architecture
Model defining trust relationships between network nodes.
### Noise Analysis Attack
**Category:** Side Channel
Analyzing system noise patterns to extract sensitive information.
### Noise Injection Attack
**Category:** Signal Attack
Injecting noise into communication channels to disrupt or manipulate signals.
### Non-Repudiation Failure
**Category:** Security
Failure to ensure that actions cannot be denied by the originating entity.
### Nonce
**Category:** Cryptography
A random or unique number used once in cryptographic protocols.
### Nonce Reuse Attack
**Category:** Cryptographic Attack
Exploiting reuse of nonces to break encryption or authentication.
### Normalization Attack
**Category:** Data Attack
Exploiting data normalization processes to inject or distort information.
### NTRIP
**Category:** GNSS Protocol
Networked Transport of RTCM via Internet Protocol, a protocol for streaming GNSS correction data from reference stations to rovers (e.g., vehicles) for precise positioning.
**Related:** RTCM, NMEA, GNSS, C-V2X
### NVD (National Vulnerability Database)
**Category:** Vulnerability Management
The U.S. government repository of standards-based vulnerability management data, integrating CVE entries with CVSS scores, CWE classifications, and impact metrics; operated by NIST.
**Related:** CVE, CVSS, CWE, MITRE, NIST
### NVRAM (Non-Volatile RAM)
**Category:** Memory
Memory that retains data even after power loss, used in ECUs and embedded systems.
### NVRAM Dump
**Category:** Reverse Engineering
Extraction of non-volatile memory contents for analysis.
### NVRAM Tampering
**Category:** Attack
Modifying persistent configuration or state stored in NVRAM.

## O
### OBD Port Lock Bypass
**Category:** Automotive Attack
Bypassing physical or logical locking mechanisms on OBD-II ports.
### OBD-II (On-Board Diagnostics II)
**Category:** Diagnostics
A standardized vehicle diagnostic interface used for reading ECU data and fault codes.
### OBD-II Attack
**Category:** Automotive Attack
Exploitation of the OBD-II port to access or manipulate vehicle systems.
### OBD-II Fuzzing
**Category:** Security Testing
Sending malformed diagnostic messages to the OBD-II interface to discover vulnerabilities.
### OBD-II Gateway Bypass
**Category:** Attack
Circumventing gateway restrictions through diagnostic interfaces.
### OBD-II Injection
**Category:** Attack
Injecting malicious diagnostic commands via the OBD-II interface.
### OBEX (Object Exchange)
**Category:** Wireless Protocol
A protocol for exchanging objects (files, contacts, messages) over Bluetooth, IrDA, or TCP/IP; in automotive contexts, used for Bluetooth file transfer and hands-free profile, and a known attack vector for Bluejacking and Bluesnarfing exploits.
**Related:** Bluetooth, Bluejacking, Bluesnarfing, Bluetooth Pairing
### Object Deserialization Attack
**Category:** Vulnerability
Exploiting unsafe deserialization of objects.
### Object Injection
**Category:** Software Attack
Injecting malicious objects into serialized data processing systems.
### Object Integrity Violation
**Category:** Security
Corruption or modification of structured objects in memory or storage.
### Object Serialization Exploit
**Category:** Attack
Manipulating serialized objects to achieve code execution.
### Offline Attack
**Category:** Security Attack
Attacks performed without direct network access to the target system.
### Offline ECU Attack
**Category:** Automotive Attack
Attacking ECUs removed from the vehicle environment.
### Offline Firmware Analysis
**Category:** Reverse Engineering
Analyzing firmware extracted from devices without live system interaction.
### Offline Key Attack
**Category:** Cryptographic Attack
Extracting or brute-forcing cryptographic keys without online interaction.
### Offline Reverse Engineering
**Category:** Security Analysis
Analyzing firmware or binaries without live system execution.
### On-Board Unit (OBU)
**Category:** Vehicle Communication
Device used for V2X communication and telematics services.
### OnStar
**Category:** Automotive Telematics
A subsidiary of General Motors providing subscription-based telematics services including emergency response, navigation, remote diagnostics, and stolen vehicle slowdown; one of the earliest and largest connected car platforms.
**Related:** TCU, OTA, Telematics, Connected Car, V2X
### Opaque Token Attack
**Category:** Authentication Attack
Exploiting weaknesses in token validation mechanisms.
### Opcode Injection
**Category:** Low-Level Attack
Injecting malicious machine instructions into execution streams.
### Open API Attack
**Category:** API Security
Exploitation of publicly exposed APIs in vehicle systems.
### Open Port Exposure
**Category:** Network Security
Exposure of network ports that can be exploited by attackers.
### Open Source Component Risk
**Category:** Supply Chain Security
Security risks introduced by open-source software in automotive systems.
### OpenBTS
**Category:** Security Tool / SDR
An open-source software implementation of a GSM base transceiver station (BTS) that uses SDR hardware to create private cellular networks; used in automotive security testing to create rogue BTS for TCU attacks.
**Related:** BTS, Rogue BTS, YateBTS, OsmocomBB, BladeRF, SDR, GSM
### openXSAM
**Category:** Security Framework
Open XML Security Analysis Model, an open automotive security analysis framework for threat modeling, supporting tools like YAKINDU Security Analyst for structured threat analysis.
**Related:** TARA, HEAVENS, STRIDE, Attack Tree
### Operating System (OS)
**Category:** System Software
Core software managing hardware and applications in automotive systems.
### Operational Security (OpSec)
**Category:** Security Practice
Practices used to prevent exposure of sensitive information during operations.
### Orchestration Engine Exploit
**Category:** Attack
Exploiting vulnerabilities in orchestration systems managing distributed components.
### OS Command Injection
**Category:** System Attack
Injecting operating system commands through vulnerable interfaces.
### OS Configuration Attack
**Category:** Attack
Exploiting insecure OS configurations.
### OS Hardening
**Category:** Security
Techniques used to improve operating system security.
### OS Kernel Exploit
**Category:** System Attack
Exploiting vulnerabilities in the operating system kernel.
### OS Logging Manipulation
**Category:** Attack
Altering system logs to hide malicious activity.
### OS Privilege Escalation
**Category:** Attack
Gaining elevated privileges through OS vulnerabilities.
### OS Sandbox Escape
**Category:** Attack
Breaking out of restricted execution environments.
### OS Scheduler Manipulation
**Category:** System Attack
Altering task scheduling behavior in operating systems.
### OSINT (Open Source Intelligence)
**Category:** Intelligence Gathering
The collection and analysis of publicly available information (websites, forums, government databases) about a target; used in automotive penetration testing during the reconnaissance phase to gather vehicle architecture, firmware, and infrastructure data.
**Related:** Reconnaissance, PTES, Penetration Testing, Intelligence Gathering
### OsmocomBB
**Category:** Security Tool
An open-source GSM baseband firmware project for mobile phone hardware, used in automotive security research for GSM interception and rogue BTS attacks against vehicle TCUs.
**Related:** OpenBTS, YateBTS, GSM, BTS, Rogue BTS, SDR
### OTA (Over-The-Air Update)
**Category:** Automotive Cloud / Update System
A mechanism for remotely updating vehicle ECUs, infotainment systems, or firmware over wireless or network connections.
### OTA Attack
**Category:** Automotive Attack
Exploitation of OTA update mechanisms to inject malicious firmware or downgrade systems.
### OTA Downgrade Attack
**Category:** Attack
Forcing installation of older vulnerable firmware versions.
### OTA Integrity Check
**Category:** Security
Verification of firmware integrity during over-the-air updates.
### OTA Rollback Attack
**Category:** Attack
Forcing a vehicle system to downgrade to a vulnerable firmware version.
### OTA Signature Verification
**Category:** Security
Cryptographic validation of firmware authenticity in OTA updates.
### OTA Update Server
**Category:** Cloud Infrastructure
Backend system responsible for distributing firmware updates to vehicles.
### OTP (One-Time Programmable)
**Category:** Hardware Security
A type of non-volatile memory (e.g., eFuse, OTP ROM) that can be written only once and is permanently immutable thereafter; used in automotive microcontrollers to store security-critical data such as secure boot keys, debug disable flags, and device-unique secrets.
**Related:** eFuse, Secure Boot, Hardware Root of Trust, RPMB
### OTX (Open Test sequence eXchange)
**Category:** Test Standard
An ISO 13209 standard for exchanging test sequences in the automotive diagnostic domain, enabling portable and standardized test procedure definitions.
**Related:** ODX, PDX, MVCI, ASAM
### Out-of-Band Attack
**Category:** Security Attack
Attacks conducted through channels outside the primary communication path.
### Out-of-Band Authentication
**Category:** Security
Authentication using a separate communication channel.
### Over-the-Top (OTT) Vehicle Services
**Category:** Automotive Cloud
Cloud-based services delivered directly to vehicle infotainment systems.
### Overprivileged Service
**Category:** Security Vulnerability
A service with excessive permissions beyond its required scope.
### OWASP (Open Worldwide Application Security Project)
**Category:** Security Framework
A nonprofit foundation publishing the OWASP Top 10, ASVS (Application Security Verification Standard), and testing guides; widely referenced for web and API security in connected vehicle platforms.
**Related:** CWE, CVE, Top 10, ASVS, API Security

## P
### Differential Power Analysis (DPA)
**Category:** Side Channel Attack
Advanced power analysis technique used to break cryptographic implementations.
### Packet Filtering Bypass
**Category:** Network Attack
Circumventing firewall or packet filtering rules.
### Packet Injection
**Category:** Network Attack
Injecting malicious network packets into communication channels.
### Packet Manipulation
**Category:** Network Attack
Modifying packets in transit to alter communication.
### Packet Replay
**Category:** Network Attack
Re-sending captured packets to manipulate system behavior.
### Packet Sniffing
**Category:** Reverse Engineering
Capturing and analyzing network traffic.
### Parsing Vulnerability
**Category:** Software Vulnerability
Flaws in input parsing leading to crashes or code execution.
### Partition Table Attack
**Category:** Storage Attack
Manipulating disk or flash partition tables to gain control.
### PASTA (Process for Attack Simulation and Threat Analysis)
**Category:** Threat Modeling
A seven-stage, risk-centric threat modeling methodology that simulates attacks from an adversary's perspective: defining objectives, technical scope, application decomposition, threat agent identification, vulnerability identification, exploit enumeration, and risk/impact analysis.
**Related:** STRIDE, TRIKE, VAST, HEAVENS, TARA, DFD
### PBL (Primary Bootloader)
**Category:** Boot Security
The first programmable software stage executed after the immutable Boot ROM during the system startup process, responsible for initializing essential hardware (clock, memory controller, debug interfaces) and loading the Secondary Bootloader (SBL) from storage into RAM. PBL is typically stored in one-time programmable (OTP) memory or protected flash sectors and serves as the initial trust anchor in the secure boot chain, often performing the first stage of code verification.
**Related:** SBL, Boot ROM, Boot Chain of Trust, Secure Boot, OTP, HSM
### PCB (Printed Circuit Board)
**Category:** Hardware
The physical board that interconnects electronic components in automotive ECUs; PCB layout, trace accessibility, and test points can expose debug interfaces and side-channel leakage paths exploitable by attackers with physical access.
**Related:** JTAG, Hardware Debug Interface, Side Channel Attack
### PCIe (Peripheral Component Interconnect Express)
**Category:** Hardware / Bus Interface
A high-speed serial bus standard used in automotive domain controllers and high-performance ECUs for interconnecting processors, accelerators, and peripherals; introduces DMA-based attack surfaces requiring IOMMU protection.
**Related:** DMA, IOMMU, BAR, SoC
### PDX (Packaged ODX)
**Category:** Diagnostic Data Format
A container format that packages multiple ODX files into a single ZIP archive, simplifying distribution and management of diagnostic data collections.
**Related:** ODX, OTX, CDD, MVCI
### Peripheral DMA Attack
**Category:** Advanced Hardware Attack
Using Direct Memory Access to read or modify system memory.
### Peripheral Exploit
**Category:** Hardware Attack
Exploiting vulnerabilities in peripheral communication interfaces.
### Peripheral Firmware Attack
**Category:** Hardware Attack
Exploiting firmware running on peripheral devices.
### Peripheral Isolation Failure
**Category:** Security Vulnerability
Failure to isolate peripheral devices from core system memory.
### Persistence Mechanism
**Category:** Malware
Techniques used to maintain long-term access to compromised systems.
### Persistent ECU Compromise
**Category:** Automotive Attack
Maintaining unauthorized control over ECUs after reboot or update.
### Persistent Storage Attack
**Category:** Storage Security
Attacking flash, EEPROM, or NVRAM storage systems.
### PFD (Process Flow Diagram)
**Category:** System Design
A diagram representing the sequence of operations and data flow in a system process; used in automotive threat modeling to identify attack surfaces at each processing step.
**Related:** DFD, Threat Modeling, TARA, STRIDE
### Physical Access Attack
**Category:** Automotive Attack
Attacks requiring physical access to vehicle components.
### Physical CAN Access Attack
**Category:** Automotive Attack
Attacking CAN networks through physical access points.
### Physical Layer Attack (L1)
**Category:** Network Security
Attacks targeting the physical transmission layer of communication systems.
### Physical Tampering
**Category:** Hardware Attack
Direct modification of hardware components to bypass security.
### PID (Parameter ID)
**Category:** Diagnostics
An identifier used in OBD-II to request and interpret specific diagnostic data values from ECUs, such as engine RPM, coolant temperature, or vehicle speed.
**Related:** OBD-II, DTC, UDS, SAE J1979
### PII (Personally Identifiable Information)
**Category:** Privacy / Compliance
Data that can identify an individual (e.g., name, VIN, location, biometrics); collected by connected vehicles through telematics, cameras, and mobile apps, requiring protection under GDPR, CCPA, and similar privacy regulations.
**Related:** GDPR, Data Privacy, Data Loss Prevention, Vehicle Data
### PKCS (Public Key Cryptography Standards)
**Category:** Cryptography Standards
A set of RSA Laboratories standards for public key cryptography (PKCS#7 for signed data, PKCS#10 for certificate requests, PKCS#12 for key/cert packaging); used in automotive PKI for certificate management and V2X security.
**Related:** PKI, Certificate Authority, RSA, CRL, V2X PKI
### PKI (Public Key Infrastructure)
**Category:** Cryptography / Security Infrastructure
A framework for managing digital certificates, public/private keys, and trust relationships in automotive and cloud systems.
### PKI Attack
**Category:** Cryptographic Attack
Exploitation of weaknesses in certificate issuance, validation, or trust chains.
### PKI Certificate Spoofing
**Category:** Attack
Forging or misusing certificates to impersonate trusted entities.
### Platform Security Architecture (PSA)
**Category:** Security Framework
A security framework defining secure design principles for embedded systems.
### PLC (Power-Line Communication)
**Category:** Communication Protocol
A technology enabling data transmission over vehicle power lines, used in automotive applications such as battery management in EVs and PLC4TRUCKS (SAE J2497) for commercial vehicle trailer communications; presents an attack surface for power-line injection.
**Related:** SAE J2497, EV Battery, CAN, LIN
### Pointer Manipulation Attack
**Category:** Memory Attack
Exploiting pointer misuse to alter program execution flow.
### Policy Bypass
**Category:** Attack
Circumventing security or access control policies.
### Policy Enforcement Failure
**Category:** Security Vulnerability
Failure to enforce security policies consistently.
### Power Analysis Attack
**Category:** Side Channel Attack
Extracting cryptographic keys by analyzing power consumption patterns.
### Power Glitch Attack
**Category:** Hardware Attack
Manipulating power supply to induce faults or bypass security checks.
### Power Management Attack
**Category:** Hardware Attack
Exploiting power state transitions in embedded systems.
### PQC (Post-Quantum Cryptography)
**Category:** Cryptography
Cryptographic algorithms resistant to attacks by quantum computers (e.g., lattice-based, hash-based), being standardized by NIST; relevant to automotive systems with long operational lifespans where firmware and keys must resist future quantum decryption.
**Related:** NIST, RSA, ECC, Key Management, Cryptographic Agility
### Privilege Boundary
**Category:** Security Architecture
Separation between different privilege levels in system design.
### Privilege Escalation
**Category:** Attack
Gaining higher-level permissions than originally assigned.
### Process Escape
**Category:** Attack
Breaking out of restricted process environments or sandboxes.
### Process Heap Overflow
**Category:** Memory Attack
Overflowing heap memory in running processes.
### Process Injection
**Category:** Attack
Injecting code into another process's memory space.
### Process Isolation
**Category:** Operating System
Mechanism that separates processes to prevent interference or unauthorized access.
### Process Memory Leak
**Category:** Vulnerability
Improper memory management within processes leading to leakage.
### Process Scheduling Attack
**Category:** OS Attack
Manipulating OS scheduling to influence execution order.
### Protocol Confusion Attack
**Category:** Network Attack
Confusing systems by mixing or altering protocol semantics.
### Protocol Downgrade Attack
**Category:** Attack
Forcing systems to use weaker or legacy communication protocols.
### Protocol Fuzzing
**Category:** Security Testing
Sending malformed protocol messages to discover vulnerabilities.
### Protocol Injection
**Category:** Network Attack
Injecting malicious data into protocol communication streams.
### Protocol Stack Exploit
**Category:** Network Attack
Exploiting vulnerabilities across multiple layers of communication protocol stacks.
### Protocol State Machine Attack
**Category:** Advanced Network Attack
Exploiting flaws in protocol state transitions.
### Protocol Translation Attack
**Category:** Automotive Attack
Exploiting vulnerabilities in protocol converters or gateways.
### PSA Certified
**Category:** Security Certification
Certification scheme validating security compliance of embedded platforms.
### PTES (Penetration Testing Execution Standard)
**Category:** Security Methodology
A framework defining seven phases of penetration testing: pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post-exploitation, and reporting; widely adopted for automotive security assessments.
**Related:** OSINT, Reconnaissance, ROE, Metasploit Framework, Penetration Testing
### PTP (Precision Time Protocol)
**Category:** Network Protocol
An IEEE 1588 standard for sub-microsecond clock synchronization over Ethernet networks, used in automotive Ethernet TSN for coordinating safety-critical real-time communication; vulnerable to time synchronization attacks that can disrupt TSN scheduling.
**Related:** IEEE 1588, TSN, gPTP, Automotive Ethernet, Network Time Synchronization Attack
### PUF (Physically Unclonable Function)
**Category:** Hardware Security
A hardware primitive exploiting manufacturing variations to produce a unique, unclonable device fingerprint used for key generation, device authentication, and anti-counterfeiting in automotive microcontrollers; serves as a hardware root of trust without storing keys in non-volatile memory.
**Related:** Hardware Root of Trust, eFuse, HTA, Key Storage
### PWM (Pulse Width Modulation)
**Category:** Signal / Control
A technique for encoding analog signal levels into digital pulses by varying duty cycle, widely used in automotive for motor control, LED dimming, and sensor interfaces; PWM signal manipulation can affect safety-critical actuators.
**Related:** SENT, CAN, Sensor, Actuator
### Simple Power Analysis (SPA)
**Category:** Side Channel Attack
Direct observation of power consumption variations to infer operations.

## Q
### Cross-Core Communication Attack
**Category:** Embedded Attack
Exploiting communication between different CPU cores or subsystems.
### Deterministic Scheduling
**Category:** RTOS Feature
Guarantees predictable execution timing of tasks.
### Hardware Abstraction Layer (HAL) Attack
**Category:** System Attack
Exploiting vulnerabilities in HAL implementations.
### IPC Message Spoofing
**Category:** Attack
Forging IPC messages between processes or subsystems.
### IPC Router Hijacking
**Category:** Attack
Taking control of IPC routing mechanisms between subsystems.
### Message Queue Prioritization Attack
**Category:** Scheduling Attack
Manipulating queue priorities to delay or block critical tasks.
### Message Queue Starvation
**Category:** Real-Time Vulnerability
Preventing high-priority messages from being processed.
### Multi-Processor Communication Exploit
**Category:** Attack
Attacking message flows between heterogeneous processors.
### Preemptive Scheduling Attack
**Category:** Attack
Abusing preemption mechanisms to disrupt system timing.
### Priority-Based Scheduling
**Category:** RTOS Mechanism
Scheduling method where higher priority tasks preempt lower ones.
### QMS (Quality Management System)
**Category:** Quality Standard
A formalized system for managing quality processes across an organization, foundational to IATF 16949 compliance; in automotive cybersecurity, QMS intersects with security lifecycle management as required by ISO 21434 and UN R155.
**Related:** IATF 16949, ISO 21434, ASPICE, Quality Assurance
### QNX
**Category:** Real-Time Operating System (RTOS)
A Unix-like real-time operating system widely used in automotive infotainment, ADAS, and safety-critical ECUs.
### QNX IPC (Message Passing)
**Category:** Inter-Process Communication
Primary communication mechanism in QNX based on message passing rather than shared memory.
### QNX Memory Partitioning
**Category:** Security Isolation
Mechanism for isolating memory between processes and system components.
### QNX Microkernel
**Category:** OS Architecture
A minimal kernel design where most services run in user space for reliability and isolation.
### QNX Neutrino RTOS
**Category:** Automotive OS
The microkernel-based version of QNX used in modern automotive systems.
### QNX Process Manager
**Category:** OS Component
Manages process creation, scheduling, and lifecycle in QNX systems.
### QNX Resource Manager
**Category:** OS Architecture
A user-space service that exposes device and system resources as file-like interfaces.
### QNX Sandbox Escape
**Category:** Attack
Breaking isolation boundaries in QNX user-space services.
### QNX Scheduler
**Category:** Real-Time Systems
Priority-based scheduling system ensuring deterministic execution.
### QNX Secure Boot
**Category:** Security
Mechanism ensuring integrity of QNX boot chain.
### QoS (Quality of Service)
**Category:** Network / Communication
A set of technologies and policies for prioritizing network traffic to ensure deterministic latency and bandwidth for critical automotive communication; QoS manipulation attacks can degrade safety-critical message delivery in automotive Ethernet TSN networks.
**Related:** TSN, Automotive Ethernet, Network Prioritization, PTP
### Qualcomm DSP Interface
**Category:** Signal Processing
Communication channel between CPU and digital signal processor.
### Qualcomm Modem Interface
**Category:** Cellular Communication
Interface between application processor and baseband modem.
### Qualcomm Subsystem Communication
**Category:** Embedded Systems
Communication between modem, DSP, GPU, and application processor.
### Qualcomm TrustZone Interface
**Category:** Security Architecture
Secure communication channel between secure and non-secure worlds.
### Queue Injection Attack
**Category:** System Attack
Injecting malicious data into message queues.
### Queue Manipulation
**Category:** Attack Technique
Altering order or content of queued messages to affect execution.
### Queue Overflow
**Category:** Software Vulnerability
Condition where message queues exceed capacity leading to memory corruption or denial of service.
### Queue-Based DoS
**Category:** Denial of Service
Overloading message queues to degrade system performance.
### Real-Time Constraint Violation
**Category:** Safety Issue
Failure to meet timing deadlines in safety-critical systems.
### Real-Time Operating System (RTOS)
**Category:** OS
Operating system designed for deterministic timing behavior in embedded systems.
### Real-Time Scheduling Attack
**Category:** Timing Attack
Exploiting scheduling policies in RTOS environments.
### RTOS Kernel Exploit
**Category:** System Attack
Exploiting vulnerabilities in real-time operating system kernels.
### RTOS Memory Corruption
**Category:** Vulnerability
Memory corruption in real-time systems affecting deterministic behavior.
### RTOS Timing Manipulation
**Category:** Attack
Altering timing behavior of real-time systems.
### Service Registry Attack (QRTR)
**Category:** Attack
Manipulating service registration in QRTR systems.
### Subsystem Isolation Failure
**Category:** Security Vulnerability
Failure to isolate components like modem, DSP, and application processor.

## R
### Radio Protocol Exploit
**Category:** Wireless Security
Exploiting vulnerabilities in radio communication protocols.
### Read-Only Memory (ROM) Exploit
**Category:** Hardware Attack
Exploiting vulnerabilities in ROM-based firmware or boot code.
### Reconnaissance
**Category:** Penetration Testing
The first phase of penetration testing involving information gathering about the target vehicle, including passive (OSINT) and active (network scanning, wireless sniffing) techniques to map the attack surface before exploitation.
**Related:** OSINT, PTES, Passive Reconnaissance, Active Reconnaissance, Intelligence Gathering
### Register Manipulation
**Category:** Low-Level Attack
Direct modification of hardware registers.
### Register-Level Attack
**Category:** Hardware Attack
Manipulating CPU or MCU registers to control system behavior.
### Remote Code Execution (RCE)
**Category:** Critical Attack
Executing arbitrary code on a target system remotely through a vulnerability.
### Remote Diagnostics Attack
**Category:** Automotive Attack
Exploiting remote diagnostic interfaces in vehicles.
### Remote ECU Access
**Category:** Automotive Attack
Gaining remote control over ECU systems via network or wireless channels.
### Remote Firmware Update Attack
**Category:** OTA Attack
Compromising firmware update mechanisms.
### Replay Attack
**Category:** Network Attack
Reusing captured communication to deceive systems.
### Reset Attack
**Category:** Hardware Attack
Forcing system resets to manipulate state or bypass checks.
### Resource Exhaustion Attack
**Category:** Denial of Service
Overloading system resources to degrade performance.
### Reverse Engineering
**Category:** Security Analysis
The process of analyzing systems, firmware, or binaries to understand internal behavior.
### Reverse Engineering Firmware
**Category:** Automotive Security
Analyzing ECU or infotainment firmware to discover vulnerabilities.
### Reverse Path Filtering Bypass
**Category:** Network Attack
Bypassing network anti-spoofing mechanisms.
### RF (Radio Frequency)
**Category:** Wireless Communication
Wireless communication using electromagnetic radio waves.
### RF Front-End Attack
**Category:** Hardware Attack
Exploiting RF hardware components in wireless systems.
### RF Jamming
**Category:** Attack
Disrupting RF communication signals to block or degrade service.
### RF Replay Attack
**Category:** Attack
Replaying captured RF signals to impersonate legitimate devices.
### RF Spoofing
**Category:** Attack
Transmitting fake RF signals to mislead receivers.
### RFID Attack
**Category:** Wireless Attack
Exploiting RFID systems used in vehicle access or immobilizers.
### RKE (Remote Keyless Entry)
**Category:** Vehicle Access System
A system allowing drivers to lock/unlock and start vehicles remotely via key fob radio signals; one-way RKE sends commands only from fob to vehicle, while two-way RKE provides bidirectional communication. Vulnerable to relay, replay, and relay attacks.
**Related:** Key Fob, Relay Attack, RollJam, CAN Bus, Immobilizer
### ROE (Rules of Engagement)
**Category:** Penetration Testing
A formal document defining the scope, boundaries, and permitted actions for a penetration test, including target systems, allowed attack techniques, timelines, and escalation procedures; critical for automotive security assessments.
**Related:** PTES, Penetration Testing, Scope Definition, WBS
### Rogue BTS
**Category:** Cellular Attack
A fraudulent base transceiver station (BTS) created using SDR hardware (BladeRF, USRP, HackRF) and open-source software (OpenBTS, YateBTS, OsmocomBB) to impersonate a legitimate cellular network, enabling interception of vehicle TCU communications, IMSI capture, and downgrade attacks.
**Related:** BTS, IMSI Catcher, IMSI, TCU, GSM, OpenBTS, YateBTS, BladeRF, SDR
### ROM Boot Attack
**Category:** Boot Security Attack
Attacking system during ROM boot stage.
### Root Access
**Category:** Privilege
Highest level of system access in Unix-like operating systems.
### Root Certificate Exploit
**Category:** PKI Attack
Abusing trusted root certificates to bypass authentication.
### Root Exploit
**Category:** Attack
Vulnerabilities that allow attackers to gain root privileges.
### Root of Trust
**Category:** Security Architecture
A trusted hardware or firmware base used to verify system integrity.
### Root Persistence
**Category:** Malware
Maintaining root-level access after reboot or system update.
### Rootkit
**Category:** Malware
Malicious software designed to hide presence and maintain privileged access.
### ROS (Robot Operating System)
**Category:** ADAS / Robotics
A flexible framework used in robotics and autonomous driving systems.
### ROS Message Injection
**Category:** Attack
Injecting malicious messages into ROS communication channels.
### ROS Middleware Exploit
**Category:** Attack
Exploiting underlying middleware in ROS systems.
### ROS Node Attack
**Category:** Attack
Compromising ROS nodes to manipulate robot or vehicle behavior.
### ROS Security Breach
**Category:** Robotics Attack
Compromising ROS-based autonomous systems.
### ROS2 Security Model
**Category:** Robotics Security
Security architecture for ROS2 including DDS-based communication security.
### Router ECU
**Category:** Vehicle Architecture
ECU responsible for routing communication between vehicle domains.
### Routing Attack
**Category:** Network Attack
Manipulating routing tables or communication paths in vehicle networks.
### Routing Table Poisoning
**Category:** Attack
Injecting false routing information to redirect traffic.
### RPC (Remote Procedure Call)
**Category:** Distributed Systems
A communication mechanism that allows a program to execute functions on another process or system over a network or IPC channel.
### RPC Hijacking
**Category:** Attack
Intercepting and modifying RPC communication between components.
### RPC Injection
**Category:** Attack
Injecting malicious payloads into RPC calls to manipulate system behavior.
### RPC Spoofing
**Category:** Attack
Forging RPC requests to impersonate legitimate services.
### RPMB (Replay Protected Memory Block)
**Category:** Hardware Security
A hardware partition in eMMC and UFS storage providing authenticated, replay-protected access for storing security-critical data (e.g., rollback counters, keys, device state); uses HMAC-SHA256 for authentication and a monotonic write counter to prevent replay.
**Related:** eMMC, UFS, HMAC, Secure Storage, Rollback Protection
### RPN (Risk Priority Number)
**Category:** Risk Management
A numerical score (1-1000) used in FMEA to rank risk priority, calculated as Severity x Occurrence x Detectability; in automotive cybersecurity, RPN helps prioritize which threats and vulnerabilities to mitigate first based on their combined risk factors.
**Related:** FMEA, HARA, ASIL, Risk Assessment, ISO 26262
### RSU (Roadside Unit)
**Category:** V2X Infrastructure
A roadside communication device in V2X networks that exchanges data with vehicles via DSRC or C-V2X, supporting V2I applications such as traffic signal phase and hazard warnings.
**Related:** OBU, V2I, C-V2X, V2X
### RTCM
**Category:** GNSS Protocol
Radio Technical Commission for Maritime Services protocol, defining standard format for GNSS differential correction data used in precise vehicle positioning systems.
**Related:** NMEA, NTRIP, GNSS, C-V2X
### Runtime Attack
**Category:** Attack
Manipulating a system during execution time to alter behavior.
### Runtime Configuration Manipulation
**Category:** Attack
Modifying system configuration during execution.
### Runtime Hook Injection
**Category:** Attack
Injecting hooks into system runtime to alter behavior.
### Runtime Hooking
**Category:** Attack Technique
Intercepting function calls or system APIs during execution.
### Runtime Integrity
**Category:** Security Monitoring
Ensuring system code and behavior remain unmodified during execution.
### Runtime Memory Manipulation
**Category:** Memory Attack
Modifying memory while system is running to change execution flow.
### Runtime Patch Injection
**Category:** Attack
Injecting patches or modifications into running systems.
### Runtime Policy Bypass
**Category:** Attack
Circumventing security policies enforced at runtime.
### Runtime Sandbox Escape
**Category:** Attack
Breaking out of runtime isolation environments.

## S
### Cache Side Channel
**Category:** Side Channel
Exploiting CPU cache behavior to leak information.
### Camera Spoofing
**Category:** Sensor Attack
Manipulating camera input using light, patterns, or digital injection.
### EM Side Channel
**Category:** Side Channel
Extracting data through electromagnetic emissions.
### Meltdown Attack
**Category:** Microarchitectural Attack
Exploiting privilege boundary flaws in CPU memory access.
### Power Side Channel
**Category:** Side Channel
Analyzing power consumption to extract cryptographic keys.
### Radar Spoofing
**Category:** Sensor Attack
Injecting fake radar reflections to mislead detection systems.
### SAE J3016
**Category:** Autonomous Driving Standard
SAE International standard defining the six levels of driving automation, from Level 0 (no automation) to Level 5 (full automation).
**Related:** Autonomous Driving, ADAS
### SAE J3061
**Category:** Automotive Cybersecurity Standard
SAE International guidebook for cybersecurity of cyber-physical vehicle systems, providing a process framework for automotive cybersecurity. Superseded by ISO/SAE 21434.
**Related:** ISO 21434, TARA
### SAE J3101
**Category:** Automotive Cybersecurity Standard
An SAE International standard defining cybersecurity requirements for in-vehicle electronic control units (ECUs), providing a catalog of hardware- and software-based security mechanisms and guidance on their application to protect vehicle systems from cyber threats.
**Related:** SAE J3061, ISO 21434, ECU Security, Hardware Security
### Sandbox
**Category:** Security Isolation
A restricted execution environment limiting system access.
### Sandbox Escape
**Category:** Attack
Breaking out of isolated execution environments.
### SAST (Static Application Security Testing)
**Category:** Security Testing
A testing methodology that analyzes source code or compiled binaries without execution to identify security vulnerabilities such as buffer overflows, injection flaws, and hardcoded credentials; integrated into automotive CI/CD pipelines per ISO 21434 requirements.
**Related:** DAST, SCA, SDLC, ISO 21434, Code Review
### SBL (Secondary Bootloader)
**Category:** Boot Security
The second stage in the boot chain, loaded and verified by the Primary Bootloader (PBL), responsible for further hardware initialization (DDR memory, storage controllers, peripherals), performing integrity verification of the application OS or firmware image, and handing control to the runtime environment. SBL often supports recovery modes, multiple boot sources, firmware update fallback, and may integrate flash programming capabilities for over-the-air (OTA) update scenarios.
**Related:** PBL, Flash Bootloader, Boot ROM, Secure Boot, OTA, Boot Chain of Trust
### Scapy
**Category:** Security Tool
A Python-based interactive packet manipulation tool for network probing, scanning, and fuzzing; used in automotive security testing for CAN bus fuzzing, Ethernet frame injection, and diagnostic protocol analysis.
**Related:** Fuzzing, CAN Fuzzing, Wireshark, Metasploit Framework
### SCI (Secure Channel Identifier)
**Category:** Network Security
A unique identifier used in automotive secure communication protocols (e.g., AUTOSAR SecOC, TLS, MACsec) to distinguish authenticated communication channels, enabling correct key selection and freshness verification for each secure session.
**Related:** SecOC, MACsec, TLS, Secure Communication, MKA
### SDLC (System Development Life Cycle)
**Category:** Security Process
A structured process for developing automotive software encompassing requirements, design, implementation, testing, deployment, and maintenance phases; security activities (threat modeling, SAST/DAST, code review) must be integrated throughout.
**Related:** ASPICE, ISO 21434, SAE J3061, Threat Modeling, Secure Boot
### SDR (Software Defined Radio)
**Category:** RF Technology
Radio communication systems where signal processing is implemented in software rather than dedicated hardware, enabling flexible frequency and protocol operation; fundamental to automotive security research for GSM/V2X/GPS signal analysis and attack.
**Related:** HackRF One, BladeRF, RTL-SDR, USRP, GNU Radio, BTS, Rogue BTS
### SecOC (Secure Onboard Communication)
**Category:** AUTOSAR Security
An AUTOSAR security feature providing message authentication for in-vehicle communication using Message Authentication Codes (MAC) and freshness values to prevent spoofing and replay attacks.
**Related:** AUTOSAR, MAC, EVITA, HSM, CAN Injection
### Secure Boot
**Category:** Boot Security
A hardware-backed process that ensures only trusted and signed firmware is executed during system startup.
### Secure Boot Bypass
**Category:** Attack
Circumventing secure boot validation mechanisms.
### Secure Boot Chain
**Category:** Security Architecture
A sequence of trust verification steps from ROM to OS and application layers.
### Secure Communication Channel
**Category:** Security
Encrypted and authenticated communication between system components.
### Secure Debug Interface
**Category:** Hardware Security
Controlled debugging interfaces with authentication.
### Secure Element (SE)
**Category:** Hardware Security
A tamper-resistant hardware component used to store cryptographic keys and execute secure operations.
### Secure Enclave
**Category:** Hardware Security
Isolated execution environment for sensitive operations such as key management and biometric processing.
### Secure Firmware Update
**Category:** OTA Security
Authenticated and encrypted firmware update process.
### Secure Logging
**Category:** Security Monitoring
Tamper-resistant logging of system events.
### Secure Storage
**Category:** Data Protection
Encrypted and protected storage for sensitive data such as keys and credentials.
### Secure Update Mechanism
**Category:** OTA Security
A system ensuring firmware updates are authenticated, verified, and protected against tampering.
### Security Boundary Violation
**Category:** Security
Breaking defined trust or isolation boundaries.
### Security Policy Violation
**Category:** Security
Violation of defined security rules or constraints.
### Security Token
**Category:** Authentication
A digital token used to verify identity and permissions.
### Sensor Calibration Attack
**Category:** ADAS Attack
Manipulating sensor calibration to distort perception systems.
### Sensor Data Integrity Attack
**Category:** Automotive Attack
Manipulating raw sensor data before processing.
### Sensor Fusion Attack
**Category:** ADAS Security
Exploiting inconsistencies between multiple sensor inputs.
### Sensor Injection Attack
**Category:** Attack
Injecting false signals into sensors such as camera, radar, or lidar.
### Sensor Spoofing
**Category:** Attack
Manipulating sensor inputs to mislead perception systems.
### Serialization Attack
**Category:** Software Attack
Exploiting unsafe deserialization of structured data.
### Service Discovery Attack
**Category:** Network Attack
Abusing service discovery mechanisms to enumerate or hijack services.
### Service Hijacking
**Category:** Attack
Taking control of running services.
### Service Isolation Failure
**Category:** Security Vulnerability
Failure to isolate services leading to cross-service attacks.
### Service Registry Attack
**Category:** Distributed Systems Attack
Manipulating service registration and discovery systems.
### Service Spoofing
**Category:** Attack
Impersonating legitimate system services.
### Session Hijacking
**Category:** Network Attack
Taking over active communication sessions.
### Side Channel Attack
**Category:** Advanced Attack
Extracting sensitive information from physical leakages such as timing, power, or electromagnetic emissions.
### Signal Injection Attack
**Category:** Hardware Attack
Injecting artificial signals into physical or electronic systems.
### Signed Firmware Bypass
**Category:** Attack
Bypassing firmware signature verification.
### SmartDeviceLink
**Category:** Vehicle Connectivity
An open-source smartphone projection standard developed by Ford and Livio, enabling mobile app integration with vehicle infotainment systems across multiple platforms.
**Related:** CarPlay, Android Auto, MirrorLink
### Software Bill of Materials (SBOM)
**Category:** Supply Chain Security
A list of components and dependencies used in software systems.
### Software Composition Analysis (SCA)
**Category:** Supply Chain Security
Identifying vulnerabilities in third-party dependencies.
### Software Integrity Verification
**Category:** Security
Ensuring software has not been modified or corrupted.
### Software Supply Chain Risk
**Category:** Security
Risks introduced by third-party libraries and dependencies.
### Software Update Attack
**Category:** OTA Security
Exploiting weaknesses in update mechanisms.
### SOME/IP
**Category:** Middleware Protocol
Scalable service-Oriented MiddlewarE over IP, an automotive Ethernet middleware protocol for service-oriented communication between ECUs, supporting serialization, RPC, and pub/sub patterns.
**Related:** SOME/IP SD, Automotive Ethernet, Adaptive AUTOSAR, DDS
### SOME/IP SD
**Category:** Middleware Protocol
SOME/IP Service Discovery, a protocol for dynamic service discovery and subscription management in automotive Ethernet networks, enabling ECUs to locate and communicate with available service instances.
**Related:** SOME/IP, Automotive Ethernet, AUTOSAR Service Discovery
### SPDM (Security Protocol and Data Model)
**Category:** Security Protocol
A DMTF standard (DSP0274) for hardware-attested mutual authentication and secure channel establishment between components, used in automotive SoC architectures to verify component identity and firmware integrity before inter-processor communication.
**Related:** DMTF, Attestation, Secure Channel, Component Authentication, SoC
### Spectre Attack
**Category:** Microarchitectural Attack
Exploiting speculative execution to leak memory data.
### SSH (Secure Shell)
**Category:** Network Protocol
A cryptographic network protocol for secure remote access and command execution, used in automotive engineering for secure ECU access during development, diagnostics, and maintenance; misconfigured SSH servers on vehicle telematics units or head units present attack surfaces.
**Related:** TLS, Remote Access, Key Exchange, Telematics
### State Machine Attack
**Category:** Protocol Attack
Exploiting incorrect protocol state transitions.
### Static Analysis
**Category:** Security Analysis
Analyzing source code or binaries without execution.
### Static Binary Analysis
**Category:** Reverse Engineering
Analyzing compiled binaries without source code.
### STRIDE
**Category:** Threat Model
A Microsoft threat modeling framework categorizing threats into six types: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege, widely used in automotive security analysis.
**Related:** HEAVENS, TARA, Cyber Kill Chain, Attack Tree
### SUMS (Software Update Management System)
**Category:** Regulatory Compliance
A management system defined by UN R156 requiring vehicle manufacturers to establish processes for managing software updates throughout the vehicle lifecycle, ensuring update integrity and safety.
**Related:** UN R156, ISO 24089, OTA
### Supply Chain Attack
**Category:** Security Threat
Compromising hardware or software during manufacturing or distribution.
### Supply Chain Backdoor
**Category:** Security Threat
Hidden malicious functionality introduced during production.
### Supply Chain Firmware Injection
**Category:** Attack
Embedding malicious code into firmware before deployment.
### Supply Chain Verification
**Category:** Security
Ensuring integrity of hardware and software supply chain.
### Symbol Table Manipulation
**Category:** Reverse Engineering Attack
Modifying binary symbol information to hide functionality.
### Symbolic Execution
**Category:** Security Analysis
Analyzing program paths using symbolic inputs to discover vulnerabilities.
### Syscall Hooking
**Category:** Attack Technique
Intercepting system calls to modify behavior.
### System Compromise Persistence
**Category:** Malware
Maintaining long-term unauthorized access to a system.
### System Hardening
**Category:** Security
Techniques to reduce attack surface of systems.
### System Integrity Check
**Category:** Security Monitoring
Verification of system state against expected baseline.
### Timing Side Channel
**Category:** Side Channel
Using execution timing differences to infer secrets.
### Ultrasonic Sensor Attack
**Category:** Sensor Attack
Interfering with parking or proximity sensors using acoustic signals.

## T
### Attack Surface Mapping
**Category:** Threat Modeling
Identifying all potential entry points for attackers.
### Hardware Trace Port
**Category:** Debug Security
Hardware interface used for tracing system execution.
### System Trace Logging
**Category:** Security Monitoring
Recording detailed execution traces for debugging or forensic analysis.
### TA Exploit
**Category:** Attack
Exploiting vulnerabilities in trusted applications.
### Task Preemption Attack
**Category:** Real-Time Attack
Abusing task preemption mechanisms in RTOS environments.
### Task Scheduling Manipulation
**Category:** Attack
Altering execution order of system tasks.
### TCP/IP Stack Attack
**Category:** Network Attack
Exploitation of vulnerabilities in TCP/IP implementations.
### TCU Firmware Exploit
**Category:** Attack
Exploitation of vulnerabilities in telematics firmware.
### TDMA (Time Division Multiple Access)
**Category:** Wireless Communication
A channel access method allowing multiple users to share the same frequency by dividing signals into time slots, used in automotive cellular (2G GSM) and V2X communications; vulnerable to jamming and slot hijacking attacks.
**Related:** GSM, V2X, FDMA, CDMA, RF Jamming
### TEE (Trusted Execution Environment)
**Category:** Hardware Security / OS Architecture
An isolated secure environment inside a processor used to execute sensitive code and handle cryptographic operations.
### TEE Exploit
**Category:** Attack
Exploitation of vulnerabilities in trusted execution environments.
### TEE Isolation Bypass
**Category:** Attack
Breaking isolation boundaries between secure and normal world execution.
### Telematics
**Category:** Vehicle Cloud
Systems that transmit vehicle data to external servers for monitoring, diagnostics, or services.
### Telematics Control Unit (TCU)
**Category:** Automotive System
ECU responsible for cellular communication and vehicle-cloud interaction.
### Telemetry Authentication Bypass
**Category:** Attack
Bypassing authentication mechanisms in telemetry systems.
### Telemetry Injection
**Category:** Automotive Attack
Injecting false vehicle telemetry data into cloud systems.
### Telemetry Spoofing
**Category:** Attack
Faking vehicle data such as speed, location, or sensor values.
### Telemetry Tampering
**Category:** Attack
Modifying telemetry data before it reaches backend systems.
### Thread Scheduling Attack
**Category:** OS Attack
Manipulating thread scheduling behavior to disrupt execution.
### Threat Actor Modeling
**Category:** Threat Modeling
Modeling different types of attackers and their capabilities.
### Threat Intelligence
**Category:** Security
Information about current or emerging cybersecurity threats.
### Threat Modeling
**Category:** Security Engineering
Process of identifying, analyzing, and mitigating security threats in a system.
### Threat Surface Expansion
**Category:** Threat Modeling
Increase in system attack surface due to added functionality.
### Threat Vector
**Category:** Security
Path or method used by an attacker to compromise a system.
### Time Drift Attack
**Category:** Timing Attack
Causing desynchronization in real-time systems.
### Time Synchronization Attack
**Category:** Distributed Systems Attack
Manipulating system time across distributed ECUs.
### Timing Attack
**Category:** Side Channel Attack
Extracting sensitive information based on execution timing differences.
### Timing Channel Attack
**Category:** Side Channel
Extracting data through timing variations in system operations.
### Timing Manipulation
**Category:** Attack
Altering system timing behavior to influence execution.
### TISAX
**Category:** Security Assessment
Trusted Information Security Assessment Exchange, an assessment and exchange mechanism for information security in the European automotive industry, managed by ENX on behalf of VDA.
**Related:** VDA, ASPICE, ISO 21434
### TLS (Transport Layer Security)
**Category:** Network Security
Cryptographic protocol providing secure communication over networks.
### TLS Certificate Spoofing
**Category:** Attack
Forging or misusing TLS certificates to impersonate trusted endpoints.
### TLS Downgrade Attack
**Category:** Attack
Forcing communication to use weaker TLS versions.
### TLS MITM Attack
**Category:** Attack
Intercepting TLS-encrypted communication via man-in-the-middle techniques.
### Token Forgery
**Category:** Attack
Creating fake authentication tokens.
### Token Replay Attack
**Category:** Attack
Reusing authentication tokens to gain unauthorized access.
### Tokenization
**Category:** Security
Replacing sensitive data with non-sensitive tokens for protection.
### TPM Attack
**Category:** Hardware Attack
Exploitation of vulnerabilities in TPM implementations or interfaces.
### TPM Attestation
**Category:** Security
Process of verifying system integrity using TPM-generated measurements.
### TPM Key Extraction
**Category:** Attack
Extracting cryptographic keys from TPM through side channels or firmware flaws.
### TPMS (Tire Pressure Monitoring System)
**Category:** Vehicle Safety System
A system using battery-powered sensors in each tire to monitor pressure and transmit data via RF (315/433 MHz) to the vehicle ECU; presents an attack surface for tire pressure data spoofing, sensor cloning, and unauthorized vehicle tracking via unique sensor IDs.
**Related:** RF Attack, Sensor Spoofing, CAN Bus, Key Fob
### Trace Analysis
**Category:** Security Analysis
Analyzing execution traces to identify vulnerabilities or behavior patterns.
### Trace Hooking
**Category:** Attack Technique
Intercepting execution traces for manipulation or analysis.
### Trace Injection Attack
**Category:** Attack
Injecting fake trace data to mislead debugging or monitoring systems.
### Transport Encryption Failure
**Category:** Security Vulnerability
Failure in encrypting communication at transport layer.
### Transport Layer Security (TLS Stack)
**Category:** Network Security
Implementation of TLS protocol in system communication stacks.
### Transport Protocol Attack
**Category:** Network Attack
Exploiting vulnerabilities in transport layer protocols.
### TRIKE
**Category:** Threat Modeling
An open-source threat modeling methodology and tool that uses a uniform concept of trust boundaries to analyze system security, generating threat patterns from data flow and trust relationships; used as an alternative to STRIDE in automotive security assessments.
**Related:** STRIDE, PASTA, VAST, HEAVENS, TARA, Trust Boundary, DFD
### TRNG (True Random Number Generator)
**Category:** Cryptography
A hardware random number generator producing entropy from physical phenomena (thermal noise, oscillator jitter) rather than algorithms; essential for generating unpredictable cryptographic keys and nonces in automotive HSMs and security chips.
**Related:** DRBG, PRNG, HSM, Entropy, Key Generation
### Trust Boundary
**Category:** Threat Modeling
A logical or physical boundary across which data trust levels change (e.g., between in-vehicle network and external network, or between privileged and unprivileged processes); threats are identified by analyzing data crossing trust boundaries in DFDs.
**Related:** DFD, STRIDE, TRIKE, Threat Modeling, TARA
### Trusted Application (TA)
**Category:** TEE Security
Secure application running inside trusted execution environment.
### Trusted Boot Bypass
**Category:** Attack
Circumventing trusted boot mechanisms.
### Trusted Boot Chain
**Category:** Security Architecture
A chain of trust from hardware root to operating system.
### Trusted Communication Channel
**Category:** Security
Encrypted and authenticated communication path between components.
### Trusted Execution Path
**Category:** Security Architecture
Defined secure execution flow within a system.
### Trusted Firmware
**Category:** Security
Firmware responsible for establishing system trust during boot.
### Trusted Path Attack
**Category:** Security Attack
Breaking trusted input/output channels between user and secure system.
### Trusted Platform Module (TPM)
**Category:** Hardware Security
A hardware chip used to securely store cryptographic keys and perform attestation.
### Trusted Service
**Category:** Security Architecture
Secure system service running within trusted execution environments.
### TUF (The Update Framework)
**Category:** Security Framework
An open-source framework for securing software update systems, using role-based metadata signing and key management to protect against compromise of update repositories.
**Related:** Uptane, OTA, ISO 24089

## U
### Buffer Underflow
**Category:** Memory Vulnerability
Accessing memory before allocated buffer region.
### Integer Underflow Attack
**Category:** Memory Attack
Exploiting underflow conditions to manipulate program logic.
### UART (Universal Asynchronous Receiver-Transmitter)
**Category:** Hardware Interface
Low-level serial communication interface commonly used for debugging and firmware interaction.
### UART Boot Mode Attack
**Category:** Boot Attack
Exploiting UART-based bootloader interfaces.
### UART Debug Bypass
**Category:** Attack
Circumventing authentication or lock mechanisms on UART interfaces.
### UART Firmware Flashing Attack
**Category:** Hardware Attack
Using UART interface to rewrite firmware without authorization.
### UART Injection
**Category:** Attack
Injecting commands or data via UART interfaces.
### UDS (Unified Diagnostic Services)
**Category:** Automotive Diagnostics Protocol
A standardized diagnostic communication protocol used to interact with ECUs for reading data, flashing firmware, and performing tests.
### UDS Fuzzing
**Category:** Security Testing
Sending malformed diagnostic requests to ECUs to discover vulnerabilities.
### UDS Security Access
**Category:** Security Mechanism
A challenge-response mechanism used to restrict sensitive diagnostic operations.
### UDS Service Bypass
**Category:** Attack
Circumventing access control on diagnostic services.
### UDS Session Control
**Category:** Protocol Mechanism
Mechanism that controls diagnostic session states in ECUs.
### UDS Tester Present Abuse
**Category:** Attack
Abusing periodic tester presence messages in diagnostic sessions.
### UEFI (Unified Extensible Firmware Interface)
**Category:** Boot Security
Modern firmware interface responsible for initializing hardware and booting operating systems.
### UEFI Bootkit
**Category:** Malware
Malicious code that runs during the UEFI boot process.
### UEFI Secure Boot
**Category:** Security
A mechanism ensuring only trusted bootloaders and OS components are executed.
### UEFI Variable Manipulation
**Category:** Attack
Modifying persistent firmware variables to alter boot behavior.
### UFS (Universal Flash Storage)
**Category:** Storage
A high-performance flash storage interface standard used in automotive infotainment and telematics systems, offering faster read/write speeds and lower power consumption than eMMC; features RPMB (Replay Protected Memory Block) for secure data storage.
**Related:** eMMC, RPMB, Flash Storage, Secure Storage
### UN R155
**Category:** Automotive Cybersecurity Regulation
UN Economic Commission for Europe regulation requiring vehicle manufacturers to implement a Cybersecurity Management System (CSMS) and demonstrate cybersecurity risk management for vehicle type approval.
**Related:** CSMS, ISO 21434, WP.29
### UN R156
**Category:** Automotive Software Regulation
UN Economic Commission for Europe regulation requiring vehicle manufacturers to implement a Software Update Management System (SUMS) and ensure secure software updates for vehicle type approval.
**Related:** SUMS, ISO 24089, WP.29
### Unaligned Memory Access
**Category:** Hardware Vulnerability
Accessing memory at misaligned addresses causing instability or exploitation.
### Unauthorized Access
**Category:** Security
Accessing system resources without proper authentication.
### Unauthorized ECU Access
**Category:** Automotive Attack
Gaining control over ECUs without authorization.
### Underflow Vulnerability
**Category:** Memory Vulnerability
Arithmetic underflow leading to unexpected behavior or memory corruption.
### Universal Boot Interface Attack
**Category:** Boot Security Attack
Exploiting boot interfaces exposed across hardware platforms.
### Unsafe Deserialization
**Category:** Software Vulnerability
Processing untrusted serialized data leading to code execution.
### Unsafe Memory Copy
**Category:** Memory Vulnerability
Improper memory copying leading to overflow or corruption.
### Untrusted Input Handling
**Category:** Security Vulnerability
Failure to properly validate external inputs.
### Update Chain of Trust Failure
**Category:** Security Vulnerability
Breakdown in verification chain during update process.
### Update Interception Attack
**Category:** Network Attack
Intercepting firmware updates during transmission.
### Update Mechanism Attack
**Category:** OTA / Firmware Security
Exploiting weaknesses in software or firmware update pipelines.
### Update Rollback Attack
**Category:** Attack
Forcing system to install older vulnerable versions.
### Update Server Spoofing
**Category:** Supply Chain Attack
Impersonating firmware update servers to distribute malicious updates.
### Update Signature Bypass
**Category:** Attack
Bypassing cryptographic verification of update packages.
### Uplink Attack
**Category:** Network Attack
Compromising upstream communication channels in vehicle-cloud systems.
### Uptane
**Category:** Security Framework
An open-source OTA security framework for automobiles, developed by researchers, providing multi-role signing, compromise resilience, and versioning for secure vehicle software updates.
**Related:** TUF, OTA, ISO 24089, UN R156
### USB Debug Interface
**Category:** Hardware Security
Debug interface exposed via USB for development or maintenance.
### USB Descriptor Attack
**Category:** USB Attack
Manipulating USB descriptors to exploit host parsing vulnerabilities.
### USB Enumeration Attack
**Category:** Attack
Abusing device enumeration process to gain unauthorized access.
### USB Firmware Exploit
**Category:** Hardware Attack
Exploiting vulnerabilities in USB controller firmware.
### USB Gadget Attack
**Category:** Attack
Exploiting USB device mode interfaces to inject or extract data.
### USB HID Attack
**Category:** Attack
Using Human Interface Device emulation for malicious input injection.
### User Privilege Escalation
**Category:** Attack
Gaining higher-level permissions than intended.
### User Privilege Model
**Category:** OS Security
A system defining user roles and access permissions.
### User Session Hijacking
**Category:** Attack
Taking over authenticated user sessions.
### Userland Exploit
**Category:** System Attack
Exploiting vulnerabilities in user-space applications.
### Userland Sandbox Escape
**Category:** Attack
Escaping restricted user-space environments.
### USRP (Universal Software Radio Peripheral)
**Category:** Security Tool / SDR
A family of SDR hardware platforms by Ettus Research (now NI) providing wideband RF coverage and high data throughput, used in automotive security research for V2X signal analysis, GPS spoofing, and rogue BTS attacks.
**Related:** SDR, HackRF One, BladeRF, RTL-SDR, BTS, Rogue BTS

## V
### V2I (Vehicle-to-Infrastructure)
**Category:** V2X Subsystem
Communication between vehicles and roadside infrastructure.
### V2P (Vehicle-to-Pedestrian)
**Category:** V2X Subsystem
Communication between vehicles and pedestrians.
### V2V (Vehicle-to-Vehicle)
**Category:** V2X Subsystem
Direct communication between vehicles.
### V2X (Vehicle-to-Everything)
**Category:** Vehicle Communication
A communication system enabling vehicles to interact with other vehicles, infrastructure, pedestrians, and cloud systems.
### V2X Message Spoofing
**Category:** Attack
Forging vehicle-to-everything communication messages.
### VANET (Vehicular Ad-hoc Network)
**Category:** V2X Communication
A self-organizing wireless network formed by moving vehicles and roadside infrastructure, enabling V2V and V2I communication via DSRC/WAVE or C-V2X; the target of attacks including impersonation, Sybil, and CRL-based denial of service.
**Related:** V2V, V2I, V2X, DSRC, WAVE, IEEE 802.11p, OBU, RSU, ITS
### VAST (Visual, Agile, and Simple Threat)
**Category:** Threat Modeling
A threat modeling methodology emphasizing visual, agile, and simple threat representation using process flow diagrams and threat targeting, designed for integration into agile development workflows.
**Related:** STRIDE, PASTA, TRIKE, HEAVENS, TARA, DFD
### VDA
**Category:** Industry Association
Verband der Automobilindustrie (German Association of the Automotive Industry), an organization that develops standards and guidelines including VDA 6.1 quality audits and TISAX security assessment framework.
**Related:** TISAX, ASPICE, ISO 21434
### VECI
**Category:** Vehicle Identification
Vehicle Emission Control Information label, a standardized label under the hood specifying emission system configuration and OBD-II certification status.
**Related:** OBD-II, VIN, EPA
### Vehicle Virtualization
**Category:** System Architecture
Running multiple isolated vehicle workloads on shared hardware using virtualization.
### Verizon Hum
**Category:** Connected Vehicle Service
A connected car aftermarket service by Verizon providing OBD-II-based vehicle diagnostics, location tracking, and emergency assistance via a plug-in cellular dongle; represents a third-party connected vehicle attack surface with cellular, OBD-II, and cloud API exposure.
**Related:** OBD-II, TCU, Telematics, OnStar, Connected Vehicle
### VIN (Vehicle Identification Number)
**Category:** Vehicle Identification
A unique 17-character code assigned to every vehicle, encoding manufacturer, country, model year, and serial number. Used for vehicle tracking, theft prevention, and fleet management.
**Related:** WMI, VDS, VIS, PDSN
### Virtual ECU
**Category:** Automotive Architecture
Software-defined ECU running in virtualized environment.
### Virtualization Escape
**Category:** Attack
Breaking out of hypervisor or VM isolation.
### VLAN (Virtual Local Area Network)
**Category:** Network Security
A logical grouping of network devices that share a common broadcast domain regardless of physical location, used in automotive Ethernet to segment traffic between safety-critical, infotainment, and external communication domains; vulnerable to VLAN hopping and double-tagging attacks.
**Related:** Network Segmentation, Automotive Ethernet, VLAN Hopping, MACsec
### VNF (Virtual Network Function)
**Category:** Network Architecture
Software-based network functions used in vehicle cloud systems.
### VTA (Vehicle Type Approval)
**Category:** Regulatory Compliance
Vehicle Type Approval certification, the process where vehicle cybersecurity development is audited against specific work products to ensure compliance with UN R155. CSMS certification is a prerequisite for VTA.
**Related:** UN R155, CSMS, ISO 21434, WP.29

## W
### W^X (Write XOR Execute)
**Category:** Security Mechanism / Memory Protection
A security policy enforcing that memory pages cannot be simultaneously writable and executable, preventing code injection from data regions; implemented via hardware NX/XN bits in automotive SoCs to mitigate buffer overflow and code injection attacks.
**Related:** DEP, NX Bit, ASLR, Buffer Overflow, Code Injection
### Wake-Up Attack
**Category:** Automotive Attack
Forcing vehicle systems to wake from low-power state to trigger vulnerabilities.
### Watchdog Bypass
**Category:** Attack
Disabling or circumventing watchdog mechanisms.
### Watchdog Timer
**Category:** System Safety
A hardware timer that resets the system if software becomes unresponsive.
### WAVE (Wireless Access in Vehicular Environments)
**Category:** V2X Standard
A suite of IEEE standards (IEEE 1609 family and IEEE 802.11p) defining the communication stack for vehicular networking, including security services (IEEE 1609.2), resource management (IEEE 1609.4), and network services (IEEE 1609.3); the protocol stack for DSRC-based V2X communication.
**Related:** DSRC, IEEE 802.11p, V2X, VANET, ITS
### Wi-Fi Attack
**Category:** Network Attack
Exploiting vulnerabilities in vehicle Wi-Fi systems.
### WiFi Pineapple
**Category:** Security Tool
A wireless auditing device by Hak5 that creates rogue access points for evil twin attacks, Wi-Fi credential harvesting, and traffic interception; used in automotive wireless penetration testing against in-vehicle hotspots.
**Related:** Evil Twin Attack, Aircrack-ng, Kismet, BSSID, ESSID, MitM
### Wireshark
**Category:** Security Tool
An open-source network protocol analyzer supporting CAN, Ethernet, USB, Bluetooth, and 802.11 protocols; used in automotive security for packet capture and analysis of in-vehicle network traffic and diagnostic communications.
**Related:** Scapy, CAN Sniffing, Aircrack-ng, Bluetooth, DoIP
### WP.29
**Category:** Regulatory Body
The World Forum for Harmonization of Vehicle Regulations, a working party under the UNECE that develops international automotive regulations including UN R155 and UN R156.
**Related:** UN R155, UN R156, ECE R10
### WPA2 (Wi-Fi Protected Access II)
**Category:** Wireless Security
A security protocol for 802.11 wireless networks implementing CCMP/AES encryption; used in in-vehicle Wi-Fi hotspots, vulnerable to KRACK attacks and cracking via Aircrack-ng when weak passphrases are used.
**Related:** Aircrack-ng, WiFi Pineapple, Evil Twin Attack, BSSID, ESSID
### WPA3 (Wi-Fi Protected Access 3)
**Category:** Wireless Security
The third generation of Wi-Fi security protocols, providing individualized encryption for open networks (OWE/SAE), stronger protection against offline dictionary attacks, and simplified device configuration; used in modern vehicle Wi-Fi hotspots to replace WPA2.
**Related:** WPA2, SAE, OW-Encrypted, Wi-Fi, KRACK Attack
### Write Protection Bypass
**Category:** Hardware Attack
Circumventing flash or firmware write protection.

## X
### X.509 Certificate Attack
**Category:** PKI Attack
Exploiting weaknesses in X.509 certificate validation.
### XCP (Universal Measurement and Calibration Protocol)
**Category:** Automotive Protocol
Protocol used for ECU calibration and measurement over CAN/Ethernet.
### XCP Injection
**Category:** Automotive Attack
Injecting malicious calibration commands into ECU systems.
### XML Injection
**Category:** Web / Automotive Attack
Injecting malicious XML payloads into parsers.
### XSS (Cross-Site Scripting)
**Category:** Web Attack
Injecting malicious scripts into web interfaces used in vehicle infotainment systems.
### XXE (XML External Entity) 
**Category:** Parsing Vulnerability
Exploiting XML parsers to access local files or internal services.

## Y
### YAML Deserialization Attack
**Category:** Vulnerability
Exploiting unsafe YAML parsing leading to code execution.
### YAML Injection
**Category:** Parsing Attack
Injecting malicious payloads into YAML parsers.
### YANG Model Attack
**Category:** Network Management Attack
Exploiting vulnerabilities in YANG-based network configuration models.
### YateBTS
**Category:** Security Tool / SDR
An open-source software implementation of a GSM base transceiver station that runs on Linux with SDR hardware (BladeRF, USRP); used in automotive security testing to create rogue BTS for attacking vehicle TCU cellular connectivity.
**Related:** BTS, Rogue BTS, OpenBTS, OsmocomBB, BladeRF, SDR, GSM
### Yield Timing Attack
**Category:** Timing Attack
Manipulating thread yield behavior to extract timing information.

## Z
### Z-Buffer Manipulation Attack
**Category:** Graphics Attack
Exploiting rendering pipeline in infotainment systems.
### Zero Day Exploit
**Category:** Critical Attack
Exploitation of previously unknown vulnerabilities.
### Zero Trust Architecture
**Category:** Security Architecture
Security model that assumes no implicit trust within the system.
### Zeroization Failure
**Category:** Security Vulnerability
Failure to properly erase sensitive data from memory or storage.
### Zip Bomb Attack
**Category:** Compression Attack
Crafted archive that expands excessively to exhaust system resources.
### ZK (Zero Knowledge Proof)
**Category:** Cryptography
Cryptographic method allowing verification without revealing underlying data.
### Zombie Process Attack
**Category:** OS Attack
Abusing defunct processes to exhaust system resources.
### Zonal Gateway
**Category:** Vehicle Architecture
Central node managing communication between zones.
### Zone-Based ECU Architecture (Zonal Architecture)
**Category:** Vehicle Architecture
Modern vehicle design dividing ECUs into functional zones instead of domain-based architecture.

## 0 
### 0-Day
**Category:** Vulnerability 
Unknown vulnerability being actively exploited before patch availability.

## 1
### 1-Wire Debug Interface
**Category:** Hardware Debug 
Single-line debug/communication interface used in some ECUs.

## 2 
### 9008 EDL Mode
**Category:** Recovery / Debug Mode 
Qualcomm Emergency Download Mode used for low-level firmware flashing and recovery.

## 3



## 4



## 5



## 6



## 7



## 8



## 9

