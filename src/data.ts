export const profile = {
  name: 'Vibhav Kumar',
  location: 'Noida, India',
  phone: '+91 8004885992',
  email: 'vibhavk2024@email.iimcal.ac.in',
  linkedin: 'https://linkedin.com/in/vibhavkarnwal',
  linkedinLabel: 'linkedin.com/in/vibhavkarnwal',
  github: 'https://github.com/vibhav07',
  githubLabel: 'github.com/vibhav07',
  positioning: 'Product Management & Strategy · AI-Native Engineering',
  summary:
    'Manager (Product & Strategy) at Coforge with ~6 years of experience. Owned Agentic AI enterprise products from 0 to 1 to 10. IIM Calcutta MBA, supporting a $500M+ AI-Native Engineering business unit and scaling delivery acceleration assets to enable a $100M+ asset-led delivery pipeline.',
}

export const stats = [
  { value: 500, prefix: '$', suffix: 'M+', label: 'AI-Native Engineering BU Supported' },
  { value: 100, prefix: '$', suffix: 'M+', label: 'Asset-Led Delivery Pipeline Enabled' },
  { value: 45, prefix: '', suffix: 'K+', label: 'Global Employees Enabled (25+ Countries)' },
  { value: 15, prefix: '', suffix: '+', label: 'Fortune 500 CXO Live Demos Delivered' },
]

export type Product = {
  id: string
  name: string
  role: string
  scope: string
  summary: string
  stack: string[]
  outcomes: string[]
  metrics: { value: string; label: string }[]
}

export const products: Product[] = [
  {
    id: 'forge-x',
    name: 'Forge-X',
    role: 'Product Owner',
    scope: 'External Market-Facing',
    summary:
      'Steered the 0-to-1 and 1-to-10 roadmap across a 15-member squad and 100+ backlog items spanning 10+ key features.',
    stack: ['Multi-Agent Orchestration', 'Skill-Based Agents', 'MCP Connectors', 'Trust-AI Guardrails', 'Model Router', 'On-Prem LLM'],
    outcomes: [
      'Designed user journeys around AI in the SDLC using multi-agent orchestration, skill-based agents and MCP connectors.',
      'Shipped Trust-AI guardrails, Model Router, On-Prem LLM deployment and Agent Exchange for governed multi-account execution.',
      'Delivered integrations with ServiceNow, Jira, Figma, Azure DevOps and GitHub.',
    ],
    metrics: [
      { value: '15', label: 'Squad members' },
      { value: '100+', label: 'Backlog items' },
      { value: '50%', label: 'Faster client time-to-value' },
    ],
  },
  {
    id: 'codeinsightai',
    name: 'CodeInsightAI',
    role: 'Product Manager',
    scope: 'External Market-Facing',
    summary: 'Owned feature charters, roadmap, user stories and UAT for an AI-led code understanding and transformation product.',
    stack: ['Agentic AI', 'LLMOps', 'LightRAG', 'Neo4j', 'Evals'],
    outcomes: [
      'Cut transformation time by 45%.',
      'Directed the commercial launch and authored value frameworks showing 35% lower modernization cost.',
      'Delivered 15+ live C-suite demos to Fortune 500 CXOs across CodeInsightAI and AMS Studio.',
    ],
    metrics: [
      { value: '45%', label: 'Less transformation time' },
      { value: '35%', label: 'Lower modernization cost' },
      { value: '15+', label: 'CXO live demos' },
    ],
  },
  {
    id: 'ams-studio',
    name: 'AMS Studio',
    role: 'Product Manager',
    scope: 'External Market-Facing',
    summary: 'Owned feature charters, roadmap, user stories and UAT for an AI-led application management services product.',
    stack: ['Agentic AI', 'Deep Agents', 'LangGraph', 'Self-Learning Agents', 'Evals'],
    outcomes: [
      'Cut L1/L2 incidents by 40%.',
      'Directed commercial launches positioning the asset for outcome-based commercial models.',
      'Presented live to Fortune 500 CXOs alongside CodeInsightAI.',
    ],
    metrics: [
      { value: '40%', label: 'Fewer L1/L2 incidents' },
      { value: '15+', label: 'CXO live demos' },
    ],
  },
  {
    id: 'kmp',
    name: 'Knowledge Management Portal',
    role: 'Product Owner',
    scope: "COO's Office · Internal",
    summary: "Built the Coforge-wide internal knowledge portal under the COO's charter.",
    stack: ['Semantic Search', 'Governed Approval Workflows', 'Multi-Region Ingestion', 'RAG'],
    outcomes: [
      'Enabled 45K+ employees across 25+ countries and 33+ delivery centers.',
      'Enabled multi-region ingestion of knowledge assets with governed approval workflows and semantic search.',
      'Accelerated global RFP and pursuit velocity.',
    ],
    metrics: [
      { value: '45K+', label: 'Employees' },
      { value: '25+', label: 'Countries' },
      { value: '33+', label: 'Delivery centers' },
    ],
  },
]

export type Role = {
  num: string
  company: 'coforge' | 'accenture' | 'amazon' | 'omsoftech'
  companyName: string
  title: string
  location: string
  dates: string
  tagline: string
  highlights: string[]
  bullets: string[]
}

export const roles: Role[] = [
  {
    num: '01',
    company: 'coforge',
    companyName: 'Coforge',
    title: 'Manager (Product & Strategy) – AI-led Engineering',
    location: 'Noida, India',
    dates: 'Jun 2024 – Present',
    tagline: 'Enterprise Agentic AI Platforms · $500M+ BU Strategy & Commercials',
    highlights: ['$500M+ BU Supported', '$100M+ Asset Pipeline', '15+ Fortune 500 CXO Demos', '50% Faster TTV'],
    bullets: [
      'Product Owner for Forge-X, Product Manager for CodeInsightAI and AMS Studio, Product Owner for the COO-office Knowledge Management Portal.',
      'Shaped offerings for the $500M+ business unit, positioning Forge-X, CodeInsightAI and AMS Studio to enable a $100M+ asset-led delivery pipeline.',
      'Designed credit-based packaging around the Mod Squads Delivery Model, shifting enterprise deals from effort-based to outcome-based commercial models.',
      'Led solutioning, pitching and demos for CXO leadership, translating a $1M+ investment into actionable asset-led charters.',
      'Delivered Fortune 500 executive POVs across 20+ engagements; built the Transition Viability Scoring Model (errors cut ~25%, dependency ~90%).',
    ],
  },
  {
    num: '02',
    company: 'accenture',
    companyName: 'Accenture',
    title: 'Technology Security Associate',
    location: 'Noida, India',
    dates: 'Aug 2021 – Feb 2022',
    tagline: 'Enterprise Compliance, Governance & Automation Workflows',
    highlights: ['100% SLA Adherence', '250K+ Staff Automated', 'Star Performer Award'],
    bullets: [
      'Advised 12+ senior project managers on enterprise compliance and governance controls, achieving 100% SLA adherence across 5+ global client security audits.',
      'Automated compliance reporting workflows for 250K+ staff and led security onboarding for 5K+ new hires, earning the Star Performer Award.',
    ],
  },
  {
    num: '03',
    company: 'amazon',
    companyName: 'Amazon',
    title: 'Quality Specialist',
    location: 'Hyderabad, India',
    dates: 'Aug 2020 – Aug 2021',
    tagline: 'Last-Mile Route Optimization, QGIS Telemetry & Spatial Analytics',
    highlights: ['500+ Routes Optimized', '10,000+ Geocodes Resolved', '100+ Spatial Hyper Zones'],
    bullets: [
      'Optimized 500+ last-mile delivery routes across India through root cause analysis on carrier navigation telemetry and delivery defect signals.',
      "Engineered 100+ spatial 'Hyper Zones' in QGIS and resolved 10,000+ geocode address defects across 30+ delivery stations to reduce package re-attempts.",
    ],
  },
  {
    num: '04',
    company: 'omsoftech',
    companyName: 'Om Softech',
    title: 'Associate',
    location: 'Delhi, India',
    dates: 'Jun 2019 – Aug 2020',
    tagline: 'Demand Forecasting, Quantitative Inventory & B2B Commercial Contracts',
    highlights: ['+15% Revenue Growth', '+5% Gross Margin Expansion', '25+ Enterprise AMCs'],
    bullets: [
      'Drove ~15% revenue growth and ~5% gross margin expansion with quantitative demand forecasting and inventory optimization models.',
      'Closed INR 180K+ in B2B Annual Maintenance Contracts across 25+ enterprise owners, leading a 4-member field operations team (+20% efficiency).',
    ],
  },
]

export const internships = [
  {
    company: 'mahindra' as const,
    companyName: 'Mahindra & Mahindra',
    title: 'GMC Summer Intern (Group Management Cadre)',
    location: 'Mumbai, India',
    dates: 'Apr 2023 – Jun 2023',
    tagline: 'Strategic Sourcing & SKU Complexity Reduction',
    highlights: ['~5% SKU Reduction on INR 22,000 Cr', '$2M+ Capex Savings', 'LoR from GM (Sourcing)'],
    text: 'Identified ~5% SKU complexity reduction on INR 22,000 Cr spend and $2M+ capex savings across 44,000+ auto parts; awarded LoR from GM (Sourcing).',
  },
  {
    company: 'volopay' as const,
    companyName: 'Volopay (YC \'20)',
    title: "Security Intern · Y Combinator '20",
    location: 'Bangalore, India',
    dates: '2022',
    tagline: 'Fintech Security Posture & ISO 27001 Audit',
    highlights: ['ISO 27001 Posture', 'PPO Awarded', 'LoR from CTO'],
    text: 'Strengthened security and compliance posture supporting ISO 27001 audit; awarded a Full-Time Offer (PPO) and Letter of Recommendation from the CTO.',
  },
]

export const skills = [
  {
    title: 'Product Management',
    items: ['Product Strategy', '0-to-1 & 1-to-10 Product Roadmaps', 'PRDs & User Stories', 'Backlog Prioritization', 'Customer Journey Mapping', 'Agile/Scrum', 'Figma', 'HTML Prototyping'],
  },
  {
    title: 'Strategy, GTM & Commercial',
    items: ['Go-To-Market & Launch', 'Positioning', 'Dynamic Costing', 'AI Pricing', 'Credit-Based Packaging', 'Subscription-based Pricing', 'Outcome-Based Commercial Models', 'POVs & Interactive Demos'],
  },
  {
    title: 'Agentic AI & Engineering',
    items: ['Agentic AI', 'Deep Agents', 'MCP', 'LangGraph', 'LLMOps', 'Model Routing', 'On-Prem Model Deployment', 'Model Routers', 'LightRAG', 'Neo4j', 'Agent Development Lifecycle', 'Trust-AI', 'Evals & Self-Learning Agents'],
  },
]

export const education = [
  { school: 'Indian Institute of Management, Calcutta', degree: 'MBA', place: 'Kolkata, India', note: 'CAT 99.43 Percentile', dates: '2022 – 2024' },
  { school: 'IMS Engineering College', degree: 'B.Tech, Computer Science & Engineering', place: 'Ghaziabad, India', note: 'CSE Dept. Tech Fest Winner', dates: '2015 – 2019' },
]

export const awards = [
  { title: 'Award of Excellence FY25', org: 'Coforge', text: 'Honored for enterprise AI product delivery and commercial impact.' },
  { title: 'COO SPOT Award', org: 'Coforge', text: 'Awarded for leading ISG and Forrester analyst positioning (influenced ~$50M pipeline).' },
  { title: 'Star Performer', org: "Accenture '22", text: 'Security onboarding and compliance automation.' },
  { title: 'National Semi-Finalist', org: "JSW Case Comp '23", text: 'Academic and case honors alongside CAT 99.43 %ile.' },
]

export const leadership = [
  { title: 'Founder & President', org: 'Joka Comedy Board, IIM Calcutta', text: 'Established a campus comedy club and led 15+ members across 6 events.' },
  { title: 'Events & Sponsorship Head', org: 'GMLC, IIM Calcutta', text: 'Spearheaded corporate sponsorships and flagship leadership summits.' },
  { title: 'Basketball Team Captain & Sports Convener', org: 'IMSEC', text: 'Led the team and served as Sports Convener for the National Level Sports Fest.' },
]

export const interests = ['Basketball', 'Swimming', 'Guitar']
