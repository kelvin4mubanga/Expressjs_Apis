# 🗒️ Todo API - Express.js RESTful API

A simple and secure todo list API built with Express.js for creating and managing personal todos.

## 🚀 Features

- Register, login users
- Create, read, update, delete todos
- JWT-based authentication
- Input validation with Joi
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
git clone https://github.com/kelvin4mubangaExpress_Api.git/todo-api
cd todo-api
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

Use `Authorization: Bearer <token>` header for protected todo routes.

## 🔗 API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | /api/todos       | Create new todo       |
| GET    | /api/todos       | List all todos        |
| PUT    | /api/todos/:id   | Update todo           |
| DELETE | /api/todos/:id   | Delete todo           |

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