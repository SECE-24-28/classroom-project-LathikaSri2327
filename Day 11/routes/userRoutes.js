const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// POST /api/users - Create new user
router.post('/', userController.createUser);

module.exports = router;