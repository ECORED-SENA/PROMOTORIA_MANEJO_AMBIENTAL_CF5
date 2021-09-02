<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/i-i1.jpg", alt="manos sosteniendo un arbol miniatura al frente de una ciudad miniatura")
    .row
      .col-lg-2
        figure.mb-5
          img(src="@/assets/curso/i0-ic1.svg", alt="icono decorativo")
      .col-lg-10
        p.mb-0 La presente formación permitirá adquirir las competencias necesarias para la valoración del impacto ambiental que es generado por un proyecto, obra u actividad (POA), con el propósito que se pueda proponer medidas que den cumplimiento a la normativa vigente en materia de mitigación de los impactos ambientales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
