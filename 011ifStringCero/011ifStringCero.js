"use strict";

/*011ifStringCero.js/.html: ¿Se mostrará el alert?
    
Sí, porque aunque los valores 0, null, undefined y NaN den falso, cuando se tratan 
como un string, JavaScript lo que valora es si la cadena está escrita o vacía.
Aunque sea un 0, la cadena tiene contenido, así que dará true.
*/
if ("0") {
  alert( '¿me ejecuto o no?' );
} 


