import { SkillCategory, ProjectItem, ExperienceItem, EngineeringHighlight, EducationItem, CertificationItem } from '../types';
import portraitAsset from '../assets/images/krushna_portrait_1789571039036.jpg';

export const PERSONAL_INFO = {
  name: 'Krushna Belokar',
  title: 'Full Stack Developer',
  subtitle: 'Angular | React | .NET Core | AI Integration | Azure',
  heroHeadline: 'Building Scalable Digital Experiences with Code & AI',
  heroSupportingText: 'Full Stack Developer with 4+ years of experience building web applications using Angular, React, .NET Core, Azure and modern AI technologies.',
  email: 'krushna.techlab@gmail.com',
  phone: '+91 90963 79182',
  location: 'Pune, Maharashtra, India',
  availability: 'Available immediately for full-time roles (Remote / Hybrid / On-site)',
  linkedin: 'https://www.linkedin.com/in/krushna-belokar/',
  github: 'https://github.com/krushna-belokar',
  photoUrl: portraitAsset || '/krushna-portrait.jpg',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Enterprise Projects', value: '5+' },
    { label: 'Performance Gains', value: 'Up to 10x' },
    { label: 'Certifications', value: '3' }
  ],
  techBadges: ['Angular', 'React', '.NET Core', 'Azure', 'AI / LLMs']
};

export const ABOUT_DATA = {
  summary: `Krushna Belokar is an experienced Full Stack Developer with over 4 years of hands-on expertise engineering robust, high-performance web applications across the complete software development lifecycle (SDLC). 
  Specializing in modern frontend frameworks (Angular, React) and enterprise backend architectures (.NET Core, ASP.NET Core Web API, EF Core), Krushna brings proven mastery in delivering mission-critical applications for global enterprises including CBRE.`,
  pillars: [
    {
      title: 'Web Application Development',
      description: 'Architecting maintainable SPAs and enterprise web apps with reactive state architecture, micro-frontends, and accessible UI systems.'
    },
    {
      title: 'REST API Integration',
      description: 'Designing performant, secure, and well-documented RESTful endpoints using ASP.NET Core Web API with clean repository patterns.'
    },
    {
      title: 'Performance Optimization',
      description: 'Eliminating rendering bottlenecks, reducing bundle sizes, and tuning SQL/LINQ queries to deliver up to 10x performance speedups.'
    },
    {
      title: 'Azure Cloud Services',
      description: 'Provisioning, configuring, and scaling Azure App Services, Functions, Blob Storage, and Azure SQL Databases.'
    },
    {
      title: 'CI/CD & DevOps',
      description: 'Automating continuous integration and delivery pipelines in Azure DevOps for reliable, zero-downtime releases.'
    },
    {
      title: 'AI/LLM Integration',
      description: 'Implementing Retrieval-Augmented Generation (RAG), vector databases, embeddings, and intelligent agents into business applications.'
    },
    {
      title: 'Production Support',
      description: 'Diagnosing complex production bugs, monitoring telemetry, and maintaining 99.9% application uptime in enterprise SLA environments.'
    },
    {
      title: 'Agile/Scrum Collaboration',
      description: 'Thriving in cross-functional Agile sprints, grooming user stories, conducting code reviews, and aligning with client stakeholders.'
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    iconName: 'Layout',
    description: 'Modern, reactive, and accessible user interface engineering.',
    skills: [
      { name: 'Angular', isPrimary: true, description: 'v12-v18, Standalone components, Signals, Custom Directives' },
      { name: 'React', isPrimary: true, description: 'Hooks, Functional Architecture, Context, Concurrent rendering' },
      { name: 'Redux', isPrimary: false, description: 'Predictable state management & middleware' },
      { name: 'RxJS', isPrimary: true, description: 'Reactive streams, debouncing, subject operators' },
      { name: 'NgRx', isPrimary: true, description: 'Store, Effects, Entity, Selectors memoization' },
      { name: 'Angular Material', isPrimary: false, description: 'Accessible enterprise design system components' },
      { name: 'Tailwind CSS', isPrimary: true, description: 'Utility-first styling, design tokens, fluid layouts' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    iconName: 'Server',
    description: 'High-throughput enterprise APIs and microservices.',
    skills: [
      { name: 'C#', isPrimary: true, description: 'Modern C# 10-12, async/await, memory efficiency' },
      { name: '.NET Core', isPrimary: true, description: 'Cross-platform runtime, dependency injection, middleware' },
      { name: 'ASP.NET Core Web API', isPrimary: true, description: 'RESTful architectures, JWT auth, Swagger/OpenAPI' },
      { name: 'Entity Framework Core', isPrimary: true, description: 'Code-first migrations, query projection, caching' },
      { name: 'LINQ', isPrimary: true, description: 'High-performance in-memory and database querying' },
      { name: 'REST APIs', isPrimary: true, description: 'API contract design, rate-limiting, status codes' }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    iconName: 'Database',
    description: 'Relational schema design, query tuning, and transactions.',
    skills: [
      { name: 'Microsoft SQL Server', isPrimary: true, description: 'Stored procedures, indexing, execution plans' },
      { name: 'SQL', isPrimary: true, description: 'Complex joins, aggregations, window functions' },
      { name: 'MySQL', isPrimary: false, description: 'Relational data modeling, indexing, connection pooling' }
    ]
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    iconName: 'Cloud',
    description: 'Scalable cloud infrastructure and automated delivery.',
    skills: [
      { name: 'Azure Functions', isPrimary: true, description: 'Serverless event-driven compute and scheduled triggers' },
      { name: 'Azure Blob Storage', isPrimary: true, description: 'Secure unstructured file and asset storage' },
      { name: 'Azure SQL Database', isPrimary: true, description: 'Managed relational cloud databases and geo-replication' },
      { name: 'Azure DevOps', isPrimary: true, description: 'Work item tracking, repositories, and board governance' },
      { name: 'CI/CD Pipelines', isPrimary: true, description: 'YAML build and multi-stage deployment release pipelines' }
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture',
    iconName: 'Cpu',
    description: 'Enterprise structural patterns for scalability and maintainability.',
    skills: [
      { name: 'Microservices', isPrimary: true, description: 'Decoupled services, event handling, API gateways' },
      { name: 'Micro-Frontend', isPrimary: true, description: 'Modular federated frontend applications' },
      { name: 'CQRS', isPrimary: true, description: 'Command Query Responsibility Segregation' },
      { name: 'Repository Pattern', isPrimary: true, description: 'Abstracted data access layers and unit of work' },
      { name: 'Lazy Loading', isPrimary: true, description: 'On-demand module and asset hydration for speed' }
    ]
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    iconName: 'Sparkles',
    description: 'Practical generative AI integration for business workflows.',
    skills: [
      { name: 'LLMs', isPrimary: true, description: 'Prompt engineering, structured outputs, fine-tuning' },
      { name: 'RAG', isPrimary: true, description: 'Retrieval-Augmented Generation for private knowledge bases' },
      { name: 'OCR', isPrimary: false, description: 'Optical Character Recognition document extraction' },
      { name: 'Azure OpenAI', isPrimary: true, description: 'Enterprise GPT-4o deployments, embeddings, security' },
      { name: 'Azure AI Foundry', isPrimary: true, description: 'Unified AI model management and evaluation' },
      { name: 'Azure Document Intelligence', isPrimary: true, description: 'Automated tabular data and invoice parsing' },
      { name: 'AI Agents', isPrimary: true, description: 'Multi-step autonomous reasoning and tool execution' },
      { name: 'MCP (Model Context Protocol)', isPrimary: true, description: 'Standardized context and external tool integration' },
      { name: 'Embeddings', isPrimary: true, description: 'Semantic text vectorization for similarity search' },
      { name: 'Vector Databases', isPrimary: true, description: 'High-speed approximate nearest neighbor vector indexing' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'imriel',
    company: 'Imriel Technology Solutions Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: 'Nov 2022 – Feb 2026',
    location: 'Pune, India',
    type: 'Full-time',
    summary: 'Spearheaded full stack development of enterprise-scale web applications, AI tools, and commercial real estate platforms for global Fortune 500 clients including CBRE.',
    projectsHighlighted: [
      'AI-Accelerator',
      'PIP Hotels — CBRE',
      'Canada Plus — CBRE',
      'Training Management System'
    ],
    keyContributions: [
      'Engineered responsive SPAs using Angular and React, paired with high-throughput ASP.NET Core Web APIs and EF Core.',
      'Implemented robust reactive state management with NgRx and RxJS, preventing unnecessary DOM reflows and standardizing state contracts.',
      'Architected and integrated modern AI features including RAG pipelines, Azure OpenAI endpoints, and intelligent document parsing.',
      'Achieved up to 10x performance gains through code-splitting, lazy loading, query indexing, and caching strategies.',
      'Constructed automated CI/CD pipelines in Azure DevOps, accelerating release cycles while maintaining enterprise code quality standards.',
      'Provided end-to-end production support, proactive telemetry monitoring, and rapid resolution of SLA-critical incidents.'
    ],
    technologies: ['Angular', 'React', 'C#', '.NET Core', 'ASP.NET Core Web API', 'EF Core', 'NgRx', 'RxJS', 'Azure DevOps', 'Azure Functions', 'SQL Server', 'Azure OpenAI', 'RAG']
  },
  {
    id: 'pawar',
    company: 'Pawar Tech Services Pvt. Ltd.',
    role: 'Technical Trainee – Industrial Training (Full Stack)',
    period: 'Mar 2022 – Sep 2022',
    location: 'Pune, India',
    type: 'Internship / Training',
    summary: 'Underwent intensive industrial software engineering training, designing and delivering an end-to-end commercial restaurant point-of-sale system.',
    projectsHighlighted: ['Cafe POS'],
    keyContributions: [
      'Developed core POS modules including live menu cataloging, table order tracking, invoice generation, and tax computations.',
      'Built normalized relational database schemas in MySQL with optimized queries for real-time sales reporting.',
      'Integrated responsive UI layouts with RESTful API endpoints for seamless cashier and kitchen terminal interaction.',
      'Participated in daily agile standups, code walkthroughs, and automated unit testing cycles.'
    ],
    technologies: ['Angular', 'C#', '.NET Core', 'REST APIs', 'MySQL', 'Bootstrap', 'Git']
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-accelerator',
    title: 'AI-Accelerator',
    subtitle: 'Enterprise AI Assistant & Knowledge Discovery Platform',
    category: 'AI & Cloud',
    description: 'An AI-powered conversational application similar to ChatGPT, engineered to deliver contextual intelligence over private company documentation with high precision.',
    extendedDescription: 'Designed as an enterprise-grade conversational AI engine, AI-Accelerator integrates Retrieval-Augmented Generation (RAG) to ground large language models with internal enterprise documentation. Built using modern vector databases and the Model Context Protocol (MCP), it enables autonomous multi-step reasoning, semantic document retrieval, and instant contextual citations.',
    keyFeatures: [
      'Interactive chat interface with real-time token streaming and reasoning trace',
      'Retrieval-Augmented Generation (RAG) with hybrid keyword and vector semantic search',
      'Integration with Azure OpenAI models (GPT-4o) and localized vector indexing',
      'Model Context Protocol (MCP) support for dynamic tool invocation and file retrieval',
      'Role-based data boundary segregation to ensure enterprise privacy and compliance'
    ],
    technologies: ['LLMs', 'RAG', 'AI Agents', 'MCP', 'Embeddings', 'Vector Databases', 'Vercel AI SDK', 'React', '.NET Core', 'Azure OpenAI'],
    architectureHighlights: [
      'Document Ingestion & Chunking Pipeline',
      'High-dimensional Embedding Generation',
      'Context Injection & Grounded Prompt Synthesizer',
      'Streaming Token Protocol via WebSockets / SSE'
    ],
    metrics: '94% retrieval accuracy across 10,000+ internal corporate docs',
    mockupType: 'ai-chat'
  },
  {
    id: 'pip-hotels',
    title: 'PIP Hotels',
    subtitle: 'CBRE Hotel Research & Market Analytics Platform',
    client: 'CBRE',
    category: 'Enterprise',
    description: 'Large-scale hotel industry research, valuation, and market analytics platform developed for commercial real estate leader CBRE.',
    extendedDescription: 'A comprehensive analytical platform that processes hospitality performance datasets (occupancy rates, ADR, RevPAR, supply pipeline) across North American markets. It delivers executive-level dashboards, comparative property benchmarking, and predictive market intelligence to support multi-million dollar commercial investments.',
    keyFeatures: [
      'Dynamic interactive analytics dashboards featuring revenue metrics (ADR, RevPAR, Occupancy)',
      'Multi-variable market filtering by geography, brand affiliation, and asset class',
      'Automated executive PDF/Excel valuation reports generation',
      'Robust role-based access control for brokers, analysts, and enterprise clients'
    ],
    technologies: ['Angular', 'NgRx', 'RxJS', 'C#', '.NET Core', 'ASP.NET Core Web API', 'Azure SQL Database', 'Azure Blob Storage'],
    architectureHighlights: [
      'Normalized Azure SQL Schema with Partitioned Analytics Tables',
      'NgRx Memoized State Selectors for Instant Grid Filtering',
      'Micro-Frontend Architecture for Analytical Modules',
      'Azure Blob Storage for Report Archival'
    ],
    metrics: 'Handled analytics for 5,000+ hospitality assets nationwide',
    mockupType: 'analytics-dashboard'
  },
  {
    id: 'canada-plus',
    title: 'Canada Plus',
    subtitle: 'CBRE Commercial Real Estate Property Management Platform',
    client: 'CBRE',
    category: 'Enterprise',
    description: 'Commercial real estate portfolio management and deal workflow application built for CBRE Canadian operations.',
    extendedDescription: 'A mission-critical commercial real estate application unifying property listings, lease negotiations, space utilization, and broker transaction workflows across major Canadian metropolitan hubs. Emphasized extreme frontend responsiveness and seamless API connectivity.',
    keyFeatures: [
      'Interactive spatial floor plans and commercial property inventory grids',
      'Complex deal lifecycle management with stage gates and automated stakeholder notifications',
      'Deep NgRx and Angular performance optimization with OnPush change detection',
      'Comprehensive REST API integration with real-time data sync'
    ],
    technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'ASP.NET Core Web API', 'Entity Framework Core', 'Azure DevOps', 'CI/CD'],
    architectureHighlights: [
      'OnPush Change Detection Strategy across all heavy data tables',
      'Optimized LINQ to SQL queries with projection to slash payload weights',
      'Automated Azure DevOps CI/CD pipeline with strict static analysis'
    ],
    metrics: 'Achieved sub-second page transitions across 100,000+ square foot listings',
    mockupType: 'property-grid'
  },
  {
    id: 'training-management-system',
    title: 'Training Management System (TMS)',
    subtitle: 'Internal Corporate Employee Learning & Compliance Portal',
    category: 'Full Stack',
    description: 'Enterprise internal employee learning portal facilitating curriculum distribution, compliance certification, and skill progression tracking.',
    extendedDescription: 'Engineered an intuitive internal LMS allowing HR and department heads to author learning paths, schedule mandatory compliance exams, and monitor employee completion timelines with automated reminders and supervisor escalations.',
    keyFeatures: [
      'Course authoring and multimedia lesson delivery with video tracking',
      'Interactive quizzes with immediate validation and certification generation',
      'Custom Angular directives for accessibility and keyboard navigation',
      'Reactive state synchronization using NgRx and RxJS stream pipelines'
    ],
    technologies: ['Angular', 'RxJS', 'NgRx', 'Custom Directives', '.NET Core', 'SQL Server', 'Tailwind CSS'],
    architectureHighlights: [
      'Modular Lazy-Loaded Feature Modules for minimal initial bundle size',
      'Custom Angular Directives for Role-Based UI Element Rendering',
      'Audit Logging for Compliance Verification'
    ],
    metrics: 'Active learning platform for 500+ employees with 99.8% course completion compliance',
    mockupType: 'lms-portal'
  },
  {
    id: 'cafe-pos',
    title: 'Cafe POS',
    subtitle: 'Full-Stack Restaurant & Cafe Point-of-Sale Solution',
    category: 'Full Stack',
    description: 'Full-stack restaurant/cafe point-of-sale application with menu configuration, kitchen dispatching, live billing, and daily sales accounting.',
    extendedDescription: 'Developed during industrial software engineering training at Pawar Tech Services. Created a comprehensive, rapid-response POS system suited for high-turnover cafe counters and table-service restaurants.',
    keyFeatures: [
      'Dynamic menu builder with category modifiers, discounts, and tax groups',
      'Table layout management with live occupancy and split-bill ordering',
      'Receipt printing formatting and payment gateway simulation',
      'Daily end-of-day sales reconciliation and inventory depletion alerts'
    ],
    technologies: ['Angular', 'C#', '.NET Core', 'REST APIs', 'MySQL', 'Bootstrap'],
    architectureHighlights: [
      'Normalized Relational Schema in MySQL with Foreign Key Constraints',
      'Repository Pattern in .NET Core for testable data access',
      'Optimized bill calculation engine handling multi-tier tax computations'
    ],
    metrics: 'Reduced checkout order processing time by 40%',
    mockupType: 'pos-system'
  }
];

export const ENGINEERING_HIGHLIGHTS: EngineeringHighlight[] = [
  {
    id: 'performance',
    title: '10x Application Performance Optimization',
    category: 'Performance',
    metric: '10x Faster',
    description: 'Systematically diagnosed and eradicated computational bottlenecks across frontend rendering and backend database access layers.',
    technicalDetails: [
      'Implemented Angular OnPush change detection and immutable state patterns',
      'Optimized heavy DOM data grids using virtual scrolling techniques',
      'Rewrote inefficient EF Core queries with explicit projections and index tuning',
      'Configured bundle code-splitting and asset compression, cutting initial load by 68%'
    ],
    icon: 'Zap'
  },
  {
    id: 'state-management',
    title: 'Reactive State Management with NgRx/RxJS',
    category: 'Architecture',
    metric: 'Zero Reflow Glitches',
    description: 'Architected deterministic, predictable unidirectional data flows across complex enterprise dashboards.',
    technicalDetails: [
      'Engineered normalized NgRx entity stores with memoized createSelector functions',
      'Orchestrated side effects and asynchronous data fetching via NgRx Effects',
      'Leveraged advanced RxJS stream operators (switchMap, debounceTime, distinctUntilChanged)',
      'Eliminated state duplication and eradicated race conditions in multi-filter grids'
    ],
    icon: 'Workflow'
  },
  {
    id: 'rest-api',
    title: 'Enterprise REST API Development',
    category: 'Backend',
    metric: 'Enterprise Grade',
    description: 'Designed secure, scalable, and versioned RESTful APIs utilizing ASP.NET Core Web API and modern C# patterns.',
    technicalDetails: [
      'Applied Clean Architecture with Repository Pattern and Unit of Work',
      'Structured JWT authentication, role-based authorization, and custom action filters',
      'Implemented Global Exception Handling and structured Serilog telemetry',
      'Enforced strict contract testing and auto-generated OpenAPI / Swagger specs'
    ],
    icon: 'Server'
  },
  {
    id: 'azure-cloud',
    title: 'Azure Cloud Deployment & Scaling',
    category: 'Cloud',
    metric: '99.9% Uptime',
    description: 'Provisioned resilient, cost-effective Microsoft Azure cloud infrastructure supporting production workloads.',
    technicalDetails: [
      'Configured Azure App Service plans with auto-scaling rules based on CPU/RAM load',
      'Leveraged Azure Functions for scheduled data consolidation and trigger jobs',
      'Stored unstructured business files in secure Azure Blob Storage with SAS tokens',
      'Managed Azure SQL Database backups, elastic pools, and geo-redundancy'
    ],
    icon: 'Cloud'
  },
  {
    id: 'cicd-devops',
    title: 'CI/CD Automation in Azure DevOps',
    category: 'DevOps',
    metric: 'Zero-Downtime Deployments',
    description: 'Built robust multi-stage deployment pipelines from source control commit to production release.',
    technicalDetails: [
      'Crafted multi-stage YAML pipelines in Azure DevOps for build, test, and deployment',
      'Integrated automated unit test runners and code quality scanning gates',
      'Configured deployment slot swapping in Azure App Services for zero downtime',
      'Standardized branch policies, pull request approvals, and semantic versioning'
    ],
    icon: 'GitPullRequest'
  },
  {
    id: 'ai-rag',
    title: 'AI & RAG Integration',
    category: 'Artificial Intelligence',
    metric: 'Groundbreaking Precision',
    description: 'Bridged large language models with enterprise proprietary data stores to deliver hallucination-resistant AI systems.',
    technicalDetails: [
      'Constructed end-to-end RAG workflows with chunking, embedding, and vector indexing',
      'Integrated Azure OpenAI GPT-4o deployments with system prompt boundaries',
      'Implemented Model Context Protocol (MCP) tools for dynamic querying',
      'Employed Azure Document Intelligence for automated unstructured data extraction'
    ],
    icon: 'Sparkles'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'MCA — Master of Computer Applications',
    institution: 'Dr. D. Y. Patil Institute of Master of Computer Applications and Management',
    location: 'Pune, Maharashtra',
    period: '2020 – 2022',
    score: 'First Class with Distinction'
  },
  {
    degree: 'BCA — Bachelor of Computer Applications',
    institution: 'Dr. D. Y. Patil Arts, Commerce and Science College',
    location: 'Pune, Maharashtra',
    period: '2017 – 2020',
    score: 'First Class with Distinction'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    code: 'AI-900',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    badgeColor: 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300',
    verifiedYear: 'Verified',
    skills: ['Azure OpenAI', 'Machine Learning', 'Computer Vision', 'NLP', 'Responsible AI']
  },
  {
    code: 'AZ-900',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    badgeColor: 'border-blue-500/30 bg-blue-950/20 text-blue-300',
    verifiedYear: 'Verified',
    skills: ['Cloud Concepts', 'Azure Architecture', 'Azure Services', 'Management & Governance']
  },
  {
    code: 'Angular Level 1',
    title: 'Angular Certification (Level 1)',
    issuer: 'Google Developer Experts',
    badgeColor: 'border-rose-500/30 bg-rose-950/20 text-rose-300',
    verifiedYear: 'Verified',
    skills: ['Components', 'Directives', 'Services & DI', 'Routing', 'Forms & Observables']
  }
];

export const CAREER_JOURNEY_STATEMENT = {
  quote: 'After completing my professional experience at Imriel Technology Solutions, I took a temporary career break due to personal/family responsibilities. I am now fully available and actively seeking full-time opportunities.',
  highlights: [
    'Fully available immediately for full-time employment',
    'Open to Remote, Hybrid, or On-site roles (Pune / Pan-India / Relocation)',
    'Continuously active in modern AI stacks (RAG, MCP, Azure AI) and latest Angular/.NET releases',
    'Committed to long-term engineering excellence in a forward-thinking engineering organization'
  ]
};
