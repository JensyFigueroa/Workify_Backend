const { Router } = require('express');
const { getUserDetailById, getCartById, updateUserCart, vacateUserCart } = require('../handlers/userHandler.js');


const user = Router();

user.get('/:idUser', getUserDetailById)
user.get('/getCart/:idUser', getCartById)
user.put('/updateCart/:idUser', updateUserCart)
user.get('/vacateCart/:idUser', vacateUserCart)


module.exports = user;