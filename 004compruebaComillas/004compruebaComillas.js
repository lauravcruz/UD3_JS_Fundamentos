"use strict";
/*004compruebaComillas.js/.html: ¿Cuál es la salida del script? Piénsalo y combruébalo.*/

let name = "Peter Parker";
alert(`Hola ${1}`);
// Debería imprimir 'Hola 1'. Porque con $ con el 1 entre llaves está incrustando un entero en el string

alert(`Hola ${"name"}`);
/* Imprimirá 'Hola name'. Aunque parece que esté incrustrando la variable y debería imprimir "Peter Parket", 
al entrecomillar el nombre de la variable lo ha convertido en un string en sí. Por tanto, ha dejado de tratarlo como una variable. */

alert(`Hola ${name}`);
// Ahora sí deberá aparecer 'Hola Peter Parker' porque está bien incrustrado. 

