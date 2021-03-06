const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    title: String,
    image: String,
    caption: String
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;