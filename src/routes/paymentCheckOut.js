const { Router } = require('express');
const {checkOutPayment, newCheckOut} = require('../handlers/PaymentHandler')

const payment = Router();

payment.post('/',checkOutPayment)

payment.post('/newPay',newCheckOut)

payment.get('/success',(req,res)=>res.send('Success'))

payment.get('/cancel', (req,res)=>res.send('cancel'))

module.exports = payment;