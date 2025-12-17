const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// POST /api/auth/register - Register new user
router.post('/register', authController.register);

// POST /api/auth/login - Login user
router.post('/login', authController.login);

module.exports = router;