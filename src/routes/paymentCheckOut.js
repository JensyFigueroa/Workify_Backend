const { Router } = require('express');
const {checkOutPayment} = require('../handlers/PaymentHandler')

const payment = Router();

payment.post('/',checkOutPayment)

module.exports = payment;