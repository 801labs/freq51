![Intermountain Mesh Logo](images/IntermountainMeshLogo.png)
# Freq51 - The Intermountain Mesh

Meshtastic® lets you use inexpensive LoRa radios as a long-range, off-grid communication platform where regular infrastructure is unreliable or unavailable. It’s community-driven and open source. Radios automatically form a mesh, forwarding packets to neighbors (up to 7 hops from origin). Phones are optional. **The Freq51 community** is building an open community mesh that anyone here can join. This network is intended as a tool for emergency/disaster response and off-grid coordination and hobbyist projects. No license is required to use Meshtastic (unless you intentionally enable Ham Mode). Meshtastic is under active development and **not** a life-critical service. 

---

## Joining

1. **Get supported hardware** from the Meshtastic list.
2. **Join our [Discord](https://discord.gg/meshtastic)** for local help and announcements.
3. Read the **[FAQ](faq.md)** and **[Configuration](config.md)** pages below.
4. See **[Equipment](equipment.md)** for example builds / coverage once published, and **[Infrastructure](infrastructure.md)** for deployed nodes.

**Links**
- Supported Hardware: [https://meshtastic.org/docs/hardware/devices/](https://meshtastic.org/docs/hardware/devices/)
- freq51 Discord: **Official Meshtastic Discord --> Connect Forum --> [US-Utah](https://discord.gg/meshtastic)**

---

## MQTT and Maps

**MQTT** (Message Queue Telemetry Transport) is a lightweight pub/sub protocol. Meshtastic can uplink device info and messages to an MQTT server. This enables:

- **Computer ↔ node** integrations without using LoRa.
- **Uplink/Downlink bridging** so two distant nodes can exchange messages via internet when out of LoRa range. We ideally would like to avoid MQTT downlink at all costs. It floods the network.
- **Maps & analytics** (position/telemetry), delivery reports, and tooling. If you want your node on the map. 

**Our stance:** We prioritize a healthy **RF mesh** first. MQTT is useful for mapping, analytics, but please avoid flooding RF with downlinked internet traffic.

**Freq51 Map**
- Public Map: ![Intermountain Mesh Map](images/mesh-map.png)

**Good practices**
- If your node is **directly connected** to an MQTT server, **do not enable downlink** on public RF channels (e.g., MediumFast). That can spam RF. Nodes not on MQTT can use “Ignore MQTT,” and that setting is requested to be on by default when operating on our mesh unless you need MQTT.

---

## Member Projects

Some cool freq51-adjacent projects we love to showcase (add yours!):

- TBD

> Submit a PR to add your project here.

---

## Other Local Groups

Meshtastic keeps a running list of local groups worldwide. If you’re traveling or collaborating across regions, check there and cross-link back to freq51 once we’re listed.

- Meshtastic Local Groups Directory: [https://meshtastic.org/docs/community/local-groups/](https://meshtastic.org/docs/community/local-groups/)
