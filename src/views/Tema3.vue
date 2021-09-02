<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Aspectos ambientales


    #t_3_1.titulo-segundo
      h2 3.1. Tipos de aspectos ambientales

    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2. Clasificación de los ambientes    

      
    Separador
    br
    br
    #t_3_3.titulo-segundo
      h2 3.3.  Identificación de los aspectos ambientales 

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
