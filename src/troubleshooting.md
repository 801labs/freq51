## Introduction
Running a Meshtastic mesh network can be very rewarding — but sometimes things don’t work as expected.
This guide covers solutions for the most common issues encountered when setting up or operating your mesh.

---

## Table of Contents
- [1. App Connection (Phone ↔ Node)](#1-app-connection-phone--node)
- [2. Not Getting Messages](#2-not-getting-messages)
- [3. Node List or Map Not Populating](#3-node-list-or-map-not-populating)
- [4. Trouble Sending Messages](#4-trouble-sending-messages)
- [5. Low-Entropy Key / Duplicate Key Warning](#5-low-entropy-key--duplicate-key-warning)
- [6. GPS / Location Not Updating](#6-gps--location-not-updating)
- [7. Firmware Update Problems](#7-firmware-update-problems)
- [8. Wi-Fi / Ethernet Bridge Issues](#8-wi-fi--ethernet-bridge-issues)
- [Final Checks & Best Practices](#final-checks--best-practices)

---

### 1. App Connection (Phone ↔ Node)
**Symptoms:**
- The Meshtastic app (Android or iOS) won’t connect via Bluetooth, Wi-Fi, or USB.
- The device connects, then drops quickly.

**Common Causes & Fixes:**
- ✅ Bluetooth off or stale pairing: Turn Bluetooth off/on, forget the node, then re-pair.
- ✅ Node in wrong mode: Disable Wi-Fi if it prevents Bluetooth connection.
- ✅ Firmware mismatch: Update firmware and app.
- ✅ Power or USB cable issue: Use a data-capable cable.
- ✅ Corrupted pairing data: Reboot devices after unpairing.

**Tips:**
- Connect via USB and CLI (`meshtastic --info`) for diagnostics.
- Check Android/iOS install docs for platform-specific troubleshooting.

---

### 2. Not Getting Messages
**Symptoms:** Messages don’t appear; “sent” shows no acknowledgment.

**Fixes:**
- Ensure nodes share same region, channel, and key.
- Verify antenna connection and placement.
  - Check for connectors for tightness. Replace ipex pigtail [Amazon](https://www.amazon.com/TUOLNK-Adapter-Pigtail-Coaxial-Extension/dp/B09329TYCS?th=1) 
- Move nodes closer to test connectivity.
- Check logs for LoRa errors or low RSSI/SNR.
- Restart app if cache issues suspected.

**Tips:** Place nodes outdoors with minimal obstructions; use “Range Test” mode.

---

### 3. Node List or Map Not Populating
**Symptoms:** Node list shows only your node; map empty.

**Fixes:**
- Enable “Position Broadcasting.”
- Confirm GPS (see section 6).
- Verify primary channel matches other nodes.
- Ensure MQTT/HTTP uplink configured for public maps.
- Verify antenna connection and placement.
  - Check for connectors for tightness. Replace ipex pigtail [Amazon](https://www.amazon.com/TUOLNK-Adapter-Pigtail-Coaxial-Extension/dp/B09329TYCS?th=1)

**Tips:** Wait a few minutes; inactive nodes expire on some firmware versions.

---

### 4. Trouble Sending Messages
**Symptoms:** Messages remain unsent or show “Error.”

**Fixes:**
- Verify destination node ID/alias.
- Ensure router nodes forward correctly.
- Match region and LoRa parameters.
- Test broadcast messages first.
- Reboot sender and receiver.
- Verify antenna connection and placement.
  - Check for connectors for tightness. Replace ipex pigtail [Amazon](https://www.amazon.com/TUOLNK-Adapter-Pigtail-Coaxial-Extension/dp/B09329TYCS?th=1)
  - 
**Tips:** Use CLI (`meshtastic --sendtext "test"`) for reliable testing.

---

### 5. Low-Entropy Key / Duplicate Key Warning
**Symptoms:** Warning about low-entropy key.

**Cause:** Weak or duplicate X25519 key pair from older firmware or cloned hardware.

**Fixes:**
- Update to firmware 2.6.11+.
- Generate new keys:
  - **Via app:** Node Settings → Security / Keys → Generate new key pair.
  - **Via CLI:**
    ```bash
    meshtastic --export-config > backup.json
    meshtastic --factory-reset-device
    ```
  - Re-pair and rejoin channel.

**Tips:** Broadcast post-key regeneration; avoid restoring pre-2.6.11 backups; use official firmware only.

---

### 6. GPS / Location Not Updating
**Symptoms:** No GPS fix; map shows (0,0).

**Fixes:**
- Place outdoors with clear sky.
- Ensure GPS antenna connected.
- Check power stability.
- Verify external GPS pin mapping.
- Reboot and wait for cold start fix.

**Tips:** CLI check: `meshtastic --info | grep GPS`; move node 10 ft after first lock.

---

### 7. Firmware Update Problems
**Symptoms:** Node won’t boot; app shows “Firmware mismatch.”

**Fixes:**
- Use official Meshtastic Flasher or `esptool.py`.
- Select correct board type.
- Hold BOOT button during USB plug-in if flash fails.
- Re-flash and verify firmware matches hardware.

**Tips:** Avoid restoring old configs onto new firmware; use `--erase` if corruption suspected.

---

### 8. Wi-Fi / Ethernet Bridge Issues
**Symptoms:** Node connects to Wi-Fi but can’t reach MQTT; messages don’t forward.

**Fixes:**
- Verify broker URL, username, and password.
- Ensure network allows outbound ports (1883/443).
- Reboot router/node after changes.
- Check logs for MQTT errors.
- Avoid loops with multiple bridges.

**Tips:** Use static IPs; test credentials with separate MQTT client first.

---

## Final Checks & Best Practices
- Keep firmware and apps updated.
- Use quality antennas and clear line-of-sight mounting.
- Verify region, channel, and key consistency.
- Backup configuration: `meshtastic --export-config`.
- Factory-reset after major updates or persistent bugs.
- Monitor network for warnings or unusual behavior.
- Verify antenna connection and placement.
  - Check for connectors for tightness. Replace ipex pigtail [Amazon](https://www.amazon.com/TUOLNK-Adapter-Pigtail-Coaxial-Extension/dp/B09329TYCS?th=1)

---

*Last updated: October 2025*
