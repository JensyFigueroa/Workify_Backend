require('dotenv').config();
const Stripe = require('stripe')
const { Service, User } = require('../db.js');
// const { Service, User } = require('../db.js');

const {KEY_STRIPE}=process.env;

const stripe = new Stripe(KEY_STRIPE);

const newPayment = async ( cartsItems) =>{

 console.log('cartsItems: ',cartsItems);

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

    let emailData=[];

    try {
      await Promise.all(cartsItems.map(async elementCart => {

        // console.log('estoy dentro del forEach');
   
         let findedService = await Service.findByPk(elementCart.id);
   
        // console.log('Pase el findedService');
   
         let getUser = await findedService.getUser();
   
        // console.log('Pase el getUser');
   
         let emailDataObjetc = {
          idService:elementCart.id,
          nameService : findedService.nameService,
          emailService: getUser.email,
          quantity: elementCart.quantity
         }
   
        //console.log('este es el objeto de correos: ',emailDataObjetc);
   
         emailData=[... emailData, emailDataObjetc];
   
        //  console.log('vamos a ver que le pasa a emailData...', emailData);
   
       }))

       const metadata = emailData.reduce((result, { nameService, emailService , idService, quantity}, index) => {
        result[`nameService_${index}`] = nameService;
        result[`emailService_${index}`] = emailService;
        result[`idService_${index}`] = idService;
        result[`hours_${index}`]=quantity;
        return result;
      }, {});

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items:itemList,
        metadata:metadata,
        mode: 'payment',
        success_url: 'http://127.0.0.1:5173/payment/success?session_id={CHECKOUT_SESSION_ID}',
        //success_url: 'https://workify-alpha.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://127.0.0.1:5173/cart'
        //cancel_url: 'https://workify-alpha.vercel.app/cart'
    })



    return session;

  } catch (error) {
    console.log(error);
  }

}

module.exports = {newPayment}