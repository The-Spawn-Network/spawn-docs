### **Overview**

Spawn Webhooks provide **real-time event notifications**, allowing applications to receive updates without polling the API. This ensures efficient and immediate processing of critical events such as:

- **Agent activity updates**
- **Conversation completions**
- **Authentication & session events**
- **Error & system alerts**

### **1️⃣ How Webhooks Work**

1. **Register a Webhook URL** in your Spawn developer dashboard.
2. **Receive POST Requests** whenever a specified event occurs.
3. **Process the Event Payload** and take appropriate actions.
4. **Acknowledge Receipt** by responding with a **2xx HTTP status code**.

---

### **2️⃣ Webhook Configuration**

#### **Registering a Webhook**

Webhooks are configured in **two ways**:

1. **Via Dashboard:**

   - Navigate to **Spawn Developer Dashboard** → **Webhooks**
   - Add a new Webhook URL & select **events** to subscribe to.
   - Click **Save**.

2. **Via API (Programmatic Setup)**
   Spawn allows dynamic webhook registration using the API.

#### **API Request**

```http
POST https://thespawnnetwork.com/api/v1/webhooks
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "url": "https://your-server.com/webhook-endpoint",
  "events": ["agent_created", "message_received"]
}
```

#### **Example Response**

```json
{
  "id": "wh_123456789",
  "url": "https://your-server.com/webhook-endpoint",
  "events": ["agent_created", "message_received"],
  "status": "active"
}
```

#### **Updating Webhooks**

Modify webhook settings using:

```http
PATCH https://thespawnnetwork.com/api/v1/webhooks/wh_123456789
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "events": ["agent_created", "conversation_updated"]
}
```

---

### **3️⃣ Webhook Event Types**

Spawn supports various event types categorized under **Agent Activity, User Interactions, and System Events**.

#### **Agent Events**

| Event Name      | Description                                  |
| --------------- | -------------------------------------------- |
| `agent_created` | Triggered when an agent is created.          |
| `agent_updated` | Fires when an agent’s settings are modified. |
| `agent_deleted` | Triggered when an agent is removed.          |

#### **Message & Conversation Events**

| Event Name             | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `message_received`     | Fires when an agent receives a new message.      |
| `conversation_updated` | Triggered when a conversation state is modified. |
| `conversation_closed`  | Fires when a session is completed.               |

#### **User & Authentication Events**

| Event Name        | Description                      |
| ----------------- | -------------------------------- |
| `user_signed_up`  | Fires when a new user registers. |
| `user_logged_in`  | Triggered on successful login.   |
| `user_logged_out` | Fires when a user logs out.      |

#### **Error & System Events**

| Event Name            | Description                            |
| --------------------- | -------------------------------------- |
| `rate_limit_exceeded` | Fires when an API rate limit is hit.   |
| `server_error`        | Triggered on internal server failures. |

---

### **4️⃣ Webhook Payload Structure**

Each webhook request is sent as a **POST request** with a **JSON payload**.

#### **Example: `message_received` Event**

```json
{
  "event": "message_received",
  "timestamp": 1710000000,
  "data": {
    "agent_id": "agent_12345",
    "user_id": "user_67890",
    "message": "Hello, how can I help you?",
    "conversation_id": "conv_98765"
  }
}
```

#### **Example: `agent_created` Event**

```json
{
  "event": "agent_created",
  "timestamp": 1710000000,
  "data": {
    "agent_id": "agent_12345",
    "name": "Spawn Assistant",
    "created_by": "user_67890"
  }
}
```

---

### **5️⃣ Security & Verification**

Spawn **secures webhooks** using **HMAC-SHA256 signature verification** to **prevent unauthorized tampering**.

#### **Webhook Signature**

Each request includes a **Spawn-Signature header**, which is an HMAC-SHA256 hash of the payload.

Example:

```
Spawn-Signature: sha256=abcdef1234567890abcdef1234567890
```

#### **Verifying Webhooks (Node.js Example)**

```javascript
const crypto = require('crypto')

function verifySignature(req, secret) {
  const signature = req.headers['spawn-signature']
  const payload = JSON.stringify(req.body)
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')

  return signature === `sha256=${expectedSignature}`
}
```

#### **Handling Unauthorized Webhooks**

If verification fails, return **HTTP 401 Unauthorized**:

```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json

{
  "error": "Invalid signature"
}
```

---

### **6️⃣ Webhook Best Practices**

- **Use HTTPS** for secure communication.
- **Verify Signatures** to prevent spoofing attacks.
- **Implement Retry Logic**: If your server fails to respond, Spawn **automatically retries** delivery **up to 3 times**.
- **Use an Event Queue**: Buffer incoming webhooks using a queue like **Redis or RabbitMQ** to avoid API rate limiting.

---

### **7️⃣ Managing Webhooks**

#### **Listing Registered Webhooks**

```http
GET https://thespawnnetwork.com/api/v1/webhooks
Authorization: Bearer YOUR_API_KEY
```

#### **Deleting a Webhook**

```http
DELETE https://thespawnnetwork.com/api/v1/webhooks/wh_123456789
Authorization: Bearer YOUR_API_KEY
```

---

### **8️⃣ Webhook Failure Handling**

Spawn uses an **automated retry mechanism**:

- **First failure**: Retry after **10 seconds**.
- **Second failure**: Retry after **30 seconds**.
- **Third failure**: Final attempt after **2 minutes**.
- **After 3 failed attempts**, the webhook is **disabled**.

Example failed webhook log:

```json
{
  "event": "conversation_updated",
  "status": "failed",
  "attempts": 3,
  "last_attempt": "1710000000"
}
```

---

### **Conclusion**

Webhooks provide **real-time updates** to keep external systems in sync with Spawn’s AI-driven platform.  
By **verifying signatures, handling retries, and structuring payloads correctly**, developers can build **reliable** and **secure** webhook integrations.
