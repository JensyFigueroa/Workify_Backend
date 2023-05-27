const {paymentValidation} = require('../controllers/paymentValidation')

const checkOutPayment = async (req, res)=>{
    const {id, amount}=req.body;
    try {
        const validatePayment = await paymentValidation(id, amount);
        res.status(200).json(validatePayment)
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }
}

module.exports = {checkOutPayment};