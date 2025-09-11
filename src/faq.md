# FAQ

## New User Expectations

Meshtastic is **rapidly evolving**, not a fully polished product. Expect quirks. For best results with a fresh device: put it somewhere with decent LOS (a window works) and **let it run overnight**. It takes time for nodes to discover each other. Users who share their position (GPS or fixed coordinates) will show up on public maps. Its a good way to test a solar setup as well.

We currently recommend a local map (**TBD: map URL**) for nodes that opt in to share their position. You won’t see *every* node—only those that choose to appear or are heard by an MQTT-uplinking node nearby.

## FAQ’s

- **What firmware version should I flash?**  
  Ask in freq51 Discord; “latest” isn’t always best for local stability. We track known issues and local norms. We currently prefer 2.6.11 as of 8/16/2025
  Please see our [firmware update guide](advanced-configuration/firmware-updates.html) for help on that.

- **Where’s the QR/URL to join the local mesh?**  
  We **don’t recommend** QR codes/URLs for public channels. They silently change additional LoRa settings (e.g., TX power, hop count). Enter channel names/keys manually and verify settings after import.

- **Which role should I use: ROUTER or CLIENT?**  
  **Usually `CLIENT` or `CLIENT_MUTE`.** Router roles (`ROUTER`, `ROUTER_LATE`, etc.) rebroadcast *everything* they hear and can harm network health if overused or poorly placed. Use router roles only when coordinated with the group. 
  The Comms Channel has created a great [video](https://www.youtube.com/watch?v=htjwtnjQkkE) on that.

  ### Device Roles

  Meshtastic devices can take on different roles depending on how you want them to behave on the mesh. Picking the right role is important for network health. Each role has a **default rebroadcast mode** (how it repeats messages) which you’ll see in the apps.

  - **Client**  
    - Default role for most users.  
    - Sends and receives messages normally.  
    - Shows up on maps if you share GPS or fixed position.  
    - **Rebroadcast mode:** `All` (repeats your own + direct messages when needed).  
    - Best for portable or handheld nodes or roof nodes for relaying indoor nodes.

  - **Client Mute**  
    - Same as Client, but **does not rebroadcast messages**.  
    - Saves battery and avoids adding unnecessary traffic.  
    - Still sends and receives messages for its owner.  
	- Best for indoor nodes or mobile nodes
    - **Rebroadcast mode:** `Local`.  

  - **Client Hidden**  
    - Behaves like Client, but your node **does not appear in other users’ node lists**.  
    - Useful for privacy or stealth use-cases.  
    - You can still send and receive messages normally.  
	- Best for extremely low traffic stealthy nodes
    - **Rebroadcast mode:** `Known Only` (like Client).  

  - **Router**  
    - A fixed, always-on node that **rebroadcasts everything** it hears.  
    - Extends network reach and coverage for others.  
    - Should only be used when:  
      - The node is in a **good location** (elevation, clear and wide Line of Sight).  
      - It has **reliable power** (mains power or solar-battery (large pack) ).  
      - It has a **stable, high gain, preferably lightning arrested antenna setup**.  
	  - It has a filter on the RF chain
    - **Rebroadcast mode:** `CORE_PORT_NUMS_ONLY`.  (we actually desire ALL so please switch. See configuration details)
    - Overuse of routers can cause congestion.  
    - See [Router Deployment Guide](advanced-configuration/router-deployment.md) before deploying.

  - **Router Late**  
    - A router that **waits briefly before retransmitting** messages.  
    - Reduces “echo storms” when many routers are present.  
	- Must posses a filter on the RF chain
    - Best used in **dense networks** with multiple routers to avoid collisions and connecting to geographically seperate areas
    - Should be coordinated with other router owners.  
    - **Rebroadcast mode:** `All (delayed)`.  
    - See [Router Deployment Guide](advanced-configuration/router-deployment.md) for placement guidance.

  #### Choosing the Right Role
  - **Most people - Outdoor:** `Client`
  - **Most people - Indoor:** `Client Mute`, or `Client Hidden` 
  - **Fixed/always-on with power and good placement between 5500 ft and 8000 ft:** `Router Late`  
  - **Fixed/always-on with power and good placement above 8000 ft:** `Router`  

  See [Router Deployment Guide](advanced-configuration/router-deployment.md) for deployment guidance.

  ⚠️ **Tip:** Too many routers (or routers in bad spots) can hurt the mesh. When in doubt, stick to `Client`.  

### Why Improperly Applying Router and Repeater Roles Is Harmful

If a poor location is chosen for Routers and Repeaters, it can cause some of these issues:

- **Increased rate of packet collisions**  
  Because Routers, Router Lates and Repeaters always rebroadcast, when too many devices use these roles and are direct neighbors, packets will often be rebroadcast at the same time. This creates higher noise levels and packet error rates, frequently resulting in sporadic delivery failures.

- **Decreased overall range**  
  An improperly located router may prematurely consume (“hop gobble”) packets routing through it. This uses up a hop before the packet can reach strategically placed nodes. For example, if many Routers are deployed in a valley, they can consume all available hops before the packet can reach a node placed on a peak above the valley, greatly limiting range. This is exactly what occurs on frequency slot 20 which is the default preset. We have moved for this reason. Please be polite

- **Asymmetrical links**  
  Similar to decreased range, poor router placement can result in asymmetrical communication—where one part of the mesh can send messages to another group, but the reverse path fails. This happens because hops are consumed too early, blocking return messages. This is the classic hidden node problem. Users often react by increasing the hop limit to compensate, but this only worsens congestion by consuming more airtime. Your hop limit should be set to the lowest reasonable number of hops to reach your destination +1 for reliable links. If you do wish to see the entire mesh you can increase to 7 but be aware of what you are doing.

---

- **What’s LongFast vs LONG_FAST?**  
  **LongFast** is the default **channel name** when using the **LONG_FAST** modem preset. **LONG_FAST** is a preset (like MEDIUM_FAST, SHORT_FAST, etc.) that bundles LoRa parameters.

- **How do I know I’m connected?**  
  Seeing other nodes in your node list is a good sign. Try a message to LongFast or a direct message to a known node.
