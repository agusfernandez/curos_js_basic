function saludo(){
    alert("hola buenas bienvenido!!");
}

//ejecucion

saludo();

let nombre =prompt("Ingrese su nombre");
let mensaje =" un placer conocerte"
function saludos2(persona , mensaje){
    document.write("hola mi nombre es " + persona + mensaje + '<br>');
}
saludos2(nombre , mensaje);


/***
 * 
 * function return
 * 
 */

let names = prompt("Ingrese su nombre");
function saludotres(name, mensaje3){
    //document.write("buen dia" + name + " " + mensaje3);
    let salida = "buen dia" + name + " " + mensaje3;
    return salida;
}
document.write(saludotres(names,"buen dia <br>"));

/***
 * 
 * scope local y scope global // funciones variables
 * 
 */

// variables globales

var importe= 10000;
var impuesto = .16;
var total =0;
function calcularImpuesto(importe, impuesto){
    var total= importe * (1+impuesto);
    return total;
}

document.write("el valor antes de la funcion es de " + total + "<br>");
document.write("el valor calculado esde " + calcularImpuesto(importe, impuesto)+ "<br>");
document.write("el valor de la funcion total es de " + total +"<br>");


/****
 * 
 * 
 * Funcion recursiva
 * 
 */


function factorial(n){
    if((n===0) || (n===1)){
        return 1;
    }else{
        return (n*factorial(n-1));
    }
}

console.log(5, factorial(5));
console.log(8, factorial(8));
console.log(2, factorial(2));
console.log(19, factorial(19));

// entrada y validacion del factorial

window.onload = function(){
    document.getElementById("calcular").addEventListener("click", function(){
        let n =   document.getElementById("numero").value; //queremos su valor;
        n=Math.abs(parseInt(n));
        if(isNaN(n)||n>100){
            return;
        }
        let facto= factorial(n);
        salida=n.toString()+ "=" + facto;
        document.getElementById("salida").innerHTML=salida;
    });
}