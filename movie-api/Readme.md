# 🎬 Movie API - Express.js RESTful API

A RESTful API built with Express.js that lets users browse, add, update, and delete movie entries with user authentication.

## 🚀 Features

- User registration & login
- Add, edit, delete movies
- JWT authentication
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
git clone https://github.com/kelvin4mubangaExpress_Api.git/movie-api
cd movie-api
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

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | /api/auth/register | Register a user         |
| POST   | /api/auth/login    | Login user              |
| GET    | /api/movies        | List all movies         |
| POST   | /api/movies        | Add new movie           |
| PUT    | /api/movies/:id    | Update movie details    |
| DELETE | /api/movies/:id    | Delete a movie          |

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