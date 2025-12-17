const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const authController = {
  // Register user
  register: async (req, res) => {
    try {
      const { username, email, password, phone, role } = req.body;
      
      const userExists = await User.findOne({ $or: [{ email }, { username }] });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
      
      const user = await User.create({
        username,
        email,
        password,
        phone,
        role: role || 'user'
      });
      
      const token = generateToken(user._id);
      
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const user = await User.findOne({ email });
      if (user && (await user.comparePassword(password))) {
        const token = generateToken(user._id);
        
        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = authController;