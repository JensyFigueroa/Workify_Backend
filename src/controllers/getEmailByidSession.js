require('dotenv').config();
const Stripe = require('stripe')
const { Service, User } = require('../db.js');
const {KEY_STRIPE}=process.env;
const { v4 } = require('uuid')


const getEmailByidSession = async(sessionId, idUser) => {

    console.log(idUser,' este es el id user');

    const stripe = new Stripe(KEY_STRIPE);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const metadata = session.metadata;
    const metadataLength = (Object.keys(metadata).length)/3
    let arrayEmails = []

    try {
        for (let i = 0; i < (metadataLength-1); i++) {
            let objService ={
                nameService:metadata[`nameService_${i}`],
                emailService:metadata[`emailService_${i}`],
                hours:metadata[`hours_${i}`],
                idService:metadata[`idService_${i}`]
            }
            arrayEmails.push(objService)
        }
    
        const userClient = await User.findByPk(idUser);
        
        const userName = userClient.name;
    
        await Promise.all(arrayEmails.map(async (service)=>{
    
            let filaService = await Service.findByPk(service.idService)
      
            const contract = {
              pay: (service.hours*filaService.pricePerHour),
              contratistName: userName,
              contracthours: service.hours,
              idUser:idUser
            }
      
            if (filaService.contracts===null){
              filaService.contracts = [contract];
            }else{
              filaService.contracts =[...filaService.contracts, contract]
            }
      
            const invoice = {
              pay: (filaService.pricePerHour*service.hours),
              nameService: service.nameService,
              idService: service.idService,
              typeService: filaService.typeService,
              id:v4()
            }
      
      
            if (userClient.buys===null){
              userClient.buys = [invoice];
            }else{
              userClient.buys = [...userClient.buys, invoice]
            }
            await filaService.save();
            await userClient.save();
          }))
        
        return arrayEmails;
    } catch (error) {
        return console.log(error.message);
    }

}

module.exports={getEmailByidSession}