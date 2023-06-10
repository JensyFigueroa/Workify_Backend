const { Router } = require('express');
const { getUserDetailById, getCartById, updateUserCart, vacateUserCart, getUser } = require('../handlers/userHandler.js');


const user = Router();

user.get('/:idUser', getUserDetailById)
user.get('/getCart/:idUser', getCartById)
user.put('/updateCart/:idUser', updateUserCart)
user.get('/vacateCart/:idUser', vacateUserCart)
user.get('/', getUser)

module.exports = user;