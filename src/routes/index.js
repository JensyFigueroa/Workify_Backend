const { Router } = require('express');
const client = require('./client');
const service = require('./service');

const router = Router();

router.use('/', client);

router.use('/', service);

module.exports = router;