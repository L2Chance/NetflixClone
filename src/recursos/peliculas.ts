const peliculas = [
  {
    id: 0,
    titulo: "Terminator",
    anio: "2019",
    director: "James Cameron",
    duracion: "90 minutos",
    sinopsis:
      "En un futuro postapocalíptico, las máquinas han tomado el control del mundo. Un cyborg asesino viaja al pasado para eliminar a un líder de la resistencia antes de que nazca. Sin embargo, una guerrera lo seguirá para intentar impedirlo, cambiando así el destino de la humanidad en una guerra que aún no ha comenzado.",
    generos: ["Acción", "Suspenso", "Terror"],
    cover:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9KI49SBnwAOzGcMw1onIki7vd2.jpg",
    imagen:
      "https://myhotposters.com/cdn/shop/products/HP3151_7045de51-d81f-4636-a03e-fca81fdb7d51.jpg?v=1748536868",
    destacada: true,
    popular: true,
    puntuacion: 4.5,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/nGrW-OR2uDk",
  },
  {
    id: 1,
    titulo: "La ciudad de las estrellas (La La Land)",
    anio: "2016",
    director: "Damien Chazelle",
    duracion: "128 minutos",
    sinopsis:
      "Mia, una aspirante a actriz, y Sebastian, un apasionado del jazz, se conocen en Los Ángeles mientras luchan por alcanzar sus sueños. A través de un recorrido lleno de amor, música y sacrificios, deberán decidir si su relación puede sobrevivir a las exigencias de sus carreras artísticas.",
    generos: ["Romance", "Musical", "Aventura"],
    cover:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7pFsAaJmiOppVHcldBzg8JKBHwe.jpg",
    imagen:
      "https://www.concierto.cl/wp-content/uploads/2023/02/La-La-Land-llegara-a-Broadway.jpg",
    popular: true,
    puntuacion: 4.8,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
  },
  {
    id: 2,
    titulo: "El Conjuro",
    anio: "2013",
    director: "James Wan",
    duracion: "112 minutos",
    sinopsis:
      "Basada en una historia real documentada por los reconocidos demonólogos Ed y Lorraine Warren. La película narra el caso de la familia Perron, quienes se mudan a una granja en Rhode Island y comienzan a experimentar fenómenos paranormales cada vez más intensos y peligrosos.",
    generos: ["Terror"],
    cover:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil91uWcWktClfvIvmV6qtU11ZipAlkALkCOXzyuqv0XH8vNgmE_YErlx8nKvxP2nO6VWaJOw8Rgvgwm6XjILiH2jrbY6tZAG3QCrI8eYOwoUVOKYxXRPdRAV82UOmAx9R9nOwalinXt0Dg/s1600/the-conjuring-poster.jpg",
    imagen:
      "https://wallpapers.com/images/featured/el-conjuro-j4tcp9shvx7dk262.jpg",
    popular: false,
    puntuacion: 4.2,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
  },
  {
    id: 3,
    titulo: "Orgullo y Prejuicio",
    anio: "2005",
    director: "Joe Wright",
    duracion: "129 minutos",
    sinopsis:
      "Lizzie Bennet es una joven inteligente y decidida que vive con sus cuatro hermanas bajo la presión de su madre por casarlas bien. Cuando conoce al rico y aparentemente arrogante Sr. Darcy, se inicia una tensa relación que poco a poco evoluciona, desafiando las normas sociales de su tiempo.",
    generos: ["Romance", "Drama"],
    cover:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oixzLjpyaLagLa8UREts1NiHr6F.jpg",
    imagen:
      "https://static.fnac-static.com/multimedia/ES/images_produits/ES/ZoomPE/4/6/4/8414906820464/tsp20121120190207/Orgullo-y-prejuicio-Edicion-horizontal.jpg",
    popular: false,
    puntuacion: 4.0,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/1dYv5u6v55Y",
  },
  {
    id: 4,
    titulo: "Interestelar",
    anio: "2014",
    director: "Christopher Nolan",
    duracion: "169 minutos",
    sinopsis:
      "En un futuro donde la Tierra se está volviendo inhabitable, un grupo de astronautas se embarca en una misión a través de un agujero de gusano en busca de un nuevo hogar para la humanidad. Mientras viajan por galaxias desconocidas, enfrentan desafíos que pondrán a prueba sus límites físicos y emocionales.",
    generos: ["Ciencia ficción", "Drama"],
    cover:
      "https://i1.sndcdn.com/artworks-hzeKb39ItJ1Ft2Na-gUylzQ-t500x500.jpg",
    imagen:
      "https://img.englishcinemamadrid.com/nKizXKvqQfZzAMBylGXBi7TuU37mFVp7Mb9phhtftSw/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy82MGMzNzFhMy0yNzQyLTQwZWYtYTQwOS1kMzE0NmI0YTNlNDQuanBn.jpg",
    popular: true,
    puntuacion: 4.7,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 5,
    titulo: "Her",
    anio: "2013",
    director: "Spike Jonze",
    duracion: "126 minutos",
    sinopsis:
      "Theodore, un hombre solitario, desarrolla una relación emocional con un sistema operativo de inteligencia artificial diseñado para adaptarse y evolucionar. A medida que la conexión entre ambos se profundiza, Theodore se enfrenta a preguntas sobre el amor, la conciencia y lo que significa ser humano.",
    generos: ["Romance", "Ciencia ficción", "Drama"],
    cover: "https://www.aceprensa.com/wp-content/uploads/2014/02/152601-0.jpg",
    imagen:
      "https://www.afundacion.org/images/cesionsalas/79887/her_3__narrow.jpg",
    popular: true,
    puntuacion: 4.3,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/WzV6mXIOVl4",
  },
  {
    id: 6,
    titulo: "Gladiador",
    anio: "2000",
    director: "Ridley Scott",
    duracion: "155 minutos",
    sinopsis:
      "Maximus, un general romano traicionado y forzado a la esclavitud, se convierte en gladiador. Movido por la sed de justicia y venganza, lucha en la arena del Coliseo con el objetivo de enfrentarse al emperador que destruyó su vida.",
    generos: ["Acción", "Drama", "Histórica"],
    cover:
      "https://cdn.sincroguia.tv/uploads/programs/g/l/a/gladiator-el-gladiador-poster-152_SPA-87_V.jpg",
    imagen: "https://i.ebayimg.com/images/g/OLAAAOSw-htbPPgw/s-l1200.jpg",
    popular: true,
    puntuacion: 4.6,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/owK1qxDselE",
  },
  {
    id: 7,
    titulo: "Cisne Negro",
    anio: "2010",
    director: "Darren Aronofsky",
    duracion: "108 minutos",
    sinopsis:
      "Nina, una bailarina perfeccionista, consigue el papel principal en una ambiciosa producción de El lago de los cisnes. A medida que se adentra en la dualidad del personaje, su mente comienza a desmoronarse, llevándola a una espiral de paranoia, obsesión y autodescubrimiento.",
    generos: ["Drama", "Suspenso", "Psicológica"],
    cover:
      "https://www.originalfilmart.com/cdn/shop/products/black_swan_2011_sweden_original_film_art_5000x.jpg?v=1620498363",
    imagen: "https://tvaztecaguate.com/wp-content/uploads/2025/02/cisne.webp",
    popular: false,
    puntuacion: 4.1,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/5jaI1XOB-bs",
  },
  {
    id: 8,
    titulo: "Up",
    anio: "2009",
    director: "Pete Docter",
    duracion: "96 minutos",
    sinopsis:
      "Carl, un anciano viudo, decide cumplir el sueño de su difunta esposa viajando a Sudamérica en su casa flotante con globos. Sin embargo, inesperadamente se le une un niño explorador que transforma su solitario viaje en una gran aventura llena de emoción y descubrimiento.",
    generos: ["Animación", "Aventura", "Familiar"],
    cover:
      "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/68/08/67/19062963.jpg",
    imagen:
      "https://img25.tokyvideo.com/videos/656/656740/previews/previews_0012_custom_1738761761.1979.jpg",
    popular: true,
    puntuacion: 4.4,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/pkqzFUhGPJg",
  },
  {
    id: 9,
    titulo: "Inception",
    anio: "2010",
    director: "Christopher Nolan",
    duracion: "148 minutos",
    sinopsis:
      "Dom Cobb es un ladrón especializado en infiltrarse en los sueños para robar secretos. Su nueva misión es diferente: debe implantar una idea en la mente de un objetivo. Para lograrlo, deberá navegar por múltiples niveles del subconsciente en una carrera contrarreloj.",
    generos: ["Ciencia ficción", "Acción", "Thriller"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    imagen: "https://i.ebayimg.com/images/g/lVMAAOSwhQheYrmk/s-l1200.jpg",
    popular: true,
    puntuacion: 4.9,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 10,
    titulo: "Amélie",
    anio: "2001",
    director: "Jean-Pierre Jeunet",
    duracion: "122 minutos",
    sinopsis:
      "Amélie es una joven introvertida que vive en París y encuentra alegría en hacer pequeñas buenas acciones por los demás. En su viaje para mejorar la vida de quienes la rodean, también descubrirá el amor y aprenderá a abrir su propio corazón al mundo.",
    generos: ["Romance", "Comedia", "Drama"],
    cover: "https://es.web.img2.acsta.net/pictures/21/06/18/12/28/5014869.jpg",
    imagen:
      "https://images.fineartamerica.com/images/artworkimages/medium/3/amelie-movie-poster-valentines-day-gift-le-fabuleux-destin-damelie-poulain-sheryl-neal.jpg",
    popular: false,
    puntuacion: 4.5,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/HUECWi5pX7o",
  },
  {
    id: 11,
    titulo: "Whiplash",
    anio: "2014",
    director: "Damien Chazelle",
    duracion: "107 minutos",
    sinopsis:
      "Andrew es un joven baterista obsesionado con la perfección. Cuando entra al conservatorio de música más prestigioso del país, se encuentra con un instructor despiadado que lo empuja más allá de sus límites, obligándolo a decidir hasta dónde está dispuesto a llegar por la grandeza.",
    generos: ["Drama", "Música"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BN2NiMjY3OTgtMzVmYi00MjIwLTljOWItY2QzYTdiNTFkMTQyXkEyXkFqcGc@._V1_.jpg",
    imagen:
      "https://img.englishcinemaparis.com/0ilcDizIUM2kczScpAzh4DB_n_Wt5r0N5QIXxbwrgYA/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy8wMjhhNDQxNC1lMzkzLTRiMDctOWMwYS05NjRiNWYwYmIwM2MuanBn.jpg",
    popular: true,
    puntuacion: 4.8,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/7d_jQycdQGo",
  },
  {
    id: 12,
    titulo: "Parásitos",
    anio: "2019",
    director: "Bong Joon-ho",
    duracion: "132 minutos",
    sinopsis:
      "La familia Kim, de escasos recursos, encuentra una oportunidad de infiltrarse progresivamente en la vida de una familia rica haciéndose pasar por profesionales calificados. Lo que comienza como una ingeniosa estafa se transforma rápidamente en una historia oscura de desigualdad y consecuencias imprevisibles.",
    generos: ["Drama", "Thriller", "Comedia negra"],
    cover: "https://es.web.img3.acsta.net/pictures/19/09/17/17/13/3740579.jpg",
    imagen: "https://img.rtve.es/imagenes/cartel-parasitos/1623840676875.jpg",
    popular: true,
    puntuacion: 5.0,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
  },
  {
    id: 13,
    titulo: "El Gran Hotel Budapest",
    anio: "2014",
    director: "Wes Anderson",
    duracion: "99 minutos",
    sinopsis:
      "Gustave H, un legendario conserje de un famoso hotel europeo entre guerras, entabla amistad con un joven botones. Juntos se ven envueltos en una intriga de robo de obras de arte, luchas familiares por una herencia y el impacto de la guerra en un mundo decadente y lleno de estilo.",
    generos: ["Comedia", "Drama", "Crimen"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/gran-hotel-budapest-cartel-1513779850.jpg",
    popular: false,
    puntuacion: 4.3,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/1Fg5iWmQjwk",
  },
  {
    id: 14,
    titulo: "El Padrino",
    anio: "1972",
    director: "Francis Ford Coppola",
    duracion: "175 minutos",
    sinopsis:
      "La saga de la familia Corleone, una de las más poderosas familias mafiosas de Nueva York. Entre intrigas, traiciones y luchas por el poder, Michael Corleone lucha por mantener el legado de su familia mientras enfrenta los dilemas morales y las consecuencias de su ascenso al poder.",
    generos: ["Crimen", "Drama"],
    cover: "https://pics.filmaffinity.com/El_padrino-993414333-large.jpg",
    imagen:
      "https://okdiario.com/img/2022/02/25/el-padrino-paramount-pictures-655x368.jpg",
    popular: true,
    puntuacion: 4.9,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/sY1S34973zA",
  },
  {
    id: 15,
    titulo: "Forrest Gump",
    anio: "1994",
    director: "Robert Zemeckis",
    duracion: "142 minutos",
    sinopsis:
      "La vida de Forrest Gump, un hombre con un coeficiente intelectual bajo pero con un corazón noble, quien de manera accidental es testigo y protagonista de varios de los eventos más importantes de la historia de Estados Unidos en el siglo XX.",
    generos: ["Drama", "Comedia", "Romance"],
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpNj2ZMSunTHdEqSfL8Ds9voU9E9Z7vzd2w&s",
    imagen:
      "https://e8cuz2bphm9.exactdn.com/blog/wp-content/uploads/2018/04/BlogMG04144.jpg?strip=all&lossy=1&quality=75&ssl=1",
    popular: true,
    puntuacion: 4.7,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/bLvqoHBptjg",
  },
  {
    id: 16,
    titulo: "Matrix",
    anio: "1999",
    director: "Hermanas Wachowski",
    duracion: "136 minutos",
    sinopsis:
      "Un programador de computadoras descubre que la realidad que conoce es una simulación creada por máquinas inteligentes para subyugar a la humanidad. Al unirse a un grupo de rebeldes, deberá luchar para liberar a la humanidad de esta ilusión.",
    generos: ["Ciencia ficción", "Acción"],
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBteTCIP_zjjgGx8zSlCxJ5Wi3y3MaTU0HDw&s",
    imagen:
      "https://img.englishcinemabarcelona.com/BVZBaq6fsTow7KZmdNWUFoEOT1GThWYfAprhqMDZEi4/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy9lMTA1YjhlNi1hOTcyLTQxMmMtYmRiMy0yZmJkYWE1NDA2OWYuanBn.jpg",
    popular: true,
    puntuacion: 4.6,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    id: 17,
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    anio: "2001",
    director: "Peter Jackson",
    duracion: "178 minutos",
    sinopsis:
      "Un joven hobbit hereda un anillo mágico y emprende un viaje para destruirlo en el Monte del Destino, el único lugar donde puede ser aniquilado. Para ello, deberá unirse a una compañía de personajes diversos y enfrentar peligros inimaginables.",
    generos: ["Fantasía", "Aventura"],
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfKffWAXu2qOLYwUKv21BuZnuEUAEMHTURw&s",
    imagen:
      "https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2024/11/prime-video.jpg?resize=696%2C392&ssl=1",
    popular: true,
    puntuacion: 4.9,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/V75dMMIW2B4",
  },
  {
    id: 18,
    titulo: "Pulp Fiction",
    anio: "1994",
    director: "Quentin Tarantino",
    duracion: "154 minutos",
    sinopsis:
      "Varias historias entrelazadas de criminales en Los Ángeles, incluyendo a dos sicarios, la esposa de un gánster, un boxeador y una pareja de ladrones de poca monta. La película se caracteriza por su estructura narrativa no lineal y sus diálogos ingeniosos.",
    generos: ["Crimen", "Drama", "Thriller"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
    imagen:
      "https://img.englishcinemakyiv.com/b2E3AzA-XCnvwoLBLnB_G2J-LPMrua7tZcajtCTlPpI/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy84ZjEzODlhNi03MTVlLTQ2NDMtYTExNS03M2VlOTA1NzA5MTAuanBn.jpg",
    popular: true,
    puntuacion: 4.8,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    id: 19,
    titulo: "El Laberinto del Fauno",
    anio: "2006",
    director: "Guillermo del Toro",
    duracion: "118 minutos",
    sinopsis:
      "En el contexto de la posguerra civil española, una niña se adentra en un mundo de fantasía oscuro y mágico, donde debe completar tres peligrosas tareas para demostrar que es una princesa. La realidad y la fantasía se entrelazan en una historia conmovedora y visualmente impactante.",
    generos: ["Fantasía", "Drama", "Bélica"],
    cover:
      "https://http2.mlstatic.com/D_NQ_NP_682262-MLA44820407524_022021-O.webp",
    imagen:
      "https://m.media-amazon.com/images/S/pv-target-images/3e1ee6398c6d17cdb460e7675adb1df21f53766437de0206ff5219dd70b4b55b.jpg",
    popular: false,
    puntuacion: 4.5,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/NEAdvSpE3zY",
  },
  {
    id: 20,
    titulo: "Coco",
    anio: "2017",
    director: "Lee Unkrich, Adrian Molina",
    duracion: "105 minutos",
    sinopsis:
      "Miguel, un aspirante a músico, se embarca en un viaje extraordinario a la Tierra de los Muertos para descubrir la verdadera historia de su familia y el legado musical que siempre ha sido prohibido en su hogar.",
    generos: ["Animación", "Aventura", "Familiar"],
    cover:
      "https://static.wikia.nocookie.net/coco-movie/images/b/bb/Coco_Cover.jpg/revision/latest?cb=20181109170910",
    imagen:
      "https://cdn11.bigcommerce.com/s-4c994/images/stencil/1280x1280/products/1768/2936/Coco_Poster__39353.1515979877.jpg?c=2",
    popular: true,
    puntuacion: 4.7,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/Rvr68u6k5sI",
  },
  {
    id: 21,
    titulo: "Blade Runner 2049",
    anio: "2017",
    director: "Denis Villeneuve",
    duracion: "164 minutos",
    sinopsis:
      "Un joven 'blade runner' descubre un secreto enterrado hace mucho tiempo que podría sumir en el caos lo que queda de la sociedad. Su descubrimiento lo lleva a la búsqueda de Rick Deckard, un antiguo 'blade runner' que ha estado desaparecido durante 30 años.",
    generos: ["Ciencia ficción", "Drama", "Thriller"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    imagen:
      "https://img.asmedia.epimg.net/resizer/v2/OIEXSPOY7FIYPAIXBNMI4PRBKI.jpg?auth=7e845406df25559a072a118531e00d15e2b7ebfba3e5bd376b023e57d8b219b4&width=1472&height=828&smart=true",
    popular: true,
    puntuacion: 4.6,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/gCcx85zbxz4",
  },
  {
    id: 22,
    titulo: "Spider-Man: Un nuevo universo",
    anio: "2018",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    duracion: "117 minutos",
    sinopsis:
      "Miles Morales se convierte en el Spider-Man de su realidad y cruza caminos con cinco variantes de Spider-Man de otras dimensiones para detener una amenaza para todas las realidades.",
    generos: ["Animación", "Acción", "Aventura"],
    cover:
      "https://static.wikia.nocookie.net/doblaje/images/8/80/SV_Poster.jpg/revision/latest/thumbnail/width/360/height/450?cb=20230605042453&path-prefix=es",
    imagen:
      "https://stars-my-destination.com/wp-content/uploads/2018/12/official-poster.jpg?w=584",
    popular: true,
    puntuacion: 4.8,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
  },
  {
    id: 23,
    titulo: "Gran Torino",
    anio: "2008",
    director: "Clint Eastwood",
    duracion: "116 minutos",
    sinopsis:
      "Walt Kowalski, un veterano de la Guerra de Corea, gruñón y racista, se ve obligado a confrontar sus prejuicios cuando su joven vecino Hmong intenta robar su preciado Gran Torino.",
    generos: ["Drama"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_FMjpg_UX1000_.jpg",
    imagen: "https://images6.alphacoders.com/505/505212.jpg",
    popular: false,
    puntuacion: 4.5,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/5FxH7b3n8Xg",
  },
  {
    id: 24,
    titulo: "Dunkerque",
    anio: "2017",
    director: "Christopher Nolan",
    duracion: "106 minutos",
    sinopsis:
      "Cientos de miles de tropas británicas y aliadas están rodeadas por las fuerzas enemigas en las playas de Dunkerque. Atrapados en la playa con el mar a sus espaldas, se enfrentan a una situación imposible a medida que el enemigo se acerca.",
    generos: ["Bélica", "Drama", "Historia"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BYjY4MTZlZTUtMzRjYS00NzUwLWI5NzMtNWY5OTI0MzMxMDc5XkEyXkFqcGc@._V1_.jpg",
    imagen:
      "https://images.squarespace-cdn.com/content/v1/50e46031e4b0c2f49772822a/1518718103077-L98RTBPZVDKXQPWJ01XH/dunkirk-pan-poster.jpg",
    popular: true,
    puntuacion: 4.4,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/F-eMt3SrfFU",
  },
  {
    id: 25,
    titulo: "1917",
    anio: "2019",
    director: "Sam Mendes",
    duracion: "119 minutos",
    sinopsis:
      "Durante la Primera Guerra Mundial, dos jóvenes soldados británicos reciben la orden de cruzar territorio enemigo para entregar un mensaje que podría salvar a 1.600 hombres.",
    generos: ["Bélica", "Drama", "Historia"],
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShISfKYR2Bc7FCESwghePQb55p6zUpIftQzw&s",
    imagen: "https://i.ebayimg.com/images/g/GtEAAOSw1W9eN1cY/s-l1200.jpg",
    popular: true,
    puntuacion: 4.6,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/YqNYrYUiMfg",
  },
  {
    id: 26,
    titulo: "Rescatando al Soldado Ryan",
    anio: "1998",
    director: "Steven Spielberg",
    duracion: "169 minutos",
    sinopsis:
      "Un grupo de soldados estadounidenses cruza las líneas enemigas para rescatar a un paracaidista cuyos hermanos han muerto en combate.",
    generos: ["Bélica", "Drama", "Historia"],
    cover:
      "https://storage.googleapis.com/cclm-prod/web/wp-content/uploads/2023/01/FICHE-Rescatanto-el-soldado-ryan.jpg",
    imagen: "https://pbs.twimg.com/media/EdtK1uOWAAIXT3Q.jpg",
    popular: true,
    puntuacion: 4.8,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/zwhP5b4tD6g",
  },
  {
    id: 27,
    titulo: "La Caída",
    anio: "2004",
    director: "Oliver Hirschbiegel",
    duracion: "156 minutos",
    sinopsis:
      "Durante los últimos días del Tercer Reich, Adolf Hitler se atrinchera en su búnker mientras Berlín cae bajo el asedio soviético.",
    generos: ["Bélica", "Drama", "Historia"],
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW8-6hvBzQyhMzWrhBHKhI6WFkbepisygIQ&s",
    imagen: "https://e.rpp-noticias.io/xlarge/2019/02/16/392239_753686.jpg",
    popular: false,
    puntuacion: 4.3,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/Pklz9_wL6RM",
  },
  {
    id: 28,
    titulo: "Corazones de Hierro",
    anio: "2014",
    director: "David Ayer",
    duracion: "134 minutos",
    sinopsis:
      "Durante los últimos días de la Segunda Guerra Mundial, una tripulación de un tanque estadounidense debe enfrentarse a una misión prácticamente suicida tras las líneas enemigas.",
    generos: ["Bélica", "Drama", "Acción"],
    cover:
      "https://http2.mlstatic.com/D_NQ_NP_902450-MLA50227782690_062022-O.webp",
    imagen:
      "https://i.ytimg.com/vi/IYYhphCbEYk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUwcueyMPFVMvfxrkSjOO7s1qBGg",
    popular: false,
    puntuacion: 4.2,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/SC3MH6tE9-s",
  },
  {
    id: 29,
    titulo: "Hasta el Último Hombre",
    anio: "2016",
    director: "Mel Gibson",
    duracion: "139 minutos",
    sinopsis:
      "La historia real de Desmond Doss, un objetor de conciencia que sirvió como médico de combate durante la batalla de Okinawa sin portar armas y salvó a 75 hombres.",
    generos: ["Bélica", "Drama", "Biografía"],
    cover:
      "https://play-lh.googleusercontent.com/_pI4C8brYR3_cmVAezSAN_4iG-zK7D7a7nBm0gUh073SWiBz8aqyDxHe1WkceWISBuCA",
    imagen:
      "https://newcinema.es/imagenes/2016/11/poster_hasta_el_ultimo_hombre.jpg",
    popular: true,
    puntuacion: 4.7,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/V1v0uXHdF2g",
  },
  {
    id: 30,
    titulo: "Intensamente",
    anio: "2015",
    director: "Pete Docter",
    duracion: "95 minutos",
    sinopsis:
      "Riley es una niña que debe adaptarse a una nueva ciudad, mientras sus emociones —Alegría, Tristeza, Ira, Temor y Desagrado— luchan por guiarla a través de la vida.",
    generos: ["Animación", "Aventura", "Comedia"],
    cover:
      "https://i.pinimg.com/474x/32/eb/a6/32eba6e503b04eb95b9bb168a95d50e4.jpg",
    imagen:
      "https://media.airedesantafe.com.ar/p/4a4e0518376e14ddcec4f647a3dc5e00/adjuntos/268/imagenes/003/839/0003839504/412x232/smart/imagepng.png",
    popular: true,
    puntuacion: 4.6,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/seMwpP0yeu4",
  },
  {
    id: 32,
    titulo: "El viaje de Chihiro",
    anio: "2001",
    director: "Hayao Miyazaki",
    duracion: "125 minutos",
    sinopsis:
      "Chihiro, una niña de 10 años, queda atrapada en un mundo mágico donde los humanos se transforman en animales y los dioses habitan casas de baños. Para salvar a sus padres, deberá encontrar su valentía y su identidad.",
    generos: ["Animación", "Fantasía", "Aventura"],
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SbX30PmvHuGQz6vAjS9ZT03G1a-TAilXrw&s",
    imagen:
      "https://www.mubis.es/media/articles/20975/223439/capturas-y-menus-de-el-viaje-de-chihiro-en-blu-ray-original.jpg",
    popular: true,
    puntuacion: 4.9,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
  },
  {
    id: 33,
    titulo: "Mad Max: Fury Road",
    anio: "2015",
    director: "George Miller",
    duracion: "120 minutos",
    sinopsis:
      "En un mundo postapocalíptico, Max se une a Furiosa para escapar de un tirano y buscar la libertad en un viaje lleno de acción y persecuciones.",
    generos: ["Acción", "Aventura", "Ciencia ficción"],
    cover:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    imagen:
      "https://thewilldowntown.com/wp-content/uploads/2023/12/Mad-Max-Fury-Road-3.jpeg",
    popular: true,
    puntuacion: 4.7,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
  },
  {
    id: 34,
    titulo: "Black Hawk Down",
    anio: "2001",
    director: "Ridley Scott",
    duracion: "144 minutos",
    sinopsis:
      "Una misión militar estadounidense en Somalia se convierte en una batalla feroz por la supervivencia cuando dos helicópteros Black Hawk son derribados por insurgentes.",
    generos: ["Bélica", "Drama", "Acción"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BYTM3YTQ1M2MtNDEyNC00NzRlLWFmOTgtYjBhNDg2ODNjNTU0XkEyXkFqcGc@._V1_.jpg",
    imagen:
      "https://img.englishcinemakyiv.com/Hy27amd1MDJnqKcOz3gYIXOAAJES8_lRu-ETmaGsiNE/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy82MDkzY2VmOS1hZDAyLTQ1ODctYmU5ZS1jYWI2ZWVjMTQ2ZTQuanBn.jpg",
    popular: true,
    puntuacion: 4.3,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/wjJCatr2jYk",
  },
  {
    id: 35,
    titulo: "John Wick",
    anio: "2014",
    director: "Chad Stahelski",
    duracion: "101 minutos",
    sinopsis:
      "Un exasesino a sueldo vuelve a la acción para vengar la muerte de su perro, enfrentándose a una peligrosa organización criminal.",
    generos: ["Acción", "Thriller"],
    cover:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    imagen:
      "https://cdna.artstation.com/p/assets/images/images/078/442/208/large/huzi7-john-wick-landscape.jpg?1722114653",
    popular: true,
    puntuacion: 4.5,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
  },
  {
    id: 36,
    titulo: "El Patriota",
    anio: "2000",
    director: "Roland Emmerich",
    duracion: "165 minutos",
    sinopsis:
      "Durante la Guerra de Independencia de Estados Unidos, un granjero se convierte en líder de la resistencia para proteger a su familia y a su país.",
    generos: ["Bélica", "Drama", "Histórica"],
    cover:
      "https://m.media-amazon.com/images/M/MV5BMjEwOTI0OTIyN15BMl5BanBnXkFtZTcwNDU2MTkxMQ@@._V1_.jpg",
    imagen:
      "https://i.ytimg.com/vi/V6aklbAzfoU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDRPnZX3rAmNIObspe5j8vnUsDcUA",
    popular: true,
    puntuacion: 4.4,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/CD-MeyQeG5A",
  },
  {
    id: 37,
    titulo: "Guardianes de la Galaxia",
    anio: "2014",
    director: "James Gunn",
    duracion: "121 minutos",
    sinopsis:
      "Un grupo de inadaptados intergalácticos debe unirse para proteger un poderoso orbe de caer en manos equivocadas.",
    generos: ["Acción", "Aventura", "Ciencia ficción"],
    cover: "https://lumiere-a.akamaihd.net/v1/images/lat_2ae5e247.jpeg",
    imagen:
      "https://larepublica.cronosmedia.glr.pe/migration/images/SPHN63AV65CSFCNMZ4OAPFO4AU.jpg",
    popular: true,
    puntuacion: 4.6,
    imagenPresentacion: "",
    trailer: "https://www.youtube.com/embed/d96cjJhvlMA",
  },
];

export default peliculas;
