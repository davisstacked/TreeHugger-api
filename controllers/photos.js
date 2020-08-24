const db = require('../models');

const index = (req, res) => {
    db.Photo.find({}, (err, foundPhotos) => {
        if (err) console.log('Error in photos#index:', err);

        res.status(200).json(foundPhotos);
    });
};

const show = (req, res) => {
    db.Photo.findById(req.params.id, (err, foundPhoto) => {
        if (err) console.log('Error in photo#show', err);

        res.status(200).send(foundPhoto);
    });
};

const create = (req, res) => {
    db.Photo.create(req.body, (err, savedPhoto) => {
        if (err) console.log('Error in photos#create:', err);

        res.status(200).json(savedPhoto);
    });
};

const update = (req, res) => {
    db.Photo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPhoto) => {
        if (err) console.log('Error in photo#update:', err);

        if (!updatedPhoto) {
            res.status(400).json({message: `Could not find Photo with id ${req.params.id}`});
        }

        res.json(updatedPhoto);
    });
};

const destroy = (req, res) => {
    db.Photo.findByIdAndUpdate(req.params.id, (err, deletedPhoto) => {
        if (err) console.log('Error in photos#destroy:', err);

        res.status(200).json(deletedPhoto);
    });
};


module.exports = {
    index,
    show, 
    create,
    update,
    destroy,
};