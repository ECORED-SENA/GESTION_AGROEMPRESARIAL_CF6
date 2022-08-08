export default {
  global: {
    componenteFormativo: 'Control de labores en la producción agrícola',
    descripcionCurso:
      'La comprensión de los diferentes aspectos que involucran la implementación de Buenas Prácticas Agrícolas (BPA) en la producción agrícola es fundamental. Junto con los protocolos de BPA existentes y la legislación nacional vigente, se presentan los saberes conceptuales para aclarar y facilitar la tarea del implementador. Las BPA garantizan al consumidor la inocuidad del producto contribuyendo a evitar el deterioro del medio ambiente y buscando mejorar la seguridad laboral.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación de actividades de seguimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Supervisión de labores técnicas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'FINAGRO. 2021. El Momento del Agro.',
      link: 'https://www.finagro.com.co/noticias/el-momento-del-agro',
    },
    {
      referencia: 'Gómez. D. Los Ciclos Agrícolas.',
      link:
        'https://tomi.digital/es/20728/los-ciclos-agricolas?utm_source=google&utm_medium=seo',
    },
    {
      referencia: 'Instituto Colombiano Agropecuario. Normatividad.',
      link: 'https://www.ica.gov.co/normatividad/normas-nacionales/leyes',
    },
    {
      referencia: 'Ministerio de Agricultura. Normatividad.',
      link: 'https://www.minagricultura.gov.co/Normatividad/Paginas/Leyes.aspx',
    },
    {
      referencia:
        'Revista ARQHYS. 2012, 12. Técnicas de supervisión. Equipo de colaboradores y profesionales de la revista ARQHYS.com..',
      link: 'https://www.arqhys.com/construccion/supervision-tecnicas.html',
    },
    {
      referencia:
        'Rivera, W. 2017. Manejo integrado de Plagas: Enfoque de Responsabilidad en la Producción. Centro de Investigación en Biotecnología ITCR',
      link:
        'https://www.croplifela.org/es/actualidad/articulos/manejo-integrado-de-plagas-enfoque-de-responsabilidad-en-la-produccion',
    },
    {
      referencia:
        'USAID. Manual de Buenas Prácticas Ambientales. Del Pueblo De Los Estados Unidos de América ',
    },
  ],
  glosario: [
    {
      termino: 'Ciclos agrícolas',
      significado:
        'División del año agrícola en periodos de tiempo que presentan características climáticas que favorecen el desarrollo de diferentes cultivos.',
    },
    {
      termino: 'EPP',
      significado: 'Equipos de Protección Personal. ',
    },
    {
      termino: 'Fertilización',
      significado:
        'Consiste en proporcionar nutrientes que las plantas necesitan para que sea plenamente productiva en cantidad.',
    },
    {
      termino: 'Impacto ambiental ',
      significado:
        'Es la alteración o modificación que causa una acción humana o natural  sobre el ambiente. ',
    },
    {
      termino: 'Inocuidad',
      significado:
        'La inocuidad de los alimentos es la ausencia a niveles seguros y aceptables- de peligro en los alimentos que puedan dañar la salud de las consumidoras y los consumidores.',
    },
    {
      termino: 'MIPE',
      significado: 'Manejo integrado de plagas y enfermedades.',
    },
    {
      termino: 'Manejo fitosanitario',
      significado:
        'Son los métodos y técnicas para la prevención, control, eliminación o curación de las enfermedades de las plantas, procurando la estabilidad y bienestar de tu cultivo o agro ecosistema.',
    },
  ],
  complementario: [
    {
      tema: 'Marco normativo',
      referencia:
        'ICA, Instituto Colombiano Agropecuario. (s.f.). <i>Leyes.</i>',
      tipo: 'Página web',
      link: 'https://www.ica.gov.co/normatividad/normas-nacionales/leyes',
    },
    {
      tema: 'Supervisión de labores técnicas ',
      referencia:
        'Jsilveragro. [Jsilveragro].  (2020, 5 de noviembre).<i> Manejo Fitosanitario en Cacao </i>[vídeo].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6jzBGKHPX1M',
    },
    {
      tema: 'Supervisión de labores técnicas',
      referencia:
        'TvAgro. [TvAgro].  (2019, 20 de diciembre). Cómo <i>Manejar las Plagas y Enfermedades en un Cultivo</i> [vídeo].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=14aE1jSI2EQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Karly Cediel',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja - SENA Regional Tolima.',
      },
      {
        nombre: 'Alex García',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y Los Servicios - CIES Regional Norte de Santander.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Marcela Alarcon Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
