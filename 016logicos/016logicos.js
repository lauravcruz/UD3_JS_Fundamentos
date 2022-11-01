"use strict";

/*016logicos.js/.html: ¿Cuál será el resultado de las siguientes operaciones?*/

// El OR devuelve el primer valor verdadero que encuentra.
//Si todos son falsos, devuelve el último

alert(null || 2 || undefined); // 2: es el primer valor true

alert(alert(1) || 2 || alert(3)); // 2
// Salta la alerta mientras la valora. Es undefined (falsa), así que comprueba la segunda.
// 2 es true y es lo que devuelve. No llega a la tercera condición

// El AND devuelve la primera expresión falsa.
//Si todas son verdaderas, devuelve la última.

alert(1 && null && 2); //null:
//es el primer valor false que encuentra. No llega a la 3º condición

alert(alert(1) && alert(2)); //Undefined:
// Salta la 1º alerta al valorar. Como es undefined, la devuelve. No llega a la segunda

alert(null || (2 && 3) || 4); // 3
//Aquí hay que tener en cuenta las prioridades: && tiene precedencia.
// Entre 2 && 3, como ambas son verdaderas, AND se queda con el último valor: 3
// Entre null || 3 || 4, el OR devuelve el primer valor verdadero: 3
