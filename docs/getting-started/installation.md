## **🚀 Installing Spawn: Step-by-Step Guide**

This guide walks you through installing **Spawn** on **local**, **Docker**, and **cloud-based environments**.

---

## **1️⃣ Local Installation (Bare Metal Setup)**

### **🔹 Step 1: Clone the Repository**

```bash
git clone https://github.com/your-org/spawn.git
cd spawn
```

### **🔹 Step 2: Create a Virtual Environment**

```bash
python3 -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate  # Windows
```

### **🔹 Step 3: Install Backend Dependencies**

```bash
pip install -r backend/requirements.txt
```

### **🔹 Step 4: Install Frontend Dependencies**

```bash
cd frontend
npm install
cd ..
```

### **🔹 Step 5: Configure Environment Variables**

Copy the sample `.env.example` and update the necessary values:

```bash
cp .env.example .env
nano .env  # Edit API keys and credentials
```

---

## **2️⃣ Running Spawn Locally**

### **🔹 Step 1: Start the Database & Cache**

```bash
# Start PostgreSQL (Ensure pgvector is enabled)
sudo systemctl start postgresql

# Start Redis for caching
redis-server --daemonize yes
```

### **🔹 Step 2: Start the Backend API**

```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### **🔹 Step 3: Start the Frontend UI**

```bash
cd frontend
npm run dev
```

Your **Spawn** instance is now running at **`http://localhost:3000`** 🚀.

---

## **3️⃣ Deployment with Docker**

**Spawn** is fully containerized for easy deployment.

### **🔹 Step 1: Build & Start Containers**

```bash
docker-compose up --build -d
```

### **🔹 Step 2: Check Running Services**

```bash
docker ps
```

### **🔹 Step 3: Access the Application**

The backend will be available at **`http://localhost:8000`**  
The frontend will be available at **`http://localhost:3000`**

To stop and remove containers:

```bash
docker-compose down
```

---

## **4️⃣ Deploying on Cloud Platforms**

Spawn can be deployed on **AWS, GCP, Azure, Fly.io, and Render.**

### **🔹 Fly.io Deployment**

```bash
flyctl launch --name spawn
flyctl deploy
```

### **🔹 Render Deployment**

```bash
git push render main
```
