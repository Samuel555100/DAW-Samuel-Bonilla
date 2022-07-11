function init() {

var op1 = prompt('Introduzca un numero en metros:','');

var operaciones = document.getElementById('operaciones');

var resultado = document.getElementById('resultado');

var contenido = "<header>\n";
contenido += "\t<h1></h1>\n";
contenido += "</header>\n";
contenido += "<nav class='menu'>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";

operaciones.innerHTML = contenido;

var opciones = document.getElementsByTagName('a');

for(var i=0; i<opciones.length; i++){
switch(i){
case 0:

opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + op1 + ' metros ' + " = " + (op1 * 3.281) + ' pies ' + "</p>\n";
}
break;
case 1:
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros " + " = " + (op1 * 39.370) + ' pulgadas ' +"</p>\n";
}
break;
case 2:
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros " + " = " + (op1 * 1.094) + 'yardas ' + "</p>\n";
}
break;

}
}
}
window.onload = init;