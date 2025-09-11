# Our Equipment

This page will host **Freq51 Mesh builds** and their approximate coverage maps. Use them to align your setup if you’re inside coverage areas (red). Note that different nodes may run different software. Some builds will run the meshing around BBS system. These are select router nodes with high remote power requirements and recommended to be spaced within 5 hops of each other for consistent relaying. Other nodes are low power. We currently prefer NRF52 based infrastructure nodes for <1W TX power or femtofoxes and Nebra custom miner nodes for 1W TX power. All routers must feature a filter. Filtering is optional on non infrastructure nodes. 

## NRF52 Node Example

- ABS 7.9" x 3.9" x 2.8" enclosures are a great size/price/quality (or similar).  
	- [Amazon Link](https://www.amazon.com/YETLEBOX-Waterproof-Electrical-Stainless-Enclosure/dp/B0C2HHJFST/ref=sr_1_2?crid=LIJ31JNYUCR7&dib=eyJ2IjoiMSJ9._kDaTRA31iLXv6vlTYKuO0pDsUEugs_HmkCA9pwc2zCF1I3AbM6jD0Frvc3pX8w_zUm6j4_axv6Msme0NbR993vCp1VINFJWvP-oPFmYGehamnZD1OpIUKoTLM2XBqOSK7x4UQDFKbqyW_3B3qQqI30Blauy7rClXIgo7H43TU1VhH2aF_73U5jpkGTrPQJW3j5skapkpS4AKkddwD5hWThbv_j2ebEWOEUVQmSJjmxtVBHLjJYFBWev_qefW50QqtL9IST_O5Qhhfflm4NDAMu2MZks9yeN8c1tFC5Wa24.KKr8mtidIZCuSaaxAxVHZpBXWaA8Y_CbnJ33qeqnK7I&dib_tag=se&keywords=yetlebox%2Boutdoor%2Bwaterproof%2Belectrical%2Bbox%2Bjunction%2Bbox%2B5.9&qid=1755366655&sprefix=yetlebox%2Boutdoor%2Bwaterproof%2Belectrical%2Bbox%2Bjunction%2Bbox%2B5.9%2Caps%2C133&sr=8-2&th=1)
- **Butyl tape OR LEXEL** seals antenna passthroughs and is great for making outer seals as lexel sticks to itself (don’t block included gaskets).  
	- [Amazon Link](https://www.amazon.com/Sashco-13010-Lexel-Adhesive-Caulk/dp/B01LZA2H2L/ref=sr_1_3?crid=20FFDO5PL77RI&dib=eyJ2IjoiMSJ9.IWjtLSO7dP1B0wU7SI4mwrsc7vTHE5dLJlRZbQZ9qtnacgGXjQaUXMNUrRqRgNG_Ex4-VsrZgHSxhKzpk5ywoxMDBEhxgMMsm_xw3IOt5Y5WeOC2Umk8ntx8-dQAxckmkniEKQ9ucMq9u7821YN5PStpxqwakxooM5wQPCb5A2tTYI1uSFG5TbtGjmyy9xZkVfAFM3iSb82Vwo59-f7eh7Xo7lp4-ArYbC1qoI7GTsg.d2Ds6MRzvKrvbPcOtWewkoAZm0I5wUlq44byWF20hSk&dib_tag=se&keywords=Lexel&qid=1755368241&sprefix=lexel%2Caps%2C163&sr=8-3&th=1)
- **Adafruit bq25185 USB / DC / Solar Lithium Ion/Polymer charger** modules are handy for charging packs while radios are disconnected/in storage and its a great small MPPT (remove charge LED for small solar if needed).
	- https://www.adafruit.com/product/6091
- “Soshine” solar panels with regulated 5 V output are convenient and include a mounting pole.  
	- [Amazon Link](https://www.amazon.com/Soshine-Mini-Solar-Panel-Monocrystalline/dp/B099RSLNZ4/ref=sr_1_2?crid=348TED5BX2MPM&dib=eyJ2IjoiMSJ9.Y2MAhPwRjb21dP3dIvYVX0X83498TTRdNulpsJjA7yEmSeemA8OJIy1urQJCR-gjJLTqrZupAnSkBbDPfjVhzgMx8AZwXDsLutRDn8k5GwGZXwmjah9w2o9AyAfhGMHCBHKlDx6DbRbsJ5ska0CKRhqVk_R-SxuBaXJU2RazNUHEFy5RCGNZdH5AJN1FrZtWOFvKQRS35-8NQnAmEcEBb8yTJ5KOESkI9LZFhEDszN4a6A61r278mrRTqFcuvSdPi76_txjTRHJJk0PZkVCf_ef2awZ1xtNMLR1PXf4uPVM.jfwvgLkYTfVluMIUVQKl_oWrdSHd9uwIHrjcC3Qw9sw&dib_tag=se&keywords=soshine&qid=1755368307&sprefix=soshine%2Caps%2C167&sr=8-2&th=1)
- UV-protect plastics & seal passthroughs: **LEXEL** has worked well.  
- Use the battery connector as a service “switch” inside; add an external waterproof switch only when tool-access enclosures demand it.  
- Add a small **weep hole** on the bottom for pressure equalization and drainage. This is also useful if you have weather sensors. Add a small fabric baffle and place the sensor behind it. We like Bosch BME680's for weather data.
- **Lube gaskets** (e.g., silicone grease) to reduce drying/cracking and improve seals.  
- After many trials, **[Alfa 5 dBi omni](https://www.amazon.com/dp/B08H8J6ZV6?ref=fed_asin_title)** antennas have been a solid value: short (less wind load), N-male fits through-panel connectors, reliable wide beam.

> We are going to fill out standard builds as we improve the documentation. Feel free to drop by the discord and suggest yours

## Femtofox Node Example
TBA
## Nebra Node Example
TBA
## PiZero Node Example
TBA
## Bird House Node Example
TBA
## Tips for placement
TBA
