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

    const userClient = await User.findByPk(userId);
    
    const userName = userClient.name;


    await Promise.all(cartsItems.map(async (service)=>{

      let filaService = await Service.findByPk(service.id)

      const contract = {
        contratistName: userName,
        contracthours: service.quantity,
        pay: (service.pricePerHour*service.quantity)
      }

      let aux = filaService.contracts;

      if (!aux){
        filaService.contracts = [contract];
        console.log('filaService.contracts: ',filaService.contracts);
      }else{
        aux.push(contract);
        filaService.contracts = aux;
        console.log('filaService.contracts: ',filaService.contracts);
      }

      const invoice = {
        nameService: service.nameService,
        contracthours: service.quantity,
        pay: (service.pricePerHour*service.quantity)
      }

      let aux2 = userClient.buys;

      if (!aux2){
        userClient.buys = [invoice];
        console.log('userClient.buys: ',userClient.buys);
      }else{
        aux2.push(invoice);
        userClient.buys = aux2;
        console.log('userClient.buys: ',userClient.buys);
      }
      await filaService.save();
      await userClient.save();
    }))

    const message = 'Succesfull payment'
    return message
  }
module.exports = {paymentValidation}