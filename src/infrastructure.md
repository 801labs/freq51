# Freq51 Infrastructure

This page lists deployed routers, router lates, and strategically placed clients. Each entry has a spec table followed by a **Site survey** with associated images. North views are shown first when both are available.

---

## Routers

### FPR — Francis Peak Router
**Location:** Francis Peak (Tertiary Peak)

| Node Name              | Radio                            | Antenna        | Battery                           | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware |
|------------------------|----------------------------------|----------------|-----------------------------------|-------|--------------|------|------------------|----------|
| FPR – Francis Peak Rtr | Heltec T114V2 + Airbuddy AMP 1 W | Alfa 5 dBi Omni| 1S12P EVE ICR18650 (30.6 Ah)      | 5 W   | LONG_FAST    | 51   | ALL              | 2.6.11   |

Possesses a BME680 for weather & air-quality telemetry every 1800 s.

#### Site survey
**North**  
![FPR North](images/FPR-North.png)

**South**  
![FPR South](images/FPR-South.png)

---

### LMR — Lake Mountain Router
**Location:** Lake Mountain Radio Tower

| Node Name               | Radio (modules + enclosure)                                          | Antenna | Battery    | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware             |
|--------------------------|---------------------------------------------------------------------|---------|------------|-------|--------------|------|------------------|----------------------|
| LAKE – Lake Mountain Rtr | RPi CM3 · Ebyte E22-900M30S · Taoglas filter · Nebra Miner Enclosure| 3 dBi   | Hard-wired | N/A   | LONG_FAST    | 51   | ALL              | Latest Alpha (auto)  |

#### Site survey
**North/South**  
![LMR North-South](images/LMR.png)

---

### NPR — Nelson Peak Router
**Location:** Nelson Peak

| Node Name              | Radio                 | Antenna | Battery     | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware |
|------------------------|-----------------------|---------|-------------|-------|--------------|------|------------------|----------|
| NPR – Nelson Peak Rtr  | RAK19003 + RAK4631    | 4 dBi   | 2 × 18650   | 6 W   | LONG_FAST    | 51   | ALL              | 2.3.2    |

#### Site survey
**North**  
![NPR North](images/NPR-North.png)

**South**  
![NPR South](images/NPR-South.png)

---

## Router Lates

### AUR — Aurora Uranialis
**Location:** Ensign Peak

| Node Name             | Radio                          | Antenna        | Battery                        | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware |
|-----------------------|--------------------------------|----------------|--------------------------------|-------|--------------|------|------------------|----------|
| AUR – Aurora Uranialis| RAK4631 + GPIO Labs ISM filter | Alfa 5 dBi Omni| 1S4P 21700 Molicel P50B (20 Ah)| 10 W  | LONG_FAST    | 51   | ALL              | 2.6.4    |

Includes BME680 telemetry every 1800 s.

#### Site survey
**North**  
![AUR North](images/AUR-North.png)

**South**  
![AUR South](images/AUR-South.png)

---

### C6C — Aurora Ceresia
**Location:** Hill AFB – Weber State overlook

| Node Name              | Radio                          | Antenna        | Battery                        | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware |
|------------------------|--------------------------------|----------------|--------------------------------|-------|--------------|------|------------------|----------|
| C6C – Aurora Ceresia   | RAK4631 + GPIO Labs ISM filter | Alfa 5 dBi Omni| 1S4P 21700 Molicel P50B (20 Ah)| 10 W  | LONG_FAST    | 51   | ALL              | 2.6.4    |

#### Site survey
![C6C](images/C6C.png)

---

### POTM — Point of the Mountain
**Location:** North-facing ridgeline

| Node Name              | Radio              | Antenna | Battery   | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware |
|------------------------|-------------------|---------|-----------|-------|--------------|------|------------------|----------|
| POTM – Router Late     | RAK19003 + RAK4631| 4 dBi   | 2 × 18650 | 6 W   | LONG_FAST    | 51   | ALL              | 2.6.10   |

#### Site survey
**North**  
![POTM North](images/POTM-North.png)

**South**  
![POTM South](images/POTM-South.png)

---

## Strategically Placed Clients

### WC1 — Wasatch Crest 1
**Location:** Desolation Peak

| Node Name            | Radio   | Antenna        | Battery                    | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware |
|-----------------------|---------|----------------|----------------------------|-------|--------------|------|------------------|----------|
| WC1 – Wasatch Crest 1 | RAK4631 | Starf 7 dBi 320mm | 2× Molicel 21700 P42A 8.4Ah| 3 W   | LONG_FAST    | 51   | ALL              | 2.6.10    |

---

### WC2 — Wasatch Crest 2

| Node Name            | Radio      | Antenna           | Battery                      | Solar | Modem Preset | Slot | Rebroadcast Mode | Firmware |
|-----------------------|------------|-------------------|------------------------------|-------|--------------|------|------------------|----------|
| WC2 – Wasatch Crest 2 | XIAO NRF52 | Gizont 7dBi 450mm | 2× Molicel 21700 P45B  (9 Ah) | 6 W   | LONG_FAST    | 51   | ALL              | 2.6.11   |
