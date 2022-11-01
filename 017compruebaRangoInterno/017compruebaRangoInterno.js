"use strict";

/*017compruebaRangoInterno.js/.html: Escribe una condición “if” para comprobar que 
age(edad) está entre 18 y 99 inclusive. “Inclusive” significa que age puede llegar a ser 
uno de los extremos, 18 o 99*/

let age = prompt("Introduzca su edad", 18);

//Para poder añadir la condición inclusive tenemos que utilizar el AND:
//Para entrar en el rango age >= 18 debe ser true, pero <= 99 también

if (age >= 18 && age <= 99) {
  alert("Está en el rango");
} else {
  alert("No está en el rango");
}
