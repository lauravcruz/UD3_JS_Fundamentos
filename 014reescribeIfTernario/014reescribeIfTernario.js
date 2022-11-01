"use strict";

/*014reescribeIfTernario.js/.html: Reescriba esta condición if usando el operador 
ternario:
let result;
if (a + b < 4) {
  result = 'Baja la ropa sucia’;
} else {
  result = 'Sube los zapatos';
}*/

let result;

//Damos unos valores a A y B para probar que funcione: 
let a = 2; 
let b = 1; 

result = a + b < 4 ? 'Baja la ropa sucia' : 'Sube los zapatos'; 

alert(result); 