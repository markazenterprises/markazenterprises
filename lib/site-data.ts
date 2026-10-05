export type Division = {
  number: string
  slug: string
  title: string
  short: string
  details: string[]
}

export const divisions: Division[] = [
  { number: "01", slug: "construction", title: "Turnkey Construction", short: "Residential, commercial and civil projects delivered from planning through handover.", details: ["Civil and structural works", "Residential and commercial construction", "Renovation and finishing", "Electrical and plumbing execution"] },
  { number: "02", slug: "interiors", title: "Interior Design & Décor", short: "Purpose-built residential and corporate interiors with coordinated turnkey execution.", details: ["Space planning", "3D visualization", "Custom joinery and finishes", "Turnkey interior execution"] },
  { number: "03", slug: "hvac", title: "Home Appliances & HVAC", short: "Efficient climate-control, appliance and maintenance solutions for homes and businesses.", details: ["Commercial HVAC and VRF", "Appliance supply and installation", "Smart-home integration", "Preventive maintenance"] },
  { number: "04", slug: "security", title: "CCTV & Security Systems", short: "Connected surveillance and access-control systems engineered for continuous visibility.", details: ["IP camera networks", "NVR and DVR systems", "Access control and alarms", "Remote monitoring"] },
  { number: "05", slug: "web-development", title: "IT & Web Development", short: "Websites, ecommerce and connected digital platforms built around business operations.", details: ["Corporate and ecommerce websites", "Web applications", "Cloud integrations", "ERP and CRM connections"] },
  { number: "06", slug: "mobile-apps", title: "Mobile App Engineering", short: "Native and cross-platform applications supported from interface design to deployment.", details: ["iOS and Android", "React Native and Flutter", "Backend APIs", "App-store deployment"] },
  { number: "07", slug: "software-infrastructure", title: "Business Software & IT Infrastructure", short: "Enterprise software and resilient infrastructure that remove operational fragmentation.", details: ["Custom enterprise software", "SaaS systems", "Database migration", "Infrastructure consulting"] },
  { number: "08", slug: "data-analytics", title: "Data Analytics & BI", short: "Decision-ready dashboards, data pipelines and reporting systems.", details: ["Power BI dashboards", "ETL pipelines", "KPI monitoring", "Predictive analytics"] },
  { number: "09", slug: "digital-marketing", title: "Digital Marketing & Growth", short: "Measured acquisition systems spanning search, paid media, content and automation.", details: ["SEO and PPC", "Meta advertising", "Lead generation", "Email automation"] },
  { number: "10", slug: "solar", title: "Solar Energy Systems", short: "Commercial, industrial and residential solar systems designed around real demand.", details: ["On-grid and net metering", "Off-grid and hybrid systems", "Tier-1 solar hardware", "Monitoring and maintenance"] },
  { number: "11", slug: "batteries", title: "Lithium Batteries & Custom Packs", short: "Custom LiFePO4 storage systems with intelligent protection and inverter communication.", details: ["Grade-A EVE cells", "Smart active-balancing BMS", "CAN and RS485 integration", "Custom industrial enclosures"] },
]

export const projects = [
  { slug: "100kw-hybrid-solar", number: "01", category: "Solar Energy", title: "100kW Hybrid Solar Installation", metric: "PKR 500K monthly saving", copy: "A commercial hybrid system integrating generation, storage, net metering and remote performance monitoring." },
  { slug: "gulshan-turnkey-residence", number: "02", category: "Construction", title: "Gulshan Luxury Turnkey Residence", metric: "500 sq yd · 12 months", copy: "A complete residential build combining structural delivery, premium finishes and smart-home coordination." },
  { slug: "corporate-office", number: "03", category: "Interiors", title: "Premium Corporate Office", metric: "4,000+ sq ft", copy: "An acoustically considered workplace with glass partitions, bespoke workstations and brand-led finishes." },
  { slug: "warehouse-erp", number: "04", category: "Technology", title: "Multi-Channel Warehouse ERP", metric: "65% efficiency improvement", copy: "A unified inventory, dispatch, barcode and invoice platform connecting five operating branches." },
  { slug: "ip-surveillance", number: "05", category: "Security", title: "32-Camera IP Surveillance", metric: "24/7 · 30-day recording", copy: "A resilient indoor and outdoor monitoring network with remote access and redundant NVR storage." },
  { slug: "retail-analytics", number: "06", category: "Business Intelligence", title: "Power BI Retail Analytics", metric: "22% less stock wastage", copy: "A centralized analytics pipeline turning multi-branch retail data into clear operational decisions." },
]

export const insights = [
  { slug: "net-metering-pakistan", number: "01", category: "Solar Energy", title: "Net Metering in Pakistan: What Commercial Buyers Need to Know", date: "2026" },
  { slug: "grey-structure-cost-karachi", number: "02", category: "Construction", title: "Grey Structure Costs in Karachi — A 2026 Planning Guide", date: "2026" },
  { slug: "consolidated-erp", number: "03", category: "Technology", title: "Why Consolidated ERP Systems Matter", date: "2026" },
]

export const contact = {
  phone1: "+92 334 3660833",
  phone2: "+92 341 2899849",
  email: "themarkazenterprises@gmail.com",
  address: "Banglow # D-96, Block 5, F.B Area, Gulberg Town, Karachi - 75950, Pakistan",
}
