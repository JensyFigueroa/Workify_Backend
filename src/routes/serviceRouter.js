const { Router } = require('express');
const { postNewReview, getServiceDetailById, getServicesDB, postService, getServicesByName, getContractsService } = require('../handlers/serviceHandler.js');

const service = Router();

console.log("Estoy en el router de service");

service.get('/', getServicesDB)
service.get('/name', getServicesByName)
service.get('/:idService', getServiceDetailById)
service.post('/', postService)
service.post('/review', postNewReview)
service.get('/contracts/:idService', getContractsService)


module.exports = service;