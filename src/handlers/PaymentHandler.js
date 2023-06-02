const {paymentValidation} = require('../controllers/paymentValidation')
const {newPayment} = require('../controllers/newPayment')

const checkOutPayment = async (req, res)=>{
    const {id, amount, cartItems, userId}=req.body;
    try {
        const validatePayment = await paymentValidation(id, amount, cartItems, userId);
        res.status(200).json(validatePayment)
    } catch (error) {
        console.log(error.message);
        res.json(error.message)
    }
}

const newCheckOut = async (req, res)=>{
    const { cartItems }=req.body;
    try {
        const validatet = await newPayment( cartItems);
        console.log(validatet);
        res.status(200).json(validatet)
    } catch (error) {
        //console.log(error.message);
        res.json(error.message)
    }
}

module.exports = {checkOutPayment, newCheckOut};