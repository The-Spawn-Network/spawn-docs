## **🔍 Overview**

Debugging Spawn involves **analyzing errors, monitoring logs, and troubleshooting API interactions**. This guide covers **best practices for debugging**, including **diagnosing API failures, monitoring logs, and troubleshooting agent behavior**.

---

## **1️⃣ Enabling Debug Mode**

Spawn provides built-in **debugging tools** for identifying issues quickly.

### **✅ Enable Debug Logging**

For in-depth logs, set the **DEBUG_MODE** environment variable:

```bash
export DEBUG_MODE=true
```

Alternatively, for local development:

```json
{
  "debug_mode": true
}
```

With debugging enabled, API responses include **detailed error messages and stack traces**.

---

## **2️⃣ Monitoring Logs**

Spawn supports **real-time logging** through multiple methods.

### **📜 1. API Logs**

**View live API logs** using:

```bash
tail -f logs/spawn_api.log
```

API logs capture:

- **Request & Response Data**
- **Error Messages**
- **Execution Times**

### **📜 2. Execution Logs**

For **agent and code execution logs**, check:

```bash
tail -f logs/code_execution.log
```

Useful for debugging **sandbox execution issues**.

### **📜 3. System Logs**

System-wide logs track **performance metrics** and **server health**:

```bash
journalctl -u spawn.service --follow
```

---

## **3️⃣ Debugging API Failures**

### **🛑 Step 1: Check API Response**

Spawn’s API returns **detailed error messages** in JSON format.

**Example Error Response:**

```json
{
  "error": "Invalid API key",
  "status_code": 401,
  "message": "The provided API key is not authorized."
}
```

🔹 **Solution:** Check **API key validity** and ensure proper authentication.

---

### **🛑 Step 2: Debugging Rate Limits**

If encountering **429 Too Many Requests**, review:

```bash
tail -f logs/spawn_rate_limit.log
```

**Solution:**  
✔️ Implement **exponential backoff**  
✔️ Optimize **request frequency**  
✔️ Upgrade to a **higher rate limit tier**

---

### **🛑 Step 3: Debugging Webhooks**

If webhooks fail, use:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"test": true}' https://your-webhook-url
```

Check logs for **webhook delivery issues**:

```bash
tail -f logs/webhooks.log
```

✔️ **Ensure Webhook URL is reachable**  
✔️ **Check for SSL/TLS issues**

---

## **4️⃣ Debugging Agent Behavior**

### **⚡ Debug AI Model Responses**

If an agent produces unexpected outputs, review:

```bash
tail -f logs/agent_interactions.log
```

Common issues:

- **Hallucinated responses** ➝ Adjust prompt instructions
- **Missing context** ➝ Ensure proper conversation memory
- **Slow responses** ➝ Optimize model settings

---

## **5️⃣ Debugging Code Execution**

### **🖥️ Viewing Code Execution Logs**

For sandboxed execution:

```bash
tail -f logs/code_execution.log
```

#### **Common Code Execution Issues**

| **Error Type**        | **Cause**                                 | **Solution**                                                              |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------------------- |
| Timeout               | Infinite loop or high CPU usage           | Optimize code logic                                                       |
| Unsupported Language  | Attempting to run an unsupported language | Check **[supported languages](../code-execution/supported-languages.md)** |
| Memory Limit Exceeded | Excessive memory usage                    | Optimize data structures                                                  |

---

## **6️⃣ Debugging Multimodal Processing**

### **🖼️ Image Processing Issues**

If image uploads fail:

```bash
tail -f logs/image_processing.log
```

✔️ Ensure **image format is supported**  
✔️ Check **Cloudinary API response**

### **🎙️ Audio Processing Issues**

For **speech recognition & text-to-speech**:

```bash
tail -f logs/audio_processing.log
```

✔️ Verify **ElevenLabs API key**  
✔️ Confirm **audio format compatibility**

---

## **7️⃣ Performance Optimization**

To detect performance bottlenecks:

```bash
htop
```

- **High CPU usage?** ➝ Check code execution load
- **High memory usage?** ➝ Optimize caching & database queries

---

## **📌 Conclusion**

Debugging Spawn involves **analyzing logs, API responses, and execution traces**. With these tools, you can quickly identify and resolve issues.
