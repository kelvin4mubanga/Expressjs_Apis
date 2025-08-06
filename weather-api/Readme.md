# 🌦️ Weather API - Express.js RESTful API

A simple RESTful API built with Express.js that allows users to fetch current weather data by city. Offers city-based weather lookup, location validation, and secure access.

## 🚀 Features

- City-based weather lookup
- JWT-based authentication
- Input validation with Joi
- Middleware for protected routes
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
git clone https://github.com/kelvin4mubangaExpress_Api.git/weather-api
cd weather-api
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

Use `Authorization: Bearer <token>` header for protected routes.

## 🔗 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| POST   | /api/auth/register | Register a new user      |
| POST   | /api/auth/login    | Login and get token      |
| GET    | /api/weather/:city | Get weather by city name |

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