require('dotenv').config();
const db = require('./models');
const data = require('./userData.json');
const photodata = require('./photoData.json');



db.User.deleteMany({}, (err, deletedUsers) => {
    db.Photo.create(photodata.photos, (err, seededPhotos) => {
        for (let i=0; i<data.users.length; i++) {
            let user = data.users[i]
            user.photos.push(`${seededPhotos[0]._id}`) 
            console.log(user)
            db.User.create(user, (err, seededUser) => {
                console.log('hello world')
                if (err) console.log(err);
                console.log(seededUser)
                console.log(data.users.length, 'users created successfully');
                if (i === data.users.length - 1) {
                    process.exit();
                }
                
            })
        }
    });
});

// // you need your database connection and model available in your seed file.
// // If you have both in your seed file, and you are using dotenv for environment vars, make sure you are requiring dotenv in your seed file. Also make sure sure the dotenv is being required before your database and model.

//          {
//                     "title": "Grand Canyon",
//                     "image": "https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg?maxwidth=650&autorotate=false",
//                     "caption": "Gorgeous Sunrise"
//                 }, 
//                 {
//                     "title": "Grand Canyon",
//                     "image": "https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg?maxwidth=650&autorotate=false",
//                     "caption": "Gorgeous Sunrise"
//                 },
//                 {
//                     "title": "Grand Canyon",
//                     "image": "https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg?maxwidth=650&autorotate=false",
//                     "caption": "Gorgeous Sunrise"
//                 },
//                 {
//                     "title": "Grand Canyon",
//                     "image": "https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg?maxwidth=650&autorotate=false",
//                     "caption": "Gorgeous Sunrise"
//                 }
            