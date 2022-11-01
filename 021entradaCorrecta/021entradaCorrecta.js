"use strict";

/*021entradaCorrecta.js/.html: Escribe un bucle que solicite un número mayor que 100. 
Si el usuario ingresa otro número – pídele que ingrese un valor de nuevo.
El bucle debe pedir un número hasta que el usuario ingrese un número mayor que 100 
o bien cancele la entrada/ingrese una línea vacía.
Aquí podemos asumir que el usuario solo ingresará números. No hay necesidad de 
implementar un manejo especial para entradas no numéricas en esta tarea.*/

let num = 0;
do {
  //Usamos do while para no repetir el prompt
  num = prompt("Ingrese un número mayor que 100");
} while (num < 100 && num != "" && num != null); //sale del bucle cuando num es mayor que 100 o cancele
