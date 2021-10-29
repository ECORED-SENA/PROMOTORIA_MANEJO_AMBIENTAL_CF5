<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Análisis de ciclo de vida
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zCHjI34V9FU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-lg-7
        p.mb-3.text-bold(data-aos="fade-left")  El Análisis del Ciclo de Vida (ACV) aborda todos los aspectos e impactos ambientales potenciales a lo largo de todo el ciclo de vida de un producto, lo cual comprende las actividades de extracción y adquisición de la materia prima, la producción, utilización, reciclado y por último la disposición final.
        p.mb-5(data-aos="fade-left")  El ACV de un producto incluye todas las entradas/salidas de los procesos que participan a lo largo de su ciclo de vida, pues la extracción de materias primas y el procesado de los materiales necesarios para la manufactura de componentes, el uso del producto y finalmente su reciclaje y/o la gestión final. El transporte, almacenaje, distribución y otras actividades intermedias entre las fases del ciclo de vida también se incluyen cuando tienen la relevancia suficiente.
        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          p.mb-0  Es por esto por lo que empresas que están incursionando en el campo de las certificaciones ambientales deben realizar análisis de ciclo de vida para poder determinar en qué momento y de qué manera se está afectando este medio; <b>Con el fin de poder tomar medidas a tiempo con respecto al control y la calidad de sus procesos que aseguren la sostenibilidad de los recursos naturales.</b>
      .col-lg-5
        figure
          img.nW(src='@/assets/curso/t5-i1.jpg', alt='icono decorativo')

    p.mb-5  El ciclo de vida se aborda desde <b>la norma ISO 14040</b> análisis del ciclo de vida, la cual ofrece la posibilidad de calcular el perfil ambiental de un solo producto o servicio y también se utiliza como herramienta de comparación entre productos. La información proporcionada contribuye a:
    .row.justify-content-center.mb-5
      .col-lg-3
        figure(data-aos="flip-left")
          img.nW(src='@/assets/curso/t5-ic1.svg', alt='icono decorativo')
      .col-lg-6
        ul.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | La identificación de oportunidades de mejora del desempeño ambiental del producto en las fases de diseño y desarrollo.

          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | El establecimiento de prioridades en la planificación estratégica del producto.     
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | La elección de indicadores de desempeño ambiental, entre los que se incluyen técnicas de medición.
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | Llevar a cabo estrategias de marketing ecológico.

    p.mb-5  El Análisis de Ciclo de vida de un producto evalúa los potenciales impactos medioambientales asociados en todas las etapas de su existencia:
    .row.justify-content-center.mb-5
      .col-lg-3
        figure(data-aos="flip-right")
          img.nW(src='@/assets/curso/t5-ic1.svg', alt='icono decorativo')
      .col-lg-6
        ul.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | Adquisición de materias primas.
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | Fabricación, procesado y formulación de productos.
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | Distribución y transporte.
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | Uso, mantenimiento y reutilización durante su ciclo de vida en servicio.
          li
            .lista-ol--cuadro__vineta.text-center
              i.fas.fa-check
            | Gestión de residuos.

    p.mb-5 <b>Para realizar el análisis del ciclo de vida se debe tener en cuenta los tipos y las diferentes etapas,</b> tal como se observan a continuación:
    .row.mb-5
      .col-lg-4
        figure(data-aos="flip-left")
          img.nW(src='@/assets/curso/t5-i2.jpg', alt='icono decorativo')
      .col-lg-8
        TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
          .py-4.py-md-4(titulo="Tipos de análisis del ciclo de vida")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p <b>Análisis de ciclo de vida conceptual:</b> se centra más bien en un estudio cualitativo para identificar los potenciales impactos más significativos, por lo que los datos utilizados son muy generales.
                  li
                    i.fas.fa-check
                    p <b>Análisis de ciclo de vida simplificado:</b> toma solo en consideración datos genéricos y abarca el ciclo de vida de manera superficial, seguido de una simplificación, donde se centra en las etapas más importantes, y un análisis de la fiabilidad de los resultados.
                  li
                    i.fas.fa-check
                    p <b>Análisis de ciclo de vida completo:</b> se lleva a cabo un análisis en detalle a nivel cualitativo y cuantitativo.

          .py-4.py-md-4(titulo="Etapas del ciclo de vida")
            .row.justify-content-center
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p <b>Definición de objetivos y alcance:</b> donde se exponen los motivos por los que se lleva a cabo el estudio y se establece su alcance.
                  li
                    i.fas.fa-check
                    p <b>Inventario del Ciclo de Vida (ICV):</b> etapa en la que se identifica y cuantifica todas las entradas (consumo de recursos y materiales) y salidas (emisiones al aire, suelo, aguas y generación de residuos) que potencialmente pueden causar un impacto durante el Análisis de ciclo de vida.
                  li
                    i.fas.fa-check
                    p <b>Evaluación de los Impactos del Ciclo de Vida (EICV):</b> etapa en la que se establece una relación de entradas y salidas en el inventario con los posibles impactos sobre el medio ambiente, la salud humana y los recursos. El objetivo de esta fase es clasificar, caracterizar y valorar cuánto de importantes son los potenciales impactos generan.
                  li
                    i.fas.fa-check
                    p <b>Interpretación de resultados:</b> esta etapa es la combinación de los resultados del ICV y la EICV para extraer, según los objetivos establecidos, conclusiones y recomendaciones que contribuyan a la toma de decisiones.







                

</template>

<script>
export default {
  name: 'Tema5',
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
