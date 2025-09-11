# Router Deployment Guide - Freq51 Intermountain Mesh

## 🎯 Overview

This guide covers everything you need to know about deploying **ROUTER** nodes on the Freq51 Intermountain Mesh network. Router deployment is a critical responsibility that requires careful planning, community coordination, and technical understanding.

**⚠️ IMPORTANT**: Router deployment should only be undertaken by experienced community members with proper coordination. Contact the [Discord community](https://discord.gg/meshtastic) before deploying any router nodes.

---

## 🏷️ Understanding Router Roles

### 🔄 ROUTER Role
- **Purpose**: Optimized for message forwarding and network infrastructure
- **Behavior**: Stores messages longer, prioritizes routing over local communication
- **Power**: Requires reliable, continuous power source
- **Coverage**: Should provide strategic coverage for the network
- **Coordination**: **MANDATORY** community approval required

### 🚫 REPEATER Role
- **❌ NOT RECOMMENDED**: Should be avoided by all users
- **Why avoid**: Can cause network congestion and interference
- **Community policy**: Only deployed by experienced members with specific approval
- **⚠️ Critical**: Never use without explicit network coordinator permission

---

## 📏 Strategic Placement by Elevation

Where we place routers is very important.

### 🏔️ High Elevation Backbone Routers (~9,361' - Nelson Peak Level)

**Purpose**: Major backbone infrastructure for maximum regional coverage

**Characteristics**:
- **Elevation**: 9,000+ feet above sea level
- **Coverage**: 50+ miles with clear line-of-sight
- **Role**: Primary ROUTER role only
- **Power**: Must have reliable, continuous power (solar + battery backup recommended)
- **Antenna**: High-gain directional and omnidirectional antennas
- **Coordination**: Requires extensive community planning and approval

**Example Locations**:
- Mountain peaks and ridges
- Tall communication towers
- Strategic high points with 360° visibility
- Existing radio infrastructure sites

**Requirements**:
- Community approval and coordination
- Reliable power infrastructure
- Weather-resistant housing
- Remote monitoring capabilities
- Regular maintenance access

### ⛰️ Regional Coverage Routers (~5,600' - Point of the Mountain Level)

**Purpose**: Regional coverage bridging high backbone to local nodes

**Characteristics**:
- **Elevation**: 5,000-7,000 feet above sea level
- **Coverage**: 15-30 mile radius depending on terrain
- **Role**: ROUTER or ROUTER_CLIENT for secondary infrastructure
- **Power**: Reliable power source (grid-tied or robust solar)
- **Antenna**: Medium to high-gain antennas
- **Coordination**: Community coordination recommended

**Example Locations**:
- Foothills and elevated neighborhoods
- Radio towers and communication sites
- Elevated commercial/residential buildings
- Strategic overlooks and ridges

**Requirements**:
- Community notification and approval
- Stable power source
- Weather protection
- Basic monitoring capabilities

### 🏠 Local/Ground Level (25-35' - House Roofs/Ground Level)

**Purpose**: Local mesh participation and user access

**Characteristics**:
- **Elevation**: Ground level to 100 feet
- **Coverage**: 1-5 miles in typical terrain
- **Role**: CLIENT or CLIENT_MUTE (NOT router roles)
- **Why CLIENT**: Prevents network congestion from too many routers
- **Power**: Standard residential power

**Example Locations**:
- Home installations
- Portable setups
- Vehicle mounts
- Temporary deployments

**Key Principle**: Higher elevation = greater responsibility and coordination requirements. Most users should remain clients regardless of their installation height.

---

## 🔧 Technical Requirements

### Hardware Specifications

**Minimum Requirements**:
- Meshtastic-compatible device (Heltec V3, T-Beam, etc.)
- Reliable power source (grid-tied or solar with battery backup)
- Weather-resistant housing/enclosure
- Appropriate antenna for coverage area
- Network connectivity for monitoring (optional but recommended)

**Recommended for High-Elevation Routers**:
- Industrial-grade device with extended temperature range
- Redundant power systems (solar + battery + grid backup)
- Professional antenna installation
- Remote monitoring and management capabilities
- Lightning protection and grounding

### Power Requirements

**Grid-Tied Systems**:
- Uninterruptible Power Supply (UPS) for short outages
- Automatic restart capability
- Power monitoring and alerts

**Solar Systems**:
- Sufficient panel capacity for location and season
- Deep-cycle battery bank with 3-5 day autonomy
- Charge controller with low-voltage disconnect
- Battery monitoring and maintenance access

**Hybrid Systems** (Recommended):
- Primary: Grid power
- Backup: Solar + battery
- Automatic switching between sources
- Remote monitoring of power status

### Antenna Considerations

**High-Elevation Routers**:
- High-gain omnidirectional antennas (6-12 dBi)
- Directional antennas for specific coverage areas
- Professional installation with proper grounding
- Lightning protection systems

**Regional Routers**:
- Medium-gain omnidirectional antennas (3-6 dBi)
- Directional antennas for targeted coverage
- Weather-resistant mounting
- Proper grounding and lightning protection

**Antenna Placement**:
- Clear line-of-sight to target coverage areas
- Above surrounding obstructions
- Proper grounding and lightning protection
- Accessible for maintenance

---

## 📋 Pre-Deployment Checklist

### Community Coordination
- [ ] Contact Discord community for approval
- [ ] Discuss placement with network coordinators
- [ ] Review coverage maps and existing infrastructure
- [ ] Coordinate with nearby router operators
- [ ] Plan maintenance and monitoring responsibilities

### Technical Preparation
- [ ] Test device configuration in lab environment
- [ ] Verify power system reliability
- [ ] Test antenna performance and coverage
- [ ] Set up monitoring and alerting systems
- [ ] Prepare backup equipment and spare parts

### Site Preparation
- [ ] Secure mounting location and permissions
- [ ] Install power infrastructure
- [ ] Set up weather protection
- [ ] Install lightning protection and grounding
- [ ] Test all systems before final deployment

### Documentation
- [ ] Document exact location coordinates
- [ ] Record antenna height and orientation
- [ ] Document power system specifications
- [ ] Create maintenance schedule
- [ ] Set up monitoring and alerting

---

## ⚙️ Configuration Guidelines

### Essential Settings

**Node Configuration**:
- **Role**: ROUTER (only after community approval)
- **Node Name**: Descriptive name indicating location/function
- **Location**: Enable GPS for accurate positioning
- **Power Management**: Optimize for continuous operation

**Channel Settings**:
- **Primary Channel**: Use community standard (typically "LongFast")
- **Region**: Set to "US"
- **Frequency**: 915MHz band (automatic for US region)
- **Hop Limit**: Set appropriately for network topology

**Router-Specific Settings**:
- **Store & Forward**: Enable for message relay capability
- **Neighbor Info**: Enable for network mapping
- **MQTT**: Configure based on community guidelines
- **Power Management**: Disable sleep modes for continuous operation

### Advanced Configuration

**Network Optimization**:
- **Message Routing**: Optimize for network topology
- **Store & Forward**: Configure based on coverage area
- **Neighbor Discovery**: Enable for network health monitoring
- **Channel Utilization**: Monitor and optimize as needed

**Monitoring and Management**:
- **Remote Access**: Set up secure remote management
- **Logging**: Enable comprehensive logging
- **Alerting**: Configure alerts for system issues
- **Backup**: Regular configuration backups

---

## 🚨 Safety and Legal Considerations

### Safety Requirements
- **Electrical Safety**: Proper grounding and electrical installation
- **Lightning Protection**: Essential for elevated installations
- **Fall Protection**: Safe access for maintenance
- **Weather Protection**: Adequate housing for environmental conditions
- **Fire Safety**: Proper electrical installation and fire prevention

### Legal Considerations
- **Permits**: Check local requirements for antenna installations
- **Zoning**: Verify compliance with local zoning regulations
- **Property Rights**: Ensure proper permissions for installation
- **FCC Compliance**: Verify device compliance with FCC regulations
- **Insurance**: Consider liability and equipment insurance

### Environmental Impact
- **Wildlife**: Consider impact on local wildlife
- **Visual Impact**: Minimize visual impact where possible
- **Noise**: Ensure equipment doesn't create noise issues
- **Maintenance Access**: Plan for minimal environmental disruption

---

## 🔧 Maintenance and Monitoring

### Regular Maintenance Schedule

**Daily Monitoring**:
- Check device status and connectivity
- Monitor power system performance
- Review network traffic and performance
- Check for any error messages or alerts

**Weekly Tasks**:
- Review system logs for issues
- Check antenna connections and mounting
- Verify power system operation
- Update community on status

**Monthly Tasks**:
- Physical inspection of equipment
- Clean antennas and equipment
- Check weather protection
- Review and update documentation

**Quarterly Tasks**:
- Comprehensive system testing
- Update firmware if needed
- Review and optimize configuration
- Plan for seasonal changes

### Monitoring Systems

**Essential Monitoring**:
- Device connectivity and status
- Power system performance
- Network traffic and routing
- Environmental conditions

**Recommended Monitoring**:
- Remote access and management
- Automated alerting systems
- Performance metrics and reporting
- Community communication channels

---

## 🆘 Troubleshooting Common Issues

### Connectivity Problems
- **No Network Connection**: Check power, antenna connections, and device status
- **Poor Coverage**: Verify antenna placement and orientation
- **Intermittent Issues**: Check power system stability
- **High Packet Loss**: Review antenna and environmental factors

### Power Issues
- **Battery Problems**: Check battery health and charging system
- **Solar Issues**: Verify panel output and charge controller
- **Grid Power**: Check UPS and power monitoring systems
- **Weather Impact**: Plan for seasonal power variations

### Network Performance
- **Routing Issues**: Review network topology and configuration
- **Congestion**: Monitor channel utilization and optimize
- **Coverage Gaps**: Coordinate with community for improvements
- **Interference**: Identify and mitigate sources of interference

---

## 📞 Support and Resources

### Community Support
- **Discord**: Primary support channel for router operators
- **Local Meetups**: In-person support and coordination
- **Mentorship**: Experienced operators available for guidance
- **Documentation**: This guide and related resources

### Technical Resources
- **Meshtastic Documentation**: Official technical documentation
- **Hardware Guides**: Equipment-specific setup guides
- **Configuration Examples**: Community-tested configurations
- **Best Practices**: Lessons learned from existing deployments

### Emergency Procedures
- **System Failure**: Rapid response procedures
- **Power Outage**: Backup power activation
- **Weather Events**: Storm preparation and recovery
- **Network Issues**: Coordination with community

---

## 🎯 Success Metrics

### Network Health Indicators
- **Message Delivery**: Successful message routing rates
- **Coverage Area**: Effective coverage radius
- **Uptime**: System availability and reliability
- **Network Growth**: Contribution to network expansion

### Community Impact
- **User Connectivity**: Improved access for community members
- **Emergency Preparedness**: Enhanced emergency communication capability
- **Network Resilience**: Increased network redundancy and reliability
- **Knowledge Sharing**: Contribution to community knowledge base

---

**Remember**: Router deployment is a significant responsibility that directly impacts the entire network. Always coordinate with the community, follow best practices, and prioritize network health over individual preferences.

*For questions or support, contact the Freq51 community through Discord or local meetups. We're here to help ensure successful router deployments that benefit the entire network.*
