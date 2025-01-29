### **Generating Embeddable Links** (`agents-models/embeddable-links.md`)

## **Overview**

Spawn allows AI agents to be **embedded** into external websites, applications, and services via a simple, customizable embed system. This enables businesses, developers, and content creators to integrate AI-powered interactions seamlessly.

Embeddable agents are **fully anonymous** and **privacy-preserving**, requiring no user authentication, making them ideal for public interactions, customer support, education, and more.

## **Key Features of Spawn’s Embed System**

✅ **Anonymous Access** – No login required for end-users.  
✅ **Lightweight & Fast** – Minimal overhead for integration.  
✅ **Fully Configurable UI** – Customize colors, branding, and behavior.  
✅ **Multi-Platform Support** – Works on **web, mobile,** and **native applications**.  
✅ **Real-Time Sync** – Automatically updates agent behavior without re-deployment.

---

## **1️⃣ Creating an Embeddable AI Agent**

Spawn provides an easy method for embedding an AI agent. To generate an embed code:

1. **Go to the Spawn Dashboard.**
2. **Select an AI Agent** from your configured agents.
3. Click on **“Generate Embed”**.
4. Customize settings (appearance, behavior, API access).
5. Copy the **generated embed code** and paste it into your website.

### **Example: Embed Code for an AI Agent**

```html
<script src="https://thespawnnetwork.com/embed.js"></script>
<div
  id="spawn-chatbot"
  data-agent-id="spawn_helper_01"
  data-theme="dark"
  data-welcome-message="Hello! How can I help you today?"
></div>
<script>
  SpawnAI.init({
    agentId: 'spawn_helper_01',
    theme: 'dark',
    welcomeMessage: 'Hello! How can I help you today?'
  })
</script>
```

---

## **2️⃣ Customizing the Embedded Agent**

Spawn’s embeddable AI agents are highly customizable. You can control:

- **Theme** – Light or Dark mode.
- **Agent Persona** – Friendly, Professional, or Custom behavior.
- **Preloaded Messages** – Define an opening message.
- **UI Placement** – Position the chatbox anywhere on the page.
- **Multimodal Capabilities** – Enable or disable text, image, and voice processing.

### **Example: JSON Configuration**

```json
{
  "agentId": "customer_service_ai",
  "theme": "light",
  "floating": true,
  "welcomeMessage": "How can I assist you today?",
  "enableVoice": true,
  "enableImages": false
}
```

---

## **3️⃣ Deploying Embeddable Agents in Web & Mobile Apps**

Spawn agents can be deployed across different platforms:

- **Websites** – Embed via `<script>` tags.
- **Web Apps** – Integrated via REST API calls.
- **Mobile Apps (iOS & Android)** – Embedded through WebViews or React Native components.
- **Native Desktop Applications** – Through Electron.js and browser-based views.

### **Example: React Integration**

```jsx
import { useEffect } from 'react'

const SpawnChat = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://thespawnnetwork.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return <div id='spawn-chatbot' data-agent-id='support_bot_001'></div>
}

export default SpawnChat
```

---

## **4️⃣ Advanced API Integration for Dynamic Embeds**

Spawn allows developers to programmatically generate and modify embeddable agents using an API.

### **Example: Fetching an Embed Token**

```bash
curl -X POST "https://thespawnnetwork.com/api/v1/embed" \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
          "agent_id": "support_ai_01",
          "theme": "dark",
          "pre_message": "Welcome! Ask me anything."
        }'
```

**Response:**

```json
{
  "embed_url": "https://thespawnnetwork.com/embed/support_ai_01"
}
```

---

## **5️⃣ Use Cases for Embeddable AI Agents**

Spawn’s embeddable AI agents can be used in a variety of applications:

- 🛍️ **E-Commerce Support** – AI-powered shopping assistants.
- 📚 **Education & Learning** – Virtual tutors for interactive learning.
- 🤖 **Tech Support** – Automated troubleshooting & FAQs.
- 📰 **Media & Content** – AI-powered comment sections & discussions.
- 📱 **Mobile App Integrations** – In-app AI assistants.

---

## **Conclusion**

Spawn’s embeddable AI agents provide a **powerful, flexible,** and **secure** way to integrate AI into any platform.** With **fully anonymous interactions**, **deep customization**, and **cross-platform support\*\*, they are the ideal solution for interactive AI-driven experiences.

---

That completes **Embeddable Links.** Let me know when you're ready for the next section! 🚀

You're right again! Let's move on to **Deployment** under **Agents & Models** (`agents-models/deployment.md`).

---

# **Deploying Spawn AI Agents**

## **Overview**

Spawn agents are designed for flexible deployment across multiple environments, including web applications, cloud services, and enterprise platforms. The deployment process ensures agents are optimized for performance, security, and scalability.

## **Deployment Options**

Spawn AI agents can be deployed using one of the following methods:

1. **Standalone Deployment** – Hosted directly via Spawn's cloud infrastructure.
2. **Embedded Deployment** – Integrated within third-party applications via embeddable links or iFrames.
3. **On-Premise Deployment** – Self-hosted on custom infrastructure with full data control.
4. **API-Based Deployment** – Interacting with Spawn agents programmatically through the API.

---

## **1️⃣ Standalone Deployment (Hosted by Spawn)**

Spawn provides a **fully managed** environment where AI agents can be deployed instantly.

### **Steps to Deploy:**

1. **Create an AI Agent** in the Spawn dashboard.
2. **Train and Configure** the agent with necessary tools, integrations, and settings.
3. **Set Up Access Control** (public, restricted, or private).
4. **Deploy the Agent** – The agent will be live at a generated Spawn URL.

Example Deployment URL:

```
https://thespawnnetwork.com/agents/{agent_id}
```

This method ensures **zero maintenance**, automatic scaling, and built-in security.

---

## **2️⃣ Embedded Deployment**

AI agents can be **embedded within web applications** using iFrames or JavaScript widgets.

### **Using an iFrame**

```html
<iframe
  src="https://thespawnnetwork.com/embed/your-agent-id"
  width="100%"
  height="600px"
  style="border:none;"
>
</iframe>
```

### **Using JavaScript Widget**

```javascript
const spawnContainer = document.getElementById('spawn-agent')
spawnContainer.innerHTML = `<iframe src="https://thespawnnetwork.com/embed/your-agent-id" width="100%" height="600px" frameborder="0"></iframe>`
```

This method allows quick **frontend integration** with minimal backend involvement.

---

## **3️⃣ On-Premise Deployment (Self-Hosted)**

For enterprises requiring **data privacy** and **custom infrastructure**, Spawn supports self-hosted deployment.

### **Prerequisites:**

- **Docker & Docker Compose**
- **Node.js 18+**
- **PostgreSQL (for vector storage)**
- **Nginx (for reverse proxy, optional)**

### **Deployment Steps:**

1. **Clone the repository**:

   ```sh
   git clone https://github.com/thespawnnetwork/spawn.git && cd spawn
   ```

2. **Set up environment variables** in `.env`:

   ```sh
   cp .env.example .env
   nano .env
   ```

3. **Run the containerized services**:

   ```sh
   docker-compose up -d
   ```

4. **Access the agent locally**:
   ```
   http://localhost:3000
   ```

### **Scaling Self-Hosted Deployments**

For production, use:

- **Load balancing** (Nginx, HAProxy)
- **Kubernetes** for container orchestration
- **Autoscaling based on requests**

---

## **4️⃣ API-Based Deployment**

For programmatic interactions, Spawn agents can be deployed via the API.

### **Example API Request to Deploy an Agent**

```json
POST /api/agents/deploy
{
  "agent_id": "customer-support-bot",
  "deployment_mode": "api",
  "auth_required": true,
  "settings": {
    "max_concurrent_users": 1000,
    "rate_limit": 10
  }
}
```

### **Example API Response**

```json
{
  "status": "success",
  "deployment_url": "https://thespawnnetwork.com/api/agents/customer-support-bot",
  "api_key": "abcd1234"
}
```

API deployments allow **direct integration** with business workflows, mobile apps, and third-party automation.

---

## **Deployment Best Practices**

- **Use Webhooks & Events** – Track real-time interactions.
- **Monitor & Optimize** – Log requests, analyze response times.
- **Ensure Security** – Apply API authentication & access control.

---

## **Conclusion**

Spawn provides multiple deployment options tailored for various use cases, ensuring **scalability, flexibility, and security**. Whether hosted, embedded, self-hosted, or API-based, Spawn makes AI deployment seamless.
