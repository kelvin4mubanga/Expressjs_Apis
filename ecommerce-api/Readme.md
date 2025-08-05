A feature-rich RESTful API for e-commerce platforms built with Express.js. Handles products, categories, orders, carts, and payments.

## 🚀 Features

- Product & category management
- User authentication (JWT)
- Shopping cart & checkout
- Order processing
- Payment integration (mock/real)
- Admin controls
- Pagination & filtering
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

git clone https://github.com/kelvin4mubanga/Express_Apis.git/ecommerce-api
cd ecommerce-api
npm install
cp .env.example .env

## ⚙️ Running the Server

npm run dev
# or
npm start

## 🔐 Authentication

JWT-based. Use /api/auth/login to get a token.

## 🔗 API Endpoints

| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | /api/products          | List all products            |
| GET    | /api/products/:id      | Get product details          |
| POST   | /api/products          | Add a new product (admin)    |
| PUT    | /api/products/:id      | Update product (admin)       |
| DELETE | /api/products/:id      | Delete product (admin)       |
| GET    | /api/categories        | List all categories          |
| POST   | /api/cart              | Add item to cart             |
| GET    | /api/cart              | View cart                    |
| POST   | /api/orders            | Create order                 |
| GET    | /api/orders            | List user orders             |

## 🧪 Running Tests

npm test

## 📄 License

MIT License

## 👤 Author

Kelvin Mubanga  
Email: kelvinmubanga045@gmail.com 
GitHub: https://github.com/kelvin4mubanga