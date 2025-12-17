const RechargePlan = require('../models/RechargePlan');

const planController = {
  // Get all plans
  getAllPlans: async (req, res) => {
    try {
      const plans = await RechargePlan.find();
      res.json(plans);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get plan by ID
  getPlanById: async (req, res) => {
    try {
      const plan = await RechargePlan.findById(req.params.id);
      if (!plan) {
        return res.status(404).json({ message: 'Plan not found' });
      }
      res.json(plan);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create new plan (Admin only)
  createPlan: async (req, res) => {
    try {
      const plan = new RechargePlan(req.body);
      const savedPlan = await plan.save();
      res.status(201).json(savedPlan);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update plan (Admin only)
  updatePlan: async (req, res) => {
    try {
      const plan = await RechargePlan.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!plan) {
        return res.status(404).json({ message: 'Plan not found' });
      }
      res.json(plan);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete plan (Admin only)
  deletePlan: async (req, res) => {
    try {
      const plan = await RechargePlan.findByIdAndDelete(req.params.id);
      if (!plan) {
        return res.status(404).json({ message: 'Plan not found' });
      }
      res.json({ message: 'Plan deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = planController;