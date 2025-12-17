# Day 13 - Frontend & Backend Integration

## Project Structure

```
Day-13-Assignment/
├── frontend/                    # React Frontend
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js        # Centralized API configuration
│   │   ├── components/
│   │   │   └── Navbar.jsx      # Navigation with auth state
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx   # Login with backend integration
│   │   │   ├── RegisterPage.jsx # Registration with backend
│   │   │   └── PlansPage.jsx   # Dynamic plans from API
│   │   ├── context/
│   │   │   └── AuthContext.jsx # JWT authentication context
│   │   ├── routes/
│   │   │   └── ProtectedRoute.jsx # Route protection
│   │   ├── App.jsx             # Main app with routing
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Styles
│   ├── package.json
│   ├── vite.config.js          # Vite config with proxy
│   └── index.html
└── backend/                     # Express Backend
    ├── config/
    │   └── database.js         # MongoDB connection
    ├── models/
    │   ├── User.js             # User model with bcrypt
    │   └── RechargePlan.js     # Plan model
    ├── routes/
    │   ├── authRoutes.js       # Auth endpoints
    │   ├── userRoutes.js       # User CRUD
    │   └── planRoutes.js       # Plan CRUD
    ├── controllers/
    │   ├── authController.js   # Auth logic
    │   ├── userController.js   # User operations
    │   └── planController.js   # Plan operations
    ├── middleware/
    │   └── auth.js             # JWT verification
    ├── server.js               # Main server with CORS
    ├── package.json
    └── .env                    # Environment variables
```

## Features Implemented

### ✅ Frontend Features
- **Centralized API Configuration** - Axios instance with JWT handling
- **Authentication Integration** - Login/Register with backend APIs
- **JWT Token Management** - Auto-attach tokens, handle expiration
- **Protected Routes** - Secure navigation with ProtectedRoute component
- **Dynamic Data Display** - Fetch and display plans from backend
- **Error Handling** - Toast notifications for user feedback
- **Auth State Persistence** - Maintain login state on refresh

### ✅ Backend Features
- **CORS Support** - Enable frontend-backend communication
- **JWT Authentication** - Secure token-based auth
- **Role-based Authorization** - Admin/User access control
- **CRUD Operations** - Full user and plan management
- **Password Encryption** - bcrypt for secure passwords
- **Error Handling** - Proper HTTP status codes and messages

## Installation & Setup

### Backend Setup
```bash
cd backend
npm install
# Create .env file with your MongoDB URI and JWT secret
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Plans (Public read, Admin write)
- `GET /api/plans` - Get all plans
- `GET /api/plans/:id` - Get plan by ID
- `POST /api/plans` - Create plan (Admin only)
- `PUT /api/plans/:id` - Update plan (Admin only)
- `DELETE /api/plans/:id` - Delete plan (Admin only)

### Users (Protected)
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin only)

## Testing Flow

1. **Start Backend**: `cd backend && npm run dev`
2. **Start Frontend**: `cd frontend && npm run dev`
3. **Register User**: Create account at `/register`
4. **Login**: Sign in at `/login`
5. **View Plans**: Browse plans at `/plans`
6. **Admin Features**: Create admin user to test CRUD operations

## Key Integration Points

- **Axios Interceptors**: Auto-attach JWT tokens to requests
- **Token Expiration**: Auto-logout on 401 responses
- **Protected Routes**: Redirect to login if not authenticated
- **Role-based UI**: Show/hide admin features based on user role
- **Error Handling**: Toast notifications for API responses
- **State Persistence**: Maintain auth state across page refreshes

## Environment Variables

Backend `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mobile_recharge_day13
JWT_SECRET=your_strong_secret_key
JWT_EXPIRE=7d
```

The application now provides a complete MERN stack integration with secure authentication and dynamic data management!