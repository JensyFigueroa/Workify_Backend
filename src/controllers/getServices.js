const { Service, User } = require("../db.js");
const { createService } = require("./createService.js");

const getServices = async () => {
  const servicesForTesting = [
    {
      nameService: "Barber Shop",
      location: {
        pais: "Colombia",
        ciudad: "Armenia",
      },
      imageUrl: [
        "https://cursosdebarberia.com/media/courses/image/medium/1aa3ed873f6dc0411c65c89ea126c1b5.jpg",
        "https://media.istockphoto.com/id/872361244/es/foto/hombre-de-recibir-su-barba-cortan-con-m%C3%A1quina-de-afeitar-el%C3%A9ctrica.jpg?s=612x612&w=0&k=20&c=2ZR2ykmaF4R5OB6zk-VxPfLNFtGHfbiIYdabhvt4FZQ=",
        "https://tiendalobo.com/wp-content/uploads/2021/12/barbero_kit_incial.jpg",
        "https://manmedicalinstitute.com/wp-content/uploads/2021/04/mejores-cortes-pelo-segun-rostro-768x513.jpg"
      ],
      description:
        "We have the best staff and know how to take care of you. Get your look perfect now!",
      pricePerHour: 10,
      typeService: "Childcare",
      reviews: [
        {
          name: "William Neiva",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment:
            "I am so glad I came here. Pablo, provided the best possible experience. I’m used to Barbers, but this was for superior if you’re looking for a barber in Armenia be sure to check out these guys and make sure you hit up Pablo.",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Kitchen Make Over",
      location: {
        pais: "Colombia",
        ciudad: "Bogotá",
      },
      imageUrl: [
        "https://duomostore.cl/wp-content/uploads/2022/09/remodelacion-cocinas-pequenas.jpg",
        "https://i.ytimg.com/vi/aC2p92qbbo0/maxresdefault.jpg",
        "https://thediynuts.com/wp-content/uploads/2021/08/Cheap-kitchen-remodel-ideas-copy.jpg",
      ],
      description:
        "The spaces that surround us influence in our emotions and that is why we are dedicated to transforming them into welcoming places",
      pricePerHour: 50,
      typeService: "Masonry",
      reviews: [
        {
          name: "Juan Pablo Merida",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 3,
          comment:
            "All Fantastic. The Draft was fast and expeditious. The work flowed smoothly, the architects took care of everything, they met the deadlines and the budget",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Seweage Repairs",
      location: {
        pais: "Colombia",
        ciudad: "Medellín",
      },
      imageUrl: [
        "https://ferreteriavidri.com/public/blog/media/files/Reparaciontubo-01.png",
        "https://milltownplumbing.com/wp-content/uploads/2020/03/bigstock-Plumber-assembling-pvc-sewage-48326390.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd12c8lyMr63I1piL_B9lR_kfLtdc8l8OTdtNW8LoYlj1Y-H9lw7CW--cx1n7yLomAmJc&usqp=CAU",
      ],
      description:
        "Instantly Professional Plumbers Request Estimates for your Home",
      pricePerHour: 30,
      typeService: "Plumbing",
      reviews: [
        {
          name: "Pedro Lopez",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: "5",
          comment:
            "Excellent service, they did the maintenance quickly and professionally!",
        },
        
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Painting Services",
      location: {
        pais: "Colombia",
        ciudad: "Cali",
      },
      imageUrl: [
        "https://cdn.homedepot.com.mx/contentMarketing/Tips_Compra/241_Pintura/TC_D241_12/images/pintar-sala.jpg",
        "https://juanitoelpintor.com/wp-content/uploads/2021/05/adult-painter-man-isolated-blue-wall_1368-171336.jpg",
        "https://grupogaan.com/wp-content/uploads/2020/03/pintura.jpg",
      ],
      description:
        "Professional house and apartment painter. I work with the highest quality materials. Excellent finishes",
      pricePerHour: 40,
      typeService: "Painting",
      reviews: [
        {
          name: "Camilo Suaza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 4,
          comment: "As always, very good attention and cordiality.",
        },
        {
          name: "Pedro Lopez",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: "5",
          comment:
            "Excellent service, they did the maintenance quickly and professionally!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Structural Designs",
      location: {
        pais: "Colombia",
        ciudad: "Barranquilla",
      },
      imageUrl: [
        "https://www.aboutcivil.org/sites/default/files/2017-09/steel-structures-design-construction.jpg",
        "https://concadi.com/wp-content/uploads/2021/02/edificiobim-850x550.jpg",
        "https://damassets.autodesk.net/content/dam/autodesk/www/training-and-certification/images/learning-pathways/revit-for-structural-design/families-and-parameters-for-structural-design-thumb-581x290.jpg",
      ],
      description:
        "Professional study specialized in Corporate, Industrial and Gastronomic Architecture. Combining a reputation for innovation with a history of excellence in project and construction management",
      pricePerHour: 80,
      typeService: "Masonry",
      reviews: [
        {
          name: "Maria Adelaida Gonzalez",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment:
            "Very friendly, listen and understand the needs of customers",
        }, {
          name: "Juan cruz viamonte",
          imageUrl:
            "https://modaellos.com/wp-content/uploads/2017/11/cortes-tipo-rostro-ovalado-istock.jpg",
          rating: 5,
          comment:
            "The design is excellent, and I love how everything turned out!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Electrical Designs",
      location: {
        pais: "Colombia",
        ciudad: "Cartagena",
      },
      imageUrl: [
        "https://www.arquitecturapura.com/wp-content/uploads/2018/05/El-dise%C3%B1o-arquitect%C3%B3nico.jpg",
        "https://mscelectrical.com/wp-content/uploads/Electrical-Installation-Design-for-Beginners.jpg",
        "https://img.freepik.com/premium-photo/electrician-checking-electrical-plans-concept-repair-electrical-equipment_106035-333.jpg?w=2000",
      ],
      description:
        "Replacement or updating of electrical panels, Installation of security systems",
      pricePerHour: 70,
      typeService: "Electricity",
      reviews: [
        {
          name: "John Smith",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 4,
          comment: "Excellent service and quality.",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Dog Groomer",
      location: {
        pais: "Argentina",
        ciudad: "Mendoza",
      },
      imageUrl: [
        "https://petiberia.com/wp-content/uploads/2018/11/pelu.jpg",
        "https://www.hogarmania.com/archivos/201708/peluqueria-canina-corte-668x400x80xX.jpg",
        "https://www.styleanddog.com/archivos/image/_noticias/medias/136-es-que-es-el-grooming-en-peluqueria-canina.jpeg",
      ],
      description:
        "Grooming and hairdressing for dogs, Bathing and drying for dogs, Hygiene of ears for dogs",
      pricePerHour: 50,
      typeService: "Pet Care",
      reviews: [
        {
          name: "Pedro Capone",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 3,
          comment:
            "They are the best, they leave my little moon very beautiful and they are super affectionate, they are my baby",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Hair Salon",
      location: {
        pais: "Spain",
        ciudad: "Barcelona",
      },
      imageUrl: [
        "https://3.bp.blogspot.com/-pXJC8UEqYwY/XIE9ZhVqo3I/AAAAAAAAE1w/iz6e17Wunpw4WP924a7JVwxtvnD7HxghgCLcBGAs/s640/peluqueria.jpg",
        "https://okdiario.com/img/2020/01/21/elegir-una-nueva-peluquerias-655x368.jpeg",
      ],
      description:
        "Hair shine, straightening, balayage technique, color or shine bath, light bath, hair dye",
      pricePerHour: 65,
      typeService: "Childcare",
      reviews: [
        {
          name: "John Wick",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment:
            "Very expeditious, they gave me an appointment for the same day and they attended me on schedule. They gave me a good cut, listening to what I asked for. Not 1 cm more! Good treatment, good work and very good price!",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Gardener",
      location: {
        pais: "Spain",
        ciudad: "Madrid",
      },
      imageUrl: [
        "https://blog.decoandlemon.com/wp-content/uploads/2020/11/EPIs-de-jardiner%C3%ADa-qu%C3%A9-protecci%C3%B3n-utilizan-los-jardineros.jpg",
        "https://www.sanisidro.gob.ar/sites/default/files/img/styles/galeria_800x550/public/summer-3623282_960_720.jpg?itok=fdpUhvfr",
        "https://cdn.euroinnova.edu.es/img/subidasEditor/euroinnova%20600x400%20(51)-1647950133.webp",
      ],
      description:
        "Compost, Weed control, Lawn cutting and maintenance, design and supply of materials and plants for terraces",
      pricePerHour: 123,
      typeService: "Gardening",
      reviews: [
        {
          name: "Sam Smith",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 4,
          comment:
            "Everything was beautiful, they changed the face of those spaces.",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Air Conditioning Repair",
      location: {
        pais: "Argentina",
        ciudad: "Mar del Plata",
      },
      imageUrl: [
        "https://diansa.com/blog/wp-content/uploads/2018/05/reparacion-aire-acondicionado.jpg",
        "https://i0.wp.com/tuaireacondicionado.net/wp-content/uploads/reparacion-aire-acondicionado.jpg?resize=600%2C382",
        "https://cardbiss.com/wp-content/uploads/2022/08/Reparar-Fotolia_162711692_S.jpg",
      ],
      description:
        "Installation of air conditioning systems,Installation of heating systems,Installation of thermostats",
      pricePerHour: 214,
      typeService: "Computer and Electronics Repair",
      reviews: [
        {
          name: "Pedro Lopez",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 3,
          comment:
            "Very good service and advice, good prices and extensive payment options.",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Mechanic",
      location: {
        pais: "Mexico",
        ciudad: "New Mexico",
      },
      imageUrl: [
        "https://blog.reparacion-vehiculos.es/hs-fs/hubfs/Im%C3%A1genes_Post/Enero_2016/ser-buen-mecanico.jpg?width=788&height=525&name=ser-buen-mecanico.jpg",
        "https://servicioeurocar.com/wp-content/uploads/2013/07/Mecanica-General-900x444.jpg",
        "https://www.servicioscastellanos.com/wp-content/uploads/2021/04/motor.jpg",
        "https://static.retail.autofact.cl/blog/c_url_original.2t61kfi342sy.jpg"
      ],
      description: "Auto mechanic, motorcycle mechanic",
      pricePerHour: 316,
      typeService: "Automobile Repair",
      reviews: [
        {
          name: "Juan Lopez",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 4,
          comment: "Super recommended and cheap",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Motorcycle Mechanic",
      location: {
        pais: "Mexico",
        ciudad: "Mexico City",
      },
      imageUrl: [
        "https://www.campustraining.es/wp-content/uploads/2021/09/mecanica-motos-715x495.jpg",
        "https://www.campustraining.es/wp-content/uploads/2022/03/funciones-mecanico-motos.jpg",
        "https://www.ceac.es/sites/default/files/2021-01/curso-mecanico-moto.jpg",
        "https://www.lasuperdigital.com.ar/wp-content/uploads/2022/02/MECANICA-DE-MOTOS.jpg",
        
      ],
      description:
        "Battery, wheel alignment, oil change, sports, Chopper, electrical repair",
      pricePerHour: 259,
      typeService: "Automobile Repair",
      reviews: [
        {
          name: "Chris Smith",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "Grateful to find a competent and honest mechanic",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Interior Decoration",
      location: {
        pais: "Argentina",
        ciudad: "Buenos Aires",
      },
      imageUrl: [
        "https://i0.wp.com/anautrilla.com/wp-content/uploads/2019/05/Newstyle-interiordesign-trends-tendencias-estilos-decoracion-interiores-mindfulness-newnordic-kinfolk-AnaUtrilla-InteriorismoOnline.jpg?fit=1500%2C850&ssl=1",
        "https://i0.wp.com/anautrilla.com/wp-content/uploads/2017/04/estilo-loft-industrial-dise%C3%B1o-decoracion-interiores-ana-utrilla-interiorismo.jpg?resize=564%2C846&ssl=1",
        "https://vivirmejor.mx/wp-content/uploads/2020/09/Decoracion-Interiores-2020-2021-Azul-Clasico.jpg",
      ],
      description: "Interior designer for houses",
      pricePerHour: 59,
      typeService: "Interior Design and Decoration",
      reviews: [
        {
          name: "Daniel Ocampo",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 4,
          comment:
            "Excellent treatment and dedication from the first moment to the last!",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },

    {
      nameService: "Architectural Service",
      location: {
        pais: "Argentina",
        ciudad: "Buenos Aires",
      },
      imageUrl: [
        "https://www.espaciohonduras.net/images/arquitectura_ing_civil/articulos/Arquitectura_concepto/Arquitectura_concepto.jpg",
        "https://carrerasuniversitarias.com.co/img/article/habilidades-que-debe-tener-un-arquitecto",
        "https://www.unitec.mx/hubfs/01.UNITEC/oferta-academica/licenciaturas/img-destacada/licenciatura-en-diseno-de-interiores-h.webp"
      ],
      description:
      "I offer design and construction services for architectural projects. Experience in residential and commercial.",
      pricePerHour: 150,
      typeService: "Interior Design and Decoration",
      reviews: [
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 4,
          comment: "Great attention to detail. Very satisfied with the result.",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },

    {
      nameService: "Civil engineer",
      location: {
        pais: "Argentina",
        ciudad: "Buenos Aires",
      },
      imageUrl: [
        "https://prostudyaustralia.com/wp-content/uploads/2022/04/Civil-Engineering-Draftsperson.jpg",
        "https://i.pinimg.com/736x/2f/60/6a/2f606adc6f81c7a878fc6e409e80253d.jpg",
        "https://peru21.pe/resizer/mbcIKqLKw48nmTQSR6WWfYU7V6Q=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/LPAAIGL5TBE23HF6DQIST5VXCU.jpg",
        "https://img.freepik.com/fotos-premium/trabajador-ingeniero-construccion-ingeniero-civil-que-verifica-trabajo-sitio-construccion-concepto-construccion-casa_61243-627.jpg?w=2000"

      ],
      description: "I offer civil and structural engineering services. Experience in project design and supervision.",
      pricePerHour: 140,
      typeService: "Interior Design and Decoration",
      reviews: [
        {
          name: "Pepe guardiola",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "Excellent professional. Worked diligently on our project!",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Hairdressing service",
      location: {
        pais: "Argentina",
        ciudad: "Buenos Aires",
      },
      imageUrl: [
        "https://www.carloscondepeluqueros.com/wp-content/uploads/2018/11/cabecera.jpg",
        "https://diariosanrafael.com.ar/wp-content/uploads/2022/08/J7X2VF2LJZGMDPJ3JILYEU3V5U.jpg",
        "https://s1.ppllstatics.com/diariovasco/www/multimedia/2023/03/09/portada_corte-knnD--1920x1080@Diario%20Vasco-DiarioVasco.jpg",
        "https://cdn-dihgd.nitrocdn.com/TJLRjoQONtBdtwhFJXjrObtULXNgieFE/assets/images/optimized/rev-08e010e/web2020/wp-content/uploads/2020/11/corte-chica-pablo-peluqueros-valencia.jpg",
        "https://ath2.unileverservices.com/wp-content/uploads/sites/13/2022/02/01230757/cortes-de-pelo-para-hombre-2022-12.jpg"

      ],
      description: "I offer hair cutting, styling, and hair treatments services. Specialized in various styles and trends.",
      pricePerHour: 30,
      typeService: "Childcare",
      reviews: [
        {
          name: "Daniel  Ramírez",
          imageUrl:
            "https://modaellos.com/wp-content/uploads/2017/11/cortes-tipo-rostro-ovalado-istock.jpg",
          rating: 5,
          comment: "Good service, understood the haircut I was looking for.",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "He did an excellent job with my haircut. Highly recommended.",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Construction service",
      location: {
        pais: "Argentina",
        ciudad: "Buenos Aires",
      },
      imageUrl: [
        "https://www.unotv.com/uploads/2022/02/albaniles-182530.jpg",
        "https://www.comercturro.com/blog/documentos/ImagenesArticulos/principales/herramientas-alba%C3%B1il-imprescindibles.jpg",
        "https://qph.cf2.quoracdn.net/main-qimg-5bba033088daa409d89f145bfbe78988-lq",
        "https://regeneracion.mx/wp-content/uploads/2020/12/CONSTRUCTORAS-INFONAVIT.jpg",
        "https://javierherran.com/wp-content/uploads/2015/12/obracivil2.jpg",
        "https://resizer.glanacion.com/resizer/v2/obras-en-PXQS63VFNRHCZGMQB3QNJXYRWA.jpg?auth=b8f7ab14cc9c4c5aa9a4826fe1dbfd4743a4564391ddf7d5be97e7a92df4107d&width=1200&height=800&quality=80&smart=false"

      ],
      description: "I offer services in construction and remodeling of homes and buildings.",
      pricePerHour: 90,
      typeService: "Masonry",
      reviews: [
        {
          name: "Benjamín  Fernández",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "I remodeled the garden and the patio, it looks beautiful!!!",
        },
        {
          name: "Martina  Herrera",
          imageUrl:
            "https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcmElMjBkZSUyMG11amVyfGVufDB8fDB8fHww&w=1000&q=80",
          rating: 4,
          comment: "They did an exceptional job in our house. Very professional and friendly!",
        },
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Dental service",
      location: {
        pais: "Uruguay",
        ciudad: "Montevideo",
      },
      imageUrl: [
        "https://uniclinic.es/wp-content/uploads/2019/09/odontologos-algeciras-uniclinic-clinica-dental.jpg",
        "https://s3.amazonaws.com/files.todaysmilitary.com/s3fs-public/2020-05/dentists.jpg",
        "https://clinicadentalgingiva.es/wp-content/uploads/2020/11/Cu%C3%A1l-es-la-diferencia-entre-un-dentista-y-un-odontologo.jpg",
        "https://www.salta.gob.ar/public/images/noticias/72558-odontologos-pueden-capacitarse-para-realizar-hisopado-nasofaringeo.jpeg",
        "https://media.lacapital.com.ar/p/f6c62188be212f62349a18c00ce9bf9a/adjuntos/204/imagenes/026/249/0026249702/1200x675/smart/.jpg"

      ],
      description: "I offer general and specialized dental services. High-quality treatments with modern technology.",
      pricePerHour: 100,
      typeService: "Childcare",
      reviews: [
        {
          name: "Valentina  López",
          imageUrl:
            "https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcmElMjBkZSUyMG11amVyfGVufDB8fDB8fHww&w=1000&q=80",
          rating: 5,
          comment: "He relieved the toothache that was bothering me, and now I can rest in peace.",
        },{
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 4,
          comment: "An excellent dentist. He made me feel comfortable throughout the entire treatment!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },
    {
      nameService: "Mechanical service",
      location: {
        pais: "Colombia",
        ciudad: "Medellín",
      },
      imageUrl: [
        "https://www.eleconomista.com.mx/__export/1586312709368/sites/eleconomista/img/2020/04/07/clear-taller-mecanico-jalisco-plataforma-cortesia-clear.jpg_673822677.jpg",
        "https://talleresdelasheras.com/wp-content/uploads/2022/06/problemas-mecanicos-comunes-parteii.jpg",
        "https://mycaready.com/wp-content/uploads/2023/02/riesgos-laborales-talleres-mecanicos.jpg",
        "https://estaticos-cdn.prensaiberica.es/clip/5a9ae9c2-f8b7-4a9a-a765-8e44adac6a8e_16-9-discover-aspect-ratio_default_0.jpg",
        "https://www.semana.com/resizer/RXf8jeQMfqyuCAShi7pHqs0wF_I=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/B5RE5T2GNVBH3DT35DSMEL7P3A.jpg"
        

      ],
      description: "I offer services for vehicle repair and maintenance. Experience with different brands and models.",
      pricePerHour: 40,
      typeService: "Automobile Repair",
      reviews: [
        {
          name: "Sofía  Martínez",
          imageUrl:
            "https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcmElMjBkZSUyMG11amVyfGVufDB8fDB8fHww&w=1000&q=80",
          rating: 5,
          comment: "I am very satisfied with the work, excellent service, and most importantly, my car looks great!",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "My car had a side collision, but after hiring the service, my car looks brand new. Excellent service!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Gardening Service",
      location: {
        pais: "Colombia",
        ciudad: "Medellín",
      },
      imageUrl: [
        "https://i0.wp.com/easycasa.ar/wp-content/uploads/2021/09/Jardineria-Donde-trabaja-un-jardinero-1-scaled.jpg?fit=2560%2C1707&ssl=1",
        "https://www.lecciona.mx/wp-content/uploads/2020/08/curso-online-jardinero-profesional_l_primaria_1.jpg",
        "https://tecniverjardineria.com/wp-content/uploads/2017/11/h150-0300.jpg",
        "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/236891be-d6b1-4870-bd31-7024fff25293?rule=hw396_70",
        "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/69604b94-122a-4399-903a-3c09bd0974cd?rule=hw396_70"
        
      ],
      description: "I offer gardening services for the design, maintenance, and landscaping of residential and commercial gardens",
      pricePerHour: 50,
      typeService: "Gardening",
      reviews: [
        {
          name: "Pedro gomez",
          imageUrl:
            "https://img.freepik.com/foto-gratis/disparo-cabeza-hombre-atractivo-sonriendo-complacido-mirando-intrigado-pie-sobre-fondo-azul_1258-65468.jpg",
          rating: 5,
          comment: "Excellent service. My garden has never looked better",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "The gardener did a great job, the lawn in my house looks really good!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Wedding Photography Service",
      location: {
        pais: "Uruguay",
        ciudad: "Montevideo",
      },
      imageUrl: [
        "https://www.blixt.tv/wp-content/uploads/2018/12/video-homepage-blixt-800x534.jpg",
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/03/fotografo-estudio.jpg?fit=1200%2C818&quality=50&strip=all&ssl=1",
        "https://i.imgur.com/6u2drt3.jpg",
        "https://gregdotel.com/wp-content/uploads/2021/06/15-an%CC%83os-Emely__672__GDP7208_15-an%CC%83os-jarabacoa-jardin-botanico-quincean%CC%83eras-republica-dominicana_Greg-Dotel_6-768x513.jpg",
        "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1050,h_701/https://fotoconfede.com/wp-content/uploads/2022/09/Bruno-Montt-2.jpg"
      ],
      description: "I offer professional photography services to capture the most special moments of your wedding",
      pricePerHour: 95,
      typeService: "Catering and Event Service",
      reviews: [
        {
          name: "Kelvin Torrres",
          imageUrl:
            "https://w0.peakpx.com/wallpaper/193/429/HD-wallpaper-bert-tischendorf-face-man-actor.jpg",
          rating: 5,
          comment: "Amazing photographer. They made our wedding day even more memorable",
        },
        {
          name: "Jordan Belfort",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0069/7879/7637/articles/Josh-Duhamel-600x450.jpg?v=1541206688",
          rating: 5,
          comment: "I don't regret hiring him, the best photos of our wedding will stay with me forever!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Personal Training Service",
      location: {
        pais: "Peru",
        ciudad: "Lima",
      },
      imageUrl: [
        "https://media.istockphoto.com/id/675179390/es/foto/entrenador-muscular-en-portapapeles.jpg?s=612x612&w=0&k=20&c=eFDuNzHQJfNzOpZGxCPi8pM8bC18EeIm6lgVlmjPuhw=",
        "https://athleticsweekly.com/wp-content/uploads/2020/11/PT-image-via-OriGym.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Two_people_in_a_gym_using_BOSU_balls.jpg/800px-Two_people_in_a_gym_using_BOSU_balls.jpg",
        "https://www.entrenadorpersonalbtp.com/wp-content/uploads/2019/01/C%C3%B3mo_ponerse_en_forma_con_entrenador_personal-1.jpg",
        "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/19160834/cfbeachbag-048.jpg"        
      ],
      description: "I offer personalized training services to help you achieve your fitness goals",
      pricePerHour: 60,
      typeService: "Personal Training and Fitness",
      reviews: [
        {
          name: "Juan Albares",
          imageUrl:
            "https://static.wixstatic.com/media/4304a4_bbf59d15c02744cc94bd3feb11cb25ab~mv2.jpg/v1/fill/w_478,h_457,al_c,q_80,enc_auto/4304a4_bbf59d15c02744cc94bd3feb11cb25ab~mv2.jpg",
          rating: 4,
          comment: "Great trainer. Pushes you to reach your limits and get results",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "The functional training was great, I improve more and more every day!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Event Planning Service",
      location: {
        pais: "Chile",
        ciudad: "Santiago de Chile",
      },
      imageUrl: [
        "https://ingenieriademenu.com/wp-content/uploads/2021/06/Como-ser-un-buen-organizador-de-eventos.jpg",
        "https://ingenieriademenu.com/wp-content/uploads/2021/06/trabajar-como-organizador-de-eventos.jpg",
        "https://aprende.com/wp-content/uploads/2020/03/organizacio%CC%81n-de-eventos.jpg",
        "https://aprende.com/wp-content/uploads/2022/04/hero_EVENTOS_FB_mobile_2.jpg",
        "https://dnb2eg0emsxdz.cloudfront.net/cdn/13/images/curso-online-organizador-de-eventos_amp_primaria_1_1560503060.jpg",
        "https://winkeventos.com/wp-content/uploads/2023/03/Conoce-las-funciones-de-un-organizador-de-eventos-antes-de-contratarlo.webp"
      ],
      description: "I offer professional event planning services for weddings, parties, and corporate events",
      pricePerHour: 75,
      typeService: "Catering and Event Service",
      reviews: [
        {
          name: "Erika Gutierrrez",
          imageUrl:
            "https://www.clara.es/medio/2022/05/10/cortes-de-pelo-cara-cuadrada-angelina-jolie_73dfa721_1280x1920.jpg",
          rating: 5,
          comment: "The event was well-organized and everything went smoothly. Great job!",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "Excellent event! I had a great time at the grand opening of my workplace's new branch!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Graphic Design Service",
      location: {
        pais: "Ecuador",
        ciudad: "Quito",
      },
      imageUrl: [
        "https://aptus.com.ar/wp-content/uploads/2022/11/disenografico.jpg",
        "https://www.roc21.com/blog/wp-content/uploads/2010/12/portafolio-de-un-disenador-grafico-2.jpg",
        "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1472458066/content-items/001/696/403/predators01-original.jpg?1472458066",
        "https://www.toulouselautrec.edu.pe/sites/default/files/no-te-limitas-un-solo-tipo-trabajo.jpg",
        "https://287524.fs1.hubspotusercontent-na1.net/hubfs/287524/Imported_Blog_Media/donde-trabaja-un-licenciado-en-diseno-animacion-y-arte-digital-1-compressor-3.png"
      ],
      description: "I offer creative graphic design services for logos, branding, and marketing materials",
      pricePerHour: 65,
      typeService: "Computer and Electronics Repair",
      reviews: [
        {
          name: "Jennifer Brown",
          imageUrl:
            "https://img.freepik.com/foto-gratis/retrato-mujer-hermosa-cara-cerca_155003-8378.jpg",
          rating: 4,
          comment: "The designer understood my vision and delivered exceptional results",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "I asked her to design a logo for the soccer team, and it turned out amazing! She is a great professional, 5 stars!!!!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Translation Service",
      location: {
        pais: "Argentina",
        ciudad: "Buenos Aires",
      },
      imageUrl: [
        "https://www.nosequeestudiar.net/site/assets/files/111/carrera-traductor-de-idiomas.jpg",
        "https://es.digitaltrends.com/wp-content/uploads/2021/11/traductor-trabajo.jpg?fit=720%2C720&p=1",
        "https://www.currentschoolnews.com/wp-content/uploads/2021/03/shutterstock_504476494.jpg",
        "https://www.at-languagesolutions.com/wp-content/uploads/2021/10/Ser-traductor.png",
        "https://formacionimpulsat.com/wp-content/uploads/2021/03/U421233720170820_182100_Reunion-personas-traductor.jpg"
      ],
      description: "I offer accurate and professional translation services for various languages.",
      pricePerHour: 90,
      typeService: "Translation and Interpretation Service",
      reviews: [
        {
          name: "Luis Hernandez",
          imageUrl:
            "https://www.sopitas.com/site/wp-content/uploads/2015/03/archetypal-male-fa_3249635c.jpg",
          rating: 4,
          comment: "The translator provided high-quality translations within the deadline.",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "I hired this service and managed to finalize a new business deal with entrepreneurs from China, Japan, and the USA.",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Gas Service",
      location: {
        pais: "Peru",
        ciudad: "Lima",
      },
      imageUrl: [
        "https://homesolution.net/blog/wp-content/uploads/2019/02/gasista.jpg",
        "https://guialaplata.net/wp-content/uploads/2022/09/josee.jpg",
        "https://www.cronista.com/files/image/464/464255/629dd2420cdf0.jpg",
        "https://i0.wp.com/easycasa.ar/wp-content/uploads/2021/10/Gas-Que-es-un-gasista-de-unidades-unifuncionales-1-scaled.jpg?fit=2560%2C1706&ssl=1"
      ],
      description: "I offer gas installation and maintenance services. I am a professional in my field with many years of experience.",
      pricePerHour: 60,
      typeService: "Plumbing",
      reviews: [
        {
          name: "Megan Wilson",
          imageUrl:
            "https://images.pexels.com/photos/1458332/pexels-photo-1458332.jpeg?cs=srgb&dl=pexels-liam-anderson-1458332.jpg&fm=jpg",
          rating: 4,
          comment: "I am satisfied. I had a gas leak in my house, and he solved it on the same day, leaving everything tidy.",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "Highly recommended! I hired him because he was recommended to me, and he did an excellent job.",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Website Development Service",
      location: {
        pais: "Colombia",
        ciudad: "Medellín",
      },
      imageUrl: [
        "https://marketing4ecommerce.net/wp-content/uploads/2020/11/nueva-portada-enero-1-6-1280x720.jpg",
        "https://blog.hubspot.es/hubfs/media/disenowebherramientas.jpeg",
        "https://estados-unidos.info/wp-content/uploads/2021/10/perfil-programador-java-1.jpg",
        "https://www.tresce.com/blog/wp-content/uploads/2018/07/la-importancia-del-diseno-web.png"
        
      ],
      description: "I offer custom website development services for businesses and individuals.",
      pricePerHour: 95,
      typeService: "Computer and Electronics Repair",
      reviews: [
        {
          name: "David Thompson",
          imageUrl:
            "https://clinicasrem.com/wp-content/uploads/2021/09/masculinizaci%C3%B3n-facial-masculina.jpg",
          rating: 4,
          comment: "The website turned out exactly how I envisioned it. Great work!",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "I'm starting my own business, and having a website is crucial. I hired this service, and I absolutely loved how everything turned out! It's exactly what I was looking for!",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Tutoring Service",
      location: {
        pais: "Peru",
        ciudad: "Lima",
      },
      imageUrl: [
        "https://emergenttutoring.com/wp-content/uploads/2021/10/tutoring-center-for-elementary-students.jpg",
        "https://www.care.com/c/wp-content/uploads/sites/2/2021/04/sherireed-201912232312991414.jpg.optimal.jpg",
        "https://elearningindustry.com/wp-content/uploads/2021/01/tutoring-business-is-it-a-good-idea.png",
        "https://www.corpnet.com/wp-content/uploads/2019/02/Female-Tutor-Working-With-Male-Student.jpg"
      ],
      description: "I offer tutoring services for various subjects and grade levels.",
      pricePerHour: 65,
      typeService: "Childcare",
      reviews: [
        {
          name: "Sophia Anderson",
          imageUrl:
            "https://www.clara.es/medio/2022/05/10/cortes-de-pelo-cara-cuadrada-angelina-jolie_73dfa721_1280x1920.jpg",
          rating: 4,
          comment: "The tutor was patient, knowledgeable, and helped me improve my grades.",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "I needed a tutor for my son, and I hired this service. Now I can be at ease knowing that he is studying and understanding things.",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Legal Consultation Service",
      location: {
        pais: "Peru",
        ciudad: "Lima",
      },
      imageUrl: [
        "https://longlistio.s3.amazonaws.com/jd/legal-counsel-job-description-1659714224.webp",
        "https://spigglelaw.com/wp-content/uploads/2015/05/9-Steps-to-Finding-the-Best-Lawyer-for-Your-Northern-Virginia-Employment-Case-1-1024x659.jpg",
        "https://www.nnlegalaid.org/wp-content/uploads/2022/01/pexels-mart-production-7550394-1024x682.jpg",
        "https://www.mdlab.org/wp-content/uploads/slider/cache/f489184903c47905c08c2278e9135f7c/iStock-1348871728.jpg"
        
      ],
      description: "I offer legal consultation services for individuals and businesses.",
      pricePerHour: 80,
      typeService: "Translation and Interpretation Service",
      reviews: [
        {
          name: "Robert Davis",
          imageUrl:
            "https://img.freepik.com/foto-gratis/concepto-emociones-personas-foto-cabeza-hombre-guapo-aspecto-serio-barba-confiado-decidido_1258-26730.jpg",
          rating: 4,
          comment: "The lawyer provided valuable advice and resolved my legal issues.",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    },{
      nameService: "Catering Service",
      location: {
        pais: "Argentina",
        ciudad: "Buenos aires",
      },
      imageUrl: [
        "https://ahrcavillagesell.com.ar/wp-content/uploads/2015/09/unnamedIRKR79BT.png",
        "https://admin.desdecrespo.com.ar/wp-content/uploads/2022/03/1805-ALDEA-SPATZENKUTTER-CURSO-MOZO.jpg",
        "https://cdn0.casamientos.com.ar/article-vendor/5928/3_2/1280/jpg/catering_7_175928-164995691819242.webp",
        "https://www.cgmiami.org/wp-content/uploads/2022/07/1658328558_catchy-catering-company-names-1024x682.jpg",
        "https://somcuina.cat/Media/somcuina/dayvo/Servicio%20de%20catering.jpg"
      ],
      description: "I offer catering services for events, parties, and special occasions.",
      pricePerHour: 45,
      typeService: "Catering and Event Service",
      reviews: [
        {
          name: "Andrew Davis",
          imageUrl:
            "https://img.freepik.com/fotos-premium/hombre-maduro-guapo_171337-33849.jpg",
          rating: 4,
          comment: "The food was delicious, and the service was impeccable. Highly recommended.",
        },
        {
          name: "Gonzalo Leguiza",
          imageUrl:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
          rating: 5,
          comment: "I hired the catering service, and it went really well. Everything was in order.",
        }
      ],
      UserId: "DVXCCa8EMgei9Q5lVM2XtzQg3ok2",
    }




  ];
  const dbFull = await Service.findAll();
  // console.log(dbFull, "dbFull");

  if (dbFull.length === 0) {
    console.log("hola if db vacio");
    for (const service of servicesForTesting) {
      await createService(service);
    }
  }

  const dbServices = await Service.findAll({
    include: [User],
  });
  console.log(dbServices[0].User.name, "servcios crudos del back");
  const services = dbServices.map((service) => {
    console.log(service.User.email);

    return {
      id: service.id,
      nameService: service.nameService,
      location: service.location,
      imageUrl: service.imageUrl,
      pricePerHour: service.pricePerHour,
      typeService: service.typeService,
      reviews: service.reviews,
      UserId: service.UserId,
      enabledS: service.enabledS,
      nameUserService: service.User.name, // id
      emailUserService: service.User.email,
      description: service.description, // mail
    };
  });

  //console.log('servicios', services);
  return services;
};

module.exports = { getServices };
