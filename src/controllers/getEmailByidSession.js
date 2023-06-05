require('dotenv').config();
const Stripe = require('stripe')
const { Service, User } = require('../db.js');
const {KEY_STRIPE}=process.env;


const getEmailByidSession = async(sessionId) => {

    const stripe = new Stripe(KEY_STRIPE);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const metadata = session.metadata;
    const metadataLength = (Object.keys(metadata).length)/3
    let arrayEmails = []

    for (let i = 0; i < (metadataLength-1); i++) {
        let objService ={
            nameService:metadata[`nameService_${i}`],
            emailService:metadata[`emailService_${i}`],
            hours:metadata[`hours_${i}`]
        }
        arrayEmails.push(objService)
    }
    
    return arrayEmails;

}

module.exports={getEmailByidSession}