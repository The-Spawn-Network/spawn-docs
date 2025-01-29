## **🌍 Deploying Spawn on the Cloud**

Running Spawn in the cloud enables **scalability, availability, and integration with external AI models and databases**. This guide covers **cloud hosting options, deployment steps, and environment configurations** for production use.

---

## **1️⃣ Choosing a Cloud Provider**

Spawn supports **multiple cloud platforms**:

✅ **Vercel** – Best for frontend-only deployments  
✅ **Render** – Full-stack, supports **backend, frontend, and database**  
✅ **Fly.io** – Optimized for **Docker-based deployments**  
✅ **AWS / GCP / Azure** – Best for **enterprise-scale hosting**  
✅ **DigitalOcean / Linode** – Good for VPS-based deployments

---

## **2️⃣ Deployment Methods**

Choose a deployment method based on your cloud provider:

### **🟢 Vercel Deployment (Frontend Only)**

1️⃣ Install the Vercel CLI:

```sh
npm install -g vercel
```

2️⃣ Link your Spawn project:

```sh
vercel
```

3️⃣ Deploy:

```sh
vercel deploy --prod
```

---

### **🔵 Render Deployment (Full Stack)**

1️⃣ Create a **Web Service** on [Render](https://render.com/)  
2️⃣ Connect your GitHub repo  
3️⃣ Set **Build Command**:

```sh
yarn install && yarn build
```

4️⃣ Set **Start Command**:

```sh
yarn start
```

5️⃣ Add **Environment Variables** from `.env.local`

---

### **🟡 Fly.io Deployment (Dockerized)**

1️⃣ Install Fly CLI:

```sh
curl -L https://fly.io/install.sh | sh
```

2️⃣ Initialize Fly App:

```sh
fly launch
```

3️⃣ Deploy:

```sh
fly deploy
```

---

### **🟠 AWS EC2 / GCP Compute Engine** _(Manual VPS Setup)_

1️⃣ **Provision a server** (Ubuntu 22.04 recommended)  
2️⃣ Install **Node.js, Yarn, and Docker**:

```sh
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs yarn docker
```

3️⃣ **Clone the repository**:

```sh
git clone https://github.com/thespawnnetwork/spawn.git
cd spawn
```

4️⃣ **Set up `.env` and install dependencies**:

```sh
cp .env.example .env
yarn install
```

5️⃣ **Run the server**:

```sh
yarn start
```

6️⃣ **(Optional) Run with PM2 for persistence**:

```sh
npm install -g pm2
pm2 start yarn --name spawn -- start
```

---

## **3️⃣ Configuring Cloud Storage (For Images & Files)**

Spawn requires **Cloudinary** for image and file storage.

1️⃣ **Create a Cloudinary account** at [cloudinary.com](https://cloudinary.com/)  
2️⃣ Retrieve your **API Key & Secret**  
3️⃣ Add them to your `.env` file:

```ini
CLOUDINARY_API_KEY=your-key
CLOUDINARY_API_SECRET=your-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
```

---

## **4️⃣ Connecting to a Cloud Database** _(Optional)_

If using **PostgreSQL, Supabase, or Firebase**, configure it:

### **PostgreSQL (Supabase / RDS / NeonDB)**

1️⃣ Create a **PostgreSQL database**  
2️⃣ Add your database URL to `.env`:

```ini
DATABASE_URL=postgres://user:password@host:5432/spawn
```

3️⃣ Run migrations:

```sh
yarn migrate
```

---

## **5️⃣ Scaling & Load Balancing**

For high availability, use:

✅ **Auto-scaling (AWS Lambda, Google Cloud Functions)**  
✅ **Load balancers (Nginx, AWS ALB, Cloudflare Load Balancer)**  
✅ **Caching (Redis, Cloudflare Edge Caching)**

Example: Running multiple instances with **PM2 Cluster Mode**:

```sh
pm2 start yarn --name spawn -i max -- start
```

---

## **6️⃣ Monitoring & Logging** _(Production Readiness)_

For production, enable **logging & monitoring**:

✅ **Log Management:** Use **Winston, Datadog, or AWS CloudWatch**  
✅ **Error Tracking:** Enable **Sentry** integration  
✅ **Performance Monitoring:** Use **New Relic or OpenTelemetry**

Example: Logging with Winston:

```js
const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
})

logger.info('Spawn is running on the cloud!')
```

---

## **7️⃣ Running in Production Mode**

When deploying to production, use **optimized settings**:

```sh
yarn build
yarn start
```

For Docker-based deployments:

```sh
docker build -t spawn .
docker run -d -p 3000:3000 spawn
```
