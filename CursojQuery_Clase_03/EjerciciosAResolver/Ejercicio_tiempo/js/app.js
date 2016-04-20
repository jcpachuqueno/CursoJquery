$(document).ready(function()
{    
       var tiempoAnterior = Date.now();
       
       setInterval (function()
       { 
           var ahora = Date.now();
           var lapsoDeTiempo = ahora - tiempoAnterior;
           $('#parpadear').css('background','rgb(250,30,30)') ;
           
           if(lapsoDeTiempo > 200)
           { 
            console.log('Tiempo');
            tiempoAnterior = Date.now();
            $('#parpadear').css('background','yellow') ;
              
           }
       }, 100/30);
});
