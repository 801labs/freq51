# Meshtastic Configuration

These sections help you choose settings that work well **for you** and **for the mesh**. See the FAQ for troubleshooting. Locally we’re still building out on the FS51 with the default LongFast North America slot/preset (see below), but freq51 may coordinate short-term trials (e.g., ShortFast) as needed.

**Freq51 LongFast** (As of 8/15/2025):
- **LONG_FAST** preset, **slot 51** → **914.625 MHz**

> Exact slot counts and defaults depend on preset; see Meshtastic docs for details.

---

## Default Configurations (We are not using this)

By default, fresh Meshtastic radios on NA region can talk on **LongFast** (channel name) using the **LONG_FAST** preset and **default slot**. A typical setup is a radio paired to your phone via Bluetooth. No internet is required. When out of direct range, your messages **hop** across other nodes.

### Understanding "hops"

A **hop** is a relay through another node. Use the **lowest hop limit** that reliably reaches your contacts. The default **3 hops** can cover many miles in dense meshes, but higher hops increase airtime and congestion. If you wish to see the entire mesh, set your radio to 7 hops. We can handle the extra congestion for now.

## Understanding Rebroadcast Logic and Role Priorities

Understanding how rebroadcasting works in Meshtastic helps avoid network congestion and explains why Router roles should be used carefully.

**For more info on how roles work and what is suggested based on the node use case please watch this [video](https://www.youtube.com/watch?v=htjwtnjQkkE) by The Comms Channel**

### Contention Windows
- **Clients and Routers/Repeaters** do **not** share the same contention window.  
- **Clients and Router_Lates (RLs)** do share a window — but RLs will defer to the end of the contention window if they hear another node.

### Simplified Priority Order
1. **Router & Repeater**  
   - Rebroadcast first.
2. **Clients (Client, Client Hidden, Client Mute, Router Client)**  
   - Rebroadcast after Routers/Repeaters, but cancel if they overhear another rebroadcast.  
3. **Router Late (RL)**  
   - Rebroadcasts last, **only if no one else has already done so**.

### Detailed Rebroadcast Logic
When a packet is received:
1. **Check hop limit**  
   - If `hop_limit = 0`, do not rebroadcast.  
2. **If I am a Router or Repeater:**  
   - Wait a small random delay (shorter if SNR is poor).  
   - Wait until the channel is clear.  
   - Transmit.  
3. **If I am not a Router or Repeater:**  
   - Wait until after the maximum possible Router/Repeater delay.  
   - Add a slightly longer random delay (scaled by SNR).  
   - If another node rebroadcasted and I am not Router_Late → cancel rebroadcast.  
   - Otherwise transmit.  
4. **If I am Router Late:**  
   - If another rebroadcast was heard:  
     - Wait until after all other possible delays, then add another random delay (scaled by SNR).  
     - Transmit only if the channel is still clear.  

### Why This Matters
- **Routers and Repeaters go first** → they form the backbone of coverage.  
- **Clients go second** → they fill in only if no Router/Repeater is nearby.  
- **Router Lates go last** → a safety net to ensure delivery without creating echo storms.  

### Implementation Notes
Most of this logic is implemented in:  
- `RadioLibInterface.cpp`  
- `RadioInterface.cpp`  
- `FloodingRouter.cpp`  

A flowchart would be an excellent addition here to visualize priority and timing.


---

## Recommended Configurations

If you can’t find a setting in the app, check Meshtastic docs (each page has iOS/Android/CLI/Web tabs).

### Router Nodes

Before configuring a router, review the [Router Deployment Guide](advanced-configuration/router-deployment.md).

Use when node is a router

**Paths to check** (App tabs may vary):  
`Radio > User`, `Radio > Device`, `Radio > Position`, `Radio > LoRa`, `Radio > Bluetooth`, `Modules > Neighbor Info`, `Modules > MQTT`

- **Short name**: Call sign; 4 Characters; Routers use a specific naming scheme, i.e FPR --> Francis Peak Router
- **Long name**: Routers use a specific naming scheme, i.e FPR --> Francis Peak Router
- **Licensed amateur radio**: `FALSE` (unless you’re operating in Ham Mode knowingly; encryption is disallowed on ham). HAM band operation is on Frequency Slot 45. Please do not use it on Frequency Slot 51.
- **Role**: Usually `Router` but can be Router Late depending on placement. Router roles only by coordination.
- **Rebroadcast mode**: `ALL` (We want routers to pass all traffic not be a filter)
- **Node Info Broadcast Interval**: `86400` s
- **GPS Mode**: `ENABLED` if present, else use **Fixed Position**.
- **Fixed Position**: Often `TRUE` for stationary nodes (set via CLI or phone). Unless GPS is desired for timekeeping. (really useful)
- **Position Broadcast Interval**: `86400` s
- **Region**: `US`
- **Hop Limit**: `7`
- **OK to MQTT**: `TRUE` (helps appear on map via others’ uplinks)
- **Telemetry**: `1800` s per timing interval of attached peripheral
- **Neighborinfo**: `ON, Transmit over Lora ON, 14400 Interval`
- **Required Channels**: `Freq51`

> Note: Neighbor Info is no longer shared across the mesh on an unencrypted primary channel, thus we require the Freq51 MQTT and Neighborinfo Channel.

### Router Late Nodes

Before configuring a Router Late, review the [Router Deployment Guide](advanced-configuration/router-deployment.md).

**Paths to check** (App tabs may vary):  
`Radio > User`, `Radio > Device`, `Radio > Position`, `Radio > LoRa`, `Radio > Bluetooth`, `Modules > Neighbor Info`, `Modules > MQTT`

- **Short name**: Call sign; 4 Characters; Routers use a specific naming scheme, i.e FPR --> Francis Peak Router
- **Long name**: Routers use a specific naming scheme, i.e FPR --> Francis Peak Router
- **Licensed amateur radio**: `FALSE` (unless you’re operating in Ham Mode knowingly; encryption is disallowed on ham). HAM band operation is on Frequency Slot 45. Please do not use it on Frequency Slot 51.
- **Role**: `Router Late`
- **Rebroadcast mode**: `ALL` (We want routers to pass all traffic not be a filter)
- **Node Info Broadcast Interval**: `43200` s
- **GPS Mode**: `ENABLED` if present, else use **Fixed Position**.
- **Fixed Position**: Often `TRUE` for stationary nodes (set via CLI or phone). Unless GPS is desired for timekeeping. (really useful)
- **Position Broadcast Interval**: `43200` s
- **Region**: `US`
- **Hop Limit**: `7`
- **OK to MQTT**: `TRUE` (helps appear on map via others’ uplinks)
- **Telemetry**: `1800` s per timing interval of attached peripheral
- **Neighborinfo**: `ON, Transmit over Lora ON, 14400 Interval`
- **Required Channels**: `Freq51`

> Note: Neighbor Info is no longer shared across the mesh on an unencrypted primary channel, thus we require the Freq51 MQTT and Neighborinfo Channel.

### Clent Nodes (Stationary or Outdoors)

**Paths to check** (App tabs may vary):  
`Radio > User`, `Radio > Device`, `Radio > Position`, `Radio > LoRa`, `Radio > Bluetooth`, `Modules > Neighbor Info`, `Modules > MQTT`

- **Short name**: Call sign; 4 Characters;
- **Long name**: Whatever you wish; 
- **Licensed amateur radio**: `FALSE` (unless you’re operating in Ham Mode knowingly; encryption is disallowed on ham). HAM band operation is on Frequency Slot 45. Please do not use it on Frequency Slot 51.
- **Role**: `Client`
- **Rebroadcast mode**: `ALL`
- **Node Info Broadcast Interval**: `21600` s
- **GPS Mode**: `ENABLED` if present, else use **Fixed Position**.
- **Fixed Position**: Often `TRUE` for stationary nodes (set via CLI or phone). Unless GPS is desired for timekeeping. (really useful)
- **Position Broadcast Interval**: `21600` s
- **Region**: `US`
- **Hop Limit**: `7`
- **OK to MQTT**: `TRUE` (helps appear on map via others’ uplinks)
- **Telemetry**: `1800` s per timing interval of attached peripheral
- **Neighborinfo**: `ON, Transmit over Lora ON, 14400 Interval`
- **Required Channels**: `Freq51`

### Clent Mute Nodes (Mobile or Indoors)

**Paths to check** (App tabs may vary):  
`Radio > User`, `Radio > Device`, `Radio > Position`, `Radio > LoRa`, `Radio > Bluetooth`, `Modules > Neighbor Info`, `Modules > MQTT`

- **Short name**: Call sign; 4 Characters;
- **Long name**: Whatever you wish;
- **Licensed amateur radio**: `FALSE` (unless you’re operating in Ham Mode knowingly; encryption is disallowed on ham). HAM band operation is on Frequency Slot 45. Please do not use it on Frequency Slot 51.
- **Role**: `Client Mute`
- **Rebroadcast mode**: `Local Only` 
- **Node Info Broadcast Interval**: `21600` s
- **GPS Mode**: `ENABLED` if present, else use **Fixed Position**.
- **Fixed Position**: Often `TRUE` for stationary nodes (set via CLI or phone). Unless GPS is desired for timekeeping. (really useful)
- **Position Broadcast Interval**: `21600` s
- **Region**: `US`
- **Hop Limit**: `7`
- **OK to MQTT**: `OFF` 
- **Ignore MQTT**: `ON`
- **Telemetry**: `1800` s per timing interval of attached peripheral
- **Neighborinfo**: `OFF`
- **Required Channels**: `Freq51`

### Clent Hidden Nodes (Stealth Nodes)

**Paths to check** (App tabs may vary):  
`Radio > User`, `Radio > Device`, `Radio > Position`, `Radio > LoRa`, `Radio > Bluetooth`, `Modules > Neighbor Info`, `Modules > MQTT`

- **Short name**: Call sign; 4 Characters;
- **Long name**: Whatever you wish; 
- **Licensed amateur radio**: `FALSE` (unless you’re operating in Ham Mode knowingly; encryption is disallowed on ham). HAM band operation is on Frequency Slot 45. Please do not use it on Frequency Slot 51.
- **Role**: `Client Hidden`
- **Rebroadcast mode**: `Known Only by default. If you have a fresh node stay on Local Only` 
- **Node Info Broadcast Interval**: `4294967295` s
- **GPS Mode**: `ENABLED` if present, else use **Fixed Position**.
- **Fixed Position**: Off
- **Position Broadcast Interval**: `OFF` 
- **Region**: `US`
- **Hop Limit**: `7`
- **OK to MQTT**: `OFF` 
- **Ignore MQTT**: `ON`
- **Telemetry**: `OFF` s per timing interval of attached peripheral
- **Neighborinfo**: `OFF`
- **Required Channels**: `Freq51`

### Get on the Map

To appear on the map:

**Channels > Primary**  
**Modules > MQTT**

- **Allow Position Requests**: `TRUE`
- **Precise Location**: `TRUE`
- **Approximate Location**: choose a value you’re comfortable with

#### If Enabling MQTT

- **Uplink Enabled**: `TRUE`
- **Downlink Enabled**: `FALSE` (prevents pulling internet traffic into RF)
- **Enabled**: `TRUE`
- **MQTT Server Address**: **Message on MediumFast for details or reach out on Discord**
- **Username/Password**: **Message on MediumFast for details or reach out on Discord**
- **Encryption**: `TRUE`
- **JSON**: `FALSE`
- **TLS**: `FALSE`
- **Root Topic**: `msh/US/UT`
- **Map Reporting Enabled**: `TRUE`
- **Map Report Publish Interval**: Fixed `Same as standard config broadcast interval` s; Portable `no more frequent than 600` s
- **Approximate Location**: set as desired

---

## Local Channels

> We will not be providing nor publish QR codes or Meshtastic URLs for public channels. They can also change LoRa settings (hop count, OK to MQTT, TX power) invisibly. Enter channel names/keys manually. If you would like to create a channel for a specific purpose but wish it to be public use; contact us and we will add it to the documentation as requested.

### MediumFast

Default community channel on Medium_Fast. We use this channel to connect the mesh together on a unified unencrypted channel and also broadcast. This resides in our secondary channels

| Channel Name | PSK  | Modem Preset | Slot | Ham Mode |
|---|---|---|---|---|
| Freq51 | `1A==` | Medium_Fast | 51 | Off |


### DC801

This is the local hackerspace channel. The key is only found at the hackerspace. Come join us!

| Channel Name | PSK  | Modem Preset | Slot | Ham Mode |
|---|---|---|---|---|
| ShortFast | `access hackerspace for key` | LONG_FAST | 51 | Off |
