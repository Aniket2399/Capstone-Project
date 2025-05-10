---

# 🎓 GradEase – Your One-Stop Graduation Store

GradEase is a full-stack MERN (MongoDB, Express, React, Node.js) based e-commerce web application that enables college students to seamlessly purchase graduation essentials such as caps & gowns, stoles, diploma frames, rings, and more. Integrated with an AI-powered chatbot (Voiceflow), the platform enhances the user experience with personalized recommendations and real-time order tracking.

---

## 🚀 Features

* 🛍️ Browse and purchase graduation products
* 🔍 Detailed product pages with categories (Cap\&Gown, Stole, Frames, Ring)
* 🛒 Shopping cart, checkout, and order history
* 👤 User authentication and profile management
* 🔐 Admin panel for managing products, users, and orders
* 🤖 AI chatbot integration (Voiceflow) for:

  * Product recommendations
  * Order status queries
* 💬 Toast notifications and responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** React, Redux, Tailwind CSS, React Router
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)
* **Chatbot:** [Voiceflow AI Assistant](https://www.voiceflow.com/)
* **Notifications:** Sonner (Toast)

---

## 📦 Installation & Setup

### Prerequisites

* Node.js (v18+ recommended)
* MongoDB (local or Atlas)
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gradease.git
cd gradease
```

### 2. Set Up Environment Variables

Create a `.env` file in the root and backend folders:

#### `.env` (in `/backend`)

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

#### `.env` (in `/frontend`)

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 4. Run the App

#### Start Backend Server

```bash
cd backend
npm run dev
```

#### Start Frontend App

```bash
cd ../frontend
npm run dev
```

Visit: `http://localhost:5173`

---

## 🤖 Chatbot Integration

The chatbot is powered by [Voiceflow](https://www.voiceflow.com/) and embedded via a script in `App.js`.

```js
useEffect(() => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
  script.async = true;
  script.onload = () => {
    window.voiceflow.chat.load({
      verify: { projectID: "68132dd1a4f475e6bf20cc75" },
      url: "https://general-runtime.voiceflow.com",
      versionID: "production",
      voice: { url: "https://runtime-api.voiceflow.com" }
    });
  };
  document.body.appendChild(script);
}, []);
```

---

## 👨‍💻 Contributors

* **Aniket Kshirsagar** – [LinkedIn](https://www.linkedin.com/in/aniketk99/)
* **Jegan Nadar**
* **Manihas Reddy**
* **Pavankumar Sakhireddy**

Capstone Project @ Pace University
Faculty Advisor: **Dr. FNU Kaleemunnisa**

---
