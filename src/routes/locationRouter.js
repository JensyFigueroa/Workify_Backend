const { Router } = require('express');
const { getCountryHandler, getCityHandler } = require('../handlers/getLocationHandler.js');

const location = Router();

location.get('/country', getCountryHandler)
location.get('/city', getCityHandler)


module.exports = location;