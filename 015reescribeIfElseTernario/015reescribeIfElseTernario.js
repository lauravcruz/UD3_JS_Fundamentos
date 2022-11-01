"use strict";

/*015reescribeIfElseTernario.js/.html:  Reescriba el if..else utilizando operadores 
ternarios múltiples'?'. Para legibilidad, es recomendado dividirlo en múltiples líneas de 
código.
let message;
if (login == 'Alumno') {
  message = 'Hola estudiante, tiene 10 tareas pendientes';
} else if (login == 'Profesor') {
  message = 'Buenos días, tiene que calificar 1000 actividades';
} else if (login == '') {
  message = 'Sin sesión, estudie algo';
} else {
  message = '';
}*/

let login = prompt("¿Profesor o Alumno?");
let message;

login == "Alumno"
  //Para hacer un ternario múltiple se añaden condiciones dentro de otras como en un else if:
  ? (message = "Hola estudiante, tienes 10 tareas pendientes")
  : login == "Profesor"
  ? (message = "Buenos días, tiene que calificar 1000 actividades")
  : (message = "Sin sesión, estudie algo");

alert(message); 