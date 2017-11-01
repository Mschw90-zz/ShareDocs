const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
});

module.exports = {
  User: User
};
