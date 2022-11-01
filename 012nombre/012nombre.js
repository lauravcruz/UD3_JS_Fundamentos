"use strict";

/*012nombreJS.js/.html: Usando el constructor if..else, escribe el código que pregunta: 
‘¿Cuál es el nombre “oficial” de JavaScript?’ Si el visitante escribe “ECMAScript”, 
entonces muestra: “¡Correcto!”, de lo contrario muestra: “¿No lo sabes? 
¡ECMAScript!”
*/

let nombreJS;
nombreJS = prompt('¿Cuál es el nombre "oficial" de JavaScript');

//Hacemos una comparación estricta para que tenga en cuenta las mayúsculas y minúsculas
if (nombreJS == "ECMAScript") {
  alert("¡Correcto!");
} else {
  alert("¿No lo sabes? ¡ECMAScript!");
}
