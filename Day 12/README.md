# Day 12 - CRUD Operations, Authentication & Authorization Using JWT Security

## Project Structure

```
Day-12-Assignment/
├── config/
│   └── database.js          # MongoDB connection
├── models/
│   ├── User.js              # User model with bcrypt
│   └── RechargePlan.js      # Recharge plan model
├── routes/
│   ├── authRoutes.js        # Authentication routes
│   ├── userRoutes.js        # User CRUD routes
│   └── planRoutes.js        # Plan CRUD routes
├── controllers/
│   ├── authController.js    # Login/Register logic
│   ├── userController.js    # User CRUD operations
│   └── planController.js    # Plan CRUD operations
├── middleware/
│   └── auth.js              # JWT verification & role-based access
├── server.js                # Main server file
├── package.json             # Dependencies
├── .env                     # Environment variables
└── README.md                # Documentation
```

## Features

✅ **User Management CRUD**
- Register/Login with JWT
- Password encryption using bcrypt
- Role-based access (user/admin)

✅ **Recharge Plan Management CRUD**
- Create, Read, Update, Delete plans
- Admin-only access for CUD operations

✅ **JWT Authentication**
- Token-based authentication
- Protected routes
- Token expiration handling

✅ **Authorization & Security**
- Role-based access control
- Password hashing
- Environment variables for secrets

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Users (Protected)
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin only)

### Plans
- `GET /api/plans` - Get all plans (Public)
- `GET /api/plans/:id` - Get plan by ID (Public)
- `POST /api/plans` - Create plan (Admin only)
- `PUT /api/plans/:id` - Update plan (Admin only)
- `DELETE /api/plans/:id` - Delete plan (Admin only)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create .env file with your values:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mobile_recharge_day12
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
```

3. Start server:
```bash
npm run dev
```

## Testing with Postman

### 1. Register Admin User
```
POST /api/auth/register
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "123456",
  "phone": "1234567890",
  "role": "admin"
}
```

### 2. Login
```
POST /api/auth/login
{
  "email": "admin@example.com",
  "password": "123456"
}
```

### 3. Use Token in Headers
```
Authorization: Bearer YOUR_JWT_TOKEN
```