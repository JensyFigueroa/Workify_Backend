const { Router } = require('express');

const client = Router();

client.get('/client', (req, res) => {
    res.send('estoy en cliente');
});

// cliente.post('/cliente', (req, res) => {
//     res.send('cree un cliente');
// })


module.exports = client;