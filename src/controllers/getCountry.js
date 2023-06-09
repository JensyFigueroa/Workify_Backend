const axios = require( "axios");

const getCountry = async () => {
    const geonamesProxyUrl = 'http://api.geonames.org/';
    const response = await axios.get(`${geonamesProxyUrl}/countryInfoJSON`, {
        params: {
          username: 'joaquinsgro',
          type: 'json'
        }
      });

      console.log(response.data, "respuesta");

  const countrys = response.data.geonames.map(country => {
   return ( {
      name: country.countryName,
      code: country.countryCode
    })
  })
  return countrys

};

module.exports = { getCountry };