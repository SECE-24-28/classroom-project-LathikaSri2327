const express = require('express');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Mobile Recharge Backend API is running!' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});