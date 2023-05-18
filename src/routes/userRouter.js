const { Router } = require('express');

const user = Router();

user.get('/user', (req, res) => {
    res.send('estoy en cliente');
});

// cliente.post('/user', (req, res) => {
//     res.send('cree un cliente');
// })


module.exports = user;