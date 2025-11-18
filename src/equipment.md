# Our Equipment

This page will host **Freq51 Mesh builds** and their approximate coverage maps. Use them to align your setup if you’re inside coverage areas (red). Note that different nodes may run different software. Some builds will run the meshing around BBS system. These are select router nodes with high remote power requirements and recommended to be spaced within 5 hops of each other for consistent relaying. Other nodes are low power. We currently prefer NRF52 based infrastructure nodes for <1W TX power or femtofoxes and Nebra custom miner nodes for 1W TX power. All routers must feature a filter. Filtering is optional on non infrastructure nodes. 

## Here is a list of hardware many of us use - [Freq51 Hardware](https://a.co/4PWizzG)

## NRF52 Mobile Node Example
- SenseCAP Card Tracker T1000-E (Meshtastic)
- [SeeedStudio Link](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)

The **SenseCAP Card Tracker T1000-E** is a compact, NRF52-based mobile Meshtastic node designed for lightweight, on-the-go use. Built around the **nRF52840** MCU and an **LR1110 LoRa transceiver**, it combines low-power mesh communication with integrated **GPS/GNSS** inside a rugged, credit-card-sized enclosure. Its small size, IP65 rating, and simple charging interface make it ideal as a **mobile, personal, or asset-tracking node** within an NRF52-based mesh network.

### Pros
- **NRF52 Platform (nRF52840):** Aligns well with NRF52-focused mesh architectures.  
- **Integrated GPS:** Provides location reporting with no external modules required.  
- **LoRa (863–928 MHz):** Compatible with Meshtastic regional configs.  
- **Ultra-portable:** ~credit-card size, lightweight, easy to carry or mount.  
- **Rugged:** IP65 dust/water resistance for outdoor mobility.  
- **Fully supported by Meshtastic firmware.**

### Cons
- **Battery life depends on GPS + reporting interval** (700 mAh internal battery).  
- **LR1110 radio has partial compatibility limits** with older SX127x nodes (mainly receiving).  
- **Lower TX power** and internal antenna = less range than full-sized infrastructure nodes.  
- **Not suitable as a router node** — best for handheld/mobile deployment.

## NRF52 Static/Roof Node Example

- RAKwireless WisBlock Meshtastic Starter Kit US915 Base RAK19007 + Core RAK4631
	- [Amazon Link](https://www.amazon.com/RAKwireless-WisBlock-Meshtastic-Starter-RAK19007/dp/B0CHKZJK9C)
- ABS 7.9" x 3.9" x 2.8" enclosures are a great size/price/quality (or similar).  
	- [Amazon Link](https://www.amazon.com/YETLEBOX-Waterproof-Electrical-Stainless-Enclosure/dp/B0C2HHJFST)
- **Butyl tape OR LEXEL** seals antenna passthroughs and is great for making outer seals as lexel sticks to itself (don’t block included gaskets).  
	- [Amazon Link](https://www.amazon.com/Sashco-13010-Lexel-Adhesive-Caulk/dp/B01LZA2H2L)
- **Adafruit bq25185 USB / DC / Solar Lithium Ion/Polymer charger** modules are handy for charging packs while radios are disconnected/in storage and its a great small MPPT (remove charge LED for small solar if needed).
	- [Adafruit link](https://www.adafruit.com/product/6091)
- “Soshine” solar panels with regulated 5 V output are convenient and include a mounting pole.  
	- [Amazon Link](https://www.amazon.com/Soshine-Mini-Solar-Panel-Monocrystalline/dp/B099RSLNZ4)
- UV-protect plastics & seal passthroughs: **LEXEL** has worked well.  
- Use the battery connector as a service “switch” inside; add an external waterproof switch only when tool-access enclosures demand it.  
- Add a small **weep hole** on the bottom for pressure equalization and drainage. This is also useful if you have weather sensors. Add a small fabric baffle and place the sensor behind it. We like Bosch BME680's for weather data.
- **Lube gaskets** (e.g., silicone grease) to reduce drying/cracking and improve seals.  
- After many trials, **[Alfa 5 dBi omni](https://www.amazon.com/dp/B08H8J6ZV6)** antennas have been a solid value: short (less wind load), N-male fits through-panel connectors, reliable wide beam.

> We are going to fill out standard builds as we improve the documentation. Feel free to drop by the discord and suggest yours

## Femtofox Node Example
TBA
## [Nebra Node Example](equipment/nebra-miner.md)

## PiZero Node Example
TBA
## Bird House Node Example
TBA
## Tips for placement
TBA
