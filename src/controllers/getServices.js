
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
      "reviews": [
        {
          "name": "William Neiva",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 5,
          "comment": "I am so glad I came here. Pablo, provided the best possible experience. I’m used to Barbers, but this was for superior if you’re looking for a barber in Armenia be sure to check out these guys and make sure you hit up Pablo.",
        }
      ],
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
      "reviews": [
        {
          "name": "Juan Pablo Merida",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 3,
          "comment": "All Fantastic. The Draft was fast and expeditious. The work flowed smoothly, the architects took care of everything, they met the deadlines and the budget",
        }
      ],
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
      "reviews": [
        {
          "name": "Pedro Lopez",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": "5",
          "comment": "Excellent service, they did the maintenance quickly and professionally!",
        }
      ],
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
      "reviews": [
        {
          "name": "Camilo Suaza",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 4,
          "comment": "As always, very good attention and cordiality.",
        },
        {
          "name": "Pedro Lopez",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": "5",
          "comment": "Excellent service, they did the maintenance quickly and professionally!",
        }
      ],
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
      "reviews": [
        {
          "name": "Maria Adelaida Gonzalez",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 5,
          "comment": "Very friendly, listen and understand the needs of customers",
        }
      ],
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
      "reviews": [
        {
          "name": "John Smith",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 4,
          "comment": "Excellent service and quality.",
        }
      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Dog Groomer",
      "location": {
        "pais": "Argentina",
        "ciudad": "Mendoza"
      },
      "imageUrl": ["https://petiberia.com/wp-content/uploads/2018/11/pelu.jpg", "https://www.hogarmania.com/archivos/201708/peluqueria-canina-corte-668x400x80xX.jpg", "https://www.styleanddog.com/archivos/image/_noticias/medias/136-es-que-es-el-grooming-en-peluqueria-canina.jpeg"],
      "description": "Grooming and hairdressing for dogs, Bathing and drying for dogs, Hygiene of ears for dogs",
      "pricePerHour": 50,
      "typeService": "Dog Groomer",
      "reviews": [
        {
          "name": "Pedro Capone",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 3,
          "comment": "They are the best, they leave my little moon very beautiful and they are super affectionate, they are my baby",
        }
      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Hair Salon",
      "location": {
        "pais": "Spain",
        "ciudad": "Barcelona"
      },
      "imageUrl": ["https://3.bp.blogspot.com/-pXJC8UEqYwY/XIE9ZhVqo3I/AAAAAAAAE1w/iz6e17Wunpw4WP924a7JVwxtvnD7HxghgCLcBGAs/s640/peluqueria.jpg", "https://okdiario.com/img/2020/01/21/elegir-una-nueva-peluquerias-655x368.jpeg"],
      "description": "Hair shine, straightening, balayage technique, color or shine bath, light bath, hair dye",
      "pricePerHour": 65,
      "typeService": "Hair Salon",
      "reviews": [
        {
          "name": "John Wick",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 5,
          "comment": "Very expeditious, they gave me an appointment for the same day and they attended me on schedule. They gave me a good cut, listening to what I asked for. Not 1 cm more! Good treatment, good work and very good price!",
        }
      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Gardener",
      "location": {
        "pais": "Spain",
        "ciudad": "Madrid"
      },
      "imageUrl": ["https://blog.decoandlemon.com/wp-content/uploads/2020/11/EPIs-de-jardiner%C3%ADa-qu%C3%A9-protecci%C3%B3n-utilizan-los-jardineros.jpg", "https://www.sanisidro.gob.ar/sites/default/files/img/styles/galeria_800x550/public/summer-3623282_960_720.jpg?itok=fdpUhvfr", "https://cdn.euroinnova.edu.es/img/subidasEditor/euroinnova%20600x400%20(51)-1647950133.webp"],
      "description": "Compost, Weed control, Lawn cutting and maintenance, design and supply of materials and plants for terraces",
      "pricePerHour": 123,
      "typeService": "Gardener",
      "reviews": [
        {
          "name": "Sam Smith",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 4,
          "comment": "Everything was beautiful, they changed the face of those spaces.",
        }
      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Air Conditioning Repair",
      "location": {
        "pais": "Argentina",
        "ciudad": "Mar del Plata"
      },
      "imageUrl": ["https://diansa.com/blog/wp-content/uploads/2018/05/reparacion-aire-acondicionado.jpg", "https://i0.wp.com/tuaireacondicionado.net/wp-content/uploads/reparacion-aire-acondicionado.jpg?resize=600%2C382", "https://cardbiss.com/wp-content/uploads/2022/08/Reparar-Fotolia_162711692_S.jpg"],
      "description": "Installation of air conditioning systems,Installation of heating systems,Installation of thermostats",
      "pricePerHour": 214,
      "typeService": "Air Conditioning Repair",
      "reviews": [
        {
          "name": "Pedro Lopez",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 3,
          "comment": "Very good service and advice, good prices and extensive payment options.",
        }
      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Mechanic",
      "location": {
        "pais": "Mexico",
        "ciudad": "New Mexico"
      },
      "imageUrl": ["https://servicioeurocar.com/wp-content/uploads/2013/07/Mecanica-General-900x444.jpg", "https://www.servicioscastellanos.com/wp-content/uploads/2021/04/motor.jpg"],
      "description": "Auto mechanic, motorcycle mechanic",
      "pricePerHour": 316,
      "typeService": "Mechanic",
      "reviews": [
        {
          "name": "Juan Lopez",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 4,
          "comment": "Super recommended and cheap",
        }
      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Motorcycle Mechanic",
      "location": {
        "pais": "Mexico",
        "ciudad": "Mexico City"
      },
      "imageUrl": ["https://www.campustraining.es/wp-content/uploads/2021/09/mecanica-motos-715x495.jpg", "https://www.campustraining.es/wp-content/uploads/2022/03/funciones-mecanico-motos.jpg", "https://www.ceac.es/sites/default/files/2021-01/curso-mecanico-moto.jpg"],
      "description": "Battery, wheel alignment, oil change, sports, Chopper, electrical repair",
      "pricePerHour": 259,
      "typeService": "Motorcycle Mechanic",
      "reviews": [
        {
          "name": "Chris Smith",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 5,
          "comment": "Grateful to find a competent and honest mechanic",
        }
      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },
    {
      "nameService": "Interior Decoration",
      "location": {
        "pais": "Argentina",
        "ciudad": "Buenos Aires"
      },
      "imageUrl": ["https://i0.wp.com/anautrilla.com/wp-content/uploads/2019/05/Newstyle-interiordesign-trends-tendencias-estilos-decoracion-interiores-mindfulness-newnordic-kinfolk-AnaUtrilla-InteriorismoOnline.jpg?fit=1500%2C850&ssl=1", "https://i0.wp.com/anautrilla.com/wp-content/uploads/2017/04/estilo-loft-industrial-dise%C3%B1o-decoracion-interiores-ana-utrilla-interiorismo.jpg?resize=564%2C846&ssl=1", "https://vivirmejor.mx/wp-content/uploads/2020/09/Decoracion-Interiores-2020-2021-Azul-Clasico.jpg"],
      "description": "Interior designer for houses",
      "pricePerHour": 59,
      "typeService": "Interior Decoration",
      "reviews": [
        {
          "name": "Daniel Ocampo",
          "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          "rating": 4,
          "comment": "Excellent treatment and dedication from the first moment to the last!",

        }

      ],
      "UserId": "PjZfCEFPvuW23hCPI0OI31eMDkr1"
    },

  ]
  const dbFull = await Service.findAll();
  // console.log(dbFull, "dbFull");

  if (dbFull.length === 0) {
    console.log('hola if db vacio');
    for (const service of servicesForTesting) {
      await createService(service);
    }
  }

  const dbServices = await Service.findAll({
    include: [User]
  });
  console.log(dbServices[0].User.name, "servcios crudos del back")
  const services = dbServices.map((service) => {

    console.log(service.User.email)

    return {
      id: service.id,
      nameService: service.nameService,
      location: service.location,
      imageUrl: service.imageUrl,
      pricePerHour: service.pricePerHour,
      typeService: service.typeService,
      reviews: service.reviews,
      UserId: service.UserId,
      enabled: service.enabled,
      nameUserService: service.User.name, // id
      emailUserService: service.User.email // mail
    };
  });

  //console.log('servicios', services);
  return services;
};

module.exports = { getServices };