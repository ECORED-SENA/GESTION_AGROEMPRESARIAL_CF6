<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Planeación de actividades de seguimiento

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade")
        .row.align-items-center.justify-content-center.mb-5 
          .col-lg-6(data-aos="fade-left") 
            
            p.mb-3 En la ejecución adecuada de las actividades productivas se debe tener en claro cuáles son las acciones que se van a adelantar en cada proceso de producción. De esta manera, se tiene identificado el paso a paso y se podrá realizar un seguimiento eficaz en el que los indicadores muestran la situación real y se planifiquen las correcciones que haya a lugar.
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 
                h3 Identificación de los recursos disponibles
            p.mb-3 El conocimiento de los recursos que se tienen a mano, posibilitará la planificación de las actividades propias de la granja y a su vez la necesidad de la disponibilidad con los que no se cuentan.

            p.mb-0 A continuación, veamos cuáles son los tipos de recursos disponibles.
            
          .col-lg-6.mb-3(data-aos="fade-right") 
            img(src='@/assets/curso/images/tema2/img_1.svg'  alt='')


    figure.mb-5
      .video(data-aos="zoom-in-down")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2cnKTwQ85fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade")
        .row.align-items-center.justify-content-center.mb-5 
          .col-lg-6(data-aos="fade-left") 
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 
                h3 Programa de producción
            
            p.mb-3 El programa de producción es la conexión entre el entorno, el mercado, y la capacidad productiva de la empresa. De su sincronización va a depender el éxito, debido a que define la eficiencia en la asignación de los recursos.
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 
                h3 Establecimiento de indicadores productivos

            p.mb-3 Para evaluar correctamente el rendimiento y el nivel de eficiencia de los procesos de una empresa, los indicadores de productividad son fundamentales, porque permiten determinar las mejores estrategias para optimizar los resultados, reducir gastos y alcanzar el éxito de la producción agrícola.

            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 
                h3 Programación de actividades
            
          .col-lg-5.mb-3(data-aos="fade-right") 
            img(src='@/assets/curso/images/tema2/img_2.svg'  alt='')

    p.mb-3 El programa es el proceso subsecuente a la planificación. Su objetivo es concretar las operaciones, definiendo dónde y cuándo se van a realizar. La programación es un proceso que se convierte en la materialización de la planificación, por lo tanto, es la herramienta ejecutora de la planificación. 

    p.mb-3 Dentro de esta programación encontramos: 


    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-down")
      .row.justify-content-center.align-items-center(titulo="Tiempos y movimientos")
        .col-md-12.mb-4.mb-md-0
          p.mb-0  Los tiempos y movimientos se deben planificar de acuerdo al tipo de cultivo, la zona en la que se va a instalar y el ciclo agrícola para no arriesgar una producción por los efectos del clima y demás situaciones que estén relacionadas a estas.
      .row.justify-content-center.align-items-center(titulo="Cronogramas")
        .col-md-10.mb-4.mb-md-0
          p.mb-3  Los cronogramas son herramientas funcionales para la programación de actividades con respecto a los calendarios del ciclo agrícola. Estos a su vez proporcionan las metas de ejecución y el seguimiento a las actividades.

          img(src='@/assets/curso/images/tema2/fig_1.svg'  alt='')

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 
        h3 Asignación de recursos
      
    p.mb-3 Desde la planificación de las actividades se debe realizar una estimación de los recursos necesarios para la ejecución de las actividades agrícolas para no encontrar ítems no previstos que detengan los procesos por falta de recursos.     


    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade")
        .row.align-items-center.justify-content-center.mb-5 
          .col-lg-6(data-aos="fade-left") 
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a.
                h3 Asignar recurso humano: 
            
            p.mb-3 La contratación de personal calificado y no calificado con conocimientos previos de las actividades a desarrollar es una garantía para la ejecución de las actividades proyectadas, eso no significa que no se le pueda brindar oportunidades a gente con conocimientos teóricos los cuales están en la vanguardia respecto a las nuevas tecnologías.
  

            p.mb-3 En toda organización el recurso más importante es el talento humano, por esto es importante garantizar las condiciones adecuadas para que el trabajo realizado en finca se haga de manera eficiente y velando por la seguridad e integridad física y mental de los trabajadores.

            p.mb-0 Y para garantizar las condiciones laborales adecuadas, se recomienda tener en cuenta lo siguiente:
            
          .col-lg-5.mb-3(data-aos="fade-right") 
            img(src='@/assets/curso/images/tema2/img_3.svg'  alt='')
    .row.justify-content-center.align-items-center.mb-3
      SlyderB.color-custom-4.mb-5.py-4(:datos="datosSlyder")(data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade")
        .row.align-items-center.justify-content-center.mb-5  
          .col-lg-6.mb-3(data-aos="fade-right") 
            img(src='@/assets/curso/images/tema2/img_8.svg'  alt='')
          .col-lg-6(data-aos="fade-left") 
            p.mb-3 Aparte de lo anteriormente citado, se debe capacitar periódicamente a los trabajadores en temas de:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Prácticas de higiene.
              hr
              li
                .lista-ol--cuadro__vineta
                  span 2
                | Manejo de herramientas.
              hr
              li
                .lista-ol--cuadro__vineta
                  span 3
                | Almacenamiento, manejo y aplicación de insumos agrícolas. 
              hr
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Uso de elementos de protección personal.
              hr
              li
                .lista-ol--cuadro__vineta
                  span 5
                | Primeros auxilios y manejo de extintores (al menos a un trabajador)
              hr
              li
                .lista-ol--cuadro__vineta
                  span 6
                | Conocer el plan de manejo de contingencias y emergencias.

    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span b.
            h3 Determinar necesidades de materiales:

        p.mb-0 al momento de realizar la asignación de los recursos se relacionan los materiales que se necesitan para el proyecto, sin embargo, es pertinente revisar a detalle cada proceso para no pasar por alto alguna situación que más adelante se haga necesaria.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Mantener',
        texto:
          'Los lugares de trabajo y reposo en condiciones de higiene y limpieza.',
        imagen: require('@/assets/curso/images/tema2/img_4.png'),
      },
      {
        titulo: 'Afiliar',
        texto:
          'A los trabajadores de tiempo completo, a una entidad prestadora de salud (EPS) y a una aseguradora de Riesgos Laborales (ARL) En el caso de los trabajadores ocasionales, deben estar cubiertos por estos servicios, como hecho previo al momento de su contratación.',
        imagen: require('@/assets/curso/images/tema2/img_5.png'),
      },
      {
        titulo: 'Dotar',
        texto:
          'Con los elementos de protección personal (EPP) a los trabajadores, de acuerdo con la labor a realizar.',
        imagen: require('@/assets/curso/images/tema2/img_6.png'),
      },
      {
        titulo: 'Suministrar',
        texto:
          'Las herramientas de trabajo adecuadas y el equipo de seguridad mínimo para labores que representen algún tipo de riesgo ergonómico, locativo o psicológico.',
        imagen: require('@/assets/curso/images/tema2/img_7.png'),
      },
    ],
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

<style lang="sass"></style>
