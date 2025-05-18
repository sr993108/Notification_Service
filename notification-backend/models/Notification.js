const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  type: { type: String, enum: ['email', 'sms', 'in-app'], required: true },
  content: { type: String, required: true },
  status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
  retries: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Export the model so you can use it elsewhere
module.exports = mongoose.model('Notification', notificationSchema);
