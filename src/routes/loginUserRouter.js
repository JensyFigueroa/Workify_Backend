const { Router } = require('express');
const { registerNewUser, } = require('../handlers/loginHandler.js');


 const loginUser = Router();

console.log("entro a loginrouter");
loginUser.post('/', registerNewUser)

module.exports = loginUser;