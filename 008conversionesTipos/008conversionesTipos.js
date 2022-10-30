"use strict";

/*008conversionesTipos.js/.html: ¿Cuáles son los resultados de estas expresiones? */

console.log("" + 1 + 0);
// 10: al empezar por string, interpreta la cadena como concatenación

console.log("" - 1 + 0);
// -1: al haber un - ya no es una concatenación. Los números se interpretan como tal

console.log(true + false); 
// 1: como no hay ningún string, se realiza la conversión númerica. True = 1, false = 0

console.log(6 / "3");
// 2: Al introducir funciones matemáticas, los string se convierten a number

console.log("2" * "3");
// 6: Al introducir funciones matemáticas, los string se convierten a number

console.log(4 + 5 + "px");
// 9px: suma los números y después concatena con el string

console.log("$" + 4 + 5);
// $45: al empezar por string, trata los números como texto

console.log("4" - 2);
// 2: al haber una función matemática, la cadena pasa a ser número automáticamente

console.log("4px" - 2);
// NaN: al haber una función matemática, intenta convertir la cadena a número, pero como
//tiene "px", salta el NaN

console.log("  -9  " + 5);
// -9  5: al empezar por string, interpreta el 5 como texto. El espacio se mantiene porque
//forma parte de la cadena

console.log("  -9  " - 5);
// -14: al poner la función matemática de la resta, se fuerza la conversión del string, que
//interpreta el - como número negativo

console.log(null + 1);
//1: la conversión númerica de null es 0. 0 + 1 = 1

console.log(undefined + 1);
//NaN: la conversión númerica de undefined es NaN

console.log(" \t \n" - 2);
//-2: al haber una operación matemática, se convierte el string a número. Como tiene un
//tabulador y una nueva línea, su valor será 0. 0 - 2 = -2. 