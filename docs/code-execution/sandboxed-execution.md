## **Secure Sandboxed Code Execution in Spawn**

Spawn provides **secure, isolated, and high-performance execution environments** for running user-submitted code across multiple programming languages.

This sandboxing ensures:

- **Complete process isolation**: Each execution runs inside its own secure container.
- **Resource constraints**: Enforced limits on CPU, memory, and execution time.
- **Filesystem restrictions**: Read-only access, no persistent storage.
- **No network access**: Prevents external communication for security.

---

## **Execution Environment**

Each execution is handled inside a **sandboxed container** with the following security policies:

| Feature                  | Description                                                                |
| ------------------------ | -------------------------------------------------------------------------- |
| **Process Isolation**    | Each execution runs in a separate **containerized process**.               |
| **Memory Limit**         | Execution is restricted to **512MB RAM** per session.                      |
| **CPU Limit**            | Containers are capped at **one virtual CPU core**.                         |
| **Execution Timeout**    | Code execution is **terminated after 10 seconds** if it exceeds the limit. |
| **Filesystem Access**    | **Read-only**, with a temp directory for ephemeral file storage.           |
| **Network Restrictions** | **Fully disabled**, preventing outbound API calls or connections.          |
| **Input Validation**     | All user input is **sanitized** before execution to prevent attacks.       |

---

## **Security Enforcement**

Spawn's sandboxing is powered by:

- **Linux Namespaces & cgroups**: Isolates processes, memory, and CPU.
- **Seccomp Filters**: Blocks unsafe system calls.
- **AppArmor/Selinux**: Limits process capabilities.
- **Ephemeral Containers**: Each execution is **destroyed after running**, ensuring no persistent data leakage.

Example system constraints enforced per execution:

```json
{
  "cpu_limit": "1 vCPU",
  "memory_limit": "512MB",
  "execution_timeout": "10s",
  "network_access": "disabled",
  "filesystem_access": "read-only"
}
```

---

## **Example API Request for Execution**

To securely execute a Python script, send the following request:

### **Request:**

```json
{
  "language": "python",
  "code": "print('Secure Execution in Spawn!')"
}
```

### **Response:**

```json
{
  "output": "Secure Execution in Spawn!\n",
  "execution_time": "0.003s",
  "exit_code": 0
}
```