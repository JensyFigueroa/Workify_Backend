
const { Service, User } = require('../db.js');
const { createService } = require('./createService.js');

const getServices = async () => {
  const servicesForTesting = [
    {
      "nameService": "Hair Cut",
      "location": {
        "pais": "Colombia",
        "ciudad": "Armenia"
      },
      "imageUrl": ["https://img.freepik.com/vector-premium/patron-fisuras-corte-pelo-afeitado-barbershop-barber-hombre_82574-12065.jpg"],
      "description": "Corte de pelo para perros y gatos",
      "pricePerHour": 10,
      "typeService": "Personal Care",
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Kitchen Make Over.",
      "location": {
        "pais": "Colombia",
        "ciudad": "Bogotá"
      },
      "imageUrl": ["https://duomostore.cl/wp-content/uploads/2022/09/remodelacion-cocinas-pequenas.jpg"],
      "description": "Kitchen Make Over",
      "pricePerHour": 50,
      "typeService": "Construction",
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Seweage Repairs",
      "location": {
        "pais": "Colombia",
        "ciudad": "Medellín"
      },
      "imageUrl": ["https://ferreteriavidri.com/public/blog/media/files/Reparaciontubo-01.png"],
      "description": "Seweage Repairs",
      "pricePerHour": 30,
      "typeService": "Sewage",
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Painting Services",
      "location": {
        "pais": "Colombia",
        "ciudad": "Cali"
      },
      "imageUrl": ["https://cdn.homedepot.com.mx/contentMarketing/Tips_Compra/241_Pintura/TC_D241_12/images/pintar-sala.jpg"],
      "description": "Painting Services",
      "pricePerHour": 40,
      "typeService": "Paint",
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Structural Designs",
      "location": {
        "pais": "Colombia",
        "ciudad": "Barranquilla"
      },
      "imageUrl": ["https://concadi.com/wp-content/uploads/2021/02/edificiobim-850x550.jpg"],
      "description": "Structural Designs",
      "pricePerHour": 80,
      "typeService": "Engineering",
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Electrical Designs",
      "location": {
        "pais": "Colombia",
        "ciudad": "Cartagena"
      },
      "imageUrl": ["https://www.arquitecturapura.com/wp-content/uploads/2018/05/El-dise%C3%B1o-arquitect%C3%B3nico.jpg"],
      "description": "Electrical Designs",
      "pricePerHour": 70,
      "typeService": "Electrical",
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    }
  ]

  const dbFull = await Service.findAll();
  // console.log(dbFull, "dbFull");

  if (dbFull.length === 0) {
    console.log('hola if db vacio');
    for (const service of servicesForTesting) {
      await createService(service);
    }
  }

  const dbServices = await Service.findAll();

  const services = dbServices.map(service => {
    return {
      id: service.id,
      nameService: service.nameService,
      location: service.location,
      imageUrl: service.imageUrl,
      pricePerHour: service.pricePerHour,
      typeService: service.typeService,
      UserId: service.UserId,
    };
  });

  return services;
};

module.exports = { getServices };