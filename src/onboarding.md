# Freq51 Onboarding Guide - Welcome to the Intermountain Mesh!

## 🎯 Quick Start - Get Connected in 15 Minutes

Welcome to Freq51! This guide will get you up and running on our Meshtastic network.

---

## 📦 What You'll Need

- **Hardware**: Any [Meshtastic-compatible device](https://meshtastic.org/docs/hardware/devices/)
- **App**: Meshtastic mobile app  
  - [iOS](https://apple.co/3Auysep)  
  - [Android](https://play.google.com/store/apps/details?id=com.geeksville.mesh)
- **Time**: About **10–15 minutes**
- **Location**: Utah / Idaho region for best coverage

---

## ⚡ Quick Setup

### 1️⃣ Flash the Latest Firmware

Before configuring your node, make sure it is running the **latest Meshtastic firmware**.

Use the official web flasher:

https://flasher.meshtastic.org/

Supported devices include:

- RAK devices
- Seeed SenseCAP / Tracker
- XIAO
- Heltec
- Raspberry Pi based nodes

If you need help flashing firmware see the  
[Firmware Update Guide](advanced-configuration/firmware-updates.md).

---

### 2️⃣ Connect to Your Node

Install the **Meshtastic mobile app** and connect to your device.

Most nodes connect via:

**Bluetooth (recommended)**

Alternative connection methods include:

- WiFi
- USB / Serial

Follow the in-app pairing process until you can see your device in the Meshtastic app.

The mobile app is used for **pairing and basic device setup**. The **Freq51 configuration tool will be used next to apply the network settings.**

---

### 3️⃣ Load Your Freq51 Configuration

Instead of manually configuring dozens of settings, use the **Freq51 Auto Config Tool**.

!!! tip "Generate Your Configuration"
    Open the configuration tool here:

    https://tools.freq51.net/config/

    **Before starting:** Your computer must be connected to the node using one of the following methods:

    - **USB / Serial connection** to the device
    - **WiFi/Wired Connection** to the node's ip address Depending on what type of hardware it is (ESP32/Raspberry pi)

    Once connected, the tool will detect your node and apply the correct configuration automatically.

The tool will generate the correct settings for:

- **LoRa preset**
- **Frequency slot**
- **Freq51 channel**
- **Hop limits**
- Other required network settings

Simply follow the instructions provided by the tool and apply the configuration to your node.

Using the tool ensures all nodes on the network stay **compatible and correctly configured**.

---

## 🏷️ Node Roles - Choose the Right One

Understanding roles is important for maintaining a healthy mesh network.

### 👤 CLIENT (Recommended for most users)

- **Best for**: Handheld devices, mobile setups, most users
- **Behavior**: General-purpose node that rebroadcasts packets only if no other node has already done so
- **Visibility**: Visible in nodes list/topology
- **Use when**: This is the default/normal choice

Behavior: General-purpose node that rebroadcasts packets only when needed.

This is the **default role most users should choose**.

---

### 🏠 CLIENT_BASE (Rooftop or strategic clients)

- **Best for**: Rooftop or other well-placed nodes, that are not quite on Router leve.
- **Behavior**: Node that rebroadcasts packets to/from favorited noded with priority, else acts as client.
- **Visibility**: Visible in nodes list/topology
- **Use when**: This is your best placed node or Strategic Client

Behavior: Prioritizes rebroadcasting packets from favorited nodes, otherwise behaves like a client.

---

### 🔇 CLIENT_MUTE (Extra or local nodes)

- **Best for**: Additional handheld devices near better-placed nodes, Car-mounted devices, temporary deployments
- **Behavior**: Like CLIENT but does NOT forward other devices' packets at all (no repeating/routing)
- **Visibility**: Visible in nodes list
- **Use when**: You have extra handheld/indoor nodes near a better-placed node and want to avoid adding needless rebroadcasts. This is particularly useful with indoor nodes.

Behavior: Does **not forward packets from other nodes**, helping reduce unnecessary network traffic.

---

### 🔄 ROUTER (Advanced infrastructure)

- **Best for**: Strategically placed infrastructure (mountain/very tall tower with big line-of-sight)
- **Behavior**: Always rebroadcasts each packet once and is prioritized for routing ("cuts in line" vs other roles)
- **Visibility**: Visible in nodes list/topology
- **Use when**: Device is strategically placed to extend coverage for many others
- **⚠️ Important**: Misplacing routers increases collisions and wastes hops. Contact the [Discord community] before deploying
- **📖 Detailed Guide**: See our comprehensive [Router Deployment Guide](advanced-configuration/router-deployment.md) before **considering setting up a router**.

Behavior: Always rebroadcasts each packet once and is prioritized for routing.

⚠️ **Important**

Incorrect router placement can **harm network performance**.

Before deploying a router please review the guide:

[Router Deployment Guide](advanced-configuration/router-deployment.md)

---

### 🔄 ROUTER_LATE (Infrastructure - Advanced users only!)
- **Best for**: Adding reliability/coverage for local clusters without stealing priority
- **Behavior**: Always rebroadcasts once, but only after all other modes have had their chance (not prioritized)
- **Visibility**: Visible in nodes list/topology
- **Use when**: You need a "safety net" for a small area or dead spots without stealing routing priority from better infrastructure

Behavior: Repeats packets **after other node types have had their chance**.

---

For a deeper explanation of roles watch this video from **The Comms Channel**:

https://www.youtube.com/watch?v=htjwtnjQkkE

---

## 🗺️ Local Resources

### Coverage Areas

Primary coverage currently includes:

- Salt Lake Valley
- Tooele County
- Utah County
- Boise
- Twin Falls

Growing areas include:

- Davis County
- Weber County

See the **Infrastructure page** for current node deployments.

---

## 💬 Getting Help

The fastest place to get help is our community Discord.

**Join here:**

https://discord.com/invite/7ANChSNNbW

Members can help with:

- Device setup
- Antennas
- Node placement
- Firmware issues
- Expanding coverage

---

## ❓ Quick Troubleshooting

### Can't see other nodes?

- Make sure you used the **Freq51 configuration tool**
- Verify antenna connections
- Try moving your node to a higher location
- Location broadcasts are intentionally infrequent and may take **several hours** to appear on the map

---

### Messages not getting through?

- You may be outside mesh coverage
- Check the infrastructure map
- Try a higher antenna placement
- Verify your configuration using the **Freq51 config tool**

---

## 📡 Welcome to the Mesh

Freq51 is a **community-built Meshtastic network** connecting people across the Intermountain West.

Using the **auto configuration tool** helps keep the network reliable and compatible for everyone.

👉 https://tools.freq51.net/config/

---

*Questions? Join the Discord and say hello — we're happy to help!* 📡