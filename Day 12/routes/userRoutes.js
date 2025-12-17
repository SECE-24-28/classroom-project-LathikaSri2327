const express = require('express');
const userController = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// GET /api/users - Get all users (Admin only)
router.get('/', protect, admin, userController.getAllUsers);

// GET /api/users/profile - Get user profile (Protected)
router.get('/profile', protect, userController.getProfile);

// PUT /api/users/:id - Update user (Protected)
router.put('/:id', protect, userController.updateUser);

// DELETE /api/users/:id - Delete user (Admin only)
router.delete('/:id', protect, admin, userController.deleteUser);

module.exports = router;