# Day 8 Assignment - React Routing & Authentication

## Assignment Requirements ✅

### 1. React Router v6 Setup
- ✅ Installed `react-router-dom`
- ✅ Configured routing in App.jsx
- ✅ Client-side navigation implemented

### 2. Required Pages Created
- ✅ **LandingPage.jsx** - Hero section, featured plans, features
- ✅ **Login.jsx** - Email/password form with state handling
- ✅ **Signup.jsx** - Registration form with validation
- ✅ **RechargePlans.jsx** - Prepaid/postpaid plans display

### 3. Navigation Implementation
- ✅ **Navbar.jsx** with React Router Links:
  - Home (`/`)
  - Login (`/login`)
  - Signup (`/signup`)
  - Recharge Plans (`/plans`)
- ✅ Conditional rendering (Logout when logged in)
- ✅ Tailwind styling with hover effects

### 4. Folder Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── PlanCard.jsx
├── pages/
│   ├── LandingPage.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── RechargePlans.jsx
├── context/
│   └── AuthContext.jsx
├── App.jsx
└── main.jsx
```

### 5. Context API for Authentication
- ✅ **AuthContext.jsx** manages:
  - `isLoggedIn` state
  - `user` data
  - `login()` function
  - `logout()` function
- ✅ Consumed in Navbar and Login pages

### 6. App Integration
- ✅ All pages imported and routed
- ✅ AuthProvider wraps entire app
- ✅ Smooth navigation experience

## Features
- **React Router v6** - Client-side routing
- **Authentication State** - Context API management
- **Responsive Design** - Tailwind CSS styling
- **Form Handling** - useState for form state
- **Navigation** - Dynamic navbar based on auth state
- **Reusable Components** - PlanCard component

## Installation
```bash
npm install
npm start
```

## Routes
- `/` - Landing Page
- `/login` - Login Form
- `/signup` - Registration Form
- `/plans` - Recharge Plans