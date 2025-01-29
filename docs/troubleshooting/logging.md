## **📜 Overview**

Logging is **essential** for monitoring Spawn’s performance, debugging issues, and ensuring smooth operations. This guide covers **log types, configuration, and best practices** for analyzing system behavior.

---

## **1️⃣ Types of Logs in Spawn**

Spawn generates multiple **log categories**, each serving a specific purpose.

| **Log Type**    | **Purpose**                                              | **File Location**           |
| --------------- | -------------------------------------------------------- | --------------------------- |
| API Logs        | Tracks all incoming requests, responses, and errors      | `logs/spawn_api.log`        |
| Execution Logs  | Logs AI agent interactions and code execution            | `logs/code_execution.log`   |
| Webhook Logs    | Captures incoming and outgoing webhook events            | `logs/webhooks.log`         |
| Rate Limit Logs | Tracks API rate-limiting violations                      | `logs/spawn_rate_limit.log` |
| Security Logs   | Logs authentication, access control, and security events | `logs/security.log`         |
| System Logs     | General service health, memory, CPU usage, and crashes   | `/var/log/spawn_system.log` |

---

## **2️⃣ Enabling & Configuring Logging**

### **🔧 Enabling Logs**

By default, logging is enabled. You can configure logging settings in your **`.env`** file:

```env
LOG_LEVEL=debug
LOG_FILE_PATH=logs/spawn_api.log
```

Alternatively, modify the **configuration JSON**:

```json
{
  "logging": {
    "level": "debug",
    "output": "logs/spawn_api.log"
  }
}
```

**Available Log Levels:**
| Level | Description |
|-------|------------|
| `debug` | Detailed logs, useful for development |
| `info` | General system activity |
| `warn` | Potential issues |
| `error` | Errors requiring immediate attention |

---

## **3️⃣ Viewing Logs in Real-Time**

### **📡 Live Log Streaming**

Use the `tail -f` command to monitor logs in real-time:

```bash
tail -f logs/spawn_api.log
```

For **execution logs**:

```bash
tail -f logs/code_execution.log
```

For **system logs**:

```bash
journalctl -u spawn.service --follow
```

---

## **4️⃣ Debugging API Issues via Logs**

### **🔍 Checking API Logs**

If you encounter **unexpected API behavior**, inspect API logs:

```bash
tail -f logs/spawn_api.log
```

Example log entry:

```json
{
  "timestamp": "2025-01-29T03:45:00Z",
  "level": "error",
  "message": "Invalid API key",
  "endpoint": "/api/execute",
  "status_code": 401
}
```

**Solution:** Verify API key authentication settings.

---

## **5️⃣ Debugging Code Execution Issues**

### **🔎 Execution Logs**

For debugging **sandboxed execution**, check:

```bash
tail -f logs/code_execution.log
```

Example log entry:

```json
{
  "timestamp": "2025-01-29T03:50:00Z",
  "level": "warn",
  "message": "Execution time exceeded limit",
  "code": "while(true) {}",
  "language": "JavaScript",
  "execution_time": "10s"
}
```

**Solution:** Optimize execution time or apply timeout handling.

---

## **6️⃣ Monitoring Webhooks**

### **📡 Webhook Logging**

If webhooks fail to trigger, inspect:

```bash
tail -f logs/webhooks.log
```

Example webhook error:

```json
{
  "timestamp": "2025-01-29T03:55:00Z",
  "level": "error",
  "message": "Webhook delivery failed",
  "url": "https://your-webhook-url",
  "status_code": 500
}
```

**Solution:** Verify webhook endpoint configuration.

---

## **7️⃣ Security Logging & Access Control**

### **🔐 Security Logs**

To monitor **authentication failures, token usage, and unauthorized access attempts**:

```bash
tail -f logs/security.log
```

Example:

```json
{
  "timestamp": "2025-01-29T04:00:00Z",
  "level": "warn",
  "message": "Multiple failed login attempts",
  "user": "admin",
  "ip": "192.168.1.10"
}
```

**Solution:** Review security policies and enforce rate limits.

---

## **8️⃣ Log Rotation & Storage Management**

### **🗄️ Managing Log Size**

Over time, logs grow **large**. To prevent excessive disk usage:

- **Rotate Logs**: Use `logrotate` to limit log file sizes.
- **Archive Old Logs**: Compress logs periodically.
- **Set Log Retention Policy**:
  ```json
  {
    "logging": {
      "retention_days": 30
    }
  }
  ```

### **🔄 Enabling Log Rotation**

Create a `logrotate` configuration file (`/etc/logrotate.d/spawn`):

```bash
/var/log/spawn_*.log {
    daily
    rotate 7
    compress
    missingok
    notifempty
}
```

Run:

```bash
logrotate -f /etc/logrotate.d/spawn
```

---

## **9️⃣ Best Practices for Effective Logging**

✔️ **Set log levels appropriately** (`debug` for development, `info` for production)  
✔️ **Use structured JSON logging** for better parsing  
✔️ **Archive logs periodically** to prevent disk overflow  
✔️ **Monitor logs in real-time** using `tail -f`  
✔️ **Analyze trends** in error logs to detect system health issues

---

## **📌 Conclusion**

Logging is crucial for **troubleshooting, monitoring system health, and debugging API interactions**. By implementing **structured logging and monitoring practices**, you ensure Spawn remains stable and performant.
