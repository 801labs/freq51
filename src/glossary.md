# 📖 Freq51 Meshtastic Glossary

Welcome to the Freq51 Meshtastic Glossary! This page gathers key terms you’ll see when working with Meshtastic devices, channels, and Freq51 community practices — organized A to Z.

Jump to a section:
[**A**](#a) · [**B**](#b) · [**C**](#c) · [**D**](#d) · [**E**](#e) · [**F**](#f) · [**G**](#g) · [**H**](#h) · [**I**](#i) · [**J**](#j) · [**K**](#k) · [**L**](#l) · [**M**](#m) · [**N**](#n) · [**O**](#o) · [**P**](#p) · [**Q**](#q) · [**R**](#r) · [**S**](#s) · [**T**](#t) · [**U**](#u) · [**V**](#v) · [**W**](#w) · [**X**](#x) · [**Y**](#y) · [**Z**](#z)

---

## A
- App / Application / Client Application — An application that connects to a Meshtastic node to send and receive messages via the mesh. See also: Client.
- Airtime (Time on Air) — The length of time a LoRa transmission occupies the channel. Longer-range settings typically increase airtime and reduce throughput.
- APRS (Automatic Packet Reporting System) — A ham radio data system sometimes bridged to/from Meshtastic by communities. Check local regulations and Freq51 guidance before use. See also: Gateway, MQTT Bridge.

## B
- Band (ISM Band) — The regional frequency range for LoRa (e.g., 915 MHz, 868 MHz). Devices must operate on the correct regional band.
- Bandwidth (LoRa) — LoRa radio parameter affecting data rate and range. Included in Modem Presets.
- BLE (Bluetooth Low Energy) — Short‑range wireless link commonly used by Meshtastic apps to connect to nodes.
- Bridge — See Gateway and MQTT Bridge.
- Broadcast — A message sent to all participants on the current channel.

## C
- Channel — A logical grouping defining who can communicate; includes a name, encryption, and settings.
- Channel Key — See PSK (Pre‑Shared Key).
- Client — A node used primarily for user messaging; behavior depends on the assigned Role.
- CLI (Command Line Interface) — Text-based interface (usually over USB/Serial) to configure or interact with a node.
- Coding Rate (CR) — LoRa forward‑error‑correction setting that trades speed for robustness. Included in Modem Presets.

## D
- Deduplication — Logic to avoid processing or rebroadcasting the same packet multiple times. See also: Rebroadcast Logic.
- Device — A Meshtastic‑compatible radio running the Meshtastic firmware.
- Device Role — See Role.
- DFU (Device Firmware Update) — Special mode used for firmware updates.
- Direct Message (DM) — Encrypted, point‑to‑point communication using public key cryptography. See also: PKC.

## E
- Encryption — Channel messages secured with a Pre‑Shared Key (PSK). Direct messages can use public key cryptography.
- ESP32 — Espressif MCU used in many devices; higher power usage than NRF52; can support Wi‑Fi.
- EUI / EIRP — Regulatory power concepts sometimes referenced for compliance. Check regional rules and Freq51 onboarding.

## F
- FAQ (Freq51) — Answers to common community questions and practices.
- FEC (Forward Error Correction) — See Coding Rate.
- Firmware — Low-level software that runs on a node’s microcontroller.
- Flash / Flashing — Installing or updating firmware on a device.
- Freq51 — Community coordination around stable deployments, recommended settings, and onboarding for a healthy mesh.

## G
- Gateway — A node that bridges the mesh to external systems (often via MQTT). Requires careful configuration to avoid loops and flooding.
- GPIO (General Purpose Input/Output) — Digital I/O pins for sensors, buttons, etc.
- GPS — Global Positioning System; nodes can report position as telemetry.

## H
- Hop — A relay through another node.
- Hop Limit — The maximum number of hops a packet may traverse; helps control congestion and airtime.
- Hidden Client — See Role (CLIENT_HIDDEN).

## I
- ID (Node ID / Long Name / Short Name) — Identifiers for a node in the mesh and UI.
- Interval (Telemetry/Position) — Frequency at which telemetry or position is sent; balance visibility with airtime usage.

## J
- — (No common entry)

## K
- Key (Channel Key) — See PSK (Pre‑Shared Key).

## L
- LoRa — Low‑power, long‑range radio used by Meshtastic.
- LoS (Line of Sight) — A clear, unobstructed RF path through air; best link quality typically requires LoS.
- Lost and Found — See Role (LOST_AND_FOUND).

## M
- Mesh Network — Decentralized network where nodes can forward messages for others.
- Modem Preset — Bundled LoRa parameters (Bandwidth, Spreading Factor, Coding Rate). All nodes must match to communicate.

### Modem Presets (summary)
- SHORT_TURBO — Highest bandwidth, shortest range.
- SHORT_FAST — High speed; short range.
- SHORT_SLOW — Moderate range; fairly high speed.
- MEDIUM_FAST — Balanced speed/range.
- MEDIUM_SLOW — More range; less speed.
- LONG_FAST — Default; long range, reasonable speed.
- LONG_MODERATE — More range/airtime; slower than LONG_FAST.
- LONG_SLOW — Very high link budget; very slow data rate.
- VERY_LONG_SLOW — Slowest; very high range; high airtime.

Note: As a general community default, use LONG_FAST unless coordinated otherwise.

- MQTT / MQTT Bridge — Protocol and bridge commonly used to link the mesh to servers/services. Configure topics, filters, and rebroadcast logic carefully to prevent loops.

## N
- Node — A device on the mesh that can send, receive, and relay messages.
- NRF52 — Nordic MCU used in many low‑power devices.

## O
- OTA (Over‑the‑Air) — Wireless firmware update capability (device/platform dependent).

## P
- Packet — A unit of data sent over the mesh.
- PKC (Public Key Cryptography) — Used for direct, end‑to‑end messages with keypairs.
- Preset — See Modem Preset.
- Protobuf — Google’s serialization format used by Meshtastic protocols.
- PSK (Pre‑Shared Key) — Channel encryption key. All nodes on a channel must share the PSK to exchange messages.

## Q
- Quiet Client (Muted Client) — Client variant limiting rebroadcast/chat behavior to conserve airtime. See Role (CLIENT_MUTE).

## R
- Rebroadcast — Relaying a received packet. Behavior is controlled to minimize duplicates and loops. See: Rebroadcast Logic.
- Rebroadcast Logic — Rules/filters that determine whether and how messages are relayed (including deduplication). Critical when bridging (e.g., MQTT).
- Region — Regulatory domain determining allowed frequency band and power. See: Band.
- Repeater — Coverage‑extending node that is not shown in the standard node list.
- Role (Device Role) — The behavior mode of a node on the mesh. See the overview below.

### Device Roles (overview)
- CLIENT — Standard user node for sending/receiving messages.
- CLIENT_MUTE — Client with reduced chat/rebroadcast behavior to conserve airtime.
- CLIENT_HIDDEN — Client that participates without appearing prominently in lists/UIs.
- TRACKER — Focused on position reporting (GPS), minimal chat.
- LOST_AND_FOUND — Special mode for recovery/identification scenarios.
- SENSOR — Publishes sensor/system data as telemetry.
- TAK — Integrates with Team Awareness Kit features.
- TAK_TRACKER — TAK‑focused tracking (position reporting).
- REPEATER — Extends coverage; not shown in standard node lists.
- ROUTER — Extends coverage; shown in node lists.
- ROUTER_LATE — Router variant tuned for later/delayed relays.
- Router — Coverage‑extending node visible in node lists.
- ROUTER_LATE — Role variant tuned for delayed/late relaying. See Role.
- rp2040 — Raspberry Pi microcontroller used in some boards.
- RSSI (Received Signal Strength Indicator) — Measure of received signal power.

## S
- RX (Receive) — Receiving data on the radio.
- Sensor — A node role or device function publishing environmental/system data.
- Serial — USB/UART link used by CLI and for flashing firmware.
- SNR (Signal‑to‑Noise Ratio) — Measure of signal clarity vs. noise.
- Spread(ing) Factor (SF) — LoRa parameter controlling chirp length; higher SF increases range and airtime, reduces data rate.
- SWR (Standing Wave Ratio) — RF measure of antenna/feedline match quality.

## T
- TAK / TAK Tracker — Roles supporting Team Awareness Kit integrations, typically focused on position reporting and limited chat.
- Telemetry — Periodic transmission of sensor, GPS, and/or system metrics from a node.
- TX (Transmit) — Sending data on the radio.

## U
- UART — Hardware serial interface used for logging, CLI, and debugging.
- Uplink / Downlink — Directional terms sometimes used around gateways/bridges: uplink (mesh → server), downlink (server → mesh), especially with MQTT.

## V
- VERY_LONG_SLOW — See Modem Preset.
- Voltage (Battery Voltage) — Telemetry metric many nodes advertise to indicate power status.

## W
- Web UI — Some devices/platforms expose a local web-based configuration/status page (varies by hardware/firmware build).
- Wi‑Fi — On supported ESP32 devices, can be used for features like MQTT bridging or a web UI.

## X

## Y

## Z