import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "introduction/overview",
        "introduction/core-features",
        "introduction/use-cases",
      ],
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
        "architecture/system-overview",
        "architecture/component-breakdown",
        "architecture/ai-model-interoperability",
        "architecture/security-privacy",
      ],
    },
    {
      type: "category",
      label: "Agents & Embeddability",
      collapsed: false,
      items: [
        "agents/creating-agents",
        "agents/customizing-behavior",
        "agents/generating-embeds",
        "agents/deploying-agents",
      ],
    },
    {
      type: "category",
      label: "AI Model Integration",
      collapsed: false,
      items: [
        "ai-models/supported-models",
        "ai-models/selecting-model",
        "ai-models/api-configuration",
        "ai-models/performance-optimization",
      ],
    },
    {
      type: "category",
      label: "Multimodal Processing",
      collapsed: false,
      items: [
        "multimodal/text-processing",
        "multimodal/image-recognition",
        "multimodal/audio-processing",
        "multimodal/real-time-interactions",
      ],
    },
    {
      type: "category",
      label: "Code Execution Engine",
      collapsed: false,
      items: [
        "code-execution/supported-languages",
        "code-execution/sandboxed-execution",
        "code-execution/handling-inputs",
        "code-execution/api-reference",
      ],
    },
    {
      type: "category",
      label: "Security & Privacy",
      collapsed: false,
      items: [
        "security/anonymous-framework",
        "security/data-storage",
        "security/compliance",
        "security/threat-mitigation",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        "api/authentication",
        "api/endpoints",
        "api/webhooks",
        "api/rate-limits",
      ],
    },
    {
      type: "category",
      label: "Deployment & Scaling",
      collapsed: false,
      items: [
        "deployment/local-setup",
        "deployment/cloud-deployment",
        "deployment/load-balancing",
        "deployment/monitoring-logging",
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
        "troubleshooting/debugging-api",
        "troubleshooting/logging-monitoring",
        "troubleshooting/performance-tuning",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      collapsed: false,
      items: [
        "contributing/code-guidelines",
        "contributing/issue-reporting",
        "contributing/community-support",
      ],
    },
    {
      type: "category",
      label: "Roadmap & Future Enhancements",
      collapsed: false,
      items: [
        "roadmap/planned-features",
        "roadmap/model-integrations",
        "roadmap/scalability-upgrades",
      ],
    },
  ],
};

export default sidebars;
