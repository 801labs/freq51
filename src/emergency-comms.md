# Freq51 - Intermountain Mesh Emergency Communications Standards

The Intermountain Mesh spans two separate meshes: Meshtastic and MeshCore. All settings for the configuration of mesh nodes can be found in their respective locations.
## Meshtastic

### Channels

There are several different channels utilized and there are bots that feed alerts and data into them. All EmCom channel PSKs are empty to eliminate any confusion or accidental copying of additional characters.

| Channel | Key   | QR Code                            | Purpose                                    | EAS Relay |
| ------- | ----- | ---------------------------------- | ------------------------------------------ | --------- |
| emcom   | empty |![emcom](images/QR-codes/emcom.png) | Mesh-wide emergency Communications channel |           |
|         |       |                                    |                                            |           |
|         |       |                                    |                                            |           |
|         |       |                                    |                                            |           |
|         |       |                                    |                                            |           |

####  Regional Channels

#####   Utah

| Channel | Region        | Key   | QR Code | Purpose                                                                                                                                                   | EAS Relay |
| ------- | ------------- | ----- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------- |
| ec-n-ut | Northern Utah | empty |![ec-n-ut](images/QR-codes/ec-n-ut.png) | Regional coordinating and alerts for Northern Utah including Cache, Davis, Morgan, Rich, and Weber counties.               |           |
| ec-c-ut | Central Utah  | empty |![ec-c-ut](images/QR-codes/ec-c-ut.png) | Regional coordinating and alerts for Central Utah including Salt Lake, Sanpete, Utah, and Wasatch counties.                |           |
| ec-e-ut | Eastern Utah  | empty |![ec-e-ut](images/QR-codes/ec-e-ut.png) | Regional coordinating and alerts for Carbon, Daggett, Duchesne, Emery, Grand, San Juan, Summit, Uintah, and Wayne counties |           |
| ec-w-ut | Western Utah  | empty |![ec-w-ut](images/QR-codes/ec-w-ut.png) | Regional coordinating and alerts for Box Elder, Juab, Millard, and Tooele counties.                                        |           |
| ec-s-ut | Southern Utah | empty |![ec-s-ut](images/QR-codes/ec-s-ut.png) | Regional coordinating and alerts for Beaver, Garfield, Iron, Kane, Piute, Sevier, and Washington counties.                 |           |


##### Idaho

| Channel  | Region              | Key   | QR Code | Purpose                                                                                                                                                                       | EAS Relay                                          |
| ------- | -------------------- | ----- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ec-n-id  | Northern Idaho      | empty |![ec-n-id](images/QR-codes/ec-n-id.png) | Regional coordinating and alerts for Benewah, Bonner, Boundary, Clearwater, Idaho, Kootenai, Latah, Lewis, Nez Perce, and Shoshone counties.   |                                                    |
| ec-c-id  | Central Idaho       | empty |![ec-c-id](images/QR-codes/ec-c-id.png) | Regional coordinating and alerts for Adams, Butte, Clark, Custer, Fremont, Jefferson, Lemhi, and Valley counties.                              |                                                    |
| ec-sw-id | South Western Idaho | empty |![ec-sw-id](images/QR-codes/ec-sw-id.png) | Regional coordinating and alerts for Ada, Boise, Canyon, Elmore, Gen, Owyhee, Payette, and Washington counties.                              | LN:Johnnytastic  <br>SN:(JTS)<br>SysOp: JeepnJonny |
| ec-sc-id | South Central Idaho | empty |![ec-sc-id](images/QR-codes/ec-sc-id.png) | Regional coordinating and alerts for Blaine, Camas, Cassia, Gooding, Jerome, Lincoln, Minidoka, and Twin Falls counties.                     | LN:AIDA-N2<br>SN:(AIDA)<br>SysOp: Malice           |
| ec-se-id | South Eastern Idaho | empty |![ec-se-id](images/QR-codes/ec-se-id.png) | Regional coordinating and alerts for Bannock, Bear Lake, Bingham, Bonneville, Caribou, Franklin, Madison, Oneida, Power, and Teton counties. |                                                    |

-----

### Automated Alerting Solutions

There are many automated ways that the alerts are accessed and broadcast. Generally they come from internet connected nodes with an attached bot or other application. In some cases, there is an SDR attached to a small computer like a Raspberry Pi that takes EAS, FEMA, and iPAWS alerts straight from the airwaves. Below are details regarding the various systems in use.

-----

## MeshCore

TBD