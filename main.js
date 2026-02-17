import './style.css';

// ===== AGENT DATA =====
const agents = [
  {
    id: 'openclaw',
    name: 'OpenClaw',
    color: '#fb923c',
    thClass: 'th-openclaw',
    lang: 'TypeScript',
    desc: 'Full-featured, self-hosted personal AI assistant. Multi-channel communication, persistent memory, extensible skills, proactive heartbeat, and autonomous code generation.',
    tags: ['WhatsApp', 'Telegram', 'Discord', 'Slack', 'Voice', 'Camera', 'Multi-Agent', 'Heartbeat', 'Browser'],
    archInfo: {
      type: 'Monolithic CLI + Gateway',
      security: 'Process-level isolation',
      runtime: 'Node.js / TypeScript CLI',
      diagram: '┌──────────────────────────┐\n│      OpenClaw Core       │\n│  ┌────────┐ ┌──────────┐ │\n│  │ Skills │ │ Channels │ │\n│  │ Engine │ │ Gateway  │ │\n│  └───┬────┘ └────┬─────┘ │\n│      │           │       │\n│  ┌───┴───────────┴─────┐ │\n│  │   LLM Provider API  │ │\n│  └─────────────────────┘ │\n└──────────────────────────┘'
    }
  },
  {
    id: 'zeroclaw',
    name: 'ZeroClaw',
    color: '#6382ff',
    thClass: 'th-zeroclaw',
    lang: 'Rust',
    desc: 'Rust-first autonomous AI agent runtime. Ultra-efficient (<5MB RAM), trait-driven modular architecture, strict sandboxing, and 22+ AI provider integrations.',
    tags: ['Rust', '<5MB RAM', 'Sandboxed', '22+ Providers', 'Cron Jobs', 'Modular'],
    archInfo: {
      type: 'Modular Runtime (Trait-driven)',
      security: 'Kernel Jailbox / Strict Sandboxing',
      runtime: 'Native Rust Binary',
      diagram: '┌──────────────────────────┐\n│     ZeroClaw Runtime     │\n│  ┌────────┐ ┌──────────┐ │\n│  │ Traits │ │ Provider │ │\n│  │ Engine │ │ Registry │ │\n│  └───┬────┘ └────┬─────┘ │\n│      │           │       │\n│  ┌───┴───┐ ┌────┴─────┐ │\n│  │ Tools │ │ Channels │ │\n│  └───────┘ └──────────┘ │\n│  ┌─────────────────────┐ │\n│  │  Kernel Jailbox     │ │\n│  └─────────────────────┘ │\n└──────────────────────────┘'
    }
  },
  {
    id: 'nanoclaw',
    name: 'NanoClaw',
    color: '#22d3ee',
    thClass: 'th-nanoclaw',
    lang: 'TypeScript',
    desc: 'Security-first personal AI assistant with container isolation. ~500 lines of code, agent swarms via Anthropic SDK, and primary WhatsApp integration.',
    tags: ['Container Isolated', '~500 LoC', 'Agent Swarms', 'WhatsApp Primary', 'Anthropic SDK'],
    archInfo: {
      type: 'Containerized Agent Swarm',
      security: 'Container VM Isolation',
      runtime: 'Node.js + Container Runtime',
      diagram: '┌────────────────────────────┐\n│       Host System          │\n│  ┌──────────────────────┐  │\n│  │ NanoClaw Orchestrator │  │\n│  └──────────┬───────────┘  │\n│     ┌───────┼───────┐      │\n│  ┌──┴──┐ ┌──┴──┐ ┌──┴──┐  │\n│  │ VM1 │ │ VM2 │ │ VM3 │  │\n│  │Agent│ │Agent│ │Agent│  │\n│  └─────┘ └─────┘ └─────┘  │\n│  ┌──────────────────────┐  │\n│  │  Anthropic Agent SDK │  │\n│  └──────────────────────┘  │\n└────────────────────────────┘'
    }
  },
  {
    id: 'nanobot',
    name: 'NanoBot',
    color: '#a855f7',
    thClass: 'th-nanobot',
    lang: 'Python',
    desc: 'Ultra-lightweight MCP-to-Agent transformer. ~4000 lines of Python, turns any MCP server into a full-featured AI agent with tool orchestration and rich UI.',
    tags: ['MCP Native', '~4000 LoC', 'Python', 'Tool Orchestration', 'Research-Oriented'],
    archInfo: {
      type: 'MCP Agent Wrapper',
      security: 'Inherits from host / container',
      runtime: 'Python',
      diagram: '┌──────────────────────────┐\n│      NanoBot Agent       │\n│  ┌────────┐ ┌──────────┐ │\n│  │Reasoner│ │ MCP-UI   │ │\n│  └───┬────┘ └────┬─────┘ │\n│      │           │       │\n│  ┌───┴───────────┴─────┐ │\n│  │   MCP Server Layer  │ │\n│  │  ┌─────┐ ┌────────┐ │ │\n│  │  │Tools│ │ Memory │ │ │\n│  │  └─────┘ └────────┘ │ │\n│  └─────────────────────┘ │\n└──────────────────────────┘'
    }
  },
  {
    id: 'picoclaw',
    name: 'PicoClaw',
    color: '#34d399',
    thClass: 'th-picoclaw',
    lang: 'Go',
    desc: 'Ultra-lightweight personal AI for resource-constrained devices. <10MB RAM, single binary, runs on $10 hardware (RISC-V/ARM/x86_64). 95% AI-bootstrapped code.',
    tags: ['Go', '<10MB RAM', 'Single Binary', 'RISC-V', 'ARM', 'GPIO', 'Embedded'],
    archInfo: {
      type: 'Single Binary Agent',
      security: 'Container VM / Sandboxed Workspace',
      runtime: 'Go Static Binary',
      diagram: '┌──────────────────────────┐\n│   PicoClaw (Single Bin)  │\n│  ┌────────┐ ┌──────────┐ │\n│  │ Agent  │ │ Channel  │ │\n│  │ Loop   │ │ Handler  │ │\n│  └───┬────┘ └────┬─────┘ │\n│      │           │       │\n│  ┌───┴───┐ ┌────┴─────┐ │\n│  │ Tools │ │   GPIO   │ │\n│  └───────┘ └──────────┘ │\n│  ┌─────────────────────┐ │\n│  │  Sandbox Workspace  │ │\n│  └─────────────────────┘ │\n└──────────────────────────┘'
    }
  },
  {
    id: 'ironclaw',
    name: 'IronClaw',
    color: '#94a3b8',
    thClass: 'th-ironclaw',
    lang: 'Rust + Python',
    desc: 'Privacy-first agentic AI runtime with ephemeral Micro-VM isolation. Rust orchestrator + Python agent logic (<4000 LoC). Zero host execution, WASM sandboxed tools.',
    tags: ['Micro-VM', 'WASM Sandbox', 'Rust+Python', 'Zero Host Exec', 'Approval Cliff', 'Ephemeral'],
    archInfo: {
      type: 'Hybrid Orchestrator + Micro-VM',
      security: 'WASM Sandbox + Ephemeral Micro-VMs',
      runtime: 'Rust (orchestrator) + Python (agent)',
      diagram: '┌────────────────────────────┐\n│     Rust Orchestrator      │\n│  ┌──────────────────────┐  │\n│  │ VM Spawner + Memory  │  │\n│  └──────────┬───────────┘  │\n│     ┌───────┼───────┐      │\n│  ┌──┴───┐  ┌┴────┐ ┌┴───┐ │\n│  │MicroVM│ │WASM │ │WASM│ │\n│  │Python │ │Tool1│ │Tool│ │\n│  │Agent  │ │     │ │  2 │ │\n│  └──────┘  └─────┘ └────┘ │\n│  (ephemeral, destroyed     │\n│   after task completion)   │\n└────────────────────────────┘'
    }
  },
  {
    id: 'tinyclaw',
    name: 'TinyClaw',
    color: '#f472b6',
    thClass: 'th-tinyclaw',
    lang: 'TS/Bash',
    desc: 'Multi-agent framework for collaborative AI agent teams. Parallel processing, live TUI dashboard, multi-channel support, and persistent sessions.',
    tags: ['Multi-Team', 'Parallel', 'TUI Dashboard', 'Discord', 'WhatsApp', 'Telegram', 'Fan-out'],
    archInfo: {
      type: 'Multi-Agent Collaboration Hub',
      security: 'Sender pairing / Agent isolation',
      runtime: 'Node.js / TypeScript + Bash scripts',
      diagram: '┌────────────────────────────┐\n│    TinyClaw Orchestrator   │\n│  ┌──────┐ ┌──────┐ ┌────┐ │\n│  │Team A│ │Team B│ │ .. │ │\n│  │┌────┐│ │┌────┐│ │    │ │\n│  ││Agt1││ ││Agt3││ │    │ │\n│  ││Agt2││ ││Agt4││ │    │ │\n│  │└────┘│ │└────┘│ │    │ │\n│  └──┬───┘ └──┬───┘ └──┬─┘ │\n│     └────┬───┘        │   │\n│   ┌──────┴────────────┴┐  │\n│   │ Channel Multiplexer│  │\n│   └────────────────────┘  │\n└────────────────────────────┘'
    }
  },
  {
    id: 'agentzero',
    name: 'Agent Zero',
    color: '#fbbf24',
    thClass: 'th-agentzero',
    lang: 'Python',
    desc: 'General-purpose, transparent AI agent framework. Hierarchical multi-agent, persistent memory, Docker isolation, self-extending tools, and full Web UI.',
    tags: ['Python', 'Web UI', 'Docker', 'Hierarchical', 'Self-Extending', 'Transparent'],
    archInfo: {
      type: 'Hierarchical Agent System',
      security: 'Docker Container Isolation',
      runtime: 'Python + Docker',
      diagram: '┌────────────────────────────┐\n│       Agent Zero Core      │\n│  ┌──────────────────────┐  │\n│  │    Primary Agent     │  │\n│  │  ┌────────────────┐  │  │\n│  │  │ Sub-Agent Pool │  │  │\n│  │  │  ┌───┐ ┌───┐   │  │  │\n│  │  │  │SA1│ │SA2│   │  │  │\n│  │  │  └───┘ └───┘   │  │  │\n│  │  └────────────────┘  │  │\n│  └──────────┬───────────┘  │\n│  ┌──────────┴───────────┐  │\n│  │   Docker Container   │  │\n│  │  ┌─────┐ ┌────────┐  │  │\n│  │  │Tools│ │ Memory │  │  │\n│  │  └─────┘ └────────┘  │  │\n│  └──────────────────────┘  │\n└────────────────────────────┘'
    }
  }
];

// ===== FEATURE MATRIX DATA =====
// status: 'yes' | 'partial' | 'no' | string (special text)
const featureMatrix = [
  { category: 'Core' },
  {
    feature: 'Language',
    openclaw: { text: 'TypeScript', cls: 'cell-special' },
    zeroclaw: { text: 'Rust', cls: 'cell-special' },
    nanoclaw: { text: 'TypeScript', cls: 'cell-special' },
    nanobot: { text: 'Python', cls: 'cell-special' },
    picoclaw: { text: 'Go', cls: 'cell-special' },
    ironclaw: { text: 'Rust', cls: 'cell-special' },
    tinyclaw: { text: 'TS/Bash', cls: 'cell-special' },
    agentzero: { text: 'Python', cls: 'cell-special' },
  },
  {
    feature: 'Codebase Size',
    openclaw: { text: 'Large', cls: 'cell-special' },
    zeroclaw: { text: 'Medium', cls: 'cell-special' },
    nanoclaw: { text: '~500 LoC', cls: 'cell-yes' },
    nanobot: { text: '~4000 LoC', cls: 'cell-yes' },
    picoclaw: { text: 'Small', cls: 'cell-yes' },
    ironclaw: { text: '<4000 LoC', cls: 'cell-yes' },
    tinyclaw: { text: 'Medium', cls: 'cell-special' },
    agentzero: { text: 'Large', cls: 'cell-special' },
  },
  {
    feature: 'License',
    openclaw: { text: 'Open Source', cls: 'cell-yes' },
    zeroclaw: { text: 'Open Source', cls: 'cell-yes' },
    nanoclaw: { text: 'Open Source', cls: 'cell-yes' },
    nanobot: { text: 'Open Source', cls: 'cell-yes' },
    picoclaw: { text: 'Open Source', cls: 'cell-yes' },
    ironclaw: { text: 'Open Source', cls: 'cell-yes' },
    tinyclaw: { text: 'Open Source', cls: 'cell-yes' },
    agentzero: { text: 'Open Source', cls: 'cell-yes' },
  },
  {
    feature: 'First Release',
    openclaw: { text: '2024', cls: 'cell-special' },
    zeroclaw: { text: '2025', cls: 'cell-special' },
    nanoclaw: { text: '2025', cls: 'cell-special' },
    nanobot: { text: '2025', cls: 'cell-special' },
    picoclaw: { text: '2025', cls: 'cell-special' },
    ironclaw: { text: '2025', cls: 'cell-special' },
    tinyclaw: { text: '2025', cls: 'cell-special' },
    agentzero: { text: '2024', cls: 'cell-special' },
  },
  { category: 'Runtime & Deployment' },
  {
    feature: 'Runtime',
    openclaw: { text: 'Node.js', cls: 'cell-special' },
    zeroclaw: { text: 'Native Binary', cls: 'cell-special' },
    nanoclaw: { text: 'Node + Container', cls: 'cell-special' },
    nanobot: { text: 'Python', cls: 'cell-special' },
    picoclaw: { text: 'Static Binary', cls: 'cell-special' },
    ironclaw: { text: 'Rust + Python', cls: 'cell-special' },
    tinyclaw: { text: 'Node.js', cls: 'cell-special' },
    agentzero: { text: 'Python + Docker', cls: 'cell-special' },
  },
  {
    feature: 'Docker Support',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Native', cls: 'cell-primary' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Optional', cls: 'cell-partial' },
    ironclaw: { text: 'Native', cls: 'cell-primary' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Native', cls: 'cell-primary' },
  },
  {
    feature: 'Target Platform',
    openclaw: { text: 'Desktop/Server', cls: 'cell-special' },
    zeroclaw: { text: 'Any (incl. RPi)', cls: 'cell-special' },
    nanoclaw: { text: 'Desktop/Server', cls: 'cell-special' },
    nanobot: { text: 'Desktop/Server', cls: 'cell-special' },
    picoclaw: { text: 'Embedded/$10 HW', cls: 'cell-special' },
    ironclaw: { text: 'Desktop/Server', cls: 'cell-special' },
    tinyclaw: { text: 'Desktop/Server', cls: 'cell-special' },
    agentzero: { text: 'Desktop/Server', cls: 'cell-special' },
  },
  { category: 'Messaging Channels' },
  {
    feature: 'WhatsApp',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Primary', cls: 'cell-primary' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Planned', cls: 'cell-planned' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'Telegram',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Via skill', cls: 'cell-partial' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'Discord',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Slack',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'Web UI',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  { category: 'AI Capabilities' },
  {
    feature: 'Voice Control',
    openclaw: { text: 'Wake Word', cls: 'cell-partial' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: 'Via Groq', cls: 'cell-partial' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'Visual / Camera',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'Multi-Agent',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Config', cls: 'cell-partial' },
    nanoclaw: { text: 'Swarm', cls: 'cell-special' },
    nanobot: { text: 'Spawn', cls: 'cell-special' },
    picoclaw: { text: 'Spawn', cls: 'cell-special' },
    ironclaw: { text: 'Parallel', cls: 'cell-special' },
    tinyclaw: { text: 'Teams', cls: 'cell-special' },
    agentzero: { text: 'Hierarchy', cls: 'cell-special' },
  },
  {
    feature: 'Core Scheduling',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Yes', cls: 'cell-yes' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Heartbeat',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  { category: 'AI Provider Support' },
  {
    feature: 'OpenAI / GPT',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Via Config', cls: 'cell-partial' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Claude / Anthropic',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Primary', cls: 'cell-primary' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Gemini / Google',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Via Config', cls: 'cell-partial' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Local Models (Ollama)',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Via Config', cls: 'cell-partial' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'DeepSeek',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  { category: 'Tools & Integrations' },
  {
    feature: 'Browser Control',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'CDP', cls: 'cell-special' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: 'WebDriver', cls: 'cell-special' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Vision', cls: 'cell-special' },
    tinyclaw: { text: 'CLI tool', cls: 'cell-partial' },
    agentzero: { text: 'SearXNG', cls: 'cell-special' },
  },
  {
    feature: 'MCP Support',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Plugin', cls: 'cell-partial' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: 'Server', cls: 'cell-special' },
  },
  {
    feature: 'File Management',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Yes', cls: 'cell-yes' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Web Search',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Yes', cls: 'cell-yes' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Code Execution',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Yes', cls: 'cell-yes' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  { category: 'Security & Isolation' },
  {
    feature: 'Sandboxing',
    openclaw: { text: 'Process', cls: 'cell-partial' },
    zeroclaw: { text: 'Kernel Jailbox', cls: 'cell-special' },
    nanoclaw: { text: 'Container VM', cls: 'cell-special' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: 'Container VM', cls: 'cell-special' },
    ironclaw: { text: 'WASM Sandbox', cls: 'cell-special' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: 'Docker', cls: 'cell-special' },
  },
  {
    feature: 'Ephemeral VMs',
    openclaw: { text: '—', cls: 'cell-no' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: 'Yes', cls: 'cell-yes' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'Approval Gate',
    openclaw: { text: '—', cls: 'cell-no' },
    zeroclaw: { text: 'Allowlist', cls: 'cell-partial' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Approval Cliff', cls: 'cell-special' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  { category: 'Hardware & Performance' },
  {
    feature: 'GPIO / Hardware Pins',
    openclaw: { text: '—', cls: 'cell-no' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'Embedded Device',
    openclaw: { text: '—', cls: 'cell-no' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: '—', cls: 'cell-no' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: '—', cls: 'cell-no' },
  },
  {
    feature: 'RAM Usage',
    openclaw: { text: '~100MB+', cls: 'cell-partial' },
    zeroclaw: { text: '<5MB', cls: 'cell-yes' },
    nanoclaw: { text: '~50MB', cls: 'cell-partial' },
    nanobot: { text: '~80MB', cls: 'cell-partial' },
    picoclaw: { text: '<10MB', cls: 'cell-yes' },
    ironclaw: { text: '~60MB', cls: 'cell-partial' },
    tinyclaw: { text: '~80MB', cls: 'cell-partial' },
    agentzero: { text: '~200MB+', cls: 'cell-partial' },
  },
  { category: 'Extensibility' },
  {
    feature: 'Persistent Memory',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: 'Yes', cls: 'cell-yes' },
    nanoclaw: { text: 'Per-chat', cls: 'cell-partial' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: 'Encrypted', cls: 'cell-special' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'Self-Extending Skills',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: '—', cls: 'cell-no' },
    nanoclaw: { text: '—', cls: 'cell-no' },
    nanobot: { text: 'Via MCP', cls: 'cell-partial' },
    picoclaw: { text: '—', cls: 'cell-no' },
    ironclaw: { text: '—', cls: 'cell-no' },
    tinyclaw: { text: '—', cls: 'cell-no' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
  {
    feature: 'LLM Agnostic',
    openclaw: { text: 'Yes', cls: 'cell-yes' },
    zeroclaw: { text: '22+ APIs', cls: 'cell-yes' },
    nanoclaw: { text: 'Anthropic', cls: 'cell-partial' },
    nanobot: { text: 'Yes', cls: 'cell-yes' },
    picoclaw: { text: 'Yes', cls: 'cell-yes' },
    ironclaw: { text: 'Yes', cls: 'cell-yes' },
    tinyclaw: { text: 'Yes', cls: 'cell-yes' },
    agentzero: { text: 'Yes', cls: 'cell-yes' },
  },
];



// ===== CONCEPTS DATA =====
const concepts = [
  {
    icon: '🤖',
    title: 'AI Agent',
    text: 'Um software autônomo que pode tomar decisões, executar tarefas e interagir com sistemas externos em nome do usuário, usando LLMs como "cérebro".'
  },
  {
    icon: '🔌',
    title: 'Multi-Channel',
    text: 'Capacidade de se comunicar através de múltiplas plataformas (WhatsApp, Telegram, Discord, Slack) usando uma única instância do agente.'
  },
  {
    icon: '🧠',
    title: 'Persistent Memory',
    text: 'O agente lembra de conversas passadas, preferências do usuário e contexto anterior para interações mais personalizadas ao longo do tempo.'
  },
  {
    icon: '🔒',
    title: 'Sandboxing',
    text: 'Isolamento de segurança que impede o agente de acessar recursos não autorizados do sistema. Varia de containers Docker a Micro-VMs e WASM.'
  },
  {
    icon: '🛠️',
    title: 'Skills / Tools',
    text: 'Capacidades extensíveis que o agente pode aprender e usar — desde pesquisa web e controle de browser até execução de código e GPIO.'
  },
  {
    icon: '👥',
    title: 'Multi-Agent',
    text: 'Múltiplos agentes trabalhando juntos em diferentes padrões: swarms (NanoClaw), teams (TinyClaw), hierarquia (Agent Zero), ou spawn (PicoClaw).'
  },
  {
    icon: '💓',
    title: 'Heartbeat',
    text: 'Mecanismo proativo do OpenClaw que permite ao agente identificar e executar tarefas sem comandos explícitos do usuário.'
  },
  {
    icon: '📡',
    title: 'MCP (Model Context Protocol)',
    text: 'Protocolo padrão que conecta agentes de IA com ferramentas e dados externos. NanoBot é nativo MCP; OpenClaw e IronClaw suportam via plugins.'
  },
];

// ===== VERDICTS DATA =====
const verdicts = [
  {
    icon: '🏆',
    title: 'Most Feature-Complete',
    winner: 'OpenClaw',
    winnerColor: '#fb923c',
    reason: 'WhatsApp, Telegram, Discord, Slack, voice control, camera, heartbeat, browser, multi-agent, persistent memory, self-extending skills — OpenClaw has it all.',
    runners: ['Agent Zero', 'TinyClaw']
  },
  {
    icon: '🔒',
    title: 'Best Security',
    winner: 'IronClaw',
    winnerColor: '#94a3b8',
    reason: 'Ephemeral Micro-VMs, WASM sandboxed tools, zero host execution, and approval cliff make IronClaw the most security-hardened option.',
    runners: ['NanoClaw', 'ZeroClaw']
  },
  {
    icon: '⚡',
    title: 'Most Lightweight',
    winner: 'PicoClaw',
    winnerColor: '#34d399',
    reason: '<10MB RAM, single Go binary, runs on $10 RISC-V/ARM hardware. Perfect for embedded and IoT use cases with GPIO support.',
    runners: ['ZeroClaw (<5MB)', 'NanoClaw (~500 LoC)']
  },
  {
    icon: '👥',
    title: 'Best Multi-Agent',
    winner: 'TinyClaw',
    winnerColor: '#f472b6',
    reason: 'Multi-team collaboration, parallel processing, live TUI dashboard, fan-out patterns, and persistent sessions across restarts.',
    runners: ['Agent Zero (Hierarchy)', 'NanoClaw (Swarm)']
  },
  {
    icon: '🐍',
    title: 'Best for Python Developers',
    winner: 'Agent Zero',
    winnerColor: '#fbbf24',
    reason: 'Full Python codebase, Docker isolation, hierarchical agents, self-extending tools, Web UI,  and full transparency into every prompt and behavior.',
    runners: ['NanoBot', 'IronClaw']
  },
  {
    icon: '🦀',
    title: 'Best Performance',
    winner: 'ZeroClaw',
    winnerColor: '#6382ff',
    reason: 'Rust-native runtime with <5MB RAM usage, trait-driven architecture, 22+ AI providers, and kernel-level sandboxing.',
    runners: ['PicoClaw', 'IronClaw']
  },
  {
    icon: '📱',
    title: 'Best WhatsApp Experience',
    winner: 'NanoClaw',
    winnerColor: '#22d3ee',
    reason: 'WhatsApp is the primary channel with deep integration, agent swarms via Anthropic SDK, and container-isolated security.',
    runners: ['OpenClaw', 'TinyClaw']
  },
  {
    icon: '🔬',
    title: 'Best for Research',
    winner: 'NanoBot',
    winnerColor: '#a855f7',
    reason: 'Clean ~4000-line Python codebase, native MCP support, ultra-readable architecture — ideal for experimenting and extending.',
    runners: ['Agent Zero', 'NanoClaw (~500 LoC)']
  },
];

// ===== RENDER FUNCTIONS =====

function renderAgentGrid() {
  const grid = document.getElementById('agent-grid');
  grid.innerHTML = agents.map((a, i) => `
    <div class="agent-card animate-in" style="--agent-color:${a.color};animation-delay:${i * 80}ms">
      <div class="agent-card__header">
        <span class="agent-card__name">${a.name}</span>
        <span class="agent-card__lang">${a.lang}</span>
      </div>
      <p class="agent-card__desc">${a.desc}</p>
      <div class="agent-card__tags">
        ${a.tags.map(t => `<span class="agent-card__tag agent-card__tag--yes">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderFeatureTable() {
  const thead = document.getElementById('feature-thead');
  const tbody = document.getElementById('feature-tbody');

  thead.innerHTML = `<tr>
    <th>Feature</th>
    ${agents.map(a => `<th class="${a.thClass}">${a.name}</th>`).join('')}
  </tr>`;

  tbody.innerHTML = featureMatrix.map(row => {
    if (row.category) {
      return `<tr class="category-row"><td colspan="${agents.length + 1}">${row.category}</td></tr>`;
    }
    return `<tr>
      <td>${row.feature}</td>
      ${agents.map(a => {
      const cell = row[a.id];
      return `<td class="${cell.cls}">${cell.text}</td>`;
    }).join('')}
    </tr>`;
  }).join('');
}



function renderConcepts() {
  const grid = document.getElementById('concepts-grid');
  grid.innerHTML = concepts.map((c, i) => `
    <div class="concept-card animate-in" style="animation-delay:${i * 60}ms">
      <span class="concept-card__icon">${c.icon}</span>
      <h3 class="concept-card__title">${c.title}</h3>
      <p class="concept-card__text">${c.text}</p>
    </div>
  `).join('');
}

function renderArchitecture() {
  const grid = document.getElementById('arch-grid');
  grid.innerHTML = agents.map((a, i) => `
    <div class="arch-card animate-in" style="--agent-color:${a.color};animation-delay:${i * 70}ms">
      <h3 class="arch-card__name">${a.name}</h3>
      <p class="arch-card__lang">${a.lang}</p>
      <div class="arch-card__section">
        <p class="arch-card__label">Architecture Type</p>
        <p class="arch-card__value">${a.archInfo.type}</p>
      </div>
      <div class="arch-card__section">
        <p class="arch-card__label">Security Model</p>
        <p class="arch-card__value">${a.archInfo.security}</p>
      </div>
      <div class="arch-card__section">
        <p class="arch-card__label">Runtime</p>
        <p class="arch-card__value">${a.archInfo.runtime}</p>
      </div>
      <div class="arch-card__diagram">${a.archInfo.diagram}</div>
    </div>
  `).join('');
}

function renderVerdicts() {
  const grid = document.getElementById('verdicts-grid');
  grid.innerHTML = verdicts.map((v, i) => `
    <div class="verdict-card animate-in" style="animation-delay:${i * 70}ms">
      <span class="verdict-card__icon">${v.icon}</span>
      <h3 class="verdict-card__title">${v.title}</h3>
      <span class="verdict-card__winner" style="background:${v.winnerColor}20;color:${v.winnerColor};border:1px solid ${v.winnerColor}40">
        🏅 ${v.winner}
      </span>
      <p class="verdict-card__reason">${v.reason}</p>
      <div class="verdict-card__runners">
        <p class="verdict-card__runners-label">Runners-up</p>
        ${v.runners.map(r => `<span class="verdict-card__runner-tag">${r}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===== TAB SWITCHING =====
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => { t.classList.remove('tab--active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('panel--active'));

      tab.classList.add('tab--active');
      tab.setAttribute('aria-selected', 'true');

      const panelId = {
        overview: 'panel-overview',
        concepts: 'panel-concepts',
        features: 'panel-features',
        architecture: 'panel-architecture',
        verdicts: 'panel-verdicts',
      }[target];

      const panel = document.getElementById(panelId);
      if (panel) {
        panel.classList.add('panel--active');
        // Re-trigger animations
        panel.querySelectorAll('.animate-in').forEach((el, i) => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), i * 60);
        });
      }
    });
  });
}

// ===== SCROLL ANIMATION OBSERVER =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

// ===== INIT =====
function init() {
  renderAgentGrid();
  renderFeatureTable();
  renderConcepts();
  renderArchitecture();
  renderVerdicts();
  initTabs();

  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll('#panel-overview .animate-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
    initScrollAnimations();
  }, 100);
}

init();
