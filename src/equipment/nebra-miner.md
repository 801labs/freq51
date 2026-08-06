# Nebra Miner (DietPi + meshtasticd)

## Why repurpose a Nebra?

- **Great enclosure & RF path**: sturdy case, antenna feedthrough, easy to mount. Many miners are cheap on the used market.
- **Linux-native reliability**: running Meshtastic on a Pi with `meshtasticd` is rock-solid for infrastructure nodes (MQTT uplink, remote admin, logging).
- **1 W class radio option**: with the community [**NebraHat (SX1262)**](https://github.com/wehooper4/Meshtastic-Hardware/tree/main/NebraHat) from @wehooper4, you get a clean SPI radio layout and a drop-in hardware preset.

---

## What to buy

**Minimum parts**
- Nebra Outdoor Hotspot enclosure from Ebay. Don't spend more than $50. The nebra comes with:
   - Raspberry Pi CM3
   - 32 GB Emmc
   - Built-in POE
   - Wifi Card & Antenna
   - 915Mhz Antenna
   - Waterproof Aluminum Enclosure
- **NebraHat (SX1262, 1 W)** by @wehooper4 (community board). You have to build this yourself or buy from a group buy.
   - Right now @bashNinja has about 10 left from a previous group buy. 

**Nice-to-have**
- [AHT20 sensor](https://www.amazon.com/dp/B09KGY5NPG) for weather telemetry inside the enclosure.
- A better antenna, such as the a [5dBi Alfa](https://store.rokland.com/products/alfa-aoa-915-5acm-5-dbi-omni-outdoor-915mhz-802-11ah-mini-antenna-for-lora-halow-application) from Rokland.
- A sealant for the enclosure such as [Lexel](https://www.amazon.com/dp/B000BQPFAS) or [Permatex](https://www.amazon.com/dp/B07R4C3KJB)

> ⚠️ **Heads-up on other HATs**  
> The pinout on the nebra is different than the standard Raspberry Pi pinout. This makes most hats incompatible unless you fix the pinout.

---

## Quick start (DietPi + meshtasticd)

> We’ll use DietPi (Debian 12 base / Debian 13 base) and the official Meshtastic Debian repo for `meshtasticd`.

1) **Flash DietPi**  
   Grab the [DietPi image and flash it](https://dietpi.com/docs/install/) to your microSD. First boot, set your basics (hostname, SSH, etc.).

2) **Enable hardware interfaces**  
   - `dietpi-config` → **Enable SPI** and **I2C**. Reboot.

3) **Install dependencies & meshtasticd**

   *** Debain 12 - Bookworm ***
   ```bash
   sudo apt update
   sudo apt install -y libgpiod-dev libyaml-cpp-dev libbluetooth-dev openssl libssl-dev libulfius-dev liborcania-dev
   curl -fsSL https://download.opensuse.org/repositories/network:Meshtastic:beta/Debian_12/Release.key \
     | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/network_Meshtastic_beta.gpg
   echo 'deb http://download.opensuse.org/repositories/network:/Meshtastic:/beta/Debian_12/ /' \
     | sudo tee /etc/apt/sources.list.d/network:Meshtastic:beta.list
   sudo apt update && sudo apt install -y meshtasticd
   ```

   *** Debian 13 - Trixie ***   
   ```bash
   sudo apt update
   sudo apt install -y libgpiod-dev libyaml-cpp-dev libbluetooth-dev openssl libssl-dev libulfius-dev liborcania-dev
   curl -fsSL https://download.opensuse.org/repositories/network:Meshtastic:beta/Debian_13/Release.key \
     | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/network_Meshtastic_beta.gpg
   echo 'deb http://download.opensuse.org/repositories/network:/Meshtastic:/beta/Debian_13/ /' \
     | sudo tee /etc/apt/sources.list.d/network:Meshtastic:beta.list
   sudo apt update && sudo apt install -y meshtasticd
   ```

4) **Add the Nebra-Hat/Zebra-Hat radio preset**  
   *** 1W NebraHat ***
   ```bash
   cd /etc/meshtasticd/config.d/
   sudo wget https://raw.githubusercontent.com/wehooper4/Meshtastic-Hardware/refs/heads/main/NebraHat/NebraHat_1W.yaml
   ```
   *** 2W Nebra-Hat ***
    ```bash
   cd /etc/meshtasticd/config.d/
   sudo wget https://raw.githubusercontent.com/wehooper4/Meshtastic-Hardware/refs/heads/main/NebraHat/NebraHat_2W.yaml
   ```
      *** 1W Zebra-Hat ***
    ```bash
   cd /etc/meshtasticd/config.d/
   sudo wget https://github.com/wehooper4/Meshtastic-Hardware/raw/refs/heads/main/ZebraHAT/ZebraHat.yaml
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
   
   WebServer:
     Port: 9443
   ```

6) **First boot of the service**
   ```bash
   sudo systemctl enable meshtasticd
   sudo systemctl start meshtasticd
   sudo journalctl -u meshtasticd -f
   ```

7) **Optional: Python & CLI tools**
   ```bash
   sudo apt install -y python3-pip pipx
   pipx install "meshtastic[cli]"
   pipx ensurepath
   pipx install contact
   pipx ensurepath
   ```
   Verify:
   ```bash
   meshtastic --host 127.0.0.1 --info
   ```

8) **Use the Web UI**
   - Visit `https://<pi-ip>:9443/` (accept the self-signed cert).
   - Set **Region = US**, **Short/Long Name**, and your **Primary Channel** (Leave this blank).

---

## Role & channel recommendations (local norms)

- **Most users**: These are usually static and outside so choose: `CLIENT`.  
- **Infra**: **Always** add an RF filter on infrastructure nodes; **always** talk with the rest of the Freq51 community before setting a `ROUTER`.  
- Primary: **Leave The name Empty**; Secondary: N/A

---

## Fitting it in the Nebra enclosure

1) Remove the old lora module.  
2) Remove the USB board on the 40-pin header; seat the **NebraHat** on the 40-pin header.  
3) Route the short **SMA pigtail** from the hat to the enclosure’s bulkhead connector.  
4) Add a small **bandpass filter** inline for infrastructure builds.  

---

## Troubleshooting

- **Radio not detected / -707 init errors**  
  - Confirm SPI enabled; check `/dev/spidev0.*`.  
  - Verify the preset pinout (IRQ/Busy/Reset/RXen/CS).  
- **Duplicate MAC complaints**  
  - Set `MACAddressSource: eth0` (or pick a fixed `MACAddress:`).
- **Web UI issues**  
  - Ensure `WebServer.Port` is set.

---

## Verifying on the mesh

- From another node, send a direct message to your Pi node.  
- In the CLI: `meshtastic --host 127.0.0.1 --info` and `meshtastic --host 127.0.0.1 --nodedb` to see neighbors.
- On maps/MQTT (if you opt in), confirm you appear and avoid turning on downlink.

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
