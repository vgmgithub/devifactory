// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  interest: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  noted: { type: Boolean, default:false },
});

module.exports = mongoose.model('Contact', contactSchema);