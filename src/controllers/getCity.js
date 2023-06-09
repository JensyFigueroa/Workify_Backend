const axios = require( "axios");

const getCity = async (countryCode) => {
    console.log("entre a city");

    const geonamesProxyUrl = 'http://api.geonames.org/';
    const response = await axios.get(`${geonamesProxyUrl}/searchJSON`, {
        params: {
          username: 'joaquinsgro',
          type: 'json',
          country: countryCode,
        },
      });

      //console.log(response.data, "respuesta");
      const citys = response.data.geonames.map(city => {
        return {name: city.name}
      })

  return citys

};

module.exports = { getCity };