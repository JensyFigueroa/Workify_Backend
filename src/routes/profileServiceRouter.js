const { Router } = require('express');

const { profilePutServiceHandler } = require('../handlers/profileServiceHnadler.js')

const profileService = Router();

profileService.put('/:idService', profilePutServiceHandler)

module.exports = profileService;