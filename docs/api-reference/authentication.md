## **Authentication & API Keys** (`api-reference/authentication.md`)

### **Overview**

Spawn provides a **secure API authentication system** to control access and ensure safe interactions between clients and AI agents. Authentication is handled via **API keys** or **OAuth tokens**, depending on the deployment model.

---

## **1️⃣ API Authentication Methods**

Spawn supports **two primary authentication mechanisms**:

| Method        | Use Case                             | Security Level |
| ------------- | ------------------------------------ | -------------- |
| **API Keys**  | Server-to-server requests            | 🔒 High        |
| **OAuth 2.0** | User authentication & access control | 🔐 Very High   |

---

## **2️⃣ API Key-Based Authentication**

For most use cases, Spawn issues API keys that authenticate every request.

### **Generating an API Key**

To generate an API key:

1. **Login to the Spawn Developer Dashboard** (`thespawnnetwork.com/developer`).
2. Navigate to **API Keys** under **Account Settings**.
3. Click **Generate New Key** and select a permission scope.
4. Copy and store the API key securely.

### **Example API Request Using API Key**

Include your API key in the `Authorization` header:

```sh
curl -X GET "https://thespawnnetwork.com/api/v1/agents"
     -H "Authorization: Bearer YOUR_API_KEY"
     -H "Content-Type: application/json"
```

### **Revoking an API Key**

If a key is compromised, revoke it using:

```sh
curl -X DELETE "https://thespawnnetwork.com/api/v1/keys/YOUR_API_KEY"
     -H "Authorization: Bearer ADMIN_API_KEY"
```

---

## **3️⃣ OAuth 2.0 Authentication (For User Sessions)**

OAuth 2.0 is used for **third-party applications** that integrate with Spawn and require user authentication.

### **OAuth Authorization Flow**

1. **Client Requests Authorization**  
   The client application redirects users to Spawn’s authentication page.
2. **User Logs In & Grants Permissions**  
   If authenticated, Spawn issues an authorization code.

3. **Client Exchanges Authorization Code for Token**  
   The client makes a request to the token endpoint.

4. **API Calls Are Made Using Access Token**  
   The client app interacts with Spawn’s API on behalf of the user.

### **Example OAuth Token Request**

```sh
curl -X POST "https://thespawnnetwork.com/api/v1/oauth/token"
     -d "client_id=YOUR_CLIENT_ID"
     -d "client_secret=YOUR_CLIENT_SECRET"
     -d "grant_type=authorization_code"
     -d "code=AUTHORIZATION_CODE"
```

**Response:**

```json
{
  "access_token": "abcd1234",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

---

## **4️⃣ API Key Security Best Practices**

- **Do Not Share Keys Publicly** – Store API keys securely.
- **Rotate Keys Regularly** – Expire and regenerate API keys periodically.
- **Use Least Privilege Access** – Assign keys only the permissions they need.
- **Monitor API Usage** – Set rate limits and track key usage via logs.

---

## **Conclusion**

Spawn supports **API key-based and OAuth 2.0 authentication**, ensuring **secure and scalable** access to AI-powered interactions. Developers can choose the method that best fits their security model and use case.
