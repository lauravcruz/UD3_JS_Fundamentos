"use strict"; 

/*006sufijoPrefijo.js/.html: ¿Cuáles son los valores finales de todas las variables a, b, c y 
d después del código a continuación?*/

let a = 1, b = 1;

let c = ++a; // A = 2: porque su valor inicial se ha incrementado en 1 al asignarse a C, que también valdrá 2
let d = b++; // D = 1: porque B vale 1 hasta que acabe la línea. Por eso mismo, B valdrá 2. 

console.log(a, b, c, d);

