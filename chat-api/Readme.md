# 💬 Chat API - Express.js RESTful API

A basic chat API built with Express.js that allows users to register, login, create chatrooms, and send messages in real-time (ready for WebSocket integration).

## 🚀 Features

- Register & login users
- Create and join chatrooms
- Send and retrieve messages
- JWT-based authentication
- Joi-based validation
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
git clone https://github.com/kelvin4mubangaExpress_Api.git/chat-api
cd chat-api
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

Use `Authorization: Bearer <token>` for protected chatroom/message routes.

## 🔗 API Endpoints

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| POST   | /api/auth/register    | Register a user           |
| POST   | /api/auth/login       | Login user                |
| POST   | /api/chatrooms        | Create chatroom           |
| GET    | /api/chatrooms        | List all chatrooms        |
| POST   | /api/messages         | Send a message            |
| GET    | /api/messages/:roomId | Get messages for chatroom |

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