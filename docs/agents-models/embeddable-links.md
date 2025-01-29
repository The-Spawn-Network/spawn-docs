# Embeddable Links & Deployment in Spawn

## **Overview**

Spawn allows seamless **embedding of AI agents** into websites, applications, and third-party platforms. This feature provides **zero-friction AI deployment**, enabling real-time, interactive assistants for various use cases.

### **🔹 Key Features**

✅ **No-Code Deployment** – Instantly generate and embed agents with a single link.  
✅ **Customizable UI** – Modify appearance, behavior, and interaction settings.  
✅ **Secure & Scalable** – Role-based access control and multi-user sessions.  
✅ **Cross-Platform Integration** – Works with websites, mobile apps, and custom systems.

---

## **🚀 Generating an Embeddable Link**

Each Spawn agent has a unique embeddable link that can be shared or embedded into external platforms.

### **📌 API Endpoint**

```http
POST /api/agents/{agent_id}/embed
```

### **📌 Example Request**

```json
{
  "ui_theme": "dark",
  "welcome_message": "Hello! How can I assist you today?",
  "show_typing_indicator": true,
  "interaction_mode": "conversational"
}
```

### **📌 Example Response**

```json
{
  "status": "success",
  "embed_url": "https://thespawnnetwork.com/embed/agent-xyz123"
}
```

🔹 **Copy & Paste** the `embed_url` into any webpage or system.

---

## **🔹 Embedding in Websites**

Use the **iframe method** to embed an agent in a website.

```html
<iframe
  src="https://thespawnnetwork.com/embed/agent-xyz123"
  width="400"
  height="600"
  style="border: none; border-radius: 10px;"
>
</iframe>
```

🔹 **Customization via URL Parameters**  
Modify agent behavior using query parameters:

```html
<iframe
  src="https://thespawnnetwork.com/embed/agent-xyz123?theme=dark&show_typing=true"
  width="400"
  height="600"
  style="border: none; border-radius: 10px;"
>
</iframe>
```

| Parameter     | Type    | Description                                    |
| ------------- | ------- | ---------------------------------------------- |
| `theme`       | String  | `dark`, `light`, `custom`                      |
| `show_typing` | Boolean | Show user typing indicator (`true` or `false`) |
| `welcome_msg` | String  | Custom welcome message                         |
| `interaction` | String  | `conversational`, `single-turn`, `hybrid`      |

---

## **🔹 Embedding in React Apps**

Spawn agents can be integrated directly into **React applications** with a simple component.

### **📌 Example React Component**

```jsx
import React from 'react'

const SpawnAgent = () => {
  return (
    <iframe
      src='https://thespawnnetwork.com/embed/agent-xyz123?theme=dark'
      width='400'
      height='600'
      style={{ border: 'none', borderRadius: '10px' }}
    />
  )
}

export default SpawnAgent
```

---

## **🔹 Embedding in Mobile Apps**

For **React Native & Flutter**, use **WebView**.

### **📌 React Native (WebView)**

```jsx
import { WebView } from 'react-native-webview'

const AgentWebView = () => (
  <WebView source={{ uri: 'https://thespawnnetwork.com/embed/agent-xyz123?theme=dark' }} />
)
```

### **📌 Flutter (WebView)**

```dart
WebView(
  initialUrl: "https://thespawnnetwork.com/embed/agent-xyz123?theme=dark",
  javascriptMode: JavascriptMode.unrestricted,
)
```

---

## **🔹 Securing Embedded Agents**

Spawn supports **role-based access control (RBAC)** to restrict access to embedded agents.

### **📌 API Request to Generate a Secure Embed Link**

```json
{
  "access_restrictions": {
    "require_auth": true,
    "allowed_roles": ["admin", "moderator"]
  }
}
```

### **📌 Example Secure Embed Response**

```json
{
  "status": "success",
  "secure_embed_url": "https://thespawnnetwork.com/embed/agent-xyz123?token=abc456"
}
```

📌 **Use `?token=abc456` to restrict access** to authorized users.

---

## **🛠️ Next Steps**

- **Deploy Agents** to cloud or local environments (`agents-models/deployment.md`)
- **Customize UI & Behavior** via API or front-end tweaks (`customization/ui-modifications.md`)
