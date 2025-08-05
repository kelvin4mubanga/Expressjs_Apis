

A robust RESTful authentication API built with Express.js. Provides secure user registration, login, JWT-based authentication, and user profile management.

## 🚀 Features

- User registration & login
- JWT authentication
- Profile management
- Password hashing & reset
- Middleware for protected routes
- Input validation
- Unit & integration tests

## 🔧 Tech Stack

- Node.js (v18+)
- Express.js
- MongoDB (Mongoose)
- JWT (`jsonwebtoken`)
- bcryptjs
- Joi (validation)
- Jest/Supertest

## 📦 Installation

git clone https://github.com/kelvin4mubangaExpress_Api.git/auth-api
cd auth-api
npm install
cp .env.example .env

## ⚙️ Running the Server

npm run dev
# or
npm start

## 🔐 Authentication

Uses JWT. Obtain a token:

POST /api/auth/login
Content-Type: application/json

{
  "email": "your_email",
  "password": "your_password"
}

Use Authorization: Bearer <token> for protected routes.

## 🔗 API Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | /api/auth/register   | Register a new user     |
| POST   | /api/auth/login      | Login user              |
| GET    | /api/auth/profile    | Get user profile        |
| PUT    | /api/auth/profile    | Update user profile     |
| POST   | /api/auth/reset      | Reset password request  |

## 🧪 Running Tests

npm test

## 📄 License

MIT License

## 👤 Author

Kelvin Mubanga  
Email: kelvinmubanga045@gmail.com
GitHub: https://github.com/kelvin4mubanga