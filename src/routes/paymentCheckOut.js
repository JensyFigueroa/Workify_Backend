const { Router } = require('express');
const { checkOutPayment, newCheckOut, successfulPayment , getDataPays} = require('../handlers/PaymentHandler')

const payment = Router();

//payment.post('/', checkOutPayment)

payment.post('/newPay', newCheckOut)

payment.get('/success', successfulPayment)

payment.get('/admin/dataPays', getDataPays)

module.exports = payment;