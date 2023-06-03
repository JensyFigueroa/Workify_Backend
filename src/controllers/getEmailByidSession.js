require('dotenv').config();
const Stripe = require('stripe')
const { Service, User } = require('../db.js');
const {KEY_STRIPE}=process.env;


const getEmailByidSession = async(sessionId) => {

    const stripe = new Stripe(KEY_STRIPE);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const metadata = session.metadata;
    const metadataLength = Object.keys(metadata).length
    let arrayEmails = []

    for (let i = 0; i < (metadataLength/2); i++) {
        let objService ={}

        objService[metadata[`nameService_${i}`]]=metadata[`emailService_${i}`]
        
        arrayEmails.push(objService)
    }
    
    return arrayEmails;

}

module.exports={getEmailByidSession}