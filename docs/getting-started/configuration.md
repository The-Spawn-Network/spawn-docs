## **⚙️ Configuring Spawn for Optimal Performance**

Once **Spawn** is installed, the next step is configuring it for optimal performance, API integrations, and security.

---

## **1️⃣ Environment Variables & Configuration Files**

### **🔹 Setting Up the `.env` File**

Spawn relies on environment variables for configuring API keys, database connections, and third-party integrations.

Copy the example configuration:

```bash
cp .env.example .env
```

Edit the `.env` file:

```bash
nano .env  # Use your preferred text editor
```

Update the necessary values:

```
# Core System Configuration
SPAWN_ENV=production  # Options: development, production
SPAWN_SECRET_KEY=your-secure-key

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/spawn_db

# Redis Configuration (for caching and job queues)
REDIS_URL=redis://localhost:6379/0

# AI Model API Keys
OPENAI_API_KEY=your-openai-key
CLOUDINARY_API_KEY=your-cloudinary-key
ELEVEN_LABS_API_KEY=your-eleven-labs-key

# Embedding & Search
ALGOLIA_APP_ID=your-algolia-app-id
ALGOLIA_API_KEY=your-algolia-api-key
```

---

## **2️⃣ API Key Configuration**

Spawn integrates with multiple AI services. Ensure your API keys are set up correctly.

### **🔹 OpenAI & Azure OpenAI**

Used for AI models like GPT-4 and GPT-4o.

```env
OPENAI_API_KEY=your-openai-key
```

### **🔹 Eleven Labs (Voice Synthesis)**

Used for AI voice generation.

```env
ELEVEN_LABS_API_KEY=your-eleven-labs-key
```

### **🔹 Cloudinary (Avatar & Image Processing)**

Used for face detection and avatar hosting.

```env
CLOUDINARY_API_KEY=your-cloudinary-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_SECRET=your-cloudinary-secret
```

### **🔹 Algolia Search**

Used for fast vector-based search indexing.

```env
ALGOLIA_APP_ID=your-algolia-app-id
ALGOLIA_API_KEY=your-algolia-api-key
```

---

## **3️⃣ Database Configuration**

### **🔹 PostgreSQL (Primary Data Store)**

Spawn uses **PostgreSQL** with **pgvector** for storing AI embeddings and conversations.

Make sure PostgreSQL is running:

```bash
sudo systemctl start postgresql
```

Run migrations:

```bash
cd backend
alembic upgrade head
```

### **🔹 Redis (Caching & Job Queues)**

```bash
redis-server --daemonize yes
```

---

## **4️⃣ Configuring Webhooks & Event Listeners**

Spawn supports webhook notifications for events like message completions and agent actions.

Example webhook configuration:

```json
{
  "event": "message_completion",
  "url": "https://your-webhook-url.com",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer your-webhook-secret"
  }
}
```

To set up:

- **Go to `config/webhooks.json`**
- **Add your webhook endpoints**
- **Restart the server**

---

## **5️⃣ Scaling & Performance Tuning**

To optimize Spawn for high availability:

### **🔹 Increase API Request Limits**

Modify the `.env` file:

```
SPAWN_MAX_REQUESTS_PER_MINUTE=1000
SPAWN_MAX_CONCURRENT_JOBS=10
```

### **🔹 Enable Load Balancing**

For production environments:

```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker backend.main:app
```
