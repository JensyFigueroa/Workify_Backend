const { Router } = require('express');
const userRouter = require('./userRouter');
const serviceRouter = require('./serviceRouter');
const paymentCheckOut = require('./paymentCheckOut')
const loginUserRouter = require('./loginUserRouter')
const profileUserRouter = require('./porfileUserRouter')
const profileServiceRouter = require('./profileServiceRouter')


const router = Router();

console.log('Estoy en el index de routes');

router.use('/user', userRouter);

router.use('/service', serviceRouter);

router.use('/payment', paymentCheckOut);

router.use('/login', loginUserRouter);

router.use('/profile', profileUserRouter);

router.use('/profileService', profileServiceRouter)

module.exports = router;