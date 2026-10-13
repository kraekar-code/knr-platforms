export const site = {
  name: "KNR Platforms",
  tagline: "Apps and platforms, for our clients and for everyone.",
  description:
    "KNR Platforms designs, builds and runs software: our own AI-powered platforms open to the public, and custom apps and platforms built for our clients.",
  // TODO: check this contact address exists before going live.
  email: "contact@knrplatforms.com",
  url: "https://knrplatforms.com",
};

export const nav = [
  { label: "Platforms", href: "/#products" },
  { label: "Custom apps", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export type Product = {
  id: "lumarcs" | "veyra" | "kairen" | "fliplab";
  name: string;
  category: string;
  headline: string;
  description: string;
  bullets: string[];
  coreIdea: string;
  accent: string;
  accent2: string;
};

export const products: Product[] = [
  {
    id: "lumarcs",
    name: "Lumarcs",
    category: "Enterprise Architecture Visualization",
    headline: "Make enterprise architecture understandable to everyone.",
    description:
      "A platform for enterprise architects, IT leaders and transformation teams. Lumarcs replaces static, highly technical diagrams with a dynamic, business-oriented view of how applications, processes, systems and data interact.",
    bullets: [
      "Interactive blueprints built from the diagrams you already have",
      "Business journeys, data flows and integrations in one view",
      "Clear for executives, precise for architects",
    ],
    coreIdea: "Make enterprise architecture understandable to everyone.",
    accent: "#2F8BFF",
    accent2: "#7A6CC0",
  },
  {
    id: "veyra",
    name: "Veyra",
    category: "AI-Powered Video Production",
    headline: "Simplify professional video creation through AI and collaboration.",
    description:
      "An AI-powered platform to create, review and edit corporate videos. Product launches, strategic updates, program presentations, internal communications and corporate storytelling, all in one structured workflow.",
    bullets: [
      "AI-assisted motion and footage editing",
      "Remarks pinned to the exact timecode",
      "Versions, brand kits and one-click export",
    ],
    coreIdea: "Simplify professional video creation through AI and collaboration.",
    accent: "#F2A64A",
    accent2: "#FF7A59",
  },
  {
    id: "kairen",
    name: "Kairen",
    category: "AI Engineering Control Center",
    headline: "Build software through coordinated teams of specialized AI agents.",
    description:
      "An AI engineering control center that lets one person run a team of AI agents across several software projects. Each request becomes a mission that is refined, implemented, validated, merged and released.",
    bullets: [
      "Specialized agents: product owner, design, developer, QA, code review, release",
      "Missions, merge queue, releases and costs in one place",
      "From idea to shipped product, with you in control",
    ],
    coreIdea: "Build software through coordinated teams of specialized AI agents.",
    accent: "#7C5CFF",
    accent2: "#2F8BFF",
  },
  {
    id: "fliplab",
    name: "FlipLab",
    category: "Collaborative Innovation & Decision-Making",
    headline: "Turn collective thinking into meaningful decisions.",
    description:
      "An interactive platform for brainstorming, collaboration and decision-making. A collection of exercises inspired by UX methodologies, design thinking and innovation workshops, with live participation, voting and prioritization.",
    bullets: [
      "Interactive, facilitated exercises",
      "Live participation, voting and prioritization",
      "Workshops that end with actionable decisions",
    ],
    coreIdea: "Turn collective thinking into meaningful decisions.",
    accent: "#3DDC97",
    accent2: "#2F8BFF",
  },
];

/** What we build for clients, beyond our own products. */
export const platformServices = {
  title: "Apps and platforms built for you",
  intro:
    "The same team that builds our own platforms builds yours, from the first prototype to the product in production.",
  items: [
    "Web and mobile applications",
    "SaaS platforms and client portals",
    "AI features, agents and business automation",
    "Integration with your existing systems",
    "Product design and functional analysis",
    "Hosting, maintenance and evolution",
  ],
};

export const platformSteps = [
  { n: "01", title: "Understand", text: "We start from the real need: who uses the app, what they must get done, and the outcome that matters." },
  { n: "02", title: "Design", text: "Functional design, architecture and interface come together early, so what gets built is usable and clear." },
  { n: "03", title: "Build", text: "Software, automation and AI, delivered with the rigor of enterprise programs and the pace of a small team." },
  { n: "04", title: "Run", text: "We ship, host and improve the product with you, release after release." },
];

export const platformFaqs = [
  {
    q: "Can we use your platforms without a project with you?",
    a: "Yes. Lumarcs, Veyra, Kairen and FlipLab are standalone products, open to businesses and individuals.",
  },
  {
    q: "Do you build apps for clients?",
    a: "Yes. We design and build web and mobile apps, SaaS platforms and client portals, with AI where it helps, and we can host and maintain them after launch.",
  },
  {
    q: "How does AI fit into what you build?",
    a: "AI is at the core of our platforms: Kairen orchestrates teams of specialized AI agents to build software, Veyra uses AI to edit and review videos. In client projects we add AI features and automation where they save real time.",
  },
  {
    q: "How do we start?",
    a: "Send us a short description of your project. We reply with a point of view and, if it makes sense, a first step: a workshop, a prototype or a product trial.",
  },
];

export const marquee = [
  "Web & Mobile Apps",
  "SaaS Platforms",
  "Artificial Intelligence",
  "AI Agents",
  "Business Automation",
  "Client Portals",
  "Enterprise Architecture",
  "Product Design",
];

export const vision = {
  text: "Our vision is to create technology that makes everyday professional life easier. Software that does one job well, with AI doing the heavy lifting and people staying in control.",
  motto: "Technology. Creativity. Purpose.",
};
