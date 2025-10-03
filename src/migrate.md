# Migrating Your Node from LONG_FAST ("LongFast") to MEDIUM_FAST ("MediumFast")

This guide will walk you through updating your Meshtastic node's modem preset from **LONG_FAST** (often called "LongFast") to **MEDIUM_FAST** ("MediumFast") on both iOS and Android. These steps ensure a smooth transition and prevent channel name conflicts.

---

## Why Migrate?

- **Network Update:** The community is moving to MEDIUM_FAST for improved balance between range and speed.
- **Compatibility:** Ensures your node stays in sync with the rest of the mesh.

---

## iOS Instructions

### 1. Clear the Primary Channel Name

- Go to **Settings**.
- Then select **Channels**.
- Tap your **Primary Channel** (Channel ID: 0, typically the name is blank, unless you have changed it in the past, then it would be "LongFast").
- Delete the **Channel Name** so it is entirely blank.
- Save and confirm the change.

> _This step helps future migrations by letting Meshtastic auto-pick the channel name according to the preset._

![iOS: Clear primary channel name](images/ios-step1.png)

---

### 2. Change the Modem Preset

- Go to **Settings**.
- Find **LoRa**.
- Find presets and select **Medium Fast** (sometimes shown as **MEDIUM_FAST** or **MediumFast**).
- Save your changes.

![iOS: Change modem preset to MediumFast](images/ios-step2.png)

---

### 3. Reset Your Node Database (nodedb)

- In **Settings**, go to **Device**.
- Locate **Reset NodeDB**, and click it.
- Your node will restart and rebuild its database for the new modem preset.

![iOS: Reset node database](images/ios-step3.png)

---

## Android Instructions

### 1. Clear the Primary Channel Name

- Go to **Settings**.
- Then go to **Channels**.
- Tap your **Primary Channel** (Channel ID: 0, typically the name is blank, unless you have changed it in the past, then it would be "LongFast").
- Delete the **Channel Name** so it is entirely blank (the character count should show 0/11, meaning it is now blank).
- Save and confirm the change.

![Android: Clear primary channel name](images/android-step1.png)

---

### 2. Change the Modem Preset

- Go to **Settings**.
- Go to **LoRa**.
- Find presets and select **Medium Fast** (may be listed as **MEDIUM_FAST** or **MediumFast**).
- Save your changes.

![Android: Change modem preset to MediumFast](images/android-step2.png)

---

### 3. Reset Your Node Database (nodedb)

- In **Settings**, under Administration find and select **NodeDB Reset**.
- Your node will reboot and rebuild its network database.

![Android: Reset node database](images/android-step3.png)

---

## Troubleshooting

- If your node does not appear on the mesh after migration, double-check that the preset is **MediumFast** and that the primary channel name is blankm or shows MediumFast.
- Reboot your node if changes do not appear to take effect.

---

## Need Help?

If you get stuck, please reach out in the community Discord.