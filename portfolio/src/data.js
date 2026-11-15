// Everything the site says lives here. Edit this file to change the content.

export const links = {
  email: 'vagirahamed@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohammed-noufal-v-972353329/',
  github: 'https://github.com/Noufalthecoder',
  leetcode: 'https://leetcode.com/u/noufalthedev',
  resume: '/Mohammed_Noufal_V_Resume.pdf',
};

export const hero = {
  role: 'AI Engineer / Full-Stack Developer',
  first: 'Mohammed',
  last: 'Noufal',
  pitch: 'I build agentic AI systems and the products around them, and I ship them fast enough to win hackathons.',
  facts: [
    { n: '10+', label: 'Hackathon wins' },
    { n: '4', label: 'Internships' },
    { n: '700+', label: 'LeetCode solved' },
  ],
};

export const about = {
  lead: 'I’m a B.Tech IT student at Chennai Institute of Technology who spends most of his time shipping: agent workflows in production, backends that hold up under load, and weekend builds that have to work by Sunday night.',
  meta: [
    ['Based in', 'Chennai, India'],
    ['Studying', 'B.Tech IT, 2024–2028'],
    ['CGPA', '8.5 / 10'],
    ['Focus', 'Agentic AI, backend, full-stack'],
  ],
};

export const work = [
  {
    id: 'pivaani',
    name: 'Pi Vaani',
    tagline: 'The Bharosa layer for UPI',
    summary: 'When a UPI payment hangs, the customer taps again and pays twice. Pi Vaani turns the Paytm Soundbox into a resolution engine that speaks up, blocks the retap and settles the case.',
    points: [
      'Event-driven resolution engine with idempotent payment handling and async concurrency control, so duplicate charges cannot happen.',
      'A 7-gate trust firewall: graph-based fraud detection, transaction verification, merchant authorization and a tamper-evident audit trail.',
    ],
    stack: ['Python', 'FastAPI', 'NetworkX', 'WebSockets', 'React', 'Sarvam AI'],
    image: '/img/work/pivaani.jpg',
    code: 'https://github.com/Noufalthecoder/pivaani',
  },
  {
    id: 'recongraph',
    name: 'ReconGraph',
    tagline: 'AI-powered financial reconciliation',
    summary: 'Payments, refunds, settlements and bank transactions rarely agree. ReconGraph traces every rupee through one evidence-backed graph and explains what went wrong.',
    points: [
      'Deterministic reconciliation engine over 465 financial records that caught all 24 injected anomalies.',
      'An evidence-grounded AI investigator with graph tracing and read-only tools: 100% precision, recall and F1 on synthetic benchmarks.',
    ],
    stack: ['Python', 'Graph analytics', 'RAG', 'LLMs'],
    image: '/img/work/recongraph.jpg',
    live: 'https://recongraph.vercel.app',
    code: 'https://github.com/Noufalthecoder/recongraph',
  },
  {
    id: 'sovra',
    name: 'Sovra',
    tagline: 'Sovereign agentic AI platform',
    summary: 'An air-gapped AI platform for engineering teams that cannot send data to the cloud. Local models, grounded retrieval and agents that stay inside policy.',
    points: [
      'Runs Llama 3.1 8B and Qwen2.5 7B through Ollama with RAG, multi-agent orchestration and task-based model routing.',
      'Policy-controlled workflows over MCP with persistent agent memory, context isolation and Docker-sandboxed tool execution.',
    ],
    stack: ['LangGraph', 'LangChain', 'MCP', 'LlamaIndex', 'RAG', 'Ollama'],
    poster: ['Air-gapped.', 'Local models.', 'Policy-controlled.'],
  },
];

export const more = [
  { name: 'RulyOS', line: 'A financial control plane for autonomous AI agents.', image: '/img/work/rulyos.jpg', href: 'https://rulyos.vercel.app' },
  { name: 'Vanakkam', line: 'An AI beauty studio that matches looks to real product shades.', image: '/img/work/vanakkam.jpg', href: 'https://vanakkam-lovat.vercel.app' },
  { name: 'Catalyst', line: 'Messy industrial catalog data turned into validated product information.', image: '/img/work/catalyst.jpg', href: 'https://github.com/Noufalthecoder/catalyst' },
  { name: 'DaNA', line: 'Premarital genetic screening explained simply for couples.', image: '/img/work/dana.jpg', href: 'https://dana-gamma-seven.vercel.app' },
];

export const experience = [
  {
    role: 'Backend AI Engineer Intern', company: 'Flyrank.ai', when: 'May – Aug 2026', where: 'Remote, USA',
    metric: ['45 → 5', 'minutes per SEO task'],
    points: [
      'Built LangGraph + MCP agent workflows that automate keyword research and content briefs.',
      'Designed async Kafka + Redis pipelines handling 500+ tasks a day; caching cut repeat LLM calls by about 35%.',
      'Shipped 4 production agent workflows with vector retrieval.',
    ],
  },
  {
    role: 'SDE Intern', company: 'L2M Labs', when: 'Jan – Mar 2026', where: 'Chennai',
    metric: ['420 → 120', 'ms p95 response time'],
    points: [
      'Built a microservices CRM platform: 6 services and 25+ REST endpoints.',
      'Deployed on AWS EC2 and S3 with Docker, cutting environment setup from about 2 hours to under 10 minutes.',
      'Added Redis caching on hot endpoints, measured under 100 concurrent requests.',
    ],
  },
  {
    role: 'Machine Learning Intern', company: 'Alfido Tech', when: 'Oct – Nov 2025', where: 'Hyderabad',
    metric: ['76 → 88%', 'model accuracy'],
    points: [
      'Trained TensorFlow models on a 50K-row dataset, reaching 0.85 F1 after tuning.',
      'Built a preprocessing pipeline that cut data prep time by about 50%.',
    ],
  },
  {
    role: 'Web Developer Intern', company: 'Elevate Labs', when: 'Sep – Oct 2025', where: 'Remote, USA',
    metric: ['< 1 min', 'to detect an issue'],
    points: [
      'Containerized 3 services with Docker and deployed them on AWS.',
      'Set up Prometheus, Grafana and OpenTelemetry dashboards and alerts for latency, errors and resource use.',
    ],
  },
];

export const wins = [
  { place: 'Winner', event: 'Moonshot International', by: 'MongoDB, AETHRA', built: 'AquaPercent.ai, intelligent water infrastructure management' },
  { place: 'Winner', event: 'OpsFusion', by: 'Swiggy & IFMR Krea University', built: 'Multi-cart ordering with optimized single-rider delivery routing' },
  { place: 'Winner', event: 'Agent.AI Challenge', by: 'agent.ai', built: 'An AI sales agent for lead generation, follow-ups and CRM conversions' },
  { place: 'Winner', event: 'Agent Build Day', by: 'HackerEarth', built: 'A witty, context-aware AI business agent for customer engagement' },
  { place: 'Runner-up', event: 'National Startup Summit', by: 'AICCI, StartupTN', built: 'Salt-pan monitoring and an Artemia B2B marketplace' },
];

// The scroll-through story in the Wins section. `inset` is an optional second photo.
export const story = {
  kicker: 'Behind the trophies',
  title: ['How a win', 'actually', 'happens.'],
  chapters: [
    { title: 'Build.', text: 'It starts with a laptop, a problem and not enough hours. Most of a hackathon looks exactly like this.',
      image: '/img/story/desk.jpg', alt: 'Noufal working at a laptop during a hackathon' },
    { title: 'Pitch.', text: 'Then you stand up and defend it. This is Pannai Smart Pan, salt-pan monitoring and an Artemia marketplace, in front of the jury at the AICCI National Startup Summit.',
      image: '/img/story/pitch.jpg', alt: 'Noufal pitching on stage with his team', inset: '/img/story/slide.jpg', insetAlt: 'The validation slide from the pitch' },
    { title: 'Team.', text: 'Nobody ships alone. The team at the National Startup Summit in Thoothukudi.',
      image: '/img/story/team.jpg', alt: 'The team at the National Startup Summit' },
    { title: 'Win.', text: 'Sometimes it ends with a trophy in your hands and the whole team on stage.',
      image: '/img/story/trophy.jpg', alt: 'Noufal holding a trophy', pos: 'center 18%', inset: '/img/story/cheque.jpg', insetAlt: 'The team receiving the prize cheque on stage' },
    { title: 'Go bigger.', text: 'Moonshot Hackathon 2026: Outstanding Innovation Award, Civilization Impact Award and a top-100 finish as Team Impact Minds.',
      image: '/img/story/moonshot.jpg', alt: 'Moonshot Hackathon 2026 winners poster for Team Impact Minds', fit: 'contain' },
    { title: 'Repeat.', text: 'Then do it again. Agent Build Day at HackerEarth, Prism at CIT, and whatever comes next.',
      image: '/img/story/hackerearth.jpg', alt: 'Noufal at the HackerEarth office', inset: '/img/story/prism.jpg', insetAlt: 'On stage at the Prism hackathon at Chennai Institute of Technology' },
  ],
};

export const numbers = [
  { n: 700, suffix: '+', label: 'LeetCode problems solved' },
  { n: 1750, suffix: '+', label: 'LeetCode contest rating, top 10% globally' },
  { n: 200, suffix: '+', label: 'CodeChef problems solved' },
  { n: 150, suffix: '+', label: 'SkillRack challenges solved' },
];

export const certifications = [
  ['AWS Certified AI Practitioner (AIF-C01)', 'Amazon'],
  ['Google Cloud Cybersecurity', 'Google'],
  ['CyberOps Associate', 'Cisco'],
  ['AWS Cloud Practitioner Essentials', 'Amazon'],
  ['Data Analytics with Python', 'NPTEL'],
  ['GenAI Powered Data Analytics', 'Tata'],
];

// [name, logo slug in logos.json (optional), brand colour]
export const stack = [
  { label: 'Languages', items: [['Python', 'python', '#3776AB'], ['TypeScript', 'typescript', '#3178C6'], ['JavaScript', 'javascript', '#E8C500'], ['Java', 'openjdk', '#E76F00'], ['SQL']] },
  { label: 'Agentic AI & LLMs', items: [['LangGraph', 'langgraph', '#1C3C3C'], ['LangChain', 'langchain', '#1C3C3C'], ['MCP', 'modelcontextprotocol', '#101114'], ['Ollama', 'ollama', '#101114'], ['LlamaIndex'], ['RAG'], ['Tool calling'], ['Agent memory']] },
  { label: 'AI & ML', items: [['PyTorch', 'pytorch', '#EE4C2C'], ['TensorFlow', 'tensorflow', '#FF6F00'], ['scikit-learn', 'scikitlearn', '#F7931E'], ['OpenCV', 'opencv', '#5C3EE8'], ['ONNX Runtime', 'onnx', '#005CED'], ['NumPy', 'numpy', '#4D77CF'], ['Pandas', 'pandas', '#150458']] },
  { label: 'Full-stack', items: [['React', 'react', '#149ECA'], ['Next.js', 'nextdotjs', '#101114'], ['Node.js', 'nodedotjs', '#5FA04E'], ['Express', 'express', '#101114'], ['FastAPI', 'fastapi', '#009688'], ['GraphQL', 'graphql', '#E10098'], ['PostgreSQL', 'postgresql', '#4169E1'], ['Redis', 'redis', '#FF4438'], ['Firebase', 'firebase', '#DD2C00'], ['Angular'], ['Spring Boot']] },
  { label: 'Cloud & DevOps', items: [['AWS', 'amazonwebservices', '#FF9900'], ['Google Cloud', 'googlecloud', '#4285F4'], ['Docker', 'docker', '#2496ED'], ['Kafka', 'apachekafka', '#231F20'], ['Linux', 'linux', '#101114'], ['Git', 'git', '#F05032'], ['CI/CD']] },
  { label: 'MLOps & Observability', items: [['MLflow', 'mlflow', '#0194E2'], ['Prometheus', 'prometheus', '#E6522C'], ['Grafana', 'grafana', '#F46800'], ['OpenTelemetry', 'opentelemetry', '#425CC7'], ['Postman', 'postman', '#FF6C37'], ['LangSmith']] },
];

export const marquee = ['LangGraph', 'MCP', 'RAG', 'FastAPI', 'Kafka', 'Redis', 'PyTorch', 'Next.js', 'AWS', 'Docker'];
