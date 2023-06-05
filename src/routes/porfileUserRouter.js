const { Router } = require('express');
const { putUserProfile } = require('../handlers/profileUserHandler.js');

const profile = Router();

profile.put('/:idPro', putUserProfile)


module.exports = profile;