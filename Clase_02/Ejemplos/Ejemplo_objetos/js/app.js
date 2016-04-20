$(document).ready(function()
{
    var persona = {
        'nombre'        : 'Maximiliano',
        'apellido'      : 'Oviedo',
        'colorFavorito' : 'rojo'
    };
     
    var carro = {
        'marca'     : 'Nissan',
        'tipo'      : 'Deportivo',
        'modelo'    : 'Zx-200',
        'id'        : 22314         
    };     
     
     console.log(persona);
     console.log(persona.nombre);
     console.log(carro['marca']);
     console.log(carro['id']);
     
     console.log(typeof carro);
     
     //alert(persona.colorFavorito + ' ' + carro.tipo);
     console.log(persona.colorFavorito + ' ' + carro.tipo);
     if (confirm(persona.colorFavorito + ' ' + carro.tipo))
         alert ('si')
         
});