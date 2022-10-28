"use strict";
//Examina el siguiente código:
const cumple = '18.04.1982';
const age = someCode(cumple);

/*Aquí tenemos una constante cumple para la fecha de cumpleaños, y la edad age, que 
también es constante.
age es calculada desde cumple con la ayuda de “cierto código” someCode(), que es una 
llamada a función que no hemos explicado aún (¡lo haremos pronto!); los detalles no 
importan aquí, el punto es que age se calcula de alguna forma basándose en cumple. 

1. ¿Sería correcto usar mayúsculas en cumple? ¿Y en age? ¿O en ambos?
const CUMPLE = '18.04.1982'; // ¿cumple en mayúsculas?
const AGE = someCode(CUMPLE); // ¿age en mayúsculas? 

JavaScript nombra las constantes de la misma manera que las variables. Se escriben en 
mayúsculas cuando el valor de dicha constante es difícil de recordar, es invariable y 
preeestablecido. Por ejemplo, un color. Antes de iniciar el programa ya se sabe su código 
y que nunca va a cambiar en tiempo de ejecución. 

Yo en el caso de cumpleaños y edad no utilizaría esta práctica. Tanto la fecha de nacimiento
como la edad son constantes que se van a guardar cuando se soliciten datos. No se conocen 
antes de iniciar el programa. 

De todas formas, podría justificarse su uso dado que el estándar en programación es escribir
las constantes en mayúsculas. 
*/


