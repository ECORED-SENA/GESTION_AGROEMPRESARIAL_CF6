<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    p.mb-5 Le damos la bienvenida al componente Control de labores en la producción agrícola. Para comenzar satisfactoriamente este recorrido, explore el recurso que se muestra a continuación:

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/An51JqFVN1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
