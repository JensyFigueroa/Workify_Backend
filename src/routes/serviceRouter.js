const { Router } = require('express');
const { getServiceDetailById, getServicesDB, postService } = require('../handlers/serviceHandler.js');

const service = Router();

console.log("Estoy en el router de service");

service.get('/service', getServicesDB)

service.get('/:idService', getServiceDetailById)

service.post('/service', postService)


module.exports = service;