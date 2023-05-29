const {paymentValidation} = require('../controllers/paymentValidation')

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

module.exports = {checkOutPayment};