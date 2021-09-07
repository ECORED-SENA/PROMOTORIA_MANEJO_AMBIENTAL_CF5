<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Modelos de identificación

    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3.text-bold  Las metodologías de evaluación del impacto ambiental deben ser integrales para identificar, predecir, cuantificar y evaluar una amplia gama de cambios de comportamientos operativos.
        p.mb-3  Es decir, permite averiguar qué variables físicas, químicas y biológicas se están viendo afectadas, en el cual se pueda incluir procesos socioeconómicos, culturales y paisajísticos que están fuertemente influenciados por proyectos y actividades. Por lo tanto, es necesario determinar el tipo de impacto ambiental, área y tiempo de impacto, componentes y funciones del ambiente afectado, impactos directos e indirectos, impactos principales, impactos totales, sintetizando su tamaño, importancia y riesgos. Precisamente para esto, es importante conocer sobre matrices, cartografía y sistemas de información geográfica.
      .col-lg-5(data-aos="fade-right")
        figure.mb-5
          img(src="@/assets/curso/t1-i1.jpg", alt="mujer con tablet PC en la mano supervisando un cultivo")


    TabsC.color-primario.mb-5(data-aos="fade-up")
      .py-4.py-md-4(titulo="Matrices")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            .h4 Matrices
            p Hace referencia a un conjunto ordenado y estructurado de columnas y filas. Sus elementos pueden contener objetos matemáticos de diferentes tipos, para este caso, en matrices formadas por números reales. Un tipo común de matriz, es la Leopold, la cual es simple de resumir y jerarquizar impactos ambientales. 
        
          .col-md-5
            figure
              img(src='@/assets/curso/t1-i2.jpg', alt='Ejemplo de matriz')

      .py-4.py-md-4(titulo="Cartografía")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            .h4 Cartografía 
            p.mb-3  Se ocupa de la concepción, producción, difusión y estudio de los mapas. También se conoce como un conjunto de técnicas o un arte de elaborar mapas.
            p.mb-3  En la cartografía se puede reconocer la básica y temática. La primera se encarga de ubicar formas y rasgos de la superficie terrestre; para la segunda se especializan en temas específicos.
          .col-md-3
            figcaption.customCaption.mb-2.text-bold  Básica
            figure
              img(src='@/assets/curso/t1-i3.jpg', alt='Ejemplo de cartografía')
          .col-md-3
            figcaption.customCaption.mb-2.text-bold  Temática
            figure
              img(src='@/assets/curso/t1-i4.jpg', alt='Ejemplo de cartografía')

      .py-4.py-md-4(titulo="Sistemas de Información Geográfica")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            .h4 Sistemas de Información Geográfica 
            p.mb-3  Conjunto de herramientas que integra y relaciona diversos componentes que permiten la organización, almacenamiento, manipulación, análisis y modelización de grandes cantidades de datos procedentes del mundo real que están vinculados a una referencia espacial, facilitando la incorporación de aspectos sociales-culturales, económicos y ambientales que conducen a la toma de decisiones de una manera más eficaz. En los Sistemas de Información Geográfica se encuentran: base de datos geográfica, sistema gestor de bases de datos, sistema de análisis geográfico y sistema de presentación de la información.
          .col-md-5
            figure
              img(src='@/assets/curso/t1-i5.jpg', alt='imagen decorativa')

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          .row
            .col-lg-1
              figure
                img.nW(src='@/assets/curso/t1-ic1.svg', alt='imagen decorativa')
            .col-lg-11
              p.mb-0  Como se puede ver en el recurso, existen diversas metodologías para la identificación y evaluación de aspectos e impactos ambientales, así mismo existen diferentes maneras de aplicarlas de acuerdo con el contexto de la organización, el proyecto, obra o labor que se esté realizando. Es necesario entender que cada una de estas metodologías será aplicada de manera diferente dependiendo el alcance establecido.










  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
