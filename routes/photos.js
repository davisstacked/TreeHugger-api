// imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// routes
router.get('/', ctrl.photos.index);
router.get('/:id', ctrl.photos.show);
router.post('/', authRequired, ctrl.photos.create);
router.put('/:id', authRequired, ctrl.photos.update);
router.delete('/:id', authRequired, ctrl.photos.destroy);

// exports
module.exports = router;
