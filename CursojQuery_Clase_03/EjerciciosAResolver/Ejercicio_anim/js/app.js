$(document).ready(function()
{   
    function IniciarAnimacion()
    {
        var verticalPos = $('#vertical').position().top - $('#cuadro').height();
        var horizontalPos = $('#horizontal').position().left - $('#cuadro').width();
        
        
        $( "#cuadro" ).animate({
            top: verticalPos
            //, width: 100         
        }, 5000, function() {
                 $( "#cuadro" ).animate({
                        left: horizontalPos //- $('#cuadro').width() 
                        //,width: 100         
                        }, 5000, function() {
                                            
                        });        
        });
        
        $('body').animate({
            scrollTop: $(document).height()            
        }, 5000); 
        
        
         
    } 
    
    IniciarAnimacion();
    
});