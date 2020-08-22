const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
    },
    password: {
        type: String,
        minlength: 4,
        required: [true, 'Password is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    userphoto: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;