/******
 * 
 * 
 * IF
 * 
 * 
 */


//var edad= 18;
var edad = prompt('Ingrese su edad');
if(edad > 18){
    alert("bienvenido MAYOR DE EDAD");
} else{
    alert("eres nene");
}

/******
 * 
 * 
 * ELSE
 * 
 * 
 */

let happy= true;
if(!happy==true){
    alert("no estoy contento");
}else{
    alert("estoy contento");
}

/******
 * 
 * 
 * condicionales logicos
 * 
 * 
 */

let money= true;
let car=true;
let friend= "Marta";

if(money && car && friend=="Lola"){
    alert('voy al teatro');
}else if(!money && car && friend=="Lola"){
    alert('vamos al cine');
}else if(!money && !car && friend=="Lola"){
    alert('me quedo en casita');
}else if(!money && !car && friend=="Marta"){
    alert('hagamos pijamada');
}else if(!money && car && friend=="Marta"){
    alert('vayamos al parque');
}else if(money && car && friend=="Marta"){
    alert('salgamos de joda');
}else{
    alert('re fin de mes');
}


/******
 * 
 * 
 * Switch
 * 
 * 
*/

var estadoCivil = "soltero";
var mensaje= "bienvenido al caaaribe ";
var mensaje2= "";
var mensaje3 ="fin";

switch(estadoCivil){
    case "soltero":
        mensaje2= "me la doy en la pera";
        break;
    case "casado":
        mensaje2 = "suerte con esa";
        break;
    case "divorciado":
        mensaje2 = "round 2";
        break;
    case "viudo":
        mensaje2 = "el amor lo es todo";
        break;
    default:
        mensaje2 = "sos pobre";
        break;
}

document.write(mensaje + mensaje2 + mensaje3);