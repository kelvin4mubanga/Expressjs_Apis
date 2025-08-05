A RESTful API for personal note-taking built with Express.js. Allows users to create, read, update, and delete notes with secure authentication.

## 🚀 Features

- CRUD for notes
- JWT authentication
- User-specific data isolation
- Search & filtering
- Input validation
- Unit & integration tests

## 🔧 Tech Stack

- Node.js (v18+)
- Express.js
- MongoDB (Mongoose)
- JWT (`jsonwebtoken`)
- Joi (validation)
- Jest/Supertest

## 📦 Installation

git clone https://github.com/kelvin4mubangaxpress_Apis/notes-api.git
cd notes-api
npm install
cp .env.example .env

## ⚙️ Running the Server

npm run dev
# or
npm start

## 🔐 Authentication

JWT-based. Use /api/auth/login to get a token.

## 🔗 API Endpoints

| Method | Endpoint       | Description         |
|--------|---------------|---------------------|
| GET    | /api/notes    | List user notes     |
| POST   | /api/notes    | Create a note       |
| GET    | /api/notes/:id| Get note details    |
| PUT    | /api/notes/:id| Update a note       |
| DELETE | /api/notes/:id| Delete a note       |

## 🧪 Running Tests

npm test

## 📄 License

MIT License

## 👤 Author

Kelvin Mubanga  
Email: kelvinmubanga045@gmail.com 
GitHub: https://github.com/kelvin4mubanga