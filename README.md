# 🚀 MERN Login Page

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![GitHub license](https://img.shields.io/badge/License-MIT-green)

This is a minimal full-stack example project built to demonstrate a **login system** using the **MERN stack (MongoDB, Express, React, Node.js)**. It is designed for developers who need a reference project for building or testing MERN applications with authentication.


## 🌟 Features
- Attractive React login UI with animated gradient background and glassmorphism effects
- Backend API built with Express
- User credentials stored in **MongoDB** with **hashed passwords** using bcrypt
- Fully functional login form connected to backend
- Simple and minimal structure, easy to extend
- Ready for JWT and protected route implementation


## 🛠️ Tech Stack
- **Frontend:** React, CSS (with animations & glassmorphism)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Password hashing with bcrypt
- **Other:** CORS, dotenv for environment variables


## 📁 Project Structure

### Backend
```

backend/
├── config/db.js        # MongoDB connection
├── models/User.js      # User schema
├── routes/auth.js      # Auth routes (register & login)
├── server.js           # Express server
└── .env                # Environment variables

```

### Frontend
```

frontend/
├── src/
│   ├── components/Login.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json

````

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/dsaikiran01/mern-login-page.git
cd mern-login-example
````

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/login_test
```

Start the backend:

```bash
npx nodemon server.js
```

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Open your browser at `http://localhost:5173` (or Vite-provided URL).


## 🔑 API Endpoints

### 1. Health Check

**GET** `/health`

Endpoint to verify if the server is operating correctly.

### 2. Register User

**POST** `/api/auth/register`

Registers a new user in the database with a hashed password.

**Request Body:**

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

or use cURL command:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }'
```

### 3. User Login

**POST** `/api/auth/login`

Authenticates a user and returns a success message if the credentials are valid.

**Request Body:**

```json
{
  "email": "test@example.com",
  "password": "123456"
}
````

or use cURL command:

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }'
```


## 🔑 Usage

1. Register a user using the backend API (Postman / Thunder Client)
2. Login using the React frontend
3. Passwords are securely stored in hashed format in MongoDB


## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.


## 📌 Notes

This is a **demo/example project**, intended for learning and testing purposes. It can be used as a starter template for MERN projects where login functionality is required.
