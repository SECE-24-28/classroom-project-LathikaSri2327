# Day 11 - Backend Setup with Express.js and MongoDB

## Project Structure

```
Day-11-Assignment/
├── config/          # Database configuration
│   └── database.js  # MongoDB connection setup
├── models/          # Mongoose schemas
│   ├── User.js      # User model with constraints
│   └── Product.js   # Product model for recharge plans
├── routes/          # API route definitions
│   └── userRoutes.js # User API endpoints
├── controllers/     # Request handling logic
│   └── userController.js # User CRUD operations
├── server.js        # Main server file
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run dev
```

## API Endpoints

- `GET /` - Test route
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

## Database Connection

The application connects to MongoDB at `mongodb://localhost:27017/mobile_recharge`