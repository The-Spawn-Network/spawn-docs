## **Managing Input and Output in Spawn’s Secure Execution Environment**

Spawn provides a **structured and controlled** mechanism for handling inputs and outputs within the sandboxed execution environment. This ensures that code execution remains **predictable, secure, and efficient** while preventing unauthorized data leakage.

---

## **Input Handling**

User inputs are sanitized and processed before execution to prevent **malicious code injection** and ensure consistency.

### **Supported Input Types**

Spawn supports structured input in various formats:

- **Raw Strings**: Direct text input.
- **JSON Objects**: Structured data format.
- **File Uploads**: Limited support for ephemeral file-based processing.

### **Example API Request with Input**

To execute a Python script that accepts user input:

#### **Request:**

```json
{
  "language": "python",
  "code": "name = input('Enter your name: ')\nprint(f'Hello, {name}!')",
  "stdin": "Alice"
}
```

#### **Execution Process:**

- The `"stdin"` value (`"Alice"`) is **injected** into the script as user input.
- The sandbox **captures the standard output (stdout)** and **standard error (stderr)** separately.

#### **Response:**

```json
{
  "stdout": "Enter your name: Hello, Alice!\n",
  "stderr": "",
  "execution_time": "0.004s",
  "exit_code": 0
}
```

---

## **Output Handling**

All outputs from execution are **captured, processed, and returned in a structured format**.

### **Captured Output Streams**

| Stream        | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| **stdout**    | Standard output stream (e.g., `print()` statements).            |
| **stderr**    | Standard error stream (e.g., error messages, warnings).         |
| **Exit Code** | Process completion status (0 for success, non-zero for errors). |

### **Example Error Handling**

If an execution encounters an error, it is safely captured and returned:

#### **Request:**

```json
{
  "language": "python",
  "code": "print(1 / 0)"
}
```

#### **Response:**

```json
{
  "stdout": "",
  "stderr": "ZeroDivisionError: division by zero\n",
  "execution_time": "0.002s",
  "exit_code": 1
}
```

---

## **File-Based Input/Output**

Spawn supports temporary file-based execution where scripts require file input.

#### **Example File Processing Request**

```json
{
  "language": "python",
  "code": "with open('input.txt', 'r') as f:\n  print(f.read())",
  "files": {
    "input.txt": "Hello, Spawn!"
  }
}
```

#### **Response:**

```json
{
  "stdout": "Hello, Spawn!\n",
  "stderr": "",
  "execution_time": "0.005s",
  "exit_code": 0
}
```

📌 **Note:** Files are stored **ephemerally** within the execution container and are **deleted immediately after execution**.

---

## **Security Considerations**

- **Input Validation**: Prevents malicious code injection.
- **Output Filtering**: Ensures controlled and structured responses.
- **Strict Execution Context**: Filesystem access is **restricted** to prevent unauthorized operations.
