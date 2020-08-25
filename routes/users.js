// Imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');


// Routes
router.get('/:id', authRequired, ctrl.users.show);

// Exports
module.exports = router;