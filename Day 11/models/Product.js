const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true,
    enum: ['Airtel', 'Jio', 'Vi', 'BSNL']
  },
  amount: {
    type: Number,
    required: true
  },
  validity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);