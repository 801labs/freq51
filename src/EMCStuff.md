# Cavity Filters & Lightning Protection

A 915 MHz cavity filter provides some surge protection against **indirect strikes, static accumulation, and Lightning Electromagnetic Pulses (LEMP)**. Don is one of the resident RF Engineers in our community and has given us more information regarding filtering and lightning protection. We have summarized it below.

---

### 1. What does lightning look like in RF?

Lightning is not a single, clean RF frequency spike. It is a chaotic, massive pulse of electrical current (often 20,000 to 100,000+ Amps) with an extremely fast rise time.

From an RF standpoint, that transient pulse decomposes into a broad frequency spectrum:

* **The Bulk Energy:** Over 90% of a lightning stroke's energy sits between **DC and 100 kHz**, with harmonics rolling off through 1 MHz to 10 MHz.
* **The Radio Band:** Above 30 MHz, lightning spectral power drops off sharply. By the time you reach **915 MHz**, the natural spectral power of the lightning pulse is minuscule compared to the sub-megahertz frequencies.

This might sound harmless; however, if an antenna picks up an indirect strike, it acts like an unintended wideband receiver. It pulls in a massive, low-frequency voltage spike and shunts it straight down the coaxial cable toward your radio.

---

### 2. Do Cavity Filters Pass DC?

**Standard RF cavity bandpass filters do not pass DC.**

Unlike a straight piece of coax or a PCB microstrip, a cavity filter has **no continuous center wire** connecting the input port to the output port. Inside, it is made of hollow, silver- or copper-plated metal chambers containing resonant metal rods. Energy only transfers from the input to the output through coupled electromagnetic fields (resonance), behaving like acoustic tuning forks resonating across an air gap.

Depending on the internal construction, the input connector interacts with the cavity in one of two ways:

1. **Loop-Coupled (Inductive):** The center pin connects directly to the inside wall of the grounded metal chassis via a small metal loop. To direct current (DC) and low-frequency pulses, this looks like a **hard short-circuit to ground**.
2. **Probe-Coupled (Capacitive):** The center pin ends in a small rod suspended in the air inside the cavity. To DC and low frequencies, this looks like an **open circuit or air gap (isolation)**.

Unless your filter specifically features an internal DC-bias bypass circuit (usually used for powering tower-mounted amplifiers), **a 915 MHz cavity filter completely blocks DC current**.

---

### 3. Why the Cavity Filter Protects the Radio Front-End

When lightning strikes nearby, a cavity filter protects sensitive chips such as the Semtech SX1262 transceiver or power amplifier inside an Ebyte E22 module in three ways:

* **1:** A well-tuned 915 MHz cavity filter exhibits steep skirts. At 1 MHz to 10 MHz (where lightning energy is concentrated), the filter typically provides **60 dB to 90+ dB of rejection**. A 60 dB drop reduces voltage by a factor of 1,000 and power by a factor of 1,000,000. That Zeus sledgehammer of low-frequency induced energy gets reflected or dissipated before reaching the transceiver.
* **2:** On a tiny radio PCB, surface-mount parts have physical gaps measured in fractions of a millimeter. A 100V static pop can arc right across an SMD capacitor and burn out an internal trace. In a machined cavity filter, the internal components are thick metal rods separated by several millimeters of open air. It takes thousands of volts to bridge that gap.
* **3:** Antennas exposed to wind, dry air, or passing thunderheads accumulate high electrostatic charges. If the filter is inductively coupled (or chassis-grounded), that static bleeds continuously off the antenna feed and straight to ground.

---

### 4. If the Filter + Lightning Arrestor Combo Is So Good, Why Did the Radio Still Blow Up?

So, other components can fail even when a filter and lightning arrestor are inline. If a radio behind a cavity filter fries during a storm, the failure almost always traces back to three potential routes:

#### A. Near-Field Magnetic Induction ($dB/dt$)

A nearby lightning strike creates a localized strong magnetic field. As that magnetic field collapses through space at millions of Amperes per microsecond, any loop of copper wire on your board acts like the secondary winding of a transformer:

* If your radio node sits in a plastic outdoor enclosure, that magnetic pulse punches right through the plastic.
* It induces device-killing voltages directly onto PCB traces, unshielded inductors, capacitor legs, and I/O lines. This bypasses the coax cable and cavity filter.

#### B. Ground Potential Rise (GPR)

Hah, this one is fun. If the chassis of your cavity filter is not bonded to a solid ground, the surge coming down the coax shield will elevate the entire local reference plane by thousands of volts. The energy will hunt for another path to earth, often jumping through the radio's ground plane, tracking down the DC power supply wires, and frying the voltage regulators or battery management system (BMS).

#### C. Direct Hits

A direct strike carries enough heat, ionized plasma, and current to jump wide physical gaps and melt solid aluminum. No RF filter, surge protector, or device will survive a direct, unmitigated hit. If it does, that was sheer dumb luck.

---

Refer to our lightning mitigation and filtering guides for our recommended hardware for each component you may need.
