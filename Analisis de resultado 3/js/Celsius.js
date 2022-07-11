function init() {

    var op1 = prompt('Introduzca la temperatura en Celsius:','');
    
    var operaciones = document.getElementById('operaciones');
    
    var resultado = document.getElementById('resultado');
    
    var contenido = "<header>\n";
contenido += "\t<h1></h1>\n";
contenido += "</header>\n";
contenido += "<nav class='menu'>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Mostrar a Fahrenheit</span></a>\n";
contenido += "</li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";
    
    operaciones.innerHTML = contenido;
    
    var opciones = document.getElementsByTagName('a');
    
    for(var i=0; i<opciones.length; i++){
    switch(i){
    case 0:
    
    opciones[i].onclick = function(){
    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + ' °C ' + " = " + Math.round(op1 * 1.8 + 32)  + ' °F ' + "</p>\n";
    }
    break;
    
    
    }
    }
    }
    window.onload = init;