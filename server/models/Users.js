const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    }
  });

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;