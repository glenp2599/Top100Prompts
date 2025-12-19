// Top 100 Network Engineer Commands
const commands = [
    // Cisco IOS Commands (1-25)
    { num: 1, title: "Show Running Configuration", command: "show running-config", description: "Display the current active configuration of the device", category: "cisco" },
    { num: 2, title: "Show Startup Configuration", command: "show startup-config", description: "Display the saved configuration that loads on boot", category: "cisco" },
    { num: 3, title: "Show IP Interface Brief", command: "show ip interface brief", description: "Display a summary of interface IP addresses and status", category: "cisco" },
    { num: 4, title: "Show Interfaces Status", command: "show interfaces status", description: "Display the status of all switch interfaces", category: "cisco" },
    { num: 5, title: "Show IP Route", command: "show ip route", description: "Display the IP routing table", category: "routing" },
    { num: 6, title: "Show Version", command: "show version", description: "Display system hardware and software status", category: "cisco" },
    { num: 7, title: "Show VLAN", command: "show vlan brief", description: "Display VLAN information in brief format", category: "switching" },
    { num: 8, title: "Show MAC Address Table", command: "show mac address-table", description: "Display the MAC address table", category: "switching" },
    { num: 9, title: "Configure Terminal", command: "configure terminal", description: "Enter global configuration mode", category: "cisco" },
    { num: 10, title: "Copy Running to Startup", command: "copy running-config startup-config", description: "Save the current configuration to NVRAM", category: "cisco" },
    { num: 11, title: "Show CDP Neighbors", command: "show cdp neighbors", description: "Display information about directly connected Cisco devices", category: "cisco" },
    { num: 12, title: "Show CDP Neighbors Detail", command: "show cdp neighbors detail", description: "Display detailed information about CDP neighbors", category: "cisco" },
    { num: 13, title: "Show Interface", command: "show interface [interface-id]", description: "Display detailed information about a specific interface", category: "cisco" },
    { num: 14, title: "Show ARP", command: "show arp", description: "Display the ARP table", category: "troubleshooting" },
    { num: 15, title: "Show Access-Lists", command: "show access-lists", description: "Display configured access control lists", category: "security" },
    { num: 16, title: "Show Spanning-Tree", command: "show spanning-tree", description: "Display spanning-tree information", category: "switching" },
    { num: 17, title: "Show EIGRP Neighbors", command: "show ip eigrp neighbors", description: "Display EIGRP neighbor information", category: "routing" },
    { num: 18, title: "Show OSPF Neighbors", command: "show ip ospf neighbor", description: "Display OSPF neighbor information", category: "routing" },
    { num: 19, title: "Show BGP Summary", command: "show ip bgp summary", description: "Display BGP neighbor status and statistics", category: "routing" },
    { num: 20, title: "Show Log", command: "show logging", description: "Display system log messages", category: "monitoring" },
    { num: 21, title: "Debug IP RIP", command: "debug ip rip", description: "Enable RIP debugging", category: "troubleshooting" },
    { num: 22, title: "Show Controllers", command: "show controllers [interface]", description: "Display hardware controller information", category: "cisco" },
    { num: 23, title: "Show Processes CPU", command: "show processes cpu", description: "Display CPU utilization statistics", category: "monitoring" },
    { num: 24, title: "Show Memory", command: "show memory", description: "Display memory statistics", category: "monitoring" },
    { num: 25, title: "Reload Device", command: "reload", description: "Restart the device", category: "cisco" },

    // Linux Network Commands (26-50)
    { num: 26, title: "Ping", command: "ping [host]", description: "Test network connectivity to a host", category: "linux" },
    { num: 27, title: "Traceroute", command: "traceroute [host]", description: "Trace the route packets take to a destination", category: "linux" },
    { num: 28, title: "Netstat - All Connections", command: "netstat -tuln", description: "Display all listening TCP/UDP connections", category: "linux" },
    { num: 29, title: "IP Address Show", command: "ip addr show", description: "Display IP address configuration", category: "linux" },
    { num: 30, title: "IP Route Show", command: "ip route show", description: "Display the routing table", category: "linux" },
    { num: 31, title: "Ifconfig", command: "ifconfig", description: "Display or configure network interfaces", category: "linux" },
    { num: 32, title: "Nslookup", command: "nslookup [domain]", description: "Query DNS for domain name or IP address", category: "linux" },
    { num: 33, title: "Dig", command: "dig [domain]", description: "DNS lookup utility with detailed output", category: "linux" },
    { num: 34, title: "Host", command: "host [domain]", description: "DNS lookup utility - simple output", category: "linux" },
    { num: 35, title: "Arp", command: "arp -a", description: "Display ARP cache", category: "linux" },
    { num: 36, title: "Route", command: "route -n", description: "Display routing table in numeric format", category: "linux" },
    { num: 37, title: "Tcpdump", command: "tcpdump -i [interface]", description: "Capture and analyze network traffic", category: "troubleshooting" },
    { num: 38, title: "Netcat Listen", command: "nc -l [port]", description: "Listen on a specified port", category: "linux" },
    { num: 39, title: "Netcat Connect", command: "nc [host] [port]", description: "Connect to a remote host and port", category: "linux" },
    { num: 40, title: "Telnet", command: "telnet [host] [port]", description: "Connect to a remote host using Telnet", category: "linux" },
    { num: 41, title: "SSH", command: "ssh [user]@[host]", description: "Secure shell connection to remote host", category: "linux" },
    { num: 42, title: "SCP", command: "scp [file] [user]@[host]:[path]", description: "Securely copy files between hosts", category: "linux" },
    { num: 43, title: "Wget", command: "wget [url]", description: "Download files from the web", category: "linux" },
    { num: 44, title: "Curl", command: "curl [url]", description: "Transfer data from or to a server", category: "linux" },
    { num: 45, title: "Nmap Host Scan", command: "nmap [host]", description: "Scan a host for open ports", category: "security" },
    { num: 46, title: "Nmap Network Scan", command: "nmap [network/cidr]", description: "Scan a network range", category: "security" },
    { num: 47, title: "Iptables List", command: "iptables -L -n -v", description: "List all firewall rules", category: "security" },
    { num: 48, title: "SS Command", command: "ss -tuln", description: "Display socket statistics (modern netstat)", category: "linux" },
    { num: 49, title: "Ethtool", command: "ethtool [interface]", description: "Display or change ethernet card settings", category: "linux" },
    { num: 50, title: "MTR", command: "mtr [host]", description: "Network diagnostic tool (traceroute + ping)", category: "troubleshooting" },

    // Troubleshooting Commands (51-70)
    { num: 51, title: "Show Tech-Support", command: "show tech-support", description: "Generate comprehensive technical support information", category: "troubleshooting" },
    { num: 52, title: "Show IP Protocols", command: "show ip protocols", description: "Display routing protocol information", category: "routing" },
    { num: 53, title: "Show IP Interface", command: "show ip interface", description: "Display IP interface configuration and status", category: "cisco" },
    { num: 54, title: "Ping Extended", command: "ping", description: "Extended ping command with options", category: "troubleshooting" },
    { num: 55, title: "Traceroute Extended", command: "traceroute [destination]", description: "Trace the path to a destination", category: "troubleshooting" },
    { num: 56, title: "Show IP Traffic", command: "show ip traffic", description: "Display IP protocol statistics", category: "monitoring" },
    { num: 57, title: "Show Interface Counters", command: "show interface counters", description: "Display interface counter statistics", category: "monitoring" },
    { num: 58, title: "Clear Counters", command: "clear counters", description: "Clear interface counters", category: "troubleshooting" },
    { num: 59, title: "Clear ARP Cache", command: "clear arp-cache", description: "Clear the ARP cache", category: "troubleshooting" },
    { num: 60, title: "Clear MAC Address Table", command: "clear mac address-table dynamic", description: "Clear dynamic MAC addresses", category: "switching" },
    { num: 61, title: "Show Environment", command: "show environment", description: "Display environmental status (temperature, power, fans)", category: "monitoring" },
    { num: 62, title: "Show Inventory", command: "show inventory", description: "Display hardware inventory", category: "cisco" },
    { num: 63, title: "Show Flash", command: "show flash", description: "Display contents of flash memory", category: "cisco" },
    { num: 64, title: "Show Boot", command: "show boot", description: "Display boot system parameters", category: "cisco" },
    { num: 65, title: "Verify MD5", command: "verify /md5 [filesystem:filename]", description: "Verify MD5 checksum of a file", category: "cisco" },
    { num: 66, title: "Show IP Cache Flow", command: "show ip cache flow", description: "Display NetFlow statistics", category: "monitoring" },
    { num: 67, title: "Show Port-Security", command: "show port-security", description: "Display port security configuration", category: "security" },
    { num: 68, title: "Show DHCP Binding", command: "show ip dhcp binding", description: "Display DHCP address bindings", category: "cisco" },
    { num: 69, title: "Show NTP Status", command: "show ntp status", description: "Display NTP synchronization status", category: "monitoring" },
    { num: 70, title: "Show Clock", command: "show clock", description: "Display system clock", category: "cisco" },

    // Advanced Commands (71-90)
    { num: 71, title: "Show VTP Status", command: "show vtp status", description: "Display VLAN Trunking Protocol status", category: "switching" },
    { num: 72, title: "Show Trunk", command: "show interfaces trunk", description: "Display trunk port information", category: "switching" },
    { num: 73, title: "Show EtherChannel", command: "show etherchannel summary", description: "Display EtherChannel information", category: "switching" },
    { num: 74, title: "Show HSRP", command: "show standby", description: "Display Hot Standby Router Protocol status", category: "routing" },
    { num: 75, title: "Show VRRP", command: "show vrrp", description: "Display Virtual Router Redundancy Protocol status", category: "routing" },
    { num: 76, title: "Show GLBP", command: "show glbp", description: "Display Gateway Load Balancing Protocol status", category: "routing" },
    { num: 77, title: "Show QoS", command: "show policy-map interface", description: "Display QoS policy applied to interfaces", category: "cisco" },
    { num: 78, title: "Show Authentication Sessions", command: "show authentication sessions", description: "Display 802.1X authentication sessions", category: "security" },
    { num: 79, title: "Show AAA Servers", command: "show aaa servers", description: "Display AAA server statistics", category: "security" },
    { num: 80, title: "Show SNMP", command: "show snmp", description: "Display SNMP configuration and statistics", category: "monitoring" },
    { num: 81, title: "Show VRF", command: "show ip vrf", description: "Display VRF (Virtual Routing and Forwarding) instances", category: "routing" },
    { num: 82, title: "Show MPLS Interfaces", command: "show mpls interfaces", description: "Display MPLS-enabled interfaces", category: "routing" },
    { num: 83, title: "Show IP NAT Translations", command: "show ip nat translations", description: "Display active NAT translations", category: "cisco" },
    { num: 84, title: "Show IP NAT Statistics", command: "show ip nat statistics", description: "Display NAT statistics", category: "cisco" },
    { num: 85, title: "Show Crypto IPsec SA", command: "show crypto ipsec sa", description: "Display IPsec security associations", category: "security" },
    { num: 86, title: "Show Crypto ISAKMP SA", command: "show crypto isakmp sa", description: "Display IKE security associations", category: "security" },
    { num: 87, title: "Show License", command: "show license", description: "Display license information", category: "cisco" },
    { num: 88, title: "Show Module", command: "show module", description: "Display module information for modular devices", category: "cisco" },
    { num: 89, title: "Show Power Inline", command: "show power inline", description: "Display Power over Ethernet (PoE) status", category: "switching" },
    { num: 90, title: "Show Storm-Control", command: "show storm-control", description: "Display storm control configuration", category: "switching" },

    // Specialized Commands (91-100)
    { num: 91, title: "Wireshark", command: "wireshark", description: "Launch GUI packet analyzer", category: "troubleshooting" },
    { num: 92, title: "IP Link Show", command: "ip link show", description: "Display network interface information", category: "linux" },
    { num: 93, title: "IP Neighbor", command: "ip neighbor show", description: "Display neighbor (ARP) cache", category: "linux" },
    { num: 94, title: "Show LLDP Neighbors", command: "show lldp neighbors", description: "Display Link Layer Discovery Protocol neighbors", category: "cisco" },
    { num: 95, title: "Show IP EIGRP Topology", command: "show ip eigrp topology", description: "Display EIGRP topology table", category: "routing" },
    { num: 96, title: "Show IP OSPF Database", command: "show ip ospf database", description: "Display OSPF link-state database", category: "routing" },
    { num: 97, title: "Show IP BGP", command: "show ip bgp", description: "Display BGP routing table", category: "routing" },
    { num: 98, title: "Show Interface Switchport", command: "show interface switchport", description: "Display switchport configuration", category: "switching" },
    { num: 99, title: "Show IP Sockets", command: "show ip sockets", description: "Display open IP sockets", category: "troubleshooting" },
    { num: 100, title: "Terminal Monitor", command: "terminal monitor", description: "Enable logging to terminal session", category: "cisco" }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const commandsContainer = document.getElementById('commandsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// Initialize the page
function init() {
    displayCommands(commands);
    setupEventListeners();
}

// Display commands
function displayCommands(commandsToShow) {
    if (commandsToShow.length === 0) {
        commandsContainer.innerHTML = '<div class="no-results">No commands found matching your search.</div>';
        return;
    }

    commandsContainer.innerHTML = commandsToShow.map(cmd => `
        <div class="command-card" data-category="${cmd.category}">
            <span class="command-number">#${cmd.num}</span>
            <h3 class="command-title">${cmd.title}</h3>
            <div class="command-code">${cmd.command}</div>
            <p class="command-description">${cmd.description}</p>
            <span class="command-category">${formatCategory(cmd.category)}</span>
        </div>
    `).join('');
}

// Format category for display
function formatCategory(category) {
    const categoryMap = {
        'cisco': 'Cisco IOS',
        'linux': 'Linux',
        'troubleshooting': 'Troubleshooting',
        'routing': 'Routing',
        'switching': 'Switching',
        'security': 'Security',
        'monitoring': 'Monitoring'
    };
    return categoryMap[category] || category;
}

// Filter commands by category
function filterByCategory(category) {
    currentFilter = category;
    const searchTerm = searchInput.value.toLowerCase();
    
    let filtered = commands;
    
    if (category !== 'all') {
        filtered = commands.filter(cmd => cmd.category === category);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(cmd => 
            cmd.title.toLowerCase().includes(searchTerm) ||
            cmd.command.toLowerCase().includes(searchTerm) ||
            cmd.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayCommands(filtered);
}

// Search commands
function searchCommands(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    
    let filtered = commands;
    
    if (currentFilter !== 'all') {
        filtered = commands.filter(cmd => cmd.category === currentFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(cmd => 
            cmd.title.toLowerCase().includes(searchTerm) ||
            cmd.command.toLowerCase().includes(searchTerm) ||
            cmd.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayCommands(filtered);
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchCommands(e.target.value);
    });
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByCategory(btn.dataset.category);
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
