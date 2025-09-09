# Freq51 Router Deployment Guide

## Overview

This guide covers router deployment, placement, and configuration for the Freq51 mesh network. Router nodes play a critical infrastructure role and require careful planning and community coordination.

## Router Role Guidelines

### 🔄 ROUTER (Infrastructure Deployment)

* **Purpose**: Optimized for forwarding messages and network backbone
* **Best for**: Fixed installations with reliable power and strategic coverage
* **Behavior**: Stores messages longer, prioritizes routing over battery life
* **⚠️ Coordination Required**: Always coordinate with community before deployment

### When to Use Router Role

* You have a fixed installation with reliable power
* Your location provides strategic coverage (high elevation, central location)
* You've coordinated with the community via Discord
* You understand network topology and interference considerations

### When NOT to Use Router Role

* Mobile/temporary deployments (use CLIENT instead)
* Untested locations
* Without community coordination
* In areas with existing router coverage

## Router Placement Guidelines by Elevation

Strategic placement is critical for router effectiveness. Different elevations serve different network purposes:

### 🏔️ High Elevation Backbone Routers (~9,361' - Nelson Peak level)

* **Purpose**: Major backbone infrastructure for maximum coverage
* **Coverage**: Can reach 50+ miles with line-of-sight
* **Role**: Primary ROUTER role
* **Power**: Solar/battery systems required for remote locations
* **Coordination**: Requires extensive community planning and approval
* **Considerations**: 
  - Weather resistance critical
  - Maintenance access planning
  - Lightning protection
  - Regulatory compliance (if on public land)
* **Example locations**: Mountain peaks, tall towers, strategic high points

### ⛰️ Regional Coverage Routers (~5,600' - Point of the Mountain/Traverse Mountains)

* **Purpose**: Regional coverage bridging high backbone to local nodes
* **Coverage**: 15-30 mile radius depending on terrain
* **Role**: ROUTER or ROUTER_CLIENT for secondary infrastructure
* **Power**: Grid power preferred, backup battery systems
* **Coordination**: Community coordination recommended
* **Considerations**:
  - Balance between coverage and network load
  - Interference management with other regional nodes
  - Redundancy planning
  - Site access and security
* **Example locations**: Foothills, elevated neighborhoods, radio towers

### 🏠 Local/Ground Level (25-35' - House roofs/ground level)

* **Purpose**: Local mesh participation and user access
* **Coverage**: 1-5 miles in typical suburban/urban terrain
* **Role**: CLIENT or CLIENT_MUTE (NOT router roles)
* **Why CLIENT**: Prevents network congestion from too many routers
* **Power**: Grid power, simple battery backup
* **Considerations**:
  - Focus on reliable local coverage
  - Avoid router role to prevent network congestion
  - Position for best local mesh connectivity
* **Example locations**: Home installations, portable setups, vehicle mounts

## Key Deployment Principles

### Elevation = Responsibility

* **Higher elevation = greater responsibility and coordination requirements**
* **Most users should remain clients regardless of installation height**
* **Router deployments require community approval and ongoing coordination**

### Network Health First

* **Too many routers can degrade network performance**
* **Strategic placement is more important than quantity**
* **Consider network load and interference patterns**
* **Plan for redundancy without over-deployment**

## Technical Configuration

### Router-Specific Settings

* **Hop Limit**: Usually 7 for routers (vs 3 for clients)
* **Store & Forward**: Enable for message relay capability
* **Position Broadcasting**: Enable GPS for network mapping
* **MQTT**: Uplink only (no downlink to prevent RF flooding)
* **Power Management**: Disable sleep modes for 24/7 operation

### Antenna Considerations

* **High-gain antennas**: 6-9 dBi for fixed installations
* **Omni-directional**: Preferred for mesh routing
* **Directional**: Only for specific point-to-point links
* **Lightning protection**: Essential for elevated installations
* **Weatherproofing**: Critical for outdoor deployments

### Power Planning

* **Grid power**: Preferred with UPS backup
* **Solar systems**: Size for worst-case weather conditions
* **Battery backup**: Minimum 24-48 hours runtime
* **Power monitoring**: Remote monitoring recommended

## Coordination Process

### Before Deployment

1. **Join Discord**: Connect with the US-Utah && US-ID community
2. **Share plans**: Describe location, equipment, and coverage goals
3. **Get feedback**: Network coordinators will review placement
4. **Wait for approval**: Do not deploy without community consensus
5. **Plan installation**: Consider access, power, and maintenance

### During Deployment

1. **Test first**: Deploy as CLIENT to test coverage
2. **Monitor impact**: Watch for network performance changes
3. **Adjust settings**: Fine-tune based on network conditions
4. **Document setup**: Share configuration details with community
5. **Provide contact**: Ensure community can reach you for issues

### After Deployment

1. **Monitor performance**: Watch for issues or interference
2. **Maintain equipment**: Regular checks and updates
3. **Stay engaged**: Participate in network coordination
4. **Update community**: Report changes or issues promptly
5. **Plan succession**: Have backup plans for equipment failures

## Troubleshooting Router Issues

### High Network Load

* Check for loops in routing topology
* Review hop limits and message filtering
* Consider reducing transmission power
* Coordinate with nearby routers to optimize coverage

### Poor Coverage Despite Elevation

* Check antenna orientation and condition
* Review line-of-sight to target areas
* Consider terrain shadowing effects
* Test with different frequency settings

### Interference with Other Nodes

* Coordinate transmission timing
* Adjust power levels to minimize overlap
* Consider frequency coordination
* Review antenna patterns and positioning

## Emergency Deployment

During emergencies, router deployment rules may be relaxed:

* **Immediate deployment**: Deploy first, coordinate later
* **Temporary settings**: Use emergency configurations
* **Rapid setup**: Focus on getting communications working
* **Post-emergency**: Return to normal coordination processes

## Community Resources

* **Discord**: Primary coordination channel - US-Utah && US-ID
* **GitHub Issues**: Technical problems and documentation
* **Network Maps**: Check existing coverage before deployment
* **Equipment Wiki**: Shared knowledge on hardware and configurations

## Advanced Topics

### MQTT Integration

* **Uplink only**: Share position and telemetry data
* **No downlink**: Prevents flooding RF mesh with internet traffic
* **Mapping**: Contribute to community coverage maps
* **Monitoring**: Enable network health monitoring

### Firmware Management

* **Stable releases**: Use community-recommended firmware versions
* **Beta testing**: Coordinate beta testing with community
* **Update coordination**: Plan updates to minimize network disruption
* **Rollback plans**: Maintain ability to revert problematic updates

### Network Security

* **Physical security**: Protect equipment from tampering
* **Access control**: Limit configuration access
* **Monitoring**: Watch for unusual network behavior
* **Incident response**: Plan for security incidents

## Conclusion

Router deployment is a critical responsibility that requires careful planning, community coordination, and ongoing maintenance. The goal is to build a robust, efficient network that serves everyone effectively.

**Remember**: Higher elevation means greater responsibility. Most users should remain clients regardless of their installation height. Always coordinate router deployments with the community first.

---

*For general mesh participation without router responsibilities, see the [Onboarding Guide](Onboarding.md).*
*For technical configuration details, see [Configuration](config.md).*
*For hardware recommendations, see [Equipment](equipment.md).*
