## **🛠️ System Requirements & Dependencies**

Before installing **Spawn**, ensure your system meets the following hardware and software prerequisites.

---

### **1️⃣ Supported Operating Systems**

✅ **Linux** (Ubuntu 20.04+, Debian, CentOS, Arch)  
✅ **macOS** (Monterey, Ventura, Sonoma)  
✅ **Windows** (WSL2 or Native)

---

### **2️⃣ Minimum Hardware Requirements**

🔹 **CPU**: Quad-core processor (Intel i5 / AMD Ryzen 5 or higher)  
🔹 **RAM**: 8GB minimum (16GB recommended for high-performance execution)  
🔹 **Storage**: 20GB free disk space (for logs, cached embeddings, and models)  
🔹 **GPU (Optional but Recommended)**: NVIDIA RTX 3060+ (CUDA support for local AI models)

---

### **3️⃣ Required Software & Dependencies**

| **Dependency**                          | **Version Required** | **Installation Command**                |
| --------------------------------------- | -------------------- | --------------------------------------- | --- |
| **Node.js**                             | 18.x or later        | `nvm install 18 && nvm use 18`          |
| **Python**                              | 3.9+                 | `pyenv install 3.9 && pyenv global 3.9` |
| **Docker & Docker Compose**             | Latest Stable        | `curl -fsSL https://get.docker.com      | sh` |
| **PostgreSQL (pgvector support)**       | 14+                  | `sudo apt install postgresql`           |
| **Redis (for caching & rate limiting)** | Latest Stable        | `sudo apt install redis`                |
| **FFmpeg (for audio processing)**       | Latest Stable        | `sudo apt install ffmpeg`               |

---

### **4️⃣ Installing Required Libraries**

Once the system dependencies are installed, install required libraries:

#### **🔹 Backend (FastAPI, PostgreSQL, AI Model Support)**

```bash
pip install -r backend/requirements.txt
```

#### **🔹 Frontend (Docusaurus, WebSocket, Real-time UI)**

```bash
cd frontend && npm install
```

#### **🔹 AI Model Support (Optional)**

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
pip install transformers sentence-transformers
```

---

### **5️⃣ Cloud Provider Support (Optional)**

If deploying **Spawn** on a **cloud-based infrastructure**, ensure your provider supports:

✅ **AWS Bedrock** (for Bedrock models)  
✅ **Azure OpenAI** (for GPT-4 & AI services)  
✅ **Google Cloud Vertex AI** (for Gemini & other models)  
✅ **Anthropic Claude** (for Claude-based agents)  
✅ **Ollama / Local Model Hosting** (for self-hosted LLaMA models)  
✅ **On-Premise Inference** (via NVIDIA Triton, Ollama, and Hugging Face Inference API)

---

### **6️⃣ Network & Firewall Requirements**

Ensure the following ports are **open** if running **Spawn on a private network**:

| **Service**                     | **Port** | **Description**                                  |
| ------------------------------- | -------- | ------------------------------------------------ |
| **FastAPI Backend**             | `8000`   | API Services                                     |
| **Frontend UI**                 | `3000`   | Web Application                                  |
| **PostgreSQL**                  | `5432`   | Database                                         |
| **Redis Cache**                 | `6379`   | Rate Limiting & Caching                          |
| **WebSocket Support**           | `8080`   | Real-Time Communication                          |
| **ElevenLabs Audio Processing** | `9000`   | Speech-to-Text & Text-to-Speech                  |
| **Cloudinary Image Storage**    | `443`    | Secure Image Upload & Retrieval                  |
| **AI Model API Access**         | `443`    | Secure API Calls to OpenAI, Anthropic, Vertex AI |

---

### **7️⃣ Authentication & API Key Setup**

Before running **Spawn**, configure API keys for external model integrations:

#### **🔹 OpenAI API Key (For GPT-4, GPT-4o, etc.)**

```bash
export OPENAI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxx"
```

#### **🔹 ElevenLabs API Key (For Voice Generation & STT)**

```bash
export ELEVEN_LABS_API_KEY="xxxxxxxxxxxx"
```

#### **🔹 Anthropic API Key (For Claude models)**

```bash
export CLAUDE_API_KEY="xxxxxxxxxxxx"
```

#### **🔹 Google Vertex AI API Key (For Gemini Models)**

```bash
export GOOGLE_AI_API_KEY="xxxxxxxxxxxx"
```

#### **🔹 AWS Bedrock API Keys (For Amazon Titan & Claude Bedrock)**

```bash
export AWS_ACCESS_KEY_ID="YOUR_AWS_KEY"
export AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET"
```

#### **🔹 Ollama API Key (For local LLaMA models)**

```bash
export OLLAMA_API_KEY="xxxxxxxxxxxx"
```

#### **🔹 Cloudinary API Key (For Image Upload & Processing)**

```bash
export CLOUDINARY_CLOUD_NAME="your-cloud-name"
export CLOUDINARY_API_KEY="your-api-key"
export CLOUDINARY_API_SECRET="your-api-secret"
```

#### **🔹 Redis Configuration (For Caching & Rate Limiting)**

```bash
export REDIS_HOST="localhost"
export REDIS_PORT="6379"
```

#### **🔹 PostgreSQL Configuration (For Vector DB & Indexing)**

```bash
export POSTGRES_DB="spawn_db"
export POSTGRES_USER="spawn_user"
export POSTGRES_PASSWORD="your-password"
export POSTGRES_HOST="localhost"
export POSTGRES_PORT="5432"
```
