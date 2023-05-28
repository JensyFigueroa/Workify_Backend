
const { Service, User } = require('../db.js');
const { createService } = require('./createService.js');

const getServices = async () => {
  const servicesForTesting = [
    {
            "nameService": "Corte de pelo",
            "location": {
              "pais": "Colombia",
              "ciudad": "Armenia"
            },
            "imageUrl": ["https://img.freepik.com/vector-premium/patron-fisuras-corte-pelo-afeitado-barbershop-barber-hombre_82574-12065.jpg"],
            "description": "Corte de pelo para perros y gatos",
            "pricePerHour": 10,
            "typeService": "Peluqueria",
            "UserId": "7rcbhZc7hvRk42ZbFGC5txDynVG3"
          },
          {
            "nameService": "Remodelación de cocina",
            "location": {
              "pais": "Colombia",
              "ciudad": "Bogotá"
            },
            "imageUrl": ["https://duomostore.cl/wp-content/uploads/2022/09/remodelacion-cocinas-pequenas.jpg"],
            "description": "Servicio de remodelación de cocinas",
            "pricePerHour": 50,
            "typeService": "Construccion",
            "UserId": "7rcbhZc7hvRk42ZbFGC5txDynVG3"
          },
          {
            "nameService": "Reparación de tuberías",
            "location": {
              "pais": "Colombia",
              "ciudad": "Medellín"
            },
            "imageUrl": ["https://ferreteriavidri.com/public/blog/media/files/Reparaciontubo-01.png"],
            "description": "Reparación y mantenimiento de tuberías",
            "pricePerHour": 30,
            "typeService": "Plomeria",
            "UserId": "7rcbhZc7hvRk42ZbFGC5txDynVG3"
          },
          {
            "nameService": "Pintura de interiores",
            "location": {
              "pais": "Colombia",
              "ciudad": "Cali"
            },
            "imageUrl": ["https://cdn.homedepot.com.mx/contentMarketing/Tips_Compra/241_Pintura/TC_D241_12/images/pintar-sala.jpg"],
            "description": "Servicio de pintura de interiores",
            "pricePerHour": 40,
            "typeService": "Pintura",
            "UserId": "7rcbhZc7hvRk42ZbFGC5txDynVG3"
          },
          {
            "nameService": "Diseño estructural",
            "location": {
              "pais": "Colombia",
              "ciudad": "Barranquilla"
            },
            "imageUrl": ["https://concadi.com/wp-content/uploads/2021/02/edificiobim-850x550.jpg"],
            "description": "Diseño estructural de edificaciones",
            "pricePerHour": 80,
            "typeService": "Ingenieria",
            "UserId": "7rcbhZc7hvRk42ZbFGC5txDynVG3"
          },
          {
            "nameService": "Diseño arquitectónico",
            "location": {
              "pais": "Colombia",
              "ciudad": "Cartagena"
            },
            "imageUrl": ["https://www.arquitecturapura.com/wp-content/uploads/2018/05/El-dise%C3%B1o-arquitect%C3%B3nico.jpg"],
            "description": "Servicio de diseño arquitectónico",
            "pricePerHour": 70,
            "typeService": "Arquitectura",
            "UserId": "7rcbhZc7hvRk42ZbFGC5txDynVG3"
          }
  ];

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