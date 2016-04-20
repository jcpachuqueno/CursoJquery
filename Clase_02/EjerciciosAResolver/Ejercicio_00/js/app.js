//
// jQuery
// Ejercicio 1
//
$(document).ready(function()
{
    $('#button_Uno').click(function()
    {
        alert($('#contenidoUno').css("background-color"));
        if($('#contenidoUno').css("background-color")!="red")
        {
            $('#contenidoUno').css('background-color','blue');
        }else
            $('#contenidoUno').css('background-color','red');
    });
    
    
    $('#button_Dos').click(function()
    {
        console.log('click dos');
        $('#contenidoDos').css('background','red');
    });
    
    
}
);