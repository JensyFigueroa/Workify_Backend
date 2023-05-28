require('dotenv').config();
const Stripe = require('stripe')
const { Service, User } = require('../db.js');

const {KEY_STRIPE}=process.env;

const paymentValidation = async (id, amount, cartsItems, userId) => {

    const stripe = new Stripe(KEY_STRIPE)

    await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        payment_method: id,
        confirm: true
    })

    const user = User.findByPk(userId);
    const userName = user.name;


    await cartsItems.map(async (service)=>{
      let filaService = Service.findByPk(service.id)

      const contract = {
        contratistName: userName,
        contracthours: service.quantity,
        pay: (service.pricePerHour*service.quantity)
      }

      filaService.contracts = [...filaService.contracts, contract];
      await filaService.save();

      const invoice = {
        serviceName: service.name,
        contracthours: service.quantity,
        pay: (service.pricePerHour*service.quantity)
      }

      user.buys = [...user.buys, invoice]
      await user.save();
    })    

    const message = 'Succesfull payment'
    return message
  }
module.exports = {paymentValidation}