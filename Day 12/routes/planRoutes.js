const express = require('express');
const planController = require('../controllers/planController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// GET /api/plans - Get all plans (Public)
router.get('/', planController.getAllPlans);

// GET /api/plans/:id - Get plan by ID (Public)
router.get('/:id', planController.getPlanById);

// POST /api/plans - Create new plan (Admin only)
router.post('/', protect, admin, planController.createPlan);

// PUT /api/plans/:id - Update plan (Admin only)
router.put('/:id', protect, admin, planController.updatePlan);

// DELETE /api/plans/:id - Delete plan (Admin only)
router.delete('/:id', protect, admin, planController.deletePlan);

module.exports = router;