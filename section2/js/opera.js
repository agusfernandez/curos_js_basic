/*+++++ +++++++++

operadores matematicos

++++++++++++++++++++
*/

var calculo = 10 + 5*2 + 3;
console.log(calculo);
var calculo2 =  10 + (5*2) + 3;
console.log(calculo2);
var a = 2;
var b = 8;
var c= 3;
var calculo3 = a + b + (a*b);
console.log(calculo3);
var par = a%2;
console.log(par);
var impar = c%2;
console.log(impar);

/*+++++ +++++++++

operadores de comparacion

++++++++++++++++++++
*/

console.log(10 == 10);
console.log(10 == '10');
console.log(10 === '10');
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 != 10);
console.log(10 != 11);
console.log(10 !== '10');
if(10!="10"){
    console.log("10 es diferente a '10' ");
} else {
    console.log("not");
}

/*+++++ +++++++++

operadores logicos

++++++++++++++++++++
*/

var tengoDinero = true;
var tengoTiempo = false;

console.log(tengoDinero && tengoTiempo);
console.log(tengoDinero || tengoTiempo);

/*+++++ +++++++++

operadores unarios o atajos

++++++++++++++++++++
*/

var a=10;
a+=10;
console.log(a);
a-=30;
console.log(a);
a*=3;
console.log(a);
a/=4;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);

/* Operadores bits */

var a=5; // -> valor decimal: 32 bits
var b=6;
console.log(a&b);
console.log(a|b);

/*******
 * 
 * 
 * Typeof
 * 
 * 
 */

let cadena="soy una cadena";
let edad =40;
let date = new Date();
let nombres = new Array();
let active = true;

document.write("cadena: "+typeof(cadena) +'<br>');
document.write("edad: "+typeof(edad) +'<br>');
document.write("fecha: "+typeof(date) +'<br>');
document.write("nombres: "+typeof(nombres) +'<br>');
document.write("active: "+typeof(active)+'<br>');

/*******
 * 
 * 
 * Operador de Exponenciacion
 * 
 * 
 */

var expo=6;
document.write("exponencial ",expo**2 , '<br>');
expo **=3;
document.write("exponencial al tercero" + expo + '<br>');
