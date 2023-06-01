const { Router } = require('express');
const { registerUser, getUserDetailById } = require('../handlers/userHandler.js');


const user = Router();

user.get('/:idUser', getUserDetailById)


module.exports = user;