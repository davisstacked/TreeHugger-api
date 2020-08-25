// Imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


// Routes
router.get('/:id', ctrl.users.show);
router.get('/', ctrl.users.index);

// Exports
module.exports = router;