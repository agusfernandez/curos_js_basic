var nombre= "Batman";
nombre = 8;
nombre = true;
alert (nombre);

/* 
******tipo numerico********* 
*/

var edad= 30;
var calificacion= 8;
var costo= 50.30;
var descuento = -5;

//octales 0-7
var octal = 0574325;
//el objeto alert lo va a convertir en decimal //conversion
alert ("octal " + octal);

//hexadecimal 0-8 y a-f y tmb lo convierte
var rojo= 0xff;
alert ("hexadecimal " + rojo);

/* 
******tipo cadena********* 
*/

var saludo ="Hola  wordwss";
var despedida = 'nos vimos';
var refran ="hola esto es un 'refran'";
alert (refran);


/* 
******tipo boolean********* 
*/

var tengoDinero = false;

if (tengoDinero){
    alert("yendo al cine");
} else {
    alert ("fin de mes");
}

/* 
******propiedades********* 
*/

function test (){
    if(true){
        let x=35;
        console.log(x);
    }
    //console.log(x); // me da un undefined porque esta definida dentro del if
}

test();

/* 
****** dato numerico ********* 
*/

const y = 20;
console.log(y);
//y = 33;
//console.log(y);  -> no se puede modificar este dato


/* 
****** string ********* 
*/

var datos = 99;
var dato= `aca estan los ${datos}`;
console.log(dato);

var nombre ="Pedro";
var edad= 33;
var oracion = `su nombre es ${nombre} y tiene ${edad} años`;
console.log(oracion);

/* 
****** literales, binarios y octales ********* 
*/

var binario = 0b111110111;
console.log(binario);
var octal = 0o767;
console.log(octal);

/* 
****** Symbol - tipo de datos primitivos symbol // simbolos ********* 
*/

var sim1= Symbol();
var sim2= Symbol("foo");
console.log(typeof sim2);
var sim3= Symbol("foo");
console.log(typeof sim3);
console.log(Symbol("foo") === Symbol("foo"));
var sim4= Object(sim3);
console.log(typeof sim4);
console.log(sim4);

/***********+++++++++++**********/

const foo= Symbol("este simbolo es foo");
const env= Symbol("este simbolo en env");
//var obj={};
var obj={
    firstName: 'John',
    lastName: 'Doe'
};
obj[foo] = "foo";
obj[env] = "env";

console.log("JSON" + JSON.stringify(obj)); //
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

/***********+++++++++++**********/

const COLOR_ROSA= Symbol("rosa");
const COLOR_AZUL= Symbol("azul");
const COLOR_VIOLETA= Symbol("violeta");
const COLOR_NEGRO= Symbol("negro");

function complemento (color){
    switch(color){
        case COLOR_ROSA:
            return COLOR_AZUL;
        case COLOR_VIOLETA:
            return COLOR_ROSA;
        case COLOR_AZUL:
            return COLOR_NEGRO;
        case COLOR_NEGRO:
            return COLOR_ROSA;
        default:
            throw new Exception('Unknown color' + color);
    }
}

console.log(complemento((COLOR_ROSA)));