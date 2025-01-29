### **Overview**

Spawn provides a comprehensive **RESTful API** to interact with **agents, models, and multimodal processing capabilities**. Below is a detailed breakdown of the core API endpoints, their functionality, and how to use them.

---

## **1️⃣ Base URL**

All API requests should be directed to:

```
https://thespawnnetwork.com/api/v1
```

All endpoints require **authentication** via an API key or OAuth token.

---

## **2️⃣ Agents API**

### **➤ Create a New Agent**

Creates a new AI agent with custom parameters.

- **Endpoint:** `POST /agents`
- **Auth Required:** ✅ Yes
- **Request Body:**
  ```json
  {
    "name": "ChatAssistant",
    "model": "gpt-4",
    "temperature": 0.8,
    "instructions": "Provide concise and helpful responses."
  }
  ```
- **Example Request:**
  ```sh
  curl -X POST "https://thespawnnetwork.com/api/v1/agents"
       -H "Authorization: Bearer YOUR_API_KEY"
       -H "Content-Type: application/json"
       -d '{
         "name": "ChatAssistant",
         "model": "gpt-4",
         "temperature": 0.8,
         "instructions": "Provide concise and helpful responses."
       }'
  ```
- **Response:**
  ```json
  {
    "id": "agent_123456",
    "name": "ChatAssistant",
    "status": "created"
  }
  ```

---

### **➤ Get All Agents**

Retrieves a list of all user-created agents.

- **Endpoint:** `GET /agents`
- **Auth Required:** ✅ Yes
- **Example Request:**
  ```sh
  curl -X GET "https://thespawnnetwork.com/api/v1/agents"
       -H "Authorization: Bearer YOUR_API_KEY"
  ```
- **Response:**
  ```json
  [
    {
      "id": "agent_123456",
      "name": "ChatAssistant",
      "model": "gpt-4",
      "status": "active"
    },
    {
      "id": "agent_789101",
      "name": "CodeHelper",
      "model": "claude-3",
      "status": "paused"
    }
  ]
  ```

---

### **➤ Delete an Agent**

Deletes a specified AI agent.

- **Endpoint:** `DELETE /agents/{agent_id}`
- **Auth Required:** ✅ Yes
- **Example Request:**
  ```sh
  curl -X DELETE "https://thespawnnetwork.com/api/v1/agents/agent_123456"
       -H "Authorization: Bearer YOUR_API_KEY"
  ```
- **Response:**
  ```json
  {
    "message": "Agent deleted successfully."
  }
  ```

---

## **3️⃣ Chat API**

### **➤ Send a Message to an Agent**

Sends a message to an AI agent and retrieves a response.

- **Endpoint:** `POST /agents/{agent_id}/chat`
- **Auth Required:** ✅ Yes
- **Request Body:**
  ```json
  {
    "message": "What is quantum computing?",
    "session_id": "session_abc123"
  }
  ```
- **Example Request:**
  ```sh
  curl -X POST "https://thespawnnetwork.com/api/v1/agents/agent_123456/chat"
       -H "Authorization: Bearer YOUR_API_KEY"
       -H "Content-Type: application/json"
       -d '{
         "message": "What is quantum computing?",
         "session_id": "session_abc123"
       }'
  ```
- **Response:**
  ```json
  {
    "response": "Quantum computing leverages quantum mechanics to perform computations exponentially faster than classical computers.",
    "session_id": "session_abc123",
    "agent_id": "agent_123456"
  }
  ```

---

## **4️⃣ Model API**

### **➤ List Available AI Models**

Fetches all available models that can be used with agents.

- **Endpoint:** `GET /models`
- **Auth Required:** ✅ Yes
- **Example Request:**
  ```sh
  curl -X GET "https://thespawnnetwork.com/api/v1/models"
       -H "Authorization: Bearer YOUR_API_KEY"
  ```
- **Response:**
  ```json
  [
    { "name": "gpt-4", "provider": "OpenAI" },
    { "name": "claude-3", "provider": "Anthropic" },
    { "name": "gemini-1.5", "provider": "Google" }
  ]
  ```

---

## **5️⃣ Multimodal Processing API**

### **➤ Image Analysis**

Uploads an image for processing (e.g., facial recognition, object detection).

- **Endpoint:** `POST /multimodal/image`
- **Auth Required:** ✅ Yes
- **Request Body:**
  ```json
  {
    "image_url": "https://example.com/image.jpg",
    "task": "face-detection"
  }
  ```
- **Example Request:**
  ```sh
  curl -X POST "https://thespawnnetwork.com/api/v1/multimodal/image"
       -H "Authorization: Bearer YOUR_API_KEY"
       -H "Content-Type: application/json"
       -d '{
         "image_url": "https://example.com/image.jpg",
         "task": "face-detection"
       }'
  ```
- **Response:**
  ```json
  {
    "faces_detected": 2,
    "bounding_boxes": [
      { "x": 100, "y": 150, "width": 80, "height": 80 },
      { "x": 300, "y": 200, "width": 75, "height": 75 }
    ]
  }
  ```

---

### **➤ Voice Generation (ElevenLabs)**

Generates AI voices based on specified parameters.

- **Endpoint:** `POST /multimodal/audio/generate`
- **Auth Required:** ✅ Yes
- **Request Body:**
  ```json
  {
    "text": "Hello, how can I assist you?",
    "voice_id": "elevenlabs_john",
    "speed": 1.2
  }
  ```
- **Example Request:**
  ```sh
  curl -X POST "https://thespawnnetwork.com/api/v1/multimodal/audio/generate"
       -H "Authorization: Bearer YOUR_API_KEY"
       -H "Content-Type: application/json"
       -d '{
         "text": "Hello, how can I assist you?",
         "voice_id": "elevenlabs_john",
         "speed": 1.2
       }'
  ```
- **Response:**
  ```json
  {
    "audio_url": "https://thespawnnetwork.com/audio/generated_12345.mp3"
  }
  ```

---

## **6️⃣ Webhooks API**

### **➤ Register a Webhook**

Allows external applications to receive real-time events.

- **Endpoint:** `POST /webhooks`
- **Auth Required:** ✅ Yes
- **Request Body:**
  ```json
  {
    "event": "agent_message",
    "callback_url": "https://example.com/webhook"
  }
  ```
- **Example Request:**
  ```sh
  curl -X POST "https://thespawnnetwork.com/api/v1/webhooks"
       -H "Authorization: Bearer YOUR_API_KEY"
       -H "Content-Type: application/json"
       -d '{
         "event": "agent_message",
         "callback_url": "https://example.com/webhook"
       }'
  ```
- **Response:**
  ```json
  {
    "message": "Webhook registered successfully."
  }
  ```

---

## **Conclusion**

The Spawn API provides **powerful, scalable endpoints** for managing AI agents, multimodal interactions, and secure real-time messaging. Developers can **extend, automate, and customize** AI-powered workflows using these robust API calls.
