
$(document).ready(function()
{    
    function Init()
    {
        setHeaderSection();
        setContenidoSection();
        
    }
    
    function setHeaderSection()
    {
        var $headerTitulo = $('<h2/>').text('Mi comida favorita');;
        var $header = $('<header/>').append($headerTitulo);
        $header.appendTo('#container');
    }
    
    function setContenidoSection()
    {
        var $contenido = getContenido();                
        setContenidoHeadSection($contenido);  
        $contenido.appendTo('#container');
        
        
        var $explicacion = $('<div/>').attr('id','explicacion');
        var $Texto = $('<p/>').html('<br/> Las estrujadas son enchiladas rojas o verdes machacadas, servidas con unos...');
        $explicacion.append($Texto);
        
        $contenido.append($explicacion);
        
        
        var $Ingredientes = $('<div/>').attr('id','Ingredientes');
        var $pIngredientes = $('<p/>').attr('class','subtitulo');
            $pIngredientes = $pIngredientes.html('<br/> Lista de Ingredientes');
        
        $contenido.append($Ingredientes);
        $Ingredientes.append($pIngredientes);
        
        var $ulIngredientes =  $('<ul/>');
        var $li1  =  $('<li/>');
        var $p1  =  $('<p/>').text('1/2 de kilo de Masa');
        $li1.append($p1);
         
        var $li2  =  $('<li/>');
        var $p2  =  $('<p/>').text('Manteca de cerdo');
        $li2.append($p2);
        
        var $li3  =  $('<li/>');
        var $p3  =  $('<p/>').text('Manteca de cerdo');
        $li3.append($p3);
        
        var $li4  =  $('<li/>');
        var $p4  =  $('<p/>').text('Manteca de cerdo');
        $li4.append($p4);
        
        var $li5  =  $('<li/>');
        var $p5  =  $('<p/>').text('Manteca de cerdo');
        $li5.append($p5);
        
        
        $ulIngredientes.append($li1);
        $ulIngredientes.append($li2);
        $ulIngredientes.append($li3);
        $ulIngredientes.append($li4);
        $ulIngredientes.append($li5);
        
        
        
        $contenido.append($ulIngredientes);
        
        
        
    
         
    }
    
    function getContenido()
    {
        var $contenido = $('<div/>');
        $contenido.attr('id', 'contenido');
        return $contenido;
    }
    
    function setContenidoHeadSection($contenido)
    {
        var $contenidoHead = getContenidoHead($contenido);
        setImageHead($contenidoHead);
        setTituloHead($contenidoHead);
    }
    
    function getContenidoHead($contenido)
    {
        var $contenidoHead = $('<div/>');
        $contenidoHead.attr('id', 'contenidoHead');
        $contenidoHead.appendTo($contenido);
        return $contenidoHead;
    }
    
    function setImageHead($contenidoHead)
    {
        var $image = $('<img/>', 
        {
            'src' : 'images/estrujadas.jpg',
            'alt' : 'Imagen de estrujadas'
        });  
        $image.appendTo($contenidoHead);
    }
    
    function setTituloHead($contenidoHead)
    {
        var $tituloArticulo = $('<p/>');
        $tituloArticulo.text('Estrujadas');
        $tituloArticulo.attr('class', 'titulo');    
        $tituloArticulo.appendTo($contenidoHead);
    }
    
    Init();
});