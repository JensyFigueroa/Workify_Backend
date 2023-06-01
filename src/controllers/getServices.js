
const { Service, User } = require('../db.js');
const { createService } = require('./createService.js');

const getServices = async () => {
  const servicesForTesting = [
    {
      "nameService": "Barber Shop",
      "location": {
        "pais": "Colombia",
        "ciudad": "Armenia"
      },
      "imageUrl": ["https://img.freepik.com/vector-premium/patron-fisuras-corte-pelo-afeitado-barbershop-barber-hombre_82574-12065.jpg", "https://www.salonsuccessacademy.com/wp-content/uploads/2020/04/SuccessfulBarberSalon.jpg", "https://www.barbershop.nyc/wp-content/uploads/2020/09/banner-about-front1.jpg"],
      "description": "We have the best staff and know how to take care of you. Get your look perfect now!",
      "pricePerHour": 10,
      "typeService": "Personal Care",
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Kitchen Make Over",
      "location": {
        "pais": "Colombia",
        "ciudad": "Bogotá"
      },
      "imageUrl": ["https://duomostore.cl/wp-content/uploads/2022/09/remodelacion-cocinas-pequenas.jpg", "https://i.ytimg.com/vi/aC2p92qbbo0/maxresdefault.jpg", "https://thediynuts.com/wp-content/uploads/2021/08/Cheap-kitchen-remodel-ideas-copy.jpg"],
      "description": "The spaces that surround us influence in our emotions and that is why we are dedicated to transforming them into welcoming places",
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
      "imageUrl": ["https://ferreteriavidri.com/public/blog/media/files/Reparaciontubo-01.png", "https://milltownplumbing.com/wp-content/uploads/2020/03/bigstock-Plumber-assembling-pvc-sewage-48326390.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd12c8lyMr63I1piL_B9lR_kfLtdc8l8OTdtNW8LoYlj1Y-H9lw7CW--cx1n7yLomAmJc&usqp=CAU"],
      "description": "Instantly Professional Plumbers Request Estimates for your Home",
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
      "imageUrl": ["https://cdn.homedepot.com.mx/contentMarketing/Tips_Compra/241_Pintura/TC_D241_12/images/pintar-sala.jpg", "https://juanitoelpintor.com/wp-content/uploads/2021/05/adult-painter-man-isolated-blue-wall_1368-171336.jpg", "https://grupogaan.com/wp-content/uploads/2020/03/pintura.jpg"],
      "description": "Professional house and apartment painter. I work with the highest quality materials. Excellent finishes",
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
      "imageUrl": ["https://www.aboutcivil.org/sites/default/files/2017-09/steel-structures-design-construction.jpg", "https://concadi.com/wp-content/uploads/2021/02/edificiobim-850x550.jpg", "https://damassets.autodesk.net/content/dam/autodesk/www/training-and-certification/images/learning-pathways/revit-for-structural-design/families-and-parameters-for-structural-design-thumb-581x290.jpg"],
      "description": "Professional study specialized in Corporate, Industrial and Gastronomic Architecture. Combining a reputation for innovation with a history of excellence in project and construction management",
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
      "imageUrl": ["https://www.arquitecturapura.com/wp-content/uploads/2018/05/El-dise%C3%B1o-arquitect%C3%B3nico.jpg", "https://mscelectrical.com/wp-content/uploads/Electrical-Installation-Design-for-Beginners.jpg", "https://img.freepik.com/premium-photo/electrician-checking-electrical-plans-concept-repair-electrical-equipment_106035-333.jpg?w=2000"],
      "description": "Replacement or updating of electrical panels, Installation of security systems",
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
      reviews: service.reviews,
      UserId: service.UserId,
      enabled: service.enabled
    };
  });

  console.log('servicios', services);
  return services;
};

module.exports = { getServices };