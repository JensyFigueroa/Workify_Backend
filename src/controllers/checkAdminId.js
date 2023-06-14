const { Service, User } = require('../db.js');

const checkAdminId = async (body) => {
  const { id } = body;
//console.log(id, "id de la personaque se logeo");
if( id === "DU3MrZyotOWdhxy2XcyLKftNhiL2" ){
    return {
    bolean: true,
     url: "https://workify-admin-dashboard.vercel.app/"
  };
}

  
};

module.exports = { checkAdminId };


//2F0nWmNmtuOTfpgy7672EZcoSll2 .....  || id === "7rcbhZc7hvRk42ZbFGC5txDynVG3" || id === "2F0nWmNmtuOTfpgy7672EZcoSll2"