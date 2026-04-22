export const CONTACT = {
  phone: "+1 829-816-3894",
  phoneHref: "tel:+18298163894",
  whatsapp: "https://wa.me/18298163894",
  whatsappReserva:
    "https://wa.me/18298163894?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n%20en%20Campuno%20Master%20Gourmet",
  instagram: "https://instagram.com/campunomg",
  facebook: "https://facebook.com/p/campunomg-100078428874180",
};

export const LOCATIONS = [
  {
    id: "villa-olga",
    number: "01",
    name: "Villa Olga",
    subtitle: "Nuestra Casa Matriz",
    address: "Villa Olga, Santiago, República Dominicana",
    mapsEmbed:
      "https://maps.google.com/maps?q=Villa+Olga+Santiago+RD&output=embed",
    mapsLink: "https://maps.google.com/?q=Villa+Olga+Santiago+RD",
    hours: [
      { days: "Martes – Viernes", time: "12:00 PM – 11:00 PM" },
      { days: "Sábado – Domingo", time: "12:00 PM – 12:00 AM" },
      { days: "Lunes", time: "Cerrado" },
    ],
    highlight:
      "Ambiente íntimo y sofisticado en el corazón de Santiago. El salón principal se ilumina con luz de vela y las mesas se visten con lino blanco y cristalería tallada a mano.",
  },
  {
    id: "aeropuerto",
    number: "02",
    name: "Av. Víctor Manuel Espaillat",
    subtitle: "Sucursal Aeropuerto Cibao",
    address:
      "Av. Víctor Manuel Espaillat, Santiago (a pasos del Aeropuerto STI)",
    mapsEmbed:
      "https://maps.google.com/maps?q=Aeropuerto+Internacional+del+Cibao+STI+Santiago&output=embed",
    mapsLink:
      "https://maps.google.com/?q=Av+Victor+Manuel+Espaillat+Santiago+RD",
    hours: [
      { days: "Lunes – Viernes", time: "7:00 AM – 11:00 PM" },
      { days: "Sábado – Domingo", time: "7:00 AM – 12:00 AM" },
    ],
    highlight:
      "La mejor gastronomía para viajeros del Cibao. Desayunos ejecutivos, almuerzos de negocios y cenas elegantes a minutos del aeropuerto STI.",
  },
];

export const MENU_CATEGORIES = [
  {
    id: "entradas",
    name: "Entradas",
    items: [
      {
        name: "Tabla de quesos artesanales",
        description: "Selección curada con mermelada de higo y crostini",
        price: "RD$ 650",
      },
      {
        name: "Carpaccio de res",
        description: "Con rúcula, alcaparras y aceite de trufa",
        price: "RD$ 750",
      },
      {
        name: "Ceviche del día",
        description:
          "Pescado fresco con leche de tigre y maíz tostado",
        price: "RD$ 580",
      },
      {
        name: "Crema de mariscos",
        description: "Bisque cremoso con langostinos salteados",
        price: "RD$ 490",
      },
    ],
  },
  {
    id: "principales",
    name: "Principales",
    items: [
      {
        name: "Filete Campuno",
        description:
          "Res premium en reducción de vino tinto con puré trufado",
        price: "RD$ 1,450",
        signature: true,
      },
      {
        name: "Langosta a la brasa",
        description:
          "Con mantequilla de hierbas y vegetales asados de temporada",
        price: "RD$ 1,850",
      },
      {
        name: "Medallones de cerdo",
        description:
          "En salsa de champiñones silvestres con arroz arbóreo",
        price: "RD$ 980",
      },
      {
        name: "Pechuga rellena",
        description:
          "Pollo de campo con espinacas, queso brie y reducción balsámica",
        price: "RD$ 850",
      },
      {
        name: "Pasta a la trufa",
        description:
          "Fettuccine fresco con crema de trufa negra y parmesano reggiano",
        price: "RD$ 790",
      },
    ],
  },
  {
    id: "mariscos",
    name: "Del Mar",
    items: [
      {
        name: "Pulpo a la brasa",
        description:
          "Con chimichurri criollo, papas confitadas y pimientos",
        price: "RD$ 1,200",
      },
      {
        name: "Salmón a la mantequilla",
        description: "Con costra de hierbas, quinoa y espárragos",
        price: "RD$ 1,050",
      },
      {
        name: "Camarones al ajillo",
        description:
          "Salteados en mantequilla, ajo y vino blanco con arroz",
        price: "RD$ 890",
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    items: [
      {
        name: "Tiramisú artesanal",
        description:
          "Receta tradicional con café espresso y mascarpone importado",
        price: "RD$ 380",
      },
      {
        name: "Fondant de chocolate",
        description:
          "Con centro líquido, helado de vainilla y salsa de frutos rojos",
        price: "RD$ 420",
      },
      {
        name: "Panna cotta de maracuyá",
        description: "Con coulis tropical y flores comestibles",
        price: "RD$ 360",
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    items: [
      {
        name: "Selección de vinos",
        description:
          "Carta disponible — tintos, blancos y rosados importados",
        price: "Desde RD$ 450/copa",
      },
      {
        name: "Cócteles de la casa",
        description: "Creaciones únicas del bartender de Campuno",
        price: "Desde RD$ 320",
      },
      {
        name: "Jugos naturales",
        description: "Frutas tropicales frescas del día",
        price: "RD$ 180",
      },
    ],
  },
];

export const EVENTS = [
  {
    icon: "briefcase" as const,
    title: "Reuniones Ejecutivas",
    description:
      "Salas privadas con capacidad para 8–20 personas. Audio, proyector y menú empresarial personalizado.",
  },
  {
    icon: "heart" as const,
    title: "Celebraciones Especiales",
    description:
      "Cumpleaños, aniversarios y propuestas de matrimonio. Decoración, pastel personalizado y servicio VIP.",
  },
  {
    icon: "users" as const,
    title: "Catering Corporativo",
    description:
      "Servicio a domicilio para eventos de empresa, lanzamientos y cenas de gala en tu locación.",
  },
  {
    icon: "wine" as const,
    title: "Cenas Maridaje",
    description:
      "Experiencias gastronómicas curadas con maridaje de vinos importados. Fechas especiales en Instagram.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Roberto Sánchez",
    initials: "RS",
    text: "Una experiencia gastronómica que no esperaba encontrar en Santiago. El filete Campuno es simplemente extraordinario. El ambiente, el servicio, todo impecable.",
    stars: 5,
    context: "Visita en Villa Olga",
  },
  {
    name: "Mariela Contreras",
    initials: "MC",
    text: "Celebré mi aniversario aquí y fue perfecto. El equipo coordinó todo sin que tuviéramos que pedir nada. Llegamos y era exactamente lo que habíamos imaginado.",
    stars: 5,
    context: "Cena de aniversario",
  },
  {
    name: "Ing. Carlos Fadul",
    initials: "CF",
    text: "Usamos Campuno para nuestra cena de directivos y el resultado fue inmejorable. Profesionalismo total, el menú ejecutivo estuvo a la altura y la discreción fue perfecta.",
    stars: 5,
    context: "Evento corporativo",
  },
];
