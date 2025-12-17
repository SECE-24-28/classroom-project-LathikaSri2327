const RechargePlan = require('../models/RechargePlan');

const planController = {
  getAllPlans: async (req, res) => {
    try {
      const plans = await RechargePlan.find();
      res.json(plans);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

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

  createPlan: async (req, res) => {
    try {
      const plan = new RechargePlan(req.body);
      const savedPlan = await plan.save();
      res.status(201).json(savedPlan);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

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