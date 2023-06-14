const { Service, User } = require('../db.js');

const checkAdminId = async (body) => {
  const { id } = body;
//console.log(id, "id de la personaque se logeo");
if( id === "2F0nWmNmtuOTfpgy7672EZcoSll2" ){
    return {
    bolean: true,
     url: "https://www.google.com"
  };
}

  
};

module.exports = { checkAdminId };