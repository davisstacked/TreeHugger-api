require('dotenv').config();
const db = require('./models');
const data = require('./userData.json');
const photodata = require('./photoData.json');


db.Photo.deleteMany({}, (err, deletedPhotos) => {
    db.Photo.create(photodata.photos, (err, seededPhotos) => {
        if (err) console.log(err);

        console.log(photodata.photos.length, 'photos created successfully');

        process.exit();
    });
});

db.User.deleteMany({}, (err, deletedUsers) => {
    db.User.create(data.users, (err, seededUsers) => {
        if (err) console.log(err);

        console.log(data.users.length, 'users created successfully');

        process.exit();
    });
});

// you need your database connection and model available in your seed file.
// If you have both in your seed file, and you are using dotenv for environment vars, make sure you are requiring dotenv in your seed file. Also make sure sure the dotenv is being required before your database and model.