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
    });
    
    function cambiarTitulo($this)
    {
        var index = $this.index();
        var titulo = $this.text();
        $('#articleTitleContainer .title').text(titulo);
    }
     
    
    Init();
});