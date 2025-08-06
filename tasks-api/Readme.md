# ✅ Tasks API - Express.js RESTful API

A task management API built with Express.js that allows users to create, manage, and delete their personal tasks.

## 🚀 Features

- User registration & login
- Create, update, delete tasks
- JWT authentication
- Protected user task access
- Input validation
- Unit & integration tests

## 🔧 Tech Stack

- Node.js (v18+)
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- Joi
- Jest / Supertest

## 📦 Installation

```bash
git clone https://github.com/kelvin4mubangaExpress_Api.git/tasks-api
cd tasks-api
npm install
cp .env.example .env
```

## ⚙️ Running the Server

```bash
npm run dev
# or
npm start
```

## 🔐 Authentication

```http
POST /api/auth/login
{
  "email": "your_email",
  "password": "your_password"
}
```

Use `Authorization: Bearer <token>` for protected routes.

## 🔗 API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | /api/tasks       | Create a new task      |
| GET    | /api/tasks       | Get all user tasks     |
| PUT    | /api/tasks/:id   | Update a task          |
| DELETE | /api/tasks/:id   | Delete a task          |

## 🧪 Running Tests

```bash
npm test
```

## 📄 License

MIT License

## 👤 Author

**Kelvin Mubanga**  
📧 Email: kelvinmubanga045@gmail.com  
🔗 GitHub: [https://github.com/kelvin4mubanga](https://github.com/kelvin4mubanga)