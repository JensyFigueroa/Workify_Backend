require('dotenv').config();
const Stripe = require('stripe')
// const { Service, User } = require('../db.js');

const {KEY_STRIPE}=process.env;

const stripe = new Stripe(KEY_STRIPE);

const newPayment = async ( cartsItems) =>{



    const itemList = await cartsItems.map(item=>{
        const newItem = {
            price_data: {
              currency: 'usd',
              unit_amount: item.pricePerHour * 100,
              product_data: {
                name: item.nameService
              },
            },
            quantity: item.quantity,
          };
        return newItem
    })

    console.log(itemList);
    console.log(itemList[0].price_data.product_data);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items:itemList,
        mode: 'payment',
        success_url: 'http://localhost:3001/payment/success',
        cancel_url: 'http://localhost:3001/payment/cancel'
    })
    

    return session;

}

module.exports = {newPayment}