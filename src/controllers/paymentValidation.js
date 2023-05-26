require('dotenv').config();
const Stripe = require('stripe')

const {KEY_STRIPE}=process.env;

const paymentValidation = async (id, amount) => {

    const stripe = new Stripe(KEY_STRIPE)

    await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        payment_method: id,
        confirm: true
    })
    const message = 'Succesfull payment'
    return message
  }
module.exports = {paymentValidation}