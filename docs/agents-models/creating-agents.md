# Creating Agents in Spawn

## **Overview**

Spawn enables the creation of fully autonomous, embeddable AI agents that interact across multiple modalities, including **text, images, and voice**. These agents can be deployed anywhere—on websites, applications, or embedded within other AI-powered workflows.

## **🔹 Understanding Agents in Spawn**

An agent in Spawn is an AI entity with specific configurations that dictate:

- **Core AI Model:** Determines intelligence and processing capability.
- **Execution Permissions:** Defines what the agent can do (e.g., execute code, search files, process images).
- **Memory & Context Handling:** Controls whether the agent operates statelessly (one-time queries) or retains context across interactions.

### **📌 Use Cases**

- **Conversational AI Bots:** Automate interactions on customer support websites.
- **Data Analysis Assistants:** Process and analyze structured/unstructured data.
- **Creative Assistants:** Generate text, voice responses, and even execute multimodal tasks.
- **Autonomous Agents:** Self-sustaining AI that dynamically retrieves information, processes requests, and acts based on context.

---

## **🚀 Creating an Agent**

Spawn allows users to create agents either **via API** or **through the Spawn UI**.

### **🔹 Creating an Agent via API**

Spawn provides an API endpoint to create a new agent programmatically.

#### **📌 API Endpoint**

```http
POST /api/agents/create
```

#### **📌 Request Body**

```json
{
  "agent_name": "DocHelper",
  "model": "gpt-4o",
  "tools": ["code_execution", "file_search"],
  "parameters": {
    "temperature": 0.7,
    "max_tokens": 1024
  }
}
```

#### **🔹 Parameters Explained**

| Parameter     | Type    | Description                                        |
| ------------- | ------- | -------------------------------------------------- |
| `agent_name`  | String  | The unique identifier for the agent.               |
| `model`       | String  | AI model used (e.g., `gpt-4o`, `claude-3`).        |
| `tools`       | Array   | List of tools the agent can access.                |
| `temperature` | Float   | Controls randomness (lower is more deterministic). |
| `max_tokens`  | Integer | The maximum number of tokens per response.         |

#### **📌 Example Response**

```json
{
  "agent_id": "a1b2c3d4",
  "status": "success",
  "message": "Agent created successfully."
}
```

The **`agent_id`** can now be used to interact with the agent.

---

## **🔹 Creating an Agent via UI**

For non-programmatic users, Spawn provides an intuitive **web interface** to configure and launch agents.
1️⃣ **Navigate to Spawn Dashboard**  
2️⃣ **Click on "Create Agent"**  
3️⃣ **Select AI Model & Features**  
4️⃣ **Configure Tools & Behavior**  
5️⃣ **Deploy Instantly or Save for Later**

🔹 Agents created via UI can be modified later with API requests.

---

## **🔹 Advanced Configurations**

Spawn allows for **fine-grained control** over agent behavior with **custom parameters**:

### **1️⃣ Context Window Management**

- Enable or disable memory persistence.
- Set dynamic recall levels.

### **2️⃣ Execution Constraints**

- Define function call limitations.
- Restrict external API access.

### **3️⃣ Model Selection Strategy**

- Default to a single model or dynamically switch based on context.

```json
{
  "agent_name": "FinanceAI",
  "model": "claude-3",
  "parameters": {
    "temperature": 0.5,
    "max_tokens": 1500
  },
  "tools": ["web_scraper", "data_analyzer"],
  "context_window": "session-based",
  "execution_constraints": {
    "allow_file_uploads": false,
    "allow_external_calls": true
  }
}
```

✅ **Agents in Spawn are fully configurable, embeddable, and scalable.**

---

## **🛠️ Next Steps**

Now that your agent is created, you can:

- Customize its **behavior** (`agents-models/customizing-agents.md`)
- Embed it into an external platform (`agents-models/embeddable-links.md`)
- Deploy it for live interactions (`agents-models/deployment.md`)
