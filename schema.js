const mongoose = require('mongoose');
const { Schema } = mongoose
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true, 
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String], 
    default: ['user'] 
  },
  profile: {
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    age: {
      type: Number,
      min: 0
    }
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);
