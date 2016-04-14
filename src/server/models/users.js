var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false,
    required: true
  }
});
// hash the password before saving it to the db

// compare password to verify plain text against the hashed password

var User = mongoose.model('students', UserSchema);

module.exports = User;
