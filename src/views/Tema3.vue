<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Aspectos ambientales
    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3  Para empresas que están orientadas hacia un futuro de sostenibilidad y sustentabilidad no solo económica sino también ambiental, es esencial comprender cómo se está viendo afectado el medio ambiente en cada uno de los procesos que realiza la organización y la manera de hacerlo es por medio de una identificación de aspectos e impactos ambientales los cuales determinarán las medidas necesarias para la mitigación de estos. 
        p.mb-3  Es conveniente tomar en consideración que un aspecto ambiental se define como: elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente. Como ejemplos de aspecto ambiental se incluyen el vertido, emisión, consumo o reutilización de un material, o la generación de ruido.
        p.mb-3.text-bold  En este sentido, los aspectos ambientales son todas las acciones, productos o servicios, que interactúan con el medio ambiente dentro de una organización.
      .col-lg-5
        figure
          img.r10(src='@/assets/curso/t3-i1.jpg', alt='imagen decorativa')


    #t_3_1.titulo-segundo
      h2 3.1. Tipos de aspectos ambientales

    p.mb-5  Los impactos ambientales se identifican una vez la organización ya haya definido y desglosado las diferentes operaciones en las que se pueda dar un impacto ambiental.
    .row.mb-4.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t3-ic1.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Emisiones atmosféricas
              p Es el tipo de contaminación generada por la emisión, mezcla o acumulación de contaminantes a la atmósfera, ya sean provenientes de fuentes naturales o antropogénicas.
            

          .row.justify-content-right
            .col-md-10
              h3 Residuos peligrosos
              p Son los residuos no reciclables y que presentan peligro por tener propiedades que presentan riesgos para la salud, y medio ambiente.
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t3-ic2.svg', alt='icono decorativo')    

          .row
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t3-ic4.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Residuos inertes
              p Son residuos que no tienen reacción química o biológica y que no se descomponen ni se descomponen muy lentamente. Los ejemplos son arena y hormigón.
            

          .row.justify-content-right
            .col-md-10
              h3 Vertidos de agua
              p Son aguas cuyas características han sido alteradas por actividades humanas y que por su calidad requieren de tratamiento previo a ser vertidas a cuerpos de agua natural o alcantarillado.
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t3-ic5.svg', alt='icono decorativo')    

          .row
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t3-ic6.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Consumo de energía
              p Gasto total de energía utilizada.
            

          .row.justify-content-right
            .col-md-10
              h3 Consumo de agua
              p Es la cantidad de agua que dispone una persona para sus necesidades diarias de consumo, aseo, limpieza, riego, etc.
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t3-ic7.svg', alt='icono decorativo')    

    p.mb-5  A partir de los tipos de aspectos ambientales se desglosa la medición, para este caso, los aspectos es la magnitud, densidad y acercamiento a los límites de referencia. los cuales se describen a continuación:

    //-- line  1
    .row.mb-4
      .col-lg-4
        .tarjeta.c1.p-4.text-center
          figure
            img.nW.centered.mb-3(src='@/assets/curso/t3-ic8.svg', alt='icono decorativo')    
          .h3 La cantidad o volumen del aspecto
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal1 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-lg-2
              figure
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic8.svg', alt='icono decorativo')
            .col-md-6.mb-4.mb-md-0
              h4 La cantidad o volumen del aspecto
              p En primer lugar, se aplican aspectos ambientales como el consumo de materias primas y materiales, el consumo de agua y energía y la generación de residuos. Hay dos formas de recopilar estos datos: absoluta o relativa.

      .col-lg-4
        .tarjeta.c2.p-4.text-center
          figure
            img.nW.centered.mb-3(src='@/assets/curso/t3-ic9.svg', alt='icono decorativo')    
          .h3 Frecuencia
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal2 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-lg-2
              figure
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic9.svg', alt='icono decorativo')
            .col-md-6.mb-4.mb-md-0
              h4 Frecuencia
              p Referencias a pasos o repeticiones de aspectos ambientales. Este criterio se aplica generalmente a aspectos como el ruido generado, las emisiones y los olores.

      .col-lg-4
        .tarjeta.c1.p-4.text-center
          figure
            img.nW.centered.mb-3(src='@/assets/curso/t3-ic10.svg', alt='icono decorativo')    
          .h3 Extensión
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal3 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal3")
          .row.align-items-center
            .col-lg-2
              figure
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic10.svg', alt='icono decorativo')
            .col-md-6.mb-4.mb-md-0
              h4 Extensión
              p Se refiere al área o superficie afectada. Esta norma se aplica principalmente a aspectos de suelos contaminados.

    //-- line  2
    .row.mb-3
      .col-lg-4
        .tarjeta.c2.p-4.text-center
          figure
            img.nW.centered.mb-3(src='@/assets/curso/t3-ic11.svg', alt='icono decorativo')    
          .h3 Peligrosidad
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal4 = true")
            span Abrir modal
          .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal4")
          .row.align-items-center
            .col-lg-2
              figure
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic11.svg', alt='icono decorativo')
            .col-md-6.mb-4.mb-md-0
              h4 Peligrosidad
              p Es peligroso, grave o tóxico. Este criterio se entiende como una propiedad que puede caracterizar aspectos del medio ambiente y es más importante para las propiedades que son mucho más dañinas para el medio ambiente en la naturaleza.


      .col-lg-4
        .tarjeta.c1.p-4.text-center
          figure
            img.nW.centered.mb-3(src='@/assets/curso/t3-ic12.svg', alt='icono decorativo')    
          .h3 Acercamiento a límites de referencia
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal5 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal5")
          .row.align-items-center
            .col-lg-2
              figure
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic12.svg', alt='icono decorativo')
            .col-md-6.mb-4.mb-md-0
              h4 Acercamiento a límites de referencia
              p Este es el nivel de riesgo, gravedad o toxicidad. Este criterio se considera como una propiedad que puede caracterizar aspectos del medio ambiente y, por su propia naturaleza, es más importante para propiedades mucho más nocivas para el medio ambiente. Decisión. Sin embargo, los criterios identificados no deben considerar la posibilidad de exceder los límites legales. Esto es incompatible con el compromiso de la empresa de cumplir con las leyes ambientales establecidas en su política ambiental.

      .col-lg-4
        .tarjeta.c2.p-4.text-center
          figure
            img.nW.centered.mb-3(src='@/assets/curso/t3-ic13.svg', alt='icono decorativo')    
          .h3 Sensibilidad del medio
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal6 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal6")
          .row.align-items-center
            .col-lg-2
              figure
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic13.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              h4 Sensibilidad del medio
              p En una empresa, es importante considerar que las condiciones ambientales y los impactos que crea un aspecto ambiental están directamente relacionados con el entorno en el que ocurren.

    //-- line  3

    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.c2.p-4.text-center
          figure
            img.nW.centered.mb-3(src='@/assets/curso/t3-ic14.svg', alt='icono decorativo')    
          .h3 Estado de regulación
          a.boton.color-acento-botones.mb-5.indicador__container(@click="modal7 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal7")
          .row.align-items-center
            .col-lg-2
              figure
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic14.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              h4 Estado de regulación
              p Se entiende como la existencia de cualquier requisito legal o de otro tipo que la empresa deba cumplir y pueda aplicarse a los aspectos ambientales. La forma de proporcionar un valor grande o pequeño a un aspecto depende de la aplicación de los requisitos.



    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2. Clasificación de los ambientes    
    .row
      .col-lg-7
        p.mb-3.text-bold  Los aspectos ambientales se clasifican como significativos y no significativos. 
        p.mb-4  Estos últimos corresponden a los impactos que son lo suficientemente notables como para marcar una gran diferencia en el medio ambiente. La importancia del aspecto ambiental depende en gran medida del funcionamiento de la organización y su ubicación. Para ello, existen dos categorías distintas de aspectos ambientales:
        .row.justify-content-center
          .col-lg-9
            ul.lista-ul
              li
                .lista-ol--cuadro__vineta
                  i.fas.fa-check
                p <b>Significativos:</b> es un elemento de las actividades, productos o servicios de una empresa que tiene o puede tener un impacto sobre el medio ambiente.
              li
                .lista-ol--cuadro__vineta
                  i.fas.fa-check
                p <b>No significativos:</b> los asociados al producto fabricado, buscando reducir al máximo el ciclo de vida de este.

      .col-lg-5
        figure(data-aos="flip-left")
          img.nW.centered.mb-3(src='@/assets/curso/t3-i2.jpg', alt='Operaria de planta de producción')
      
    Separador
    br
    br
    #t_3_3.titulo-segundo
      h2 3.3.  Identificación de los aspectos ambientales 
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos="flip-left")
                img.nW.centered.mb-3(src='@/assets/curso/t3-ic20.svg', alt='icono decorativo')
            .col-lg-8
              .bloque-texto-a__texto.p-4(data-aos="flip-down")
                p La identificación de los aspectos ambientales, permiten conocer cuáles son las situaciones en las que las actividades, productos y servicios pueden afectar al medio ambiente y de esta manera, poder conocer qué tipos de impactos son susceptibles de generarse y con ello, hacer la evaluación dentro del sistema de gestión ambiental de la organización.

    .row.mb-5.justify-content-center
      .col-lg-10
        figure(data-aos="flip-left")
          img.nW.centered.mb-3(src='@/assets/curso/t3-i4.svg', alt='infografia identificación del ambiente')













</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
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
