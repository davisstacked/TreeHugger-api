const db = require('./models');
const data = require('./userData.json');

db.Photo.deleteMany({}, (err, deletedPhotos) => {
    db.Photo.create(data.photos, (err, seededPhotos) => {
        if (err) console.log(err);

        console.log(data.photos.length, 'photos created successfully');

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