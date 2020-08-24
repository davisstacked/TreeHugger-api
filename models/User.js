const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    image: {
        type: String
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;