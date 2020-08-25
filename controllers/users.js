const db = require('../models');

const index = (req, res) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) console.log('Error in users#index:', err);

        res.status(200).json(foundUsers);
    });
};

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) console.log('Error in user#show', err);

        res.status(200).send(foundUser);
    });
};

const create = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) console.log('Error in users#create:', err);

        res.status(200).json(savedUser);
    });
};

// const update = (req, res) => {
//     db.Photo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPhoto) => {
//         if (err) console.log('Error in photo#update:', err);

//         if (!updatedPhoto) {
//             res.status(400).json({message: `Could not find Photo with id ${req.params.id}`});
//         }

//         res.json(updatedPhoto);
//     });
// };

// const destroy = (req, res) => {
//     db.Photo.findByIdAndUpdate(req.params.id, (err, deletedPhoto) => {
//         if (err) console.log('Error in photos#destroy:', err);

//         res.status(200).json(deletedPhoto);
//     });
// };


module.exports = {
    show,
    create,
    index
};