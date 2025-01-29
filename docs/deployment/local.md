## **🚀 Deploying Spawn Locally**

Running Spawn on a local environment is ideal for **development, testing, and offline experimentation**. This guide walks through **setting up, running, and debugging** a local instance of Spawn.

---

## **1️⃣ Prerequisites**

Before proceeding, ensure you have the following:

✅ **Node.js (v18+)** – Install via [Node.js Official Site](https://nodejs.org/)  
✅ **Yarn or npm** – For package management  
✅ **Docker (Optional)** – If using containerized dependencies  
✅ **Python 3.9+ (Optional)** – If working with local code execution

---

## **2️⃣ Cloning the Repository**

First, clone the Spawn repository:

```sh
git clone https://github.com/thespawnnetwork/spawn.git
cd spawn
```

---

## **3️⃣ Installing Dependencies**

Use **Yarn** (preferred) or **npm** to install dependencies:

```sh
# Using Yarn
yarn install

# Using npm
npm install
```

If using **pnpm**, install with:

```sh
pnpm install
```

---

## **4️⃣ Setting Up Environment Variables**

Spawn requires a `.env` file for **API keys, database connections, and model configurations**.

📌 **Create a `.env.local` file** in the root directory:

```sh
cp .env.example .env.local
```

Then, open `.env.local` and configure essential settings:

```ini
# Server Config
PORT=3000

# AI Model Settings
OPENAI_API_KEY=your-key-here
CLOUDINARY_API_KEY=your-key-here
ELEVEN_LABS_API_KEY=your-key-here

# Database (Optional, for persistence)
DATABASE_URL=postgres://user:password@localhost:5432/spawn
```

💡 **Tip:** If you’re running locally without a database, Spawn can operate in a **stateless mode**.

---

## **5️⃣ Running the Development Server**

Start Spawn in development mode:

```sh
yarn dev
```

or

```sh
npm run dev
```

You should see output similar to:

```
✔ Server running at http://localhost:3000
✔ AI Models Initialized
✔ WebSockets Connected
```

---

## **6️⃣ Running with Docker** _(Optional)_

For an isolated environment, run Spawn via **Docker**:

```sh
docker-compose up --build
```

📌 **This will:**  
✅ Launch the backend API  
✅ Start the frontend UI  
✅ Initialize a local database (if enabled)

---

## **7️⃣ Testing the Local Deployment**

### **Verify API Endpoints**

Check if the API is running by visiting:

```
http://localhost:3000/api/status
```

Expected response:

```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

### **Access the Web Interface**

Open **http://localhost:3000** in a browser to interact with Spawn’s UI.

---

## **8️⃣ Debugging Common Issues**

### 🔴 **Port Conflict**

If `PORT 3000 is already in use`:

```sh
export PORT=4000 && yarn dev
```

### 🔴 **Dependency Errors**

Try removing `node_modules` and reinstalling:

```sh
rm -rf node_modules && yarn install
```

### 🔴 **Docker Container Not Starting**

Check logs with:

```sh
docker-compose logs -f
```

---

## **9️⃣ Local Deployment Best Practices**

✅ **Use `.env.local` for custom configs**  
✅ **Enable hot-reloading for UI changes**  
✅ **Run `docker-compose up -d` for persistent containers**
