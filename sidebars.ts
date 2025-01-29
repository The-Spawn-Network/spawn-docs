import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: ["intro"],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/prerequisites",
        "getting-started/installation",
        "getting-started/configuration",
        "getting-started/quick-start",
      ],
    },
    {
      type: "category",
      label: "Platform Architecture",
      collapsed: false,
      items: [
        "platform-architecture/system-overview",
        "platform-architecture/components",
        "platform-architecture/ai-interoperability",
        "platform-architecture/security-privacy",
      ],
    },
    {
      type: "category",
      label: "Agents & Embeddability",
      collapsed: false,
      items: [
        "agents-models/creating-agents",
        "agents-models/customizing-agents",
        "agents-models/embeddable-links",
        "agents-models/deployment",
      ],
    },
    {
      type: "category",
      label: "Multimodal Processing",
      collapsed: false,
      items: [
        "multimodal-processing/text-processing",
        "multimodal-processing/image-processing",
        "multimodal-processing/audio-processing",
        "multimodal-processing/real-time-interactions",
      ],
    },
    {
      type: "category",
      label: "Code Execution Engine",
      collapsed: false,
      items: [
        "code-execution/supported-languages",
        "code-execution/sandboxed-execution",
        "code-execution/input-output",
        "code-execution/api-reference",
      ],
    },
    {
      type: "category",
      label: "Security & Privacy",
      collapsed: false,
      items: [
        "security/anonymous-framework",
        "security/data-policies",
        "security/compliance",
        "security/threat-mitigation",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        "api-reference/authentication",
        "api-reference/endpoints",
        "api-reference/webhooks",
        "api-reference/rate-limits",
      ],
    },
    {
      type: "category",
      label: "Deployment & Scaling",
      collapsed: false,
      items: [
        "deployment/local",
        "deployment/cloud",
        "deployment/scaling",
        "deployment/monitoring",
      ],
    },
    {
      type: "category",
      label: "Customization & Extensibility",
      collapsed: false,
      items: [
        "customization/custom-tools",
        "customization/ui-modifications",
        "customization/extending-agents",
        "customization/plugin-architecture",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting & Debugging",
      collapsed: false,
      items: [
        "troubleshooting/common-errors",
        "troubleshooting/debugging",
        "troubleshooting/logging",
        "troubleshooting/performance",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      collapsed: false,
      items: [
        "contributing/guidelines",
        "contributing/issues-requests",
        "contributing/community",
      ],
    },
    {
      type: "category",
      label: "Roadmap & Future Enhancements",
      collapsed: false,
      items: [
        "roadmap/planned-features",
        "roadmap/upcoming-integrations",
        "roadmap/performance-upgrades",
      ],
    },
  ],
};

export default sidebars;
