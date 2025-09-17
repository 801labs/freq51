# Freq51 Onboarding Guide - Welcome to the Intermountain Mesh!

## 🎯 Quick Start - Get Connected in 15 Minutes

Welcome to Freq51! This guide will get you up and running on our Meshtastic network.

### What You'll Need

- **Hardware**: Any [Meshtastic-compatible device](https://meshtastic.org/docs/hardware/devices/)
- **App**: Meshtastic mobile app ([iOS](https://apple.co/3Auysep)/[Android](https://play.google.com/store/apps/details?id=com.geeksville.mesh)) or web client
- **Time**: 15-30 minutes for initial setup
- **Location**: Salt Lake City, Utah region for best coverage

---

## 📱 Step-by-Step Setup

### 1. Hardware Setup (5 minutes)

1. **Get your device**: We recommend starting with a RAK device, Seeed Tracker, Station G2, XIAO, or Raspberry Pi-based device from the [supported hardware list](https://meshtastic.org/docs/hardware/devices/)
2. **Power on**: Some devices will create a WiFi hotspot on first boot

### 2. Connect via Meshtastic App (10 minutes)

1. **Download**: Get the official Meshtastic app from your app store
   - IOS [Link](https://apple.co/3Auysep)
   - Android [Link](https://play.google.com/store/apps/details?id=com.geeksville.mesh)
2. **Connect**: 
   - **Bluetooth**: Most devices connect via Bluetooth (recommended method)
   - **WiFi**: Some devices also support WiFi hotspot connection for web interface
3. **Initial setup**: Follow the in-app setup wizard

### 3. Configure for Freq51 (5 minutes)

Apply these **essential settings** for optimal mesh network participation:
***Keep in mind that the IOS/Android app settings layout may differ***

### Quick Setup Guide
Use this checklist to get your node configured and on the network as quickly as possible.  

#### General Settings
- [ ] **Region**: This is normally set the first time you connect to the node.  
      If it hasn’t been set yet, go to the **LoRa Section** and set it to **US**.

#### Node Configuration (Quick Setup)

1. **User Section**
   - [ ] **Long Name**: Choose something recognizable (avoid personal info).
   - [ ] **Short Name**: Set a short, unique identifier (usually 3–4 letters).

2. **Device Section**
   - [ ] **Role**: Set to **CLIENT**.

3. **LoRa Section**
   - [ ] **Frequency Slot**: Set to **51**.
   - [ ] **Hop Count**: Choose a number between **5–7** (recommended).

4. **Location Section**
   - [ ] **GPS**: Enable if you’re comfortable sharing your location.


---

## 🏷️ Node Roles - Choose the Right One

Understanding roles is crucial for network health:

### 👤 CLIENT (Recommended for most users)
- **Best for**: Handheld devices, mobile setups, most users
- **Behavior**: General-purpose node that rebroadcasts packets only if no other node has already done so
- **Visibility**: Visible in nodes list/topology
- **Use when**: This is the default/normal choice

### 🔇 CLIENT_MUTE (Extra/local nodes)
- **Best for**: Additional handheld devices near better-placed nodes, Car-mounted devices, temporary deployments
- **Behavior**: Like CLIENT but does NOT forward other devices' packets at all (no repeating/routing)
- **Visibility**: Visible in nodes list
- **Use when**: You have extra handheld/indoor nodes near a better-placed node and want to avoid adding needless rebroadcasts. This is particularly useful with indoor nodes.

### 🔄 ROUTER (Infrastructure - Advanced users only!)
- **Best for**: Strategically placed infrastructure (mountain/very tall tower with big line-of-sight)
- **Behavior**: Always rebroadcasts each packet once and is prioritized for routing ("cuts in line" vs other roles)
- **Visibility**: Visible in nodes list/topology
- **Use when**: Device is strategically placed to extend coverage for many others
- **⚠️ Important**: Misplacing routers increases collisions and wastes hops. Contact the [Discord community] before deploying
- **📖 Detailed Guide**: See our comprehensive [Router Deployment Guide](advanced-configuration/router-deployment.md) before **considering setting up a router**.

### 🔄 ROUTER_LATE (Infrastructure - Advanced users only!)
- **Best for**: Adding reliability/coverage for local clusters without stealing priority
- **Behavior**: Always rebroadcasts once, but only after all other modes have had their chance (not prioritized)
- **Visibility**: Visible in nodes list/topology
- **Use when**: You need a "safety net" for a small area or dead spots without stealing routing priority from better infrastructure

### 🚫 REPEATER (**Not Used** - Advanced users only!)
- **Best for**: Pure extenders in strategic spots
- **Behavior**: Always rebroadcasts each packet once with minimal overhead, turns off its own broadcast chatter
- **Visibility**: NOT visible in nodes list/topology
- **Special**: Only role that can use ALL_SKIP_DECODING rebroadcast mode
- **Use when**: You want a pure extender in a strategic spot and don't need the node itself to appear in topology
- **⚠️ Important**: This mode can cause serious issues with the mesh and it's particularly hard to troubleshoot. Contact the [Discord community] before deploying repeaters
- **📖 Detailed Guide**: See our comprehensive [Router Deployment Guide](advanced-configuration/router-deployment.md) for complete information

**For more info on how roles work and what is suggested based on the node use case please watch this [video](https://www.youtube.com/watch?v=htjwtnjQkkE) by The Comms Channel**

---

## 🗺️ Local Resources

### Coverage Areas
- **Primary**: Salt Lake Valley
- **Growing**: Davis County, Weber County, Utah County
- **Planned**: See [Infrastructure](infrastructure.md) for planned node locations

### Getting Help
- **Discord**: Official Meshtastic Discord → Connect Forum → [US-Utah](https://discord.gg/meshtastic)

### Advanced Configuration
- **Detailed settings**: See [Configuration](config.md) guide
- **Hardware recommendations**: Check [Equipment](equipment.md) page
- **Router deployment**: See [Router Deployment Guide](advanced-configuration/router-deployment.md) for advanced users
- **Firmware Updates**: See [Firmware Update Guide](advanced-configuration/firmware-updates.md) page
- **Common issues**: Review [FAQ](faq.md)

---

## ❓ Quick Troubleshooting

### Can't see other nodes?
- Check region settings (must be "US")
- Verify antenna connections
- Try different locations (higher elevation helps)
- Ensure role is CLIENT
 - Location broadcasts are intentionally infrequent to reduce RF noise; it can take several hours for nodes to appear on your map

### Messages not getting through?
- Check [router placements](infrastructure.md) and see if you're near the mesh
- Network may be busy - try again later
- Check hop limit (default 3 is usually good, but 5-6 may give better results.)
- Verify channel settings match community standards

---

## 📞 Support and Community

**Need help?** The Freq51 community is here to support you:

- **[Meshtastic Discord](https://github.com/meshtastic)**: Most active support channel
- **[Utah Mesh Discord](https://discord.gg/x4AQuUjm)**: A backup community in the event the main meshtastic discord doesn't work out

**Welcome to the mesh!** 📡✨

---

*This guide focuses on getting you connected quickly and safely. For detailed technical information, see our other documentation pages. Questions? Ask in Discord - we're here to help!*
