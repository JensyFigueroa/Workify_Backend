const { Router } = require('express');
// const { registerUser, getUserDetailById } = require('../handlers/userHandler.js');
const { getUserProfile } = require('../handlers/profileUserHandler.js');

const profile = Router();

profile.put('/:idPro', getUserProfile)


module.exports = profile;