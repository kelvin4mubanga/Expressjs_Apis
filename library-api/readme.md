# 📚 Library API - Express.js RESTful API
f
A library management RESTful API built with Express.js that allows users to manage books, borrow or return them, and track borrowing history.

## 🚀 Features

- Register, login, and manage user accounts
- Add, update, delete books
- Borrow and return books
- JWT-based authentication
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
git clone https://github.com/kelvin4mubangaExpress_Api.git/library-api
cd library-api
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

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | /api/auth/register  | Register a user          |
| POST   | /api/auth/login     | Login user               |
| GET    | /api/books          | List all books           |
| POST   | /api/books          | Add a new book           |
| PUT    | /api/books/:id      | Update book info         |
| DELETE | /api/books/:id      | Delete a book            |
| POST   | /api/books/borrow   | Borrow a book            |
| POST   | /api/books/return   | Return a book            |

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