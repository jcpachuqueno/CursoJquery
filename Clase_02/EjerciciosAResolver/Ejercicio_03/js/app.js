$(document).ready(function()
{
    function Init()
    {
        $('#tab-0').addClass('tab-active');
        var tituloInicial = $('#tab-0').text();
        $('#articleTitleContainer .title').text(tituloInicial);
        $('#article-0').addClass('article-active');
    }
    
    $('#tabs div').click(function()
    {
        cambiarTitulo($(this));
        var index = $(this).index();
        
        $('#tabs div').removeClass('tab-active');
        $('.article').slideUp(1000);
        
        $(this).addClass('tab-active');
        $('#article-' + index).delay(1000).slideDown(1000);
        
    });
    
    function cambiarTitulo($this)
    {
        
        var titulo = $this.text();
        $('#articleTitleContainer .title').text(titulo);
    }
     
    
    Init();
});