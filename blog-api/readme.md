# 📝 Blog API - Express.js RESTful API

A blog management RESTful API built with Express.js. Allows users to create, read, update, and delete blog posts with secure authentication and input validation.

## 🚀 Features

- User registration & login
- Create, read, update, delete blog posts
- JWT-based authentication
- Profile management
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
git clone https://github.com/kelvin4mubangaExpress_Api.git/blog-api
cd blog-api
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

Use `Authorization: Bearer <token>` for protected blog routes.

## 🔗 API Endpoints

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | /api/auth/register | Register a user         |
| POST   | /api/auth/login    | Login user              |
| GET    | /api/posts         | Get all blog posts      |
| GET    | /api/posts/:id     | Get single blog post    |
| POST   | /api/posts         | Create new blog post    |
| PUT    | /api/posts/:id     | Update blog post        |
| DELETE | /api/posts/:id     | Delete blog post        |

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