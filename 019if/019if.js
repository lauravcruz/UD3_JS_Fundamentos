"use strict";

/*019if.js/.html: ¿Cuáles de estos alerts va a ejecutarse? ¿Cuáles serán los resultados de 
las expresiones dentro de if(...)?*/

if (-1 || 0) alert( "primero" ); 
// El primer valor verdadero es -1 (true) ejecuta la alerta

if (-1 && 0) alert( "segundo" );
//No se ejecuta porque el primer valor es verdadero y el segundo falso. Por tanto, es false

if (null || -1 && 1) alert( "tercero" );
//De -1 && 1 sale true porque ambos son verdaderos. 
//Al haber una expresión true, el OR se queda con ella y ejecuta el alert


