"use strict";

/* 009corregirAdicion.js/.html: Aquí hay un código que le pide al usuario dos números y 
muestra su suma. Funciona incorrectamente. El resultado en el ejemplo a continuación 
es 12 (para valores de captura predeterminados). ¿Por qué? Arréglalo. El resultado 
debería ser 3.*/

//El resultado es 12 porque el prompt devuelve por defecto un string. Al hacer la suma en el alert,
//la entiende como una concatencación de strings. Para arreglarlo, convertimos a número los valores

let a = +prompt("¿Primer número?", 1);
let b = +prompt("¿Segundo número?", 2);
alert(a + b); 

