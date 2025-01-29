## **🎨 Customizing the Spawn UI**

Spawn provides a **highly flexible UI framework** that allows developers to modify layouts, themes, and interactive components while maintaining seamless agent functionality.

---

### **1️⃣ Overview of UI Customization**

Spawn’s UI supports:  
✅ **Theming & Styling** – Modify colors, fonts, and components.  
✅ **Custom Layouts** – Reposition UI elements based on user needs.  
✅ **Component Injection** – Add custom elements without modifying core logic.  
✅ **API-Driven UI Updates** – Adjust interface elements dynamically.

---

### **2️⃣ Theming & Styling**

Spawn uses **Tailwind CSS** and a modular UI architecture, allowing **full customization via a configuration file**.

📌 **Modify Theme in `theme.config.ts`**

```ts
export const themeConfig = {
  primaryColor: '#FF5733',
  backgroundColor: '#121212',
  fontFamily: 'Inter, sans-serif',
  borderRadius: '8px'
}
```

✅ **Apply Custom Styles in `global.css`**

```css
:root {
  --primary-color: #ff5733;
  --background-color: #121212;
  --text-color: #ffffff;
}
```

🎨 **Dark Mode Support** – Toggle light/dark mode dynamically with:

```ts
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode')
}
```

---

### **3️⃣ Custom Layouts & Components**

Spawn allows the injection of **custom React components** into the UI framework.

✅ **Adding a Custom Header**

Modify `components/Header.tsx`:

```tsx
export default function CustomHeader() {
  return (
    <header className='bg-primary p-4'>
      <h1 className='text-xl font-bold text-white'>Welcome to Spawn</h1>
    </header>
  )
}
```

✅ **Injecting the Header into the Layout**

Modify `layout.tsx`:

```tsx
import CustomHeader from './components/Header'

export default function Layout({ children }) {
  return (
    <div>
      <CustomHeader />
      <main>{children}</main>
    </div>
  )
}
```

---

### **4️⃣ Customizing Agent Chat UI**

Spawn’s chat UI is powered by **React and WebSockets**, making real-time updates seamless.

✅ **Change Message Bubbles in `ChatBubble.tsx`**

```tsx
export default function ChatBubble({ message }) {
  return (
    <div className='rounded-lg bg-blue-500 text-white p-3 max-w-lg'>
      {message}
    </div>
  )
}
```

✅ **Custom AI Message Styles**

```tsx
const AIMessage = ({ text }) => (
  <div className='p-3 text-lg bg-gray-700 text-white rounded-lg'>🤖 {text}</div>
)
```

---

### **5️⃣ API-Driven UI Updates**

✅ **Dynamically Update UI Based on Agent Responses**

```ts
fetch('https://api.thespawnnetwork.com/agent-response')
  .then(res => res.json())
  .then(data => updateUI(data))
```

✅ **Live UI Adjustments Based on Model Output**

```ts
if (modelResponse.includes('warning')) {
  showWarningBanner()
}
```

---

### **6️⃣ Integrating Custom Webhooks**

Spawn allows UI elements to be updated in **real time via Webhooks**.

📌 **Register a Webhook in `webhooks.ts`**

```ts
export const registerWebhook = (event, callback) => {
  websocket.on(event, callback)
}
```

📌 **Listen for Agent Updates**

```ts
registerWebhook('agent_update', data => {
  updateUI(data)
})
```

---

### **7️⃣ Example Use Cases**

✅ **Branding & Custom Themes for Enterprise**  
✅ **AI Dashboard with Real-Time Status Updates**  
✅ **Dynamic UI Elements Based on AI Actions**

Spawn’s UI customization **empowers developers** to craft **tailored user experiences** while leveraging AI-driven interactions.
