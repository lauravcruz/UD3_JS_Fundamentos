"use strict";

/*010comparaciones.js/.html: ¿Cuál será el resultado de las siguientes expresiones? */

//5 > 4 // True: es un operador de comparación. Se cumple que 5 es mayor que 4
console.log(5 > 4);

//"apple" > "microsoft" // False: se compara el primer caracter. 
//Como a va antes en el diccionario que m, es false
console.log("apple" > "microsoft");

//"2" > "12" // True: se compara el primer caracter 
//el 1 va antes que el 2, por tanto, 2 es mayor
console.log("2" > "12");

// undefined == null; // true: son iguales entre sí: no equivalen a ningún valor
console.log(undefined == null); 

let car = new Object();

// undefined === null // False: la igualdad estricta hace comparar los tipos
//Undefined es tipo indefinido y null: object (es un error, pero JS lo interpreta así)
console.log(undefined === null);

// null == "\n0\n" // False: null es que "no tiene valor", y lo otro es un string definido
console.log(null == "\n0\n");

//null === +"\n0\n" // False: está haciendo una comparación entre tipos: tipo null y tipo number
console.log(null === +"\n0\n");

