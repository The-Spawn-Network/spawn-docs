# Customizing Agents in Spawn

## **Overview**

Spawn agents are highly customizable, allowing for tailored interactions, execution capabilities, and multimodal processing. This section covers how to fine-tune agent behavior, optimize responses, and integrate external tools for more advanced use cases.

## **🔹 Key Customization Areas**

Customization can be done via:  
✅ **Parameter Tuning** – Adjust temperature, max tokens, and response styles.  
✅ **Tool Integration** – Extend capabilities with code execution, file processing, and APIs.  
✅ **Context Control** – Enable session-based memory, user personalization, and dynamic recall.  
✅ **Execution Policies** – Define permissions, constraints, and external call handling.

---

## **🚀 Customizing via API**

### **📌 API Endpoint**

```http
PATCH /api/agents/{agent_id}/update
```

### **📌 Example Request**

```json
{
  "parameters": {
    "temperature": 0.4,
    "max_tokens": 2048
  },
  "tools": ["code_execution", "web_scraper"],
  "context_settings": {
    "persistence": "session",
    "recall": "high"
  }
}
```

### **🔹 Explanation of Parameters**

| Parameter     | Type    | Description                                            |
| ------------- | ------- | ------------------------------------------------------ |
| `temperature` | Float   | Controls randomness (lower = more predictable).        |
| `max_tokens`  | Integer | Defines the maximum output length.                     |
| `tools`       | Array   | List of tools the agent can access.                    |
| `persistence` | String  | Memory handling (`session`, `long-term`, `stateless`). |
| `recall`      | String  | Context retention level (`low`, `medium`, `high`).     |

### **📌 Example Response**

```json
{
  "status": "success",
  "message": "Agent updated successfully."
}
```

---

## **🔹 Customizing via UI**

For users who prefer an interface-based approach:
1️⃣ **Navigate to Spawn Dashboard**  
2️⃣ **Select an Existing Agent**  
3️⃣ **Modify Model, Parameters, & Tools**  
4️⃣ **Save Changes & Deploy**

📌 **Changes take effect immediately for live agents.**

---

## **🔹 Advanced Customization**

### **1️⃣ Dynamic Model Switching**

Spawn agents can adaptively **switch models** based on workload, complexity, or cost constraints.

```json
{
  "dynamic_model_selection": {
    "fallback_model": "gpt-4o",
    "primary_model": "claude-3",
    "load_balancing": true
  }
}
```

### **2️⃣ Function Calling & API Integration**

Agents can interact with APIs, databases, and external systems.

```json
{
  "allowed_api_calls": ["weather_api", "stock_data"],
  "function_calling": true
}
```

### **3️⃣ Response Formatting**

Customize agent responses based on predefined structures.

```json
{
  "output_format": "JSON",
  "structured_response": true
}
```

📌 **Example JSON Response from Agent**

```json
{
  "status": "success",
  "data": {
    "summary": "Stock prices have increased by 5%",
    "suggestions": ["Hold shares", "Review market trends"]
  }
}
```

---

## **🔹 Custom Tool Integration**

Spawn supports custom **toolchains** that extend agent capabilities.

| Tool Type            | Functionality                                     |
| -------------------- | ------------------------------------------------- |
| `code_execution`     | Runs secure, sandboxed code in various languages. |
| `web_scraper`        | Extracts and processes real-time web data.        |
| `database_connector` | Fetches and manipulates structured data.          |

**Example Enabling Custom Tools**

```json
{
  "tools": [
    {
      "name": "custom_sentiment_analysis",
      "endpoint": "https://api.example.com/analyze",
      "method": "POST"
    }
  ]
}
```

---

## **🛠️ Next Steps**

Now that your agent is customized, you can:

- Generate **Embeddable Links** for website integration (`agents-models/embeddable-links.md`)
- Deploy the agent to a **cloud or local environment** (`agents-models/deployment.md`)
