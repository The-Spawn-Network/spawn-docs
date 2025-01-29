#### **Supported Languages in Spawn**

Spawn’s **secure execution sandbox** supports multiple programming languages, enabling **real-time AI-assisted coding, execution, and debugging**.

#### **Languages & Versions**

The following languages are currently **supported** for execution:

| Language                 | Version        | Execution Type | Notes                            |
| ------------------------ | -------------- | -------------- | -------------------------------- |
| **Python**               | `3.9+`         | Interpreted    | Default execution engine         |
| **JavaScript** (Node.js) | `18+`          | Interpreted    | Supports async functions         |
| **TypeScript**           | `5+`           | Transpiled     | Runs via Babel                   |
| **Go**                   | `1.19+`        | Compiled       | Fast execution, strong typing    |
| **C/C++**                | `GCC 11+`      | Compiled       | Supports C11 & C++17             |
| **Java**                 | `17+`          | Compiled       | Runs inside a JVM sandbox        |
| **Rust**                 | `1.65+`        | Compiled       | Memory-safe execution            |
| **PHP**                  | `8+`           | Interpreted    | Supports CLI scripts             |
| **Fortran**              | `GFortran 10+` | Compiled       | Specialized scientific computing |

#### **Execution Limits**

- **Time Limit**: Max **10 seconds** per execution.
- **Memory Limit**: **512MB** per execution.
- **Process Isolation**: Each execution **runs in its own container**.
- **Filesystem Access**: **Read-only**, no persistent storage.
- **Network Access**: **Disabled**, preventing outbound requests.

#### **Example API Request**

```json
{
  "language": "python",
  "code": "print('Hello, Spawn!')"
}
```

✅ **Response:**

```json
{
  "output": "Hello, Spawn!\n",
  "execution_time": "0.002s",
  "exit_code": 0
}
```
