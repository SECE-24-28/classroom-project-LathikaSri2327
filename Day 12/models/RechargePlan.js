const mongoose = require('mongoose');

const rechargePlanSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  validity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true,
    enum: ['Airtel', 'Jio', 'Vi', 'BSNL']
  },
  data: {
    type: String,
    required: true
  },
  talkTime: {
    type: String,
    default: 'N/A'
  },
  sms: {
    type: String,
    default: 'N/A'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('RechargePlan', rechargePlanSchema);