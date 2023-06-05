const { Router } = require('express');
const {checkOutPayment, newCheckOut, successfulPayment} = require('../handlers/PaymentHandler')

const payment = Router();

payment.post('/',checkOutPayment)

payment.post('/newPay',newCheckOut)

payment.get('/success',successfulPayment)

module.exports = payment;