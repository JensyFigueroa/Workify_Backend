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

    console.log('si me lees, significa que pasaste el filtro de comprobación de pago');

    const userClient = await User.findByPk(userId);
    
    const userName = userClient.name;


    await Promise.all(cartsItems.map(async (service)=>{

      let filaService = await Service.findByPk(service.id)

      const contract = {
        pay: (service.pricePerHour*service.quantity),
        contratistName: userName,
        contracthours: service.quantity
      }

      if (filaService.contracts===null){
        filaService.contracts = [contract];
      }else{
        filaService.contracts =[...filaService.contracts, contract]
      }

      const invoice = {
        pay: (service.pricePerHour*service.quantity),
        nameService: service.nameService,
        contracthours: service.quantity,
      }


      if (userClient.buys===null){
        userClient.buys = [invoice];
      }else{
        userClient.buys = [...userClient.buys, invoice]
      }
      await filaService.save();
      await userClient.save();
    }))

    const message = 'Succesfull payment'
    return message
  }
module.exports = {paymentValidation}