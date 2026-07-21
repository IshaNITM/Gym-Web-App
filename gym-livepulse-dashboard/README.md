# 🏋️ Gym LivePulse Dashboard

A full-stack MERN dashboard for monitoring gym operations, member activity, occupancy, revenue analytics, and anomaly detection. The application provides real-time insights into gym performance through an interactive and responsive dashboard.

## 🚀 Live Demo

**Frontend:** https://gym-web-app-two.vercel.app

**Backend API:** https://gym-web-app-3-6knh.onrender.com

---

## 📂 GitHub Repository

https://github.com/IshaNITM/Gym-Web-App

---

## ✨ Features

- Gym Dashboard with key performance metrics
- Member Management
- Gym Occupancy Monitoring
- Revenue Analytics
- Churn Risk Analysis
- Anomaly Detection
- RESTful API Integration
- Responsive UI
- MongoDB Database Integration
- Auto Database Seeding

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router
- Recharts
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📁 Project Structure

```
gym-livepulse-dashboard
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   ├── seed
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/IshaNITM/Gym-Web-App.git
```

Navigate to the project:

```bash
cd Gym-Web-App/gym-livepulse-dashboard
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
AUTO_SEED_IF_EMPTY=true
```

Start the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

---

## 🌐 Production Deployment

### Frontend

- Hosted on **Vercel**

### Backend

- Hosted on **Render**

### Database

- Hosted on **MongoDB Atlas**

---

## API Endpoints

### Health

```
GET /api/health
```

### Gyms

```
GET /api/gyms
GET /api/gyms/:id
GET /api/gyms/:id/occupancy
```

### Members

```
GET /api/members
```

### Analytics

```
GET /api/analytics/revenue
GET /api/analytics/churn-risk
```

### Anomalies

```
GET /api/anomalies
```

---
## Screenshots
<img width="1867" height="882" alt="image" src="https://github.com/user-attachments/assets/96e6cfdd-3524-4922-a7c7-5594a68517e6" />
<img width="1865" height="972" alt="image" src="https://github.com/user-attachments/assets/9655381f-9921-4dde-8e48-bbab373c44f9" />



## 📊 Dashboard Includes

- Revenue Overview
- Gym Utilization
- Occupancy Monitoring
- Member Statistics
- Churn Prediction
- Operational Anomaly Detection

---

## 👩‍💻 Author

**Isha Pal**

- GitHub: https://github.com/IshaNITM
- LinkedIn: https://www.linkedin.com/in/isha-pal

---


## 📄 License

This project is created for learning, portfolio, and demonstration purposes.
