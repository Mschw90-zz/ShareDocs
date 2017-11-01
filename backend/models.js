const mongoose = require('mongoose');

const User = mongoose.model('User', {
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
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
