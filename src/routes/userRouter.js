const { Router } = require('express');
const { getUserDetailById, getCartById, updateUserCart, vacateUserCart, getUser, userPayment, enabledUser, getUserByEmail, checkAdmin } = require('../handlers/userHandler.js');


const user = Router();

user.get('/:idUser', getUserDetailById)
user.get('/getCart/:idUser', getCartById)
user.put('/updateCart/:idUser', updateUserCart)
user.get('/vacateCart/:idUser', vacateUserCart)
user.get('/', getUser)
user.get('/payment/:idUser', userPayment)
user.put('/enabled/:idUser', enabledUser)
user.post('/admin', checkAdmin)

module.exports = user;