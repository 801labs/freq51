# Nebra Miner → Meshtastic Build Guide (DietPi + meshtasticd)

## Why repurpose a Nebra?

- **Great enclosure & RF path**: sturdy case, antenna feedthrough, easy to mount. Many miners are cheap on the used market.
- **Linux-native reliability**: running Meshtastic on a Pi with `meshtasticd` is rock-solid for infrastructure nodes (MQTT uplink, remote admin, logging).
- **1 W class radio option**: with the community **NebraHat (SX1262)** from @wehooper4, you get a clean SPI radio layout and a drop-in hardware preset.

> ⚠️ **Legal & etiquette**  
> Stay in your country’s ISM band (US915 in Utah), avoid Ham Mode unless licensed (encryption is not allowed on ham), and keep the mesh healthy (see our Configuration page for role guidance).

---

## What to buy

**Minimum parts**
- Nebra Indoor (or Outdoor) Hotspot enclosure (used market is fine). Specs vary; indoor box is ~150×150×50 mm and has a panel antenna connector.
- Raspberry Pi (3B+ or 4B recommended), 16–32 GB microSD, 5 V/3 A PSU.
- **NebraHat (SX1262, 1 W)** by @wehooper4 (community board). See pin map/preset below.
- Short RF pigtail/adapters as needed (SMA ↔ N/RP-SMA depending on your enclosure panel connector).
- 915 MHz antenna; for infrastructure, a modest 3–5 dBi omni is a good start.

**Nice-to-have**
- 915 MHz **bandpass filter** for infrastructure nodes (reduces out-of-band junk).
- BME680 sensor for weather telemetry inside the enclosure.
- Heatsinks or small fan if the enclosure runs warm in summer.

> ⚠️ **Heads-up on other HATs**  
> Only **SPI radios** are supported. Some popular UART or concentrator HATs won’t work. The Waveshare SX1262 HAT is not recommended for deployment (hardware limits with long frames)—use the NebraHat or a known-good SPI SX1262 design.

---

## Quick start (DietPi + meshtasticd)

> We’ll use DietPi (Debian 12 base) and the official Meshtastic Debian repo for `meshtasticd`.

1) **Flash DietPi**  
   Grab the DietPi image and flash it to your microSD. First boot, set your basics (hostname, SSH, etc.).

2) **Enable hardware interfaces**  
   - `dietpi-config` → **Enable SPI** and **I2C**. Reboot.

3) **Install dependencies & meshtasticd**
   ```bash
   sudo apt update
   sudo apt install -y libgpiod-dev libyaml-cpp-dev libbluetooth-dev openssl libssl-dev libulfius-dev liborcania-dev
   curl -fsSL https://download.opensuse.org/repositories/network:Meshtastic:beta/Debian_12/Release.key \
     | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/network_Meshtastic_beta.gpg
   echo 'deb http://download.opensuse.org/repositories/network:/Meshtastic:/beta/Debian_12/ /' \
     | sudo tee /etc/apt/sources.list.d/network:Meshtastic:beta.list
   sudo apt update && sudo apt install -y meshtasticd
   ```

4) **Add the NebraHat radio preset**  
   ```bash
   cd /etc/meshtasticd/config.d/
   sudo wget https://raw.githubusercontent.com/wehooper4/Meshtastic-Hardware/refs/heads/main/NebraHat/NebraHat_1W.yaml
   ```
   Preset sets SX1262 pins for the NebraHat:
   ```
   Module: sx1262
   DIO2_AS_RF_SWITCH: true
   DIO3_TCXO_VOLTAGE: true
   # CS: 8           # (uncomment if needed)
   IRQ: 22
   Busy: 4
   Reset: 18
   RXen: 25
   ```

5) **Edit core config**  
   ```bash
   sudo nano /etc/meshtasticd/config.yaml
   ```
   Suggested minimum edits:
   ```yaml
   General:
     MACAddressSource: eth0   # or wlan0, or use a fixed MACAddress
     ConfigDirectory: /etc/meshtasticd/config.d/

   WebServer:
     Port: 9443
     RootPath: /var/lib/meshtasticd/web
   ```

6) **First boot of the service**
   ```bash
   sudo systemctl enable meshtasticd
   sudo systemctl start meshtasticd
   sudo journalctl -u meshtasticd -f
   ```

7) **Optional: Python & CLI tools**
   ```bash
   sudo apt install -y python3-pip
   pip3 install --upgrade pytap2 "meshtastic[cli]"
   ```
   Verify:
   ```bash
   meshtastic --host 127.0.0.1 --info
   ```

8) **Use the Web UI**
   - Visit `https://<pi-ip>:9443/` (accept the self-signed cert).
   - Set **Region = US**, **Short/Long Name**, and your **Primary Channel** (LongFast).

---

## Role & channel recommendations (local norms)

- **Most users**: `CLIENT` or `CLIENT_MUTE`.  
- **Infra**: `ROUTER_LATE` unless coordinated otherwise; **always** add an RF filter on infrastructure nodes.  
- Primary: **LongFast**; Secondary: **Freq51** (request details).

---

## Fitting it in the Nebra enclosure

1) Remove the old miner guts (keep the panel connector and gasket).  
2) Mount the Pi on standoffs; seat the **NebraHat** on the 40-pin header.  
3) Route a short **SMA pigtail** from the hat to the enclosure’s bulkhead connector.  
4) Add a small **bandpass filter** inline for infrastructure builds.  
5) Manage heat if the box sits in full sun.

---

## Troubleshooting

- **Radio not detected / -707 init errors**  
  - Confirm SPI enabled; check `/dev/spidev0.*`.  
  - Verify the preset pinout (IRQ/Busy/Reset/RXen/CS).  
  - Toggle `DIO3_TCXO_VOLTAGE` if init errors persist.
- **Duplicate MAC complaints**  
  - Set `MACAddressSource: eth0` (or pick a fixed `MACAddress:`).
- **Web UI issues**  
  - Ensure `WebServer.Port` & `RootPath` set.
- **Waveshare HAT oddities**  
  - Not recommended; if used, keep node `CLIENT_MUTE`.

---

## Verifying on the mesh

- From another node, send a direct message to your Pi node.  
- In the CLI: `meshtastic --host <pi-ip> --info` and `meshtastic --host <pi-ip> --nodedb` to see neighbors.
- On maps/MQTT (if you opt in), confirm you appear and avoid downlink floods.

---

## Appendix: NebraHat preset (reference)

```yaml
# Nebra SX1262 Pi Hat - 1W
Module: sx1262
DIO2_AS_RF_SWITCH: true
DIO3_TCXO_VOLTAGE: true
# CS: 8
IRQ: 22
Busy: 4
Reset: 18
RXen: 25
```

---

## Credits & further reading

- meshtasticd install (Debian 12 + Raspbian 12) and repo keys  
- Config precedence & `config.d` presets  
- Enabling the web UI in config.yaml  
- NebraHat preset (1 W SX1262)  

