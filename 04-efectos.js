$(document).ready(function(){
   $("#mostrar").click(function(){
       $("#caja").show('fast');
   });

   //Ocultar
   $("#ocultar").click(function(){
      $("#ocultar").hide();
      //$("#caja").hide('fast');
      //$("#caja").fadeOut('slow');
      $("#caja").fadeOut('slow', 0);
   });

});
