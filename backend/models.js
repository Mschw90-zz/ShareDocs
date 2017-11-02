var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
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

var documentSchema = new Schema({
  content: {
    type: String
  },
  password: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  sharedWith: {
    type: Array,
  }
});

var User = mongoose.model('User', userSchema);
var Document = mongoose.model('Document', documentSchema);

module.exports = {
  User: User,
  Document: Document

};
