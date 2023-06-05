const { Router } = require('express');
const userRouter = require('./userRouter');
const serviceRouter = require('./serviceRouter');
const paymentCheckOut = require('./paymentCheckOut')
const loginUserRouter = require('./loginUserRouter')
const profileUser = require('./porfileUserRouter')


const router = Router();

console.log('Estoy en el index de routes');

router.use('/user', userRouter);

router.use('/service', serviceRouter);

router.use('/payment', paymentCheckOut);

router.use('/login', loginUserRouter);

router.use('/profile', profileUser);

module.exports = router;