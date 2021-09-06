<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Impactos ambientales

    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3.text-bold  Por medio de la identificación de impactos ambientales se busca hacer una evaluación y valoración de los efectos presente como resultado de las actividades, productos o servicios en una organización, así como, se pretende mediante la evaluación, poder hallar soluciones para prevenir, mitigar o controlar dichos impactos.
        p.mb-3  Los impactos ambientales son todas aquellas alteraciones que son generadas por el ser humano al medio ambiente ya sea de manera directa o indirecta al medio ambiente por un proyecto, acción, obra o labor en un área determinada. Toda actividad que pueda causar un impacto ambiental en alguna de sus fases estará obligada a someterse al sistema de evaluación de impacto ambiental para determinar con claridad la magnitud de estos impactos. 
        p.mb-3  En este sentido, los aspectos ambientales son todas las acciones, productos o servicios, que interactúan con el medio ambiente dentro de una organización.
      .col-lg-5
        figure(data-aos="flip-left")
          img.r10(src='@/assets/curso/t4-i1.jpg', alt='imagen decorativa')

























    #t_4_1.titulo-segundo
      h2 4.1. Clasificación de los impactos ambientales

    Separador
    br
    br
    #t_4_2.titulo-segundo
      h2 4.2. Identificación del impacto ambiental    

      


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
