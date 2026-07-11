# Automotive Security Glossary

**Automotive Security Glossary** is a glossary of automotive cybersecurity terminology that provides clear and concise definitions of automotive security concepts. It is designed to serve as a practical reference for security researchers, engineers, students, and automotive professionals, promoting a consistent understanding of automotive security terminology and best practices.

## 0-9

### 0-Day

**Category:** Vulnerability

**Related:** Exploit

Unknown vulnerability being actively exploited before patch availability.

### 1-Wire Debug Interface

**Category:** Reverse Engineering

Single-line debug/communication interface used in some ECUs.

### 4D Imaging Radar

**Category:** ADAS

An advanced automotive radar technology that measures range, azimuth (horizontal angle), elevation (vertical angle), and Doppler velocity simultaneously, generating dense point clouds approaching lidar-like resolution. 4D imaging radar uses multiple-input multiple-output (MIMO) antenna arrays and is more resilient to adverse weather than lidar, making it critical for L3+ automated driving sensor suites.

**Related:** Radar, mmWave Radar, MIMO, Point Cloud, Sensor Fusion

### 9008 EDL Mode

**Full Name:** Emergency Download Mode

**Category:** Hardware Security

A Qualcomm-specific emergency recovery mode that provides low-level access to a device over USB (typically enumerating as Qualcomm HS-USB QDLoader 9008). After a Firehose programmer is loaded via the Sahara protocol, firmware can be read, written, or recovered from eMMC/UFS storage. If exposed on production automotive ECUs or TCUs, EDL mode may allow firmware extraction, persistent modification, or other hardware-level attacks unless protected by secure boot and authentication mechanisms.

**Related:** Sahara Protocol, Firehose Protocol, Secure Boot, Firmware Extraction, JTAG, SWD

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

**Category:** Network

A high-bandwidth digital audio bus developed by Analog Devices for automotive infotainment and audio distribution.

**Related:** MOST, Ethernet AVB

### AAD

**Full Name:** Additional Authenticated Data

**Category:** Cryptography

Data authenticated but not encrypted in authenticated encryption algorithms such as AES-GCM.

**Related:** AES-GCM, AEAD, Encryption

### AADL

**Full Name:** Architecture Analysis & Design Language

**Category:** Security Architecture

A modeling language used to describe embedded system architectures, including software, hardware, timing, and safety properties.

**Related:** AUTOSAR, SysML

### AAOS

**Full Name:** Android Automotive OS

**Category:** Android

Google's Android-based operating system designed specifically for in-vehicle infotainment systems.

### ABAC

**Full Name:** Attribute-Based Access Control

**Category:** IAM

An authorization model that evaluates attributes of users, resources, and environments to make access decisions.

### ABE

**Full Name:** Attribute-Based Encryption

**Category:** Cryptography

**Related:** Decryption, Encryption

An encryption scheme where decryption depends on attributes rather than individual identities.

### ABI

**Full Name:** Application Binary Interface

**Category:** Operating System

A low-level interface defining binary compatibility between applications, libraries, and operating systems.

### ABI Compatibility

**Category:** Security

Ensures binary-level compatibility between compiled applications and system libraries across updates.

### ABR

**Full Name:** Automatic Boot Recovery

**Category:** Boot Security

A mechanism that restores a bootable firmware image after update failures or corrupted firmware.

### ABR Mechanism

**Category:** Boot Security

Automatic Boot Recovery mechanism used to restore system bootability after failed updates.

### ABS

**Full Name:** Anti-lock Braking System

**Category:** Vehicle Architecture

A safety system that prevents wheel lockup during braking by rapidly modulating brake pressure, maintaining steering control and reducing stopping distance, with electronic control that introduces security considerations.

**Related:** ESC, TCS, EBCM, Brake-by-Wire, Active Safety

### Absolute Address

**Category:** Hardware Security

**Related:** Firmware

A fixed memory address used directly by processors or firmware.

### Abuse Elevation Control Mechanism

**Category:** Attack

An Auto-ISAC attack technique where an adversary exploits or abuses the elevation control mechanisms of an in-vehicle system to gain higher privileges, such as bypassing permission checks or exploiting setuid-like mechanisms in automotive OS environments.

**Related:** Privilege Escalation, Kernel Privilege Escalation

### Abuse Standard Diagnostic Protocol

**Category:** Attack

An Auto-ISAC attack technique where an adversary abuses standard automotive diagnostic protocols (e.g., UDS, KWP2000) to execute unauthorized diagnostic sessions, read/write memory, or perform security access operations on ECUs.

**Related:** UDS, KWP2000, Diagnostic Security Access, Diagnostic Session

### ACC

**Full Name:** Adaptive Cruise Control

**Category:** ADAS

A driver assistance function that automatically adjusts vehicle speed to maintain a safe distance from preceding vehicles.

### Access Control

**Category:** Security

The process of restricting access to vehicle resources according to identities, permissions, or security policies.

**Related:** RBAC, ACL

### Access Token

**Category:** IAM

**Related:** Authentication, Credential

A credential representing successful authentication and authorization to access protected resources.

### Account Lockout

**Category:** IAM

**Related:** Authentication

A security mechanism that temporarily disables authentication after repeated failed login attempts.

### ACDP

**Full Name:** Access Control Decision Point

**Category:** IAM

A logical entity that evaluates access requests based on policies and attributes.

### ACEP

**Full Name:** Access Control Enforcement Point

**Category:** IAM

A system component that enforces access control decisions in runtime.

### ACK

**Full Name:** Acknowledgment

**Category:** Network

A message confirming successful reception of transmitted data.

### ACL

**Full Name:** Access Control List

**Category:** IAM

A list defining which users, devices, or applications are permitted to access specific resources.

### Acoustic Attack

**Category:** Attack

An attack that extracts sensitive information by analyzing acoustic emissions from electronic devices.

### ACRN

**Category:** Virtualization

An open-source reference hypervisor for embedded automotive systems, developed by Intel, designed for safety-critical real-time applications and consolidation of mixed-criticality workloads.

**Related:** Hypervisor, QNX Hypervisor, COQOS

### Active Attack

**Category:** Threat Modeling

An attack that modifies, injects, interrupts, or destroys communications or system behavior.

### Active Attack Surface

**Category:** Threat Modeling

The portion of the attack surface that is currently exposed and reachable during system operation.

### Active Diagnostic Session

**Category:** Diagnostics

A diagnostic communication session currently established between a tester and an ECU.

### Active Safety

**Category:** Vehicle Architecture

Technologies designed to prevent accidents, such as ABS, ESC, and AEB.

### Activity

**Category:** Android

A user interface component representing a single application screen.

### Adaptive Security Architecture

**Category:** Security Architecture

A security design approach that dynamically adjusts controls based on runtime conditions and threats.

### ADAS

**Full Name:** Advanced Driver Assistance Systems

**Category:** Vehicle Architecture

Electronic systems assisting drivers with perception, decision-making, and vehicle control.

### ADAS Domain Controller

**Category:** ECU

A centralized high-performance ECU that processes sensor data from cameras, radars, lidars, and ultrasonics for advanced driver-assistance functions (ACC, LKA, AEB, APA); typically runs an RTOS or Linux on a System-on-Chip (SoC) with hardware acceleration for AI inference. Increasingly serves as the core compute platform for L2+ automation.

**Related:** ADAS, Domain Controller ECU, Sensor Fusion, HPC, Autonomous Driving

### ADB

**Full Name:** Android Debug Bridge

**Category:** Android

A command-line tool for communicating with Android devices for debugging and development.

### ADC

**Full Name:** Analog-to-Digital Converter

**Category:** Hardware Security

A hardware component converting analog signals into digital values.

### Address Translation

**Category:** Hardware Security

The mapping between virtual and physical memory addresses used in embedded and ECU systems.

### Adversarial Machine Learning

**Category:** AI

An Auto-ISAC attack technique where an adversary crafts adversarial inputs to deceive in-vehicle ML models used in ADAS perception, object detection, driver monitoring, or traffic sign recognition, causing misclassification or unsafe decisions.

**Related:** Machine Learning, ADAS, Perception System

### Adversarial Patch

**Category:** AI

A physical-world adversarial attack technique where a carefully crafted pattern (printed on a physical object such as a sign or sticker) causes ML-based perception systems to misclassify targets; demonstrated against traffic sign recognition (stop sign classified as speed limit) and object detection in automotive ADAS.

**Related:** Adversarial Machine Learning, Object Detection, Semantic Segmentation, AI Safety

### AEAD

**Full Name:** Authenticated Encryption with Associated Data

**Category:** Cryptography

**Related:** Encryption

An encryption method providing confidentiality, integrity, and authenticity.

### AEB

**Full Name:** Automatic Emergency Braking

**Category:** ECU

An advanced driver assistance feature that automatically applies braking to reduce or avoid collisions.

### AER

**Full Name:** Advanced Error Reporting

**Category:** Attack

A mechanism in PCIe systems for reporting and handling hardware errors, useful in forensic analysis.

### AES

**Full Name:** Advanced Encryption Standard

**Category:** Cryptography

**Related:** Encryption

A symmetric encryption algorithm widely used for securing automotive communication and stored data.

### AES-CBC

**Category:** Cryptography

**Related:** Cipher

AES operating in Cipher Block Chaining mode.

### AES-CCM

**Category:** Cryptography

**Related:** Encryption

An authenticated encryption mode combining CTR encryption with CBC-MAC authentication.

### AES-GCM

**Category:** Cryptography

**Related:** Encryption

An authenticated encryption mode combining counter-mode encryption with Galois authentication.

### AF_ALG

**Category:** Operating System

**Related:** Kernel, Linux

A Linux socket interface providing access to kernel cryptographic APIs.

### AF_CAN

**Category:** Operating System

**Related:** Linux

A Linux socket family used for CAN bus communication.

### AF_PACKET

**Category:** Operating System

**Related:** Linux

A Linux socket family enabling direct access to Layer 2 network packets.

### AF_UNIX

**Category:** Operating System

A socket family supporting inter-process communication on the same host.

### AF_XDP

**Category:** Operating System

**Related:** Linux

A high-performance Linux socket type used for fast packet processing, often used in IDS/IPS systems.

### AFL

**Full Name:** American Fuzzy Lop

**Category:** Penetration Testing

**Related:** Fuzzing

A coverage-guided fuzzing framework widely used for vulnerability discovery.

### AFL++

**Category:** Penetration Testing

An enhanced version of AFL with improved instrumentation, mutation strategies, and performance.

### Aftermarket Customer or Dealer Equipment

**Category:** Attack

An Auto-ISAC attack technique where an adversary uses aftermarket devices (e.g., third-party dongles, OBD-II accessories, dealer diagnostic tools) as an attack vector to gain unauthorized access to vehicle networks or extract sensitive data.

**Related:** OBD-II, Diagnostic Port, Supply Chain Attack, Attack Vector

### AGL

**Full Name:** Automotive Grade Linux

**Category:** Operating System

**Related:** Linux

An open-source Linux platform developed specifically for automotive infotainment and digital cockpit systems.

### AI Accelerator

**Category:** AI

A dedicated hardware component (NPU, TPU, GPU) designed to accelerate machine learning inference and training workloads; increasingly integrated into automotive SoCs for real-time ADAS perception and autonomous driving processing.

**Related:** NPU, GPU, Edge AI, Deep Learning

### AI Safety

**Category:** AI

The discipline ensuring that AI systems operate safely within defined parameters, particularly critical for autonomous driving functions where perception errors, corner cases, or distribution shift can lead to hazardous behavior; encompasses robustness, specification alignment, and fail-safe mechanisms.

**Related:** Autonomous Driving, ADAS, Functional Safety, ISO 26262

### AIDL

**Full Name:** Android Interface Definition Language

**Category:** Android

An interface definition language used to define the programming interface between client and service processes in Android, enabling inter-process communication (IPC) across the Binder framework. In recent Android versions, AIDL has replaced HIDL for HAL communication (AIDL HALs), providing a stable, typed interface with backward compatibility for automotive hardware abstraction.

**Related:** HIDL, Binder, IPC, Treble, Android Vehicle HAL

### Air Gap

**Category:** Security

A security measure physically isolating systems from external networks.

### Air Interface

**Category:** Connectivity

The radio communication interface between mobile devices and cellular base stations.

### Airbag ECU

**Category:** ECU

**Related:** Control Unit

An electronic control unit responsible for monitoring crash sensors and deploying airbags.

### Aircrack-ng

**Category:** Security Tool

A suite of tools for auditing wireless networks (802.11 a/b/g), including packet capture, WEP/WPA cracking, and evil twin attack capabilities; used in automotive Wi-Fi penetration testing.

**Related:** Evil Twin Attack, WPA2, BSSID, ESSID, WiFi Pineapple

### AKI

**Full Name:** Authority Key Identifier

**Category:** Cryptography

**Related:** Certificate

An X.509 certificate extension identifying the public key corresponding to the certificate issuer.

### ALG

**Full Name:** Application Layer Gateway

**Category:** Network

A network component that understands and manages specific application-layer protocols.

### Algorithm Agility

**Category:** Cryptography

The ability of a system to replace cryptographic algorithms without significant architectural changes.

### Alignment

**Category:** Hardware Security

The arrangement of data in memory according to processor alignment requirements.

### ALKS

**Full Name:** Automated Lane Keeping System

**Category:** ADAS

**Related:** Autonomous Driving

A standardized autonomous driving function that maintains lane position without driver input under defined conditions.

### Allowlist

**Category:** Security

A list of explicitly permitted applications, commands, devices, or communication endpoints.

### ALM

**Full Name:** Application Lifecycle Management

**Category:** Security Architecture

The process of managing application development, deployment, update, and retirement.

### Android Application Sandbox

**Category:** Android

The mandatory access control and isolation mechanism that runs each Android app in a separate Linux process with a unique UID and SELinux context, preventing apps from accessing each other's data, memory, or system resources without explicit permission. Forms the foundation of Android's security model and is enforced in Android Automotive for infotainment and third-party app isolation.

**Related:** SELinux, Android Permission Model, UID Isolation, Mandatory Access Control, Linux Namespace

### Android Auto

**Category:** Android

A smartphone projection technology developed by Google that mirrors Android device functionality onto a vehicle's infotainment display, creating a potential attack surface through USB and Bluetooth connections.

**Related:** CarPlay, MirrorLink, SmartDeviceLink

### Android Automotive App

**Category:** Android

An application built specifically for Android Automotive OS (AAOS), designed to run in-vehicle with minimal driver distraction; distributed via Google Play for Automotive, these apps must comply with automotive UX guidelines (touch targets, time-to-read, glanceability) and security requirements (app sandbox, permission model, VHAL access control).

**Related:** AAOS, Android Automotive Security Model, Android Permission Model, Google Automotive Services, Car Service

### Android Automotive Emulator

**Category:** Android

**Related:** Android Auto

A virtual environment used to develop and test Android Automotive applications.

### Android Automotive Multi-User

**Category:** Android

The user management system in AAOS allowing driver, passenger, and guest profiles with isolated app data, settings, and accounts; supports fast user switching while driving, with security implications for PII isolation, app authorization, and persistent key/credential storage per profile.

**Related:** AAOS, Android Automotive Security Model, Android Permission Model, Android Activity

### Android Automotive OTA

**Category:** Android

The over-the-air update mechanism for AAOS leveraging AOSP seamless updates (A/B slot partitioning) to deliver system, security patch, and app updates to the IVI head unit; updates are cryptographically verified via AVB (Android Verified Boot), and rollback protection prevents downgrade attacks.

**Related:** AAOS, AVB, A/B OTA Upgrade, Android Fastboot, OTA Attack, OTA Rollback Attack

### Android Automotive Security Model

**Category:** Android

The layered security architecture of Android Automotive OS extending the standard Android security model with vehicle-specific controls: application sandboxing via SELinux, permission-based access to VHAL properties, user profile isolation, encrypted storage (File-Based Encryption), verified boot (AVB), and hardware-backed keystore for secure key storage.

**Related:** AAOS, Android SELinux, Android Permission Model, AVB, Android Hardware-backed Keystore, Android Vehicle HAL

### Android Automotive Security Patch

**Category:** Android

Monthly security bulletins and patches released by Google for the Android Automotive OS platform, covering vulnerabilities in the AOSP framework, Linux kernel, Qualcomm/MediaTek SoC drivers, and AAOS-specific services; OEMs are responsible for timely integration and OTA delivery to vehicle fleets.

**Related:** AAOS, Android Automotive OTA, Android Security Patch Level, AVB

### Android Automotive Telephony

**Category:** Android

The telephony and cellular connectivity stack in AAOS enabling eCall, emergency calling, in-vehicle Wi-Fi hotspot, and carrier voice/data services; includes IMS (IP Multimedia Subsystem), carrier configuration via SIM/ eSIM, and modem IPC via HAL; a critical attack surface for remote exploitation via cellular baseband.

**Related:** AAOS, T-Box, eCall System, Android Automotive Bluetooth, Android Automotive Wi-Fi

### Android Automotive Testing

**Category:** Android

A set of testing frameworks and tools for AAOS app and system validation including the AAOS Test Harness, Android Emulator (with vehicle HAL emulation), VHAL mock providers, and security testing tools (ADB, fuzzing, app vulnerability scanning); used by OEMs and suppliers to validate app security and system integration before deployment.

**Related:** AAOS, Android Automotive Emulator, ADB, Android Vehicle HAL, Android Permission Model

### Android Automotive Wi-Fi

**Category:** Android

The Wi-Fi connectivity subsystem in AAOS supporting STA (client mode for hotspot tethering), SoftAP (in-vehicle Wi-Fi hotspot), and Wi-Fi Direct / Wi-Fi Aware for V2X-like proximity services; WPA3-SAE for secure connections, enterprise EAP for fleet Wi-Fi; a potential attack surface for nearby adversary exploitation.

**Related:** AAOS, Android Automotive Bluetooth, Android Automotive Telephony, T-Box, Android Automotive OTA

### Android Hardware-backed Keystore

**Category:** Android

A keystore implementation that stores keys inside secure hardware such as a TEE or StrongBox.

### Android Init

**Category:** Android

The first user-space process (PID 1) launched by the Android kernel, responsible for mounting filesystems, setting SELinux policy, starting native daemons (servicemanager, vold, surfaceflinger, netd), and managing the Android boot sequence through init.rc configuration scripts. Critical for early boot security, init enforces SELinux policy loading before any other process starts.

**Related:** SELinux, init.rc, Boot Sequence, Zygote, System Server

### Android Keystore

**Category:** Android

A secure storage system for cryptographic keys, often backed by hardware security modules.

### Android Permission Model

**Category:** Android

The framework controlling application access to protected system resources.

### Android Runtime

**Full Name:** ART

**Category:** Android

The managed runtime environment used by Android to execute application bytecode, employing ahead-of-time (AOT) and just-in-time (JIT) compilation to convert DEX bytecode to native machine code. ART provides memory management, garbage collection, and security features including CFI (Control Flow Integrity) and ShadowCallStack for exploitation mitigation in Android Automotive app environments.

**Related:** DEX, JIT, AOT, APK, CFI

### Android Security

**Category:** Android

The multi-layered security architecture of the Android platform, including application sandboxing, permissions, SELinux, verified boot, and Play Protect, forming the foundation for Android Automotive OS security.

**Related:** Android Automotive, SELinux, Verified Boot, App Sandbox, Keystore

### Android Vehicle HAL

**Full Name:** VHAL

**Category:** Android

The hardware abstraction layer that defines a standardized interface between Android Automotive OS and vehicle-specific hardware properties (sensors, HVAC, powertrain), enabling apps to access vehicle data.

**Related:** Android Automotive, HIDL, AIDL, Car API, Vehicle Network Service

### ANN

**Full Name:** Artificial Neural Network

**Category:** AI

A computational model inspired by biological neural networks and widely used in autonomous driving applications.

### Anti-Cloning

**Category:** Security

Mechanisms designed to prevent unauthorized duplication of software, firmware, or hardware identities.

### Anti-Debugging

**Category:** Security

Techniques designed to prevent or detect debugging during software execution.

### Anti-Malware

**Category:** Security

Software that detects, prevents, and removes malicious software.

### Anti-Replay

**Category:** Network

A protection mechanism preventing attackers from successfully replaying previously captured messages.

### Anti-Rollback

**Category:** Boot Security

A mechanism preventing installation of firmware versions older than an approved security baseline.

### Anti-Spoofing

**Category:** Network

Mechanisms designed to detect and prevent identity spoofing attacks.

### Anti-Tamper

**Category:** Hardware Security

Techniques intended to detect or resist physical or logical tampering.

### Anti-Theft System

**Category:** Vehicle Security

Electronic systems designed to prevent unauthorized vehicle access or theft.

### AOSP

**Full Name:** Android Open Source Project

**Category:** Android

The open-source project providing the base Android operating system.

### AP

**Full Name:** Access Point

**Category:** Connectivity

A wireless networking device providing Wi-Fi connectivity.

### AP Isolation

**Category:** Connectivity

A wireless security feature that prevents direct communication between clients connected to the same access point.

### APDU

**Full Name:** Application Protocol Data Unit

**Category:** Hardware Security

The communication unit exchanged between a smart card and a card reader according to ISO/IEC 7816.

**Related:** eSIM, eUICC, Secure Element

### APEX

**Category:** Android

A modular system update format used in Android for delivering low-level system components such as native libraries and runtime modules.

**Related:** Android OTA, System Update

### API

**Full Name:** Application Programming Interface

**Category:** Security

A defined interface enabling software components to communicate with one another.

### API Abuse

**Category:** Security

The misuse of legitimate API functionality to bypass intended restrictions or consume excessive resources.

### API Authentication

**Category:** Security

**Related:** Identity

The process of verifying the identity of API clients before granting access.

### API Authorization

**Category:** Security

The process of determining whether an authenticated API client has permission to perform requested operations.

### API Endpoint

**Category:** Security

A specific URL or interface through which an API service is accessed.

### API Enumeration

**Category:** Penetration Testing

The process of identifying available API endpoints, methods, parameters, and versions.

### API Fuzzing

**Category:** Penetration Testing

A testing technique that sends malformed or unexpected requests to APIs to identify vulnerabilities.

### API Gateway

**Category:** Security

A service that manages authentication, routing, rate limiting, and monitoring for APIs.

### API Gateway Authentication

**Category:** Security

The authentication mechanisms enforced by an API gateway before forwarding requests.

### API Key

**Category:** IAM

A unique identifier used to authenticate API clients.

### API Rate Limiting

**Category:** Security

A mechanism that limits the number of requests accepted from clients within a defined period.

### API Security

**Category:** Security

Practices and technologies protecting APIs from unauthorized access and attacks.

### API Security Testing

**Category:** Penetration Testing

The evaluation of APIs for authentication, authorization, input validation, and business logic vulnerabilities.

### API Token

**Category:** IAM

**Related:** Credential

A credential issued to software clients for accessing protected APIs.

### APK

**Full Name:** Android Package

**Category:** Android

The package format used to distribute Android applications.

### APK Signature Scheme

**Category:** Android

The cryptographic signing mechanism used to verify the authenticity and integrity of Android application packages.

### APN

**Full Name:** Access Point Name

**Category:** Network

The configuration that identifies the gateway between a mobile network and an external IP network.

### APN Authentication

**Category:** Network

The authentication process used when establishing a mobile data connection through an APN.

### APN Configuration

**Category:** Network

The parameters defining how a cellular device connects to a carrier's packet data network.

### APN Isolation

**Category:** Network

A carrier feature that logically separates traffic belonging to different APNs.

### App Sandbox

**Category:** Android

An operating system security mechanism isolating applications from each other.

### Application Firewall

**Category:** Network

**Related:** Firewall

A firewall designed to inspect and filter application-layer traffic.

### Application Hardening

**Category:** Security

The process of reducing the attack surface of an application through secure configuration and protection mechanisms.

### Application Isolation

**Category:** Operating System

A security mechanism that prevents applications from interfering with each other by enforcing execution boundaries.

### Application Layer Security

**Category:** Network

Security mechanisms implemented at the application layer such as authentication, encryption, and validation.

### Application Manifest

**Category:** Android

A configuration file describing application components, permissions, and capabilities.

### Application Whitelisting

**Category:** Security

A security policy that permits only explicitly approved applications to execute.

### Approval Workflow

**Category:** Security Architecture

A defined process requiring authorized review and approval before changes or deployments are accepted.

### AR-HUD

**Full Name:** Augmented Reality Head-Up Display

**Category:** Vehicle Architecture

A display system projecting navigation and driving information onto the windshield using augmented reality techniques.

### Arbitration

**Category:** Network

The process by which CAN nodes determine which message gains bus access based on identifier priority.

### Argument Injection

**Category:** Vulnerability

A vulnerability where an attacker injects additional arguments into a command-line invocation by supplying crafted input (e.g., "--flag=malicious") that the application passes unsanitized to a shell or exec call; in automotive systems, argument injection in diagnostic tools or OTA update scripts can lead to arbitrary command execution on TCU or IVI platforms.

**Related:** Command Injection, OS Command Injection, Code Execution, Input Validation Failure

### Arm CCA

**Full Name:** Arm Confidential Compute Architecture

**Category:** Attack

Arm's security architecture providing hardware-enforced realm-based isolation for confidential computing, allowing multiple tenants (e.g., vehicle OEM, third-party apps, diagnostics) to execute in isolated realms with hardware-assured confidentiality and integrity protection against privileged software attacks.

**Related:** ARM TrustZone, TEE, Hypervisor, Realm Management Extension (RME)

### ARM Cortex-R52

**Category:** Hardware Security

An ARMv8-R real-time processor for safety-critical automotive applications with hardware virtualization, enabling multiple ASIL-level partitions with hardware-enforced isolation on a single core.

**Related:** ASIL, Hypervisor, TEE

### ARM Exception Levels

**Full Name:** EL0-EL3

**Category:** Hardware Security

The ARM privilege hierarchy: EL0 (user), EL1 (OS kernel), EL2 (hypervisor), EL3 (secure monitor), forming the hardware foundation for trusted execution and isolation in automotive SoCs.

**Related:** ARM TrustZone, TEE, Hypervisor

### ARM TrustZone

**Category:** Hardware Security

A hardware security architecture separating secure and non-secure execution environments.

### ARP

**Full Name:** Address Resolution Protocol

**Category:** Network

A protocol used to map IPv4 addresses to MAC addresses on a local network.

### ARP Cache

**Category:** Network

A table storing recently resolved IP-to-MAC address mappings.

### ARP Cache Poisoning

**Category:** Attack

A technique that inserts forged ARP entries into a victim's ARP cache to redirect network traffic.

### ARP Inspection

**Category:** Network

A security mechanism that validates ARP packets to prevent spoofing attacks.

### ARP Spoofing

**Category:** Attack

An attack that sends forged ARP messages to redirect network traffic through an attacker's device.

### ARP Storm

**Category:** Attack

A condition where excessive ARP traffic disrupts network communication.

### ARP Table

**Category:** Network

A local database containing IP address and MAC address mappings.

### ARQ

**Full Name:** Automatic Repeat reQuest

**Category:** Network

A reliability mechanism that retransmits lost or corrupted packets.

### Array Bounds Check

**Category:** Security

A validation process ensuring array accesses remain within valid memory boundaries.

### Array Index Out-of-Bounds

**Category:** Vulnerability

A programming error in which an array is accessed outside its allocated range.

### ARXML

**Full Name:** AUTOSAR XML

**Category:** AUTOSAR

The XML configuration format used throughout AUTOSAR projects.

### ASAM

**Full Name:** Association for Standardization of Automation and Measuring Systems

**Category:** Standards

An international organization developing standards for automotive development, testing, calibration, and diagnostics.

### ASAM A2L

**Full Name:** ASAM MCD-2 MC

**Category:** Standards

A standardized file format describing ECU measurement and calibration parameters.

### ASAM MCD-3D

**Category:** Diagnostics

A standard defining interfaces between diagnostic applications and vehicle communication servers.

### ASAM MDF

**Full Name:** Measurement Data Format

**Category:** Standards

A standardized file format for storing automotive measurement and logging data.

### ASAM ODX

**Full Name:** Open Diagnostic Data Exchange

**Category:** Diagnostics

**Related:** Diagnostic Service

An XML-based standard describing diagnostic services, ECU functions, and communication parameters.

### ASAM XIL

**Category:** Penetration Testing

A standardized interface supporting Hardware-in-the-Loop (HIL), Software-in-the-Loop (SIL), and Model-in-the-Loop (MIL) testing.

### ASIL

**Full Name:** Automotive Safety Integrity Level

**Category:** Functional Safety

**Related:** ASIL A, ASIL D

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

### ASLR

**Full Name:** Address Space Layout Randomization

**Category:** Security

A security technique that randomizes the memory addresses of executable code, libraries, stack, and heap to make it harder for attackers to predict target addresses for exploitation techniques like ROP and JOP.

**Related:** DEP, W^X, ROP, JOP, Memory Protection

### ASN.1

**Full Name:** Abstract Syntax Notation One

**Category:** Network

A standard language for describing structured data exchanged between systems.

### ASPICE

**Full Name:** Automotive SPICE

**Category:** Standards

A process assessment model adapted from ISO 15504 (SPICE) for the automotive industry, used to evaluate and improve software and system development processes in automotive suppliers and OEMs.

**Related:** ISO 21434, IATF 16949, VDA, TISAX, ISO 9001

### Asset

**Category:** Threat Modeling

Anything of value requiring protection, including hardware, software, data, credentials, and services.

### Asset Criticality

**Category:** Penetration Testing

A measure of the importance of an asset based on its impact on safety, operations, or cybersecurity.

### Asset Discovery

**Category:** Security Architecture

The process of identifying hardware, software, services, communication interfaces, and digital assets within a vehicle ecosystem.

### Asset Exposure Analysis

**Category:** Threat Modeling

**Related:** Asset

The process of evaluating how and where assets are exposed to potential attackers.

### Asset Fingerprinting

**Category:** Security Architecture

The identification of devices based on unique hardware, software, protocol, or behavioral characteristics.

### Asset Inventory

**Category:** Security Architecture

A maintained list of hardware, software, ECUs, services, certificates, and digital assets.

### Asset Mapping

**Category:** Threat Modeling

The process of documenting relationships among ECUs, applications, cloud services, and communication channels.

### Asset Owner

**Category:** Security Architecture

The individual or organization responsible for the protection and management of a specific asset.

### Asset Visibility

**Category:** Security Architecture

The ability to continuously identify and monitor connected assets.

### Assisted Driving

**Category:** ADAS

Driving functionality in which the driver remains responsible while automation assists with specific tasks.

### AST

**Full Name:** Application Security Testing

**Category:** Penetration Testing

The practice of evaluating software applications for security vulnerabilities using static, dynamic, or interactive techniques.

### Asymmetric Cryptography

**Category:** Cryptography

A cryptographic system using mathematically related public and private keys.

### Asymmetric Key

**Category:** Cryptography

**Related:** Cryptographic Key

A cryptographic key pair consisting of a public key and a private key.

### Asynchronous Communication

**Category:** Network

Communication in which participants operate independently without requiring synchronized timing.

### Asynchronous ECU

**Category:** ECU

**Related:** Control Unit

An electronic control unit operating independently of synchronized communication cycles.

### Atomic Operation

**Category:** Security

An operation that is completed entirely or not executed at all, without intermediate observable states.

### Atomic Update

**Category:** OTA

A software update process that either completes successfully or leaves the original software unchanged.

### Attack Attribution

**Category:** Threat Modeling

The process of identifying the likely source or origin of a cyber attack.

### Attack Campaign

**Category:** Threat Modeling

A coordinated series of cyber attacks conducted to achieve specific objectives.

### Attack Chain

**Category:** Threat Modeling

A sequence of attacker actions performed to achieve an objective.

### Attack Chain Modeling

**Category:** Threat Modeling

A structured representation of multi-step attack progression from initial access to final objective.

### Attack Detection

**Category:** Threat Modeling

The identification of malicious activities targeting vehicle systems or infrastructure.

### Attack Graph

**Category:** Threat Modeling

**Related:** Attack Path

A graphical representation of possible attack paths through interconnected vulnerabilities.

### Attack Path

**Category:** Threat Modeling

A possible sequence of vulnerabilities or weaknesses leading to successful compromise.

### Attack Pattern

**Category:** Threat Modeling

A reusable description of techniques commonly employed by attackers.
### Attack Potential
**Category:** Threat Modeling
A measure of the effort and resources required for an adversary to successfully execute an attack, assessed during ISO 21434 TARA using five factors: elapsed time, specialist expertise, knowledge of the TOE, window of opportunity, and equipment. Attack potential ratings (Basic, Enhanced-Basic, Moderate, High, Beyond-High) determine whether a threat scenario is relevant for risk treatment.
**Related:** TARA, Risk Assessment, ISO 21434, Attack Feasibility, Threat Scenario, Elapsed Time

### Attack Prerequisite

**Category:** Threat Modeling

A condition that must be satisfied before an attack can be successfully executed.

### Attack Resistance

**Category:** Threat Modeling

The ability of a system to withstand deliberate cyber attacks.

### Attack Scenario

**Category:** Threat Modeling

A structured description of how an attacker could compromise a system.

### Attack Simulation

**Category:** Threat Modeling

The controlled execution of realistic attack techniques to evaluate security defenses.

### Attack Simulation Platform

**Category:** Threat Modeling

**Related:** Attack Scenario

A platform used to emulate realistic attack scenarios for evaluating cybersecurity controls.

### Attack Surface

**Category:** Threat Modeling

The total collection of interfaces through which attackers may interact with a system.

### Attack Surface Analysis

**Category:** Threat Modeling

The systematic identification and evaluation of all externally reachable interfaces, services, communication channels, and entry points that could be exploited by an attacker.

**Related:** Attack Surface, Threat Modeling

### Attack Surface Enumeration

**Category:** Threat Modeling

**Related:** Attack Surface

The process of discovering exposed assets, services, ports, APIs, protocols, and interfaces that contribute to the attack surface.

### Attack Surface Mapping

**Category:** Threat Modeling

Identifying all potential entry points for attackers.

### Attack Surface Reduction

**Category:** Threat Modeling

**Related:** Attack Vector

Techniques used to minimize exposed interfaces, services, and attack vectors.

### Attack Toolchain

**Category:** Threat Modeling

A collection of tools used in sequence for reconnaissance, exploitation, and persistence.

### Attack Tree

**Category:** Threat Modeling

A hierarchical representation of attack goals and possible attack methods.

### Attack Tree Analysis

**Category:** Threat Modeling

**Related:** Attack Path, Attack Tree

A structured analysis method that evaluates attack paths using hierarchical attack trees to estimate likelihood and impact.

### Attack Vector

**Category:** Threat Modeling

The method or pathway used by an attacker to compromise a system.

### Attacker Model

**Category:** Threat Modeling

A description of an attacker's capabilities, objectives, resources, privileges, and assumptions.

### Attestation

**Category:** Hardware Security

A process proving the integrity or authenticity of hardware or software.

### Attestation Evidence

**Category:** Hardware Security

Cryptographic proof used to validate system integrity or boot state.

### Attestation Key

**Category:** Hardware Security

A cryptographic key used to prove the integrity or identity of a hardware or software component.

### Attribute Certificate

**Category:** Cryptography

**Related:** Certificate, Digital Certificate

A digital certificate that binds authorization attributes or roles to an identity rather than a public key.

### Attribute Validation

**Category:** IAM

**Related:** Authorization Decision

The process of verifying the correctness and legitimacy of identity attributes before authorization decisions are made.

### Audit

**Category:** Intrusion Detection

A systematic examination of systems, configurations, processes, or records to verify compliance with security policies, standards, or regulations.

**Related:** Compliance, Assessment

### Audit Event

**Category:** Intrusion Detection

A recorded security-relevant action generated by users, applications, operating systems, or network devices.

### Audit Log

**Category:** Intrusion Detection

A chronological record of security-relevant events used for monitoring, investigation, and forensic analysis.

### Audit Policy

**Category:** Security Architecture

Rules defining which security events must be logged and how logs are retained and protected.

### Audit Record

**Category:** Intrusion Detection

A structured entry describing a single audited event.

### Auditability

**Category:** Security Architecture

The capability of a system to produce sufficient evidence for compliance verification and forensic investigations.

### Authentication

**Category:** IAM

The process of verifying the identity of users, devices, or services.

### Authentication Bypass

**Category:** Vulnerability

A security flaw that allows an attacker to gain access without successfully completing the authentication process.

### Authentication Context

**Category:** IAM

Information describing how and under what conditions an identity was authenticated.

### Authentication Context Class Reference

**Full Name:** ACR

**Category:** IAM

**Related:** Authentication

A parameter indicating the strength or method of authentication used.

### Authentication Credential

**Category:** IAM

Evidence presented to verify an identity, including passwords, certificates, cryptographic keys, or biometrics.

### Authentication Factor

**Category:** IAM

A category of evidence used to verify identity, such as knowledge (password), possession (token), or inherence (biometric).

### Authentication Failure

**Category:** IAM

An unsuccessful attempt to verify the identity of a user, device, or service.

### Authentication Failure Threshold

**Category:** IAM

**Related:** Authentication

The maximum number of consecutive failed authentication attempts allowed before protective actions are taken.

### Authentication Protocol

**Category:** Cryptography

A protocol defining how identities are verified during communication.

### Authentication Protocol Attack

**Category:** Attack

An attack targeting weaknesses in authentication protocols to impersonate users or devices.

### Authentication Replay

**Category:** IAM

**Related:** Authentication

An attack in which previously captured authentication messages are resent to obtain unauthorized access.

### Authentication Server

**Category:** IAM

**Related:** Authentication, Credential

A server responsible for validating credentials and issuing authentication decisions or tokens.

### Authentication Timeout

**Category:** IAM

The period after which an authenticated session must be revalidated.

### Authentication Token

**Category:** IAM

A cryptographically protected token representing an authenticated identity.

### Authentication Vector

**Category:** Network

A collection of cryptographic parameters used during subscriber authentication in cellular networks.

### Authorization

**Category:** Security

The process of determining what authenticated entities are permitted to do.

### Authorization Boundary

**Category:** IAM

A logical separation defining the limits of permissions granted to authenticated entities.

### Authorization Context

**Category:** IAM

**Related:** Authorization Decision

The environmental and identity-based conditions used during authorization decisions.

### Authorization Decision

**Category:** IAM

The result of evaluating whether an authenticated subject is permitted to perform a requested action.

### Authorization Policy

**Category:** IAM

A set of rules determining which actions authenticated entities are allowed to perform.

### Authorization Server

**Category:** IAM

A server that grants authorization to clients after validating permissions.

### Authorization Token

**Category:** IAM

A token representing permissions granted to an authenticated subject.

### Authorized Diagnostic Tool

**Category:** Diagnostics

A diagnostic device permitted to access protected vehicle functions based on security policies.

### Authorized Firmware

**Category:** Boot Security

Firmware that has been authenticated and approved for installation by the manufacturer.

### Auto Provisioning

**Category:** OTA

The automatic configuration and enrollment of devices into a managed environment.

### Auto Recovery

**Category:** Vehicle Architecture

A mechanism that automatically restores normal system operation following failures or crashes.

### Auto Update

**Category:** OTA

The automated downloading, verification, and installation of software updates.

### Auto-Discovery

**Category:** Network

A mechanism that automatically detects devices, services, or network resources.

### Auto-ISAC

**Category:** Standards

The Automotive Information Sharing and Analysis Center, an industry-wide organization for sharing cybersecurity threat intelligence and best practices among automotive stakeholders.

**Related:** C-Auto-ISAC, TARA, Threat Intelligence

### Auto-Negotiation

**Category:** Network

A protocol that allows connected Ethernet devices to automatically determine communication parameters.

### Automatic Certificate Management

**Category:** Cryptography

**Related:** Certificate, Digital Certificate

The automated enrollment, renewal, revocation, and lifecycle management of digital certificates.

### Automatic Key Rotation

**Category:** Cryptography

**Related:** Cryptographic Key

A security practice that periodically replaces cryptographic keys to reduce the impact of key compromise.

### Automatic Vulnerability Scanning

**Category:** Penetration Testing

The use of automated tools to identify known security weaknesses in systems or applications.

### Automotive Cybersecurity

**Category:** Vehicle Security

The discipline focused on protecting connected vehicles, ECUs, cloud services, mobile applications, and automotive infrastructure from cyber threats.

### Automotive Ethernet

**Category:** Network

A family of Ethernet technologies designed for high-speed in-vehicle communication.

### Automotive Gateway

**Category:** ECU

An electronic control unit responsible for routing, filtering, and securing communication between multiple in-vehicle networks.

### Automotive Radar

**Category:** ADAS

Radar systems specifically designed for vehicle applications, operating in allocated frequency bands (24 GHz narrowband/ultra-wideband, 76–77 GHz LRR, 77–81 GHz SRR/MRR) under regulatory frameworks (FCC, ETSI). Automotive radar is the primary environmental sensor for adaptive cruise control, emergency braking, and blind-spot detection across all SAE automation levels.

**Related:** Radar, mmWave Radar, SRR, MRR, LRR, FMCW

### Automotive Security Operation Center

**Full Name:** Auto-SOC

**Category:** Vehicle Security

A security operations center dedicated to monitoring, detecting, and responding to cybersecurity events affecting connected vehicles.

### Automotive Threat Analysis and Risk Assessment

**Full Name:** TARA

**Category:** Standards

A structured methodology for identifying cybersecurity threats and assessing associated risks in road vehicles.

### Automotive Threat Intelligence

**Category:** Threat Modeling

Threat intelligence specifically focused on vulnerabilities, attacks, threat actors, and risks affecting the automotive ecosystem.

### Autonomous Driving

**Category:** ADAS

**Related:** SAE J3016

Vehicle operation with varying levels of automated driving capability as defined by SAE J3016.

### Autonomous Mode

**Category:** ADAS

A driving mode in which automated systems perform some or all driving tasks without continuous driver control.

### Autonomous Parking

**Category:** ADAS

A function that enables a vehicle to perform parking maneuvers with minimal or no driver intervention.

### AUTOSAR

**Full Name:** AUTomotive Open System ARchitecture

**Category:** Operating System

An open automotive software architecture standard for ECU software development.

### AUTOSAR Adaptive

**Category:** AUTOSAR

The high-performance AUTOSAR platform supporting service-oriented architectures and POSIX operating systems.

### AUTOSAR Basic Software

**Full Name:** BSW

**Category:** AUTOSAR

A standardized software layer providing hardware abstraction, communication services, memory services, and system functions.

### AUTOSAR Classic

**Category:** AUTOSAR

The traditional AUTOSAR platform designed for resource-constrained embedded ECUs and real-time operation.

### AUTOSAR COM

**Category:** AUTOSAR

A communication module responsible for signal packing, unpacking, and transmission.

### AUTOSAR Communication Stack

**Full Name:** ComStack

**Category:** AUTOSAR

The layered AUTOSAR communication architecture comprising COM, PduR, CanIf, CanTp, LinIf, and EthIf modules, providing standardized signal-oriented and service-oriented communication with security mechanisms including SecOC integration.

**Related:** AUTOSAR COM, AUTOSAR PDU Router, AUTOSAR SecOC

### AUTOSAR Crypto Stack

**Category:** Cryptography

A collection of standardized AUTOSAR modules providing cryptographic services.

### AUTOSAR DEM

**Full Name:** AUTOSAR Diagnostic Event Manager

**Category:** Diagnostics

An AUTOSAR basic software module that processes and stores diagnostic events (faults) detected by software components and hardware, managing DTCs and freeze frame data for vehicle diagnostics.

**Related:** AUTOSAR, DET, DLT, FIM, DTC

### AUTOSAR E2E Profile 1

**Category:** AUTOSAR

An AUTOSAR E2E communication protection profile using CRC (8-bit) with a 1-byte Data ID for low-latency safety-related communication, suitable for sensor data integrity verification with minimal overhead.

**Related:** AUTOSAR E2E Profile 2, AUTOSAR E2E Profile 4, E2E Communication, CRC, AUTOSAR E2E Profile 5, AUTOSAR E2E Profile 6

### AUTOSAR E2E Profile 2

**Category:** AUTOSAR

An AUTOSAR E2E communication protection profile using CRC (16-bit) with a 2-byte Data ID and sequence counter, balancing protection strength and payload overhead for moderate safety-critical signals.

**Related:** AUTOSAR E2E Profile 1, AUTOSAR E2E Profile 5, E2E Communication, CRC, AUTOSAR E2E Profile 4, AUTOSAR E2E Profile 6

### AUTOSAR E2E Profile 4

**Category:** AUTOSAR

An AUTOSAR E2E communication protection profile providing enhanced protection with CRC (16-bit), 2-byte Data ID, sequence counter, and timeout monitoring for high-safety ASIL B/C applications.

**Related:** AUTOSAR E2E Profile 5, AUTOSAR E2E Profile 6, E2E Communication, ASIL, AUTOSAR E2E Profile 1, AUTOSAR E2E Profile 2

### AUTOSAR E2E Profile 5

**Category:** AUTOSAR

An AUTOSAR E2E communication protection profile using CRC (32-bit) with 2-byte Data ID and sequence counter, providing high integrity protection for ASIL D safety-critical in-vehicle communication.

**Related:** AUTOSAR E2E Profile 1, AUTOSAR E2E Profile 6, E2E Communication, CRC, AUTOSAR E2E Profile 2, AUTOSAR E2E Profile 4

### AUTOSAR E2E Profile 6

**Category:** AUTOSAR

An AUTOSAR E2E communication protection profile designed for large payload protection with CRC (32-bit) and Data ID wrapping, suitable for Ethernet/SOME/IP-based safety-critical service communication.

**Related:** AUTOSAR E2E Profile 4, AUTOSAR E2E Profile 5, E2E Communication, SOME/IP, AUTOSAR E2E Profile 1, AUTOSAR E2E Profile 2

### AUTOSAR ECU Abstraction Layer

**Category:** AUTOSAR

A software layer that abstracts ECU-specific hardware devices from upper software components.

### AUTOSAR EthIf

**Full Name:** AUTOSAR Ethernet Interface

**Category:** Automotive Network

An AUTOSAR basic software module that abstracts the Ethernet hardware, providing a uniform interface between the Ethernet driver and upper-layer TCP/IP and socket adapter modules.

**Related:** AUTOSAR, EthTrcv, SoAd, TcpIp, Automotive Ethernet

### AUTOSAR Key Manager

**Full Name:** KeyM

**Category:** Cryptography

An AUTOSAR module responsible for key lifecycle management, including provisioning, storage, and updates.

### AUTOSAR MCAL

**Full Name:** Microcontroller Abstraction Layer

**Category:** AUTOSAR

The lowest AUTOSAR software layer that provides standardized access to microcontroller peripherals.

### AUTOSAR Network Management

**Full Name:** NM

**Category:** Network

An AUTOSAR module responsible for coordinating network sleep and wake-up behavior.

### AUTOSAR OS

**Category:** Operating System

**Related:** AUTOSAR

The standardized real-time operating system defined by AUTOSAR Classic Platform.

### AUTOSAR OS Memory Protection

**Category:** Operating System

An AUTOSAR OS feature using MPU/MMU hardware to enforce memory access boundaries between OS-Applications, preventing unauthorized read/write/execute and isolating safety-critical from non-critical software.

**Related:** AUTOSAR OS-Application, AUTOSAR OS, MPU, AUTOSAR

### AUTOSAR OS Trusted Functions

**Category:** Operating System

An AUTOSAR OS mechanism allowing non-trusted OS-Applications to call trusted functions running in privileged mode, enabling controlled access to security services (crypto, key storage) without full privilege escalation.

**Related:** AUTOSAR OS-Application, AUTOSAR OS, TEE, AUTOSAR

### AUTOSAR OS-Application

**Category:** Operating System

An AUTOSAR OS concept providing temporal and spatial partitioning by grouping OS objects into applications, enabling memory protection and timing protection boundaries between safety-critical and non-critical software.

**Related:** AUTOSAR OS, AUTOSAR OS Memory Protection, Hypervisor, AUTOSAR

### AUTOSAR PDU Router

**Full Name:** PduR

**Category:** AUTOSAR

A routing module that forwards protocol data units (PDUs) between communication modules.

### AUTOSAR Runtime Environment

**Full Name:** RTE

**Category:** AUTOSAR

Middleware that enables communication between AUTOSAR software components and the basic software.

### AUTOSAR Secure Onboard Communication

**Full Name:** SecOC

**Category:** AUTOSAR

An AUTOSAR module providing message authentication and freshness protection for in-vehicle communication.

### AUTOSAR Service Discovery

**Full Name:** SD

**Category:** AUTOSAR

A SOME/IP-based mechanism that enables ECUs to dynamically discover and advertise services within an in-vehicle network.

**Related:** SOME/IP, Adaptive AUTOSAR

### AUTOSAR Watchdog Manager

**Full Name:** WdgM

**Category:** Functional Safety

A module supervising software execution to detect failures and improve system reliability.

### Auxiliary ECU

**Category:** ECU

**Related:** Control Unit

An electronic control unit providing supporting functions rather than primary vehicle control.

### AV

**Full Name:** Autonomous Vehicle

**Category:** ADAS

A vehicle capable of sensing its environment and performing driving tasks with varying levels of automation.

### Availability

**Category:** Security

The property that systems and services remain accessible when required.

### Availability Attack

**Category:** Attack

An attack intended to reduce or eliminate access to systems or services.

**Related:** DoS, DDoS

### Availability Monitoring

**Category:** Intrusion Detection

Continuous observation of system availability to detect outages, degradation, or denial-of-service attacks.

### Availability Requirement

**Category:** Security

A requirement specifying acceptable levels of service uptime and resilience.

### Availability Zone

**Category:** Vehicle Architecture

An isolated cloud infrastructure designed to improve service availability and fault tolerance.

### AVB

**Full Name:** Audio Video Bridging

**Category:** Network

A collection of IEEE standards providing deterministic transmission of time-sensitive audio and video streams.

### AVB Stream Reservation Protocol

**Full Name:** SRP

**Category:** Network

A protocol used to reserve bandwidth for time-sensitive streams on Ethernet networks.

### AVCTP

**Full Name:** Audio/Video Control Transport Protocol

**Category:** Connectivity

A transport protocol used by Bluetooth audio/video control profiles.

### AVCTP Message Integrity

**Category:** Connectivity

**Related:** AVCTP

The verification of AVCTP messages to ensure they have not been altered during transmission.

### AVDTP

**Full Name:** Audio/Video Distribution Transport Protocol

**Category:** Connectivity

A Bluetooth protocol used to stream audio and video between devices.

### AVNU Alliance

**Category:** Network

An industry consortium promoting interoperability for Time-Sensitive Networking (TSN) and AVB technologies.

### AVP

**Full Name:** Automated Valet Parking

**Category:** ADAS

A feature allowing a vehicle to park itself in designated parking facilities without driver supervision.

### AVRCP

**Full Name:** Audio/Video Remote Control Profile

**Category:** Connectivity

A Bluetooth profile allowing remote control of multimedia devices.

### AVSS

**Full Name:** Automotive Vehicle Security System

**Category:** Vehicle Security

A generic term for integrated security systems protecting vehicle networks and ECUs.

### AVTP

**Full Name:** Audio Video Transport Protocol

**Category:** Network

A protocol defined by IEEE 1722 for transporting synchronized multimedia streams over Ethernet.

### AXI

**Full Name:** Advanced eXtensible Interface

**Category:** Hardware Security

A high-performance on-chip bus protocol defined by ARM AMBA specifications.

### AXI Interconnect Security

**Category:** Hardware Security

Security controls applied to ARM AXI bus communication between SoC components.

## B

### Backdoor

**Category:** Security

A hidden method of bypassing normal authentication or access controls to gain unauthorized entry into a system, firmware, or communication channel; in automotive contexts, backdoors may be intentionally planted during ECU firmware development (debug UART, JTAG) or introduced via supply chain compromise for diagnostic access, remote code execution, or persistent presence.

**Related:** Firmware Backdoor, Debug UART Attack, JTAG, Supply Chain Attack, ECU Security

### Backplane Bus

**Category:** Network

A physical or logical bus architecture used to interconnect multiple ECU modules or system components.

### Backpressure

**Category:** Network

A mechanism to prevent overload in communication systems by signaling upstream components to slow down data transmission.

### Backtrace

**Category:** Reverse Engineering

A technique used to trace the sequence of function calls that led to a specific point in execution, commonly used in crash analysis.

### Backup ECU

**Category:** ECU

A redundant ECU used to take over functions when the primary ECU fails.

### Bad Block Management

**Category:** Hardware Security

**Related:** Flash Memory

A technique used in flash memory systems to handle defective memory blocks and maintain data integrity.

### Bandwidth Arbitration

**Category:** Network

A mechanism used in in-vehicle networks to allocate communication bandwidth among ECUs.

### BAR

**Full Name:** Base Address Register

**Category:** Hardware Security

A register used to define memory-mapped I/O regions for devices in PCI/PCIe systems.

### Base Station Emulation

**Category:** Attack

A technique where a malicious device mimics a cellular base station to intercept communication.

### Baseband Firmware Downgrade

**Category:** Attack

An attack that forces baseband firmware to revert to a vulnerable version.

### Baseband Processor

**Category:** Connectivity

A dedicated processor handling cellular communication (4G/5G), often a high-value attack target in connected vehicles.

### Baseband Signal Injection

**Category:** Attack

Injection of malicious signals into cellular communication channels.

### Baseband Traffic Analysis

**Category:** Reverse Engineering

The analysis of cellular communication patterns to infer system behavior or vulnerabilities.

### Baseline Security Configuration

**Category:** Security Architecture

A predefined secure configuration state used as a reference for compliance and hardening.

### Batch OTA Update

**Category:** OTA

A firmware update strategy where updates are deployed to multiple ECUs or vehicles in grouped batches.

### BBI

**Full Name:** Body Bias Injection

**Category:** Attack

A physical fault injection technique manipulating body-bias voltage of CMOS circuits to alter transistor thresholds, causing timing faults in security-critical operations on advanced SoCs.

**Related:** EMFI, Voltage Fault Injection, Laser Fault Injection, Fault Injection

### BCM

**Full Name:** Body Control Module

**Category:** Vehicle Architecture

An ECU responsible for monitoring and controlling vehicle body electronics such as lighting, door locks, power windows, wipers, and climate control functions.

**Related:** ECU, CCM, DCU, LIN Bus, PEPS

### Beacon Frame

**Category:** Connectivity

A management frame used in Wi-Fi networks to announce the presence of an access point.

### BECM

**Full Name:** Battery Energy Control Module

**Category:** Vehicle Architecture

An ECU dedicated to managing the high-voltage battery pack in electric vehicles, monitoring cell voltages, temperature, state of charge (SoC), and state of health (SoH), with safety-critical protection functions.

**Related:** VCU, OBC, Inverter, Battery Management, Thermal Management

### Behavior Prediction

**Category:** AI

An AI/ML function in autonomous driving stacks that forecasts the future trajectories and actions of surrounding road users (vehicles, pedestrians, cyclists) based on historical states, map context, and interaction modeling; key input for motion planning and decision-making.

**Related:** Path Planning, Motion Planning, Autonomous Driving, End-to-End Learning

### Behavioral Analysis

**Category:** Intrusion Detection

A detection technique that identifies anomalies based on deviations from normal system behavior.

### Behavioral Baseline Modeling

**Category:** Intrusion Detection

A technique that establishes normal system behavior for anomaly detection.

### Behavioral Drift Detection

**Category:** Intrusion Detection

Detection of deviations from established behavioral baselines in vehicle systems.

### Benchmark ECU

**Category:** Penetration Testing

A reference ECU used for performance, security, or compatibility comparison.

### BER

**Full Name:** Bit Error Rate

**Category:** Network

A metric measuring the rate of errors in transmitted bits over a communication channel.

### Bettercap

**Category:** Security Tool

A powerful, open-source MITM framework and attack tool for network reconnaissance, packet sniffing, and traffic manipulation over HTTP, HTTPS, TCP, and BLE protocols; used in automotive security testing for wireless interception and in-vehicle network traffic analysis.

**Related:** Aircrack-ng, Nmap, Evil Twin Attack, MitM, WiFi Pineapple

### Binary Analysis

**Category:** Reverse Engineering

The process of analyzing compiled executables to understand behavior, vulnerabilities, or logic.

### Binary Diff

**Category:** Reverse Engineering

A technique used to compare two binary versions to identify changes, patches, or vulnerabilities.

### Binary Instrumentation

**Category:** Penetration Testing

A method of inserting analysis or monitoring code into binary execution flow.

### Binary Integrity Verification

**Category:** Security

A process ensuring binaries have not been modified or corrupted.

### Binary Ninja

**Category:** Security Tool

A lightweight, scriptable reverse engineering platform supporting multiple architectures (ARM, x86, MIPS, RISC-V, AArch64) with a Python API and a modern decompiler; used in automotive firmware analysis for binary diffing, vulnerability discovery, and patch analysis.

**Related:** Ghidra, IDA Pro, radare2, Reverse Engineering, Firmware Analysis

### Binary Patch

**Category:** OTA

A modification applied directly to compiled binaries to fix vulnerabilities or alter behavior.

### Binary Runtime Instrumentation

**Category:** Penetration Testing

A method that modifies program execution at runtime for analysis or monitoring.

### Binary Signature Validation

**Category:** Security

Verification of digital signatures attached to executable binaries.

### Binder IPC

**Category:** Android

Android's primary inter-process communication mechanism used by system services and applications.

### BIOS Integrity Check

**Category:** Boot Security

A mechanism verifying the integrity of BIOS firmware during system startup.

### BIST

**Full Name:** Built-In Self-Test

**Category:** Hardware Security

A hardware-level self-diagnostic feature that automatically tests components at power-on or during runtime to detect faults before they cause safety-critical failures.

**Related:** Functional Safety, ISO 26262, FMEA

### Bit Flipping Attack

**Category:** Cryptography

An attack that modifies bits in encrypted or transmitted data to alter system behavior.

### Bit Timing

**Category:** Network

The configuration of timing parameters that define how bits are transmitted and sampled on a CAN network.

### Bit-Level Manipulation Attack

**Category:** Cryptography

An attack that modifies individual bits in structured or encrypted data.

### Black Box Testing

**Category:** Penetration Testing

A testing method where internal system structure is unknown to the tester.

### Black Channel Communication

**Category:** Vehicle Security

A communication model where safety is ensured independently of underlying network reliability.

### Blacklist

**Category:** IAM

A list of explicitly denied entities such as IPs, applications, or devices.

### Blacklist Evasion

**Category:** Attack

Methods used to bypass blacklist-based security filtering.

### BladeRF

**Category:** Security Tool

An open-source software-defined radio platform (by Nuand) supporting full-duplex 2x2 MIMO operation, used in automotive security testing for creating rogue BTS and cellular network analysis.

**Related:** SDR, HackRF One, RTL-SDR, USRP, OpenBTS, YateBTS

### BLE

**Full Name:** Bluetooth Low Energy

**Category:** Connectivity

A low-power Bluetooth protocol widely used in automotive digital keys and sensors.

### Blind Attack

**Category:** Attack

An attack performed without direct feedback from the target system.

### Block Cipher

**Category:** Cryptography

**Related:** Encryption

A symmetric encryption algorithm that processes fixed-size blocks of data.

### BlueBorne

**Category:** Attack

A set of Bluetooth protocol vulnerabilities allowing airborne attacks that can take over devices without pairing, affecting Linux, Android, and Windows Bluetooth stacks.

**Related:** Bluetooth, KNOB Attack, Bluesnarfing

### Bluebugging

**Category:** Attack

An attack that exploits Bluetooth to remotely issue AT commands to a device, enabling unauthorized access to calls, messages, and data.

**Related:** Bluetooth, Bluesnarfing, Bluejacking

### BlueFrag

**Category:** Attack

A critical Bluetooth vulnerability (CVE-2020-0022) enabling remote code execution on Android devices via crafted Bluetooth packets without user interaction.

**Related:** BlueBorne, Bluetooth, RCE

### Bluejacking

**Category:** Attack

An attack that sends unsolicited messages to Bluetooth-enabled devices by exploiting the OBEX protocol in discoverable mode, primarily used for spam or social engineering.

**Related:** Bluetooth, Bluesnarfing, Bluebugging

### Bluesnarfing

**Category:** Attack

An attack that exploits Bluetooth OBEX vulnerabilities to steal data (contacts, calendar, messages) from a target device without the user's knowledge.

**Related:** Bluetooth, Bluejacking, Bluebugging, OBEX

### Bluetooth

**Category:** Vehicle Connectivity

A short-range wireless communication technology standard used in vehicles for hands-free calling, audio streaming, phone-as-key, and device connectivity; common target for automotive security attacks.

**Related:** Bluetooth Low Energy, Wi-Fi, NFC, BlueBorne, CarWhisperer

### Bluetooth Advertising Attack

**Category:** Attack

An attack exploiting BLE advertising packets to inject or spoof device presence.

### Bluetooth Beacon Spoofing

**Category:** Attack

An attack that impersonates legitimate Bluetooth beacon devices.

### Bluetooth Classic

**Category:** Connectivity

A Bluetooth protocol used for continuous data streaming such as audio.

### Bluetooth Connection Hijacking

**Category:** Attack

An attack that takes over an active Bluetooth connection between legitimate devices.

### Bluetooth Device Fingerprinting

**Category:** Attack

A technique used to identify Bluetooth devices based on unique communication patterns.

### Bluetooth Pairing

**Category:** Connectivity

The process of establishing a trusted relationship between Bluetooth devices.

### Bluetooth Pineapple

**Category:** Attack

A rogue Bluetooth access device that impersonates trusted devices to intercept or manipulate Bluetooth connections, analogous to the Wi-Fi Pineapple for Bluetooth networks.

**Related:** Bluetooth Spoofing, Evil Twin Attack, KNOB Attack

### Bluetooth Spoofing

**Category:** Attack

An attack where a device impersonates a trusted Bluetooth device.

### BMS

**Full Name:** Battery Management System

**Category:** ECU

A system that monitors and controls battery charging, discharging, temperature, and safety in electric vehicles.

### Boot Anomaly Detection

**Category:** Intrusion Detection

A technique that detects abnormal behavior during system startup, such as modified boot sequences or unexpected firmware changes.

### Boot Attack

**Category:** Boot Security

An attack targeting the system startup process to gain early execution control.

### Boot Chain of Trust

**Category:** Boot Security

A sequence of verification steps ensuring each boot stage validates the next.

### Boot Image

**Category:** Operating System

**Related:** Kernel

A system image containing kernel and ramdisk used during boot.

### Boot Image Verification

**Category:** Boot Security

Validation of kernel and ramdisk images before execution during system startup.

### Boot Integrity

**Category:** Boot Security

The assurance that boot components have not been tampered with.

### Boot Loader

**Category:** Boot Security

A program responsible for initializing system hardware and loading the operating system.

### Boot Measurement Log

**Category:** Hardware Security

**Related:** Attestation

A log recording cryptographic measurements of boot components used for attestation.

### Boot Partition

**Category:** Hardware Security

A dedicated storage partition containing boot-related system files.

### Boot ROM

**Category:** Hardware Security

Read-only memory containing immutable boot code executed at system startup.

### Boot Script Tampering

**Category:** Operating System

Modification of startup scripts to execute malicious code during boot.

### Boot Sequence

**Category:** Operating System

The ordered process of system initialization from power-on to full OS execution.

### Boot Sequence Hijacking

**Category:** Boot Security

An attack that modifies the system boot order or execution sequence.

### Boot State Attestation

**Category:** Hardware Security

A remote verification process that confirms system boot integrity based on cryptographic evidence.

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

**Category:** Boot Security

A mechanism preventing downgrade attacks by blocking older firmware versions.

### Bootloader Secure Flag

**Category:** Boot Security

**Related:** Secure Boot

A hardware or software flag indicating whether secure boot enforcement is enabled.

### Bootloader Vulnerability

**Category:** Vulnerability

A security weakness in the bootloader firmware that allows bypassing secure boot, signature verification, or authenticated update checks; common in automotive ECUs where bootloader vulnerabilities enable flashing unsigned firmware, installing backdoors, or permanently compromising the device.

**Related:** Secure Boot, Firmware Vulnerability, OTA Vulnerability, Signed Firmware Bypass

### Boundary Check

**Category:** Security

A validation mechanism ensuring memory access remains within valid limits.

### Boundary Overflow Attack

**Category:** Vulnerability

**Related:** Memory Corruption

A memory corruption attack caused by exceeding buffer boundaries.

### Boundary Validation Failure

**Category:** Vulnerability

**Related:** Exploit

A failure to properly validate input or memory boundaries leading to exploitation.

### Brake ECU

**Category:** ECU

An ECU responsible for managing braking systems including ABS and ESC.

### Brake-by-Wire

**Category:** Vehicle Architecture

A vehicle technology that replaces traditional hydraulic or mechanical brake linkages with electronic control, where driver brake pedal input is converted to electrical signals transmitted over a redundant in-vehicle network to electromechanical brake actuators; brake-by-wire introduces critical safety and security requirements including fail-operational design, real-time fault tolerance, and protection against network-layer brake manipulation.

**Related:** Steer-by-Wire, Throttle-by-Wire, Functional Safety, ASIL D, Redundancy

### Branch Prediction Attack

**Category:** Attack

An attack that exploits CPU branch prediction mechanisms to infer sensitive data.

### Branch Target Injection

**Category:** Attack

A speculative execution attack manipulating branch prediction to leak information.

### Broadcast Authentication

**Category:** Network

A mechanism ensuring the authenticity of broadcast messages in vehicular networks.

### Broadcast Encryption

**Category:** Cryptography

A scheme that allows encrypted messages to be securely sent to multiple recipients.

### Broadcast Frame

**Category:** Network

A network frame sent to all nodes in a broadcast domain.

### Broadcast Receiver

**Category:** Android

A component that receives and processes broadcast messages from the operating system or applications.

### Broadcast Storm Control

**Category:** Network

A control mechanism that limits excessive broadcast traffic in Ethernet or in-vehicle networks.

### Broken Access Control

**Category:** Vulnerability

A vulnerability where an application fails to enforce proper access restrictions, allowing users or processes to perform actions beyond their authorized permissions; in automotive cloud platforms and IVI systems, broken access control can expose vehicle telemetry, remote command APIs, or diagnostic interfaces to unauthorized parties.

**Related:** Authentication Bypass, Overprivileged Service, Misconfiguration, Sensitive Data Exposure

### Broken Authentication

**Category:** Vulnerability

A vulnerability in the authentication mechanism that allows an attacker to impersonate legitimate users, bypass login procedures, or escalate privileges; in automotive telematics and V2X systems, broken authentication can lead to unauthorized vehicle access, remote command injection, or session hijacking.

**Related:** Authentication Bypass, Weak Session Token, Hardcoded Credentials, Session Hijacking

### Broker

**Full Name:** MQTT Broker

**Category:** Network

**Related:** Message Broker

A message broker that routes MQTT messages between publishers and subscribers.

### Broker Authentication Failure

**Category:** Vulnerability

**Related:** Message Broker

A failure in MQTT or message broker authentication allowing unauthorized access.

### Broker Message Injection

**Category:** Attack

Injection of malicious messages into MQTT or publish-subscribe systems.

### Brute Force Attack

**Category:** IAM

**Related:** Credential

An attack that attempts all possible combinations to guess credentials or keys.

### BSM

**Full Name:** Basic Safety Message

**Category:** Vehicle Connectivity

A standardized V2X message defined in SAE J2735 that periodically broadcasts a vehicle's position, speed, heading, and other state information to nearby vehicles and infrastructure for safety applications.

**Related:** V2X, CAM, DENM, DSRC, C-V2X

### BSSID

**Full Name:** Basic Service Set Identifier

**Category:** Network Security

The MAC address of a Wi-Fi access point, uniquely identifying a specific wireless network. In automotive security testing, BSSID is used to identify and track in-vehicle Wi-Fi hotspots.

**Related:** ESSID, Wi-Fi, MAC Address, WPA2, WPA3

### BswM

**Full Name:** Basic Software Mode Manager

**Category:** AUTOSAR

An AUTOSAR Basic Software module that manages mode-dependent software behavior, coordinating mode transitions across communication stacks, network management, and application components with security implications for safe state transitions.

**Related:** EcuM, AUTOSAR Basic Software, AUTOSAR COM

### BTS

**Full Name:** Base Transceiver Station

**Category:** Network Security

The radio equipment in a cellular network that communicates with mobile devices (including vehicle TCUs). Rogue or compromised BTS equipment can be used in IMSI catcher and man-in-the-middle attacks against vehicles.

**Related:** GSM, IMSI Catcher, Rogue BTS, SDR, YateBTS

### Buffer Overflow

**Category:** Vulnerability

**Related:** Memory Corruption

A memory corruption vulnerability caused by writing beyond allocated buffer boundaries.

### Buffer Underflow

**Category:** Hardware Security

Accessing memory before allocated buffer region.

### Burp Suite

**Category:** Security Tool

An integrated platform for web application security testing, featuring an intercepting proxy, scanner, repeater, and intruder modules; used in automotive security for testing telematics APIs, mobile app backends, and OTA update web interfaces.

**Related:** API Security, Telematics, OWASP, Fuzzing, Cloud Security

### Bus Arbitration

**Category:** Network

The process of determining which ECU gains control of the bus in contention scenarios.

### Bus Authentication Failure

**Category:** Network

A failure in verifying the authenticity of messages transmitted over vehicle buses.

### Bus Encryption

**Category:** Cryptography

Encryption applied to in-vehicle network communication such as CAN-FD or Ethernet.

### Bus Error Injection

**Category:** Attack

A technique that intentionally introduces errors into bus communication to trigger fault states.

### Bus Guardian

**Category:** Functional Safety

A hardware mechanism that prevents faulty nodes from disrupting communication buses.

### Bus Load Monitoring

**Category:** Network

The measurement and analysis of network utilization on CAN, LIN, or Ethernet buses.

### Bus Off State

**Category:** Network

A fault state in CAN where a node is disconnected due to excessive transmission errors.

### Bus Pirate

**Category:** Security Tool

A universal serial bus interface tool supporting multiple protocols including I2C, SPI, JTAG, SWD, UART, 1-Wire, and MIDI; used in automotive hardware security research for probing ECU debug interfaces, dumping firmware, and protocol analysis.

**Related:** JTAG, SWD, I2C, SPI, UART, Firmware Extraction

### Bus Protocol Fuzzing

**Category:** Penetration Testing

A technique that sends malformed or unexpected frames to in-vehicle communication protocols.

### Bus Timing Manipulation

**Category:** Attack

An attack that alters message timing to exploit synchronization or arbitration weaknesses.

### Bus Topology

**Category:** Network

A network architecture where all nodes share a single communication medium.

### BYOD

**Full Name:** Bring Your Own Device

**Category:** Security Architecture

A policy allowing personal devices to connect to vehicle or enterprise systems under controlled conditions.

### Bypass Chain Exploit

**Category:** Attack

A multi-stage attack that sequentially bypasses multiple security mechanisms.

### Bypass Code Integrity Protections

**Category:** Attack

An Auto-ISAC attack technique where an adversary bypasses code integrity verification mechanisms (e.g., secure boot, code signing, DM-Verity) to execute unauthorized or modified code on an ECU or in-vehicle computing platform.

**Related:** Secure Boot, Code Signing, Platform Firmware

### Bypass Mandatory Access Control

**Category:** Attack

An Auto-ISAC attack technique where an adversary circumvents MAC policies (e.g., SELinux, AppArmor, SMACK) in automotive Linux or Android systems to escalate privileges or access restricted resources.

**Related:** SELinux, Kernel Privilege Escalation, Android Security

### Bytecode Injection

**Category:** Attack

An attack that injects malicious bytecode into runtime environments such as JVM or ART.

## C

### C-Auto-ISAC

**Category:** Standards

The Chinese Automotive Information Sharing and Analysis Center, China's counterpart to Auto-ISAC for sharing automotive cybersecurity threat intelligence.

**Related:** Auto-ISAC, Threat Intelligence

### C-V2X

**Full Name:** Cellular Vehicle-to-Everything

**Category:** Vehicle Connectivity

A 3GPP-standardized V2X communication technology using LTE and 5G cellular networks for direct (PC5) and network-based (Uu) communication between vehicles, infrastructure, and other road users.

**Related:** V2X, DSRC, 5G, PC5, SCMS

### CA

**Full Name:** Certificate Authority

**Category:** Cryptography

**Related:** Certificate, Digital Certificate

An entity that issues and manages digital certificates.

### Cabin Monitoring System

**Category:** ADAS

An in-vehicle camera and sensor system for driver attention detection, occupant classification, and child presence detection, with security implications for camera data protection and adversarial ML.

**Related:** DMS, ADAS, Privacy

### Cache Side Channel

**Category:** Hardware Security

Exploiting CPU cache behavior to leak information.

### Calibration Data

**Category:** Vehicle Architecture

Data used to tune ECU behavior.

### CAM

**Full Name:** Cooperative Awareness Message

**Category:** Connectivity

A V2X message type (ETSI EN 302 637-2) for periodic broadcasting of vehicle position, speed, heading, and acceleration at 1-10 Hz over ITS-G5 or C-V2X.

**Related:** DENM, BSM, V2X, C-V2X

### Camera ECU

**Category:** ECU

An electronic control unit dedicated to image sensor processing and vision-based perception, typically integrating a CMOS image sensor, ISP (Image Signal Processor), and video serializer (SerDes) for transmitting raw or compressed video to ADAS domain controllers or IVI systems; camera ECUs are critical for ADAS functions (lane keeping, AEB, parking) and present an attack surface for sensor spoofing, blinding attacks, and data injection.

**Related:** ADAS, SerDes, GMSL, FPD-Link, MIPI CSI-2

### Camera Spoofing

**Category:** ADAS

Manipulating camera input using light, patterns, or digital injection.

### CAN

**Full Name:** Controller Area Network

**Category:** Automotive Network

A robust vehicle bus standard designed to allow microcontrollers and devices to communicate without a host computer, widely used as the primary in-vehicle network for real-time control systems.

**Related:** CAN FD, CAN Bus, LIN, FlexRay, ISO 11898

### CAN Arbitration

**Category:** Network

The process by which ECUs compete for bus access based on message ID priority.

### CAN Bus

**Category:** Network

The physical two-wire differential signaling bus that implements the Controller Area Network protocol, carrying CAN-High and CAN-Low signals terminated with 120Ω resistors at each end; in automotive E/E architectures, the CAN bus is the most ubiquitous in-vehicle network medium, connecting ECUs across powertrain, chassis, body, and infotainment domains, and is a primary attack surface for bus injection, masquerade, and denial-of-service attacks.

**Related:** CAN, CAN FD, CAN XL, Arbitration, Bus Off State, Error Frame

### CAN Diagnostic Protocol

**Category:** Diagnostics

Protocols used for ECU diagnostics over CAN.

### CAN DoS Attack

**Category:** Attack

A denial-of-service attack on the CAN bus that overwhelms the network with high-priority messages, causing collisions, bus-off states of legitimate ECUs, and disruption of critical vehicle functions.

**Related:** Bus Off Recovery Attack, CAN, DoS

### CAN FD

**Full Name:** CAN with Flexible Data-Rate

**Category:** Automotive Network

An enhanced CAN protocol supporting higher data rates (up to 8 Mbps) and larger payload sizes (up to 64 bytes) compared to classical CAN, used in modern vehicles for bandwidth-intensive ECUs.

**Related:** CAN, CAN Bus, ISO 11898, CAN XL, Automotive Ethernet

### CAN Fuzzing

**Category:** Penetration Testing

A technique that sends malformed CAN frames to discover ECU vulnerabilities.

### CAN Gateway

**Category:** ECU

An ECU responsible for routing and filtering CAN traffic between domains.

### CAN IDS

**Category:** Intrusion Detection

A system that detects anomalies or attacks on CAN networks.

### CAN Injection

**Category:** Attack

An attack where an adversary injects malicious CAN frames onto the vehicle bus to control ECUs, trigger unintended actions, or disable safety functions, often by exploiting the physical CAN bus or compromised ECUs.

**Related:** CAN, CAN Bus, DoS, SecOC, Unintended Vehicle Network Message

### CAN Injection Attack

**Category:** Attack

Injection of malicious CAN frames into the vehicle network.

### CAN Security Gateway

**Category:** ECU

A secure ECU that enforces filtering, authentication, and segmentation of CAN traffic.

### CAN Security Model

**Category:** Security Architecture

A conceptual model describing CAN threats and protections.

### CAN Signal Spoofing

**Category:** Attack

Forging CAN signals to impersonate legitimate ECU behavior.

### CAN Sniffing

**Category:** Attack

Passive capture of CAN traffic for analysis.

### CAN Timing Attack

**Category:** Attack

An attack exploiting timing differences in CAN communication.

### CAN Transport Protocol

**Full Name:** ISO-TP

**Category:** Network

A protocol enabling segmentation and reassembly of CAN messages.

### CAN Vulnerability

**Category:** Vulnerability

A class of vulnerabilities inherent in the Controller Area Network protocol design, including lack of message authentication, absence of encryption, broadcast-only communication, and identifier-based arbitration; CAN vulnerabilities enable bus injection, replay attacks, and ECU impersonation, forming the foundation for many automotive cyber attacks.

**Related:** CAN Bus, CAN Injection Attack, Frame Spoofing, Replay Attack, Automotive Vulnerability

### CAN XL

**Category:** Network

Next-generation CAN protocol supporting up to 2048-byte payloads and enhanced security.

### can-utils

**Category:** Security Tool

A set of Linux userspace utilities for CAN bus communication including candump, cansend, cangen, cansniffer, and canbusload; essential tools for automotive security researchers working with CAN interfaces on Linux systems.

**Related:** CAN Bus, SocketCAN, CANtact, PCAN, CAN Fuzzing

### CANalyzer

**Category:** Security Tool

A bus analysis tool by Vector Informatik for monitoring, logging, and analyzing automotive network traffic, commonly used for security analysis, penetration testing, and protocol reverse engineering.

**Related:** CANoe, CANape, Reverse Engineering

### CANape

**Category:** Security Tool

A measurement, calibration, and diagnostics software tool by Vector Informatik used in automotive ECU development, supporting CCP, XCP, and UDS protocols for data acquisition and ECU parameter tuning.

**Related:** CANoe, CANalyzer, XCP, CCP, Vector

### CANBadger

**Category:** Security Tool

A multi-purpose CAN bus security testing tool with dual CAN channels, SD card logging, and isolated power supply, supporting CAN message injection, sniffing, replay, and fuzzing for automotive penetration testing and vulnerability research.

**Related:** CAN Bus, CANtact, CaringCaribou, Fuzzing, CAN Fuzzing

### CANdevStudio

**Category:** Security Tool

An open-source CAN bus simulation and testing environment with a GUI for creating virtual CAN networks, generating CAN signals, and replaying CAN traffic; used in automotive security research for reproducible test scenarios and fuzzing campaigns.

**Related:** CAN Bus, CAN Fuzzing, Python-CAN, SocketCAN, SavvyCAN

### CanIf

**Full Name:** CAN Interface

**Category:** Automotive Network

An AUTOSAR basic software module that provides a hardware-independent interface between the CAN driver and upper-layer communication services, handling controller abstraction and PDU routing.

**Related:** AUTOSAR, CanTp, CanSm, CAN, PDU Router

### CanNm

**Full Name:** CAN Network Management

**Category:** AUTOSAR

An AUTOSAR module implementing coordinated network management over CAN, using ring-based NM messages to synchronize sleep/wake-up states across ECUs, with security considerations for NM message spoofing prevention.

**Related:** AUTOSAR Network Management, CanIf, CAN

### CANoe

**Category:** Security Tool

A comprehensive development and testing tool by Vector Informatik for designing, simulating, testing, and analyzing in-vehicle networks (CAN, LIN, FlexRay, Ethernet), widely used in automotive ECU development and security testing.

**Related:** CANalyzer, CANape, Vector, CAN, UDS

### CanSM

**Full Name:** CAN State Manager

**Category:** AUTOSAR

An AUTOSAR Basic Software module managing the CAN controller state machine (Full/Partial/Sleep/Pre-sleep), coordinating bus-off recovery and wake-up capabilities for network availability and security.

**Related:** CanIf, AUTOSAR EcuM, CanTp

### CANtact

**Category:** Security Tool

An open-source CAN bus interface and analysis tool for automotive security testing, enabling CAN message transmission, reception, and bus monitoring via USB; widely used by security researchers for CAN bus exploration and fuzzing.

**Related:** CAN Bus, SocketCAN, can-utils, CANtact Pro, CaringCaribou

### CANtact Pro

**Category:** Security Tool

An enhanced version of the CANtact tool with galvanic isolation, high-speed CAN FD support, multi-channel operation, and robust protection against voltage spikes; designed for professional automotive security testing and ECU development.

**Related:** CANtact, CAN FD, CAN Bus, SocketCAN

### CanTp

**Full Name:** CAN Transport Layer

**Category:** Automotive Network

An AUTOSAR module that segments and reassembles large diagnostic messages (up to 4096 bytes) for transmission over CAN (ISO 15765-2), enabling UDS and other diagnostic protocols that require payloads exceeding the 8-byte CAN frame limit.

**Related:** AUTOSAR, CanIf, UDS, ISO 15765-2, Diagnostics

### CAPEC

**Full Name:** Common Attack Pattern Enumeration and Classification

**Category:** Threat Modeling

A catalog of attack patterns used in cybersecurity analysis.

### Capture Camera or Audio

**Category:** Attack

An Auto-ISAC attack technique where an adversary captures camera feeds or audio streams from in-vehicle sensors via exploited IVI or cabin monitoring systems, enabling surveillance and data exfiltration.

**Related:** Privacy, IVI, Cabin Monitoring System, Data Exfiltration

### Capture SMS Message

**Category:** Attack

An Auto-ISAC attack technique where an adversary intercepts or captures SMS messages from an in-vehicle cellular module (T-Box, telematics unit), extracting OTP codes, alerts, or sensitive communications.

**Related:** T-Box, Cellular Communication, Telematics

### Car API

**Category:** Android

APIs that allow applications to interact with vehicle data and services.

### Car HAL

**Full Name:** Hardware Abstraction Layer

**Category:** Android

A layer that bridges Android framework and vehicle hardware.

### Car Service

**Category:** Android

System service managing vehicle data access for applications.

### Car Whisperer

**Category:** Attack

A Bluetooth attack tool that exploits default PIN codes in car hands-free kits to inject and intercept audio on automotive Bluetooth systems, demonstrating vulnerabilities in vehicle Bluetooth implementations.

**Related:** Bluetooth, Bluebugging, Bluesnarfing

### CaringCaribou

**Category:** Security Tool

A Python-based automotive security testing framework focused on CAN bus operations, providing modules for UDS discovery, brute-force diagnostic access, CAN message fuzzing, and key retrieval; designed specifically for automotive penetration testers.

**Related:** CAN Bus, CANtact, CANBadger, UDS, CAN Fuzzing

### CarLife

**Category:** Connectivity

A smartphone projection technology developed by Baidu for the Chinese market, enabling mobile app integration with vehicle infotainment systems.

**Related:** CarPlay, Android Auto, MirrorLink

### CarPlay

**Category:** Connectivity

A smartphone projection technology developed by Apple that mirrors iPhone functionality onto a vehicle's infotainment display via USB or wireless connection.

**Related:** Android Auto, MirrorLink, SmartDeviceLink

### CB

**Full Name:** Confirmation Build

**Category:** Vehicle Architecture

A production validation event that confirms all design changes, manufacturing process improvements, and quality countermeasures have been successfully implemented before full production ramp-up or model year change.

**Related:** VB, PP, MP, SOP, Change Management

### CC

**Full Name:** Common Criteria

**Category:** Security Architecture

An international standard for evaluating security of IT products.

### CCC

**Full Name:** Car Connectivity Consortium

**Category:** Standards

An international organization developing standards for smartphone-to-vehicle connectivity, including the Digital Key standard for NFC and UWB-based vehicle access.

**Related:** ICCOA, Digital Key, NFC

### CCM

**Full Name:** Climate Control Module

**Category:** Vehicle Architecture

An ECU controlling the vehicle's heating, ventilation, and air conditioning (HVAC) system, communicating with body electronics and the infotainment system via LIN or CAN bus.

**Related:** BCM, LIN Bus, HMI, CAN, Body Electronics

### CCP

**Full Name:** CAN Calibration Protocol

**Category:** Network

A master-slave protocol used for ECU calibration and measurement data acquisition over CAN bus, defined by ASAM.

**Related:** XCP, A2L, CAN

### CCPA

**Full Name:** California Consumer Privacy Act

**Category:** Standards

A California state law (effective 2020, amended by CPRA 2023) granting consumers rights over their personal data, including the right to know, delete, and opt out of data collection and sale; applicable to connected vehicle manufacturers collecting and processing driving behavior, location, and biometric data from California residents.

**Related:** GDPR, PIPL, Data Privacy, PII

### CCS

**Full Name:** Combined Charging System

**Category:** Vehicle Connectivity

A standardized electric vehicle charging connector and protocol supporting both AC and DC fast charging, including communication protocols (ISO 15118) with security mechanisms for plug-and-charge and smart grid integration.

**Related:** ISO 15118, EVSE, CHAdeMO, GB/T 20234, Plug-and-Charge

### CDD

**Full Name:** Custom Diagnostic Description

**Category:** Diagnostics

An ODX-based diagnostic description file that defines ECU-specific diagnostic data and services, enabling diagnostic testers to communicate with and diagnose a specific vehicle ECU implementation.

**Related:** ODX, DEXT, PDX, MVCI, UDS

### CDD

**Full Name:** AUTOSAR Complex Device Driver

**Category:** AUTOSAR

A special software component used when standard AUTOSAR interfaces cannot meet hardware-specific requirements.

### CDD

**Full Name:** Custom Diagnostic Description

**Category:** Diagnostics

A proprietary diagnostic description file format used by Vector tools to describe ECU diagnostic capabilities, communication parameters, and service definitions.

**Related:** ODX, PDX, DEXT, ARXML

### Cellular Communication

**Category:** Connectivity

An Auto-ISAC attack technique where an adversary uses cellular communication channels (4G/5G) as a C2 path to remotely interact with compromised vehicle systems, enabling persistent access and data exfiltration.

**Related:** T-Box, Telematics, Internet Communication, C-V2X

### Cellular Network Attack

**Category:** Attack

Attacks targeting LTE/5G communication in connected vehicles.

### Central + Zone Hybrid Architecture

**Category:** Vehicle Architecture

A next-generation E/E architecture combining centralized vehicle computers with zonal gateways; central computers handle domain functions (ADAS, cockpit, body) via high-performance SoCs, while zonal gateways consolidate I/O, power distribution, and network routing for physical zones, reducing wiring complexity and enabling SDV capabilities.

**Related:** Zonal Gateway, HPC, SDV, Domain Controller ECU, Zone-Based ECU Architecture, E/E Architecture

### Central Computing Architecture

**Category:** Vehicle Architecture

An E/E architecture paradigm where one or a few high-performance central computers consolidate processing from multiple ECUs, reducing the number of distributed controllers; central computers run multiple virtualized OS instances for mixed-criticality workloads (ADAS, cockpit, gateway), enabled by high-bandwidth in-vehicle networks.

**Related:** HPC, Domain Controller ECU, SDV, E/E Architecture, Vehicle Central Computer

### Certificate

**Category:** Cryptography

A digital document binding a public key to an identity.

### Certificate Authority

**Category:** Cryptography

A trusted entity that issues, manages, and revokes digital certificates used for authenticating ECUs, V2X communication, and TLS connections, forming the root of trust in automotive public key infrastructure.

**Related:** PKI, X.509, CRL, SCMS, V2X PKI

### Certificate Chain

**Category:** Cryptography

**Related:** Certificate

A sequence of certificates validating trust from root CA to end entity.

### Certificate Pinning

**Category:** Security

A technique that binds an application to specific certificates to prevent MITM attacks.

### Certificate Revocation

**Category:** Cryptography

**Related:** Certificate

The process of invalidating a previously issued certificate.

### Certificate Validation Failure

**Category:** Vulnerability

A failure in verifying certificate authenticity or trust chain.

### CFG

**Full Name:** Binary Control Flow Graph

**Category:** Reverse Engineering

A graph representation of all possible execution paths in a binary.

### CFI

**Full Name:** Control Flow Integrity

**Category:** Security

**Related:** Execution Flow

A security mechanism preventing unauthorized modification of execution flow.

### cgroups

**Full Name:** Control Groups

**Category:** Operating System

A Linux kernel feature that limits, accounts for, and isolates resource usage (CPU, memory, disk I/O, network) of process groups; essential for automotive Linux systems to enforce resource guarantees across IVI applications, navigation, and telematics services.

**Related:** Container, Namespace Isolation, Linux, systemd

### CGW

**Full Name:** Central Gateway

**Category:** ECU

A central gateway ECU that routes and filters communication between different in-vehicle network domains (e.g., CAN, LIN, Ethernet), acting as a security boundary and protocol translator in modern vehicle architectures.

**Related:** Gateway ECU, CAN Gateway, Domain Controller, Network Segmentation

### CHAdeMO

**Category:** Standards

A Japanese DC fast charging standard for electric vehicles, using a proprietary connector and CAN-based communication between charger and vehicle.

**Related:** CCS, GB/T 20234, ISO 15118

### Challenge-Response Authentication

**Category:** IAM

A protocol that verifies identity using cryptographic challenges.

### Channel Injection

**Category:** Attack

Injection of malicious data into communication channels.

### Checksum

**Category:** Security

**Related:** Data Integrity

A value used to verify data integrity in communication or storage.

### ChipWhisperer

**Category:** Security Tool

An open-source toolchain for embedded hardware security research, enabling side-channel power analysis (SPA/DPA), clock glitching, voltage fault injection, and electromagnetic fault injection; used in automotive research for attacking secure boot, AES implementations, and key extraction.

**Related:** EMFI, Voltage Fault Injection, Side-Channel Attack, Secure Boot, Fault Injection

### CIA Triad

**Category:** Security

The foundational security model consisting of Confidentiality (preventing unauthorized disclosure), Integrity (preventing unauthorized modification), and Availability (ensuring timely access), used as a basis for automotive cybersecurity risk assessment.

**Related:** Confidentiality, Integrity, Availability, ISO 21434, Risk Assessment, Automotive Cybersecurity

### Cipher

**Category:** Cryptography

**Related:** Decryption, Encryption

An algorithm used for encryption and decryption.

### Cipher Suite

**Category:** Cryptography

A set of cryptographic algorithms used in secure communication.

### Ciphertext

**Category:** Cryptography

**Related:** Decryption

Encrypted data that cannot be read without decryption.

### Circuit-Level Attack

**Category:** Attack

An attack targeting electrical or hardware circuit behavior.

### Cleartext Storage of Sensitive Data

**Category:** Vulnerability

A vulnerability where sensitive information (passwords, cryptographic keys, personal data) is stored in unencrypted form in files, databases, or firmware flash partitions; in automotive systems, cleartext storage in IVI infotainment databases, TCU configuration partitions, or debug logs can expose vehicle credentials and user privacy data.

**Related:** Sensitive Data Exposure, Information Disclosure, Insecure Storage, Unsecured Credentials

### Cleartext Transmission of Sensitive Data

**Category:** Vulnerability

A vulnerability where sensitive data is transmitted over a network without encryption, enabling eavesdropping and interception; in automotive Ethernet (AVB/TSN), CAN/CAN-FD, LIN, or wireless (Bluetooth, Wi-Fi) communication channels, cleartext transmission of diagnostic commands, credentials, or telemetry data can be captured and exploited.

**Related:** Transport Encryption Failure, Information Leakage, Network Protocol Exploit, MitM

### Clock Fault Injection

**Full Name:** CFI

**Category:** Attack

A physical attack manipulating a device's clock signal to cause setup/hold time violations and faulty instruction execution, used to break cryptographic operations or authentication checks.

**Related:** Voltage Fault Injection, EMFI, Laser Fault Injection

### Cloud API

**Category:** Security

Interfaces provided by cloud platforms for vehicle connectivity.

### Cloud Backend

**Category:** Vehicle Architecture

Server infrastructure supporting connected vehicle services.

### Cloud Credential Theft

**Category:** Attack

Unauthorized access to cloud credentials used in vehicle ecosystems.

### Cloud ECU Communication

**Category:** Connectivity

Communication between ECUs and cloud services.

### Cloud Messaging Broker

**Category:** Network

A system for routing messages between vehicles and cloud services.

### Cluster ECU

**Category:** ECU

An ECU responsible for instrument cluster display and data processing.

### CMAC

**Full Name:** Cipher-based Message Authentication Code

**Category:** Cryptography

A block-cipher-based MAC algorithm (defined in NIST SP 800-38B) that uses AES to produce a tag for message authentication and integrity, widely adopted in automotive protocols such as AUTOSAR SecOC and ISO 14229 (UDS) for authenticating in-vehicle communication.

**Related:** AES, SecOC, HMAC, Message Authentication Code, Cipher

### CNN

**Full Name:** Convolutional Neural Network

**Category:** AI

A class of deep neural networks designed for grid-structured data such as images; widely used in automotive perception for object detection, semantic segmentation, lane detection, and traffic sign recognition in ADAS and autonomous driving systems.

**Related:** Deep Learning, Computer Vision, Object Detection, Semantic Segmentation, Adversarial Machine Learning

### Code Execution

**Category:** Vulnerability

The ability of an attacker to execute arbitrary code on a target system.

### Code Injection

**Category:** Attack

Injection of malicious code into a running process.

### Code Obfuscation

**Category:** Security

Techniques used to make code difficult to reverse engineer.

### Cold Boot Attack

**Category:** Attack

An attack extracting memory contents after power loss.

### Command and Scripting Interpreter

**Category:** Attack

An Auto-ISAC attack technique where an adversary leverages command-line or scripting interpreters (e.g., shell, Python, Lua) on compromised in-vehicle systems to execute arbitrary commands and control vehicle functions.

**Related:** Native API, Local Function, Operating System

### Command Injection

**Category:** Vulnerability

An attack that injects malicious commands into system execution context.

### Communication Bus

**Category:** Network

A shared communication system used by ECUs.

### Communication Isolation

**Category:** Security Architecture

**Related:** Cross-Domain Attack

Segmentation of communication domains to prevent cross-domain attacks.

### Compromise Cryptographic Security

**Category:** Attack

An Auto-ISAC attack technique where an adversary undermines cryptographic protections in vehicle systems by exploiting weak key storage, protocol downgrades, side-channel leakage, or post-quantum vulnerabilities.

**Related:** Cryptography, HSM, Secure Key Storage, Side Channel

### Compromise Detection

**Category:** Intrusion Detection

Identification of security breaches in vehicle systems.

### Computer Vision

**Category:** AI

The AI field enabling vehicles to interpret and understand visual information from cameras; foundational to ADAS and autonomous driving perception, covering object detection, semantic segmentation, optical flow, depth estimation, and visual SLAM.

**Related:** CNN, Object Detection, Semantic Segmentation, Perception System, ADAS

### Confidentiality

**Category:** Security

Ensuring information is accessible only to authorized entities.

### Container

**Category:** Operating System

An OS-level virtualization mechanism that encapsulates applications and their dependencies into isolated user-space instances sharing the host kernel; increasingly used in IVI and telematics platforms for application sandboxing, service isolation, and OTA update management.

**Related:** cgroups, Namespace Isolation, seccomp, LSM

### Content Provider

**Category:** Android

A component that securely shares structured application data.

### Context Switch

**Category:** Operating System

The OS operation of saving and restoring process/thread state when switching execution between tasks; context switch latency is a critical metric in real-time automotive systems where deterministic scheduling guarantees must be met.

**Related:** Thread, RTOS, Deterministic Scheduling, ECU Scheduling

### Control Unit

**Category:** ECU

A system component controlling specific vehicle functions.

### Controller Area Network Security

**Full Name:** CAN Security

**Category:** Vehicle Security

Security mechanisms protecting CAN communication from attacks.

### CooC

**Full Name:** Components Developed Out of Context

**Category:** Standards

An ISO 21434 concept referring to cybersecurity components (hardware, software, or systems) developed without knowledge of the specific vehicle context in which they will be deployed, requiring reassessment of suitability and risks during integration.

**Related:** ISO 21434, COTS, Supply Chain Security

### Cookie Hijacking

**Category:** Attack

Stealing session cookies to impersonate users.

### COQOS

**Category:** Virtualization

An automotive hypervisor by OpenSynergy providing virtualized execution environments for mixed-criticality workloads on a single SoC, enabling concurrent operation of safety-critical AUTOSAR OS and non-critical Android/Linux for IVI and digital cockpit.

**Related:** Hypervisor, Type-1 Hypervisor, QNX Hypervisor, AUTOSAR OS, IVI

### COTS

**Full Name:** Commercial Off-The-Shelf

**Category:** Supply Chain Security

Commercially available hardware or software components used in automotive systems without modification, offering cost efficiency but introducing supply chain security risks and potential vulnerabilities from third-party code.

**Related:** CooC, ISO 21434, Supply Chain Security, Third-Party Risk

### CPS

**Full Name:** Cyber Physical System

**Category:** Vehicle Architecture

Systems integrating computation, networking, and physical processes.

### CRC

**Full Name:** Cyclic Redundancy Check

**Category:** Automotive Network

An error-detecting code used in automotive communication protocols (CAN, AUTOSAR E2E) to detect accidental changes to data during transmission, though not a replacement for cryptographic integrity protection.

**Related:** AUTOSAR E2E, Checksum, CAN, Message Integrity, Hamming Code

### Credential

**Category:** IAM

Information used to verify identity.

### Credential Dumping

**Category:** Attack

Extraction of stored authentication credentials.

### Credential Replay

**Category:** IAM

**Related:** Credential

Reusing captured credentials to gain unauthorized access.

### Credential Stuffing

**Category:** Attack

Automated login attempts using leaked credentials.

### CRL

**Full Name:** Certificate Revocation List

**Category:** Cryptography

A signed list of revoked certificates published by a Certificate Authority, used in vehicle PKI and V2X communication to reject compromised certificates before their expiration.

**Related:** PKI, Certificate Authority, OCSP, V2X PKI, Certificate

### Cross-Domain Attack

**Category:** Attack

Attacks that cross isolated vehicle system domains.

### Cross-Domain Fusion Architecture

**Category:** Vehicle Architecture

An evolution of domain-centralized architecture where traditionally separate functional domains (ADAS, autonomous driving, cockpit, body) are merged onto shared high-performance computing platforms; enables advanced functions requiring cross-domain data fusion (e.g., ADAS + map data for personalized driving), but introduces stronger isolation and mixed-criticality requirements.

**Related:** Domain Centralized Architecture, HPC, E/E Architecture, Hypervisor, SDV

### CRYIF

**Full Name:** Crypto Interface

**Category:** AUTOSAR

An AUTOSAR Basic Software module providing a standardized abstraction layer between the Crypto Service Manager (CSM) and cryptographic hardware drivers (HSM, SHE, software crypto), enabling platform-independent crypto service deployment.

**Related:** CSM, AUTOSAR Crypto Stack, SHE

### Cryptanalysis

**Category:** Cryptography

The study of breaking cryptographic systems.

### Crypto Module

**Category:** Cryptography

A software or hardware component providing cryptographic services.

### Cryptographic Engine

**Category:** Hardware Security

A hardware module performing cryptographic operations.

### Cryptographic Key

**Category:** Cryptography

**Related:** Decryption, Encryption

A value used in encryption and decryption operations.

### Cryptographic Protocol

**Category:** Cryptography

A protocol using cryptographic methods for secure communication.

### CRYSTALS-Dilithium

**Full Name:** ML-DSA

**Category:** Cryptography

A lattice-based digital signature algorithm selected by NIST for post-quantum standardization, suitable for automotive code signing and certificate issuance.

**Related:** PQC, ML-DSA, CRYSTALS-Kyber, Certificate, Digital Signature

### CRYSTALS-Kyber

**Full Name:** ML-KEM

**Category:** Cryptography

A lattice-based KEM selected by NIST for post-quantum standardization, based on MLWE, providing IND-CCA2 secure key agreement for automotive secure communication.

**Related:** PQC, ML-KEM, CRYSTALS-Dilithium

### CSAF

**Full Name:** Common Security Advisory Framework

**Category:** Supply Chain Security

An OASIS standard format for publishing structured security advisories enabling automated vulnerability processing across the automotive supply chain.

**Related:** SBOM, VEX, Vulnerability, CVE

### CSI-2

**Full Name:** MIPI Camera Serial Interface 2

**Category:** Vehicle Architecture

A high-speed serial interface standard developed by MIPI Alliance for connecting cameras to processors, widely used in automotive vision systems for ADAS and autonomous driving applications.

**Related:** MIPI, D-PHY, Camera ECU, ADAS

### CSIA

**Full Name:** Cybersecurity Interface Agreement

**Category:** Security Architecture

An agreement defined in ISO/SAE 21434 (Clause 5.4) specifying cybersecurity responsibilities, interfaces, and communication between parties involved in the vehicle lifecycle (OEMs, Tier 1s, Tier 2s, and service providers), ensuring accountability for cybersecurity activities across the supply chain.

**Related:** ISO 21434, Distributed Cybersecurity Audit, Supply Chain Security, CSMS

### CSM

**Full Name:** AUTOSAR Crypto Service Manager

**Category:** Cryptography

The AUTOSAR module responsible for managing cryptographic operations and key usage.

### CSMS

**Full Name:** Cybersecurity Management System

**Category:** Security

An organizational framework defined in UN R155 and ISO 21434 for managing cybersecurity governance, policies, processes, and responsibilities throughout the vehicle lifecycle.

**Related:** UN R155, ISO 21434, SUMS, ISMS, Incident Response

### CSRF

**Full Name:** Cross-Site Request Forgery

**Category:** Network

An attack that forces a user to execute unwanted actions.

### CVE

**Full Name:** Common Vulnerabilities and Exposures

**Category:** Vulnerability

A standardized identifier for publicly known cybersecurity vulnerabilities, maintained by MITRE, used in the automotive industry to track and manage security flaws in vehicle components and software.

**Related:** CVSS, CWE, NVD, MITRE, VEX

### CVSS

**Full Name:** Common Vulnerability Scoring System

**Category:** Vulnerability

An open framework for rating the severity of security vulnerabilities based on exploitability, impact, and environmental factors, used to prioritize automotive vulnerability remediation.

**Related:** CVE, CWE, NVD, Base Score, NIST

### CWE

**Full Name:** Common Weakness Enumeration

**Category:** Vulnerability

A community-developed taxonomy of software and hardware weakness types maintained by MITRE, used in the automotive industry to classify and prevent common security flaws during development.

**Related:** CVE, CVSS, OWASP, MITRE, Secure Coding

### Cyber Kill Chain

**Category:** Threat Modeling

A framework developed by Lockheed Martin describing the stages of a cyberattack from reconnaissance to action on objectives, used to understand and model automotive cyber threats.

**Related:** STRIDE, Attack Tree, TARA

### Cyber Range

**Category:** Penetration Testing

A simulated environment for cybersecurity training and testing.

### Cyber Threat Intelligence

**Category:** Security Architecture

Information about potential or active cyber threats.

### Cybersecurity Incident

**Category:** Security Architecture

An event that violates security policy or compromises system integrity.

### Cybersecurity Monitoring

**Category:** Security Architecture

Continuous observation of systems for security events.

### Cybersecurity Policy

**Category:** Security Architecture

Rules defining security requirements and enforcement mechanisms.
### Cybersecurity Property
**Category:** Threat Modeling
A security attribute of an asset that must be protected, defined in ISO 21434 as confidentiality, integrity, or availability (CIA). Each threat scenario in TARA is associated with the compromise of one or more cybersecurity properties of a specific asset, forming the basis for damage scenario evaluation and security need derivation.
**Related:** CIA Triad, Confidentiality, Integrity, Availability, Security Asset, ISO 21434, TARA

### Cybersecurity Validation

**Category:** Vehicle Security

Testing process ensuring security requirements are met.

## D

### D-Bus

**Category:** Network

An inter-process communication system used in Linux-based automotive systems such as IVI and infotainment platforms.

**Related:** Binder, IPC
### Damage Scenario
**Category:** Threat Modeling
A description of the adverse consequences that result from successful exploitation of a threat, evaluated during TARA according to ISO 21434. Damage scenarios assess the impact on road users, vehicle functions, and other affected parties across four impact categories: safety (S), financial (F), operational (O), and privacy (P), used to determine the severity and associated risk level.
**Related:** TARA, Threat Scenario, Risk, Impact Assessment, ISO 21434, Safety

### Dangling Pointer

**Category:** Vulnerability

A pointer that retains a memory address after the referenced object has been freed or deallocated, leading to undefined behavior when dereferenced; in automotive C/C++ firmware for ECUs, ADAS controllers, and IVI systems, dangling pointers can cause memory corruption, use-after-free exploits, and denial of service.

**Related:** Use-After-Free, Double Free, Memory Corruption, Null Pointer Dereference

### DAP Debug Interface

**Category:** Reverse Engineering

Debug Access Port used in Infineon MCUs.

### Data Augmentation

**Category:** AI

A technique in machine learning where training data is artificially expanded through transformations and modifications, improving model robustness and generalization for automotive perception and safety systems.

**Related:** Machine Learning, Synthetic Data, Sim-to-Real, Generative AI, Supervised Learning

### Data Exfiltration

**Category:** Attack

Unauthorized transfer of data from a vehicle system to an external attacker.

### Data from Local System

**Category:** Attack

An Auto-ISAC attack technique where an adversary extracts sensitive data from local vehicle system storage, including configuration files, user PII, cryptographic keys, diagnostic logs, and navigation history.

**Related:** Privacy, Secure Storage, TPM

### Data Injection Attack

**Category:** Attack

An attack that injects malicious or falsified data into vehicle communication systems.

### Data Integrity

**Category:** Security

The assurance that data has not been altered or tampered with.

### Data Logging ECU

**Category:** ECU

An ECU responsible for recording vehicle operational data.

### Data Privacy

**Category:** Security

The aspect of information security dealing with the proper handling, processing, and protection of personal data collected by vehicles, including compliance with regulations like GDPR, CCPA, and PIPL.

**Related:** Privacy, GDPR, PII, PIPL, CCPA

### Data Security

**Category:** Security

The practice of protecting digital data throughout its lifecycle from unauthorized access, disclosure, alteration, and destruction, enforced through encryption, access controls, and data governance in vehicle systems.

**Related:** Privacy, Encryption, Access Control, GDPR, GB/T 41871

### Data Spoofing

**Category:** Attack

Manipulation of data values to mislead systems or sensors.

### DBC

**Full Name:** Database for CAN

**Category:** Automotive Network

A proprietary file format by Vector for describing CAN bus communication including messages, signals, and attributes, serving as the de facto standard for CAN network description in the automotive industry.

**Related:** CAN, CAN FD, LDF, FIBEX, DBF

### DBF

**Full Name:** BUSMASTER Database File

**Category:** Network

A bus database file format used by the BUSMASTER tool for describing CAN and LIN network communication configurations.

**Related:** DBC, FIBEX, LDF

### DBI

**Full Name:** Dynamic Binary Instrumentation

**Category:** Reverse Engineering

A technique for analyzing binary execution at runtime.

### DCM

**Full Name:** AUTOSAR Diagnostic Communication Manager

**Category:** Diagnostics

**Related:** Diagnostic Service

An AUTOSAR module implementing Unified Diagnostic Services (UDS).

### DCU

**Full Name:** Door Control Unit

**Category:** ECU

A body ECU managing power window lift, door lock/unlock, mirror adjustment and folding, and puddle lighting for a single door; typically connects via LIN bus to the BCM or zonal gateway, and supports anti-pinch and one-touch operation.

**Related:** BCM, Seat Control Module, LIN Bus, Zonal Gateway, PEPS

### DDoS

**Full Name:** Distributed Denial of Service

**Category:** Attack

An attack that overwhelms a target system with traffic from multiple sources, causing service disruption.

### DDS

**Full Name:** Data Distribution Service

**Category:** Vehicle Architecture

A real-time publish-subscribe middleware protocol (OMG standard) used in autonomous and high-performance automotive systems for efficient, reliable, and secure data exchange between software components.

**Related:** SOME/IP, SOA, Zenoh, RTPS, QoS

### Deadlock

**Category:** Operating System

A state where two or more threads/processes block indefinitely waiting for resources held by each other; a critical concern in safety-critical automotive systems where deadlock can lead to ECU hangs and loss of vehicle functions.

**Related:** Mutex, Semaphore, Thread, RTOS, Spinlock

### Debug Authentication Bypass

**Category:** Attack

Circumventing authentication mechanisms protecting debug interfaces.

### Debug Bypass

**Category:** Attack

A method to bypass debug authentication or restrictions.

### Debug Interface

**Category:** Hardware Security

Interfaces such as JTAG or UART used for system debugging and often exploited for attacks.

### Debug Mode

**Category:** Security

A special operating mode enabling enhanced system access for development.

### Debug Port

**Category:** Hardware Security

A physical or logical interface allowing low-level system access.

### Debug UART Attack

**Category:** Attack

Exploitation of UART debug interfaces to gain system access.

### Decryption

**Category:** Cryptography

**Related:** Cipher, Ciphertext

The process of converting ciphertext into readable plaintext.

### Decryption Key

**Category:** Cryptography

**Related:** Cryptographic Key

A cryptographic key used to decrypt encrypted data.

### Deep Learning

**Category:** AI

A subset of machine learning using multi-layer neural networks to learn hierarchical representations from data; underpins modern ADAS perception (object detection, lane detection), driver monitoring, and autonomous driving decision-making; models include CNNs, RNNs, and Transformers.

**Related:** CNN, Machine Learning, Computer Vision, Reinforcement Learning, Transformer (Neural Network)

### Default Credentials

**Category:** Vulnerability

A vulnerability arising from factory-default usernames and passwords that remain unchanged after deployment; common in automotive ECUs, diagnostic tools, TCUs, and telematics gateways where default credentials for SSH, web interfaces, or debug ports allow immediate unauthorized access.

**Related:** Hardcoded Credentials, Weak Authentication, Authentication Bypass, Exposed Debug Interface

### Defense in Depth

**Category:** Security Architecture

A layered security approach combining multiple defensive mechanisms.

### DEM

**Full Name:** Diagnostic Event Manager

**Category:** AUTOSAR

An AUTOSAR Basic Software module that manages diagnostic events, including event memory storage, debouncing, fault detection, and status reporting via UDS, critical for security monitoring and intrusion detection logging.

**Related:** DCM, UDS, Diagnostics

### Denial of Service

**Full Name:** DoS

**Category:** Attack

An attack that disrupts system availability by exhausting resources.

### Denial of Service on Vehicle Function

**Category:** Attack

An Auto-ISAC attack technique where an adversary targets critical vehicle functions (e.g., braking, steering, propulsion, ADAS sensing) to cause denial of service through network flooding, resource exhaustion, or bus-off attacks.

**Related:** DDoS, CAN DoS Attack, Bus Off Recovery Attack

### DENM

**Full Name:** Decentralized Environmental Notification Message

**Category:** Connectivity

A V2X message type (ETSI EN 302 637-3) for event-driven hazard warning about road hazards, accidents, traffic jams, or adverse weather via multi-hop geonetworking.

**Related:** CAM, BSM, V2X, C-V2X

### DEP

**Full Name:** Data Execution Prevention

**Category:** Security

A security feature that marks memory regions as non-executable, preventing code execution from data pages and mitigating buffer overflow and code injection attacks on automotive processors.

**Related:** W^X, NX Bit, ASLR, ROP, JOP

### DET

**Full Name:** Development Error Tracer

**Category:** AUTOSAR

An AUTOSAR Basic Software module that detects and reports development errors (invalid parameters, API violations, null pointers) during software development, used in security testing to identify API misuse and vulnerability entry points.

**Related:** DLT, AUTOSAR DEM, Functional Safety

### Deterministic Scheduling

**Category:** Operating System

Guarantees predictable execution timing of tasks.

### Device Authentication

**Category:** Security

**Related:** Identity

The process of verifying the identity of a device in a network.

### Device Driver

**Category:** Operating System

A kernel component that provides a software interface to hardware peripherals; automotive ECUs require device drivers for CAN controllers, SPI/I2C sensors, Ethernet MACs, GPIOs, ADCs, and memory-mapped I/O, often with real-time constraints.

**Related:** Kernel, System Call, Interrupt, ECU

### Device Fingerprinting

**Category:** Security

Identifying devices based on unique behavioral or hardware characteristics.

### Device Identity

**Category:** IAM

A unique identity assigned to a device within a system.

### Device Passthrough

**Category:** Virtualization

A virtualization technique that assigns a physical device (GPU, CAN controller, Ethernet MAC) directly to a specific VM, bypassing the hypervisor for near-native I/O performance; requires IOMMU/SMMU hardware support for DMA isolation in automotive mixed-criticality systems.

**Related:** IOMMU, VirtIO, Hypervisor, KVM

### Device Provisioning

**Category:** Connectivity

The process of securely onboarding devices into a managed system.

### Device Tree

**Category:** Operating System

A data structure for describing hardware components and their connections to the OS, used in embedded Linux (Flattened Device Tree / FDT); essential for automotive Linux to support diverse SoC configurations across IVI, telematics, and domain controllers.

**Related:** U-Boot, Linux, Embedded Linux, AGL

### DEXT

**Full Name:** Diagnostic Extract Template

**Category:** Diagnostics

An AUTOSAR template for extracting diagnostic data from system descriptions, providing a standardized exchange format between development tools.

**Related:** ODX, ARXML, CDD, AUTOSAR

### DFD

**Full Name:** Data Flow Diagram

**Category:** Threat Modeling

A graphical representation of data flows through a system, used in TARA and threat modeling methodologies to identify trust boundaries, data stores, processes, and external entities for security analysis.

**Related:** TARA, Trust Boundary, PASTA, STRIDE, PFD

### DH

**Full Name:** Diffie-Hellman

**Category:** Cryptography

A key exchange protocol allowing two parties to establish a shared secret over an insecure channel, foundational to automotive secure communication protocols such as TLS, IPsec, and AUTOSAR CryptoStack.

**Related:** Key Exchange, TLS, ECC, Perfect Forward Secrecy

### Diagnostic Fuzzing

**Category:** Diagnostics

**Related:** Diagnostic Gateway, Diagnostic Request, Diagnostic Response

A technique that sends malformed diagnostic requests to ECUs.

### Diagnostic Gateway

**Category:** Diagnostics

**Related:** Diagnostic Fuzzing, Diagnostic Request, Diagnostic Response

An ECU that routes diagnostic traffic between networks.

### Diagnostic Request

**Category:** Diagnostics

**Related:** Diagnostic Response, Diagnostic Fuzzing, Diagnostic Gateway

A message sent from a tester to an ECU requesting diagnostic information.

### Diagnostic Response

**Category:** Diagnostics

**Related:** Diagnostic Request, Diagnostic Fuzzing, Diagnostic Gateway

A message returned by an ECU containing diagnostic results.

### Diagnostic Security Access

**Category:** Diagnostics

**Related:** Diagnostic Security Seed-Key

A security mechanism controlling access to protected diagnostic functions.

### Diagnostic Security Seed-Key

**Category:** Diagnostics

**Related:** Diagnostic Security Access

A challenge-response mechanism used to unlock protected ECU functions.

### Diagnostic Service

**Category:** Diagnostics

A service used to query or modify ECU data.

### Diagnostic Session

**Category:** Diagnostics

**Related:** Diagnostic Session Control

A communication session established between tester and ECU.

### Diagnostic Session Control

**Full Name:** 0x10

**Category:** Diagnostics

**Related:** Diagnostic Session

A UDS service used to manage ECU diagnostic sessions.

### Diagnostic Vulnerability

**Category:** Vulnerability

A security weakness in automotive diagnostic protocols (UDS, OBD-II, DoIP, XCP) that allows unauthorized access to vehicle functions; common vulnerabilities include unauthenticated diagnostic sessions, lack of transport encryption, unrestricted read/write of ECU memory, firmware flashing without authorization, and manipulation of vehicle operational parameters.

**Related:** UDS Service Bypass, OBD-II Attack, Unauthorized ECU Access, Remote Diagnostics Attack

### DID

**Full Name:** Data Identifier

**Category:** Diagnostics

Identifiers used in UDS services to access ECU data.

### Differential Attack

**Category:** Cryptography

An attack method analyzing differences in inputs and outputs of cryptographic algorithms.

### Digital Certificate

**Category:** Cryptography

A cryptographic document binding a public key to an identity.

### Digital Cockpit

**Category:** Vehicle Architecture

A fully digital instrument and infotainment platform replacing analog gauges with reconfigurable displays on a single SoC, presenting security challenges in isolation and secure boot.

**Related:** IVI, Hypervisor, HMI

### Digital Key

**Category:** Vehicle Security

A smartphone-based or cloud-based system allowing vehicle access and ignition authorization.

### Digital Signature

**Category:** Cryptography

A cryptographic mechanism ensuring data authenticity and integrity.

### Digital Twin

**Category:** Vehicle Architecture

A virtual representation of a physical vehicle or ECU used for simulation and monitoring.

### DIN 70121

**Category:** Standards

A German standard for DC charging communication between electric vehicles and charging infrastructure, based on CAN communication. Predecessor to ISO 15118.

**Related:** ISO 15118, GB/T 27930, CHAdeMO

### Disable Software Update

**Category:** OTA

An Auto-ISAC attack technique where an adversary prevents or disables OTA software update mechanisms to block security patches, maintain persistence on compromised systems, or force rollback to vulnerable firmware versions.

**Related:** OTA, Software Update Attack, Rollback Protection

### Disassembler

**Category:** Reverse Engineering

A tool that converts binary code into assembly language.

### Disk Encryption

**Category:** Hardware Security

Encryption applied to persistent storage to protect data confidentiality.

### Distributed ECU Architecture

**Category:** Vehicle Architecture

An architecture where vehicle functions are distributed across multiple ECUs.

### Distributed Gateway

**Category:** Network

A system distributing routing and filtering responsibilities across multiple gateways.

### DLC

**Full Name:** Data Link Connector

**Category:** Diagnostics

The standardized 16-pin OBD-II connector providing physical access to vehicle diagnostic networks, serving as a primary attack surface for physical access.

**Related:** OBD-II, J1962, UDS

### DLNA

**Full Name:** Digital Living Network Alliance

**Category:** Connectivity

A set of interoperability standards for sharing digital media (audio, video, images) between consumer electronics devices over a home network, built on UPnP protocols; in automotive IVI systems, DLNA enables media streaming from smartphones and home media servers to the vehicle's infotainment head unit, but introduces security risks including unauthorized media access, buffer overflow vulnerabilities in media renderers, and network exposure of sensitive vehicle data over Wi-Fi or smartphone tethering.

**Related:** UPnP, SSDP, IVI, Media Streaming

### DLP

**Full Name:** Data Loss Prevention

**Category:** Security Architecture

Strategies and technologies designed to prevent unauthorized exfiltration or transmission of sensitive vehicle data (e.g., PII, telemetry, firmware) from in-vehicle systems, backend servers, or development environments.

**Related:** Data Exfiltration, PII, Insider Threat

### DLT

**Full Name:** Diagnostic Log and Trace

**Category:** AUTOSAR

An AUTOSAR Basic Software module providing standardized diagnostic logging and tracing services for system events, security incidents, and debug information, essential for security audit trails and forensic analysis.

**Related:** DET, AUTOSAR DEM, Security Audit

### dm-verity

**Full Name:** Device-Mapper Verity

**Category:** Android

A Linux kernel integrity-checking mechanism that verifies block-level data integrity using a hash tree (Merkle tree). Each block read from storage is verified against a pre-computed hash stored in a verity table, ensuring the block device content has not been tampered with. In Android and Android Automotive, dm-verity is a critical component of Verified Boot, protecting the integrity of system and vendor partitions.

**Related:** Verified Boot, vbmeta, AVB, Merkle Tree, Integrity

### DMA

**Full Name:** Direct Memory Access

**Category:** Hardware Security

A mechanism allowing hardware components to access memory without CPU intervention.

### DMA Attack

**Category:** Attack

An attack using DMA to read or modify system memory directly.

### DMS

**Full Name:** Driver Monitoring System

**Category:** ADAS

A camera-based system that monitors driver alertness, attention, and engagement, critical for L3/L4 automated driving handover safety and regulatory compliance under GSR and Euro NCAP.

**Related:** Cabin Monitoring System, OMS, L3, Driver Attention, Euro NCAP

### Docker Container Security

**Category:** Operating System

Security practices for isolating and protecting containerized workloads.

### Docker Escape

**Category:** Attack

An attack that breaks out of container isolation to access host systems.

### DoIP

**Full Name:** Diagnostics over Internet Protocol

**Category:** Diagnostics

A diagnostic communication protocol (ISO 13400) that enables UDS-based vehicle diagnostics over Ethernet/IP networks, supporting faster data transfer rates compared to CAN-based diagnostics.

**Related:** UDS, Automotive Ethernet, MVCI, ISO 13400, Wireshark

### Domain Centralized Architecture

**Category:** Vehicle Architecture

An E/E architecture where ECUs are grouped by functional domains (powertrain, chassis, body, infotainment, ADAS), each managed by a domain controller that consolidates processing and provides service-oriented interfaces; a transitional step from distributed ECU architectures toward zonal and central computing architectures.

**Related:** Domain Controller ECU, E/E Architecture, Functional Domain Architecture, Central Computing Architecture, Distributed ECU Architecture

### Domain Controller

**Category:** Vehicle Architecture

A centralized computing unit that consolidates functions previously distributed across multiple ECUs within a specific domain (e.g., ADAS, body, powertrain), reducing complexity and enabling more efficient E/E architectures.

**Related:** ECU, HPC, Zonal Architecture, Gateway ECU, E/E Architecture

### Domain Controller ECU

**Category:** ECU

A high-performance ECU that manages multiple vehicle domains such as ADAS, infotainment, and powertrain.

### Domain Firewall

**Category:** Network

A firewall enforcing communication rules between vehicle domains.

### Domain Isolation

**Category:** Security Architecture

A security architecture that separates vehicle systems into isolated functional domains.

### Domain Separation

**Category:** Security Architecture

A design principle that prevents unauthorized communication between system domains.

### DoS

**Full Name:** Denial of Service

**Category:** Attack

An attack that makes vehicle functions, ECUs, or network services unavailable by overwhelming resources (CPU, memory, CAN bus bandwidth) or triggering error states, potentially disabling safety-critical vehicle operations.

**Related:** CAN DoS Attack, Resource Exhaustion, Availability, DDoS, CAN Bus Off Attack

### Double Free

**Category:** Vulnerability

A memory corruption vulnerability caused by calling free() on the same heap allocation twice, corrupting the heap allocator metadata and potentially leading to arbitrary code execution; in automotive embedded systems with manual memory management, double free can compromise ECU firmware stability and security.

**Related:** Use-After-Free, Memory Corruption, Heap Overflow, Dangling Pointer

### DPA

**Full Name:** Differential Power Analysis

**Category:** Attack

Advanced power analysis technique used to break cryptographic implementations.

### DPI

**Full Name:** Deep Packet Inspection

**Category:** Network

A packet filtering technique that examines both the header and payload of network traffic at the application layer, used in automotive Ethernet firewalls and IDS to detect malicious patterns in in-vehicle communication.

**Related:** Firewall, IDS, Automotive Ethernet, Network Segmentation

### DRBG

**Full Name:** Deterministic Random Bit Generator

**Category:** Cryptography

A cryptographically secure pseudo-random number generator defined in NIST SP 800-90A, used in automotive security systems to generate keys, nonces, and challenges with sufficient entropy for cryptographic operations.

**Related:** TRNG, PRNG, NIST SP 800-90A, Entropy, Nonce

### Drift Detection

**Category:** Intrusion Detection

Detection of deviations from expected system or behavioral baselines.

### Drive-by-wire

**Category:** Vehicle Architecture

A vehicle control system replacing mechanical linkages (steering, braking, throttle) with electronic controls, increasing attack surface through potential ECU manipulation.

**Related:** ECU, CAN, Attack Surface, Throttle-by-wire, Brake-by-wire

### Driver Assistance System

**Category:** ADAS

Systems assisting drivers in perception, decision, and control tasks.

### Driver Override

**Category:** Vehicle Architecture

A mechanism allowing driver input to override automated systems.

### Driverless Mode

**Category:** ADAS

A vehicle operating mode where no human driver input is required.

### DRM

**Full Name:** Digital Rights Management

**Category:** Security Architecture

Technology used to control access to copyrighted digital content and software; in automotive contexts, used to protect infotainment content, map data, and firmware from unauthorized copying or redistribution.

**Related:** Licensing, Content Protection, OTA Update

### DSL

**Full Name:** Data Security Law

**Category:** Standards

China's Data Security Law establishing data classification and gradation protection, requiring manufacturers to implement security assessments for data processing affecting national security or public interests.

**Related:** PIPL, GDPR, GB/T 40861-2021

### DSRC

**Full Name:** Dedicated Short-Range Communication

**Category:** Vehicle Connectivity

A wireless communication technology based on IEEE 802.11p designed specifically for automotive V2X applications, operating in the 5.9 GHz band with low latency for safety-critical vehicle communications.

**Related:** V2X, C-V2X, IEEE 802.11p, WAVE, ITS

### DTC

**Full Name:** Diagnostic Trouble Code

**Category:** Diagnostics

A standardized code used by ECUs to report faults or abnormal conditions.

### DUT

**Full Name:** Device Under Test

**Category:** Penetration Testing

The automotive ECU, module, or component being subjected to security testing, fuzzing, or compliance validation in a laboratory or production environment.

**Related:** HIL, SIL, Fuzzing, Penetration Testing

### DVR

**Full Name:** Digital Video Recorder

**Category:** ECU

An in-vehicle recording device that captures and stores video from dashcams or surround-view cameras; may contain sensitive driving data and require security protection against tampering or data theft.

**Related:** Dashcam, Camera ECU, Data Privacy

### Dynamic Analysis

**Category:** Penetration Testing

Analysis of software behavior during execution.

### Dynamic Attack Surface

**Category:** Threat Modeling

The portion of the attack surface that changes during system runtime.

### Dynamic Key Rotation

**Category:** Cryptography

**Related:** Cryptographic Key

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

**Category:** Security

A counter used to prevent replay attacks in automotive networks.

### E2E CRC

**Category:** Security

Cyclic redundancy check used in end-to-end protection.

### E2E Freshness Value

**Category:** Security

A value ensuring message freshness and preventing replay attacks.

### E2E Protection

**Full Name:** End-to-End Protection

**Category:** Security

A mechanism ensuring integrity and authenticity of signals from sender ECU to receiver ECU.

### E2EE

**Full Name:** End-to-End Encryption

**Category:** Security

Encryption ensuring only sender and receiver can access plaintext data.

### EA

**Full Name:** EEPROM Abstraction

**Category:** AUTOSAR

An AUTOSAR Basic Software module providing abstraction for EEPROM data storage, handling addressing, erase/write cycles, and data integrity verification for security-sensitive persistent data such as cryptographic keys.

**Related:** AUTOSAR Fee, AUTOSAR NvM, Secure Storage

### EBCM

**Full Name:** Electronic Brake Control Module

**Category:** Vehicle Architecture

An ECU responsible for controlling and monitoring the electronic braking system, including ABS and ESC functions, coordinating with other vehicle safety systems through high-speed CAN or FlexRay buses.

**Related:** ABS, ESC, RCM, Brake-by-Wire, Active Safety

### eCall Spoofing

**Category:** Attack

Manipulating eCall systems to trigger false emergency messages.

### eCall System

**Category:** Vehicle Architecture

An emergency communication system that automatically contacts emergency services during accidents.

### ECC

**Full Name:** Elliptic Curve Cryptography

**Category:** Cryptography

A public-key cryptography approach based on elliptic curves, offering equivalent security to RSA with smaller key sizes, used in V2X communication, secure boot, and ECU authentication.

**Related:** ECDSA, ECDH, Ed25519, RSA, PQC

### ECDH

**Full Name:** Elliptic Curve Diffie-Hellman

**Category:** Cryptography

A key agreement protocol allowing two parties to establish a shared secret over an insecure channel using elliptic curve cryptography, used in automotive for secure session key establishment and TLS key exchange.

**Related:** ECC, ECDSA, DH, X25519, PQC

### ECDSA

**Full Name:** Elliptic Curve Digital Signature Algorithm

**Category:** Cryptography

A digital signature scheme based on elliptic curve cryptography, used in vehicle secure boot, firmware signing, and V2X certificate authentication, providing equivalent security to RSA with smaller keys.

**Related:** ECC, Ed25519, ECDH, Digital Signature, PQC

### ECE R10

**Full Name:** ECE Regulation No. 10 — Electromagnetic Compatibility

**Category:** Standards

A UNECE regulation specifying electromagnetic compatibility requirements for vehicles and components, ensuring that electronic systems neither emit excessive interference nor are susceptible to external electromagnetic disturbance.

**Related:** EMC, EMI, WP.29, ISO 11452, Type Approval

### ECM

**Full Name:** Engine Control Module

**Category:** ECU

An ECU that manages engine operation parameters such as fuel injection, ignition timing, and emissions control; historically one of the first ECUs targeted in automotive security research.

**Related:** ECU, Powertrain, CAN Bus, OBD-II

### ECU

**Full Name:** Electronic Control Unit

**Category:** Vehicle Architecture

An embedded system that controls one or more electrical systems or subsystems in a vehicle, such as engine management, braking, steering, or body electronics.

**Related:** CAN, Domain Controller, Gateway ECU, AUTOSAR, Zonal Architecture

### ECU Authentication

**Category:** Security

**Related:** ECU Identity, Identity

Verification of ECU identity before allowing communication or updates.

### ECU Authorization

**Category:** IAM

Determining allowed actions for an authenticated ECU.

### ECU Bricking

**Category:** Vehicle Architecture

A condition where ECU becomes non-functional due to failed firmware or corruption.

### ECU Communication Stack

**Category:** Network

Protocol stack used for ECU communication including CAN, Ethernet, and diagnostics layers.

### ECU Configuration

**Category:** Vehicle Architecture

Settings and parameters defining ECU behavior.

### ECU Exploit

**Category:** Attack

A method used to compromise ECU functionality.

### ECU Firmware

**Category:** ECU

Software running on ECUs that controls hardware behavior.

### ECU Flashing

**Category:** Diagnostics

**Related:** ECU Reprogramming

The process of writing firmware to ECU memory.

### ECU Fuzzing

**Category:** Penetration Testing

Sending malformed inputs to ECU interfaces to find vulnerabilities.

### ECU Gateway

**Category:** Network

A central ECU responsible for routing communication between networks.

### ECU Identity

**Category:** Security

A unique identifier assigned to each ECU for authentication.

### ECU Isolation

**Category:** Security Architecture

**Related:** Cross-Domain Attack

Segmentation of ECUs to prevent cross-domain attacks.

### ECU Reprogramming

**Category:** Diagnostics

**Related:** ECU Flashing

Updating ECU firmware via diagnostic or OTA mechanisms.

### ECU Reverse Engineering

**Category:** Reverse Engineering

Analyzing ECU firmware to understand functionality and vulnerabilities.

### ECU Runtime Monitoring

**Category:** Intrusion Detection

Monitoring ECU behavior during execution to detect anomalies.

### ECU Scheduling

**Category:** Operating System

Mechanism that schedules tasks within ECU operating systems.

### ECU Secure Boot

**Category:** Boot Security

A mechanism ensuring only trusted firmware is executed on ECU startup.

### ECU Secure Update

**Category:** OTA

Secure mechanism for updating ECU firmware.

### ECU Security Policy

**Category:** Security Architecture

Rules defining allowed ECU behavior and communication.

### ECU Telemetry

**Category:** Connectivity

Data collected from ECUs for monitoring and analytics.

### ECU Unlock

**Category:** Attack

Bypassing ECU security mechanisms to gain full control.

### EcuM

**Full Name:** ECU State Manager

**Category:** AUTOSAR

An AUTOSAR Basic Software module managing ECU startup, shutdown, and sleep/wake-up state transitions, coordinating initialization sequences for security-sensitive operations including secure boot and key provisioning.

**Related:** AUTOSAR BswM, AUTOSAR SchM, Secure Boot

### Ed25519

**Category:** Cryptography

An Edwards-curve Digital Signature Algorithm (EdDSA) using Curve25519, offering high performance, small signatures (64 bytes), and side-channel resistance, increasingly adopted in automotive key management.

**Related:** X25519, ECDSA, ECC, Digital Signature, Key Management

### Edge AI

**Category:** AI

The deployment of AI inference on edge devices (ECUs, domain controllers, sensors) rather than cloud servers; enables real-time perception and decision-making with low latency, offline operation, and privacy preservation; critical for ADAS and autonomous driving where cloud round-trips are infeasible.

**Related:** AI Accelerator, NPU, Inference Engine, Model Compression, ECU

### EDR

**Full Name:** Event Data Recorder

**Category:** ECU

A system that records vehicle data before and after crash events.

### EDR Data Extraction

**Category:** Attack

Retrieving stored crash or telemetry data from EDR systems.

### EEPROM

**Category:** Hardware Security

Electrically erasable programmable read-only memory used in ECUs for persistent storage.

### EEPROM Attack

**Category:** Attack

Modification of EEPROM content to alter ECU behavior.

### EEPROM Dump

**Category:** Reverse Engineering

Extraction of EEPROM data for analysis.

### eFuse

**Category:** Hardware Security

One-time-programmable electronic fuses used in microcontrollers to permanently store security settings such as debug disable flags, secure boot keys, and encryption keys; once blown, the configuration cannot be reversed.

**Related:** Secure Boot, OTP, Hardware Root of Trust

### EM Side Channel

**Category:** Hardware Security

Extracting data through electromagnetic emissions.

### Embedded Cryptography Module

**Category:** Security

A module providing cryptographic operations in embedded systems.

### Embedded Debug Interface

**Category:** Hardware Security

Low-level interfaces such as JTAG or SWD used for debugging embedded systems.

### Embedded Linux

**Category:** Operating System

**Related:** Linux

A Linux-based operating system used in automotive infotainment and gateway systems.

### Embedded Security

**Category:** Vehicle Security

Security mechanisms applied to embedded automotive systems.

### Embedded System

**Category:** Operating System

A computing system integrated into vehicle hardware for dedicated functions.

### EMC

**Full Name:** Electromagnetic Compatibility

**Category:** Hardware Security

The ability of vehicle electronic equipment to function satisfactorily in its electromagnetic environment without introducing intolerable electromagnetic disturbance to other equipment, regulated by ECE R10 for vehicle type approval.

**Related:** ECE R10, EMI, ISO 11452, CISPR 25, Hardware

### EMFI

**Full Name:** Electromagnetic Fault Injection

**Category:** Hardware Security

A physical attack technique that uses electromagnetic pulses to induce faults in integrated circuits, potentially bypassing security checks, extracting cryptographic keys, or altering program execution in automotive ECUs.

**Related:** Fault Injection, Laser Fault Injection, Voltage Fault Injection, Side Channel, ChipWhisperer

### EMI

**Full Name:** Electromagnetic Interference

**Category:** Hardware Security

Electromagnetic disturbances that can disrupt electronic vehicle components, potentially causing safety-critical ECU malfunctions; managed through EMC compliance testing per standards like ECE R10 and ISO 11452.

**Related:** ECE R10, EMC, ISO 11452, EMFI

### eMMC

**Full Name:** embedded Multi Media Card

**Category:** Hardware Security

Embedded flash storage commonly used in automotive infotainment and telematics systems; contains firmware and user data requiring protection against physical extraction and tampering.

**Related:** UFS, Flash Storage, RPMB, Firmware

### Encryption

**Category:** Cryptography

**Related:** Cipher, Ciphertext

The process of converting plaintext into ciphertext.

### Encryption Engine

**Category:** Hardware Security

Hardware module performing cryptographic operations.

### Encryption Key

**Category:** Cryptography

A key used to encrypt or decrypt data.

### End-to-End Learning

**Category:** AI

An autonomous driving paradigm where a single neural network maps raw sensor inputs (camera images, lidar point clouds) directly to driving actions (steering, throttle, braking), bypassing modular perception-planning-control pipelines; pioneered by NVIDIA and demonstrated in research platforms.

**Related:** Deep Learning, CNN, Behavior Prediction, Autonomous Driving, Imitation Learning

### Endpoint Security

**Category:** Security Architecture

Protection of endpoints such as ECUs, IVI systems, or gateways.

### ENISA

**Category:** Security Architecture

The European Union Agency for Cybersecurity, providing guidance, best practices, and threat intelligence for automotive cybersecurity, including guidelines for connected vehicle security and IoT protection.

**Related:** ETSI, NIS Directive, Threat Intelligence, ISO 21434

### EOD

**Full Name:** End of Delivery

**Category:** Vehicle Architecture

The milestone marking the conclusion of customer deliveries or shipment of finished products, typically following EOP by a defined period to allow for final production units to reach customers or distribution channels.

**Related:** EOP, SOD, SUD, Logistics, Supply Chain

### EOP

**Full Name:** End of Production

**Category:** Vehicle Architecture

The milestone marking the cessation of series production for a specific vehicle model, variant, or component, triggering end-of-life activities including final orders, service parts planning, and tooling disposition.

**Related:** SOP, SORP, MP, EOD, Product Lifecycle

### EPS

**Full Name:** Electric Power Steering

**Category:** ECU

A steering system assisted by electric motors controlled by an ECU, replacing hydraulic systems; a safety-critical component vulnerable to cyber attacks targeting steering control manipulation.

**Related:** Steer-by-wire, ISO 26262, ASIL, CAN Bus

### Error Frame

**Category:** Network

A frame indicating transmission errors in CAN communication.

### Error Injection

**Category:** Attack

Deliberate introduction of faults into system communication or hardware.

### ESC

**Full Name:** Electronic Stability Control

**Category:** Vehicle Architecture

A safety system that automatically detects and reduces loss of traction by applying brakes to individual wheels and reducing engine power, helping the driver maintain control of the vehicle.

**Related:** ABS, TCS, EBCM, Active Safety, L1

### eSIM

**Full Name:** Embedded SIM

**Category:** Vehicle Connectivity

An embedded, remotely programmable SIM chip soldered directly onto vehicle TCU hardware, enabling carrier switching without physical SIM replacement and supporting GSMA Remote SIM Provisioning standards.

**Related:** TCU, GSM, IMSI, IMEI, eUICC

### ESSID

**Full Name:** Extended Service Set Identifier

**Category:** Network Security

The human-readable network name broadcast by Wi-Fi access points. In automotive security, ESSID spoofing is used in Evil Twin attacks against vehicle Wi-Fi hotspots and passenger devices.

**Related:** BSSID, Wi-Fi, WPA2, Evil Twin Attack, WiFi Pineapple

### Ethernet Automotive

**Category:** Network

High-speed network technology used for in-vehicle communication.

### Ethernet Frame Injection

**Category:** Attack

Injection of malicious Ethernet frames into vehicle networks.

### Ethernet Sniffing

**Category:** Reverse Engineering

Capturing Ethernet traffic for analysis.

### Ethernet TSN

**Full Name:** Ethernet Time-Sensitive Networking

**Category:** Automotive Network

A set of IEEE 802.1 standards that add deterministic, low-latency, and reliable communication capabilities to Ethernet, making it suitable for safety-critical automotive applications including ADAS and autonomous driving.

**Related:** gPTP, Automotive Ethernet, IEEE 802.1AS, IEEE 1722, TSN

### EthIf

**Full Name:** Ethernet Interface

**Category:** AUTOSAR

An AUTOSAR Basic Software module providing a hardware-independent interface between Ethernet controllers and upper communication layers (TCP/IP, SoAd, SOME/IP), managing frame I/O and controller configuration.

**Related:** SoAd, TcpIp, EthTrcv, Automotive Ethernet

### EthTrcv

**Full Name:** Ethernet Transceiver Driver

**Category:** AUTOSAR

An AUTOSAR MCAL module for Ethernet transceiver (PHY) control, managing link status, wake-up events, and loopback modes, with security implications for physical-layer attack detection.

**Related:** AUTOSAR EthIf, AUTOSAR MCAL, Automotive Ethernet

### ETSI

**Full Name:** European Telecommunications Standards Institute

**Category:** Standards

A European standards organization that develops telecommunications and ITS standards relevant to connected vehicles, including ITS-G5 (European DSRC profile) and consumer IoT security standards.

**Related:** ITS, ETSI EN 303 645, C-ITS, ENISA, DSRC

### ETSI EN 303 645

**Full Name:** Consumer IoT Security

**Category:** Standards

A European standard for consumer IoT device security, establishing baseline security requirements including no default passwords, secure software updates, vulnerability disclosure policies, and secure data storage; relevant to automotive as a reference framework for connected vehicle device security and aftermarket IoT accessories.

**Related:** ETSI, EU CRA, IoT Security, NIST CSF

### EU CRA

**Full Name:** Cyber Resilience Act

**Category:** Standards

EU regulation establishing cybersecurity requirements for products with digital elements, including connected vehicles, mandating security-by-design, vulnerability handling, and market surveillance throughout the product lifecycle.

**Related:** CSMS, SBOM, Vulnerability

### Event Correlation

**Category:** Intrusion Detection

Analyzing multiple events to detect complex attack patterns.

### Event Logging

**Category:** Intrusion Detection

Recording system events for auditing and analysis.

### Evil Twin Attack

**Category:** Attack

A wireless attack where a rogue Wi-Fi access point impersonates a legitimate network (matching ESSID/BSSID) to intercept traffic from vehicle hotspots or mobile devices; executed using tools like Airbase-NG, MitmAP, or WiFi Pineapple.

**Related:** Aircrack-ng, BSSID, ESSID, MitM, WiFi Pineapple, Airbase-NG

### EVITA

**Category:** Hardware Security

E-safety Vehicle Intrusion Protected Applications, a project defining HSM security levels (full, medium, light) for automotive ECUs, specifying cryptographic services and hardware security requirements for in-vehicle communication.

**Related:** HSM, SHE, SecOC, AUTOSAR

### EVSE

**Full Name:** Electric Vehicle Supply Equipment

**Category:** Vehicle Architecture

The charging station infrastructure for electric vehicles, communicating with the vehicle via protocols like ISO 15118; presents an attack surface for grid-to-vehicle communication, payment, and charging control.

**Related:** ISO 15118, CCS, CHAdeMO, Smart Charging

### Execution Environment

**Category:** Vehicle Architecture

Runtime environment where software executes.

### Execution Flow

**Category:** Security Architecture

The sequence in which instructions are executed in a program.

### Execution Flow Hijacking

**Category:** Attack

Manipulating program execution to run attacker-controlled code.

### Execution Policy

**Category:** Security Architecture

Rules governing what code or processes are allowed to execute.

### Explainable AI

**Full Name:** XAI

**Category:** AI

Techniques and methods that make AI model decisions interpretable to humans; essential for safety-critical automotive applications where regulatory compliance (ISO 21448 SOTIF), system validation, and incident investigation require understanding why an autonomous system acted in a particular way.

**Related:** AI Safety, Object Detection, Autonomous Driving, ISO 21448

### Exploit

**Category:** Vulnerability

A method or code that takes advantage of a security flaw.

### Exploit Chain

**Category:** Attack

A sequence of exploits used to achieve full system compromise.

### Exploit Co-Located Computing Device

**Category:** Attack

An Auto-ISAC attack technique where an adversary exploits vulnerabilities in co-located computing devices sharing the same vehicle network or physical enclosure (e.g., smart antennas, gateway modules) to gain initial access or move laterally.

**Related:** Exploit ECU for Lateral Movement, ECU, Zone Gateway

### Exploit Detection

**Category:** Intrusion Detection

Identification of exploit attempts in system behavior.

### Exploit ECU for Lateral Movement

**Category:** Attack

An Auto-ISAC attack technique where an adversary uses a compromised ECU as a pivot point to move laterally across the vehicle network, exploiting intra-vehicle trust relationships to reach other ECUs on different bus segments.

**Related:** Lateral Movement, ECU, Gateway

### Exploit Mitigation

**Category:** Security

Techniques used to prevent or limit exploitation of vulnerabilities.

### Exploit via Radio Interface

**Category:** Attack

An Auto-ISAC attack technique where an adversary exploits vulnerabilities accessible through radio interfaces (e.g., Bluetooth, Wi-Fi, V2X, GPS, DAB, Tire Pressure sensors) to gain initial access to vehicle systems.

**Related:** Bluetooth, Wi-Fi, V2X, TPMS, GNSS Spoofing

### Exploit via Removable Media

**Category:** Attack

An Auto-ISAC attack technique where an adversary uses removable media (e.g., USB drives, SD cards) to introduce malware or exploit vulnerable file parsers in IVI systems, navigation map updates, or diagnostic log transfers.

**Related:** USB Attack, IVI, Malware

### Exposed Debug Interface

**Category:** Hardware Security

A vulnerability where hardware debug interfaces (JTAG, SWD, UART debug ports, Nexus, Aurora) are left accessible on production ECUs, allowing attackers to read memory, extract firmware, modify execution flow, and bypass security mechanisms; a primary vector for physical automotive attacks.

**Related:** JTAG, UART Debug Port, Debug Authentication Bypass, Firmware Extraction, Secure Boot

### Extended ECU

**Category:** ECU

High-performance ECU used in domain or zonal computing architectures.

### External Diagnostic Interface

**Category:** Diagnostics

Interfaces such as OBD-II used for vehicle diagnostics.

## F

### Fallback Firmware

**Category:** Boot Security

Backup firmware used when primary firmware fails validation.

### Fallback Mode

**Category:** Vehicle Architecture

A degraded operational mode activated when primary systems fail or become unavailable.

### Fastboot

**Category:** Android

A low-level protocol and host-side tool for communicating with Android bootloaders, used to flash partition images (boot, system, vendor), unlock/lock the bootloader, and perform factory resets. Fastboot mode is a critical security boundary — an unlocked bootloader disables Verified Boot enforcement, allowing unsigned images to be flashed. In Android Automotive, Fastboot access must be strictly controlled to prevent unauthorized firmware modification, persistent malware implantation, and vehicle tampering.

**Related:** Bootloader, Verified Boot, Flash Bootloader, Android OTA, Bootloader Lock State

### FAT

**Full Name:** File Allocation Table

**Category:** Hardware Security

A file system structure used in embedded and automotive storage systems.

### Fault Detection

**Category:** Intrusion Detection

Mechanisms used to identify system faults or abnormal behavior.

### Fault Injection

**Category:** Attack

A technique that deliberately introduces faults into a system (voltage, clock, EM) to bypass security or extract secrets.

### Fault Isolation

**Category:** Functional Safety

Techniques used to isolate faulty components to prevent system-wide failure.

### Fault Logging

**Category:** Diagnostics

Recording system faults for later analysis.

### Fault Tolerance

**Category:** Functional Safety

The ability of a system to continue operation despite failures.

### Feature Abuse

**Category:** Attack

Exploitation of legitimate system features to achieve malicious goals.

### Federated Learning

**Category:** AI

A privacy-preserving machine learning paradigm where models are trained across distributed vehicle fleets without centralizing raw data; each vehicle trains locally and only shares model updates (gradients) with a central server, reducing data transmission and protecting user privacy.

**Related:** Machine Learning, Edge AI, Privacy, Data Exfiltration

### Fee

**Full Name:** Flash EEPROM Emulation

**Category:** AUTOSAR

An AUTOSAR Basic Software module emulating EEPROM behavior over flash memory, managing wear leveling, garbage collection, and data block management for secure persistent storage of configurations and credentials.

**Related:** AUTOSAR EA, AUTOSAR NvM, Secure Storage

### FFI

**Full Name:** Foreign Function Interface

**Category:** Security

A mechanism allowing programs to call functions written in other languages.

### FIBEX

**Full Name:** Field Bus Exchange Format

**Category:** Automotive Network

An XML-based standard (ASAM MCD-2 NET) for describing in-vehicle communication networks, used alongside DBC and LDF for capturing complete communication system descriptions including timing, topology, and frame layout.

**Related:** DBC, LDF, DBF, ARXML, AUTOSAR

### File and Directory Discovery

**Category:** Attack

An Auto-ISAC attack technique where an adversary enumerates files and directories on a compromised vehicle system to identify sensitive data, configuration files, software versions, and potential privilege escalation vectors.

**Related:** System Information Discovery, Software Discovery, Penetration Testing, Privilege Escalation

### File System

**Category:** Operating System

The OS component managing how data is stored, organized, and accessed on storage media; automotive file systems (UBIFS, ext4, squashfs, JFFS2) must balance reliability, wear-leveling, power-fail safety, and read/write performance for ECUs with limited flash storage.

**Related:** Kernel, Device Driver, Virtual Memory, Sysfs

### FIM

**Full Name:** Function Inhibition Manager

**Category:** AUTOSAR

An AUTOSAR Basic Software module that inhibits specific vehicle functions based on conditions detected by DEM events, acting as a safety-security co-engineering mechanism to disable compromised features.

**Related:** AUTOSAR DEM, Functional Safety, Fault Management

### FIPS 140

**Full Name:** FIPS 140 — Security Requirements for Cryptographic Modules

**Category:** Standards

A U.S. federal standard specifying security requirements for cryptographic modules used to protect sensitive information, adopted by the automotive industry for validating HSMs and secure hardware used in ECUs and V2X systems.

**Related:** NIST, HSM, ISO 19790, Cryptography, FIPS 140-3

### Firewall

**Category:** Network

A system that controls incoming and outgoing network traffic based on security rules.

### Firewall Bypass

**Category:** Attack

Techniques used to circumvent firewall restrictions.

### Firewall Rule Injection

**Category:** Attack

Insertion of malicious rules into firewall configuration.

### Firmware

**Category:** Hardware Security

Software embedded in hardware devices such as ECUs that controls system behavior.

### Firmware Analysis

**Category:** Reverse Engineering

The process of analyzing firmware to understand behavior and vulnerabilities.

### Firmware Attack

**Category:** Attack

An attack targeting firmware to gain persistent control over a device.

### Firmware Backdoor

**Category:** Hardware Security

Hidden functionality embedded in firmware allowing unauthorized access.

### Firmware Dump

**Category:** Reverse Engineering

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

### Firmware Reflash

**Category:** Diagnostics

The process of rewriting firmware to a device or ECU.

### Firmware Rollback Attack

**Category:** Attack

Forcing a system to downgrade to a vulnerable firmware version.

### Firmware Signing

**Category:** Security

Digital signing of firmware to ensure authenticity and integrity.

### Firmware Verification

**Category:** Boot Security

Validation of firmware before execution.

### Firmware Vulnerability

**Category:** Vulnerability

A security weakness in embedded firmware running on automotive ECUs, including memory corruption bugs, backdoors, hardcoded credentials, improper cryptographic implementations, and logic flaws; firmware vulnerabilities can be exploited through OTA update interception, physical debugging, or network-based attacks against connected ECUs.

**Related:** OTA Vulnerability, Bootloader Vulnerability, Secure Boot, Firmware Modification, Firmware Extraction

### Flash Bootloader

**Category:** Boot Security

A specialized bootloader that resides in a protected region of ECU flash memory and manages firmware programming, verification, and activation via in-vehicle network protocols (CAN, LIN, FlexRay, Ethernet). Flash bootloaders typically operate in a diagnostic session (e.g., UDS 0x34-0x36 routine) and implement security mechanisms including cryptographic signature verification, rollback protection, and secure diagnostic access authentication to prevent unauthorized firmware modifications.

**Related:** UDS, CAN Bootloader, SBL, SecOC, OTA, Firmware Signing, Rollback Protection, Authorized Firmware

### Flash Dump

**Category:** Reverse Engineering

Extraction of flash memory contents for analysis.

### Flash Memory

**Category:** Hardware Security

**Related:** Firmware

Non-volatile memory used in ECUs to store firmware and data.

### Flash Reprogramming

**Category:** Diagnostics

Updating firmware stored in flash memory.

### Flash Wear Leveling

**Category:** Hardware Security

**Related:** Flash Memory

A technique used to extend flash memory lifespan by distributing writes.

### Fleet Management System

**Category:** Vehicle Architecture

A system for managing and monitoring vehicle fleets.

### Fleet Telemetry

**Category:** Connectivity

Real-time data collected from multiple vehicles in a fleet.

### FlexRay

**Category:** Network

A deterministic, fault-tolerant vehicle bus protocol for safety-critical applications such as X-by-Wire, offering higher bandwidth and redundancy compared to CAN.

**Related:** CAN, LIN, Automotive Ethernet

### Flow Control

**Category:** Network

Mechanisms used to regulate data transmission rates between systems.

### Flow Control Attack

**Category:** Attack

Manipulating flow control mechanisms to cause denial of service or data loss.

### FMEA

**Full Name:** Failure Mode and Effects Analysis

**Category:** Functional Safety

A systematic method for identifying potential failure modes in a system, assessing their effects and causes, and prioritizing mitigating actions. Used in both ISO 26262 functional safety and cybersecurity analysis.

**Related:** ISO 26262, HARA, HAZOP, FTA, RPN

### FMVSS

**Full Name:** Federal Motor Vehicle Safety Standards

**Category:** Standards

U.S. Federal Motor Vehicle Safety Standards, mandatory regulations administered by NHTSA governing the safety of vehicles sold in the United States.

**Related:** WP.29, GB 44495, ECE R10

### Forensics Analysis

**Category:** Intrusion Detection

The process of analyzing system artifacts to reconstruct security incidents.

### Format String Vulnerability

**Category:** Vulnerability

A vulnerability where user-controlled input is passed as the format string argument to printf() or similar functions, allowing arbitrary memory read/write; in automotive IVI and telematics systems, format string bugs in log handling or diagnostic output can leak stack data or achieve code execution.

**Related:** Memory Corruption, Information Disclosure, Code Execution, Untrusted Input Handling

### Forwarding ECU

**Category:** ECU

An ECU responsible for routing messages between network segments.

### FOTA

**Full Name:** Firmware Over-the-Air

**Category:** OTA

Remote firmware update mechanism over wireless or network connections.

### FPD-Link

**Category:** Vehicle Architecture

A high-speed serial interface technology by Texas Instruments for transmitting video, audio, and control data over a single coaxial or twisted-pair cable at multiple Gbps; widely used in automotive camera and display applications as a SerDes solution connecting ADAS cameras and IVI displays to domain controllers, with forward error correction and HDCP encryption for link security.

**Related:** SerDes, GMSL, LVDS, Camera ECU, ADAS Domain Controller

### Frame Injection

**Category:** Attack

Injection of malicious frames into CAN, Ethernet, or LIN networks.

### Frame Replay

**Category:** Attack

Re-sending captured network frames to manipulate system behavior.

### Frame Sniffing

**Category:** Reverse Engineering

Capturing communication frames from vehicle networks.

### Frame Spoofing

**Category:** Attack

Forging network frames to impersonate legitimate ECUs.

### Frame Timing Manipulation

**Category:** Attack

Altering message timing to exploit ECU synchronization logic.

### FreeRTOS

**Category:** Operating System

A popular open-source real-time operating system kernel for embedded devices; widely used in automotive ECUs for sensor processing, actuator control, and communication tasks due to its small footprint, deterministic scheduling, and low memory requirements.

**Related:** RTOS, OSEK/VDX, ThreadX, Zephyr, ECU

### Frequency Hopping

**Category:** Connectivity

A technique used in wireless communication to reduce interception and interference.

### FRIDA

**Full Name:** Dynamic Instrumentation

**Category:** Security Tool

A cross-platform dynamic instrumentation toolkit allowing runtime code injection, function hooking, and process introspection on Android, iOS, Linux, and Windows; used in automotive security for analyzing IVI applications, bypassing SSL pinning, and reverse engineering connected vehicle telematics binaries.

**Related:** Reverse Engineering, IVI, Android Security, Dynamic Analysis, API Security

### FTA

**Full Name:** Fault Tree Analysis

**Category:** Functional Safety

A top-down analytical method used to identify causes of system failures.

### FTTI

**Full Name:** Fault Tolerant Time Interval

**Category:** Functional Safety

The maximum time span during which a vehicle system can operate with a fault before the safety goal is violated, defined per ISO 26262; determines the urgency required for fault detection, diagnosis, and safe-state transition in automotive systems.

**Related:** ISO 26262, ASIL, Fault Tolerance, Functional Safety

### Full Virtualization

**Category:** Virtualization

A virtualization approach providing complete hardware emulation allowing unmodified guest OSes to run; in automotive, used for IVI and infotainment VMs where hardware-acceleration (GPU, video codec) is available via device passthrough or para-virtualized drivers.

**Related:** Para-Virtualization, Hardware-Assisted Virtualization, Hypervisor, KVM

### Function Hook Injection

**Category:** Attack

Injecting hooks into system functions to alter execution flow.

### Function Hooking

**Category:** Reverse Engineering

Intercepting function calls to modify or observe behavior.

### Function Safety Mechanism

**Category:** Functional Safety

Mechanisms that ensure system functions meet safety requirements.

### Functional Decomposition

**Category:** Vehicle Architecture

Breaking system functions into smaller components for analysis or design.

### Functional Domain Architecture

**Category:** Vehicle Architecture

The classic domain-based E/E architecture that groups vehicle functions into domains (powertrain, chassis, body, infotainment, ADAS/autonomous driving), each with dedicated ECUs or domain controllers communicating via domain-specific gateways; the dominant architecture before the shift to zonal and centralized paradigms.

**Related:** Domain Centralized Architecture, E/E Architecture, Distributed ECU Architecture, Central Computing Architecture, Domain Controller ECU

### Functional Safety

**Full Name:** Functional Safety (FuSa)

**Category:** Functional Safety

A system-level discipline ensuring that electrical/electronic systems operate safely in the presence of faults, defined by ISO 26262 for road vehicles with ASIL levels A through D.

**Related:** ISO 26262, ASIL, FMEA, Safety Goal, ISO 21448

### Functional Testing

**Category:** Security Architecture

Testing system functionality against expected behavior.

### Fuzzer

**Category:** Security Tool

A tool used to perform fuzz testing.

### Fuzzing

**Category:** Penetration Testing

An automated technique that sends random or malformed inputs to detect vulnerabilities.

### Fuzzing Campaign

**Category:** Penetration Testing

**Related:** Fuzzing

A structured fuzzing operation targeting specific systems or protocols.

### Fuzzing Coverage

**Category:** Penetration Testing

**Related:** Fuzzing

Measurement of how much of the system is exercised during fuzzing.

### Fuzzing Engine

**Category:** Security Tool

Core component that generates and mutates test inputs.

### Fuzzing Target

**Category:** Penetration Testing

**Related:** Fuzzing

The system, interface, or protocol being tested by fuzzing.

## G

### Gateway Bypass

**Category:** Attack

A technique used to circumvent gateway filtering rules and access restricted vehicle networks.

### Gateway Diagnostic Bypass

**Category:** Attack

Bypassing gateway restrictions to access diagnostic services.

### Gateway ECU

**Category:** ECU

An ECU responsible for routing, filtering, and controlling communication between different in-vehicle network domains.

**Related:** Domain Controller, CAN Gateway

### Gateway Firewall

**Category:** Network

A firewall implemented on or within a gateway ECU to enforce communication policies.

### Gateway IDS

**Category:** Intrusion Detection

Intrusion detection system deployed at vehicle gateways.

### Gateway Isolation Failure

**Category:** Vulnerability

Failure in separating communication domains through gateway systems.

### Gateway Load Balancing

**Category:** Vehicle Architecture

Distribution of network traffic across multiple gateway ECUs.

### Gateway Protocol Translation

**Category:** Network

Translation of communication between different in-vehicle protocols.

### Gateway Runtime Monitoring

**Category:** Intrusion Detection

Real-time observation of gateway ECU behavior for anomalies.

### Gateway Secure Boot

**Category:** Boot Security

Ensuring gateway ECU firmware integrity during boot process.

### Gateway Traffic Manipulation

**Category:** Attack

Altering or rerouting traffic passing through vehicle gateways.

### GATT

**Full Name:** Generic Attribute Profile

**Category:** Connectivity

A BLE protocol defining how data is structured and exchanged.

### GATT Exploit

**Category:** Attack

Exploitation of vulnerabilities in BLE GATT services.

### GB 38031-2020

**Category:** Standards

Chinese mandatory national standard specifying safety requirements for traction batteries used in electric vehicles, covering electrical, mechanical, and thermal safety.

**Related:** EV Safety, Battery Safety

### GB 44495

**Full Name:** 整车信息安全技术要求

**Category:** Standards

A Chinese national standard specifying information security technical requirements for complete vehicles, covering cybersecurity governance, protection measures, and verification methods for intelligent connected vehicles.

**Related:** UN R155, GB/T 40856, GB/T 40861, CSMS, VTA

### GB 44495-2024

**Full Name:** 汽车整车信息安全技术要求

**Category:** Standards

Chinese mandatory national standard specifying technical requirements for vehicle-level information security, covering external communication, in-vehicle network, and data security. Effective from January 1, 2026.

**Related:** ISO 21434, UN R155, GB/T 40861

### GB 44496-2024

**Full Name:** 汽车软件升级通用技术要求

**Category:** Standards

Chinese mandatory national standard specifying general technical requirements for vehicle software updates, including update package security, rollback mechanisms, and failure handling. Effective from January 1, 2026.

**Related:** UN R156, ISO 24089, OTA

### GB 44497-2024

**Full Name:** 智能网联汽车 自动驾驶数据记录系统技术要求

**Category:** Standards

Chinese mandatory national standard specifying technical requirements for automated driving data recording systems in intelligent connected vehicles.

**Related:** Autonomous Driving, Data Security

### GB/T 20234

**Category:** Standards

Chinese recommended national standard for electric vehicle conductive charging connection systems, defining AC and DC charging connector interfaces and pinouts.

**Related:** GB/T 27930, CCS, CHAdeMO

### GB/T 27930

**Category:** Standards

Chinese recommended national standard defining the communication protocol between EV battery management systems and off-board chargers, based on CAN communication with 29-bit extended frames.

**Related:** GB/T 20234, DIN 70121, ISO 15118

### GB/T 32960

**Category:** Standards, Connectivity

Chinese recommended national standard for electric vehicle remote service and management systems, defining data collection, transmission, and management requirements for EV monitoring.

**Related:** GB/T 40855, JT/T 808, NGTP

### GB/T 40855-2021

**Full Name:** 电动汽车远程服务与管理系统信息安全技术要求

**Category:** Standards

Chinese recommended national standard specifying information security technical requirements and test methods for electric vehicle remote service and management systems.

**Related:** GB 44495, EV Connectivity

### GB/T 40856-2021

**Full Name:** 车载信息交互系统信息安全技术要求

**Category:** Standards

Chinese recommended national standard specifying information security technical requirements and test methods for vehicle information interaction systems.

**Related:** GB 44495, V2X

### GB/T 40857-2021

**Full Name:** 汽车网关信息安全技术要求

**Category:** Standards

Chinese recommended national standard specifying information security technical requirements and test methods for vehicle gateways.

**Related:** GB 44495, Gateway ECU

### GB/T 40861-2021

**Full Name:** 汽车信息安全通用技术要求

**Category:** Standards

Chinese recommended national standard specifying general technical requirements for automotive information security, providing a foundational framework for vehicle cybersecurity.

**Related:** GB 44495, ISO 21434

### GB/T 41871-2022

**Full Name:** 信息安全技术 汽车数据处理安全要求

**Category:** Standards

Chinese recommended national standard specifying security requirements for vehicle data processing, covering data collection, storage, transmission, and use.

**Related:** GDPR, Data Security

### GDPR

**Full Name:** General Data Protection Regulation

**Category:** Security

A comprehensive EU regulation on data protection and privacy that applies to vehicle manufacturers and service providers processing personal data of EU citizens, including vehicle telemetry and location data.

**Related:** Privacy, PII, Data Security, CCPA, PIPL

### Generative AI

**Category:** AI

AI systems capable of generating new content (text, images, code, synthetic sensor data); automotive applications include synthetic data generation for ADAS training, LLM-based in-vehicle voice assistants, automated test case generation, and simulation scenario creation.

**Related:** LLM, GAN (Generative Adversarial Network), Sim-to-Real, Data Augmentation

### Generic System Image

**Full Name:** GSI

**Category:** Android

A pure Android system image built from AOSP source code that can boot on any Treble-compliant device without vendor modifications. GSIs are used for app compatibility testing, CTS/VTS certification, and Android Automotive development, providing a baseline system image that validates the vendor interface compliance of automotive platforms.

**Related:** Treble, AOSP, VTS, Project Mainline, VINTF

### GENIVI/COVESA

**Category:** Standards

An industry alliance (now COVESA - Connected Vehicle Systems Alliance) developing open standards for in-vehicle infotainment, connectivity, and vehicle software architecture.

**Related:** AUTOSAR, AGL, Android Automotive

### Geo-Based Access Control

**Category:** Security Architecture

Access control based on geographic location constraints.

### Geofencing

**Category:** Vehicle Security

Restricting vehicle functionality based on geographic location.

### Geofencing Bypass

**Category:** Attack

Circumventing location-based restrictions in vehicle systems.

### Gesture Recognition Security

**Category:** Attack

Security concerns for in-vehicle gesture control, including sensor spoofing, adversarial gesture manipulation, and side-channel inference of driver intentions leading to unintended commands.

**Related:** HMI, IVI, Sensor Spoofing

### GGSN

**Full Name:** Gateway GPRS Support Node

**Category:** Connectivity

A network node in GSM/GPRS architecture that provides internetworking between the mobile cellular network and external packet data networks; relevant to automotive telematics backend connectivity.

**Related:** GPRS, GSM, TCU, BTS

### Ghidra

**Category:** Security Tool

An open-source reverse engineering framework developed by the NSA, featuring a powerful decompiler, scriptable Python API, and multi-architecture support (ARM, x86, MIPS, RISC-V, TriCore); widely used in automotive firmware analysis for binary patching, vulnerability hunting, and ECU software reverse engineering.

**Related:** Reverse Engineering, IDA Pro, Binary Ninja, radare2, Firmware Analysis

### GID

**Full Name:** Group Identifier

**Category:** IAM

Identifier used to manage group-based permissions.

### Global ECU Coordination

**Category:** Vehicle Architecture

Coordination mechanism across multiple ECUs in distributed systems.

### Global Key Management

**Category:** Cryptography

**Related:** Cryptographic Key

System for managing cryptographic keys across distributed vehicle ecosystems.

### Global Threat Intelligence

**Category:** Security Architecture

Aggregated cybersecurity intelligence across vehicles and cloud platforms.

### Global Vehicle Platform

**Category:** Vehicle Architecture

A unified software/hardware platform used across multiple vehicle models.

### GMSL

**Full Name:** Gigabit Multimedia Serial Link

**Category:** Vehicle Architecture

A high-speed serial link technology developed by Maxim Integrated (now Analog Devices) for transmitting video, audio, and control data over a single cable or fiber, widely used in automotive camera, display, and infotainment systems; presents an attack surface for sensor data injection.

**Related:** FPD-Link, MIPI CSI-2, Camera ECU, Display ECU

### GNSS

**Category:** Connectivity

Global Navigation Satellite Systems including GPS, Galileo, GLONASS, BeiDou.

### GNSS Spoofing

**Category:** Attack

Manipulating satellite navigation signals to alter perceived location.

### Google Automotive Services

**Full Name:** GAS

**Category:** Android

A suite of Google mobile services licensed to vehicle manufacturers for AAOS head units, including Google Maps for Automotive (with EV charging routing), Google Assistant (for vehicle functions), Google Play for Automotive (with driving-mode filtering), and Google Cast; GAS requires OEM compliance with Android automotive compatibility and security requirements.

**Related:** AAOS, Android Automotive App, Android Automotive Security Model, Car Service, Android Permission Model

### Governance Policy

**Category:** Security Architecture

Rules and frameworks governing automotive cybersecurity management.

### GPGPU

**Full Name:** General-Purpose GPU Computing

**Category:** Hardware Security

Using GPU for non-graphics computation, often used in AI or ADAS workloads.

### GPRS

**Full Name:** General Packet Radio Service

**Category:** Connectivity

A packet-oriented mobile data service for GSM networks providing IP connectivity for vehicle telematics control units (TCUs); superseded by 3G/4G/5G but still used in legacy vehicles.

**Related:** GSM, GGSN, TCU, BTS, Cellular Network Attack

### GPRS Exploit

**Category:** Attack

Exploitation of packet data services in GSM networks.

### GPS

**Full Name:** Global Positioning System

**Category:** Connectivity

A satellite-based positioning system used in vehicles for navigation and tracking.

### GPS Jamming

**Category:** Attack

Blocking or disrupting GPS signals to degrade navigation accuracy.

### GPS Spoofing

**Category:** Attack

An attack that transmits fake GPS signals to mislead vehicle positioning systems.

### Gpt

**Full Name:** General Purpose Timer

**Category:** AUTOSAR

An AUTOSAR MCAL module providing hardware timer abstraction for OS scheduling, time-triggered communication, and security timing measurements including side-channel attack counter timing detection.

**Related:** AUTOSAR MCAL, AUTOSAR StbM, Side Channel

### gPTP

**Full Name:** Generalized Precision Time Protocol (IEEE 802.1AS)

**Category:** Automotive Network

An IEEE 802.1AS standard for precise time synchronization over Ethernet networks, essential for time-sensitive networking (TSN) in automotive applications such as ADAS sensor fusion and audio/video synchronization.

**Related:** Ethernet TSN, IEEE 1722, PTP, AUTOSAR StbM, Automotive Ethernet

### GPU

**Full Name:** Graphics Processing Unit

**Category:** Hardware Security

A processor used for rendering graphics and accelerating compute tasks in IVI systems.

### GPU Driver Exploit

**Category:** Attack

Exploitation of vulnerabilities in GPU driver software.

### GPU Memory Leak

**Category:** Vulnerability

**Related:** Isolation Failure

Unauthorized access to GPU memory due to isolation failures.

### Graph Security Analysis

**Category:** Intrusion Detection

Applying graph theory to analyze relationships between assets, vulnerabilities, and attacks.

### Graph Traversal Attack

**Category:** Threat Modeling

Using graph traversal techniques to identify multi-stage attack paths.

### Graph-Based Attack Modeling

**Category:** Threat Modeling

Using graph structures to represent multi-step attack paths in complex systems.

### Ground Truth Validation

**Category:** Penetration Testing

Verification of system behavior against known correct states.

### gRPC

**Category:** Network

A high-performance RPC framework by Google using Protocol Buffers and HTTP/2, increasingly used in vehicle-cloud communication and service-oriented in-vehicle microservices.

**Related:** API Gateway, Cloud ECU Communication, SOA

### GSM

**Full Name:** Global System for Mobile Communications

**Category:** Network Security

A second-generation (2G) digital cellular network standard used globally for mobile voice and data communications, relevant to vehicle telematics and TCU connectivity.

**Related:** TCU, eSIM, IMSI, BTS, GPRS

### GSM Attack Surface

**Category:** Attack

The set of vulnerabilities exposed in GSM-based communication systems. Exploitation of vulnerabilities in GSM baseband firmware.

### GSM Interception

**Category:** Attack

Intercepting GSM communication between vehicle and infrastructure.

### GSM SIM Cloning

**Category:** Attack

Cloning SIM identity to impersonate a legitimate device.

### GStreamer Pipeline Security

**Category:** Security

Security analysis of media processing pipelines used in IVI systems.

### Guest Isolation Bypass

**Category:** Virtualization

Breaking isolation between guest OS instances.

### Guest Memory Isolation

**Category:** Virtualization

Isolation of memory between virtual machines in automotive systems.

### Guest OS

**Full Name:** IVI Virtualization

**Category:** Operating System

A virtualized operating system running inside IVI or cockpit systems.

## H

### HackRF One

**Category:** Security Tool

An open-source software-defined radio peripheral by Great Scott Gadgets operating from 1 MHz to 6 GHz, used in automotive security research for cellular network analysis, GPS spoofing, and RF signal capture.

**Related:** SDR, BladeRF, RTL-SDR, USRP, GSM, Rogue BTS

### HAL

**Full Name:** Hardware Abstraction Layer

**Category:** Android

A software layer providing standardized interfaces between Android framework components and hardware.

### Handoff Attack

**Category:** Attack

Exploiting handover mechanisms between cellular base stations.

### Handoff Failure Attack

**Category:** Attack

Disrupting cellular network handoff processes to cause service interruption.

### HARA

**Full Name:** Hazard Analysis and Risk Assessment

**Category:** Functional Safety

A systematic methodology defined in ISO 26262 for identifying hazards, assessing their risk, and determining ASIL levels for automotive safety-critical functions, complementary to cybersecurity TARA.

**Related:** ISO 26262, TARA, FMEA, ASIL, HAZOP

### Hardcoded Credentials

**Category:** Vulnerability

A vulnerability where authentication secrets (passwords, API keys, certificates, symmetric keys) are embedded in source code, firmware binaries, or configuration files; common in automotive ECUs where diagnostic passwords, telematics API tokens, or cloud service credentials are hardcoded in read-only memory or bootloader code.

**Related:** Default Credentials, Unsecured Credentials, Insecure Storage, Weak Authentication

### Hardware Event Logging

**Category:** Intrusion Detection

Recording hardware-level events for security analysis.

### Hardware Root Certificate

**Category:** Hardware Security

A trusted certificate stored in hardware used for boot and authentication.

### Hardware Root of Trust

**Category:** Hardware Security

A hardware-anchored trust foundation that provides immutable identity, secure boot measurement, attestation, and cryptographic key storage, typically implemented as immutable boot ROM, PUF, or dedicated secure element; in automotive systems, the hardware root of trust anchors the entire secure boot chain, ECU identity verification, and secure diagnostic access.

**Related:** Root of Trust, Secure Boot, PUF, HSM, TPM

### Hardware Security

**Category:** Hardware Security

The protection of vehicle electronic hardware against physical attacks, including fault injection, side-channel analysis, tampering, and reverse engineering, complemented by secure hardware design and countermeasures.

**Related:** HSM, TEE, Secure Element, Fault Injection, SAE J3101

### Hardware Security Enforcement

**Category:** Security Architecture

Mechanisms enforcing security policies at hardware level.

### Hardware Timing Attack

**Category:** Attack

Exploiting timing differences in hardware operations to extract secrets.

### Hardware Trace Port

**Category:** Reverse Engineering

Hardware interface used for tracing system execution.

### Hardware-Assisted Virtualization

**Category:** Virtualization

CPU hardware extensions (ARM Virtualization Extensions / VHE, Intel VT-x, AMD-V) that accelerate hypervisor performance by providing dedicated privilege levels for guest OS and hypervisor; essential for automotive mixed-criticality virtualization enabling native-speed execution of AUTOSAR and RTOS alongside Linux.

**Related:** Hypervisor, Type-1 Hypervisor, KVM, ARM TrustZone, Memory Virtualization

### Hash Collision Attack

**Category:** Cryptography

Finding two inputs that produce the same hash output.

### Hashcat

**Category:** Security Tool

The world's fastest password recovery and hash cracking tool supporting GPU-accelerated attack modes (brute-force, dictionary, rule-based, mask); used in automotive security for testing diagnostic security access seed-key algorithms, cracking signed firmware hashes, and auditing password strength in vehicle systems.

**Related:** Brute Force Attack, Cryptographic Key, Password Cracking, Security Access

### HAZOP

**Full Name:** Hazard and Operability Study

**Category:** Functional Safety

A structured and systematic technique for examining a system to identify potential hazards and operability problems, using guide-word-based deviation analysis on design parameters; applied in automotive safety and cybersecurity analysis to uncover failure modes.

**Related:** HARA, FMEA, ISO 26262, TARA

### Head Unit

**Full Name:** IVI Head Unit

**Category:** ECU

Central infotainment system in a vehicle.

### Headless ECU

**Category:** ECU

**Related:** Control Unit

An ECU without direct user interface, typically backend control units.

### Heap Exhaustion

**Category:** Vulnerability

A denial-of-service vulnerability caused by allocating memory until the heap is exhausted, leading to allocation failures, service crashes, or system instability; in automotive systems, uncontrolled heap growth in IVI browsers, telematics message handlers, or camera processing pipelines can disable critical functions.

**Related:** Resource Exhaustion, Stack Exhaustion, Denial of Service, Resource Leak

### Heap Memory

**Category:** Operating System

A dynamically allocated memory region used for runtime data structures; automotive C/C++ embedded software must carefully manage heap allocation to avoid fragmentation, out-of-memory failures, and memory leaks that could compromise ECU reliability.

**Related:** Stack Memory, Virtual Memory, Memory Corruption, RTOS

### Heap Overflow

**Category:** Vulnerability

A buffer overflow vulnerability occurring in dynamically allocated heap memory, where writing beyond the allocated region corrupts adjacent heap metadata or objects; in automotive C/C++ firmware, heap overflows in message parsers, communication stacks, or sensor data processing can lead to code execution or privilege escalation.

**Related:** Buffer Overflow, Memory Corruption, Code Execution, Heap Exhaustion, Use-After-Free

### HEAVENS

**Category:** Threat Modeling

HEAling Vulnerabilities to ENhance Software Security and Safety, a threat analysis model combining STRIDE with CIA triad assessment for automotive E/E systems, mapping threats to security properties and impact levels.

**Related:** STRIDE, TARA, EVITA, Attack Tree

### Heterogeneous ECU Architecture

**Category:** Vehicle Architecture

Architecture combining different types of processors and ECUs.

### Hicar

**Category:** Connectivity

A smartphone projection technology developed by Huawei for integrating mobile devices with vehicle infotainment systems, widely used in Chinese-market vehicles.

**Related:** CarPlay, Android Auto, CarLife

### HIDL

**Category:** Android

HAL Interface Definition Language (HIDL), the inter-process communication (IPC) mechanism in Android Treble architecture for defining stable interfaces between the Android framework and vendor HAL implementations; in AAOS, HIDL is used for the Vehicle HAL (VHAL), audio HAL, and graphics HAL; replaced by AIDL (AIDL HAL) in newer Android versions.

**Related:** Android Vehicle HAL, Android Automotive Security Model, AAOS, Car HAL

### High-Speed CAN Gateway

**Category:** Network

Gateway handling high-speed CAN communication between ECUs.

### HKDF

**Full Name:** HMAC-based Key Derivation Function

**Category:** Cryptography

A standardized key derivation function (RFC 5869) using HMAC, widely used in automotive secure communication protocols to derive session keys from a master secret.

**Related:** HMAC, Key Derivation

### HMAC

**Full Name:** Hash-based Message Authentication Code

**Category:** Cryptography

A cryptographic construction that combines a cryptographic hash function with a secret key to produce a message authentication code, providing both data integrity and authenticity verification.

**Related:** CMAC, Message Authentication Code, SHA-256, HKDF, KDF

### HMI

**Full Name:** Human-Machine Interface

**Category:** Vehicle Architecture

The user-facing interface layer in a vehicle, including touchscreens, buttons, voice control, and instrument clusters. HMI security involves ensuring input integrity and preventing UI-based attacks.

**Related:** IVI, Digital Cockpit, Gesture Recognition, Voice Control, Input Capture

### HMI Display Injection

**Category:** Attack

Manipulating vehicle display output to show false information.

### HMI Firmware

**Category:** ECU

Firmware controlling human-machine interface components.

### HMI Injection Attack

**Category:** Attack

Injection of malicious content into vehicle displays or control interfaces.

### HMI Spoofing

**Category:** Attack

Manipulating UI elements to mislead users.

### HNI

**Full Name:** Home Network Identity

**Category:** IAM

A unique identifier combining MCC (Mobile Country Code) and MNC (Mobile Network Code) that identifies a specific mobile network operator; used in vehicle TCU SIM provisioning and IMSI-based attacks.

**Related:** MCC, MNC, IMSI, TCU, GSM, MCC, MNC

### Homologation

**Category:** Standards

The process by which a vehicle manufacturer obtains official approval from a regulatory authority certifying that a vehicle type meets all applicable safety, environmental, and cybersecurity requirements for a specific market.

**Related:** VTA, UN R155, CSMS

### Host ECU

**Category:** ECU

Primary ECU hosting multiple services or virtualized systems.

### Host Isolation Bypass

**Category:** Virtualization

Breaking isolation between host system and guest environments.

### HPC

**Full Name:** High-Performance Computer

**Category:** Vehicle Architecture

A powerful centralized computing platform in modern vehicles that consolidates functions from multiple ECUs, enabling ADAS, autonomous driving, and software-defined vehicle architectures with high processing requirements.

**Related:** Domain Controller, SDV, Zonal Architecture, ADAS, E/E Architecture

### HPSE

**Full Name:** Hardware Protected Security Environment

**Category:** Hardware Security

A hardware-isolated security environment providing a trusted execution context within automotive ECUs, offering protected storage, cryptographic services, and secure execution isolated from the main processor; conceptually similar to ARM TrustZone and used as a foundation for secure boot and key management.

**Related:** HSM, TrustZone, Secure Element, Hardware Root of Trust, ARM TrustZone

### HSM

**Full Name:** Hardware Security Module

**Category:** Hardware Security

A dedicated hardware component that provides cryptographic key generation, secure key storage, and accelerated cryptographic operations, protecting sensitive material from software-level attacks and physical tampering.

**Related:** SHE, TPM, Secure Element, EVITA, FIPS 140

### HSM Firmware

**Category:** Hardware Security

**Related:** Firmware, Secure Storage

Firmware running inside the HSM responsible for cryptographic operations and secure storage.

### HTA

**Full Name:** Hardware Trust Anchor

**Category:** Hardware Security

A hardware component serving as the root of trust in an automotive ECU, providing immutable security functions such as secure boot verification, key storage, and cryptographic operations that cannot be bypassed by software; the foundation upon which the chain of trust is built.

**Related:** Hardware Root of Trust, HSM, Secure Boot, eFuse, TPM

### HTTP API Exploit

**Category:** Attack

Exploitation of vulnerabilities in HTTP-based APIs.

### HTTP Request Injection

**Category:** Attack

Injecting malicious payloads into HTTP requests.

### HTTPS Interception

**Category:** Attack

Intercepting encrypted HTTPS traffic via MITM techniques.

### Hybrid Communication Stack

**Category:** Network

A communication architecture combining multiple protocols (CAN, Ethernet, LIN).

### Hybrid ECU

**Category:** ECU

An ECU that combines multiple functional domains such as infotainment, ADAS, and connectivity.

### Hybrid Security Model

**Category:** Security Architecture

A model combining hardware, software, and cloud security mechanisms.

### Hypervisor

**Category:** Virtualization

A software layer that creates and manages multiple virtual machines on a single hardware platform.

### Hypervisor Escape

**Category:** Virtualization

**Related:** Hypervisor

An attack that breaks isolation between virtual machines and the hypervisor.

### Hypervisor Memory Isolation

**Category:** Virtualization

Mechanisms ensuring memory separation between virtual machines.

### Hypervisor Security Domain

**Category:** Security Architecture

Isolated execution domain managed by a hypervisor.

## I

### I2C

**Full Name:** Inter-Integrated Circuit

**Category:** Network

A short-distance, two-wire serial communication protocol used for connecting low-speed peripherals (sensors, EEPROMs, GPIO expanders) to ECUs in automotive systems; lacks built-in security mechanisms, making it a target for bus sniffing and data manipulation.

**Related:** SPI, CAN, LIN, Sensor Bus

### IAM

**Full Name:** Identity and Access Management

**Category:** Security Architecture

A framework for managing digital identities and controlling access to resources in automotive and cloud systems.

### IATF 16949

**Full Name:** Quality Management System for Automotive

**Category:** Standards

The International Automotive Task Force quality management system standard for automotive production and service parts, harmonizing national standards; while primarily quality-focused, its requirements for defect prevention and risk management intersect with cybersecurity and functional safety.

**Related:** ISO 9001, ISO 26262, ASPICE, Quality Management

### ICCOA

**Full Name:** Intelligent Connected Car Open Alliance

**Category:** Standards

The Intelligent Connected Car Open Alliance, a Chinese industry alliance developing standards for smartphone-to-vehicle connectivity, digital key, and cross-platform interoperability.

**Related:** CCC, CarPlay, Android Auto

### ICSim

**Full Name:** Instrument Cluster Simulator

**Category:** Security Tool

An open-source instrument cluster simulation environment that works with SocketCAN to emulate vehicle dashboard displays and CAN bus signals; widely used in automotive security education and training for practicing CAN bus attacks in a safe virtual environment.

**Related:** SocketCAN, CAN Bus, can-utils, SavvyCAN, CAN Fuzzing

### IDA Pro

**Category:** Security Tool

A commercial disassembler and debugger by Hex-Rays supporting a wide range of architectures (ARM, x86, TriCore, PPC, RISC-V) with a powerful decompiler; the industry standard for automotive firmware reverse engineering, vulnerability analysis, and binary patch development.

**Related:** Ghidra, Binary Ninja, radare2, Reverse Engineering, Firmware Analysis

### Identity

**Category:** Security Architecture

A unique representation of an entity such as ECU, user, or service within a vehicle system.

### Identity Provisioning

**Category:** Security Architecture

Process of assigning identities to ECUs or devices.

### Identity Spoofing

**Category:** Attack

Impersonating a legitimate identity to gain unauthorized access.

### Identity Verification

**Category:** Security Architecture

**Related:** Identity

Validation of claimed identity against trusted sources.

### IDS

**Full Name:** Intrusion Detection System

**Category:** Intrusion Detection

A security monitoring system that detects and alerts on malicious or anomalous activity within vehicle networks, enabling timely incident response to potential cyberattacks against connected vehicles.

**Related:** IPS, IDSM, CAN, Anomaly Detection, DPI

### IDS Evasion

**Category:** Attack

Methods used to bypass intrusion detection systems.

### IDS for CAN

**Category:** Intrusion Detection

Intrusion detection system designed for CAN bus networks.

### IDSM

**Full Name:** Intrusion Detection System Manager

**Category:** Security Architecture

An AUTOSAR module that manages intrusion detection sensors and security events across ECUs, forwarding detected anomalies to a central security operations center for analysis and response.

**Related:** AUTOSAR, IDS, CAN IDS, SecOC

### IEC 61851

**Category:** Standards

International standard for electric vehicle conductive charging systems, defining general requirements, safety, and PWM-based signaling between charging infrastructure and vehicles.

**Related:** ISO 15118, GB/T 20234, DIN 70121

### IEC 62443

**Full Name:** Industrial Communication Network Security

**Category:** Standards

An international series of standards (ISA/IEC 62443) for industrial communication network and system security, defining security levels (SL 1-4), zones and conduits, secure development lifecycle, and component security requirements; increasingly applied to EV charging infrastructure, V2G communication, and automotive manufacturing OT systems.

**Related:** Zoning, Defense in Depth, NIST CSF, OT Security

### IEEE 1722

**Full Name:** AVTP

**Category:** Standards

IEEE standard for the Audio Video Transport Protocol over IEEE 802 networks, used in automotive Ethernet AVB/TSN for infotainment and camera data streaming.

**Related:** AVB, Ethernet TSN, gPTP, Automotive Ethernet

### IEEE 802.11p

**Category:** Standards, Connectivity

An amendment to the IEEE 802.11 standard for WAVE (Wireless Access in Vehicular Environments), operating on the 5.9 GHz band with up to 1000 m range; the physical layer for DSRC-based V2X communication.

**Related:** DSRC, WAVE, V2X, ITS, VANET

### IFC

**Full Name:** Information Flow Control

**Category:** Security Architecture

A mechanism controlling how data flows between system components.

### IMEI

**Full Name:** International Mobile Equipment Identity

**Category:** Network Security

A unique 15-digit identifier assigned to mobile equipment (including vehicle TCU cellular modems), used for device identification, tracking, and network access control.

**Related:** IMSI, MSISDN, eSIM, TCU, IMEI SV

### Immobilizer

**Category:** Vehicle Security

An anti-theft system that prevents engine start without the presence of an authorized key fob or transponder, using challenge-response authentication over LF/RF (125 kHz / 433 MHz) between the immobilizer ECU and the key; modern immobilizers employ rolling codes or cryptographic authentication (Keeloq, AES) and are a common target for relay attacks and key cloning.

**Related:** Keyless Entry Attack, PEPS, RKE, Keeloq, Relay Attack

### Improper Certificate Validation

**Category:** Vulnerability

A vulnerability where an application fails to properly verify X.509 certificates during TLS/mTLS communication, including missing hostname verification, acceptance of self-signed certificates, ignoring expiration dates, or skipping chain validation; in automotive V2X and telematics, improper validation enables MitM attacks on secure channels.

**Related:** Certificate Validation Failure, Transport Encryption Failure, TLS MITM Attack, PKI

### IMSI

**Full Name:** International Mobile Subscriber Identity

**Category:** Network Security

A unique identifier stored on the SIM card that identifies a mobile subscriber to the cellular network. IMSI catchers can be used to track vehicle TCUs and intercept communications.

**Related:** IMEI, MSISDN, IMSI Catcher, eSIM, HNI

### IMSI Catcher

**Category:** Attack

A device that impersonates a legitimate cellular base station to intercept mobile communications, track device locations, and capture IMSI identifiers from vehicle TCUs and passenger phones.

**Related:** IMSI, BTS, Rogue BTS, Stingray, GSM

### INCA

**Category:** Security Tool

An ECU measurement, calibration, and diagnostic tool by ETAS for parameter optimization and data acquisition, relevant to security assessment of calibration data integrity.

**Related:** CANape, XCP, ECU Calibration

### Incident Response

**Category:** Security Architecture

A structured process for detecting, analyzing, containing, eradicating, and recovering from cybersecurity incidents; in the automotive context, incident response covers vehicle fleet compromise response, OTA patch deployment, forensic analysis of compromised ECUs, and coordination with regulatory authorities (UN R155 CSMS).

**Related:** UN R155, CSMS, Forensic Analysis, OTA, Vulnerability

### Inference Engine

**Category:** AI

A software or hardware component that executes trained machine learning models to produce predictions; optimized inference engines (TensorRT, ONNX Runtime, TFLite, OpenVINO) are critical for real-time automotive perception on resource-constrained ECUs.

**Related:** Edge AI, AI Accelerator, Model Compression, Neural Network Quantization, Deep Learning

### Information Disclosure

**Category:** Vulnerability

A vulnerability that results in unintended exposure of sensitive information to unauthorized parties, including memory contents, stack traces, system configuration, file paths, or personally identifiable information; in automotive IVI and telematics systems, information disclosure can reveal API endpoints, vehicle identifiers, or user data.

**Related:** Sensitive Data Exposure, Memory Disclosure, Information Leakage, Privacy Data

### Information Leakage

**Category:** Vulnerability

Unauthorized disclosure of sensitive data.

### Init Process

**Category:** Operating System

The first userspace process started by the kernel during system boot (PID 1), responsible for initializing system services and launching other processes; in automotive Linux, systemd or BusyBox init manages service startup, dependency ordering, and watchdog supervision.

**Related:** systemd, Kernel, Boot Sequence, Process, Linux

### Initialization Sequence

**Category:** Boot Security

The process of initializing system components during startup.

### Injection Attack

**Category:** Attack

A broad category of attacks that inject malicious input into systems.

### Input Capture

**Category:** Attack

An Auto-ISAC attack technique where an adversary captures user input on in-vehicle HMI systems, including touchscreen gestures, keyboard entries, and voice commands, to harvest PINs, passwords, or user preferences.

**Related:** Input Prompt, Screen Capture, HMI

### Input Prompt

**Category:** Attack

An Auto-ISAC attack technique where an adversary presents deceptive input prompts on vehicle infotainment displays to trick users into entering sensitive information, similar to phishing but delivered through the in-vehicle HMI.

**Related:** Input Capture, HMI, IVI, Phishing

### Input Validation Failure

**Category:** Vulnerability

A security flaw caused by improper validation of input data.

### Insecure Deserialization

**Category:** Vulnerability

**Related:** Code Execution

Processing untrusted serialized data leading to code execution.

### Insecure Storage

**Category:** Vulnerability

A vulnerability where sensitive data (cryptographic keys, credentials, PII, session tokens) is stored without adequate protection mechanisms such as encryption, access control, or integrity verification; in automotive IVI systems, insecure storage in world-readable flash partitions, databases, or log files can expose vehicle telemetry keys and user private data.

**Related:** Cleartext Storage of Sensitive Data, Sensitive Data Exposure, Unsecured Credentials, Hardcoded Credentials

### Instruction Flow Hijacking

**Category:** Attack

Manipulating execution flow of CPU instructions.

### Insufficient Entropy

**Category:** Vulnerability

A vulnerability where cryptographic operations use insufficient random data, resulting in predictable keys, tokens, or session identifiers; common in automotive embedded systems lacking hardware random number generators (HRNG) or TRNGs, where boot-time entropy depletion leads to predictable cryptographic outputs.

**Related:** Weak PRNG, Predictable Random Number Generator, Weak Cryptographic Key, Hardcoded Credentials

### Insufficient Logging

**Category:** Vulnerability

A vulnerability where security-relevant events (authentication failures, privilege escalation attempts, firmware modification, diagnostic access) are not logged or monitored, reducing the ability to detect and respond to security incidents; common in automotive ECUs where flash storage constraints limit audit trail retention.

**Related:** Audit Trail, Log Tampering, Security Misconfiguration, Intrusion Detection

### Integer Overflow or Wraparound

**Category:** Vulnerability

A vulnerability where an arithmetic operation exceeds the maximum (or goes below the minimum) value of an integer type, wrapping around to an unexpected result; in automotive embedded code, integer overflows in buffer size calculations, message length fields, or timing computations can bypass bounds checks or cause denial of service.

**Related:** Integer Underflow, Buffer Overflow, Memory Corruption, Logic Vulnerability, Off-by-One Error

### Integer Underflow

**Category:** Vulnerability

A vulnerability where subtraction produces a result below the integer type minimum, often resulting in a very large unsigned value; in automotive firmware, integer underflows in size calculations, index operations, or loop counters can cause buffer overflows or infinite loops in critical ECUs.

**Related:** Integer Overflow or Wraparound, Buffer Overflow, Memory Corruption, Logic Vulnerability

### Integer Underflow Attack

**Category:** Hardware Security

Exploiting underflow conditions to manipulate program logic.

### Integrity

**Category:** Security

A core security property (one of the CIA triad) ensuring that data and systems are not altered or tampered with in an unauthorized manner, enforced in vehicles through cryptographic checks, secure boot, and secure communication.

**Related:** CIA Triad, Confidentiality, Availability, HMAC, SecOC

### Integrity Check

**Category:** Security

Verification that data or system state has not been altered.

### Integrity Monitoring

**Category:** Intrusion Detection

Continuous observation of system integrity state.

### Integrity Violation

**Category:** Security

A condition where system integrity is compromised.

### Intelligent Cockpit

**Category:** Vehicle Architecture

An integrated HMI combining digital clusters, infotainment, HUD, voice control, and AI personalization, presenting a consolidated attack surface across IVI, telematics, and ADAS systems.

**Related:** IVI, HMI, Android Automotive, ADAS

### Intent

**Category:** Android

A messaging object used to request actions between Android components.

### Interconnect Security

**Category:** Hardware Security

Protection of internal chip or SoC communication pathways.

### Internet Communication

**Category:** Attack

An Auto-ISAC attack technique where an adversary uses internet connectivity (cellular or Wi-Fi) from a compromised vehicle to establish C2 channels, exfiltrate data, or download additional malicious payloads.

**Related:** Cellular Communication, Telematics, C2

### Interrupt

**Full Name:** IRQ

**Category:** Operating System

A hardware signal that temporarily suspends CPU execution to service a peripheral event; in automotive ECUs, interrupts handle time-critical CAN message reception, sensor data acquisition, and watchdog timer expiry with deterministic latency requirements.

**Related:** RTOS, Context Switch, Device Driver, ECU Scheduling

### Interrupt Handling Attack

**Category:** Attack

Exploiting interrupt mechanisms to manipulate system execution.

### Inverter

**Full Name:** Motor Control Unit

**Category:** ECU

An EV/HEV power electronic module that converts DC from the high-voltage battery to AC to drive the traction motor, and vice versa during regenerative braking; controlled by a dedicated MCU running field-oriented control (FOC) or similar algorithms for torque and speed regulation.

**Related:** VCU, BECM, OBC, MCU, HPC

### IOMMU

**Full Name:** Input/Output Memory Management Unit

**Category:** Hardware Security

A hardware unit that restricts DMA access to authorized memory regions, preventing unauthorized peripheral devices from reading or writing system memory; critical for isolating untrusted hardware components in automotive SoCs and virtualized IVI platforms.

**Related:** DMA Attack, SMMU, Hypervisor, Memory Isolation

### IP Spoofing

**Category:** Attack

Forging IP addresses to impersonate another system.

### IP Stack Exploit

**Category:** Vulnerability

**Related:** Exploit

Exploitation of vulnerabilities in TCP/IP stack implementations.

### IPC

**Full Name:** Inter-Process Communication

**Category:** Operating System

Mechanisms allowing processes to communicate within a system.

### IPC Hijacking

**Category:** Attack

Taking control of IPC channels to alter data flow between processes.

### IPC Injection

**Category:** Attack

Injecting malicious messages into IPC communication channels.

### IPC Message Spoofing

**Category:** Attack

Forging IPC messages between processes or subsystems.

### IPC Router Hijacking

**Category:** Attack

Taking control of IPC routing mechanisms between subsystems.

### IpduM

**Full Name:** I-PDU Multiplexer

**Category:** AUTOSAR

An AUTOSAR Basic Software module multiplexing multiple I-PDUs into a single CAN/LIN frame and demultiplexing at the receiver, used in bandwidth-limited networks with integrity verification requirements.

**Related:** AUTOSAR COM, AUTOSAR PDU Router, CAN

### IPS

**Full Name:** Intrusion Prevention System

**Category:** Security Architecture

A system that actively blocks detected malicious activity.

### ISMS

**Full Name:** Information Security Management System

**Category:** Security Architecture

A systematic approach to managing information security risks based on ISO/IEC 27001, establishing policies, procedures, and controls; increasingly relevant to automotive organizations as connected vehicle programs require formalized security governance alongside ISO 21434 and UN R155 compliance.

**Related:** ISO 27001, ISO 21434, CSMS, Risk Management

### ISO 11898

**Category:** Network

International standard defining the CAN physical layer and data link layer, covering high-speed (Part 2) and low-speed fault-tolerant (Part 3) CAN physical layers.

**Related:** CAN, CAN FD, ISO-TP

### ISO 14229

**Full Name:** UDS

**Category:** Diagnostics

**Related:** ISO 14230, ISO 22900, ISO 9141, Diagnostic Service

Unified Diagnostic Services protocol for ECU communication.

### ISO 14230

**Full Name:** KWP2000

**Category:** Diagnostics

Keyword Protocol 2000, a diagnostic communication protocol over K-Line for ECU diagnostics and flashing, predecessor to UDS. Defined in ISO 14230.

**Related:** UDS, ISO 9141, OBD-II, KWP2000, ISO 14229, ISO 22900

### ISO 15118

**Category:** Standards

International standard for vehicle-to-grid (V2G) communication defining secure communication between electric vehicles and charging infrastructure.

**Related:** V2G, Charging Security

### ISO 15408

**Full Name:** Common Criteria

**Category:** Standards

An international standard for IT security evaluation (ISO/IEC 15408), providing a framework for specifying security functional requirements (SFRs) and security assurance requirements (SARs) through Evaluation Assurance Levels (EAL 1-7); used in automotive for evaluating HSMs, secure boot implementations, and TEE security.

**Related:** EAL, HSM, Secure Boot, TEE, ISO 19790

### ISO 19790

**Full Name:** Security Requirements for Cryptographic Modules

**Category:** Standards

An international standard for security requirements for cryptographic modules (ISO/IEC 19790, based on FIPS 140-2), defining four security levels covering cryptographic key management, algorithm validation, tamper protection, and physical security; directly referenced in automotive HSM certification and EVITA project security requirements.

**Related:** FIPS 140, HSM, EVITA, Cryptographic Key, Secure Hardware Extension

### ISO 20077-1

**Full Name:** Extended Vehicle

**Category:** Standards

An ISO standard defining the extended vehicle (ExVe) concept and methodology for remote access to vehicle in-vehicle network services and data via standardized web service interfaces; with critical cybersecurity implications for remote diagnostics, OTA updates, and third-party service access to vehicle data.

**Related:** ExVe, ISO 20078, Remote Diagnostics, OTA, V2N

### ISO 21434

**Full Name:** Road Vehicles — Cybersecurity Engineering

**Category:** Standards

An international standard that specifies cybersecurity engineering requirements for road vehicle electrical and electronic systems throughout the entire vehicle lifecycle, from concept to decommissioning.

**Related:** UN R155, CSMS, ISO/SAE 21434, TARA, ISO 26262

### ISO 21448

**Full Name:** Road Vehicles — Safety of the Intended Functionality

**Category:** Functional Safety

An international standard (SOTIF) addressing safety risks arising from functional insufficiencies and performance limitations of intended functionality (including sensor and AI/ML limitations) rather than from system faults covered by ISO 26262.

**Related:** ISO 26262, SOTIF, Functional Safety, AI Safety, ODD

### ISO 22301

**Full Name:** Business Continuity Management Systems

**Category:** Standards

An international standard for business continuity management systems (BCMS), specifying requirements for establishing, implementing, and improving continuity and recovery capabilities; relevant to automotive cybersecurity incident response, OTA update failover, and ensuring continuous operation of connected vehicle services during cyber attacks.

**Related:** Incident Response, CSMS, Risk Management, Disaster Recovery

### ISO 22900

**Full Name:** MVCI

**Category:** Diagnostics

Modular Vehicle Communication Interface, an international standard defining the interface between diagnostic testers and vehicle ECUs, including D-PDU API for pass-through communication.

**Related:** UDS, DoIP, OBD-II, SAE J1979, ISO 14229, ISO 14230, ISO 9141

### ISO 24089

**Full Name:** Road Vehicles — Software Update Engineering

**Category:** Standards

An international standard that specifies requirements and recommendations for software update engineering for road vehicles, covering both OTA and wired update processes throughout the vehicle lifecycle.

**Related:** UN R156, SUMS, OTA, Uptane, ISO 21434

### ISO 26262

**Full Name:** Road Vehicles — Functional Safety

**Category:** Functional Safety

An international standard for functional safety of electrical and electronic systems in production road vehicles, defining safety lifecycle processes and Automotive Safety Integrity Levels (ASIL).

**Related:** ISO 21448, ASIL, FMEA, HARA, Functional Safety

### ISO 31000

**Full Name:** Risk Management

**Category:** Standards

An international standard for risk management (ISO 31000:2018), providing principles, framework, and a structured process for risk identification, analysis, evaluation, and treatment; foundational to TARA methodology in ISO 21434 and cybersecurity risk assessment practices in the automotive sector.

**Related:** TARA, ISO 21434, Risk Assessment, HEAVENS, STRIDE

### ISO 9001

**Full Name:** Quality Management Systems

**Category:** Standards

An international standard for quality management systems (QMS) specifying requirements for organizations to consistently meet customer and regulatory requirements; foundational to automotive quality standards like IATF 16949, with cybersecurity implications for supply chain quality management and defect prevention.

**Related:** IATF 16949, ASPICE, QMS, ISO 21434

### ISO 9141

**Category:** Diagnostics

An OBD-II physical layer communication standard using K-Line and L-Line for serial communication between diagnostic tools and ECUs, used primarily in European and Asian vehicles.

**Related:** KWP2000, ISO 14230, OBD-II, ISO 14229, ISO 14230, ISO 22900

### ISO PAS 5112

**Full Name:** Auditing Cybersecurity Engineering

**Category:** Standards

An ISO publicly available specification (ISO PAS 5112:2022) providing guidelines for auditing cybersecurity engineering in road vehicles, defining audit objectives, evidence requirements, assessor competency, and audit reporting aligned with ISO 21434 work products; used by OEMs and certification bodies for CSMS audits and VTA assessments.

**Related:** ISO 21434, CSMS, VTA, ASPICE, TISAX

### ISO Stack Vulnerability

**Category:** Vulnerability

Weaknesses in protocol stack implementations.

### ISO-TP

**Full Name:** ISO 15765-2

**Category:** Diagnostics

Transport protocol used over CAN for diagnostic communication.

### ISO/SAE 21434

**Full Name:** Road Vehicle Cybersecurity Engineering

**Category:** Standards

The international standard (ISO/SAE 21434:2021) for road vehicle cybersecurity engineering, defining a cybersecurity lifecycle framework encompassing concept, development, production, operation, and decommissioning phases; requiring cybersecurity risk assessments (TARA), cybersecurity goals, cybersecurity cases, and cybersecurity audits for vehicle type approval under UN R155.

**Related:** UN R155, CSMS, TARA, Cybersecurity Case, ISO 26262, ASPICE

### ISO/SAE 21434:2021

**Category:** Standards

Joint ISO/SAE international standard defining cybersecurity engineering requirements for road vehicles throughout their lifecycle, including risk assessment (TARA), threat analysis, and cybersecurity management.

**Related:** TARA, ISO 26262, UN R155, GB 44495

### ISO/SAE PAS 5112

**Category:** Standards

A publicly available specification providing guidelines for auditing and assessing cybersecurity in road vehicle engineering, supporting ISO/SAE 21434 compliance.

**Related:** ISO 21434, CSMS

### Isolation Boundary

**Category:** Security Architecture

Logical separation between secure and non-secure components.

### Isolation Failure

**Category:** Vulnerability

Failure to maintain separation between system components.

### ITS

**Full Name:** Intelligent Transport System

**Category:** Vehicle Connectivity

An advanced application integrating sensing, communication, computing, and control technologies in vehicles and transport infrastructure to improve safety, mobility, and efficiency of transportation systems.

**Related:** V2X, DSRC, ETSI, WAVE, Cooperative ITS

### IV

**Full Name:** Initialization Vector

**Category:** Cryptography

**Related:** Encryption

A random value used in encryption to ensure uniqueness.

### IVC

**Full Name:** Inter-Vehicle Communication

**Category:** Connectivity

Wireless communication between vehicles for exchanging safety, mobility, and environmental data; a subset of V2X enabled by DSRC/WAVE or C-V2X technologies.

**Related:** V2V, V2X, DSRC, WAVE, VANET

### IVI

**Full Name:** In-Vehicle Infotainment

**Category:** Vehicle Architecture

The integrated multimedia, navigation, and connectivity system in modern vehicles, often running on Android Automotive or Linux-based platforms, providing entertainment and information to drivers and passengers.

**Related:** Digital Cockpit, Android Automotive, HMI, GENIVI, AGL

### IVI Browser Exploit

**Category:** Attack

Exploitation of browser vulnerabilities in infotainment systems.

### IVI Exploit

**Category:** Attack

A vulnerability exploitation targeting infotainment systems.

### IVI Exploitation Chain

**Category:** Attack

Multi-step exploitation targeting infotainment systems.

### IVI Firmware

**Category:** ECU

Software controlling infotainment system behavior.

### IVI Jailbreak

**Category:** Attack

**Related:** Jailbreak

Jailbreaking infotainment systems to gain unauthorized access to system functions.

### IVI Malware

**Category:** Attack

Malicious software targeting infotainment systems.

### IVI Network Bridge

**Category:** Vehicle Security

Bridge between IVI and vehicle networks.

### IVI Remote Access

**Category:** Connectivity

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

### IVN

**Full Name:** In-Vehicle Network

**Category:** Network

**Related:** FlexRay

Communication networks inside a vehicle including CAN, LIN, FlexRay, Ethernet.

### IVN Gateway

**Category:** ECU

A system connecting different in-vehicle networks.

### IVN Injection

**Category:** Attack

Injecting malicious messages into in-vehicle networks.

### IVN Sniffing

**Category:** Reverse Engineering

Capturing in-vehicle network traffic.

## J

### J-Link

**Category:** Security Tool

A family of JTAG/SWD debug probes by SEGGER supporting ARM, RISC-V, and other microcontroller architectures with high-speed debugging, flash programming, and unlimited breakpoints; used in automotive security for debugging ECU firmware, extracting flash contents, and analyzing boot sequences.

**Related:** JTAG, SWD, OpenOCD, Debug Port, Firmware Extraction

### J1708 Protocol

**Category:** Network

Legacy serial communication protocol used in older vehicle systems.

### J1939 Message Injection

**Category:** Attack

Injection of malicious messages into J1939 communication networks.

### J1939 Protocol

**Category:** Network

A CAN-based protocol used in heavy-duty vehicles for communication between ECUs.

### Jailbreak

**Category:** Attack

Bypassing software restrictions on embedded systems or infotainment platforms to gain root access.

### Jailbreak Detection

**Category:** Intrusion Detection

Mechanisms that detect whether a system has been compromised or jailbroken.

### Jailbreak Exploit Chain

**Category:** Attack

**Related:** Jailbreak

Multi-step exploitation process used to achieve system jailbreak.

### Jailbreak Persistence

**Category:** Attack

Maintaining unauthorized root access after reboot or update.

### Jailhouse

**Category:** Virtualization

A Linux-based partitioning hypervisor that creates isolated "cells" for safety-critical and non-critical workloads on multicore SoCs; used in automotive for consolidating real-time control and Linux-based IVI without a full hypervisor, leveraging hardware-assisted virtualization for static partitioning.

**Related:** Hypervisor, Separation Kernel, ACRN, Linux, KVM

### Java Automotive Stack

**Category:** Vehicle Architecture

Java-based runtime environments used in infotainment or Android Automotive systems.

### Java Native Interface (JNI) Attack

**Category:** Android

Exploiting JNI boundary between Java and native code.

### Java Reflection Attack

**Category:** Attack

Using reflection mechanisms to bypass access controls in Java systems.

### JavaScript Injection

**Category:** Attack

Injection of malicious JavaScript into IVI browsers or web-based interfaces.

### Jitter Attack

**Category:** Attack

Manipulating timing variations in communication or processing to disrupt system behavior.

### Jitter Buffer Exploit

**Category:** Attack

Exploiting buffering mechanisms used to smooth timing variations.

### Jitter Measurement Manipulation

**Category:** Attack

Altering system timing measurements to hide malicious behavior.

### JNI Memory Corruption

**Category:** Vulnerability

**Related:** Memory Corruption

Memory corruption occurring in JNI layer interactions.

### Job Queue Manipulation

**Category:** Attack

Modifying execution order of scheduled tasks to influence system behavior.

### JOP

**Full Name:** Jump-Oriented Programming

**Category:** Attack

An advanced code-reuse attack technique similar to ROP but using indirect jump instructions instead of return addresses to chain gadgets and execute arbitrary computation, bypassing DEP and return-address protections in automotive ECU firmware.

**Related:** ROP, DEP, ASLR, Code Reuse Attack, Exploit Mitigation

### JSON Injection

**Category:** Attack

Injection of malicious JSON payloads into APIs or message systems.

### JSON Parsing Vulnerability

**Category:** Vulnerability

Security flaw caused by improper parsing of JSON data.

### JT/T 808

**Category:** Connectivity

Chinese industry standard for satellite positioning system terminal communication, defining the data format and protocol for vehicle telematics and location tracking systems.

**Related:** JT/T 1078, GB/T 32960, NGTP

### JTAG

**Full Name:** Joint Test Action Group

**Category:** Hardware Security

An IEEE 1149.1 standard hardware debug interface used for testing, debugging, and programming embedded systems. Exposed JTAG ports on vehicle ECUs can be exploited for unauthorized memory access and firmware extraction.

**Related:** SWD, OpenOCD, Boundary Scan, J-Link, Exposed Debug Interface

### JTAG Fuse Protection

**Category:** Hardware Security

Security mechanism disabling JTAG access via hardware fuses.

### JTAG Over Ethernet

**Full Name:** JTAGoE

**Category:** Reverse Engineering

Remote JTAG access over network interfaces.

### JTAG Reverse Engineering

**Category:** Hardware Security

**Related:** Firmware

Using JTAG to analyze firmware and system behavior.

### JTAG Security Lock

**Category:** Hardware Security

Hardware-level mechanism restricting JTAG access.

### JTAGulator

**Category:** Security Tool

An open-source hardware tool for identifying JTAG and SWD debug interface signals on embedded devices, automating the discovery of TDI, TDO, TMS, TCK, SWDIO, and SWCLK pinouts; essential for initial hardware reconnaissance in automotive ECU security assessments.

**Related:** JTAG, SWD, J-Link, OpenOCD, Debug Port

### Junction Attack Point

**Category:** Threat Modeling

A system point where multiple communication paths converge and become vulnerable.

### JWT

**Full Name:** JSON Web Token

**Category:** IAM

**Related:** Authentication

A compact token format used for secure authentication in APIs.

### JWT Attack

**Category:** Attack

Exploitation of vulnerabilities in JWT implementation or validation.

### JWT Signature Bypass

**Category:** Attack

Bypassing signature verification in JWT-based authentication systems.

## K

### KASLR

**Full Name:** Kernel Address Space Layout Randomization

**Category:** Security

Security mechanism that randomizes kernel memory layout.

### Kayak

**Category:** Security Tool

An open-source CAN bus analysis and reverse engineering tool built on Java and SavvyCAN components, providing a user-friendly GUI for CAN traffic visualization, signal decoding, and replay attacks; used in automotive security research for protocol reverse engineering and vulnerability discovery.

**Related:** CAN Bus, SavvyCAN, CAN Fuzzing, Reverse Engineering, SocketCAN

### KDF Attack

**Category:** Cryptography

Attacks targeting weaknesses in key derivation functions.

### Keeloq

**Full Name:** Rolling Code

**Category:** Cryptography

A proprietary block cipher-based hopping code algorithm widely used in automotive RKE systems, generating rolling codes that change with each transmission to prevent replay attacks; known vulnerabilities exist in certain implementations.

**Related:** RollJam Attack, Replay Attack, Block Cipher, Cipher

### Kernel

**Category:** Operating System

The core component of an operating system managing hardware and system resources.

### Kernel API Abuse

**Category:** Attack

Misuse of kernel APIs to bypass security controls.

### Kernel Debug Interface

**Category:** Reverse Engineering

Interfaces used for kernel-level debugging.

### Kernel Driver Exploit

**Category:** Attack

Exploiting vulnerabilities in kernel drivers.

### Kernel Exploit

**Category:** Attack

An exploit targeting vulnerabilities in the operating system kernel to gain elevated privileges.

### Kernel Hardening

**Category:** Security

Techniques used to improve kernel security and resist attacks.

### Kernel Memory Corruption

**Category:** Vulnerability

**Related:** Code Execution

Corruption of kernel memory leading to crashes or code execution.

### Kernel Module

**Full Name:** LKM

**Category:** Operating System

**Related:** Kernel

Loadable kernel module that extends kernel functionality.

### Kernel Module Exploit

**Category:** Attack

Exploiting vulnerabilities in kernel modules to gain control.

### Kernel Panic

**Category:** Operating System

A critical error causing the operating system kernel to halt.

### Kernel Privilege Escalation

**Category:** Attack

Gaining root or system-level access via kernel vulnerabilities.

### Kernel Runtime Integrity

**Category:** Intrusion Detection

Monitoring kernel behavior to detect tampering.

### Kernel Sandbox Escape

**Category:** Attack

Escaping restricted execution environments via kernel vulnerabilities.

### Kernel Syscall Attack

**Category:** Attack

Abusing system call interfaces to execute privileged operations.

### Kernel Timer Attack

**Category:** Attack

Exploiting kernel scheduling timers to infer system behavior.

### Kernel Trace Attack

**Category:** Attack

Using kernel execution traces to infer sensitive information.

### Key

**Category:** Cryptography

**Related:** Decryption, Encryption

A secret value used in cryptographic algorithms for encryption, decryption, signing, or authentication.

### Key Agreement Failure

**Category:** Vulnerability

Failure in establishing secure shared keys.

### Key Agreement Protocol

**Category:** Cryptography

A protocol allowing two parties to derive a shared secret key.

### Key Authentication

**Category:** Cryptography

**Related:** Cryptographic Key

Verification that a cryptographic key is valid and trusted.

### Key Compromise

**Category:** Security

A situation where cryptographic keys are exposed or stolen.

### Key Escrow

**Category:** Security Architecture

A mechanism where cryptographic keys are stored for recovery purposes.

### Key Exchange

**Category:** Cryptography

**Related:** Cryptographic Key

Process of securely sharing cryptographic keys between entities.

### Key Exchange Bypass

**Category:** Attack

Circumventing secure key exchange protocols.

### Key Fob

**Category:** Vehicle Architecture

A wireless device used to control vehicle locking and unlocking.

### Key Injection

**Category:** Cryptography

The process of securely loading cryptographic keys into ECUs or secure elements.

### Key Leakage

**Category:** Security

Exposure of cryptographic keys through software or hardware flaws.

### Key Management

**Category:** Cryptography

**Related:** Cryptographic Key

The lifecycle management of cryptographic keys including generation, storage, rotation, and destruction.

### Key Provisioning Server

**Category:** Cryptography

Server responsible for distributing cryptographic keys to devices.

### Key Revocation

**Category:** Security

Process of invalidating compromised cryptographic keys.

### Key Rotation

**Category:** Security

Periodic replacement of cryptographic keys to reduce exposure risk.

### Key Storage Hardware

**Full Name:** HSM/TPM

**Category:** Hardware Security

Secure hardware component used to store cryptographic keys.

### Key Vault

**Category:** Cryptography

Secure storage system for cryptographic keys.

### Keyless Entry Attack

**Category:** Attack

Attacks targeting wireless keyless entry systems such as relay attacks.

### Keyless Entry System

**Category:** Vehicle Architecture

A system allowing vehicle unlocking and ignition without physical keys.

### Kismet

**Category:** Security Tool

An open-source 802.11 wireless network detector, sniffer, and intrusion detection system that passively scans for Wi-Fi networks and devices; used in automotive wireless reconnaissance to identify in-vehicle hotspots and connected mobile devices.

**Related:** Aircrack-ng, Airodump-NG, WiFi Pineapple, Evil Twin Attack, BSSID

### KNOB Attack

**Full Name:** Key Negotiation of Bluetooth

**Category:** Attack

A Bluetooth vulnerability (CVE-2019-9506) that forces negotiation of short encryption keys (as low as 1 byte) between paired devices, enabling brute-force decryption of Bluetooth traffic; affects automotive Bluetooth implementations using EDR connections.

**Related:** Bluetooth, BlueBorne, Bluetooth Pineapple, Encryption Key

### Knowledge Distillation

**Category:** AI

A model compression technique where a smaller "student" model is trained to mimic a larger "teacher" model, transferring knowledge while reducing model size and inference latency; widely used to deploy complex ADAS perception models onto embedded ECUs with limited compute.

**Related:** Model Compression, Neural Network Quantization, Inference Engine, Edge AI

### Known Plaintext Attack

**Category:** Cryptography

**Related:** Cipher, Ciphertext

An attack where attacker has access to both plaintext and corresponding ciphertext.

### KVM

**Full Name:** Kernel-based Virtual Machine

**Category:** Virtualization

A Linux virtualization infrastructure enabling hardware-assisted virtual machines.

### KVM Escape

**Category:** Virtualization

Breaking isolation between virtual machines and host system.

### KVM Guest Isolation

**Category:** Virtualization

Mechanism ensuring separation between virtual machines.

### KWP2000

**Category:** Diagnostics

Keyword Protocol 2000, a diagnostic communication protocol used over K-Line or CAN for ECU diagnostics and programming, superseded by UDS (ISO 14229).

**Related:** ISO 14230, ISO 9141, UDS, OBD-II

## L

### L1

**Full Name:** Level 1) — Driver Assistance

**Category:** ADAS

The first level of SAE J3016 driving automation where the vehicle provides either lateral (steering) or longitudinal (acceleration/deceleration) support, but not both simultaneously; the driver remains fully responsible for monitoring the driving environment and must maintain continuous control. Security considerations focus on sensor integrity and CAN message authenticity.

**Related:** SAE J3016, ADAS, Autonomous Driving, L2, ESC, ACC

### L2

**Full Name:** Level 2 — Partial Driving Automation

**Category:** ADAS

A SAE J3016 automation level where the vehicle can simultaneously control both steering and acceleration/deceleration, but the human driver must remain engaged and monitor the driving environment at all times.

**Related:** L1, L2+, L3, ADAS, SAE J3016

### L2 Cache Side Channel

**Category:** Attack

Exploiting CPU L2 cache behavior to extract sensitive information.

### L2+

**Full Name:** Level 2+) — Enhanced Partial Driving Automation

**Category:** ADAS

An industry-defined extension of SAE L2 allowing hands-off, eyes-on operation on highways by combining multiple ADAS features with more sophisticated sensor suites and longer operational design domains (ODD); while the vehicle handles sustained lateral and longitudinal control, the driver must still monitor the road and take over when requested. L2+ introduces additional security surface through driver monitoring systems (DMS), over-the-air updates, and increased connectivity.

**Related:** SAE J3016, ADAS, L2, L3, DMS, OTA

### L2/L3 Network Attack

**Category:** Attack

Attacks targeting OSI Layer 2 or Layer 3 protocols in vehicle networks.

### L3

**Full Name:** Level 3 — Conditional Driving Automation

**Category:** ADAS

A SAE J3016 automation level where the vehicle can perform all driving tasks under specific conditions, but the human driver must be ready to take over when requested by the system.

**Related:** L2, L4, ODD, DMS, SAE J3016

### L4

**Full Name:** Level 4 — High Driving Automation

**Category:** ADAS

A SAE J3016 automation level where the vehicle can perform all driving tasks under specific conditions without human intervention, including handling safety-critical situations within its Operational Design Domain (ODD).

**Related:** L3, L5, ODD, ADS, SAE J3016

### L5

**Full Name:** Level 5) — Full Driving Automation

**Category:** ADAS

The highest level of SAE J3016 driving automation where the vehicle performs all driving tasks under all conditions across the full operational design domain, requiring no human intervention for any trip; L5 vehicles have no steering wheel or pedals. Security requirements encompass full vehicle autonomy security including end-to-end sensor integrity, tamper-proof AI perception and planning, robust secure boot chains across all processing units, and defense-in-depth for redundant fail-operational systems.

**Related:** SAE J3016, ADAS, Autonomous Driving, L4, AI Safety, Cybersecurity

### Laser Fault Injection

**Full Name:** Laser Fault Injection (LFI)

**Category:** Hardware Security

A precision fault injection technique using focused laser pulses to induce localized faults in silicon devices, capable of bypassing security mechanisms, flipping bits, or altering control flow in automotive semiconductors.

**Related:** EMFI, Voltage Fault Injection, Optical Fault Injection, Side Channel, Chip Decapsulation

### Latency Manipulation Attack

**Category:** Attack

Altering system latency to affect communication or control behavior.

### Launch Control ECU

**Category:** ECU

ECU responsible for managing vehicle acceleration launch behavior.

### LD_PRELOAD Attack

**Category:** Operating System

Using LD_PRELOAD to override system library functions.

### LDF

**Full Name:** LIN Description File

**Category:** Automotive Network

A configuration file that describes the scheduling, signals, and nodes in a LIN bus network, used by development tools to generate and analyze LIN communication for body electronics and sensor applications.

**Related:** LIN, LIN Bus, DBC, FIBEX, SAE J2602

### Legacy ECU

**Category:** ECU

Older ECUs with limited security capabilities.

### Legacy Protocol Exploit

**Category:** Attack

Exploiting outdated automotive communication protocols.

### Library Hijacking

**Category:** Attack

Replacing or modifying shared libraries to execute malicious code.

### License Validation Bypass

**Category:** Attack

Circumventing license verification mechanisms.

### Lidar

**Category:** ADAS

A sensing technology using laser light to measure distance and create 3D maps.

### Lidar Attack

**Category:** ADAS

**Related:** Lidar

Manipulating lidar sensors using optical or signal interference.

### Lidar Data Injection

**Category:** Attack

Manipulating raw lidar data before processing.

### Lidar Spoofing

**Category:** Attack

Injecting false lidar reflections to mislead perception systems.

### Lifecycle Management

**Category:** ECU

Managing ECU states from production to decommission.

### Lightweight Encryption

**Category:** Cryptography

**Related:** Encryption

Encryption methods optimized for embedded automotive systems.

### Lightweight Protocol Exploit

**Category:** Attack

Exploitation of lightweight automotive communication protocols.

### LIN

**Full Name:** Local Interconnect Network

**Category:** Automotive Network

A single-wire serial communication protocol for low-speed (up to 20 kbps) in-vehicle networks, typically used for body electronics, sensors, and actuators where the bandwidth and reliability of CAN are not required.

**Related:** LIN Bus, CAN, LDF, FlexRay, SAE J2602

### LIN Bus

**Full Name:** Local Interconnect Network Bus

**Category:** Automotive Network

A low-cost serial network protocol used for communication between non-critical vehicle components such as door modules, seat controls, and climate sensors, complementing CAN in automotive body electronics.

**Related:** LIN, CAN, LDF, BCM, CCM

### LIN Bus Attack

**Category:** Attack

Exploitation of LIN bus communication to inject or modify signals.

### LIN Injection

**Category:** Attack

Injecting malicious frames into LIN bus communication.

### LIN Sniffing

**Category:** Reverse Engineering

Capturing LIN network traffic for analysis.

### Link Layer Attack

**Category:** Attack

Attacks targeting data link layer communication such as CAN or Ethernet.

### Linker Hijacking

**Category:** Attack

Manipulating dynamic linking process to load malicious libraries.

### Linux

**Category:** Operating System

A widely used open-source operating system forming the base of many automotive IVI and gateway systems.

### Linux Container Escape

**Category:** Attack

Breaking out of Linux container isolation.

### Linux Driver Exploit

**Category:** Attack

Exploitation of vulnerabilities in Linux kernel drivers.

### Linux IPC Exploit

**Category:** Attack

Abusing Linux IPC mechanisms such as D-Bus or sockets.

### Linux Privilege Escalation

**Category:** Attack

Gaining elevated privileges through Linux system vulnerabilities.

### Liveness Detection

**Category:** Security

**Related:** Identity

Mechanism ensuring a system or identity is actively present and not replayed.

### LKM

**Full Name:** Loadable Kernel Module

**Category:** Operating System

**Related:** Kernel

Kernel module that can be dynamically loaded or unloaded.

### LLM

**Full Name:** Large Language Model

**Category:** AI

A deep learning model trained on vast text corpora capable of text generation, reasoning, and task completion; increasingly integrated into IVI systems for natural language voice interfaces, owner's manual querying, and in-vehicle concierge services; introduces new attack surfaces including prompt injection and jailbreaking.

**Related:** Generative AI, NLP (Natural Language Processing), IVI, Prompt Injection

### Load Balancer ECU

**Category:** ECU

An ECU responsible for distributing processing or communication load.

### Local Function

**Category:** Attack

An Auto-ISAC attack technique where an adversary executes local system functions on a compromised in-vehicle platform to interact with hardware peripherals, access kernel services, or invoke platform-specific capabilities.

**Related:** Native API, Command and Scripting Interpreter, Operating System

### Location Spoofing

**Category:** Attack

Manipulating GPS or GNSS location data.

### Location Tracking

**Category:** Attack

An Auto-ISAC attack technique where an adversary collects geolocation data from a compromised vehicle's GNSS receiver, cellular triangulation, or Wi-Fi positioning systems to track vehicle movements and driver patterns.

**Related:** GNSS Spoofing, Privacy, Telematics

### Log Analysis

**Category:** Intrusion Detection

Analyzing system logs to detect anomalies or attacks.

### Log Correlation

**Category:** Intrusion Detection

Combining multiple logs to detect complex attack patterns.

### Log Injection

**Category:** Attack

Injecting malicious entries into system logs.

### Log Spoofing

**Category:** Attack

Forging log entries to mislead security systems.

### Log Tampering

**Category:** Attack

Modifying logs to hide malicious activity or alter forensic evidence.

### Logging ECU

**Category:** ECU

An ECU responsible for recording system and diagnostic logs.

### Logic Vulnerability

**Category:** Vulnerability

Flaws in system logic leading to unintended behavior.

### Long Range Attack

**Category:** Attack

Attacks executed from distant network or wireless sources.

### LSM

**Full Name:** Linux Security Module

**Category:** Operating System

A framework in the Linux kernel that provides hooks for security policy enforcement through loadable kernel modules such as SELinux, AppArmor, Smack, and Yama; in automotive IVI and gateway systems, LSM enforces mandatory access control (MAC) between vehicle services, prevents privilege escalation, and constrains untrusted applications within defined security policies.

**Related:** SELinux, Linux, Kernel, Namespace Isolation, Access Control

### LTE IMSI Catcher

**Category:** Attack

Fake base station used to intercept LTE communication.

### LTE Jamming

**Category:** Attack

Disrupting LTE communication signals.

### LTE Modem

**Category:** Connectivity

**Related:** Cellular Communication

Cellular communication module used in connected vehicles.

### LVDS

**Full Name:** Low-Voltage Differential Signaling

**Category:** Vehicle Architecture

A high-speed, low-power electrical signaling standard that transmits data over a differential pair of wires, providing inherent noise immunity for automotive environments; widely used as the physical layer for high-speed serial links (SerDes) connecting cameras, displays, and sensors to ADAS domain controllers and IVI head units, with data rates reaching multiple Gbps over twisted-pair or coaxial cabling.

**Related:** SerDes, GMSL, FPD-Link, MIPI CSI-2, Camera ECU, ADAS Domain Controller

## M

### MAC

**Full Name:** Message Authentication Code

**Category:** Cryptography

A short piece of information used to verify data integrity and authenticity.

### MAC Spoofing

**Category:** Attack

Forging MAC addresses to impersonate devices.

### Machine Learning

**Category:** AI

A subset of artificial intelligence involving algorithms that learn patterns from data to make predictions or decisions. In vehicles, used for perception, behavior prediction, and anomaly detection.

**Related:** Deep Learning, AI, Neural Network, Supervised Learning, Adversarial Machine Learning

### MACsec

**Full Name:** Media Access Control Security

**Category:** Network

An IEEE 802.1AE standard providing layer-2 encryption and integrity for Ethernet frames, used in automotive Ethernet networks to secure communication between ECUs, switches, and domain controllers; relies on MKA (MACsec Key Agreement) for key establishment.

**Related:** Automotive Ethernet, IEEE 802.1AE, MKA, TLS

### Malware

**Category:** Security

Malicious software designed to infiltrate, damage, or disrupt vehicle systems; in automotive contexts, malware targets infotainment (IVI Malware), telematics units, OBD-II dongles, and connected backend services via techniques including firmware tampering, malicious OTA updates, USB drops, and app-store trojans. Detection requires vehicle-specific IDS/IPS adapted for resource-constrained ECUs.

**Related:** IVI Malware, Firmware Backdoor, OTA Attack, CAN Injection, Intrusion Detection System

### Manipulate Communications

**Category:** Attack

An Auto-ISAC attack technique where an adversary intercepts, modifies, or replays in-vehicle communication on CAN/CAN FD, LIN, FlexRay, or Ethernet networks to inject false data, alter ECU behavior, or trigger unintended actuation.

**Related:** CAN Injection, Replay Attack, Message Spoofing

### MCC

**Full Name:** Mobile Country Code

**Category:** IAM

A three-digit code identifying a country in the ITU E.212 standard; combined with MNC to form the HNI that identifies a mobile network operator, used in vehicle TCU SIM provisioning.

**Related:** MNC, HNI, IMSI, TCU, GSM

### MCU

**Full Name:** Microcontroller Unit

**Category:** ECU

A compact computing unit used in ECUs to control specific vehicle functions with real-time constraints.

### MCU Exploit

**Category:** Attack

Exploitation of vulnerabilities in microcontroller firmware or peripherals.

### MCU Firmware

**Category:** Hardware Security

Software running on microcontrollers that directly controls hardware behavior.

### MCU Reset Attack

**Category:** Attack

Forcing microcontroller reset to manipulate system state.

### Meltdown Attack

**Category:** Attack

Exploiting privilege boundary flaws in CPU memory access.

### Memory Corruption

**Category:** Vulnerability

**Related:** Code Execution

A class of vulnerabilities where memory is improperly modified, leading to crashes or code execution.

### Memory Disclosure

**Category:** Vulnerability

Unauthorized access to sensitive memory regions.

### Memory Dump

**Category:** Reverse Engineering

Extraction of system memory for analysis and reverse engineering.

### Memory Forensics

**Category:** Penetration Testing

Analysis of memory dumps to reconstruct system state or attacks.

### Memory Integrity Check

**Category:** Security

Ensuring memory has not been modified maliciously.

### Memory Isolation Failure

**Category:** Vulnerability

Failure to properly isolate memory between processes or domains.

### Memory Leak

**Category:** Vulnerability

**Related:** Exploit

Failure to properly release memory, potentially leading to performance degradation or exploitation.

### Memory Protection Bypass

**Category:** Attack

Circumventing hardware or software memory protection mechanisms.

### Memory Safety Exploit

**Category:** Attack

Exploiting unsafe memory operations to gain control.

### Memory Safety Violation

**Category:** Security

Any violation of safe memory access rules such as buffer overflow or use-after-free.

### Memory Tagging Attack

**Category:** Attack

Bypassing memory tagging mechanisms used for security.

### Memory Virtualization

**Category:** Virtualization

The hypervisor-managed mapping of guest physical addresses to machine physical addresses via stage-2 address translation (ARM VHE / Intel EPT); critical for automotive virtualization to provide strong memory isolation between safety-critical and non-critical VMs with minimal overhead.

**Related:** Hardware-Assisted Virtualization, Hypervisor, MMU, KVM Guest Isolation

### Message Broker

**Category:** Network

A system that routes messages between ECUs, cloud services, and applications.

### Message Broker Injection

**Category:** Attack

Injecting malicious messages into broker-based systems such as MQTT or DDS.

### Message Injection

**Category:** Attack

Injecting malicious messages into vehicle communication networks.

### Message Queue Overflow

**Category:** Vulnerability

**Related:** Exploit

Overflowing message queues leading to crashes or exploit conditions.

### Message Queue Starvation

**Category:** Vulnerability

Preventing high-priority messages from being processed.

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

### MFA

**Full Name:** Multi-Factor Authentication

**Category:** IAM

A security mechanism requiring two or more independent authentication factors (e.g., password, token, biometric) to verify identity; used in automotive cloud services, fleet management portals, and remote vehicle access to reduce credential-based attack risk.

**Related:** Authentication, OTP, Identity and Access Management, Authentication Factor, Credential

### Microcontroller Security Boundary

**Category:** Hardware Security

Security separation within MCU-based systems.

### Microservice Architecture

**Full Name:** Vehicle Cloud

**Category:** Vehicle Architecture

Distributed architecture used in automotive backend systems.

### Middleware

**Category:** Operating System

A software layer that connects different system components or services in automotive systems.

### Middleware Exploit

**Category:** Attack

Exploitation of vulnerabilities in middleware communication layers.

### MIPI CSI-2

**Full Name:** MIPI Camera Serial Interface 2

**Category:** Hardware Security

A high-speed serial interface standard for connecting cameras to host processors, commonly used in automotive ADAS and surround-view systems.

**Related:** GMSL, FPD-Link, LVDS, SerDes, Camera ECU

### MirrorLink

**Category:** Connectivity

A smartphone-to-vehicle connectivity standard developed by the Car Connectivity Consortium (CCC), mirroring smartphone apps onto the vehicle infotainment display via USB or Bluetooth.

**Related:** CarPlay, Android Auto, CarLife, CCC, SmartDeviceLink

### Misbehavior Detection

**Category:** Intrusion Detection

A V2X security mechanism identifying vehicles broadcasting false Basic Safety Messages by analyzing consistency with physical models, plausibility checks, and cooperative detection algorithms.

**Related:** SCMS, V2X, BSM

### Misconfiguration

**Category:** Vulnerability

Incorrect system configuration leading to security exposure.

### Misconfiguration Exploit

**Category:** Attack

Exploiting insecure or default configurations in automotive systems.

### MISRA C/C++

**Full Name:** Motor Industry Software Reliability Association Guidelines

**Category:** Standards

Coding guidelines developed by the Motor Industry Software Reliability Association for C and C++ programming, widely adopted in automotive software development to reduce coding defects and security vulnerabilities.

**Related:** ASPICE, ISO 21434, AUTOSAR

### Missing Authentication for Critical Function

**Category:** Vulnerability

A vulnerability where sensitive vehicle functions (diagnostic session activation, firmware update, key provisioning, V2X certificate enrollment, remote unlock) are accessible without authentication, allowing attackers to directly manipulate safety-critical or security-critical operations.

**Related:** Broken Access Control, Authentication Bypass, Diagnostic Vulnerability, UDS Service Bypass
### Misuse Case
**Category:** Threat Modeling
A use case describing how a system or feature could be intentionally misused or abused by an adversary to cause harm, violate security properties, or bypass safety mechanisms. In automotive TARA, misuse cases capture attacker goals, actions, and preconditions, complementing normal use cases to identify security requirements during early design phases.
**Related:** TARA, Use Case, Abuse Case, Threat Scenario, Attack Scenario, STRIDE

### Misuse Case Modeling

**Category:** Threat Modeling

Modeling how systems can be misused to identify vulnerabilities.

### MitM

**Full Name:** Man-in-the-Middle

**Category:** Attack

A cyberattack where the adversary secretly intercepts, relays, and potentially modifies communications between two parties, applicable to vehicle-to-cloud, V2X, and diagnostic connections.

**Related:** Bettercap, Evil Twin Attack, TLS, Spoofing, Packet Sniffing

### MitM Attack on Vehicle Network

**Category:** Attack

Intercepting and modifying communication between ECUs or cloud services.

### MITRE

**Category:** Standards

The MITRE Corporation maintains cybersecurity knowledge bases including CVE, CWE, CAPEC, and ATT&CK framework, widely used in vulnerability classification and threat modeling.

**Related:** CVE, CWE, CAPEC, ATT&CK, NVD

### ML-DSA

**Full Name:** Module-Lattice Digital Signature Algorithm (FIPS 204)

**Category:** Cryptography

A NIST-standardized post-quantum digital signature algorithm based on lattice cryptography (CRYSTALS-Dilithium), designed to resist quantum computer attacks for long-term automotive security applications.

**Related:** PQC, ML-KEM, SLH-DSA, CRYSTALS-Dilithium, NIST

### ML-KEM

**Full Name:** Module-Lattice Key Encapsulation Mechanism (FIPS 203)

**Category:** Cryptography

A NIST-standardized post-quantum key encapsulation mechanism based on the CRYSTALS-Kyber lattice-based algorithm, designed to securely establish shared secrets between ECUs and backend systems even against quantum computer attacks.

**Related:** PQC, ML-DSA, SLH-DSA, CRYSTALS-Kyber, NIST

### MMS

**Full Name:** Multimedia Messaging Service

**Category:** Connectivity

A standard for sending multimedia content (images, audio, video) over cellular networks; in automotive contexts, may be used for telematics notifications or V2X applications, presenting an attack surface for message injection and content-based exploits.

**Related:** SMS, Cellular Network, Telematics

### MMU

**Full Name:** Memory Management Unit

**Category:** Vehicle Architecture

Hardware that maps virtual memory to physical memory.

### mmWave Radar

**Full Name:** Millimeter Wave Radar

**Category:** ADAS

Automotive radar operating in the millimeter wave frequency bands (24 GHz narrowband, 76–77 GHz long-range, 77–81 GHz wideband), providing high-resolution detection of objects at ranges up to 250 meters with velocity measurement via Doppler effect, essential for ADAS and autonomous driving perception stacks.

**Related:** Radar, 4D Imaging Radar, 77 GHz, FMCW, Automotive Radar

### MNC

**Full Name:** Mobile Network Code

**Category:** IAM

A two- or three-digit code identifying a specific mobile network operator within a country; combined with MCC to form the HNI used in vehicle TCU SIM identification.

**Related:** MCC, HNI, IMSI, TCU, GSM

### Mobile App Vehicle Interface

**Category:** Vehicle Security

Mobile applications used to interact with vehicle systems.

### Mobile Key Attack

**Category:** Attack

Exploiting smartphone-based digital key systems.

### Mobile-to-Vehicle Communication

**Category:** Connectivity

Communication between mobile devices and vehicle systems.

### Model Compression

**Category:** AI

Techniques (pruning, quantization, knowledge distillation, weight clustering) that reduce the size and computational requirements of neural networks while preserving accuracy; essential for deploying AI models on automotive ECUs with limited memory, power, and compute resources.

**Related:** Knowledge Distillation, Neural Network Quantization, Edge AI, Inference Engine, Pruning (Neural Network)

### Model Drift

**Category:** AI

Degradation of model performance over time due to changing input data distributions.

### Model Inference Attack

**Category:** AI

Extracting information about machine learning models used in ADAS or autonomous driving.

### Model Poisoning

**Category:** AI

Injecting malicious data into training sets of automotive AI systems.

### Model-Based Security

**Category:** Security Architecture

Security approach based on system models such as threat models or digital twins.

### Modem

**Category:** Connectivity

**Related:** Cellular Communication

A device that provides cellular communication (4G/5G/LTE) for vehicles.

### Modem Baseband Exploit

**Category:** Attack

Exploitation of vulnerabilities in baseband processor firmware.

### Modem Firmware

**Category:** Hardware Security

Software running on cellular baseband hardware.

### Modify Isolated Execution Environment

**Category:** Attack

An Auto-ISAC attack technique where an adversary modifies or bypasses isolated execution environments (e.g., TEE, TrustZone, hypervisor partitions, secure enclaves) to access protected assets or execute code in privileged domains.

**Related:** ARM TrustZone, TEE, Hypervisor, Secure Enclave

### Modify OS Kernel Boot Partition System Partition

**Category:** Attack

An Auto-ISAC attack technique where an adversary modifies the OS kernel, boot partition, or system partition on an in-vehicle computing platform to install rootkits, tamper with boot chain integrity, or achieve persistent compromise.

**Related:** Secure Boot, Kernel Rootkit, Bootloader, Platform Firmware

### MOST

**Full Name:** Media Oriented Systems Transport

**Category:** Network

A multimedia bus protocol for transmitting audio, video, and data in vehicles, defining all seven OSI layers. Used in infotainment and multimedia systems.

**Related:** A2B, Automotive Ethernet, CAN

### MP

**Full Name:** Mass Production

**Category:** Vehicle Architecture

The full-rate series production phase where vehicles are manufactured at volume using validated processes, tooling, and supply chains, with ongoing quality monitoring and continuous improvement.

**Related:** SOP, PP, JIT, Quality Control, Manufacturing

### MPU

**Full Name:** Memory Protection Unit

**Category:** Hardware Security

Hardware component enforcing memory access restrictions.

### MQTT

**Full Name:** Message Queuing Telemetry Transport

**Category:** Network

A lightweight publish/subscribe messaging protocol widely used in connected vehicles.

### MQTT Authentication Bypass

**Category:** Attack

Circumventing authentication mechanisms in MQTT systems.

### MQTT Broker Attack

**Category:** Attack

Exploitation of MQTT brokers through unauthorized access or message injection.

### MQTT Topic Injection

**Category:** Attack

Injecting malicious or unauthorized MQTT topics into vehicle communication systems.

### MQTT-SN

**Full Name:** MQTT for Sensor Networks

**Category:** Network

A variant of MQTT optimized for wireless sensor networks and constrained devices, used in automotive TPMS and tire-pressure monitoring where bandwidth and power are limited.

**Related:** MQTT, TPMS

### MSISDN

**Full Name:** Mobile Subscriber ISDN Number

**Category:** Network Security

The phone number uniquely identifying a mobile subscription, associated with the SIM/eSIM in a vehicle TCU and used for SMS-based services, vehicle tracking, and telematics communication.

**Related:** IMSI, IMEI, TCU, eSIM, GSM

### Multi-Processor Communication Exploit

**Category:** Attack

Attacking message flows between heterogeneous processors.

### Mutex

**Category:** Operating System

A synchronization primitive that ensures mutually exclusive access to shared resources; in automotive real-time systems, mutexes must support priority inheritance to prevent priority inversion, a key requirement specified by OSEK/ AUTOSAR OS standards.

**Related:** Semaphore, Spinlock, Deadlock, Priority Inversion, Thread, AUTOSAR OS

### MVCI

**Full Name:** Modular Vehicle Communication Interface

**Category:** Diagnostics

An ISO 22900 standard defining a modular, vendor-independent diagnostic interface architecture for vehicle communication, enabling standardized access to ECUs via D-Server, ODX, and OTX for diagnostics and programming.

**Related:** DoIP, ODX, PDX, OTX, ISO 22900

## N

### NAC

**Full Name:** Network Access Control

**Category:** Network

Policy-based control over network device access.

### Namespace

**Category:** Operating System

A Linux kernel feature providing process-level isolation of system resources (PID, network, mount, IPC, UTS, user, cgroup); the foundation for containerization in automotive IVI platforms, enabling application sandboxing and service isolation.

**Related:** Container, cgroups, Namespace Isolation, Linux, Process Isolation

### Namespace Escape

**Category:** Attack

Breaking out of isolated namespaces to gain broader system access.

### Namespace Isolation

**Category:** Operating System

**Related:** Kernel, Linux

A Linux kernel feature that isolates system resources between processes or containers.

### NAT Traversal Attack

**Category:** Network

Exploiting NAT traversal mechanisms to bypass network boundaries.

### Native API

**Category:** Operating System

An Auto-ISAC attack technique where an adversary abuses native OS APIs (e.g., Linux syscalls, POSIX functions, Android NDK) on in-vehicle platforms to execute low-level system operations, bypass security controls, or access hardware peripherals.

**Related:** Command and Scripting Interpreter, Local Function, Operating System, Linux

### Navigation Data Injection

**Category:** Attack

Injecting false routing or location data into navigation systems.

### Navigation Spoofing

**Category:** Attack

Manipulating navigation data to mislead vehicle positioning systems.

### Navigation System

**Category:** Vehicle Architecture

Subsystem responsible for GPS-based route planning and positioning.

### Near Field Attack

**Category:** Attack

Attacks performed using short-range communication channels like NFC or BLE.

### Network Behavior Profiling

**Category:** Intrusion Detection

Creating behavioral models of network communication patterns.

### Network Bootstrapping

**Category:** Vehicle Architecture

Process of initializing networked vehicle systems.

### Network Delay Injection

**Category:** Attack

Introducing artificial latency into communication channels.

### Network ECU Coordination

**Category:** Vehicle Architecture

Coordination of multiple ECUs within network domains.

### Network Firewall Bypass

**Category:** Attack

Circumventing network firewall rules in automotive systems.

### Network Gateway Node

**Category:** ECU

A node responsible for routing between different network domains.

### Network Identity Spoofing

**Category:** Attack

Impersonating a network identity to gain unauthorized access.

### Network Information Discovery

**Category:** Attack

An Auto-ISAC reconnaissance technique where an adversary probes vehicle network topology, identifies active ECUs, discovers available services, and maps bus architectures to plan subsequent attacks.

**Related:** Network Service Scanning, Software Discovery, Penetration Testing, Process Discovery, System Information Discovery, System Network Configuration Discovery, System Network Connections Discovery

### Network Injection

**Category:** Attack

Injecting malicious packets or frames into vehicle networks.

### Network Interface Exploit

**Category:** Attack

Exploiting vulnerabilities in network interface drivers or hardware.

### Network Isolation Failure

**Category:** Vulnerability

Failure to properly separate network domains.

### Network Layer Attack

**Full Name:** L3

**Category:** Attack

Attacks targeting the network layer of the OSI model.

### Network Node

**Full Name:** ECU Node

**Category:** ECU

Any ECU or device participating in in-vehicle or external communication networks.

### Network Partition Attack

**Category:** Attack

Disrupting network connectivity to isolate nodes or ECUs.

### Network Protocol Exploit

**Category:** Vulnerability

**Related:** Exploit

Exploitation of weaknesses in communication protocols.

### Network Security Policy

**Category:** Security Architecture

Rules defining allowed network communication.

### Network Segmentation

**Category:** Security Architecture

The architectural practice of dividing a vehicle's in-vehicle network into isolated security zones (powertrain, chassis, ADAS, infotainment, telematics) separated by gateway firewalls to contain breaches and enforce least-privilege communication; network segmentation is a core principle of defense-in-depth for automotive E/E architectures and is mandated by ISO/SAE 21434 for domain separation.

**Related:** Gateway Firewall, Domain Isolation, ECU Isolation, Defense in Depth, Zonal Gateway

### Network Service Scanning

**Category:** Attack

An Auto-ISAC reconnaissance technique where an adversary scans for open network services on vehicle systems and diagnostic interfaces to identify running protocols, accessible endpoints, and potential exploitation targets.

**Related:** Network Information Discovery, Vulnerability Scanning, Penetration Testing, Process Discovery, Software Discovery, System Information Discovery, System Network Configuration Discovery, System Network Connections Discovery

### Network Sniffing

**Category:** Reverse Engineering

Capturing network traffic for analysis.

### Network Spoofing

**Category:** Attack

Forging network identities or packets to impersonate legitimate nodes.

### Network Stack

**Category:** Network

The layered set of protocols used for communication in automotive systems, including TCP/IP, UDP, CAN, and Ethernet stacks.

### Network Traffic Analysis

**Category:** Intrusion Detection

Analyzing network traffic for anomalies or attacks.

### Neural Network Quantization

**Category:** AI

A model compression technique that reduces the numerical precision of model weights and activations (e.g., FP32 to INT8) to decrease model size, memory bandwidth, and inference latency; critical for deploying high-accuracy ADAS models on embedded automotive hardware.

**Related:** Model Compression, Knowledge Distillation, Inference Engine, Edge AI

### NFC

**Full Name:** Near Field Communication

**Category:** Connectivity

Short-range wireless communication technology used in keyless entry and mobile vehicle access.

### NFC Key System

**Category:** Vehicle Architecture

Vehicle access system using NFC-enabled devices or cards.

### NFC Relay Attack

**Category:** Attack

Extending NFC communication to impersonate proximity-based authentication.

### NFC Spoofing

**Category:** Attack

Forging NFC tags or communication signals.

### NGTP

**Category:** Connectivity

Next Generation Telematics Protocol, an open standard for vehicle telematics service delivery, enabling standardized communication between in-vehicle systems and backend service providers.

**Related:** JT/T 808, GB/T 32960, T-Box

### NHTSA

**Full Name:** National Highway Traffic Safety Administration

**Category:** Standards

The U.S. Department of Transportation agency responsible for vehicle safety regulation, publishing cybersecurity best practices for modern vehicles (2016) and aftermarket autonomous vehicle cybersecurity guidance; a key reference for automotive cybersecurity compliance in the U.S. market.

**Related:** Auto-ISAC, ISO 21434, UN R155, NIST, SAE J3061

### NIDP

**Full Name:** Network Intrusion Detection and Prevention

**Category:** Intrusion Detection

A security system combining intrusion detection (IDS) and active prevention (IPS) capabilities for in-vehicle networks, capable of detecting and blocking malicious CAN/Ethernet traffic in real time; deployed as standalone network IDS/IPS or integrated into gateway ECUs.

**Related:** IDS, IPS, CAN IDS, Network Security, Gateway ECU

### NIS 2 Directive

**Full Name:** EU Cybersecurity Directive

**Category:** Standards

The EU Directive (EU 2022/2555) on measures for a high common level of cybersecurity across the Union, replacing the NIS Directive; expanding scope to include the automotive sector as an essential entity, mandating incident reporting, supply chain security, and risk management for digital infrastructure and connected vehicle services.

**Related:** EU CRA, GDPR, Incident Response, Supply Chain Security

### NIST

**Full Name:** National Institute of Standards and Technology

**Category:** Standards

A U.S. federal agency that develops cybersecurity standards, guidelines, and frameworks widely adopted in the automotive industry, including cryptographic standards and the Cybersecurity Framework (CSF).

**Related:** NIST CSF, FIPS 140, CVSS, CVE, NVD

### NIST CSF

**Full Name:** NIST Cybersecurity Framework

**Category:** Standards

A voluntary framework providing a set of cybersecurity activities, outcomes, and references organized around five core functions (Identify, Protect, Detect, Respond, Recover) applicable to automotive organizations.

**Related:** NIST, ISO 21434, Risk Management, NIST SP 800-53, CSMS

### NIST SP 800-53

**Full Name:** Security and Privacy Controls for Information Systems

**Category:** Standards

A U.S. National Institute of Standards and Technology special publication providing a comprehensive catalog of security and privacy controls for information systems (Rev. 5), organized into 20 control families; used in automotive for evaluating cloud-connected vehicle platforms, telematics backends, and OTA update infrastructure security.

**Related:** NIST, NIST CSF, Cloud Security, Telematics, Supply Chain Security

### Nmap

**Category:** Security Tool

An open-source network discovery and security auditing tool that performs port scanning, service identification, OS fingerprinting, and vulnerability scripting via NSE (Nmap Scripting Engine); used in automotive security for discovering vehicle network services, testing telematics systems, and auditing connected vehicle attack surfaces.

**Related:** Network Service Scanning, Port Scanning, Penetration Testing, Bettercap

### NMEA

**Category:** Connectivity

A standard data format for communication between marine electronics and GNSS receivers, widely used in vehicle navigation systems for positioning data output.

**Related:** GNSS, RTCM, NTRIP

### Node Authentication

**Category:** Security

**Related:** Identity

Verifying identity of network nodes (ECUs or devices).

### Node Behavior Analysis

**Category:** Intrusion Detection

Monitoring ECU or device behavior for anomalies.

### Node Enumeration

**Category:** Attack

Identifying all ECUs or devices in a vehicle network.

### Node Isolation Failure

**Category:** Vulnerability

Failure to properly isolate network nodes.

### Node Spoofing

**Category:** Attack

Impersonating a legitimate network node.

### Node Trust Model

**Category:** Security Architecture

Model defining trust relationships between network nodes.

### Noise Analysis Attack

**Category:** Attack

Analyzing system noise patterns to extract sensitive information.

### Non-Repudiation Failure

**Category:** Security

Failure to ensure that actions cannot be denied by the originating entity.

### Nonce

**Category:** Cryptography

**Related:** Cryptographic Protocol

A random or unique number used once in cryptographic protocols.

### Nonce Reuse Attack

**Category:** Cryptography

**Related:** Encryption, Nonce

Exploiting reuse of nonces to break encryption or authentication.

### Normalization Attack

**Category:** Attack

Exploiting data normalization processes to inject or distort information.

### NPU

**Full Name:** Neural Processing Unit

**Category:** AI

A specialized processor designed for neural network inference acceleration; integrated into automotive SoCs (Qualcomm Snapdragon Ride, NVIDIA Orin, Mobileye EyeQ) to enable real-time ADAS perception, sensor fusion, and autonomous driving processing at power-efficient performance levels.

**Related:** AI Accelerator, Edge AI, Deep Learning, Inference Engine

### NTRIP

**Category:** Connectivity

Networked Transport of RTCM via Internet Protocol, a protocol for streaming GNSS correction data from reference stations to rovers (e.g., vehicles) for precise positioning.

**Related:** RTCM, NMEA, GNSS, C-V2X

### Null Pointer Dereference

**Category:** Vulnerability

A vulnerability where code attempts to read from or write to a null (zero) memory address, typically causing a crash, kernel panic, or denial of service; in automotive RTOS and AUTOSAR systems, null pointer dereferences in communication stacks or sensor data processing can halt critical vehicle functions.

**Related:** Memory Corruption, Dangling Pointer, Denial of Service, Kernel Crash

### NVD

**Full Name:** National Vulnerability Database

**Category:** Vulnerability

The U.S. government repository of vulnerability management data, providing CVSS scores, CWE classifications, and remediation guidance for CVEs affecting software and hardware, including automotive components.

**Related:** CVE, CVSS, NIST, MITRE, CWE

### NvM

**Full Name:** NVRAM Manager

**Category:** AUTOSAR

An AUTOSAR Basic Software module managing non-volatile data storage across multiple memory backends (Fee, EA), providing data integrity, consistency, and redundancy for security-critical calibration and configuration data.

**Related:** AUTOSAR Fee, AUTOSAR EA, Secure Storage

### NVRAM

**Full Name:** Non-Volatile RAM

**Category:** Hardware Security

Memory that retains data even after power loss, used in ECUs and embedded systems.

### NVRAM Dump

**Category:** Reverse Engineering

Extraction of non-volatile memory contents for analysis.

### NVRAM Tampering

**Category:** Attack

Modifying persistent configuration or state stored in NVRAM.

## O

### OBC

**Full Name:** On-Board Charger

**Category:** Vehicle Architecture

A power electronics component that converts AC mains electricity to DC for charging the high-voltage battery in electric vehicles, with communication interfaces that can be exploited for security attacks.

**Related:** BECM, VCU, EVSE, Inverter, ISO 15118

### OBD-II

**Full Name:** On-Board Diagnostics II

**Category:** Diagnostics

A standardized diagnostic interface mandated in most vehicles since 1996, providing access to engine and emission-related data, diagnostic trouble codes (DTCs), and vehicle parameters through a standard DLC connector.

**Related:** UDS, DLC, PID, SAE J1979, ISO 15765

### OBD-II Attack

**Category:** Attack

Exploitation of the OBD-II port to access or manipulate vehicle systems.

### OBD-II Fuzzing

**Category:** Penetration Testing

Sending malformed diagnostic messages to the OBD-II interface to discover vulnerabilities.

### OBD-II Gateway Bypass

**Category:** Attack

Circumventing gateway restrictions through diagnostic interfaces.

### OBD-II Injection

**Category:** Attack

Injecting malicious diagnostic commands via the OBD-II interface.

### OBEX

**Full Name:** Object Exchange

**Category:** Connectivity

A protocol for exchanging objects (files, contacts, messages) over Bluetooth, IrDA, or TCP/IP; in automotive contexts, used for Bluetooth file transfer and hands-free profile, and a known attack vector for Bluejacking and Bluesnarfing exploits.

**Related:** Bluetooth, Bluejacking, Bluesnarfing, Bluetooth Pairing

### Object Deserialization Attack

**Category:** Vulnerability

**Related:** Exploit, Unsafe Deserialization

Exploiting unsafe deserialization of objects.

### Object Detection

**Category:** AI

A computer vision task identifying and localizing objects (vehicles, pedestrians, cyclists, traffic signs) in camera images or lidar point clouds; a core function of ADAS perception systems using architectures like YOLO, SSD, and Faster R-CNN; subject to adversarial attacks.

**Related:** Computer Vision, CNN, Semantic Segmentation, Perception System, Adversarial Machine Learning

### Object Injection

**Category:** Attack

Injecting malicious objects into serialized data processing systems.

### Object Integrity Violation

**Category:** Security

Corruption or modification of structured objects in memory or storage.

### Object Serialization Exploit

**Category:** Attack

Manipulating serialized objects to achieve code execution.

### OBU

**Full Name:** On-Board Unit

**Category:** Connectivity

Device used for V2X communication and telematics services.

### ODD

**Full Name:** Operational Design Domain

**Category:** ADAS

The specific operating conditions under which an automated driving system is designed to function safely, including roadway types, geographic area, speed range, weather, and time-of-day constraints for L3/L4 autonomous vehicles.

**Related:** L3, L4, L5, ADS, ISO 21448

### ODX

**Full Name:** Open Diagnostic Data Exchange

**Category:** Diagnostics

An XML-based standard (ISO 22901) for describing vehicle diagnostic data, used for exchanging diagnostic specifications between OEMs, suppliers, and service tools in a machine-readable format.

**Related:** PDX, CDD, DEXT, OTX, MVCI

### Off-by-One Error

**Category:** Vulnerability

A boundary condition error where a loop or array index is off by one from the correct value, causing access to adjacent memory; in automotive firmware, off-by-one errors in CAN message buffer indexing, sensor data arrays, or string processing can overwrite critical data structures and allow exploitation.

**Related:** Buffer Overflow, Out-of-bounds Write, Array Index Out-of-Bounds, Memory Corruption

### Offline Attack

**Category:** Attack

Attacks performed without direct network access to the target system.

### Offline ECU Attack

**Category:** Attack

Attacking ECUs removed from the vehicle environment.

### Offline Firmware Analysis

**Category:** Reverse Engineering

Analyzing firmware extracted from devices without live system interaction.

### Offline Key Attack

**Category:** Cryptography

**Related:** Cryptographic Key

Extracting or brute-forcing cryptographic keys without online interaction.

### Offline Reverse Engineering

**Category:** Penetration Testing

Analyzing firmware or binaries without live system execution.

### OMS

**Full Name:** Occupant Monitoring System

**Category:** ECU

An in-cabin sensing system that monitors occupant presence, position, and behavior using cameras, radar, or capacitive sensors; used for seat belt reminders, airbag deployment optimization, child presence detection (CPD), and driver handoff verification in automated driving scenarios. Increasingly mandated by regulation (EU NCAP, NHTSA FMVSS).

**Related:** DMS, Euro NCAP, In-Cabin Sensing, Child Presence Detection

### OnStar

**Category:** Connectivity

A subsidiary of General Motors providing subscription-based telematics services including emergency response, navigation, remote diagnostics, and stolen vehicle slowdown; one of the earliest and largest connected car platforms.

**Related:** TCU, OTA, Telematics, Connected Car, V2X

### Opcode Injection

**Category:** Attack

Injecting malicious machine instructions into execution streams.

### Open Port Exposure

**Category:** Vulnerability

Exposure of network ports that can be exploited by attackers.

### Open Source Component Risk

**Category:** Supply Chain Security

Security risks introduced by open-source software in automotive systems.

### OpenBTS

**Category:** Security Tool

An open-source software implementation of a GSM base transceiver station (BTS) that uses SDR hardware to create private cellular networks; used in automotive security testing to create rogue BTS for TCU attacks.

**Related:** BTS, Rogue BTS, YateBTS, OsmocomBB, BladeRF, SDR, GSM

### OpenOCD

**Full Name:** Open On-Chip Debugger

**Category:** Security Tool

An open-source hardware debugging tool providing JTAG and SWD access to embedded processors, used in automotive security research for firmware extraction, memory analysis, and vulnerability assessment of vehicle ECUs.

**Related:** JTAG, SWD, J-Link, Bus Pirate, GDB

### openXSAM

**Category:** Security Architecture

Open XML Security Analysis Model, an open automotive security analysis framework for threat modeling, supporting tools like YAKINDU Security Analyst for structured threat analysis.

**Related:** TARA, HEAVENS, STRIDE, Attack Tree, Threat Modeling

### Operating System

**Category:** Operating System

The foundational system software managing hardware resources and providing services for applications in automotive ECUs, including real-time operating systems (RTOS), Linux, and Android Automotive variants.

**Related:** AUTOSAR OS, Linux, QNX, RTOS, Hypervisor

### Operational Security

**Full Name:** OpSec

**Category:** Security Architecture

Practices used to prevent exposure of sensitive information during operations.

### Optical Fault Injection

**Category:** Attack

A physical attack using focused light (laser or flash) to induce transient faults in semiconductor devices via the photoelectric effect, targeting specific circuit regions.

**Related:** Laser Fault Injection, EMFI, Voltage Fault Injection

### Orchestration Engine Exploit

**Category:** Attack

Exploiting vulnerabilities in orchestration systems managing distributed components.

### OS

**Full Name:** Operating System

**Category:** Operating System

Core software managing hardware and applications in automotive systems.

### OS Command Injection

**Category:** Attack

Injecting operating system commands through vulnerable interfaces.

### OS Hardening

**Category:** Security

Techniques used to improve operating system security.

### OS Kernel Exploit

**Category:** Attack

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

**Category:** Attack

Altering task scheduling behavior in operating systems.

### OSEK/VDX

**Category:** Operating System

A standardized real-time operating system specification for automotive ECUs, defining task scheduling, resource management, interrupt handling, and communication protocols; formed the foundation for AUTOSAR OS and is widely used in legacy ECUs.

**Related:** AUTOSAR OS, RTOS, OSEK OS, ECU

### OSINT

**Full Name:** Open Source Intelligence

**Category:** Penetration Testing

The practice of collecting and analyzing publicly available information about vehicle systems, OEM documentation, supplier technologies, and attack surfaces to inform automotive penetration testing and threat assessment activities.

**Related:** Penetration Testing, PTES, Reconnaissance, Intelligence Gathering, Information Gathering

### OsmocomBB

**Category:** Security Tool

An open-source GSM baseband firmware project for mobile phone hardware, used in automotive security research for GSM interception and rogue BTS attacks against vehicle TCUs.

**Related:** OpenBTS, YateBTS, GSM, BTS, Rogue BTS, SDR

### OSTree

**Category:** Operating System

A Git-like system for versioning and managing bootable Linux filesystem trees; used in automotive OTA update systems (e.g., AGL, Uptane) to enable atomic updates, rollback, and delta updates of IVI and telematics Linux systems.

**Related:** Yocto Project, AGL, OTA Attack, Secure Firmware Update

### OTA

**Full Name:** Over-the-Air

**Category:** OTA

A mechanism for remotely delivering software updates, firmware upgrades, configuration changes, and security patches to vehicles over wireless communication channels without requiring physical access.

**Related:** SUMS, ISO 24089, UN R156, Uptane, TUF

### OTA Attack

**Category:** Attack

Exploitation of OTA update mechanisms to inject malicious firmware or downgrade systems.

### OTA Integrity Check

**Category:** Security

Verification of firmware integrity during over-the-air updates.

### OTA Signature Verification

**Category:** Security

Cryptographic validation of firmware authenticity in OTA updates.

### OTA Update Server

**Category:** OTA

Backend system responsible for distributing firmware updates to vehicles.

### OTA Vulnerability

**Category:** Vulnerability

A security weakness in Over-the-Air update mechanisms that can be exploited to install malicious or unauthorized firmware on ECUs; common OTA vulnerabilities include signature verification bypass, rollback attack, insufficient transport security, missing integrity checks, or authentication flaws in the update server and vehicle communication.

**Related:** Firmware Vulnerability, Bootloader Vulnerability, Rollback Attack, Signed Firmware Bypass

### OTP

**Full Name:** One-Time Programmable

**Category:** Hardware Security

A type of non-volatile memory that can be written once and never modified, used in automotive SoCs for storing secure boot keys, root of trust configuration, and hardware-unique device identifiers.

**Related:** eFuse, PBL, Secure Boot, Root of Trust, Hardware Root Key

### OTX

**Full Name:** Open Test sequence eXchange

**Category:** Diagnostics

An ISO 13209 standard for exchanging test sequences in the automotive diagnostic domain, enabling portable and standardized test procedure definitions.

**Related:** ODX, PDX, MVCI, ASAM

### Out-of-Band Attack

**Category:** Attack

Attacks conducted through channels outside the primary communication path.

### Out-of-Band Authentication

**Category:** Security

Authentication using a separate communication channel.

### Out-of-bounds Read

**Category:** Vulnerability

A vulnerability where a program reads data beyond the allocated boundary of a buffer or array, potentially exposing sensitive memory contents; in automotive systems, out-of-bounds reads in diagnostic responders, CAN message parsers, or infotainment media decoders can leak cryptographic keys or vehicle data.

**Related:** Buffer Overflow, Memory Disclosure, Information Disclosure, Out-of-bounds Write, Array Index Out-of-Bounds

### Out-of-bounds Write

**Category:** Vulnerability

A vulnerability where a program writes data beyond the allocated boundary of a buffer or array, corrupting adjacent memory and potentially leading to code execution or privilege escalation; a primary class of memory safety vulnerabilities in automotive C/C++ firmware for ECUs, ADAS, and IVI systems.

**Related:** Buffer Overflow, Memory Corruption, Heap Overflow, Stack Overflow, Off-by-One Error

### Over-the-Top (OTT) Vehicle Services

**Category:** Vehicle Security

Cloud-based services delivered directly to vehicle infotainment systems.

### Overprivileged Service

**Category:** Vulnerability

A service with excessive permissions beyond its required scope.

### OWASP

**Full Name:** Open Worldwide Application Security Project

**Category:** Security Architecture

A nonprofit foundation publishing the OWASP Top 10, ASVS (Application Security Verification Standard), and testing guides; widely referenced for web and API security in connected vehicle platforms.

**Related:** CWE, CVE, Top 10, ASVS, API Security

## P

### Packet Filtering Bypass

**Category:** Attack

Circumventing firewall or packet filtering rules.

### Packet Injection

**Category:** Attack

Injecting malicious network packets into communication channels.

### Packet Manipulation

**Category:** Attack

Modifying packets in transit to alter communication.

### Packet Replay

**Category:** Attack

Re-sending captured packets to manipulate system behavior.

### Packet Sniffing

**Category:** Reverse Engineering

Capturing and analyzing network traffic.

### Paging

**Category:** Operating System

A memory management scheme that maps virtual addresses to physical memory in fixed-size pages; used by automotive Linux and MMU-equipped RTOS for process isolation, virtual address spaces, and demand-paging of large IVI applications.

**Related:** Virtual Memory, MMU, Context Switch, Process Isolation

### Para-Virtualization

**Category:** Virtualization

A virtualization technique where the guest OS is modified to use hypervisor-provided interfaces (hypercalls) instead of emulated hardware, improving I/O performance; used in automotive for para-virtualized network and storage drivers in IVI VMs.

**Related:** Full Virtualization, Hardware-Assisted Virtualization, VirtIO, Hypervisor, KVM

### Parsing Vulnerability

**Category:** Vulnerability

**Related:** Code Execution

Flaws in input parsing leading to crashes or code execution.

### PASTA

**Full Name:** Process for Attack Simulation and Threat Analysis

**Category:** Threat Modeling

A risk-centric threat modeling methodology combining business impact analysis with technical threat identification, aligned with ISO 21434 TARA requirements for comprehensive automotive security analysis.

**Related:** TARA, STRIDE, VAST, TRIKE, DFD

### Path Traversal

**Full Name:** Directory Traversal

**Category:** Vulnerability

A vulnerability where an attacker uses ".." sequences or absolute paths in file system operations to access files outside the intended directory; in automotive IVI systems, path traversal in media player, file browser, or update mechanisms can read sensitive files (credentials, configuration) or write malicious payloads.

**Related:** Input Validation Failure, Information Disclosure, Injection Attack, Command Injection

### PBKDF2

**Full Name:** Password-Based Key Derivation Function 2

**Category:** Cryptography

A key derivation function (RFC 8018) applying a PRF iteratively to derive keys from passwords, used in automotive diagnostic security access and key management.

**Related:** HKDF, HMAC, Diagnostic Security Access, Key Management

### PBL

**Full Name:** Primary Bootloader

**Category:** Boot Security

The first programmable software stage executed after the immutable Boot ROM during the system startup process, responsible for initializing essential hardware (clock, memory controller, debug interfaces) and loading the Secondary Bootloader (SBL) from storage into RAM. PBL is typically stored in one-time programmable (OTP) memory or protected flash sectors and serves as the initial trust anchor in the secure boot chain, often performing the first stage of code verification.

**Related:** SBL, Boot ROM, Boot Chain of Trust, Secure Boot, OTP, HSM

### PC5

**Full Name:** PC5 Interface

**Category:** Connectivity

The direct sidelink communication interface defined by 3GPP for C-V2X, enabling V2V and V2I communication without cellular network involvement, operating in the 5.9 GHz ITS band.

**Related:** C-V2X, V2X, DSRC

### PCAN

**Category:** Security Tool

A family of CAN/CAN FD interface hardware by PEAK-System connecting PCs to CAN networks via USB/PCIe/Ethernet, widely used by security researchers for CAN sniffing, injection, and fuzzing.

**Related:** CAN, CAN FD, Fuzzing, ValueCAN

### PCB

**Full Name:** Printed Circuit Board

**Category:** Hardware Security

The physical board that interconnects electronic components in automotive ECUs; PCB layout, trace accessibility, and test points can expose debug interfaces and side-channel leakage paths exploitable by attackers with physical access.

**Related:** JTAG, Hardware Debug Interface, Side Channel Attack, Debug Interface

### PCIe

**Full Name:** Peripheral Component Interconnect Express

**Category:** Hardware Security

A high-speed serial bus standard used in automotive domain controllers and high-performance ECUs for interconnecting processors, accelerators, and peripherals; introduces DMA-based attack surfaces requiring IOMMU protection.

**Related:** DMA, IOMMU, BAR, SoC, Attack Surface

### PCM

**Full Name:** Powertrain Control Module

**Category:** ECU

An integrated ECU combining engine control (fuel injection, ignition timing, variable valve timing) and transmission control (shift scheduling, line pressure) into a single module; receives sensor inputs (crank position, O2, MAF, throttle) and drives actuators (injectors, coils, VVT solenoids). Common in older and mid-range vehicles; increasingly split into ECM + TCM in modern architectures.

**Related:** ECM, TCM, Powertrain Security, Torque Vectoring

### PDX

**Full Name:** Packaged ODX

**Category:** Diagnostics

A compressed archive format containing ODX diagnostic data along with referenced files (such as images, scripts, or additional data), used for exchanging complete diagnostic packages between OEMs, suppliers, and service tools.

**Related:** ODX, CDD, DEXT, OTX, MVCI

### Penetration Testing

**Category:** Penetration Testing

A security assessment methodology in which testers simulate real-world attacks against vehicle systems, networks, and ECUs to identify exploitable vulnerabilities and validate security controls.

**Related:** Reverse Engineering, OSINT, Metasploit Framework, PTES, Reconnaissance

### PEPS

**Full Name:** Passive Entry Passive Start

**Category:** ECU

A body security system that enables keyless vehicle access and ignition: the vehicle periodically broadcasts LF (low-frequency) wake-up signals, the smart key responds via RF (UHF or BLE), and the system authenticates the key and unlocks the door or authorizes engine start without physical key insertion. Attacks include relay attacks (RollJam, NFC relay) and cryptographic cloning.

**Related:** RKE, Immobilizer, NFC Relay Attack, RollJam Attack, BCM

### Perception System

**Category:** AI

The AI-driven subsystem in ADAS and autonomous driving that processes sensor data (cameras, lidar, radar) to understand the vehicle's environment; encompasses object detection, semantic segmentation, depth estimation, tracking, and sensor fusion.

**Related:** Object Detection, Semantic Segmentation, Sensor Fusion, Computer Vision, ADAS

### Peripheral Exploit

**Category:** Attack

Exploiting vulnerabilities in peripheral communication interfaces.

### Peripheral Firmware Attack

**Category:** Attack

Exploiting firmware running on peripheral devices.

### Peripheral Isolation Failure

**Category:** Vulnerability

Failure to isolate peripheral devices from core system memory.

### Persistent ECU Compromise

**Category:** Attack

Maintaining unauthorized control over ECUs after reboot or update.

### PFD

**Full Name:** Process Flow Diagram

**Category:** Threat Modeling

A diagram representing the sequence of operations and data flow in a system process; used in automotive threat modeling to identify attack surfaces at each processing step.

**Related:** DFD, Threat Modeling, TARA, STRIDE

### Phishing

**Category:** Attack

An Auto-ISAC attack technique where an adversary uses social engineering via email, SMS, or in-vehicle messaging to trick OEM employees, dealership staff, or fleet managers into revealing credentials or installing malware on connected systems.

**Related:** Social Engineering, Input Capture, Credential Access

### PHM

**Full Name:** Platform Health Management

**Category:** AUTOSAR

An AUTOSAR module that monitors runtime health of software entities through supervision watchpoints, alive supervision, and deadline supervision, detecting and recovering from security-related anomalies and faults.

**Related:** AUTOSAR WdgM, Functional Safety, AUTOSAR DEM

### Physical Access Attack

**Category:** Attack

Attacks requiring physical access to vehicle components.

### Physical Layer Attack

**Full Name:** L1

**Category:** Attack

Attacks targeting the physical transmission layer of communication systems.

### Physical Tampering

**Category:** Attack

Direct modification of hardware components to bypass security.

### PID

**Full Name:** Parameter ID

**Category:** Diagnostics

An identifier used in OBD-II to request and interpret specific diagnostic data values from ECUs, such as engine RPM, coolant temperature, or vehicle speed.

**Related:** OBD-II, DTC, UDS, SAE J1979

### PII

**Full Name:** Personally Identifiable Information

**Category:** Security

Any information that can be used to identify a specific individual, such as name, location, biometric data, or vehicle identification number, subject to protection under privacy regulations including GDPR and PIPL.

**Related:** Privacy, GDPR, PIPL, Data Security, CCPA

### PikeOS

**Category:** Virtualization

A safety-critical separation kernel and real-time operating system by SYSGO, certified to Common Criteria EAL5+ and ISO 26262 ASIL D; supports multiple guest OSes (Linux, AUTOSAR, RTOS) via para-virtualization on a single SoC, widely used in automotive domain controllers and cockpit systems.

**Related:** Separation Kernel, Hypervisor, AUTOSAR OS, COQOS, QNX Hypervisor

### PIPL

**Full Name:** Personal Information Protection Law

**Category:** Security

China's comprehensive data protection law governing the processing of personal information, applicable to automotive OEMs and service providers that process data of Chinese citizens through connected vehicles and telematics services.

**Related:** GDPR, Privacy, Data Security, DSL, GB/T 41871

### PKCS

**Full Name:** Public Key Cryptography Standards

**Category:** Cryptography

A set of RSA Laboratories standards for public key cryptography (PKCS#7 for signed data, PKCS#10 for certificate requests, PKCS#12 for key/cert packaging); used in automotive PKI for certificate management and V2X security.

**Related:** PKI, Certificate Authority, RSA, CRL, V2X PKI, Certificate

### PKI

**Full Name:** Public Key Infrastructure

**Category:** Cryptography

A framework of policies, hardware, software, and procedures for creating, managing, distributing, and revoking digital certificates used in vehicle-to-vehicle communication, OTA updates, and ECU authentication.

**Related:** Certificate Authority, CRL, V2X PKI, SCMS, X.509

### PKI Attack

**Category:** Cryptography

**Related:** Certificate

Exploitation of weaknesses in certificate issuance, validation, or trust chains.

### PKI Certificate Spoofing

**Category:** Attack

Forging or misusing certificates to impersonate trusted entities.

### Play Integrity

**Category:** Android

Google's API for attesting the integrity and security state of an Android device, replacing SafetyNet Attestation. Play Integrity verifies device integrity (unmodified bootloader/OS), app licensing (installed from Play Store), and device environment (no known rooting/malware), providing cryptographic attestation tokens that backend services use to trust the client device in automotive apps and services.

**Related:** SafetyNet, Attestation, Verified Boot, Android Keystore, Root Detection

### PLC

**Full Name:** Power-Line Communication

**Category:** Network

A technology enabling data transmission over vehicle power lines, used in automotive applications such as battery management in EVs and PLC4TRUCKS (SAE J2497) for commercial vehicle trailer communications; presents an attack surface for power-line injection.

**Related:** SAE J2497, EV Battery, CAN, LIN

### Pointer Manipulation Attack

**Category:** Hardware Security

Exploiting pointer misuse to alter program execution flow.

### Policy Bypass

**Category:** Attack

Circumventing security or access control policies.

### Policy Enforcement Failure

**Category:** Vulnerability

Failure to enforce security policies consistently.

### POSIX

**Category:** Operating System

A family of IEEE standards defining APIs, shell utilities, and thread interfaces for Unix-like operating systems; automotive Linux systems (AGL, Yocto) implement POSIX interfaces for pthreads, signals, IPC, file I/O, and real-time extensions (POSIX.1b).

**Related:** Linux, Thread, Mutex, Semaphore, Shared Memory, Signal (POSIX), Message Queue

### Power Analysis Attack

**Category:** Attack

Extracting cryptographic keys by analyzing power consumption patterns.

### Power Glitch Attack

**Category:** Attack

Manipulating power supply to induce faults or bypass security checks.

### Power Management Attack

**Category:** Attack

Exploiting power state transitions in embedded systems.

### Power Side Channel

**Category:** Hardware Security

Analyzing power consumption to extract cryptographic keys.

### PP

**Full Name:** Pre-Production

**Category:** Vehicle Architecture

The final validation phase before mass production where vehicles are built on the full production line with final parts, tooling, and processes to confirm readiness for series production and regulatory compliance.

**Related:** TT, MP, SOP, VB, CB

### PQC

**Full Name:** Post-Quantum Cryptography

**Category:** Cryptography

Cryptographic algorithms designed to be secure against attacks by both classical and quantum computers, being standardized by NIST for future deployment in long-lived automotive systems.

**Related:** ML-DSA, ML-KEM, SLH-DSA, CRYSTALS-Kyber, NIST

### Preemptive Scheduling Attack

**Category:** Attack

Abusing preemption mechanisms to disrupt system timing.

### Priority-Based Scheduling

**Category:** Operating System

Scheduling method where higher priority tasks preempt lower ones.

### Privacy

**Category:** Security

The protection of personal and sensitive data collected by vehicles, including location, driver behavior, biometrics, and in-cabin monitoring data, governed by regulations such as GDPR and PIPL.

**Related:** GDPR, PII, Data Security, Cabin Monitoring System, PIPL

### Privilege Boundary

**Category:** Security Architecture

Separation between different privilege levels in system design.

### Privilege Escalation

**Category:** Attack

Gaining higher-level permissions than originally assigned.

### PRNG

**Full Name:** Pseudo-Random Number Generator

**Category:** Cryptography

An algorithm that generates sequences of numbers approximating random properties using a deterministic process from an initial seed value, used in cryptographic operations where a TRNG may not be available.

**Related:** TRNG, DRBG, Entropy, Weak PRNG, CSPRNG

### Process Discovery

**Category:** Attack

An Auto-ISAC reconnaissance technique where an adversary enumerates running processes on a compromised vehicle system to identify security software, active services, and potential targets for privilege escalation.

**Related:** System Information Discovery, Software Discovery, Penetration Testing, Privilege Escalation, Network Information Discovery, Network Service Scanning, System Network Configuration Discovery, System Network Connections Discovery

### Process Escape

**Category:** Attack

Breaking out of restricted process environments or sandboxes.

### Process Heap Overflow

**Category:** Hardware Security

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

### Project Mainline

**Category:** Android

A Google-led initiative to modularize core Android system components into updatable APEX and APK modules distributed through Google Play System Updates, bypassing traditional OEM OTA update cycles. In Android Automotive, Mainline enables direct security updates for critical components (media codecs, network stack, TLS implementation) without waiting for OEM integration.

**Related:** APEX, Google Play System Update, Treble, OTA, GSI

### Protocol Downgrade Attack

**Category:** Attack

Forcing systems to use weaker or legacy communication protocols.

### Protocol Fuzzing

**Category:** Penetration Testing

Sending malformed protocol messages to discover vulnerabilities.

### Protocol Injection

**Category:** Attack

Injecting malicious data into protocol communication streams.

### Protocol Stack Exploit

**Category:** Attack

Exploiting vulnerabilities across multiple layers of communication protocol stacks.

### PSA

**Full Name:** Platform Security Architecture

**Category:** Security Architecture

A security framework defining secure design principles for embedded systems.

### PSA Certified

**Category:** Security Architecture

Certification scheme validating security compliance of embedded platforms.

### PTES

**Full Name:** Penetration Testing Execution Standard

**Category:** Penetration Testing

A comprehensive, community-driven standard for conducting penetration tests, defining seven phases from pre-engagement interactions through reporting, applicable to automotive security testing.

**Related:** Penetration Testing, OSINT, Reconnaissance, Metasploit Framework, ROE

### PTP

**Full Name:** Precision Time Protocol

**Category:** Network

An IEEE 1588 standard for sub-microsecond clock synchronization over Ethernet networks, used in automotive Ethernet TSN for coordinating safety-critical real-time communication; vulnerable to time synchronization attacks that can disrupt TSN scheduling.

**Related:** IEEE 1588, TSN, gPTP, Automotive Ethernet, Network Time Synchronization Attack

### PUF

**Full Name:** Physically Unclonable Function

**Category:** Hardware Security

A hardware primitive exploiting manufacturing variations to produce a unique, unclonable device fingerprint used for key generation, device authentication, and anti-counterfeiting in automotive microcontrollers; serves as a hardware root of trust without storing keys in non-volatile memory.

**Related:** Hardware Root of Trust, eFuse, HTA, Key Storage

### PWM

**Full Name:** Pulse Width Modulation

**Category:** Hardware Security

A technique for encoding analog signal levels into digital pulses by varying duty cycle, widely used in automotive for motor control, LED dimming, and sensor interfaces; PWM signal manipulation can affect safety-critical actuators.

**Related:** SENT, CAN, Sensor, Actuator

### Python-CAN

**Category:** Security Tool

A Python library providing CAN bus interface abstraction across multiple backends (SocketCAN, PCAN, USB2CAN, virtual), supporting CAN 2.0 and CAN FD message transmission, reception, and bus monitoring; the standard Python library for automotive security scripting and CAN bus tool development.

**Related:** CAN Bus, SocketCAN, can-utils, CAN Fuzzing, CANtact

## Q

### QMS

**Full Name:** Quality Management System

**Category:** Standards

A formalized system for managing quality processes across an organization, foundational to IATF 16949 compliance; in automotive cybersecurity, QMS intersects with security lifecycle management as required by ISO 21434 and UN R155.

**Related:** IATF 16949, ISO 21434, ASPICE, Quality Assurance, UN R155

### QNX

**Category:** Operating System

A Unix-like real-time operating system widely used in automotive infotainment, ADAS, and safety-critical ECUs.

### QNX Hypervisor

**Category:** Virtualization

A Type-1 hypervisor by BlackBerry QNX enabling simultaneous execution of QNX Neutrino RTOS (for safety-critical, ASIL D) and Linux/Android (for IVI) on a single SoC; provides para-virtualized drivers, device passthrough, and inter-VM communication for automotive cockpit domain controllers.

**Related:** QNX Neutrino RTOS, Type-1 Hypervisor, Separation Kernel, ACRN, Hypervisor, PikeOS

### QNX IPC

**Full Name:** Message Passing

**Category:** Operating System

Primary communication mechanism in QNX based on message passing rather than shared memory.

### QNX Memory Partitioning

**Category:** Operating System

Mechanism for isolating memory between processes and system components.

### QNX Microkernel

**Category:** Operating System

**Related:** Kernel

A minimal kernel design where most services run in user space for reliability and isolation.

### QNX Neutrino RTOS

**Category:** Operating System

**Related:** Kernel

The microkernel-based version of QNX used in modern automotive systems.

### QNX Process Manager

**Category:** Operating System

Manages process creation, scheduling, and lifecycle in QNX systems.

### QNX Resource Manager

**Category:** Operating System

A user-space service that exposes device and system resources as file-like interfaces.

### QNX Sandbox Escape

**Category:** Attack

Breaking isolation boundaries in QNX user-space services.

### QNX Scheduler

**Category:** Operating System

**Related:** Priority-Based Scheduling

Priority-based scheduling system ensuring deterministic execution.

### QNX Secure Boot

**Category:** Boot Security

Mechanism ensuring integrity of QNX boot chain.

### QoS

**Full Name:** Quality of Service

**Category:** Network

A set of technologies and policies for prioritizing network traffic to ensure deterministic latency and bandwidth for critical automotive communication; QoS manipulation attacks can degrade safety-critical message delivery in automotive Ethernet TSN networks.

**Related:** TSN, Automotive Ethernet, Network Prioritization, PTP

### Qualcomm DSP Interface

**Category:** Hardware Security

Communication channel between CPU and digital signal processor.

### Qualcomm Modem Interface

**Category:** Connectivity

Interface between application processor and baseband modem.

### Qualcomm Subsystem Communication

**Category:** Hardware Security

Communication between modem, DSP, GPU, and application processor.

### Qualcomm TrustZone Interface

**Category:** Security Architecture

Secure communication channel between secure and non-secure worlds.

### Queue Manipulation

**Category:** Attack

Altering order or content of queued messages to affect execution.

### Queue Overflow

**Category:** Vulnerability

**Related:** Memory Corruption

Condition where message queues exceed capacity leading to memory corruption or denial of service.

### Queue-Based DoS

**Category:** Attack

Overloading message queues to degrade system performance.

## R

### Race Condition

**Category:** Vulnerability

A vulnerability where the timing or interleaving of concurrent operations (multithreading, interrupt handlers, multiple processes) leads to unexpected behavior; in automotive real-time systems, race conditions in shared resource access (CAN message buffers, shared memory, peripheral registers) can cause data corruption, state inconsistency, or security bypass.

**Related:** TOCTOU, Logic Vulnerability, Denial of Service, Kernel Memory Corruption

### Radar

**Full Name:** Radio Detection and Ranging

**Category:** ADAS

A sensor technology that uses radio waves to detect objects, measure their distance (range), velocity (Doppler effect), and angle. In vehicles, radar operates at 24 GHz or 76–81 GHz bands for adaptive cruise control, collision avoidance, blind-spot detection, and automated driving perception, and is a potential target for spoofing and jamming attacks.

**Related:** mmWave Radar, 4D Imaging Radar, Radar Spoofing, Radar Jamming, LiDAR, Sensor Fusion

### Radar Cross Section

**Category:** ADAS

A measure of how detectable an object is by radar, expressed as the effective area that reflects radar energy back to the receiver. In automotive security, objects with low radar cross section (motorcycles, pedestrians) are harder to detect, and attackers may exploit RCS characteristics to design stealth objects that evade automotive radar detection.

**Related:** Radar, Stealth, Radar Spoofing, Object Detection, RCS Reduction

### Radar Interference

**Category:** Attack

Mutual or intentional electromagnetic interference between multiple radar sensors operating in the same frequency band, causing ghost targets, reduced sensitivity, or false detections. As more vehicles deploy automotive radar, interference mitigation techniques (frequency hopping, coded waveforms) become critical for sensor reliability in dense traffic environments.

**Related:** Radar Jamming, Radar Spoofing, EMI, Ghost Target, Interference Mitigation

### Radar Jamming

**Category:** Attack

An active attack that transmits radio frequency interference in the radar operating band to overwhelm or saturate the radar receiver, preventing it from detecting legitimate targets. In automotive contexts, radar jamming can disable adaptive cruise control, automatic emergency braking, and blind-spot monitoring, creating hazardous driving conditions.

**Related:** Radar Spoofing, Radar Interference, Denial of Service, Jamming, Electronic Warfare

### Radar Spoofing

**Category:** ADAS

Injecting fake radar reflections to mislead detection systems.

### radare2

**Category:** Security Tool

An open-source reverse engineering and binary analysis framework supporting dozens of architectures with a command-line interface, visual mode, ESIL emulation, and scripting in Python, Rust, and JavaScript; used in automotive firmware analysis for vulnerability discovery, code patching, and forensic analysis.

**Related:** Ghidra, IDA Pro, Binary Ninja, Reverse Engineering, Firmware Analysis

### Radio Protocol Exploit

**Category:** Attack

Exploiting vulnerabilities in radio communication protocols.

### RCE

**Full Name:** Remote Code Execution

**Category:** Attack

Executing arbitrary code on a target system remotely through a vulnerability.

### RCM

**Full Name:** Restraints Control Module

**Category:** ECU

A safety ECU that detects collision events via accelerometers and satellite sensors, then deploys airbags and pretensions seatbelts in the correct sequence and timing; monitors system health through continuous diagnostics (squib resistance, sensor plausibility). Also known as ACU (Airbag Control Unit) or SRS (Supplementary Restraint System) module.

**Related:** Airbag ECU, Brake ECU, CCM, ABS, ESC

### Read-Only Memory (ROM) Exploit

**Category:** Attack

Exploiting vulnerabilities in ROM-based firmware or boot code.

### Real-Time Constraint Violation

**Category:** Functional Safety

Failure to meet timing deadlines in safety-critical systems.

### Real-Time Virtualization

**Category:** Virtualization

Virtualization technologies and scheduling mechanisms that guarantee deterministic timing behavior for real-time VMs in mixed-criticality automotive systems; ensures that safety-critical AUTOSAR or RTOS tasks meet hard deadlines regardless of non-critical VM activity.

**Related:** Hypervisor, RTOS, AUTOSAR OS, Mixed-Criticality Virtualization, Hardware-Assisted Virtualization

### Reconnaissance

**Category:** Penetration Testing

The first phase of penetration testing involving information gathering about the target vehicle, including passive (OSINT) and active (network scanning, wireless sniffing) techniques to map the attack surface before exploitation.

**Related:** OSINT, PTES, Passive Reconnaissance, Active Reconnaissance, Intelligence Gathering

### Recovery Mode

**Category:** Hardware Security

A minimal runtime environment used for factory reset, OTA installation, and recovery operations.

### Register Manipulation

**Category:** Attack

Direct modification of hardware registers.

### Reinforcement Learning

**Category:** AI

A machine learning paradigm where an agent learns optimal actions through trial-and-error interaction with an environment; applied in autonomous driving for decision-making (lane changing, merging, intersection handling), motion planning, and control policy optimization.

**Related:** Deep Learning, End-to-End Learning, Behavior Prediction, Autonomous Driving, Imitation Learning

### Remote Diagnostics Attack

**Category:** Attack

Exploiting remote diagnostic interfaces in vehicles.

### Remote ECU Access

**Category:** Attack

Gaining remote control over ECU systems via network or wireless channels.

### Replay Attack

**Category:** Attack

Reusing captured communication to deceive systems.

### Reprogram Co-Located Computing Device

**Category:** Attack

An Auto-ISAC attack technique where an adversary reprograms or reflashes firmware on co-located computing devices (e.g., domain controllers, smart sensors, telematics units) to implant malicious functionality or alter operational parameters.

**Related:** ECU Reprogramming, Firmware Update, Exploit Co-Located Computing Device

### Reset Attack

**Category:** Attack

Forcing system resets to manipulate state or bypass checks.

### Resource Exhaustion

**Category:** Attack

A type of attack causing denial of service by consuming limited system resources such as memory, CPU, file descriptors, or network bandwidth, degrading or disabling vehicle functions.

**Related:** DoS, Heap Exhaustion, Stack Exhaustion, Resource Leak, Memory Leak

### Resource Exhaustion Attack

**Category:** Attack

Overloading system resources to degrade performance.

### Resource Leak

**Category:** Vulnerability

A vulnerability where a system fails to release finite resources (memory, file descriptors, network sockets, kernel objects) after use, leading to gradual resource exhaustion; in automotive ECUs with long service lifetimes, resource leaks in diagnostic services, CAN message handlers, or telemetry connections can cause system degradation or denial of service.

**Related:** Memory Leak, Resource Exhaustion, Denial of Service, Heap Exhaustion

### Return-Oriented Programming

**Full Name:** ROP

**Category:** Attack

A code-reuse exploitation technique that chains together small instruction sequences (gadgets) ending in a return instruction to achieve arbitrary computation without injecting code, bypassing NX/DEP protections; in automotive exploitation chains, ROP is used to pivot through ASLR, disable security mitigations, and achieve code execution on ECU firmware, IVI OS, and TEE Trusted Applications.

**Related:** Code Execution, JOP, ASLR, DEP

### Reverse Engineering

**Category:** Penetration Testing

The process of analyzing systems, firmware, or binaries to understand internal behavior.

### Reverse Engineering Firmware

**Category:** Reverse Engineering

Analyzing ECU or infotainment firmware to discover vulnerabilities.

### RF

**Full Name:** Radio Frequency

**Category:** Network

Wireless communication using electromagnetic radio waves.

### RF Front-End Attack

**Category:** Attack

Exploiting RF hardware components in wireless systems.

### RF Jamming

**Category:** Attack

Disrupting RF communication signals to block or degrade service.

### RF Spoofing

**Category:** Attack

Transmitting fake RF signals to mislead receivers.

### RFID Attack

**Category:** Attack

Exploiting RFID systems used in vehicle access or immobilizers.
### Risk
**Category:** Threat Modeling
The combination of the probability of a threat scenario occurring and its potential adverse consequences (damage scenario impact), as defined in ISO 21434. Automotive cybersecurity risk is calculated by combining attack feasibility (attack potential rating) with impact severity, resulting in risk values (e.g., 1-5) that determine whether risk treatment, reduction, retention, or avoidance is required.
**Related:** TARA, Risk Assessment, Risk Treatment, Risk Management, ISO 21434, Damage Scenario, Attack Potential

### Risk Assessment

**Category:** Security

The process of identifying, analyzing, and evaluating cybersecurity risks to vehicle systems, typically conducted following the TARA methodology defined in ISO 21434 to determine appropriate risk treatment measures.

**Related:** TARA, Risk Management, ISO 21434, Threat Modeling, RPN

### Risk Management

**Category:** Security

The coordinated activities to direct and control an organization with regard to risk, encompassing risk assessment, treatment, acceptance, and communication, as required by ISO 21434 for automotive cybersecurity.

**Related:** ISO 21434, Risk Assessment, CSMS, NIST CSF, ISO 31000

### RKE

**Full Name:** Remote Keyless Entry

**Category:** Vehicle Architecture

A system allowing drivers to lock/unlock and start vehicles remotely via key fob radio signals; one-way RKE sends commands only from fob to vehicle, while two-way RKE provides bidirectional communication. Vulnerable to relay, replay, and relay attacks.

**Related:** Key Fob, Relay Attack, RollJam, CAN Bus, Immobilizer

### ROE

**Full Name:** Rules of Engagement

**Category:** Penetration Testing

A formal document defining the scope, boundaries, and permitted actions for a penetration test, including target systems, allowed attack techniques, timelines, and escalation procedures; critical for automotive security assessments.

**Related:** PTES, Penetration Testing, Scope Definition, WBS

### Rogue BTS

**Category:** Attack

A fraudulent base transceiver station (BTS) created using SDR hardware (BladeRF, USRP, HackRF) and open-source software (OpenBTS, YateBTS, OsmocomBB) to impersonate a legitimate cellular network, enabling interception of vehicle TCU communications, IMSI capture, and downgrade attacks.

**Related:** BTS, IMSI Catcher, IMSI, TCU, GSM, OpenBTS, YateBTS, BladeRF, SDR

### Rollback Protection

**Category:** Security

A security mechanism that prevents an attacker from downgrading vehicle firmware or software to an older, vulnerable version, typically enforced through version counters, secure storage, and hardware-protected monotonic counters.

**Related:** RPMB, Secure Boot, OTA, A/B Slot, Anti-rollback

### RollJam Attack

**Category:** Attack

A wireless attack on rolling-code keyless entry systems that intercepts and jams the key fob RF signal, captures the rolling code, and replays it to unlock the vehicle, defeating code-rolling protections.

**Related:** Rolling Code, Replay Attack, Keeloq

### Root Access

**Category:** IAM

Highest level of system access in Unix-like operating systems.

### Root Certificate Exploit

**Category:** Cryptography

**Related:** Certificate

Abusing trusted root certificates to bypass authentication.

### Root Exploit

**Category:** Attack

Vulnerabilities that allow attackers to gain root privileges.

### Root of Trust

**Category:** Security Architecture

A trusted hardware or firmware base used to verify system integrity.

### ROS

**Full Name:** Robot Operating System

**Category:** ADAS

**Related:** Autonomous Driving

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

**Category:** Attack

Compromising ROS-based autonomous systems.

### ROS2 Security Model

**Category:** Attack

Security architecture for ROS2 including DDS-based communication security.

### Router ECU

**Category:** ECU

ECU responsible for routing communication between vehicle domains.

### Routing Attack

**Category:** Attack

Manipulating routing tables or communication paths in vehicle networks.

### Routing Table Poisoning

**Category:** Attack

Injecting false routing information to redirect traffic.

### RPC

**Full Name:** Remote Procedure Call

**Category:** Security Architecture

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

### RPMB

**Full Name:** Replay Protected Memory Block

**Category:** Hardware Security

A protected partition in eMMC and UFS storage devices providing authenticated, replay-protected data access using a shared key, used in vehicles to securely store rollback counters and sensitive metadata.

**Related:** eMMC, UFS, HMAC, Rollback Protection, Secure Storage

### RPN

**Full Name:** Risk Priority Number

**Category:** Penetration Testing

A numerical score (1-1000) used in FMEA to rank risk priority, calculated as Severity x Occurrence x Detectability; in automotive cybersecurity, RPN helps prioritize which threats and vulnerabilities to mitigate first based on their combined risk factors.

**Related:** FMEA, HARA, ASIL, Risk Assessment, ISO 26262

### RSA

**Full Name:** Rivest-Shamir-Adleman

**Category:** Cryptography

A widely used public-key cryptosystem for secure data transmission and digital signatures, increasingly being supplanted by ECC and PQC algorithms in resource-constrained automotive applications.

**Related:** ECC, PQC, PKCS, Public-Key Cryptography, DH

### RSU

**Full Name:** Roadside Unit

**Category:** Connectivity

A roadside communication device in V2X networks that exchanges data with vehicles via DSRC or C-V2X, supporting V2I applications such as traffic signal phase and hazard warnings.

**Related:** OBU, V2I, C-V2X, V2X

### RTCM

**Category:** Connectivity

Radio Technical Commission for Maritime Services protocol, defining standard format for GNSS differential correction data used in precise vehicle positioning systems.

**Related:** NMEA, NTRIP, GNSS, C-V2X

### RTL-SDR

**Category:** Security Tool

A low-cost software-defined radio receiver based on the RTL2832U chipset, widely used by security researchers for analyzing and attacking wireless communications in the automotive domain, including key fobs and TPMS signals.

**Related:** SDR, HackRF One, BladeRF, USRP, GNU Radio

### RTOS

**Full Name:** Real-Time Operating System

**Category:** Operating System

Operating system designed for deterministic timing behavior in embedded systems.

### RTOS Kernel Exploit

**Category:** Attack

Exploiting vulnerabilities in real-time operating system kernels.

### RTOS Memory Corruption

**Category:** Vulnerability

**Related:** Memory Corruption

Memory corruption in real-time systems affecting deterministic behavior.

### RTOS Timing Manipulation

**Category:** Attack

Altering timing behavior of real-time systems.

### RTSP

**Full Name:** Real-Time Streaming Protocol

**Category:** Connectivity

A network control protocol for establishing and controlling media sessions between streaming servers and clients, supporting play, pause, record, and teardown operations; used in automotive IVI and camera monitoring systems for real-time video streaming from surround-view cameras or digital mirrors, with security implications including session hijacking, unencrypted media streams, and authentication bypass risks.

**Related:** RTP, IVI, Camera Monitoring, Media Streaming

### Runlevel

**Category:** Operating System

A system state defining which services are operational in a Unix-like OS; in automotive Linux, runlevels (or systemd targets) manage operational modes such as normal driving, parking, manufacturing, diagnostic, and flash programming.

**Related:** Init Process, systemd, Linux, Boot Sequence

### Runtime Configuration Manipulation

**Category:** Attack

Modifying system configuration during execution.

### Runtime Hook Injection

**Category:** Attack

Injecting hooks into system runtime to alter behavior.

### Runtime Hooking

**Category:** Attack

Intercepting function calls or system APIs during execution.

### Runtime Integrity

**Category:** Intrusion Detection

Ensuring system code and behavior remain unmodified during execution.

### Runtime Memory Manipulation

**Category:** Hardware Security

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

### SAE J3016

**Category:** ADAS

SAE International standard defining the six levels of driving automation, from Level 0 (no automation) to Level 5 (full automation).

**Related:** Autonomous Driving, ADAS

### SAE J3061

**Category:** Standards

SAE International guidebook for cybersecurity of cyber-physical vehicle systems, providing a process framework for automotive cybersecurity. Superseded by ISO/SAE 21434.

**Related:** ISO 21434, TARA

### SAE J3101

**Category:** Standards

An SAE International standard defining cybersecurity requirements for in-vehicle electronic control units (ECUs), providing a catalog of hardware- and software-based security mechanisms and guidance on their application to protect vehicle systems from cyber threats.

**Related:** SAE J3061, ISO 21434, ECU Security, Hardware Security

### SafetyNet

**Full Name:** SafetyNet Attestation API

**Category:** Android

Google's deprecated device integrity attestation API (now replaced by Play Integrity) that assessed device CTS compatibility, bootloader unlock status, and known rooting indicators. SafetyNet provided cryptographic attestation tokens used by automotive app developers to verify device trustworthiness, detecting tampered or rooted automotive infotainment platforms.

**Related:** Play Integrity, Attestation, CTS, Root Detection, Verified Boot

### Sandbox

**Category:** Security

A restricted execution environment limiting system access.

### Sandbox Escape

**Category:** Attack

Breaking out of isolated execution environments.

### SAST

**Full Name:** Static Application Security Testing

**Category:** Penetration Testing

A testing methodology that analyzes source code or compiled binaries without execution to identify security vulnerabilities such as buffer overflows, injection flaws, and hardcoded credentials; integrated into automotive CI/CD pipelines per ISO 21434 requirements.

**Related:** DAST, SCA, SDLC, ISO 21434, Code Review

### SavvyCAN

**Category:** Security Tool

A GUI-based CAN bus analysis, reverse engineering, and fuzzing tool supporting SocketCAN, CANtact, PCAN, and LAWICEL interfaces; features include CAN signal graphing, traffic replay, fuzzing, and bus load visualization for automotive security testing and protocol analysis.

**Related:** CAN Bus, SocketCAN, can-utils, SavvyCAN, CAN Fuzzing

### SBL

**Full Name:** Secondary Bootloader

**Category:** Boot Security

The second stage in the boot chain, loaded and verified by the Primary Bootloader (PBL), responsible for further hardware initialization (DDR memory, storage controllers, peripherals), performing integrity verification of the application OS or firmware image, and handing control to the runtime environment. SBL often supports recovery modes, multiple boot sources, firmware update fallback, and may integrate flash programming capabilities for over-the-air (OTA) update scenarios.

**Related:** PBL, Flash Bootloader, Boot ROM, Secure Boot, OTA, Boot Chain of Trust

### SBOM

**Full Name:** Software Bill of Materials

**Category:** Security

A formal, machine-readable inventory of all software components, libraries, and dependencies used in a vehicle system, enabling vulnerability tracking, license compliance, and supply chain risk management.

**Related:** Supply Chain Security, VEX, CSAF, CVE, NTIA SBOM

### SCA

**Full Name:** Software Composition Analysis

**Category:** Supply Chain Security

Identifying vulnerabilities in third-party dependencies.

### Scapy

**Category:** Security Tool

A Python-based interactive packet manipulation tool for network probing, scanning, and fuzzing; used in automotive security testing for CAN bus fuzzing, Ethernet frame injection, and diagnostic protocol analysis.

**Related:** Fuzzing, CAN Fuzzing, Wireshark, Metasploit Framework

### SchM

**Full Name:** OS Schedule Manager

**Category:** Operating System

An AUTOSAR module managing OS scheduling tables and schedule state transitions for time-triggered execution, coordinating deterministic task activation with security implications for timing attack prevention.

**Related:** AUTOSAR OS, AUTOSAR EcuM, Time-Triggered OS, AUTOSAR

### SCI

**Full Name:** Secure Channel Identifier

**Category:** Network

A unique identifier used in automotive secure communication protocols (e.g., AUTOSAR SecOC, TLS, MACsec) to distinguish authenticated communication channels, enabling correct key selection and freshness verification for each secure session.

**Related:** SecOC, MACsec, TLS, Secure Communication, MKA

### SCMS

**Full Name:** Security Credential Management System

**Category:** Cryptography

A public key infrastructure designed for V2X communication, managing the issuance and revocation of digital certificates to ensure message authenticity and privacy in connected vehicle environments.

**Related:** V2X PKI, PKI, C-V2X, Misbehavior Detection, CRL

### Screen Capture

**Category:** Attack

An Auto-ISAC attack technique where an adversary captures screen content from in-vehicle displays through compromised IVI or cluster systems, extracting navigation information, driver notifications, or authentication dialogs.

**Related:** Input Capture, IVI, Privacy

### SDLC

**Full Name:** System Development Life Cycle

**Category:** Security Architecture

A structured process for developing automotive software encompassing requirements, design, implementation, testing, deployment, and maintenance phases; security activities (threat modeling, SAST/DAST, code review) must be integrated throughout.

**Related:** ASPICE, ISO 21434, SAE J3061, Threat Modeling, Secure Boot

### SDR

**Full Name:** Software Defined Radio

**Category:** Network Security

A radio communication system where components traditionally implemented in hardware are instead implemented in software, enabling flexible analysis, emulation, and attack of wireless protocols used in vehicles.

**Related:** HackRF One, BladeRF, RTL-SDR, USRP, GSM

### SDV

**Full Name:** Software-Defined Vehicle

**Category:** Vehicle Architecture

A modern vehicle architecture paradigm where vehicle functions, features, and behaviors are primarily defined through software rather than hardware, enabling continuous updates, feature enhancements, and new revenue models throughout the vehicle lifecycle.

**Related:** SOA, HPC, Zonal Architecture, OTA, Domain Controller

### SE

**Full Name:** Secure Element

**Category:** Hardware Security

A tamper-resistant hardware component used to store cryptographic keys and execute secure operations.

### Seamless Updates

**Full Name:** A/B Seamless System Updates

**Category:** Android

An OTA update mechanism using dual system partitions (A and B slots) that allows Android to apply updates to the inactive slot while the system runs on the active slot, then switch to the updated slot on reboot. Provides automatic rollback on update failure, minimizing vehicle downtime and ensuring system recoverability in Android Automotive deployments.

**Related:** A/B Slot, Virtual A/B, OTA, Recovery Mode, Update Engine

### Seat Control Module

**Category:** ECU

A body ECU that controls power seat adjustments (fore/aft, recline, lumbar, height, tilt) based on switch inputs or memory position recall; may integrate heating, ventilation, and massage functions; communicates via LIN with door switches and the BCM.

**Related:** BCM, DCU, CCM, LIN Bus, HMI

### seccomp

**Category:** Operating System

A Linux kernel security facility that restricts the system calls a process can make; used in automotive Linux to sandbox IVI applications, media codecs, and communication daemons by enforcing a whitelist of permitted syscalls, reducing kernel attack surface.

**Related:** LSM, System Call, Container, Linux, App Sandbox

### SecOC

**Full Name:** Secure Onboard Communication

**Category:** Automotive Network

An AUTOSAR security module that provides authenticity and integrity protection for in-vehicle communication messages using Message Authentication Codes (MACs), countering spoofing and replay attacks.

**Related:** AUTOSAR, CMAC, Freshness Value, IDS, CAN Injection

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

### Secure Element

**Category:** Hardware Security

A tamper-resistant hardware component (typically a dedicated chip or embedded secure component) providing a protected environment for storing cryptographic keys and executing secure operations in vehicles.

**Related:** HSM, eUICC, eSIM, NFC Secure Element, Java Card

### Secure Enclave

**Category:** Hardware Security

Isolated execution environment for sensitive operations such as key management and biometric processing.

### Secure Firmware Update

**Category:** OTA

Authenticated and encrypted firmware update process.

### Secure Logging

**Category:** Intrusion Detection

Tamper-resistant logging of system events.

### Secure Storage

**Category:** Hardware Security

Encrypted and protected storage for sensitive data such as keys and credentials.

### Secure Update Mechanism

**Category:** OTA

A system ensuring firmware updates are authenticated, verified, and protected against tampering.
### Security Asset
**Category:** Threat Modeling
Any tangible or intangible element within a vehicle system that has value and requires protection from cybersecurity threats, as defined in ISO 21434. Assets can include ECUs, communication channels, cryptographic keys, sensor data, firmware, configuration parameters, driver personal data, and vehicle functions, each with associated cybersecurity properties (confidentiality, integrity, availability) whose compromise constitutes a damage scenario.
**Related:** CIA Triad, TARA, Asset Identification, Damage Scenario, Cybersecurity Property, ISO 21434

### Security Boundary Violation

**Category:** Security

Breaking defined trust or isolation boundaries.

### Security Misconfiguration

**Category:** Vulnerability

A vulnerability resulting from insecure default settings, unnecessary enabled services, permissive access controls, or improperly hardened configurations; common in automotive ECUs where debug interfaces remain active in production, diagnostic services run with maximum access, or cloud buckets storing telemetry data are left publicly readable.

**Related:** Misconfiguration, Open Port Exposure, Overprivileged Service, Default Credentials
### Security Need
**Category:** Threat Modeling
A cybersecurity requirement derived from the TARA process (ISO 21434) that specifies what protection must be applied to a security asset or system to reduce identified risks to an acceptable level. Security needs are the output of risk determination and feed directly into the cybersecurity concept, specifying functional and technical controls required to mitigate damage scenarios.
**Related:** TARA, Cybersecurity Concept, Risk Treatment, ISO 21434, Security Requirement, Security Control

### Security Policy Violation

**Category:** Security

Violation of defined security rules or constraints.

### Security Token

**Category:** IAM

A digital token used to verify identity and permissions.

### SELinux

**Category:** Android

The mandatory access control framework used by Android to isolate applications and system services.

### Semantic Segmentation

**Category:** AI

A computer vision task that assigns a class label to every pixel in an image, creating a dense scene understanding; used in ADAS for free-space detection, drivable area identification, lane marking segmentation, and pedestrian instance separation.

**Related:** Computer Vision, CNN, Object Detection, Perception System, ADAS

### Semaphore

**Category:** Operating System

A synchronization primitive controlling access to shared resources through counting or binary signaling; in automotive RTOS, semaphores coordinate ISR-to-task communication, resource pooling, and event-driven activation in OSEK/AUTOSAR-compliant systems.

**Related:** Mutex, Deadlock, Thread, RTOS, OSEK/VDX

### Sensitive Data Exposure

**Category:** Vulnerability

A vulnerability involving the unintended exposure of sensitive information including personally identifiable data, vehicle location history, cryptographic keys, authentication tokens, or proprietary firmware; in automotive systems, exposure occurs through cleartext storage, insufficient access controls, misconfigured cloud storage, or information leakage in diagnostic responses.

**Related:** Information Disclosure, Cleartext Storage, Cleartext Transmission, Privacy Data, Overprivileged Service

### Sensor Calibration Attack

**Category:** ADAS

Manipulating sensor calibration to distort perception systems.

### Sensor Fusion

**Category:** AI

The use of machine learning (particularly deep neural networks) to integrate heterogeneous sensor data (camera, lidar, radar, ultrasonic) at the feature or object level; improves perception robustness by compensating for individual sensor weaknesses in adverse conditions.

**Related:** Perception System, Object Detection, Computer Vision, ADAS, Sensor Fusion Attack

### Sensor Fusion Attack

**Category:** ADAS

Exploiting inconsistencies between multiple sensor inputs.

### Sensor Injection Attack

**Category:** Attack

Injecting false signals into sensors such as camera, radar, or lidar.

### Sensor Spoofing

**Category:** Attack

Manipulating sensor inputs to mislead perception systems.

### Separation Kernel

**Category:** Virtualization

A minimal hypervisor providing spatial and temporal isolation between partitions through rigorous information flow control, certified to Common Criteria EAL6+ for safety-critical automotive systems.

**Related:** Hypervisor, Microkernel, PikeOS

### SerDes

**Full Name:** Serializer/Deserializer

**Category:** Hardware Security

A high-speed serial communication technology that converts parallel data to serial streams for transmission over cables (such as GMSL or FPD-Link), critical for automotive camera and display links.

**Related:** GMSL, FPD-Link, LVDS, MIPI CSI-2, Camera ECU

### Service

**Full Name:** Android Component

**Category:** Android

A background component that performs long-running operations without a user interface.

### Service Discovery Attack

**Category:** Attack

Abusing service discovery mechanisms to enumerate or hijack services.

### Service Hijacking

**Category:** Attack

Taking control of running services.

### Service Isolation Failure

**Category:** Vulnerability

Failure to isolate services leading to cross-service attacks.

### Service Registry Attack

**Category:** Attack

Manipulating service registration and discovery systems.

### Service Spoofing

**Category:** Attack

Impersonating legitimate system services.

### Session Hijacking

**Category:** Attack

Taking over active communication sessions.

### Session Prediction

**Category:** Vulnerability

A vulnerability where an attacker can predict or derive valid session tokens by exploiting weak generation algorithms, insufficient entropy, or observable patterns; in automotive telematics and IVI cloud services, session prediction enables account hijacking, vehicle tracking, or unauthorized API access.

**Related:** Weak Session Token, Weak PRNG, Insufficient Entropy, Broken Authentication

### SHA-2

**Full Name:** Secure Hash Algorithm 2

**Category:** Cryptography

A family of cryptographic hash functions (SHA-224/256/384/512) standardized by NIST, widely used in automotive firmware integrity verification, certificate chain validation, and digital signatures.

**Related:** SHA-3, Digital Signature, Integrity, Certificate, Certificate Chain

### SHA-3

**Full Name:** Secure Hash Algorithm 3

**Category:** Cryptography

The latest NIST-standardized hash function family based on the Keccak sponge construction, offering an alternative to SHA-2 for emerging automotive security applications.

**Related:** SHA-2, Digital Signature, Integrity

### Shared Memory

**Category:** Operating System

An IPC mechanism allowing multiple processes to access the same memory region; used in automotive Linux for high-bandwidth data exchange between IVI services, sensor data pipelines, and inter-ECU communication via POSIX shared memory or DMA buffers.

**Related:** POSIX, IPC, Shared Library, Memory Corruption

### SHE

**Full Name:** AUTOSAR Secure Hardware Extension

**Category:** Hardware Security

A standardized secure hardware interface supporting secure key storage and cryptographic operations.

### Side Channel

**Category:** Side Channel

A class of attacks that exploit physical information leakage from electronic systems such as power consumption, electromagnetic emissions, timing, or acoustic signals to extract cryptographic keys or sensitive data from automotive hardware.

**Related:** EMFI, Power Analysis, Timing Attack, DPA, SPA

### Side Channel Attack

**Category:** Attack

Extracting sensitive information from physical leakages such as timing, power, or electromagnetic emissions.

### Signal Injection Attack

**Category:** Attack

Injecting artificial signals into physical or electronic systems.

### Signed Firmware Bypass

**Category:** Attack

Bypassing firmware signature verification.

### Sim-to-Real

**Category:** AI

A transfer learning approach where AI models are trained in simulation and then deployed on real vehicles; addresses the challenge of obtaining sufficient labeled real-world data for autonomous driving; domain randomization and domain adaptation bridge the simulation-reality gap.

**Related:** Transfer Learning, Domain Adaptation, Data Augmentation, Generative AI, Autonomous Driving

### SLH-DSA

**Full Name:** Stateless Hash-Based Digital Signature Algorithm (FIPS 205)

**Category:** Cryptography

A NIST-standardized post-quantum digital signature algorithm based on hash-based cryptography (SPHINCS+), offering stateless operation and conservative security assumptions for long-lived automotive applications.

**Related:** PQC, ML-DSA, ML-KEM, SPHINCS+, NIST

### SmartDeviceLink

**Category:** Connectivity

An open-source smartphone projection standard developed by Ford and Livio, enabling mobile app integration with vehicle infotainment systems across multiple platforms.

**Related:** CarPlay, Android Auto, MirrorLink

### SMMU

**Full Name:** System Memory Management Unit

**Category:** Virtualization

An ARM I/O virtualization component providing DMA remapping and isolation for device passthrough; equivalent to Intel VT-d, enables safe assignment of automotive peripherals (CAN, Ethernet AVB, GPU) to specific VMs in virtualized SoC platforms.

**Related:** IOMMU, Device Passthrough, Memory Virtualization, Hardware Security

### SMP

**Full Name:** Symmetric Multiprocessing

**Category:** Operating System

An architecture where two or more identical CPU cores share memory and I/O under a single OS instance; modern automotive SoCs (Qualcomm SA8295, NVIDIA Orin, NXP S32G) use SMP for ADAS, IVI, and domain control with cache-coherent interconnects.

**Related:** AMP (Asymmetric Multiprocessing), RTOS, Linux, Thread, Spinlock

### SOA

**Full Name:** Service-Oriented Architecture

**Category:** Vehicle Architecture

An architectural paradigm in which vehicle functions are implemented as loosely coupled services communicating over a network (typically SOME/IP or DDS), enabling flexible software deployment in software-defined vehicles.

**Related:** SOME/IP, DDS, SDV, AUTOSAR Adaptive, gRPC

### SoAd

**Full Name:** Socket Adapter

**Category:** Automotive Network

An AUTOSAR basic software module that provides a socket-based interface (POSIX-like API) for TCP/IP and UDP communication, enabling upper-layer protocols such as DoIP and SOME/IP to use Ethernet-based communication.

**Related:** AUTOSAR EthIf, TcpIp, DoIP, SOME/IP, Automotive Ethernet

### SocketCAN

**Category:** Security Tool

A set of open-source CAN drivers and a networking stack integrated into the Linux kernel (since 2.6.25), treating CAN interfaces as standard network sockets; the foundation for most Linux-based automotive security tools including can-utils, Python-CAN, and SavvyCAN.

**Related:** CAN Bus, can-utils, Python-CAN, CANtact, Virtual CAN

### SOD

**Full Name:** Start of Delivery

**Category:** Vehicle Architecture

The milestone marking the commencement of customer deliveries or shipment of production vehicles, occurring after SOP when sufficient units have been produced and quality validated for release.

**Related:** SOP, SUD, SORP, EOD, Logistics

### Software Discovery

**Category:** Attack

An Auto-ISAC reconnaissance technique where an adversary identifies installed software, firmware versions, and application inventories on compromised vehicle systems to target known vulnerabilities.

**Related:** System Information Discovery, Process Discovery, Vulnerability, Network Information Discovery, Network Service Scanning, System Network Configuration Discovery, System Network Connections Discovery

### Software Integrity Verification

**Category:** Security

Ensuring software has not been modified or corrupted.

### Software Supply Chain Risk

**Category:** Security Architecture

Risks introduced by third-party libraries and dependencies.

### SOME/IP

**Category:** Network

Scalable service-Oriented MiddlewarE over IP, an automotive Ethernet middleware protocol for service-oriented communication between ECUs, supporting serialization, RPC, and pub/sub patterns.

**Related:** SOME/IP SD, Automotive Ethernet, Adaptive AUTOSAR, DDS

### SOME/IP SD

**Category:** Network

SOME/IP Service Discovery, a protocol for dynamic service discovery and subscription management in automotive Ethernet networks, enabling ECUs to locate and communicate with available service instances.

**Related:** SOME/IP, Automotive Ethernet, AUTOSAR Service Discovery

### SOME/IP-TP

**Full Name:** SOME/IP Transport Protocol

**Category:** Network

A transport protocol extension for SOME/IP handling message segmentation and reassembly when payload exceeds MTU, enabling large-service communication over UDP.

**Related:** SOME/IP, DDS, SOA

### SOP

**Full Name:** Start of Production

**Category:** Vehicle Architecture

The formal milestone marking the beginning of series production, where the first saleable vehicle rolls off the production line using validated processes, signifying transition from development to manufacturing.

**Related:** MP, PP, VB, TT, Job 1

### SORP

**Full Name:** Start of Regular Production

**Category:** Vehicle Architecture

A production milestone commonly used by German OEMs marking the official start of full-rate series production after ramp-up, when the production line operates at its planned steady-state capacity and quality level.

**Related:** SOP, MP, EOP, VB, PP

### SPA

**Full Name:** Simple Power Analysis

**Category:** Attack

Direct observation of power consumption variations to infer operations.

### SPDM

**Full Name:** Security Protocol and Data Model

**Category:** Cryptography

A DMTF standard (DSP0274) for hardware-attested mutual authentication and secure channel establishment between components, used in automotive SoC architectures to verify component identity and firmware integrity before inter-processor communication.

**Related:** DMTF, Attestation, Secure Channel, Component Authentication, SoC

### Spectre Attack

**Category:** Attack

Exploiting speculative execution to leak memory data.

### SPI

**Full Name:** Serial Peripheral Interface

**Category:** Hardware Security

A synchronous full-duplex serial communication interface for short-distance data exchange between microcontrollers and peripherals (sensors, flash memory, display controllers, CAN transceivers); in automotive ECUs, SPI is used for inter-chip communication within ECUs, sensor data acquisition, and flash programming, with limited security mechanisms (no inherent authentication or encryption).

**Related:** I2C, UART, DMA, Flash Memory

### Spinlock

**Category:** Operating System

A busy-wait synchronization primitive where a thread repeatedly polls a lock variable; used in automotive kernel code and real-time contexts where blocking is unacceptable due to interrupt latency constraints; critical in SMP systems to protect shared data structures.

**Related:** SMP, Mutex, Deadlock, Kernel, Interrupt

### SQL Injection

**Category:** Vulnerability

A vulnerability where an attacker injects malicious SQL queries through input fields to manipulate backend databases; in automotive cloud platforms, telematics services, and fleet management systems, SQL injection can expose vehicle location data, user accounts, and fleet configuration or enable remote command injection against connected vehicles.

**Related:** Command Injection, Injection Attack, Input Validation Failure, Code Execution, Sensitive Data Exposure

### SSDP

**Full Name:** Simple Service Discovery Protocol

**Category:** Connectivity

A UDP-based network protocol forming the discovery foundation of UPnP, allowing devices to advertise their services and discover others on the local network via multicast (239.255.255.250:1900); in automotive IVI systems, SSDP enables automatic discovery of media servers, smart device mirroring, and DLNA sources, but exposes attack surface through unauthenticated service announcements, SSDP amplification DDoS, and multicast information leakage.

**Related:** UPnP, DLNA, IVI, Multicast

### SSH

**Full Name:** Secure Shell

**Category:** Network

A cryptographic network protocol for secure remote access and command execution, used in automotive engineering for secure ECU access during development, diagnostics, and maintenance; misconfigured SSH servers on vehicle telematics units or head units present attack surfaces.

**Related:** TLS, Remote Access, Key Exchange, Telematics

### SSRF

**Full Name:** Server-Side Request Forgery

**Category:** Vulnerability

A vulnerability where an attacker can induce a server to make HTTP requests to arbitrary internal or external URLs; in automotive telematics platforms, SSRF can be used to access internal cloud metadata endpoints, probe vehicle-side APIs, or bypass network firewalls to reach restricted vehicle telemetry services.

**Related:** Injection Attack, Network Isolation Failure, Information Disclosure, Input Validation Failure

### Stack Exhaustion

**Category:** Vulnerability

A denial-of-service vulnerability caused by excessive stack memory consumption, typically from deep recursion or unbounded variable-length arrays, leading to a stack overflow crash; in automotive RTOS and AUTOSAR systems with fixed stack sizes, stack exhaustion in communication protocol handlers or sensor fusion algorithms can cause task failure or system reset.

**Related:** Resource Exhaustion, Heap Exhaustion, Denial of Service, Uncontrolled Recursion

### Stack Overflow

**Category:** Vulnerability

A buffer overflow in stack-allocated memory, where writing beyond a local variable corrupts the return address, saved frame pointer, or adjacent local variables; in automotive firmware, stack overflows in interrupt handlers, communication callbacks, or protocol parsers can redirect execution flow or crash critical tasks.

**Related:** Buffer Overflow, Memory Corruption, Code Execution, Heap Overflow, Return-Oriented Programming

### Static Analysis

**Category:** Penetration Testing

Analyzing source code or binaries without execution.

### Static Binary Analysis

**Category:** Reverse Engineering

Analyzing compiled binaries without source code.

### StbM

**Full Name:** Synchronized Time-Base Manager

**Category:** AUTOSAR

An AUTOSAR Basic Software module providing global time synchronization across ECUs using gPTP (IEEE 802.1AS), essential for SecOC freshness value verification and coordinated event timestamping.

**Related:** gPTP, AUTOSAR SecOC, Ethernet TSN

### Steer-by-Wire

**Category:** Vehicle Architecture

A vehicle technology that replaces the mechanical steering column with electronic control, transmitting driver steering inputs via redundant network paths to electromechanical steering actuators without physical linkage; steer-by-wire enables advanced ADAS features and autonomous driving but requires tamper-proof communication, ASIL D integrity, and protection against steering command injection.

**Related:** Brake-by-Wire, Throttle-by-Wire, Functional Safety, ASIL D, Redundancy

### STRIDE

**Category:** Threat Modeling

A Microsoft threat modeling framework categorizing threats into six types: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege, widely used in automotive security analysis.

**Related:** HEAVENS, TARA, Cyber Kill Chain, Attack Tree

### Subsystem Isolation Failure

**Category:** Vulnerability

Failure to isolate components like modem, DSP, and application processor.

### SUD

**Full Name:** Start of User Delivery / Start of Unit Delivery

**Category:** Vehicle Architecture

An internal production milestone marking the start of delivering finished vehicles or production units to customers, dealers, or the next stage in the supply chain. Used as a variant delivery-focused milestone alongside SOP.

**Related:** SOP, SOD, SORP, EOD, EOP

### SUMS

**Full Name:** Software Update Management System

**Category:** Standards

An organizational and technical framework required by UN R156 for managing the entire software update lifecycle, from development and testing through deployment and post-update monitoring, ensuring updates are safe and secure.

**Related:** UN R156, ISO 24089, OTA, CSMS, Uptane

### Sunroof Control Module

**Category:** ECU

A body ECU controlling power sunroof/moonroof open/close, tilt, and anti-pinch functions; typically a LIN slave node responding to overhead console switch inputs or rain sensor auto-close commands.

**Related:** BCM, CCM, LIN Bus, DCU, Seat Control Module

### super.img

**Category:** Android

A composite partition image introduced with Android 10 dynamic partitions, consolidating multiple logical partitions (system, vendor, product, odm) into a single physical super partition for flexible, space-efficient storage allocation. super.img eliminates fixed-size partition constraints, enabling seamless A/B updates and better storage utilization in Android Automotive head units.

**Related:** Dynamic Partitions, Seamless Updates, A/B Slot, vbmeta, Virtual A/B

### Supervised Learning

**Category:** AI

A machine learning paradigm where models are trained on labeled data (input-output pairs); the most common approach in automotive AI for object detection, semantic segmentation, and behavior prediction; requires large annotated datasets, raising data collection and privacy concerns.

**Related:** Machine Learning, Deep Learning, Unsupervised Learning, Data Augmentation, Object Detection

### Supply Chain Attack

**Category:** Attack

Compromising hardware or software during manufacturing or distribution.

### Supply Chain Backdoor

**Category:** Attack

Hidden malicious functionality introduced during production.

### Supply Chain Security

**Category:** Supply Chain Security

The protection of the automotive cybersecurity supply chain against risks introduced through third-party components, software dependencies, manufacturing processes, and service providers; includes SBOM management, secure software supply chain (CI/CD), component authentication, counterfeit detection, and supplier cybersecurity assessments as required by ISO/SAE 21434 and UN R155.

**Related:** SBOM, ISO 21434, UN R155, VEX, Third-Party Risk

### Supply Chain Verification

**Category:** Security Architecture

Ensuring integrity of hardware and software supply chain.

### SWD

**Full Name:** Serial Wire Debug

**Category:** Hardware Security

A two-pin debug interface protocol for ARM Cortex microcontrollers that provides memory access and debugging capabilities. Exposed SWD interfaces on automotive ECUs can be exploited for firmware extraction and tampering.

**Related:** JTAG, ARM, J-Link, OpenOCD, Exposed Debug Interface

### Symbol Table Manipulation

**Category:** Reverse Engineering

Modifying binary symbol information to hide functionality.

### Symbolic Execution

**Category:** Penetration Testing

Analyzing program paths using symbolic inputs to discover vulnerabilities.

### Syscall Hooking

**Category:** Attack

Intercepting system calls to modify behavior.

### System Call

**Category:** Operating System

The programmatic interface through which user-space processes request kernel services; in automotive Linux, syscalls for CAN socket access (AF_CAN), GPIO control, real-time scheduling, and secure storage must be carefully audited to prevent privilege escalation.

**Related:** Kernel, seccomp, Device Driver, LSM, Interrupt

### System Hardening

**Category:** Security

Techniques to reduce attack surface of systems.

### System Information Discovery

**Category:** Attack

An Auto-ISAC reconnaissance technique where an adversary gathers system information (OS version, kernel details, hardware configuration) from compromised in-vehicle platforms to tailor exploitation strategies.

**Related:** Software Discovery, Process Discovery, Network Information Discovery, Network Service Scanning, System Network Configuration Discovery, System Network Connections Discovery

### System Integrity Check

**Category:** Intrusion Detection

Verification of system state against expected baseline.

### System Network Configuration Discovery

**Category:** Attack

An Auto-ISAC reconnaissance technique where an adversary inspects network configuration settings (IP addresses, routing tables, DNS, network interfaces) on a compromised vehicle system to understand network layout.

**Related:** System Network Connections Discovery, Network Information Discovery, Penetration Testing, Network Service Scanning, Process Discovery, Software Discovery, System Information Discovery

### System Network Connections Discovery

**Category:** Attack

An Auto-ISAC reconnaissance technique where an adversary lists active network connections, listening ports, and established sessions on a compromised vehicle system to identify communication endpoints.

**Related:** System Network Configuration Discovery, Network Service Scanning, Penetration Testing, Network Information Discovery, Process Discovery, Software Discovery, System Information Discovery

### System Trace Logging

**Category:** Intrusion Detection

Recording detailed execution traces for debugging or forensic analysis.

### systemd

**Category:** Operating System

A system and service manager for Linux used as the init system (PID 1) in modern automotive Linux platforms; manages service dependencies, socket activation, timer-based scheduling, journal logging, and cgroup-based resource control for IVI and telematics systems.

**Related:** Init Process, Linux, cgroups, AGL, Yocto Project

## T

### T-Box

**Full Name:** Telematics Box

**Category:** Vehicle Connectivity

An in-vehicle telematics unit that provides cellular connectivity, GNSS positioning, and data routing, enabling connected services, emergency calling (eCall), remote control, and communication between the vehicle and cloud platforms.

**Related:** TCU, Cellular Communication, OTA, eCall, NGTP

### TA

**Full Name:** Trusted Application

**Category:** Hardware Security

Secure application running inside trusted execution environment.

### TA Exploit

**Category:** Attack

Exploiting vulnerabilities in trusted applications.

### TARA

**Full Name:** Threat Analysis and Risk Assessment

**Category:** Threat Modeling

A systematic methodology defined in ISO 21434 for identifying, analyzing, and evaluating cybersecurity threats and risks to road vehicle systems, used to determine appropriate security controls.

**Related:** ISO 21434, HARA, STRIDE, Risk Assessment, DFD

### Task Scheduling Manipulation

**Category:** Attack

Altering execution order of system tasks.

### TCM

**Full Name:** Transmission Control Module

**Category:** ECU

An ECU that controls automatic transmission shift timing, shift feel, torque converter lockup, and clutch pressure; receives inputs from vehicle speed sensors, turbine speed sensors, transmission fluid temperature sensor, and throttle position, then actuates solenoid valves to control hydraulic circuits. In EVs, controls the single-speed reducer or multi-speed transmission.

**Related:** PCM, ECM, Powertrain Security, CAN Gateway

### TCP/IP Stack Attack

**Category:** Attack

Exploitation of vulnerabilities in TCP/IP implementations.

### TcpIp

**Full Name:** TCP/IP

**Category:** Automotive Network

The fundamental Internet protocol suite used in automotive Ethernet stacks, providing reliable end-to-end communication for diagnostics (DoIP), service-oriented communication (SOME/IP), and cloud connectivity.

**Related:** SoAd, EthIf, DoIP, SOME/IP, AUTOSAR

### TCU

**Full Name:** Telematics Control Unit

**Category:** Vehicle Connectivity

An embedded module in vehicles that provides wireless connectivity (cellular, GPS, Wi-Fi) for telematics services, including emergency calling, remote diagnostics, and OTA updates.

**Related:** GSM, eSIM, OTA, T-Box, Cellular Communication

### TCU Firmware Exploit

**Category:** Attack

Exploitation of vulnerabilities in telematics firmware.

### TDMA

**Full Name:** Time Division Multiple Access

**Category:** Network

A channel access method allowing multiple users to share the same frequency by dividing signals into time slots, used in automotive cellular (2G GSM) and V2X communications; vulnerable to jamming and slot hijacking attacks.

**Related:** GSM, V2X, FDMA, CDMA, RF Jamming

### TEE

**Full Name:** Trusted Execution Environment

**Category:** Security Architecture

A secure, isolated execution environment within a main processor that protects sensitive code and data from the rich OS, used in vehicles for secure boot, key management, and DRM.

**Related:** Arm TrustZone, HSM, HPSE, Secure Element, REE

### TEE Exploit

**Category:** Attack

Exploitation of vulnerabilities in trusted execution environments.

### TEE Isolation Bypass

**Category:** Attack

Breaking isolation boundaries between secure and normal world execution.

### Telematics

**Category:** Connectivity

Systems that transmit vehicle data to external servers for monitoring, diagnostics, or services.

### Telemetry Authentication Bypass

**Category:** Attack

Bypassing authentication mechanisms in telemetry systems.

### Telemetry Injection

**Category:** Attack

Injecting false vehicle telemetry data into cloud systems.

### Telemetry Spoofing

**Category:** Attack

Faking vehicle data such as speed, location, or sensor values.

### Telemetry Tampering

**Category:** Attack

Modifying telemetry data before it reaches backend systems.

### Thread

**Category:** Operating System

The smallest unit of CPU execution within a process, sharing the process address space; automotive embedded systems use threads for concurrent tasks such as CAN message handling, sensor polling, control loops, and communication stack processing.

**Related:** Process, Mutex, Semaphore, Context Switch, RTOS

### ThreadX

**Category:** Operating System

A high-performance real-time operating system developed by Express Logic (now Microsoft Azure RTOS), offering deterministic scheduling, fast context switching, and a small memory footprint; used in some automotive ECUs for safety-critical and real-time control tasks.

**Related:** RTOS, FreeRTOS, OSEK/VDX, ECU
### Threat
**Category:** Threat Modeling
A potential cause of an unwanted incident that may result in harm to a system, vehicle, or road user, as defined in ISO 21434. In automotive cybersecurity, a threat is associated with a specific asset and a cybersecurity property (confidentiality, integrity, or availability) that could be compromised, forming the basis for identifying threat scenarios during TARA.
**Related:** TARA, Threat Scenario, Vulnerability, Risk, ISO 21434, CIA Triad

### Threat Actor Modeling

**Category:** Threat Modeling

Modeling different types of attackers and their capabilities.

### Threat Intelligence

**Category:** Security Architecture

Information about current or emerging cybersecurity threats.

### Threat Modeling

**Category:** Security Architecture

Process of identifying, analyzing, and mitigating security threats in a system.

### Threat Surface Expansion

**Category:** Threat Modeling

Increase in system attack surface due to added functionality.

### Threat Vector

**Category:** Security Architecture

Path or method used by an attacker to compromise a system.

### Time Drift Attack

**Category:** Attack

Causing desynchronization in real-time systems.

### Time Synchronization Attack

**Category:** Attack

Manipulating system time across distributed ECUs.

### Timing Attack

**Category:** Attack

Extracting sensitive information based on execution timing differences.

### Timing Channel Attack

**Category:** Attack

Extracting data through timing variations in system operations.

### Timing Manipulation

**Category:** Attack

Altering system timing behavior to influence execution.

### Timing Side Channel

**Category:** Attack

Using execution timing differences to infer secrets.

### TISAX

**Full Name:** Trusted Information Security Assessment Exchange

**Category:** Standards

An information security assessment and exchange mechanism developed by the German automotive industry (VDA) that enables mutual recognition of security assessments between automotive OEMs and suppliers.

**Related:** VDA, ASPICE, ISO 27001, ISA, ENX

### TLS

**Full Name:** Transport Layer Security

**Category:** Network Security

A cryptographic protocol providing secure communication over networks, used in vehicle-to-cloud connectivity, OTA updates, and diagnostic communications to ensure confidentiality and integrity.

**Related:** mTLS, PKI, Certificate Authority, DH, ECC

### TLS Certificate Spoofing

**Category:** Attack

Forging or misusing TLS certificates to impersonate trusted endpoints.

### TLS MITM Attack

**Category:** Attack

Intercepting TLS-encrypted communication via man-in-the-middle techniques.

### TOCTOU

**Full Name:** Time-of-Check Time-of-Use

**Category:** Vulnerability

A race condition vulnerability where the state of a resource (file, socket, memory) changes between a security check and the subsequent use of that resource; in automotive file-based update mechanisms, shared memory between sandboxed processes, or diagnostic session management, TOCTOU can bypass authorization checks.

**Related:** Race Condition, Logic Vulnerability, Privilege Escalation, Secure Boot
### TOE
**Full Name:** Target of Evaluation
**Category:** Threat Modeling
The specific system, component, or item being evaluated during a cybersecurity assessment or TARA, as defined in ISO 21434. The TOE defines the scope and boundary of the security analysis, including hardware, software, interfaces, and operational environment, against which threats, vulnerabilities, and attack paths are identified.
**Related:** TARA, ISO 21434, Asset Identification, Attack Surface, Damage Scenario

### Token Forgery

**Category:** Attack

Creating fake authentication tokens.

### Tokenization

**Category:** Security

Replacing sensitive data with non-sensitive tokens for protection.

### TPM

**Full Name:** Trusted Platform Module

**Category:** Hardware Security

A standardized hardware security component that provides secure key generation, storage, and cryptographic operations with tamper resistance, used in vehicles for secure boot attestation and platform integrity.

**Related:** HSM, Secure Element, TEE, Platform Firmware, FIPS 140

### TPM Attack

**Category:** Attack

Exploitation of vulnerabilities in TPM implementations or interfaces.

### TPM Attestation

**Category:** Hardware Security

Process of verifying system integrity using TPM-generated measurements.

### TPM Key Extraction

**Category:** Attack

Extracting cryptographic keys from TPM through side channels or firmware flaws.

### TPMS

**Full Name:** Tire Pressure Monitoring System

**Category:** Vehicle Architecture

A sensor system that monitors air pressure and temperature in vehicle tires, transmitting data wirelessly via RF (315/433 MHz). TPMS signals can be intercepted and spoofed for vehicle tracking or triggering false warnings.

**Related:** RF Security, RKE, Sensor, CAN Bus, Exploit via Radio Interface

### Trace Analysis

**Category:** Penetration Testing

Analyzing execution traces to identify vulnerabilities or behavior patterns.

### Trace Hooking

**Category:** Attack

Intercepting execution traces for manipulation or analysis.

### Transfer Learning

**Category:** AI

A machine learning technique where a model pre-trained on one task is fine-tuned for a related target task; widely used in automotive AI to adapt base perception models to specific vehicle platforms, sensor configurations, or driving domains with limited labeled data.

**Related:** Deep Learning, Supervised Learning, Domain Adaptation, Sim-to-Real, Object Detection

### Transport Encryption Failure

**Category:** Vulnerability

Failure in encrypting communication at transport layer.

### Transport Layer Security

**Full Name:** TLS Stack

**Category:** Network

Implementation of TLS protocol in system communication stacks.

### Treble

**Category:** Android

A major Android architecture refactoring (introduced in Android 8.0) that separates the vendor implementation (hardware-specific code) from the Android OS framework through a stable vendor interface (VINTF). Treble enables faster OS updates by allowing new Android versions to run on unchanged vendor implementations, and GSIs to boot on compliant devices, reducing automotive OTA complexity and security patch latency.

**Related:** AIDL, HIDL, VINTF, Generic System Image, Project Mainline

### TRIKE

**Category:** Threat Modeling

An open-source threat modeling methodology and tool that uses a uniform concept of trust boundaries to analyze system security, generating threat patterns from data flow and trust relationships; used as an alternative to STRIDE in automotive security assessments.

**Related:** STRIDE, PASTA, VAST, HEAVENS, TARA, Trust Boundary, DFD

### TRNG

**Full Name:** True Random Number Generator

**Category:** Cryptography

A hardware random number generator producing entropy from physical phenomena (thermal noise, oscillator jitter) rather than algorithms; essential for generating unpredictable cryptographic keys and nonces in automotive HSMs and security chips.

**Related:** DRBG, PRNG, HSM, Entropy, Key Generation, Cryptographic Key, Nonce

### Trust Boundary

**Category:** Threat Modeling

A logical or physical boundary across which data trust levels change (e.g., between in-vehicle network and external network, or between privileged and unprivileged processes); threats are identified by analyzing data crossing trust boundaries in DFDs.

**Related:** DFD, STRIDE, TRIKE, Threat Modeling, TARA

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

### Trusted Service

**Category:** Security Architecture

Secure system service running within trusted execution environments.

### TSN

**Full Name:** Time-Sensitive Networking

**Category:** Automotive Network

A family of IEEE 802.1 standards that add deterministic low-latency, reliability, and synchronization to standard Ethernet, making it suitable for safety-critical automotive backbone networks and ADAS data pipelines.

**Related:** Ethernet TSN, gPTP, Automotive Ethernet, IEEE 802.1Q, QoS

### TT

**Full Name:** Tooling Trial

**Category:** Vehicle Architecture

A production phase using production tools and processes to verify that manufacturing equipment, tooling, and assembly systems produce components and vehicles meeting design specifications and quality targets.

**Related:** VB, PP, MP, SOP, Tooling

### TUF

**Full Name:** The Update Framework

**Category:** Security Architecture

An open-source framework for securing software update systems, using role-based metadata signing and key management to protect against compromise of update repositories.

**Related:** Uptane, OTA, ISO 24089

### Type Confusion

**Category:** Vulnerability

A memory safety vulnerability where a program accesses an object through a type that is incompatible with its actual type, leading to memory corruption; in automotive C++ code (IVI middleware, ADAS perception stacks), type confusion in object serialization, message dispatch, or plugin architectures can enable code execution.

**Related:** Memory Corruption, Uninitialized Memory Access, Object Deserialization Attack, Code Execution

### Type-1 Hypervisor

**Category:** Virtualization

A bare-metal hypervisor running directly on hardware without a host OS, used in automotive domain controllers for mixed-criticality workload isolation (e.g., ACRN, PikeOS).

**Related:** Hypervisor, ACRN, PikeOS

### Type-2 Hypervisor

**Category:** Virtualization

A hosted hypervisor running on top of a host OS, used in automotive development for ECU virtualization with lower isolation than Type-1 hypervisors.

**Related:** Hypervisor, Type-1 Hypervisor

## U

### U-Boot

**Category:** Operating System

A widely used open-source bootloader for embedded Linux systems; provides hardware initialization, device tree loading, kernel booting, and recovery mode for automotive platforms; supports secure boot chain integration and verified boot via FIT image verification.

**Related:** Device Tree, Boot Loader, Secure Boot, Linux, Yocto Project

### UART

**Full Name:** Universal Asynchronous Receiver-Transmitter

**Category:** Hardware Security

Low-level serial communication interface commonly used for debugging and firmware interaction.

### UART Debug Bypass

**Category:** Attack

Circumventing authentication or lock mechanisms on UART interfaces.

### UART Injection

**Category:** Attack

Injecting commands or data via UART interfaces.

### UDS

**Full Name:** Unified Diagnostic Services

**Category:** Diagnostics

An ISO 14229 diagnostic communication protocol used in vehicle ECUs for diagnostics, firmware updates, and testing. It defines a standardized set of diagnostic services accessible via CAN, DoIP, or other transport layers.

**Related:** DoIP, OBD-II, CanTp, DTC, ISO 14229

### UDS Fuzzing

**Category:** Penetration Testing

Sending malformed diagnostic requests to ECUs to discover vulnerabilities.

### UDS Security Access

**Category:** Diagnostics

**Related:** UDS, UDS Session Control

A challenge-response mechanism used to restrict sensitive diagnostic operations.

### UDS Service Bypass

**Category:** Attack

Circumventing access control on diagnostic services.

### UDS Session Control

**Category:** Diagnostics

**Related:** UDS, UDS Security Access, Diagnostic Session

Mechanism that controls diagnostic session states in ECUs.

### UDS Tester Present Abuse

**Category:** Attack

Abusing periodic tester presence messages in diagnostic sessions.

### UDSim

**Category:** Security Tool

A UDS (Unified Diagnostic Services) protocol simulator that emulates ECU diagnostic behavior, supporting configurable diagnostic services (SIDs), fault memory, and security access sequences; used in automotive security testing for developing and testing UDS fuzzing payloads and diagnostic security bypasses.

**Related:** UDS, Diagnostics, UDS Security Access, CAN, Fuzzing

### UEFI

**Full Name:** Unified Extensible Firmware Interface

**Category:** Boot Security

Modern firmware interface responsible for initializing hardware and booting operating systems.

### UEFI Secure Boot

**Category:** Boot Security

A mechanism ensuring only trusted bootloaders and OS components are executed.

### UEFI Variable Manipulation

**Category:** Attack

Modifying persistent firmware variables to alter boot behavior.

### UFS

**Full Name:** Universal Flash Storage

**Category:** Hardware Security

A high-performance flash storage standard used in modern automotive infotainment and ADAS systems, offering higher data throughput and reliability than eMMC with support for RPMB for secure replay-protected data storage.

**Related:** eMMC, RPMB, Flash Storage, NVMe, JEDEC

### Ultrasonic Sensor

**Category:** ADAS

A short-range acoustic sensor (typically 40–58 kHz) used in vehicles for parking assistance, low-speed collision avoidance, and automated parking functions. Ultrasonic sensors measure distance via time-of-flight of sound pulses and are commonly deployed in arrays of 4–12 around the vehicle perimeter, complementing radar and camera for near-field perception.

**Related:** Radar, LiDAR, Parking Assist, APA, Sensor Fusion

### Ultrasonic Sensor Attack

**Category:** ADAS

Interfering with parking or proximity sensors using acoustic signals.

### UN R155

**Full Name:** UN Regulation No. 155 — Cybersecurity and Cybersecurity Management System

**Category:** Standards

A UNECE regulation requiring vehicle manufacturers to establish and maintain a certified Cybersecurity Management System (CSMS) for vehicle type approval, covering cybersecurity across the vehicle lifecycle.

**Related:** CSMS, ISO 21434, UN R156, WP.29, VTA

### UN R156

**Full Name:** UN Regulation No. 156 — Software Update and Software Update Management System

**Category:** Standards

A UNECE regulation requiring vehicle manufacturers to establish a Software Update Management System (SUMS) ensuring the safety and security of over-the-air and wired software updates for vehicle type approval.

**Related:** SUMS, UN R155, ISO 24089, OTA, WP.29

### UN R157

**Full Name:** ALKS

**Category:** Standards

UN Regulation No. 157 on Automated Lane Keeping Systems, the first international regulation for Level 3 automated driving, defining requirements for system activation, takeover requests, event data recording, and cybersecurity provisions.

**Related:** UN R155, UN R156, ALKS

### Unaligned Memory Access

**Category:** Vulnerability

**Related:** Exploit

Accessing memory at misaligned addresses causing instability or exploitation.

### Unauthorized Access

**Category:** Security

Accessing system resources without proper authentication.

### Unauthorized ECU Access

**Category:** Attack

Gaining control over ECUs without authorization.

### Underflow Vulnerability

**Category:** Hardware Security

Arithmetic underflow leading to unexpected behavior or memory corruption.

### Uninitialized Memory Access

**Category:** Vulnerability

A vulnerability where a program reads from uninitialized memory (stack or heap), obtaining stale data from previous function calls or allocations; in automotive firmware, uninitialized memory access can leak sensitive kernel data, reveal cryptographic material, or cause unpredictable behavior in safety-critical functions.

**Related:** Memory Disclosure, Information Disclosure, Type Confusion, Kernel Memory Corruption

### Unintended Vehicle Network Message

**Category:** Attack

An Auto-ISAC attack technique where an adversary injects unintended messages onto the vehicle network (CAN, CAN FD, LIN) to trigger spurious warning lights, disable functions, or cause unsafe vehicle behavior.

**Related:** CAN Injection, Message Spoofing, Fuzzing

### Universal Radio Hacker

**Full Name:** URH

**Category:** Security Tool

An open-source wireless protocol analysis tool for software-defined radio, supporting signal demodulation, decoding, analysis, and injection for protocols like OOK, FSK, GFSK, MSK, and PSK; used in automotive security research for reverse engineering tire pressure sensors (TPMS), key fob signals, and RKE protocols.

**Related:** SDR, HackRF One, BladeRF, RKE, TPMS, RF Signal Analysis

### Unsafe Deserialization

**Category:** Vulnerability

**Related:** Code Execution

Processing untrusted serialized data leading to code execution.

### Unsafe Memory Copy

**Category:** Hardware Security

Improper memory copying leading to overflow or corruption.

### Unsecured Credentials

**Category:** Vulnerability

An Auto-ISAC attack technique where an adversary discovers hardcoded or weakly protected credentials in vehicle firmware, diagnostic tools, or cloud interfaces, enabling unauthorized access to ECUs and backend services.

**Related:** Hardcoded Credentials, Credential Access, Diagnostic Security Access

### Unsupervised Learning

**Category:** AI

A machine learning paradigm where models discover patterns in unlabeled data without explicit supervision; used in automotive AI for anomaly detection (identifying unusual driving scenarios), clustering similar driving behaviors, and pretraining representations for downstream tasks.

**Related:** Machine Learning, Supervised Learning, Deep Learning, Anomaly Detection (AI-based), Self-Supervised Learning

### Untrusted Input Handling

**Category:** Vulnerability

Failure to properly validate external inputs.

### Update Server Spoofing

**Category:** Supply Chain Security

Impersonating firmware update servers to distribute malicious updates.

### Update Signature Bypass

**Category:** Attack

Bypassing cryptographic verification of update packages.

### UPnP

**Full Name:** Universal Plug and Play

**Category:** Connectivity

A set of networking protocols enabling seamless device discovery, service advertisement, and zero-configuration communication between devices on an IP network; in automotive IVI systems, UPnP facilitates automatic detection of smartphones, media servers, and smart devices for media playback and screen mirroring, but presents security risks including unauthenticated control actions, buffer overflow in service description parsing, and exposure of IVI network services to adjacent Wi-Fi devices.

**Related:** SSDP, DLNA, IVI, Zero Configuration Networking

### Uptane

**Category:** OTA

An open-source OTA security framework for automobiles, developed by researchers, providing multi-role signing, compromise resilience, and versioning for secure vehicle software updates.

**Related:** TUF, OTA, ISO 24089, UN R156

### URI Hijacking

**Category:** Attack

An Auto-ISAC attack technique where an adversary registers malicious URI handlers or exploits deep link registration on in-vehicle infotainment systems to intercept application intents and redirect user actions.

**Related:** Android Security, IVI, Input Prompt

### USB Debug Interface

**Category:** Hardware Security

**Related:** Debug Interface

Debug interface exposed via USB for development or maintenance.

### USB Descriptor Attack

**Category:** Attack

Manipulating USB descriptors to exploit host parsing vulnerabilities.

### USB Enumeration Attack

**Category:** Attack

Abusing device enumeration process to gain unauthorized access.

### USB Firmware Exploit

**Category:** Attack

Exploiting vulnerabilities in USB controller firmware.

### USB Gadget Attack

**Category:** Attack

Exploiting USB device mode interfaces to inject or extract data.

### USB HID Attack

**Category:** Attack

Using Human Interface Device emulation for malicious input injection.

### Use-After-Free

**Category:** Vulnerability

A critical memory safety vulnerability where a program dereferences a pointer after the memory has been freed, causing the heap allocator to reuse the memory for other objects; in automotive C/C++ firmware, use-after-free in IVI browser engines, CAN message handlers, or diagnostic services can lead to arbitrary code execution with kernel or system privileges.

**Related:** Double Free, Dangling Pointer, Memory Corruption, Heap Overflow, Code Execution, Kernel Exploit

### User Privilege Escalation

**Category:** Attack

Gaining higher-level permissions than intended.

### User Privilege Model

**Category:** Operating System

A system defining user roles and access permissions.

### User Session Hijacking

**Category:** Attack

Taking over authenticated user sessions.

### Userland Exploit

**Category:** Attack

Exploiting vulnerabilities in user-space applications.

### Userland Sandbox Escape

**Category:** Attack

Escaping restricted user-space environments.

### USRP

**Full Name:** Universal Software Radio Peripheral

**Category:** Security Tool

A high-performance software-defined radio platform by Ettus Research/NI, used in automotive security research for cellular, GNSS, and V2X protocol analysis and attack simulation.

**Related:** SDR, HackRF One, BladeRF, GNU Radio, RTL-SDR

## V

### V2I

**Full Name:** Vehicle-to-Infrastructure

**Category:** Connectivity

Communication between vehicles and roadside infrastructure.

### V2N

**Full Name:** Vehicle-to-Network

**Category:** Connectivity

Vehicle-to-network communication enabling telematics, OTA updates, and cloud services through cellular networks (4G/5G Uu), forming the backbone of connected vehicle cloud services.

**Related:** V2X, C-V2X, Telematics, OTA

### V2P

**Full Name:** Vehicle-to-Pedestrian

**Category:** Connectivity

Communication between vehicles and pedestrians.

### V2V

**Full Name:** Vehicle-to-Vehicle

**Category:** Vehicle Connectivity

Direct wireless communication between vehicles sharing safety-critical information such as position, speed, and braking status, enabling collision avoidance and cooperative driving applications.

**Related:** V2X, DSRC, C-V2X, VANET, BSM

### V2X

**Full Name:** Vehicle-to-Everything

**Category:** Vehicle Connectivity

A communication technology that allows vehicles to exchange information with other vehicles (V2V), infrastructure (V2I), pedestrians (V2P), and the network (V2N), enabling cooperative intelligent transport systems.

**Related:** C-V2X, DSRC, V2V, V2I, V2N

### V2X Message Spoofing

**Category:** Attack

Forging vehicle-to-everything communication messages.

### V2X PKI

**Full Name:** V2X Public Key Infrastructure

**Category:** Cryptography

A specialized PKI designed for V2X communication that manages enrollment, authorization, and pseudonym certificates for vehicles and infrastructure while preserving privacy through frequently changing pseudonyms.

**Related:** PKI, SCMS, Certificate Authority, CRL, C-V2X

### V2X Vulnerability

**Category:** Vulnerability

A security weakness in Vehicle-to-Everything communication protocols (DSRC, C-V2X, IEEE 802.11p, NR-V2X), including message spoofing, certificate manipulation, privacy leakage from pseudonym tracking, denial of service via channel jamming, or misbehavior detection bypass; V2X vulnerabilities can compromise cooperative safety applications and traffic efficiency.

**Related:** V2X Message Spoofing, GNSS Spoofing, Certificate Validation Failure, Denial of Service

### ValueCAN

**Category:** Security Tool

A CAN bus interface by Intrepid Control Systems for vehicle network diagnostics and analysis, used with Vehicle Spy for CAN message monitoring, replay, and fuzzing in security testing.

**Related:** PCAN, CAN, CAN Fuzzing

### VANET

**Full Name:** Vehicular Ad-hoc Network

**Category:** Vehicle Connectivity

A type of mobile ad-hoc network where vehicles act as nodes to communicate with each other (V2V) and with roadside infrastructure (V2I), enabling cooperative safety and traffic efficiency applications.

**Related:** V2X, DSRC, MANET, RSU, OBU

### VAST

**Full Name:** Visual, Agile, and Simple Threat

**Category:** Threat Modeling

A threat modeling methodology emphasizing visual, agile, and simple threat representation using process flow diagrams and threat targeting, designed for integration into agile development workflows.

**Related:** STRIDE, PASTA, TRIKE, HEAVENS, TARA, DFD

### VB

**Full Name:** Validation Build

**Category:** Vehicle Architecture

An early production trial phase where vehicles are built on production-intent tooling to validate manufacturing processes, assembly sequence, and initial quality before committing to mass production.

**Related:** TT, PP, MP, SOP, CB

### vbmeta

**Full Name:** Verified Boot Metadata

**Category:** Android

A data structure used in Android Verified Boot (AVB) that contains cryptographic descriptors, hash digests, and public keys for verifying the integrity of boot and system partitions. The vbmeta partition is the root of trust for the verified boot chain; tampering with vbmeta invalidates the entire boot verification sequence.

**Related:** Verified Boot, AVB, dm-verity, Bootloader Lock State, Hash Tree

### vCPU

**Full Name:** Virtual CPU

**Category:** Virtualization

A virtual processor core presented to a guest operating system by the hypervisor, mapped to one or more physical CPU cores; in automotive systems, vCPU pinning and scheduling guarantees ensure deterministic execution of safety-critical AUTOSAR and RTOS tasks alongside non-critical VMs.

**Related:** Hypervisor, Hardware-Assisted Virtualization, SMP, RTOS

### VCU

**Full Name:** Vehicle Control Unit

**Category:** Vehicle Architecture

A supervisory ECU that coordinates multiple vehicle subsystems, including powertrain, battery, thermal, and energy management, acting as the central controller in electric and hybrid vehicles.

**Related:** BECM, Inverter, OBC, HPC, Domain Controller

### VDA

**Full Name:** Verband der Automobilindustrie

**Category:** Standards

The German Association of the Automotive Industry, representing German OEMs and suppliers, which developed TISAX for information security assessment and contributes to automotive standardization through various working groups.

**Related:** TISAX, ASPICE, ISO 21434, ENX, German Automotive

### VECI

**Category:** IAM

Vehicle Emission Control Information label, a standardized label under the hood specifying emission system configuration and OBD-II certification status.

**Related:** OBD-II, VIN, EPA

### Vehicle Central Computer

**Full Name:** VCC

**Category:** Vehicle Architecture

A high-performance central compute platform consolidating multiple vehicle functions (ADAS, autonomous driving, cockpit, body control, gateway) into a single ECU or a small cluster of central computers; runs multiple virtualized OS instances and service-oriented middleware, serving as the core of next-generation SDV and zonal architectures.

**Related:** HPC, SDV, Central Computing Architecture, Central + Zone Hybrid Architecture, E/E Architecture

### Vehicle Property

**Category:** Android

A standardized property representing vehicle information such as speed, gear position, or HVAC status.

### Vehicle Virtualization

**Category:** Vehicle Architecture

Running multiple isolated vehicle workloads on shared hardware using virtualization.

### Verified Boot

**Category:** Android

Android's multi-stage boot integrity verification mechanism that cryptographically verifies all executable code and data loaded during boot, from the bootloader through the kernel to system partitions. Uses vbmeta structures, dm-verity for block-level integrity, and AVB (Android Verified Boot) for hash-based or chained verification, ensuring that only trusted software runs on the device.

**Related:** dm-verity, vbmeta, AVB, Secure Boot, Bootloader Lock State

### Verizon Hum

**Category:** Connectivity

A connected car aftermarket service by Verizon providing OBD-II-based vehicle diagnostics, location tracking, and emergency assistance via a plug-in cellular dongle; represents a third-party connected vehicle attack surface with cellular, OBD-II, and cloud API exposure.

**Related:** OBD-II, TCU, Telematics, OnStar, Connected Vehicle

### VEX

**Full Name:** Vulnerability Exploitability eXchange

**Category:** Vulnerability

A standardized format for communicating the exploitability status of vulnerabilities in software components, enabling automotive suppliers to declare which CVEs affect their products and which do not, supporting SBOM-based vulnerability management.

**Related:** SBOM, CVE, CSAF, Supply Chain Security, NTIA

### VFB

**Full Name:** Virtual Function Bus

**Category:** AUTOSAR

The AUTOSAR communication abstraction layer enabling software component (SWC) interaction through ports and interfaces independent of ECU mapping and communication technology, with security implications for inter-ECU trust boundaries.

**Related:** AUTOSAR Runtime Environment, AUTOSAR COM, SWC

### vFlash

**Category:** Security Tool

An ECU flashing tool by Vector Informatik supporting UDS, OBD, and XCP protocols for reprogramming, used in security testing of secure flashing procedures and rollback protection.

**Related:** ECU Flashing, Firmware Update, UDS

### VHAL

**Full Name:** Vehicle HAL

**Category:** Android

**Related:** Android Auto

A hardware abstraction layer providing vehicle property access for Android Automotive OS.

### VIN

**Full Name:** Vehicle Identification Number

**Category:** IAM

A unique 17-character code assigned to every vehicle, encoding manufacturer, country, model year, and serial number. Used for vehicle tracking, theft prevention, and fleet management.

**Related:** WMI, VDS, VIS, PDSN

### VirtIO

**Category:** Virtualization

A standardized para-virtualization I/O framework providing efficient virtual block, network, and serial devices for VMs; used in automotive virtualization to achieve near-native storage and network performance for IVI and telemetry VMs while maintaining strong isolation.

**Related:** Para-Virtualization, Device Passthrough, KVM, Hypervisor

### Virtual ECU

**Category:** ECU

Software-defined ECU running in virtualized environment.

### Virtual Machine

**Full Name:** VM

**Category:** Virtualization

A software-based emulation of a physical computer that runs an operating system and applications in isolation from other VMs on the same hardware; in automotive, VMs consolidate mixed-criticality workloads (AUTOSAR, Android, Linux) on domain controllers and central computers.

**Related:** Hypervisor, Guest OS, Virtual ECU, vCPU, Hardware-Assisted Virtualization

### Virtual Memory

**Category:** Operating System

A memory management technique that provides each process with an isolated virtual address space mapped to physical memory via an MMU; essential for process isolation, memory protection, and large-address-space support in automotive Linux and RTOS systems.

**Related:** Paging, MMU, Process Isolation, Kernel, Context Switch

### Virtualization Escape

**Category:** Attack

Breaking out of hypervisor or VM isolation.

### VLAN

**Full Name:** Virtual Local Area Network

**Category:** Network

A logical grouping of network devices that share a common broadcast domain regardless of physical location, used in automotive Ethernet to segment traffic between safety-critical, infotainment, and external communication domains; vulnerable to VLAN hopping and double-tagging attacks.

**Related:** Network Segmentation, Automotive Ethernet, VLAN Hopping, MACsec

### VNF

**Full Name:** Virtual Network Function

**Category:** Network

Software-based network functions used in vehicle cloud systems.

### Voice Assistant Security

**Category:** Attack

Security and privacy concerns for in-vehicle voice control, including voice command injection, adversarial audio perturbations, and unintended microphone activation capturing sensitive conversations.

**Related:** IVI, Privacy, HMI

### Voltage Fault Injection

**Full Name:** Voltage Fault Injection (VFI)

**Category:** Hardware Security

A hardware attack technique that manipulates the supply voltage of a microcontroller or SoC to induce timing violations, bypass security checks, or extract secrets from automotive ECUs.

**Related:** EMFI, Clock Fault Injection, Laser Fault Injection, Fault Attack, Glitching

### VTA

**Full Name:** Vehicle Type Approval

**Category:** Standards

The regulatory process by which a vehicle model is certified as meeting all applicable safety, environmental, and cybersecurity requirements before it can be sold in a given market, now including UN R155 and UN R156 compliance.

**Related:** WP.29, UN R155, UN R156, Homologation, Type Approval

### Vulnerability

**Category:** Vulnerability

A weakness or flaw in vehicle software, hardware, or system design that can be exploited by attackers to compromise the confidentiality, integrity, or availability of automotive systems.

**Related:** CVE, CVSS, Exploit, Attack Surface, CWE## W

### W^X

**Full Name:** Write XOR Execute

**Category:** Security

A security policy enforcing that memory pages cannot be simultaneously writable and executable, preventing code injection from data regions; implemented via hardware NX/XN bits in automotive SoCs to mitigate buffer overflow and code injection attacks.

**Related:** DEP, NX Bit, ASLR, Buffer Overflow, Code Injection

### Watchdog Bypass

**Category:** Attack

Disabling or circumventing watchdog mechanisms.

### Watchdog Timer

**Category:** Operating System

A hardware timer that resets the system if software becomes unresponsive.

### WAVE

**Full Name:** Wireless Access in Vehicular Environments

**Category:** Vehicle Connectivity

A set of IEEE standards (IEEE 1609 family) built on top of IEEE 802.11p that defines the complete communication stack for DSRC-based V2X, including security, networking, and resource management.

**Related:** DSRC, IEEE 802.11p, VANET, ITS, V2X

### Wayland

**Category:** Operating System

A display server protocol for Linux providing efficient, secure window composition; adopted as the default display system in AGL and other automotive IVI platforms, replacing X11, with Weston as the reference compositor implementation.

**Related:** Weston, AGL, IVI, Linux

### Weak PRNG

**Full Name:** Weak Pseudo-Random Number Generator

**Category:** Cryptography

A pseudo-random number generator with insufficient entropy or predictable output, which can lead to guessable cryptographic keys, tokens, or nonces in automotive security implementations.

**Related:** PRNG, TRNG, Insufficient Entropy, Cryptography, DRBG

### Weak Session Token

**Category:** Vulnerability

A vulnerability where session identification tokens are predictable, low-entropy, non-random, or transmitted without adequate protection; in automotive cloud APIs, telematics web portals, and IVI remote access features, weak session tokens enable session hijacking, replay attacks, and impersonation of legitimate vehicle or user sessions.

**Related:** Session Prediction, Broken Authentication, Weak PRNG, Insufficient Entropy, Information Leakage

### Weston

**Category:** Operating System

The reference compositor implementing the Wayland display protocol; provides hardware-accelerated graphics composition, input event routing, and multi-surface management for automotive IVI clusters and infotainment systems.

**Related:** Wayland, AGL, IVI, Linux

### Wi-Fi

**Category:** Vehicle Connectivity

A wireless networking technology (IEEE 802.11) providing short-range high-bandwidth connectivity for vehicles, used for infotainment hotspot, OTA updates, diagnostics, and device connectivity in workshops and home environments.

**Related:** WPA2, WPA3, Bluetooth, ESSID, BSSID

### Wi-Fi Attack

**Category:** Attack

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

**Full Name:** World Forum for Harmonization of Vehicle Regulations

**Category:** Standards

A UNECE working party that develops and maintains global technical regulations for vehicles, including UN Regulations R155 (cybersecurity) and R156 (software updates).

**Related:** UN R155, UN R156, VTA, Homologation, ECE R10

### WPA2

**Full Name:** Wi-Fi Protected Access II

**Category:** Network

A security protocol for 802.11 wireless networks implementing CCMP/AES encryption; used in in-vehicle Wi-Fi hotspots, vulnerable to KRACK attacks and cracking via Aircrack-ng when weak passphrases are used.

**Related:** Aircrack-ng, WiFi Pineapple, Evil Twin Attack, BSSID, ESSID

### WPA3

**Full Name:** Wi-Fi Protected Access 3

**Category:** Network

The third generation of Wi-Fi security protocols, providing individualized encryption for open networks (OWE/SAE), stronger protection against offline dictionary attacks, and simplified device configuration; used in modern vehicle Wi-Fi hotspots to replace WPA2.

**Related:** WPA2, SAE, OW-Encrypted, Wi-Fi, KRACK Attack

### Write Protection Bypass

**Category:** Attack

Circumventing flash or firmware write protection.

## X

### X.509 Certificate Attack

**Category:** Cryptography

**Related:** Certificate

Exploiting weaknesses in X.509 certificate validation.

### X25519

**Category:** Cryptography

An elliptic curve Diffie-Hellman key exchange using Curve25519, providing efficient side-channel-resistant key agreement for automotive secure session negotiation.

**Related:** Ed25519, ECC, ECDSA, Key Exchange

### XCP

**Full Name:** Universal Measurement and Calibration Protocol

**Category:** Diagnostics

A standardized measurement and calibration protocol (ASAM MCD-1 XCP) for accessing ECU internal variables and parameters in real-time over CAN, FlexRay, Ethernet, or other transports, used in development and tuning.

**Related:** CCP, CANape, INCA, CAN, A2L

### XCP Injection

**Category:** Attack

Injecting malicious calibration commands into ECU systems.

### Xen Project

**Category:** Virtualization

An open-source Type-1 hypervisor supporting para-virtualization and hardware-assisted virtualization; used in some automotive and embedded systems for consolidating real-time and general-purpose workloads, offering strong isolation and driver domain architecture.

**Related:** Hypervisor, Type-1 Hypervisor, KVM, ACRN, Hardware-Assisted Virtualization

### XML Injection

**Category:** Attack

Injecting malicious XML payloads into parsers.

### XSS

**Full Name:** Cross-Site Scripting

**Category:** Attack

Injecting malicious scripts into web interfaces used in vehicle infotainment systems.

### XXE

**Full Name:** XML External Entity

**Category:** Vulnerability

**Related:** Exploit

Exploiting XML parsers to access local files or internal services.

## Y

### YAML Deserialization Attack

**Category:** Vulnerability

**Related:** Code Execution, Exploit

Exploiting unsafe YAML parsing leading to code execution.

### YAML Injection

**Category:** Attack

Injecting malicious payloads into YAML parsers.

### YateBTS

**Category:** Security Tool

An open-source software implementation of a GSM base transceiver station that runs on Linux with SDR hardware (BladeRF, USRP); used in automotive security testing to create rogue BTS for attacking vehicle TCU cellular connectivity.

**Related:** BTS, Rogue BTS, OpenBTS, OsmocomBB, BladeRF, SDR, GSM

### Yocto Project

**Category:** Operating System

An open-source build system for creating custom embedded Linux distributions; the de facto standard for automotive Linux platform development (used by AGL, Tesla, and many OEMs), providing bitbake recipes, layer management, and cross-compilation toolchains.

**Related:** AGL, Linux, OSTree, Buildroot, Embedded Linux

## Z

### Zenoh

**Category:** Network

An open-source middleware protocol designed for efficient data exchange across constrained networks, offering pub-sub, RPC, and storage capabilities with low latency and minimal overhead, emerging as a DDS alternative in automotive SOA.

**Related:** DDS, SOME/IP, SOA

### Zephyr

**Category:** Operating System

An open-source real-time operating system by the Linux Foundation, designed for resource-constrained embedded devices; gaining adoption in automotive for sensor nodes, body control modules, and V2X communication due to its modular architecture and security features.

**Related:** RTOS, FreeRTOS, ECU, Embedded Linux

### Zero Day Exploit

**Category:** Attack

Exploitation of previously unknown vulnerabilities.

### Zero Trust Architecture

**Category:** Security Architecture

Security model that assumes no implicit trust within the system.

### Zeroization Failure

**Category:** Vulnerability

Failure to properly erase sensitive data from memory or storage.

### Zip Bomb

**Category:** Attack

Crafted archive that expands excessively to exhaust system resources.

### ZK

**Full Name:** Zero Knowledge Proof

**Category:** Cryptography

Cryptographic method allowing verification without revealing underlying data.

### Zonal Architecture

**Category:** Vehicle Architecture

A modern E/E architecture where vehicle functions are grouped by physical location (zones) rather than by domain, with zonal gateways connecting ECUs to centralized HPCs via high-bandwidth networks.

**Related:** Domain Controller, HPC, E/E Architecture, SDV, Zonal Gateway

### Zonal Gateway

**Category:** ECU

Central node managing communication between zones.

### Zone

**Category:** Vehicle Architecture

A logical or physical grouping of ECUs and vehicle functions organized by location or function within a zonal E/E architecture; each zone is managed by a zonal gateway or zone controller that handles local I/O, power distribution, and network bridging, reducing wiring complexity and enabling scalable service-oriented architectures (SOA).

**Related:** Zonal Gateway, Domain Controller ECU, Zone-Based ECU Architecture, Service-Oriented Architecture (SOA)

### Zone-Based ECU Architecture

**Full Name:** Zonal Architecture

**Category:** Vehicle Architecture

Modern vehicle design dividing ECUs into functional zones instead of domain-based architecture.

