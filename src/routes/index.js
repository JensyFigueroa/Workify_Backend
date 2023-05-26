const { Router } = require('express');
const userRouter = require('./userRouter');
const serviceRouter = require('./serviceRouter');
const paymentCheckOut = require('./paymentCheckOut')


const router = Router();

console.log('Estoy en el index de routes');

router.use('/user', userRouter);

router.use('/service', serviceRouter);

router.use('/payment', paymentCheckOut)

module.exports = router;