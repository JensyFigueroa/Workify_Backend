const { Service, User } = require('../db.js');

const checkAdminId = async (body) => {
  const { id } = body;
//console.log(id, "id de la personaque se logeo");
if( id === "DVXCCa8EMgei9Q5lVM2XtzQg3ok2" ){
    return {
    bolean: true,
     url: "https://workify-admin-dashboard.vercel.app/"
  };
}

  
};

module.exports = { checkAdminId };


//2F0nWmNmtuOTfpgy7672EZcoSll2