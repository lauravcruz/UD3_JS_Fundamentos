"use strict";

/*022numPrimos.js/.html: Un número entero mayor que 1 es llamado primo si no puede 
ser dividido sin un resto por ningún número excepto 1 y él mismo. En otras palabras, n 
> 1 es un primo si no puede ser divido exactamente por ningún número excepto 1 y n.
Por ejemplo, 5 es un primo, porque no puede ser divido exactamente por 2, 3 y 4.
Escribe el código que muestre números primos en el intervalo de 2 a n.
Para n = 10 el resultado será 2, 3, 5, 7.
PD. El código debería funcionar para cualquier n, no debe estar programado para 
valores fijos.
¿Puedes hacerlo con los 3 tipos de bucle? Demuéstralo.*/

let n;
let divisor = 2;
let dividendo = 2;
let esPrimo = true; //inicializamos en true para que entre el 2 como primo

do {
  n = prompt("Introduzca un número");
} while (n <= 1);

document.write("<h4>BUCLE WHILE:</h4>");
while (dividendo <= n) {
  //Un primer bucle controla el rango de números a evaluar: de 2 a N
  while (esPrimo && divisor < dividendo) {
    //Mientras que el resto no sea 0, tomamos que es primo (hasta que dividendo sea divisor + 1)
    if (dividendo % divisor == 0) {
      esPrimo = false;
    } else {
      divisor++;
    }
  }
  if (esPrimo) {
    //Si superó el primer bucle, es primo
    document.write(dividendo + " ");
  }

  //reiniciamos las variables para el siguiente bucle
  divisor = 2;
  esPrimo = true;
  dividendo++;
}

dividendo = 2;

document.write("<h4>DO WHILE:</h4>");
//Adaptamos el while anterior al do while. Es prácticamente lo mismo, salvo por el primer caso:
do {
  do {
    if (dividendo % divisor == 0) {
      esPrimo = false;
    } else {
      divisor++;
    }
  } while (esPrimo && divisor < dividendo);
  if (esPrimo || dividendo == 2) {
    //En el ej anterior, el 2 es primo porque no entraba en el while y esPrimo era true por defecto
    //Aquí, al ejecutarse obligatoriamente, evalúa que 2 no es primo, por eso hay que especificar que sí es
    document.write(dividendo + " ");
  }
  divisor = 2;
  esPrimo = true;
  dividendo++;
} while (dividendo <= n);

document.write("<h4>BUCLE FOR:</h4>");
//Con el for repetimos lo mismo que con los whiles, pero de forma simplificada.
//Seguimos teniendo 2 bucles, pero sin tener que incrementar manualmente las variables.

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i && esPrimo; j++) {
    if (i % j == 0) {
      esPrimo = false;
    }
  }
  if (esPrimo) {
    document.write(i + " ");
  }
  esPrimo = true;
}
