// Imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


// Routes
router.get('/', ctrl.photos.index);
router.get('/:id', ctrl.photos.show);
router.post('/', authRequired, ctrl.photos.create);
router.put('/:id', authRequired, ctrl.photos.update);
router.delete('/:id', ctrl.photos.destroy);

// Exports
module.exports = router;
