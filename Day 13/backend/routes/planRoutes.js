const express = require('express');
const planController = require('../controllers/planController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.get('/', planController.getAllPlans);
router.get('/:id', planController.getPlanById);
router.post('/', protect, admin, planController.createPlan);
router.put('/:id', protect, admin, planController.updatePlan);
router.delete('/:id', protect, admin, planController.deletePlan);

module.exports = router;