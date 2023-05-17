const { Router } = require('express');
const user = require('./user');
const service = require('./service');

const router = Router();

router.use('/', user);

router.use('/', service);

module.exports = router;