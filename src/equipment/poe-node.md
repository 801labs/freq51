# POE Node Build Guide

This guide covers the recommended hardware configurations for POE-powered nodes in the Freq51 mesh network. These builds are designed for infrastructure deployment at high-level repeater sites and valley-level client sites.

## Build Configurations

We have two primary POE node configurations:

1. **Raspberry Pi 4B** - Higher performance option with integrated POE
2. **Raspberry Pi Zero 2W** - Compact, cost-effective option

Both configurations support cavity filtering for high-level repeater sites where interference management is critical.

---

## Configuration 1: Raspberry Pi 4B Build

### High-Performance Build
**Total Cost: ~$275**

This configuration uses the Raspberry Pi 4B, with integrated POE Hat, to ensure future compatibility and the ability to run new meshtastic services in the future.

### Parts List

#### Base Components (All Sites)

| Component | Price | Link |
|-----------|-------|------|
| Raspberry Pi 4B | $40.00 | [Adafruit](https://www.adafruit.com/product/4295) |
| Nebra LORA Hat | $25.00 | TBA |
| Waveshare POE Hat | ~$25.00 | [Amazon](https://www.amazon.com/waveshare-Ethernet-Raspberry-Standard-Isolated/dp/B0928ZD7QQ) |
| PNY 64GB PRO Elite High Endurance SD Card | $10.00 | [Amazon](https://www.amazon.com/PNY-64GB-EliteTM-Endurance-microSDXC/dp/B0F4LKYDBF) |
| RAK Outdoor Enclosure | $60.00 | [Rokland](https://store.rokland.com/collections/enclosures/products/rak-wireless-rak-hotspot-v2-or-mntd-outdoor-enclosure-kit-weatherproof-hotspot-conversion-box-usa-only) |
| Gizont 45cm Antenna | $26.95 | [AliExpress](https://www.aliexpress.us/item/3256806241790045.html) |
| SMA Male to N Female Bulkhead | $6.00 | [Amazon](https://www.amazon.com/dp/B00COX9MTG) |

**Base Total: $192.95**

#### Additional Components for Cavity Filter (High-Level Sites Only)

| Component | Price | Link |
|-----------|-------|------|
| SMA Male to SMA Male Pigtail | $2.00 | TBA |
| Cavity Filter | $80.00 | TBA |

**Filtered Build Total: $274.95** (Base + Cavity Filter components)

---

## Configuration 2: Raspberry Pi Zero 2W Build

### Recommended Budget Build
**Total Cost: ~$234**

This configuration uses the Raspberry Pi Zero 2W with a POE adapter for a compact, affordable deployment.

### Parts List

#### Base Components (All Sites)

| Component | Price | Link |
|-----------|-------|------|
| Raspberry Pi Zero 2W | $15.00 | [DigiKey](https://www.digikey.com/en/products/detail/raspberry-pi/SC1176/15298147) |
| Nebra LORA Hat | $25.00 | TBA |
| POE Adapter | ~$9.00 | [Amazon](https://www.amazon.com/dp/B0876N3PMZ) |
| PNY 64GB PRO Elite High Endurance SD Card | $10.00 | [Amazon](https://www.amazon.com/PNY-64GB-EliteTM-Endurance-microSDXC/dp/B0F4LKYDBF) |
| RAK Outdoor Enclosure | $60.00 | [Rokland](https://store.rokland.com/collections/enclosures/products/rak-wireless-rak-hotspot-v2-or-mntd-outdoor-enclosure-kit-weatherproof-hotspot-conversion-box-usa-only) |
| Gizont 45cm Antenna | $26.95 | [AliExpress](https://www.aliexpress.us/item/3256806241790045.html) |
| SMA Male to N Female Bulkhead | $6.00 | [Amazon](https://www.amazon.com/dp/B00COX9MTG) |

**Base Total: $151.95**

#### Additional Components for Cavity Filter (High-Level Sites Only)

| Component | Price | Link |
|-----------|-------|------|
| SMA Male to SMA Male Pigtail | $2.00 | TBA |
| Cavity Filter | $80.00 | TBA |

**Filtered Build Total: $233.95** (Base + Cavity Filter components)

---

## Alternative Component Options

### Enclosures
- **Nebra Enclosure**: [$32.06 - AliExpress](https://www.aliexpress.us/item/3256808320636390.html) (missing plugs)
- **NEMA Steel Enclosure**: [$29.99 - Amazon](https://www.amazon.com/VEVOR-Electrical-Weatherproof-Wall-Mounted-Electronic/dp/B09247JJQP?th=1) (unproved for weather resistance, will need a custom mounting solution)
- **NEMA ABS Enclosure**: [$21.99 - Amazon](https://www.amazon.com/Gratury-Stainless-Waterproof-Electrical-290%C3%97190%C3%97140mm/dp/B08281V2RL?th=1) (plastic)

### Antennas
- **Gizont 45cm**: [$26.95 - AliExpress](https://www.aliexpress.us/item/3256806241790045.html) - Recommended
- **ALFA AOA-915-5ACM 5dBi**: [$17.97 - Rokland](https://store.rokland.com/products/alfa-aoa-915-5acm-5-dbi-omni-outdoor-915mhz-802-11ah-mini-antenna-for-lora-halow-application)

### Lightning Protection
- **Proxicast Coaxial Lightning Arrester**: [$19.95 - Amazon](https://www.amazon.com/dp/B0CDDYFB2K?th=1)

### Pigtails
- **IPEX/u.fl to N Type Female**: [$6.00 - Amazon](https://www.amazon.com/dp/B0DPMD3226)
- **SMA Male to N Female Bulkhead**: [$6.00 - Amazon](https://www.amazon.com/dp/B00COX9MTG)

---

## Assembly Notes

1. **POE Power**: Use the appropriate POE adapter for the Zero 2W or integrated POE Hat for the 4B
2. **Cavity Filters**: Strongly encouraged for all high-level repeater sites to make it easier to hear quieter nodes.
3. **Weatherproofing**: Ensure all cable entries are properly sealed, using something like [Permatex](https://www.amazon.com/Permatex-25228-Gasket-Maker/dp/B07R4C3KJB) 
4. **Grounding**: Proper grounding is essential for lightning protection
5. **SD Card**: Use high-endurance cards rated for continuous operation

## Additional Resources

- [Nebra Miner Guide](nebra-miner.md)
- [Lightning Protection Guide](zeusprotection.md)

---
