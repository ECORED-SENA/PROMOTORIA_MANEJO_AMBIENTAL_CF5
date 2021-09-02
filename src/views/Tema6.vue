<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Documentación para implementar los impactos ambientales
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 Las técnicas de documentación consisten en la identificación, recogida y análisis de documentos relacionados con el hecho o contexto estudiado.
            .col-lg-8
              .bloque-texto-a__texto.p-4(data-aos="flip-down")
                p La mayoría de información recopilada no es proporcionada directamente por las personas involucradas, sino que es recopilada de fuentes de trabajo, gráficos, escritos y demás. Es a través de ellas que se crean conceptos sobre un tema específico. A continuación, se podrá conocer las técnicas y fases de la documentación:
    
    .row.mb-4.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t6-ic1.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Planeación
              p Consiste en seleccionar, plantear y delimitar el tema; elaborar plan, esquema y agenda de trabajo.
            

          .row.justify-content-right
            .col-md-10
              h3 Recolección de información
              p Consiste en la Lectura de documentos, acopio de información, elaboración de fichas.
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t6-ic2.svg', alt='icono decorativo')
 
          .row
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t6-ic3.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Análisis e interpretación
              p Consiste en la clasificación de la información, de acuerdo con el esquema de trabajo.
      
          .row.justify-content-right
            .col-md-10
              h3 Redacción
              p Consiste en la presentación del trabajo de investigación, involucra utilizar técnicas de redacción y estructura del trabajo.
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t6-ic4.svg', alt='icono decorativo')

    p.mb-5(data-aos="slide-left")  Adicional para abordar la documentación de los impactos ambientales se debe considerar el uso de diferentes tipos de formatos que posibiliten la recopilación de información acorde a las necesidades de los proyectos, como lo son:




















</template>

<script>
export default {
  name: 'Tema3',
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
