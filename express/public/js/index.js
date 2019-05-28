$(function () {
  $('[data-toggle="popover"]').popover()
})

texts = 
{
  'Des1':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.',
  'Des2':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.',
  'Des3':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.',
  'Des4':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.',
  'Des5':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.',
  'Des6':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.',
  'Des7':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.',
  'Des8':'Excelentes leash marca GuePro con doble rotor y un strap muy cómodo de neopreno super resistentes y fuertes!! No te lo podés perder!! Tamaños de 8 y 6 pies.'
};

var Articulo1 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}

var Articulo2 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}

var Articulo3 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}

var Articulo4 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}

var Articulo5 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}

var Articulo6 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}

var Articulo7 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}

var Articulo8 = {
  Titulo: 'Tabla De Surf  7.0',
  Descripcion: 'HERMOSA tabla evolution. Usada en excelente estado!!! Medidas "7.0 x21 1/4" x 3 1/4". Viene con quillas incluidas. Es una tabla versátil tanto para el que recién quiere iniciarse en este deporte como para el que ya surfea y quiere pasar a algo mas grande.',
  Precio: '$11000'
}


function cargarDatosInicio(){
  var precio1 = document.getElementById('Precio1');
  var precio2 = document.getElementById('Precio2');
  var precio3 = document.getElementById('Precio3');
  var precio4 = document.getElementById('Precio4');
  var precio5 = document.getElementById('Precio5');
  var precio6 = document.getElementById('Precio6');
  var precio7 = document.getElementById('Precio7');
  var precio8 = document.getElementById('Precio8');
  precio1.innerHTML = `${Articulo1.Precio}`;
  precio2.innerHTML = `${Articulo2.Precio}`;
  precio3.innerHTML = `${Articulo3.Precio}`;
  precio4.innerHTML = `${Articulo4.Precio}`;
  precio5.innerHTML = `${Articulo5.Precio}`;
  precio6.innerHTML = `${Articulo6.Precio}`;
  precio7.innerHTML = `${Articulo7.Precio}`;
  precio8.innerHTML = `${Articulo8.Precio}`;

  var titulo1 = document.getElementById('Titulo1');
  var titulo2 = document.getElementById('Titulo2');
  var titulo3 = document.getElementById('Titulo3');
  var titulo4 = document.getElementById('Titulo4');
  var titulo5 = document.getElementById('Titulo5');
  var titulo6 = document.getElementById('Titulo6');
  var titulo7 = document.getElementById('Titulo7');
  var titulo8 = document.getElementById('Titulo8');
  titulo1.innerHTML = `${Articulo1.Titulo}`;
  titulo2.innerHTML = `${Articulo2.Titulo}`;
  titulo3.innerHTML = `${Articulo3.Titulo}`;
  titulo4.innerHTML = `${Articulo4.Titulo}`;
  titulo5.innerHTML = `${Articulo5.Titulo}`;
  titulo6.innerHTML = `${Articulo6.Titulo}`;
  titulo7.innerHTML = `${Articulo7.Titulo}`;
  titulo8.innerHTML = `${Articulo8.Titulo}`;
}

function ReadMore(id, id2) {
  var delim =  "...";
  var longText = texts[id];
  var textLength = longText.length;
  var shortText = longText.substring(0, 67) + delim;
  var btnText = document.getElementById(id2);
  if($('#'+ id).html().includes(delim)){
     //Muestro long text
     $('#'+ id).html(longText);
     btnText.innerHTML = "Leer Menos";
   }else{
    //Muestro short text
    $('#'+ id).html(shortText);
    btnText.innerHTML = "Leer Más";
  }
  
}


$(document).ready(
  function (){
    //Obtener textos de la BD
    // texts = TEXTOS
    for(key in texts){
      ReadMore(key);  
    }
    
  });



