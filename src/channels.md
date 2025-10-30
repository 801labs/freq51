# Meshtastic Channel Setup Guide

A guide to setting up **private and other channels** on your Meshtastic node.  
Each channel includes its name, key, and purpose.  
Use this to configure your node to connect with local or community networks.

---

## 🧭 Table of Contents
- [Primary Channel (General Freq51 Mesh)](#primary-channel-general-mesh)  
- [Utah Channels](#utah-channels)  
- [Idaho Channels](#idaho-channels)

---

## 🔹 Primary Channel (General Mesh)

| Channel Name | Role | PSK/Key | Description |
|---------------|------|----------|--------------|
| `Freq51` | **Primary** | `1A==` | `Main Freq51 mesh network for general users. Enables broad communication across regions.` |

💡 *This is the main channel most users start with. It connects you to the general Freq51 mesh.*

---

## 🏔️ Utah Channels

Special channels for Utah-based groups and initiatives.  
These can be added as **secondary** or **tertiary** channels for local coordination and alerts.

| Channel Name | Role | PSK/Key | Description |
|---------------|------|----------|--------------|
| `BBBB-Alerts` | Secondary | `NONE` | `Alerts from FEMA iPAWS/EAS, NOAA, USGS Volcano Alerts, and more.` |
| `DC801` | Secondary | `MHHa9wlKe4chJ01SuTKt1RnqbSXv4UJNAP+ONcKfa0c=` | `DC801 - 801 Labs` |
| `SAINTCON` | Secondary | `dFa5cC4GuZ9AnFgPKzBjzqO6Ch8doQdOMqzwlmEff0Q=` | `SAINTCON` |

💬 *These channels help Utah users receive local alerts and coordinate within their communities.*

---

## 🌲 Idaho Channels

Special channels for Idaho-based users and organizations.  
These can be added as **secondary** channels to support local groups, alerts, and coordination.

| Channel Name | Role | PSK/Key | Description |
|---------------|------|----------|--------------|
| `2ndStarLabs` | Secondary | `BRdqPvLgcJKPN5BBCHUVxU6YavR11R3HAoy5wSZdSqc=` | `Channel for members of Second Star Labs Hackerspace in Twin Falls, ID.` |
| `IDAlerts` | Secondary | `EdYPaoEzYapldDMwSIeYaLuOVhEqAj5S0Hm5owRoWEg=` | `Alerts from FEMA iPAWS/EAS, NOAA, USGS Volcano Alerts, and more.` |
| `IDEmergency` | Secondary | `z/N/1qMBO9LubPEQ7tjOZfUrFuRCmni2OosuNgHpgJM=` | `Monitors public channels for emergency keywords (911, fire, rescue) and relays info here.` |

💬 *These Idaho-specific channels extend the mesh to local emergency and community networks.*

---

## ⚙️ How to Add Channels

1. Open the **Meshtastic App** or use the **CLI** (`meshtastic --set` commands).  
2. Navigate to **Channels** → **Add Channel**.  
3. Enter the **Channel Name** and **PSK/Key** from the table above.  
4. Choose the **Role** (Primary or Secondary).  
5. Save and sync your settings.  

💡 *Be sure all devices in your group use the same channel name and PSK.*

