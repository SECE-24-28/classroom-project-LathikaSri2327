const express = require('express');
const userController = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, admin, userController.getAllUsers);
router.get('/profile', protect, userController.getProfile);
router.put('/:id', protect, userController.updateUser);
router.delete('/:id', protect, admin, userController.deleteUser);

module.exports = router;