<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fuentes de contaminación


    #t_2_1.titulo-segundo
      h2 2.1. Tipos de contaminantes

    Separador
    br
    br
    #t_2_2.titulo-segundo
      h2 2.2. Medición de los diferentes tipos de contaminantes    

      
    Separador
    br
    br
    #t_2_3.titulo-segundo
      h2 2.3. Clasificación de los contaminantes 

























</template>

<script>
export default {
  name: 'Tema2',
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
