# 🏋️ LivePulse Dashboard

A production-inspired **Full Stack MERN application** that simulates a multi-location fitness chain management platform. The application provides real-time operational insights through interactive dashboards, analytics, occupancy monitoring, member management, and revenue tracking.

Designed using a **feature-based backend architecture**, reusable React components, RESTful APIs, and MongoDB to demonstrate scalable full-stack application development.

---

## 🚀 Key Features

### 📊 Analytics Dashboard
- Real-time business KPIs
- Revenue analytics
- Occupancy monitoring
- Membership growth insights
- Churn risk analysis
- Operational anomaly detection
- Gym-wise performance comparison

### 👥 Member Management
- Paginated member listing
- Search & filtering
- Gym-wise member management
- Member statistics

### 🏢 Gym Management
- Multi-location support
- Live occupancy tracking
- Capacity monitoring
- Individual gym details

### ⚡ Backend
- RESTful API architecture
- Feature-based project structure
- MongoDB + Mongoose
- Automatic database seeding
- Dockerized deployment
- Environment-based configuration

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router
- Axios
- Recharts
- CSS3
- Responsive Design

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## DevOps
- Docker
- Docker Compose
- Nginx

---

# 🏗 Architecture

```
React Client
      │
      ▼
Express REST API
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Repositories
      │
      ▼
MongoDB
```

The backend follows a modular **Feature-Based Architecture**, separating routes, controllers, services, repositories, and models for scalability and maintainability.

---

# 📂 Project Structure

```
livepulse-dashboard/
│
├── backend/
│   ├── config/
│   ├── features/
│   ├── middleware/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── App.jsx
│
└── docker-compose.yml
```

---

# 📈 Demo Dataset

The application automatically seeds realistic demo data including:

- 🏢 10 Gym Locations
- 👥 5,000 Members
- 📊 ~270,000 Check-ins
- 💰 Revenue Records
- 💳 Membership Plans
- 🚨 Operational Anomalies

The database is automatically seeded when empty.

---

# 🚀 Getting Started

## Run with Docker

```bash
docker compose up --build
```

Dashboard

```
http://localhost:3000
```

API

```
http://localhost:5000/api/health
```

---

## Local Development

### Start MongoDB

```bash
docker compose up mongo
```

### Backend

```bash
cd backend

npm install

npm run seed

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🌍 MongoDB Atlas

Configure your connection string inside:

```
backend/.env
```

Example:

```env
MONGODB_URI=your_connection_string
```

If your password contains special characters (`#`, `@`, `/`), URL-encode them before adding the connection string.

---

# 📡 REST API

## Gyms

| Method | Endpoint |
|---------|----------|
| GET | `/api/gyms` |
| GET | `/api/gyms/:id` |
| GET | `/api/gyms/:id/occupancy` |

---

## Members

| Method | Endpoint |
|---------|----------|
| GET | `/api/members?page=1&limit=25&gymId=` |

---

## Analytics

| Method | Endpoint |
|---------|----------|
| GET | `/api/analytics/revenue` |
| GET | `/api/analytics/churn-risk` |
| GET | `/api/anomalies` |

---

# ✨ Technical Highlights

- Full Stack MERN Application
- Feature-Based Backend Architecture
- RESTful APIs
- MongoDB Aggregation Pipelines
- Interactive Analytics Dashboard
- Responsive React UI
- Modular & Scalable Codebase
- Dockerized Development Environment
- Automatic Database Seeding
- Clean Project Structure

---

# 📌 Future Improvements

- JWT Authentication
- Role-Based Access Control (RBAC)
- WebSocket-based Live Updates
- Export Reports (PDF/Excel)
- Email Notifications
- Unit & Integration Testing
- CI/CD Pipeline
- API Documentation (Swagger)

---

## 👨‍💻 Author

**Isha Pal**

Full Stack JavaScript Developer

- React.js
- React Native
- Node.js
- Express.js
- MongoDB
- TypeScript

Feel free to ⭐ the repository if you found it useful.
