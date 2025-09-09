# Freq51 Onboarding Guide - Welcome to the Intermountain Mesh!

## 🎯 Quick Start - Get Connected in 15 Minutes

Welcome to Freq51! This guide will get you up and running on Utah's premier Meshtastic network. Our community focuses on emergency preparedness, off-grid communication, and building resilient local connections.

### What You'll Need

- **Hardware**: Any [Meshtastic-compatible device](https://meshtastic.org/docs/getting-started/supported-hardware)
- **App**: Meshtastic mobile app (iOS/Android) or web client
- **Time**: 15-30 minutes for initial setup
- **Location**: Salt Lake City, Utah, or Idaho regions for best coverage

---

## 📱 Step-by-Step Setup

### 1. Hardware Setup (5 minutes)

1. **Get your device**: We recommend starting with a Heltec V3, T-Beam, or similar from the [supported hardware list](https://meshtastic.org/docs/getting-started/supported-hardware)
2. **Power on**: Most devices will create a WiFi hotspot on first boot
3. **Note the device name**: Usually displays on device screen or in WiFi networks

### 2. Connect via Meshtastic App (10 minutes)

1. **Download**: Get the official Meshtastic app from your app store
2. **Connect**: 
   - **Bluetooth**: Pair directly with your device
   - **WiFi**: Connect to device hotspot, then use web interface
3. **Initial setup**: Follow the in-app setup wizard

### 3. Configure for Freq51 (5 minutes)

Apply these **essential settings** for optimal network participation:

#### Channel Settings
- **Primary Channel**: Use default "LongFast" initially
- **Region**: Set to "US"
- **Frequency**: 915MHz band (automatic for US region)

#### Node Configuration
- **Node Name**: Choose something identifiable (avoid personal info)
- **Role**: Start with "CLIENT" (see roles section below)
- **Location**: Enable GPS if comfortable (helps with mesh routing)

#### Freq51-Specific Settings
- **MQTT**: Disable downlink unless specifically needed
- **Store & Forward**: Enable if you want to help relay messages
- **Neighbor Info**: Enable to help build network maps

---

## 🏷️ Node Roles - Choose the Right One

Understanding roles is crucial for network health:

### 👤 CLIENT (Recommended for most users)
- **Best for**: Handheld devices, mobile setups, most users
- **Behavior**: Receives all messages, participates in routing
- **Use when**: Walking around, in vehicles, general use

### 🔇 CLIENT_MUTE (Mobile/Temporary nodes)
- **Best for**: Car-mounted devices, temporary deployments
- **Behavior**: Still routes messages but reduces unnecessary transmissions
- **Use when**: You're moving frequently or have limited power

### 🔄 ROUTER (Coordinate with community first!)
- **Best for**: Fixed installations with good coverage and reliable power
- **Behavior**: Optimized for forwarding, stores messages longer
- **Use when**: You have permission and a strategic location
- **⚠️ Important**: Contact [Discord community] before deploying routers

#### 📏 Router Placement Guidelines by Elevation

**Strategic placement is critical for router effectiveness. Different elevations serve different purposes:**

**🏔️ High Elevation Backbone Routers (~9,361' - Nelson Peak level)**
- **Purpose**: Major backbone infrastructure for maximum coverage
- **Coverage**: Can reach 50+ miles with line-of-sight
- **Role**: Primary ROUTER role
- **Coordination**: Requires extensive community planning and approval
- **Example locations**: Mountain peaks, tall towers, strategic high points

**⛰️ Regional Coverage Routers (~5,600' - Point of the Mountain/Traverse Mountains)**
- **Purpose**: Regional coverage bridging high backbone to local nodes
- **Coverage**: 15-30 mile radius depending on terrain
- **Role**: ROUTER or ROUTER_CLIENT for secondary infrastructure
- **Coordination**: Community coordination recommended
- **Example locations**: Foothills, elevated neighborhoods, radio towers

**🏠 Local/Ground Level (25-35' - House roofs/ground level)**
- **Purpose**: Local mesh participation and user access
- **Coverage**: 1-5 miles in typical suburban/urban terrain
- **Role**: CLIENT or CLIENT_MUTE (NOT router roles)
- **Why CLIENT**: Prevents network congestion from too many routers
- **Example locations**: Home installations, portable setups, vehicle mounts

**Key Principle**: Higher elevation = greater responsibility and coordination requirements. Most users should remain clients regardless of their installation height.

### 🚫 REPEATER (NOT RECOMMENDED for new users)
- **❌ Do NOT use**: New users should avoid this role entirely
- **Why avoid**: Can cause network congestion and interference without proper coordination
- **Community policy**: Repeaters are deployed only by experienced members with specific community approval
- **⚠️ Important**: This role should NEVER be used without explicit permission from network coordinators

---

## 🌐 Community Guidelines

### Network Etiquette
- **Be respectful**: This is a shared resource for emergency preparedness
- **Test responsibly**: Avoid excessive "testing" messages during peak times
- **Coordinate infrastructure**: Contact community before adding routers/repeaters
- **Stay contactable**: Keep a way for the community to reach you if needed

### MQTT Guidelines
- **Default recommendation**: Disable MQTT downlink to prevent RF flooding
- **Map participation**: Enable uplink only if you want to appear on community maps
- **Network health first**: RF mesh takes priority over internet integrations

### Emergency Use
- **Real emergencies**: Use any necessary settings, worry about optimization later
- **Practice regularly**: Regular use helps ensure reliability when needed
- **Backup communications**: Mesh complements, doesn't replace, other emergency comms

---

## 🗺️ Local Resources

### Coverage Areas
- **Primary**: Salt Lake Valley, Utah County
- **Growing**: Davis County, Weber County, Eastern Idaho
- **Planned**: See [Infrastructure](https://github.com/801labs/freq51/blob/main/src/infrastructure.md) for planned node locations

### Getting Help
- **Discord**: Official Meshtastic Discord → Connect Forum → US-Utah && US-ID
- **Local Meetups**: Check Discord for in-person events
- **GitHub**: This repository for documentation and issues

### Advanced Configuration
- **Detailed settings**: See [Configuration](https://github.com/801labs/freq51/blob/main/src/config.md) guide
- **Hardware recommendations**: Check [Equipment](https://github.com/801labs/freq51/blob/main/src/equipment.md) page
- **Common issues**: Review [FAQ](https://github.com/801labs/freq51/blob/main/src/faq.md)

---

## 🚀 Next Steps After Setup

### Week 1: Test and Verify
1. **Range test**: Try communicating from different locations
2. **Join Discord**: Introduce yourself to the community
3. **Read FAQ**: Familiarize yourself with common questions
4. **Check coverage**: See where you can reach from your typical locations

### Month 1: Get Involved
1. **Attend events**: Join local meetups or nets
2. **Share experiences**: Help others with onboarding
3. **Consider upgrades**: Better antennas, higher locations, etc.
4. **Emergency planning**: Integrate mesh into your preparedness plans

### Ongoing: Community Contribution
1. **Share knowledge**: Help document what you learn
2. **Test new features**: Participate in firmware testing
3. **Strategic placement**: Consider fixed installations if you have good locations
4. **Recruit responsibly**: Bring others in with proper onboarding

---

## ❓ Quick Troubleshooting

### Can't see other nodes?
- Check region settings (must be "US")
- Verify antenna connections
- Try different locations (higher elevation helps)
- Ensure role is CLIENT, not CLIENT_MUTE initially

### Messages not getting through?
- Network may be busy - try again later
- Check hop limit (default 3 is usually good)
- Verify channel settings match community standards

### Device won't connect?
- Restart both device and app
- Check Bluetooth/WiFi permissions
- Try web interface if app fails
- Ensure device is in pairing mode

---

## 📞 Support and Community

**Need help?** The Freq51 community is here to support you:

- **Discord**: Most active support channel
- **GitHub Issues**: For documentation or technical problems
- **Local Events**: Best for hands-on help
- **Mentorship**: Experienced members happy to help newcomers

**Welcome to the mesh!** 📡✨

---

*This guide focuses on getting you connected quickly and safely. For detailed technical information, see our other documentation pages. Questions? Ask in Discord - we're here to help!*
