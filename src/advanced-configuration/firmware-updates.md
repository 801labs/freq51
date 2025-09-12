# 📻 Meshtastic Firmware Update Guide

This guide provides instructions for updating firmware on various Meshtastic-compatible devices.

---

## 📑 Table of Contents
- [Prerequisites](#-prerequisites)
- [Using the Web Flasher](#-using-the-web-flasher)
- [Updating RAK19007/19003 Nodes](#-updating-rak1900719003-nodes)
- [Updating Heltec Nodes](#-updating-heltec-nodes)
- [Updating Seedstudio T1000E](#-updating-seedstudio-t1000e)
- [Over-the-Air (OTA) Updates for RAK Nodes](#-over-the-air-ota-updates-for-rak-nodes) (**Advanced Users Only**)

---

## 📋 Prerequisites

Before beginning any firmware update, ensure you have:

- 🔌 A USB data cable (not just a charging cable)
- 🌐 For web flasher: A compatible browser (Chrome or Edge recommended)
- 💻 For CLI updates: The latest version of the [Meshtastic CLI](https://meshtastic.org/docs/software/cli/installation) installed
- 📥 The appropriate firmware file for your device from the [Meshtastic releases page](https://github.com/meshtastic/firmware/releases)
- 🐍 For wired updates with CLI: [Python 3.x](https://www.python.org/downloads/) and [esptool](https://github.com/espressif/esptool)
- 📱 For OTA updates: An Android device with Bluetooth capabilities

---

## 🌐 Using the Web Flasher

The easiest way to update firmware on most Meshtastic devices is using the browser-based flasher tool:

1. 🔌 Connect your device to your computer using a USB cable
2. 🖥️ Visit [flasher.meshtastic.org](https://flasher.meshtastic.org) in a WebUSB compatible browser (Chrome or Edge recommended)
3. 📋 Select your device type from the dropdown menu:
   - 🔍 **Auto-detect option**: The web flasher can automatically detect many common device types - look for "Auto" or "Auto-detect" at the top of the device selection dropdown
   - If auto-detection doesn't work, manually select your specific device model
4. 🔄 Choose the firmware version you want to install:
   - ✅ Select "Release" for stable firmware
   - 🧪 Select "Alpha" for testing new features (may be unstable)
   - 🎛️ Select "Custom" if you have a specific firmware file to upload
5. 🔗 Click "Connect" and select your device from the popup dialog:
   - On Windows: You'll see your device listed with a COM port (e.g., "USB Serial Device (COM3)")
   - On macOS: You'll see your device with a /dev identifier (e.g., "usbmodem1101")
   - On Linux: You'll see your device with a /dev/ttyUSB or /dev/ttyACM identifier
   - Select the appropriate device from this list
6. ⚡ Click "Flash" to begin the update process:
   - The screen will show detailed progress information
   - 🔄 **DFU Mode Prompt**: Some devices may need to enter Device Firmware Update (DFU) mode during flashing
   - If prompted to enter DFU mode, follow the on-screen instructions which typically involve:
     - Pressing and holding specific button combinations on your device
     - For most ESP32 devices: Hold the BOOT button while pressing and releasing RESET
     - The web flasher will display specific instructions for your device model
   - Once in DFU mode, the flashing process will continue automatically
7. ⏳ Wait for the process to complete - you'll see a progress bar and log messages
8. 🎉 Once finished, your device will automatically reboot with the new firmware

> **Note**: The web flasher requires a browser that supports WebUSB, which is currently only Chrome, Edge, and other Chromium-based browsers. Firefox and Safari are not supported.

**✨ Advantages of the Web Flasher**:
- 📥 No software installation required
- 🔍 Auto-detection of device types
- 🙂 User-friendly interface
- 💻 Works on Windows, macOS, Linux, and ChromeOS
- 🤖 Automatically handles bootloader mode for many devices
- 📱 Interactive guidance for entering DFU mode when needed

** [Video:](https://www.youtube.com/watch?v=Euw9ppwkbxQ) ** 

---

## 📡 Updating RAK19007/19003 Nodes

The RAK19007 and RAK19003 can be updated using the following method:

1. 🔌 Connect your RAK device to your computer using a USB cable
2. 🔍 Identify the correct serial port:
   - Windows: Check Device Manager under Ports (COM & LPT)
   - macOS: Run `ls /dev/cu.*` in Terminal
   - Linux: Run `ls /dev/ttyUSB*` in Terminal

3. 🔄 Put the device in bootloader mode:
   - Press and hold the BOOT button
   - Press and release the RESET button
   - Release the BOOT button

4. ⚡ Flash the firmware using Meshtastic CLI:
```
meshtastic --device [PORT] --flash [PATH_TO_FIRMWARE]
```

Replace `[PORT]` with your device's serial port (e.g., COM3 on Windows or /dev/ttyUSB0 on Linux) and `[PATH_TO_FIRMWARE]` with the path to your downloaded firmware file.

Alternatively, you can use esptool directly:
```
esptool.py --port [PORT] --baud 921600 write_flash 0x10000 [PATH_TO_FIRMWARE]
```

5. 🔄 After flashing is complete, press the RESET button to restart the device with the new firmware.

> **Note**: The Web Flasher method described earlier is often easier and recommended for most users updating RAK devices.

---

## 📟 Updating Heltec Nodes

Heltec devices (like the Heltec WiFi LoRa 32 V2) can be updated with these steps:

1. 🔌 Connect your Heltec device to your computer via USB
2. 🔍 Identify the serial port as described in the RAK section above
3. 🔄 Put the device in bootloader mode:
   - Press and hold both the PROG and RESET buttons
   - Release the RESET button
   - Release the PROG button

4. ⚡ Flash the firmware using Meshtastic CLI:
```
meshtastic --device [PORT] --flash [PATH_TO_FIRMWARE]
```

Alternatively, use esptool:
```
esptool.py --chip esp32 --port [PORT] --baud 921600 write_flash 0x10000 [PATH_TO_FIRMWARE]
```

5. 🔄 Press the RESET button after flashing completes.

---

## 🛰️ Updating Seedstudio T1000E

The Seedstudio T1000E follows a similar update process:

1. 🔌 Connect the T1000E to your computer via USB
2. 🔍 Identify the serial port
3. 🔄 Enter bootloader mode (consult your device documentation for the exact button combination)
4. ⚡ Flash the firmware using the Meshtastic CLI:
```
meshtastic --device [PORT] --flash [PATH_TO_FIRMWARE]
```

5. 🔄 After flashing completes, reset the device.


For more detailed instructions, visit the [Get Started with T1000-E Tracker](https://wiki.seeedstudio.com/sensecap_t1000_e/#flash-the-application-firmware)

---

## 📱 Over-the-Air (OTA) Updates for RAK Nodes

> ⚠️ **ADVANCED USERS ONLY**: This procedure requires technical knowledge and carries risks including potential device bricking if interrupted. Beginners should use the Web Flasher method.

RAK devices with the RAK4631 chipset (nRF52840-based) can be updated over Bluetooth using an Android device. This method is perfect for nodes installed in hard-to-reach locations where physical access is difficult.

### 📲 Using the nRF Device Firmware Update App

1. **📥 Install the Required App**:
   - Install the [nRF Device Firmware Update app](https://play.google.com/store/apps/details?id=no.nordicsemi.android.dfu) from the Google Play Store

2. **📥 Obtain the Correct Firmware**:
   - Visit the [Meshtastic Github Repository](https://github.com/meshtastic/firmware/releases)
   - For the latest beta: Select the "Meshtastic Firmware..." link at the top
   - For older versions: Select the "releases" link below that
   - Download the "firmware-nrf52840-(version).zip" file to your computer
   - Unzip the file and locate the "firmware-rak4631-(version)-ota.zip" file
   - Transfer this file to your Android phone

3. **⚙️ Configure nRF DFU App Settings**:
   - Open the nRF DFU app
   - Go to Settings (gear icon)
   - Configure the following settings (recommended by Meshtastic developers):
     ```
     Packets receipt notification: On
     Number of packets: 5
     Reboot time: 5000ms
     Scan timeout: 10000ms
     Request high MTU: Off
     Disable resume: Off
     Prepare object delay: 500ms
     Force scanning: Off
     Keep bond: On
     External MCU DFU: Off
     ```
   - These specific settings help ensure a successful update process

4. **🔄 Perform the OTA Update**:
   - Get within Bluetooth range of your RAK node (within 2-3 meters)
   - In the nRF DFU app, select the firmware file you transferred to your phone
   - The app will scan for available devices
   - Select your RAK node from the list of discovered devices
   - Click "Start" to begin the update process

5. **⏳ Update Process**:
   - Keep your Android device near the RAK node during the entire update
   - The process may take 5-10 minutes to complete
   - Do not close the app or let your phone screen turn off
   - The app will display progress information during the update
   - Once complete, the device will automatically reboot with the new firmware

### ⚠️ Important Notes for OTA Updates

- 🚨 This process is for advanced users who understand the risks involved
- 🔋 Ensure your RAK device has sufficient battery power (at least 50% recommended)
- 📶 Do not move the Android device away from the RAK node during the update
- ⚠️ Interrupting the update process may render your device unusable
- 📱 Keep your phone screen on during the entire update process
- 🔄 If the update fails, you may need to retry or fall back to the wired update method
- 🌐 This method only works with RAK devices that use the nRF52840 chipset (RAK4631-based nodes)
- 📡 The device may show as "Offline" in your mesh network during the update process

> **⚠️ Disclaimer**: Use OTA updates at your own risk. While this method has worked for many users, we cannot guarantee it will work in all situations. If your device is mission-critical or difficult to physically access should something go wrong, consider using the more reliable wired update methods described earlier in this guide.

### 🔍 Troubleshooting OTA Updates

- If the update fails to start, try restarting both the node and your phone
- Ensure no other apps are connected to your Meshtastic device during the update
- If you can't see your device in the scan list, make sure it's powered on and within range
- For persistent issues, verify you're using the correct firmware file specifically for OTA updates
- The OTA zip file must be the one specifically prepared for OTA updating, not the regular firmware file

For more detailed instructions, visit the [PV Mesh OTA Update Guide](https://pvmesh.org/howto/ota-update/)

---

## 🔧 Troubleshooting

### 🚨 Common Issues and Solutions

1. **🔎 Device Not Detected**:
   - Try a different USB cable
   - Try a different USB port
   - Install or update device drivers

2. **❌ Flashing Fails**:
   - Ensure the device is in bootloader mode
   - Try a lower baud rate (e.g., 115200 instead of 921600)
   - Make sure you're using the correct firmware for your device

3. **📱 OTA Update Fails**:
   - Ensure your Android device and RAK node are close to each other
   - Check that both devices have sufficient battery power
   - Try disconnecting and reconnecting before attempting again
   - Verify your OTA app settings match the recommended configuration
   - Try disabling battery optimization for the update app
   - For nRF DFU app: Make sure you're using the correct -ota.zip file

4. **🔄 Device Doesn't Boot After Update**:
   - Perform a factory reset by holding the appropriate buttons for your device
   - Re-flash using the wired method

5. **🌐 Web Flasher Issues**:
   - Make sure you're using Chrome or Edge browser
   - Try different USB ports or cables
   - If the device isn't recognized, manually put it in bootloader mode
   - If prompted to enter DFU mode but can't get it to work, try manually entering bootloader mode first, then reconnect
   - Clear browser cache and try again
   - If auto-detection fails, try selecting your device model manually

6. **🔄 DFU Mode Issues**:
   - If your device won't enter DFU mode, try different button combinations
   - Some devices require timing the button presses precisely
   - Try disconnecting and reconnecting the USB cable before attempting again
   - Check that you're using a data-capable USB cable, not just a power cable

---

## 📚 Additional Resources

- 📖 [Official Meshtastic Documentation](https://meshtastic.org/docs/)
- 💻 [Meshtastic GitHub Repository](https://github.com/meshtastic/firmware)
- 👥 [Meshtastic Community Forum](https://meshtastic.discourse.group/)
- 🌐 [Web Flasher Tool](https://flasher.meshtastic.org)

---

> 🔄 Last updated: 2025-09-11