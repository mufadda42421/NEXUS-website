import { FeatureItem, ProviderItem, InstallStep, FAQItem, DemoTask } from '../types/index.ts';

export const DOWNLOAD_URL = 'https://github.com/mufadda42421/NEXUS-Chrome-Extension/releases/download/v1.0.0/nexus-chrome-extension.zip';
export const DOWNLOAD_FILENAME = 'nexus-chrome-extension.zip';
export const GITHUB_REPO_URL = 'https://github.com/mufadda42421/NEXUS-Chrome-Extension';
export const EXTENSION_VERSION = 'v1.0.0';

export const FEATURES: FeatureItem[] = [
  {
    id: 'agent',
    title: 'Intelligent AI Agent',
    tagline: 'Natural language translated into browser actions',
    description: 'Speak to your browser naturally. NEXUS parses complex user intents, breaks them down into atomic operations, and executes them with surgical precision.',
    icon: 'Bot',
    badge: 'Core Engine',
    colSpan: 'md:col-span-2',
    details: [
      'Intent decomposition with context preservation',
      'Real-time streaming agent thought process',
      'Adaptive error-handling when DOM structures shift',
      'Human-in-the-loop confirmation before sensitive actions'
    ]
  },
  {
    id: 'understanding',
    title: 'Website Understanding',
    tagline: 'Deep semantic DOM parsing and extraction',
    description: 'Instantly distill web pages into structured knowledge. NEXUS strips junk ads, cookie walls, and trackers to read pure article content, pricing tables, or code blocks.',
    icon: 'FileSearch',
    badge: 'Semantic Parser',
    colSpan: 'md:col-span-1',
    details: [
      'Automatic clutter and cookie banner stripping',
      'Table-to-JSON structured data conversion',
      'Multi-paragraph synthesis with citation anchors',
      'Interactive cross-reference of web documentation'
    ]
  },
  {
    id: 'automation',
    title: 'Browser Automation',
    tagline: 'Safe, assistive web navigation',
    description: 'Automate tedious repetitive tasks. NEXUS can click supported buttons, fill out mundane forms, trigger search inputs, and scroll through paginated datasets on command.',
    icon: 'MousePointerClick',
    badge: 'Autonomous Flow',
    colSpan: 'md:col-span-1',
    details: [
      'Safe selector resolution using accessibility trees',
      'Form autofill from context or clipboard buffers',
      'Continuous scroll and pagination traversal',
      'Explicit boundary constraints against protected inputs'
    ]
  },
  {
    id: 'multistep',
    title: 'Multi-Step Tasks',
    tagline: 'Autonomous planning across sequential web steps',
    description: 'Tackle workflows that span multiple steps. NEXUS creates a transparent execution plan, tracks step status, and adjusts if a webpage layout differs from expectations.',
    icon: 'GitFork',
    badge: 'Workflow Planner',
    colSpan: 'md:col-span-2',
    details: [
      'Hierarchical task trees with verification gates',
      'Stateful observation between navigation changes',
      'Live progress bar with cancellable actions',
      'Audit log of every DOM operation performed'
    ]
  },
  {
    id: 'byok',
    title: 'Bring Your Own Key',
    tagline: 'Zero markup. Direct connection to your AI provider',
    description: 'Connect directly to leading model providers using your own API key. Pay raw wholesale API rates—no $20/month subscription toll booths or restricted token pools.',
    icon: 'KeyRound',
    badge: 'Zero Markups',
    colSpan: 'md:col-span-1',
    details: [
      'Direct API calls from your browser to provider',
      'Supports OpenAI, OpenRouter, Groq, DeepSeek',
      'Custom base URL support for self-hosted LLMs (vLLM, Ollama)',
      'Estimated 85–95% savings over bundled AI browser fees'
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Control',
    tagline: 'Local-first architecture with strict sandboxing',
    description: 'Your API keys and session data stay strictly inside your Chrome browser. NEXUS operates locally, never routes requests through third-party telemetry, and asks before sensitive actions.',
    icon: 'ShieldCheck',
    badge: 'Local First',
    colSpan: 'md:col-span-2',
    details: [
      'Encrypted client-side storage via chrome.storage.local',
      'Zero intermediary telemetry or middleman proxy servers',
      'Explicit tab permission prompts on each domain',
      'Inspectable open-source code base'
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Install NEXUS',
    tagline: 'Download & Load Unpacked',
    description: 'Download the compiled extension ZIP, enable Developer Mode in chrome://extensions, and load the unpacked dist folder in seconds.',
    icon: 'Download',
    detailSnippet: 'chrome://extensions > Load unpacked'
  },
  {
    number: '02',
    title: 'Connect Your AI',
    tagline: 'Add Your Preferred API Key',
    description: 'Open the NEXUS side panel and enter an API key from OpenAI, OpenRouter, Groq, DeepSeek, or your private self-hosted endpoint.',
    icon: 'KeyRound',
    detailSnippet: 'Direct client-to-API requests with zero middleman'
  },
  {
    number: '03',
    title: 'Give It a Command',
    tagline: 'Interact with Any Webpage',
    description: 'Type instructions in plain English. NEXUS reads the page structure, plans the execution steps, and carries out the work right beside your viewport.',
    icon: 'Sparkles',
    detailSnippet: 'Cmd/Ctrl + Shift + X to toggle anywhere'
  }
];

export const PROVIDERS: ProviderItem[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'Industry Standard',
    description: 'Flagship reasoning and multimodal comprehension for intricate multi-step web workflows.',
    models: ['gpt-4o', 'gpt-4o-mini', 'o1-mini'],
    latency: '~650ms',
    badge: 'Popular'
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    category: 'Universal Gateway',
    description: 'Access hundreds of models with a single unified API key, smart routing, and fallback failovers.',
    models: ['claude-3.5-sonnet*', 'gemini-1.5-pro*', 'llama-3.3-70b'],
    latency: '~700ms',
    badge: '100+ Models'
  },
  {
    id: 'groq',
    name: 'Groq',
    category: 'Ultra-Fast Inference',
    description: 'Lightning-fast LPU inference delivering real-time responses and near-instant webpage summarization.',
    models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'],
    latency: '~180ms',
    badge: 'Blazing Fast'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    category: 'High Efficiency & Reasoning',
    description: 'State-of-the-art open reasoning and coding models at fraction-of-a-cent token economics.',
    models: ['deepseek-chat (V3)', 'deepseek-reasoner (R1)'],
    latency: '~800ms',
    badge: 'Ultra Low Cost'
  },
  {
    id: 'custom',
    name: 'Custom OpenAI-Compatible',
    category: 'Self-Hosted / Enterprise',
    description: 'Point NEXUS to any custom base URL including local Ollama, vLLM, LM Studio, or private gateways.',
    models: ['http://localhost:11434/v1', 'Private Gateway'],
    latency: 'Local / Configurable',
    badge: 'Custom Base URL'
  }
];

export const INSTALL_STEPS: InstallStep[] = [
  {
    step: 1,
    title: 'Download the NEXUS ZIP',
    instruction: 'Grab the latest pre-compiled build archive (nexus-chrome-extension.zip) from our verified GitHub release.',
    actionSnippet: DOWNLOAD_URL
  },
  {
    step: 2,
    title: 'Extract the ZIP Archive',
    instruction: 'Unpack the downloaded ZIP file on your computer. You will see a folder containing the extension build assets (manifest.json, background scripts, and dist folder).',
    tip: 'Keep this folder in a persistent location like ~/Applications or ~/Documents.'
  },
  {
    step: 3,
    title: 'Open chrome://extensions',
    instruction: 'In Google Chrome, navigate to the extensions manager by typing chrome://extensions in the address bar and pressing Enter.',
    actionSnippet: 'chrome://extensions'
  },
  {
    step: 4,
    title: 'Enable Developer Mode',
    instruction: 'In the top-right corner of the chrome://extensions page, switch the "Developer mode" toggle to ON.',
    tip: 'This enables Chrome to run locally unpacked extensions safely.'
  },
  {
    step: 5,
    title: 'Click "Load unpacked"',
    instruction: 'Click the "Load unpacked" button that appears in the top-left toolbar.',
    actionSnippet: 'Top-left button on chrome://extensions'
  },
  {
    step: 6,
    title: "Select the Extension's dist folder",
    instruction: "Browse to the folder extracted in Step 2 and choose the extension's folder (or its dist directory containing manifest.json). Chrome will immediately load NEXUS.",
    tip: 'NEXUS will appear in your Chrome extension bar.'
  },
  {
    step: 7,
    title: 'Open NEXUS and Configure API Key',
    instruction: 'Click the NEXUS icon or use the side-panel shortcut (Cmd/Ctrl + Shift + X). Enter your preferred provider API key to start automating.',
    tip: 'Your key never leaves your device and is saved only in Chrome local storage.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is NEXUS?',
    category: 'general',
    answer: 'NEXUS is an intelligent AI browser agent built as a Google Chrome extension (Manifest V3). It mounts directly in your Chrome side panel, allowing you to converse with, summarize, search, extract information from, and automate interactions on any webpage using natural language.'
  },
  {
    question: 'Is NEXUS free?',
    category: 'general',
    answer: 'Yes! The NEXUS Chrome extension software is 100% free to download, install, and use. There are no paywalls, recurring subscriptions, or artificial limits imposed by NEXUS. Because it uses a Bring Your Own Key (BYOK) model, you only pay your chosen AI model provider (e.g., OpenAI, Groq, DeepSeek) for the raw tokens your browser queries consume.'
  },
  {
    question: 'Do I need an API key?',
    category: 'technical',
    answer: 'Yes. NEXUS is intentionally built on a BYOK architecture so you retain complete control over your data, costs, and model preferences. You provide an API key from any supported provider (OpenAI, OpenRouter, Groq, DeepSeek, or any OpenAI-compatible endpoint). Your key is stored strictly on your local machine and calls the provider directly.'
  },
  {
    question: 'Which AI providers are supported?',
    category: 'technical',
    answer: 'NEXUS supports OpenAI (GPT-4o, o1, etc.), OpenRouter (which bridges 100+ models including Anthropic and Google via OpenAI-compatible endpoints), Groq (for sub-second fast inference), DeepSeek (V3 and R1), and any self-hosted or local OpenAI-compatible endpoint (Ollama, vLLM, LM Studio). Native Gemini and Anthropic direct SDKs are accessed through OpenRouter or OpenAI-compatible reverse proxies.'
  },
  {
    question: 'Does NEXUS work on every website?',
    category: 'technical',
    answer: 'NEXUS operates on standard web pages (HTML/DOM) that Chrome permits extensions to access. For security and sandbox protection reasons enforced by Chrome, extensions cannot manipulate internal browser pages (such as chrome://extensions or Chrome Web Store pages) or cross-origin bank iframe widgets with strict security isolation.'
  },
  {
    question: 'Is my API key stored locally?',
    category: 'privacy',
    answer: 'Yes, 100%. Your API key is saved exclusively in Chrome’s encrypted local extension storage (chrome.storage.local). It is never sent to any NEXUS server, telemetry collector, or external logging service. All API requests are dispatched directly from your browser client to your chosen AI provider’s official API endpoint.'
  },
  {
    question: 'How do I install NEXUS?',
    category: 'general',
    answer: 'NEXUS is distributed as a developer-mode unpacked extension. Simply download the ZIP file from our official GitHub release, extract it, open chrome://extensions, toggle "Developer mode" on, click "Load unpacked", and select the extracted folder. See our interactive Installation Guide below for step-by-step instructions.'
  },
  {
    question: 'Is NEXUS available for Firefox?',
    category: 'general',
    answer: 'Not currently. NEXUS is tailored specifically for Google Chrome and Chromium browsers (including Brave, Edge, and Arc) taking full advantage of Chrome Manifest V3 and the native Chrome SidePanel API. A Firefox-compatible edition using the Firefox Sidebar API is on our future exploration roadmap.'
  }
];

export const DEMO_TASKS: DemoTask[] = [
  {
    id: 'research',
    label: 'Developer AI Tools',
    prompt: 'Research the best AI tools for developers from this technical comparison.',
    pageUrl: 'https://devinsider.io/reports/ai-engineering-stack-2026',
    pageTitle: 'State of Developer AI Tooling — Benchmarks & Workflow Analysis',
    steps: [
      {
        title: 'Inspecting Webpage Structure',
        description: 'Parsed 14 semantic sections, 3 comparison tables, and code snippets.',
        codeSnippet: 'document.querySelectorAll("table.benchmark, article h2, p")',
        status: 'done'
      },
      {
        title: 'Filtering Core Developer Tools',
        description: 'Extracted rankings for autonomous coding agents, IDE assistants, and scaffolding generators.',
        status: 'done'
      },
      {
        title: 'Comparing Benchmark Metrics',
        description: 'Extracted speed, context window size, multi-file editing precision, and pricing.',
        status: 'done'
      },
      {
        title: 'Compiling Final Report',
        description: 'Formatted executive summary and recommendation grid.',
        status: 'done'
      }
    ],
    finalOutput: {
      summary: 'Analyzed 24 developer tools across 4 categories. Key standout: Local & BYOK agents are surging due to zero markup and strict IP confidentiality.',
      keyPoints: [
        'Top In-IDE Assistant: GitHub Copilot & Cursor (SWE-bench benchmark: 68.2%)',
        'Top CLI / Terminal Agent: Claude Code & Aider for multi-file repo refactoring',
        'Top Browser Agent: NEXUS for real-time web documentation lookup and DOM automation',
        'Key Trend: 84% of engineering teams prefer Bring Your Own Key (BYOK) for compliance'
      ],
      actionTaken: 'Extracted 4 tables into structured report and saved markdown to clipboard.'
    }
  },
  {
    id: 'summarize',
    label: 'Deep Article Summary',
    prompt: 'Read this webpage and summarize the important information.',
    pageUrl: 'https://techchronicle.org/deep-dive/quantum-error-mitigation',
    pageTitle: 'Scaling Logical Qubits: Breakthroughs in Fault-Tolerant Architectures',
    steps: [
      {
        title: 'Reading Full Article DOM',
        description: 'Bypassed 2 newsletter popups and extracted 4,200 words of technical text.',
        codeSnippet: 'Extracting readable text with Readability parser...',
        status: 'done'
      },
      {
        title: 'Identifying Core Findings',
        description: 'Detected mathematical formulation of syndrome measurement cycle times.',
        status: 'done'
      },
      {
        title: 'Generating Key Takeaways',
        description: 'Distilled 3 breakthroughs and 2 hardware limitations into bullet points.',
        status: 'done'
      }
    ],
    finalOutput: {
      summary: 'The paper demonstrates a 3.4x reduction in logical error rates using surface codes on 1,024 physical superconducting qubits with real-time feedback decoders.',
      keyPoints: [
        'Breakthrough: Real-time neural syndrome decoding executed in <1.2 microseconds',
        'Physical Qubit Overhead: Reduced from 1,000:1 to 320:1 per logical qubit',
        'Commercial Horizon: First commercially viable chemistry simulation estimated for 2028',
        'Authors: MIT Quantum Lab & IBM Quantum research consortium'
      ],
      actionTaken: 'Generated concise 3-minute executive briefing with original citation links.'
    }
  },
  {
    id: 'autofill',
    label: 'Form & Automation',
    prompt: 'Fill out this event registration form with my saved developer profile.',
    pageUrl: 'https://events.ai-summit.global/register/dev-track-2026',
    pageTitle: 'Global AI Engineers Conference 2026 — Registration Portal',
    steps: [
      {
        title: 'Detecting Form Inputs',
        description: 'Found 6 input fields (First Name, Last Name, Work Email, Role, Company, Track).',
        codeSnippet: 'inputs: [name, email, role, company, trackSelect]',
        status: 'done'
      },
      {
        title: 'Mapping Profile Context',
        description: 'Matched fields with local developer profile preferences.',
        status: 'done'
      },
      {
        title: 'Populating Form Elements',
        description: 'Inserted values and selected "Agentic Architectures" track dropdown safely.',
        status: 'done'
      }
    ],
    finalOutput: {
      summary: 'Form fields populated successfully. NEXUS paused at the final submit button to allow you to review and click submit yourself.',
      keyPoints: [
        'Inputs Populated: Full Name, Email, Organization, Job Title, Track Selection',
        'Safety Guard: NEXUS does not submit forms without explicit human click verification',
        'Time Saved: ~2.5 minutes manual typing bypassed'
      ],
      actionTaken: 'Highlighted 6 populated inputs on the page with green verification outlines.'
    }
  }
];
