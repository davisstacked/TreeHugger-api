const db = require('./models');
const data = require('./photoData.json');

db.Photo.deleteMany({}, (err, deletedPhotos) => {
    db.Photo.create(data.photos, (err, seededPhotos) => {
        if (err) console.log(err);

        console.log(data.photos.length, 'photos created successfully');

        process.exit();
    });
});