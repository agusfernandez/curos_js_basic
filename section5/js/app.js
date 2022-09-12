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

/*****
 * 
 * 
 * funcion anidada
 * 
 * 
 */

function sumaCuadrado(a,b){
    function cuadrado(x){
        return x*x + a;
    }
    return cuadrado(a) + cuadrado(b);
}

console.log(sumaCuadrado(4,2));

/******
 * 
 * 
 *  arguments 
 * 
 */

function argumentSuma(){
    var total =0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];      
    }

    return total;
}

console.log("argumento " + argumentSuma(1));
console.log("argumento " + argumentSuma(5,7,3,9,2));
console.log("argumento " + argumentSuma(2,3,4,5,6,7,8,9,10));

function unirArgumentos(separador){
    var cadena="";
    for (let index = 1; index < arguments.length; index++) {
        cadena += arguments[index];   
        if(index<arguments.length-1){
            cadena += separador + "";
        }  //si es el ultimo elemento
    }
    return cadena;
}

console.log("cadena de nombres" + unirArgumentos(","," Agus", "Pepito", " Perez"));

/****
 * 
 * 
 * variables definidas antes
 * 
 * 
 * 
 */

/*todos los parametros que no estan definidos esntonces so  undefined */
function antesDeEcma2015(a, b){
    // indicar b con un valor
    b = typeof b!= 'undefined' ? b :1; // si nos pasa b entonces va a ser 1
    return a * b;
}

// es una forma de validar de que si no paso un argumento 
console.log("antes del ecma " +antesDeEcma2015(3)); // no me da undefined por la validacion
console.log("antes del ecma " +antesDeEcma2015(3, 5));

// no necesita la validacion
function despuesDeEcma2015(a, b =1){
    return a * b;
}

console.log("despues del ecma " +despuesDeEcma2015(8)); // no me da undefined por la validacion
console.log("despues del ecma " +despuesDeEcma2015(10, 5));


// antes
var x= function(a){
 return a;
}
console.log(x("hola"));

//arrow function ( si hjay u solo parametro no hace falta parentesis)
var y = a => a;
console.log(y("Chau"));
var z= (a,b) => a + " " + b;
console.log(z("hola", "pepito"));

//sin parametros
var c = () => "hola cara de bola";
console.log(c());

//llamar funcion desde otra funcion

setTimeout(()=>alert("buenardas", 6000));

var ejemplo= ()=>{
    a="hola";
    b="cara de bola";
    alert(a+" "+b);
}
ejemplo();

/*******
 * 
 *  valores por default
 * 
 */

function multiplicar(a,b=1){
    return a*b;
}
console.log(5);

function f(x,y=7,z=42){
    return x+y+z;
}

console.log(f(1)); // me da 50

function cambiarColor(elemento, color="yellow"){
    var cuadro =document.getElementById(elemento);
    cuadro.style.backgroundColor=color;
}

window.onload= function(){
    //cambiarColor("cuadro");
    cambiarColor("cuadro", "blue");
}

function agregar (valor, array=[]){
    array.push(valor);
    return array;
}
console.log(agregar(2));
console.log(agregar(7));

function j(x=1, y){
    return [x,y];
}
console.log("j: " +j());


/**
 * 
 * 
 *  Function reversa
 *  
 * 
 * 
 * 
 * */

function reversa(str){
    if(str.length ==1) return str;
    return reversa(str.slice(1))+ str[0];
}

window.onload = function(){
    document.getElementById("revertir").addEventListener("click", function(){
        var cadena=document.getElementById("frase-input").value;
        document.getElementById("frase-reversa").value=reversa(cadena);
    }, false);
}
