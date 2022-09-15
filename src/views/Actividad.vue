<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/falso-verdadero.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2  Actividad didactica 1 - Afirmaciones sobre la actividad agrícola
        p.mb-4 Evaluar los conocimientos del aprendiz a través de preguntas de falso y verdadero de acuerdo a la información suministrada en los contenidos disponibles.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Falso o Verdadero 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Actividad didactica 2 - Reforzando conceptos sobre Control de labores en la producción agrícola
        p.mb-4 Reforzar los conceptos y habilidades en Control de labores en la producción agrícola, con base en lo estudiado en componente formativo.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades_2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
    
    
   

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
