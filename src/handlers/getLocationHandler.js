const { Service, User } = require('../db.js');
const { getCountry } = require('../controllers/getCountry.js')
const { getCity } = require('../controllers/getCity.js')

const getCountryHandler = async (req, res) => {
   
    try {
        console.log("handler location");
        const location = await getCountry();


        res.status(200).json(location)

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
const getCityHandler = async (req, res) => {
    const { q } = req.query;
    try {
        console.log("handler location");
        const location = await getCity(q);


        res.status(200).json(location)

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};
module.exports = { getCountryHandler, getCityHandler };