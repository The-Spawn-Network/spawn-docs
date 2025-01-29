### **API Reference (`api-reference.md`)**

## **Overview**

The Spawn API provides a comprehensive set of endpoints for integrating **secure, embeddable AI agents** into any application. It supports **multi-model execution, multimodal processing, sandboxed code execution, and AI-driven interactions** with a structured, efficient, and scalable architecture.

Spawn’s API is designed to be:

- **RESTful**: Uses HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) for operations.
- **Secure**: Requires authentication via API keys or JWT tokens.
- **Scalable**: Supports high-throughput, low-latency execution.
- **Modular**: Enables integration with **AI models, agents, multimodal interfaces, and code execution engines**.

---

## **Base URL**

```plaintext
https://api.thespawnnetwork.com/v1/
```

All API requests must be **prefixed with `/v1/`** for versioning consistency.

---

## **Authentication**

Spawn’s API requires authentication via API keys or JWT tokens. See the [Authentication Guide](../api-reference/authentication.md) for details on securing your requests.

### **Example Authorization Header**

```http
Authorization: Bearer YOUR_API_KEY
```

---

## **Core API Features**

Spawn provides API endpoints categorized into **four** primary functionalities:

1. **Agent Management**

   - Create, customize, and deploy embeddable AI agents.

2. **AI Model Execution**

   - Execute text, image, and audio-based AI models in real time.

3. **Multimodal Interactions**

   - Process text, images, and voice inputs in a unified interface.

4. **Secure Code Execution**
   - Run Python, JavaScript, and other code in an isolated sandbox.

---

## **Example API Request**

A sample API request to execute a **text-based AI model**:

```http
POST /v1/ai/execute
Host: api.thespawnnetwork.com
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

```json
{
  "model": "gpt-4",
  "input": "What is the capital of France?",
  "context": []
}
```

### **Response**

```json
{
  "output": "The capital of France is Paris.",
  "usage": {
    "tokens_used": 12
  }
}
```