export default {
  global: {
    componenteFormativo: 'Impacto ambiental',
    descripcionCurso:
      'En el presente componente se abordarán temas que ayuden a la identificación y valoración de los aspectos e impactos ambientales que se generen en la organización, según la normativa.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Modelos de identificación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fuentes de contaminación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de contaminantes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medición de los diferentes tipos de contaminantes',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Clasificación de los contaminantes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aspectos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de aspectos ambientales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación de los aspectos ambientales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Identificación de los aspectos ambientales',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Impactos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Clasificación de los impactos ambientales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Identificación del impacto ambiental',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Análisis de ciclo de vida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Documentación para implementar los impactos ambientales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
      referencia:
        'Olivares, M. (2020). Cuáles son los tipos de contaminación ambiental, Acciona con ayuda. Fundación Ayuda en Acción.',
      link:
        'https://ayudaenaccion.org/ong/blog/sostenibilidad/tipos-contaminacion-ambiental/',
    },
    {
      referencia:
        'ECODES. (s.f) <i>Contaminación por plásticos. Uno de los mayores desafíos ambientales del siglo XXI.</i>',
      link:
        'https://ecodes.org/hacemos/cultura-para-la-sostenibilidad/salud-y-medioambiente/observatorio-de-salud-y-medio-ambiente/contaminacion-por-plasticos-uno-de-los-mayores-desafios-ambientales-del-siglo-xxi',
    },
    {
      referencia:
        'Mijangos-Ricardez, O.F, López Luna, J. (2013) Metodologías para la identificación y valoración de impactos ambientales. Temas de Ciencia y Tecnología. Mayo – agosto.',
      link:
        'https://www.utm.mx/edi_anteriores/temas50/T50_2Notas1-MetodologiasparalaIdentificacion.pdf ',
    },
    {
      referencia:
        'Ihobe. Sociedad Pública de Gestión Ambiental (2009). Identificación y evaluación de aspectos e impactos ambientales.',
      link:
        'http://consultaema.mx:75/pqtinformativo/GENERAL/UV/Documentos_por_area/Auditoria_Ambiental-AA/Identificaci%C3%B3n%20%20y%20Evaluaci%C3%B3n%20de%20Aspectos%20Ambientales.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de normas técnicas y certificación (ICONTEC). (2007).  Norma técnica colombiana ISO 14040. Gestión ambiental. Análisis del ciclo de vida. Principios y marcos de referencia.',
      link:
        'http://files.control-ambiental5.webnode.com.co/200000127-a0991a28c5/NTC-ISO14040-2007%20Analisis_CicloVida.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'Es todo elemento que resulta de las actividades, productos o servicios de una organización que puede llegar a interactuar con el medio ambiente.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'Son las distintas etapas consecutivas e interrelacionadas de un producto.',
    },
    {
      termino: 'Contaminación ambiental',
      significado:
        'Es la presencia de todos los componentes nocivos ya sean físicos, químicos o biológicos en el medio ambiente, los cuales presentan un prejuicio para todos los seres vivos.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Es toda modificación o alteración del medio ambiente que resulta de las actividades, productos o servicios de una organización. Este puede ser de manera positiva o negativa.',
    },
  ],
  complementario: [
    {
      texto:
        'Aspectos ambientales y Ciclo de Vida: Gestión integral asesorías y diplomados, (2020). <i>Identificación de aspectos e impactos ambientales.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6eTGTzQYdqE',
    },
    {
      texto:
        'Contaminación por plástico: ECODES. (s.f) <i>Contaminación por plásticos. Uno de los mayores desafíos ambientales del siglo XXI.</i>',
      tipo: 'Página web',
      link:
        'https://ecodes.org/hacemos/cultura-para-la-sostenibilidad/salud-y-medioambiente/observatorio-de-salud-y-medio-ambiente/contaminacion-por-plasticos-uno-de-los-mayores-desafios-ambientales-del-siglo-xxi',
    },
    {
      texto:
        'Contaminación ambiental: Olivares, M. (2020). <i>Cuáles son los tipos de contaminación ambiental, Acciona con ayuda.</i> Fundación Ayuda en Acción.',
      tipo: 'Página web',
      link:
        'https://ayudaenaccion.org/ong/blog/sostenibilidad/tipos-contaminacion-ambiental/',
    },
    {
      texto:
        'Análisis del ciclo de vida: Instituto Colombiano de normas técnicas y certificación (ICONTEC). (2007).  <i>Norma técnica colombiana ISO 14040. Gestión ambiental. Análisis del ciclo de vida. Principios y marcos de referencia.</i>',
      tipo: 'Normatividad',
      link:
        'http://files.control-ambiental5.webnode.com.co/200000127-a0991a28c5/NTC-ISO14040-2007%20Analisis_CicloVida.pdf  ',
    },
    {
      texto:
        'Aspectos e impactos ambientales: Ihobe. Sociedad Pública de Gestión Ambiental (2009). <i>Identificación y evaluación de aspectos e impactos ambientales.</i>',
      tipo: 'Página web',
      link:
        'http://consultaema.mx:75/pqtinformativo/GENERAL/UV/Documentos_por_area/Auditoria_Ambiental-AA/Identificaci%C3%B3n%20%20y%20Evaluaci%C3%B3n%20de%20Aspectos%20Ambientales.pdf',
    },
    {
      texto:
        'Cartografía: Fallas, J. (2003). <i>Sistemas integrados de información geográfica. Conceptos básicos de cartografía.</i>',
      tipo: 'Artículo',
      link:
        'https://pim.udelar.edu.uy/wp-content/uploads/sites/14/2019/07/CONCEPTOS-B%C3%81SICOS-DE-CARTOGRAF%C3%8DA.pdf ',
    },
    {
      texto:
        'Sistemas de Información Geográfica: CEUPE (s.f.). <i>Los sistemas de información geográfica.</i>',
      tipo: 'Página web',
      link:
        'https://www.ceupe.com/blog/los-sistemas-de-informacion-geografica.html',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ana María Buitrago Toro',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología - Regional distrito capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de diseño y metrología - Regional distrito capital.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
