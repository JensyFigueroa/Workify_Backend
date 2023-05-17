const { Router } = require('express');

const service = Router();

service.get('/service', (req, res) => {
    const { name } = req.query;
    //const resuts = !name ? allname : name; 
    res.send('Servicio en proceso');
})

service.post('/service', (req, res) => {
    res.send('Servicio creado');
})


module.exports = service;