const { Service, User } = require('../db.js');
const {createService} = require('./createService.js');

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
          "typeService": "Peluqueria"
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
          "typeService": "Construccion"
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
          "typeService": "Plomeria"
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
          "typeService": "Pintura"
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
          "typeService": "Ingenieria"
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
          "typeService": "Arquitectura"
        }
      ];
      //ESTO ES PARA QUE SE LES LLENE LA BASE DE DATOS APRA QUE PUEDAN USARLOS SIEMPRE SIN TENER QUE HACER MNUCHOS POST ! A LOS DEL FRONT
        const dbFull = await Service.findAll({
            include: [{
                model: User,
                attributes: ['name', 'email'],
                through: {
                    attributes: [],
                }
            }]
        });
        if(dbFull.length > 0) {

        } else {
        servicesForTesting.forEach( async (service) => {
          await createService(service);
      }) }


    const dbServices = await Service.findAll({
        include: [{
            model: User,
            attributes: ['name', 'email'],
            through: {
                attributes: [],
            }
        }]
    });
    const services = dbServices.map(service => {
        return {
            id: service.id,
            nameService: service.nameService,
            location: service.location,
            imageUrl: service.imageUrl,
            pricePerHour: service.pricePerHour,
            typeService: service.typeService,
        }
    
    })

    //console.log(services, "que tengo en la base de datos filtrados")

    return services;

}
module.exports = { getServices }