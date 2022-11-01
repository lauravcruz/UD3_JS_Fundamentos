"use strict";

/*018compruebaRangoExterno.js/.html: Escribe una condición if para comprobar que 
age NO está entre 18 y 99 inclusive. Crea dos variantes: la primera usando NOT, y la 
segunda sin usarlo.*/

let age = prompt("Introduzca su edad", 18);

//Queremos evaluar lo contrario al ejercicio anterior: reutilizamos el if añadiéndole un NOT
if (!(age >= 18 && age <= 99)) {
  alert("Está en el rango externo (No está entre 18 y 99)");
} else {
  alert("No está en el rango externo (Está entre 18 y 99)");
}

//Sin NOT necesitaríamos un OR. Si es menor que 18 devuelve true. 
//Si no es, comprueba que sea mayor que 99
if (age < 18 || age > 99) {
  alert("Está en el rango externo (No está entre 18 y 99)");
} else {
  alert("No está en el rango externo (Está entre 18 y 99)");
}
