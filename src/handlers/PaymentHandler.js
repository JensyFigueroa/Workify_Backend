const {paymentValidation} = require('../controllers/paymentValidation')

const checkOutPayment = async (req, res)=>{
    const {id, amount}=req.body;
    try {
        const validatePayment = await paymentValidation(id, amount);
        res.status(200).json(validatePayment)
    } catch (error) {
        res.status(400).json(error.row.message)
    }
}

module.exports = {checkOutPayment};