## Section2 Variables
### Introduccion de variables y tipos de datos
nombre de variable es importante para que el compilador pueda rescatar los getters ("sacar info") y los setters ("poner info")
fruta -> datos relacionados a la fruta
Asignacion (con simbolo igual) -> asignacion de valores
"una literal" lo difinimos como algo que no cambia en el transcurso del programa

```
var nombre;
var apellidoDeUnaCosa;
var numero12;
```
```
// no declarar en estos casos
var 1nombre; // un numero adelante
var entrada datos; //nombre separados
var new; // palabra reservada de js
var while; // palabra reservada de js
```

```
// interpreta diferente
var nombre;
var Nombre;
```

### Tipos de datos en javascript
```
3 tipos de variables basicos //almacenar un dato a la vez
- variable de cadenas: enunciados
- variables numericos: numero
- variable booleanos: true o false
```
```
2 tipos de variables compuestos
- Arrays o arreglos/ matrices /vectores
- Objetos
```
```
tipos de varibles especiales
- undefinied -> valor que no ha sido inicializado /  que no esta definida
- null -> se utilizan para comprobar si a una variable se le ha asignado un valor o no. Representa un valor nulo para cualquier tipo de variable.
```
lenguaje "debilmente" tipado porque uno podemos asignar un numero y despues asignarlo otro valor.

### Tipos de datos numericos
numeros enteros o decimales (enteros o negativos) o de "coma flotante"
se puede manejar numeros con base 8 // octales o base 1& // hexadecimales

### Cadenas o strings
una variable de cadenas contiene texto

### tipo boolean
false o true

### propiedades let y const
let ->  significa que una variable estara definida en un bloque particular y al terminar dejara de existir y permite alterar el resultado
const -> nos permite haer una constante

### strings
template literales
```
var n= "esto es un ${numero}"
```
### datos lineles, octales y binares -> decimales
```
base 2 (binario)
binario-> 0b
base 8 (octal)
octal -> 0O
```
### simbolos  // Symbol Type
son un tipo de dato primitivo + lo simbolos son unicos e inmutables como identificadores para propiedades de objeto (identificadores)
```
symbol -> no se utlizar con new ejemplo: no se dice "new symbol"
aunque un simbolo tenga la misma descripcion entonces es un falso
Symbol('foo')=== Symbol('foo'); // false
```
sino tiene descripcion me va a tirar un error de Type Error

### Operadores matematicos
conjunto de operaciones -> expresiones regulares
los operadores aritmeticos tendran diferentes importancia, y lo que este dendto de las parentesis

### Operadores de comparacion
son los clasicos mayores que y menores que
comparar dos valores
10 == "10" -> true porque lo convierte -> hace la conversion implicita
10 === "10" -> false // tiene que ser estrictamente igualesm -> no hace la conversion implicita

### Operadores Lógicos
Nos permiten hacer mas de una pregunta a la vez, que devuelve un verdadero o falso
```
&& 
||
```

### Operadores Unarios o atajos
forma de escribir mas facilmente
```
a= a+ 10; -> a+=10;
a = a+1; -> a++;
a = a-1 -> a--;
```

### Palabras reservadas
Hay palabras reservadas que no hay que usar en una funcion o en variables sino te da un error de sintaxis

### Manejo de espacios en blanco
los espacios pueden dar legibilidad pero pueden afectar a la performance. se recomienda no usar tantos espacios en blanco y sino usar una compression ej: jscompress.com
codigo claro es el objetivo

### Operadores de bits
cada operador bit a bit, trata a sus operadores como un conjunto de 32 bits (numeros entre ceros y unos que llegan a 32 "lugares") en lugar de valores hexadecimales o decimales 

```
& valor1 & valor2
|| valor1 || valor2
```
### Operador typeof
el operador typeof devuelve una cadena que describe que tipo de dato es el que se consulta, y nos puede devovler una variable, cadena o metodo

### Operador Exponenciacion
```
(**) = Math.pow()
```

## Section3 Condiciones
### Sentencias Condicionales
```
if(condicion){
    true
}
```

### Sentencias else
cumple con la condicion false;

### Condicionales Operadores Logicos
```
if(condicion && condicion2){

}else{

}
```
Metodologia kiss -> mantener las cosas sencillas

### Switch // estructura condicional

solo si tenes una sola variable y evaluar los posibles resultados //preguntar una sola variable
```
switch(condicion ó variable){
    case nombrecase:
        condicion
        break;
    case nombrevase2
        condicion
        break;
    default:
         condicion
        break;
       
}
```

### sentencia break

la sentencia break rompe la estructura switch y sigue con el siguiente. 

### operador condicional -> operacion ternaria

```
(opcion) ? verdadero : falso;

```

cuando tenemos una sola instruccion )que lo podemos usar sin llaves
```
if(condicion) verdadero
```

## Seccion4 Bucles

### Bucles o Ciclos
while -> primero se pregunta y luego ejecuta + iteracion // lo usamos cuando no sabemos el numero de iteraciones 

```
while (condicion){

}
```

do-while ->  se ejecuta la iteracion y se pregunta

```
do{

}while()

```

for -> sabemos la iteracion

```
for(var i=0; i<length; i++)

```

ciclos break and continue -> podemos utilizar el break para corta el ciclo y continue para repetirlo sin ejecutar las instrucciones inferiores // continue -> se repite la interacion y no corta // funciona mejor en ua condicion  

## Section5 Functions

### funciones
nos permite dividir el codigo en tramas y nos permite duplicar codigo cuando lo podemos llamar.

### parametros en las funciones
```
let mensaje = "hola";
function peput(mensaje){
 console.log(mensaje);
}
peput();

```

### valor return
el return solo devuelve un solo valor que ocupa donde se esta llamando la funcion
function-> portabilidad

### scope de variables // funciones variables
usar el var dentro de una funcion > variable  local
cuando se define fuera de una funcion y puede ser vista por cualqueir funcion> variable global. No modificar las variables globales, dentro de una funcion ya que afecta a la modularidad
Diseño de cajas negras -> basura entra, basura sale
----nunca hay que modificar una variable global desde una funcion----

### funciones recursivas
la recursividad es una funcion que se puede llamar asi misma + importante agregar un condicional dentro de esa recursiva porque sino se puede ciclar

### funciones anidadas
es una funcion dentro de otra funcion
funcion contenedora
funcion interna -> accededidas en la funcion contenedora /scope + acceder a los recursos / parametros de la funcion contenedora

### objeto arguments
podemos pasar una gran cantidad de argumentos en nuestra funcion
```
arguments[i]
arguments.length
```
### parametros por default ECMA2016
se validan los parametros de los variables como undifinied a traves de una validacion
// diferentes formas de validacion de un valor

### Funciones anonimas > fat arrow
simplificar la funcion
```
var y = a => a;
console.log(y("Chau"));
```

sin parametros
```
var c = () => "hola cara de bola";
console.log(c());

setTimeout(()=>alert("buenardas", 1000));

```

### valores de argumentos
```
function multiplicar(a,b=1){
    return a*b;
}
console.log(5);


function cambiarColor(elemento, color="yellow"){
    elemento.style.backgrounColor=color;
}

cambiarColor(algun div);

```

## Section6 Concatenacion

### Cadenas

- conversion -> es cambiar el tipo de dato de una variable
- concatenacion -> union (+) de cadenas y numeros
- NaN / not a number
- isNaN() ->funcion q determina el valor si es numerico o no e intenta convertilos  a numero
- Number() -> convierte una cadena(string) en un numero

```
if(isNaN(total)){
    console.log("no es un numero");
}else{
    console.log("es un numero");
}
```

### convertir las cadenas a mayusculas y minusculas

- length->te indica la cantidad de variables // es una propiedad ...no un metodo
- toLowerCase();->se pueden hacer comparaciones mas alla de convertirlos en mnusculas o mayusculas
- toUpperCase();
- indexOf(); -> buscar una subcadena en una cadena // inicializa en 0 // si devielve 0 no quiere decir q no lo encontro sino q esta en el primer caracter pero si no lo encuentra entonces daria un -1 // sensible con mayusculas y minusculas + le podemos indicar desde donde arranque

```
cadena.indexOf(valorBusqueda[, indiceDesde]);
```
- slice() -> devuelve una copia exacta del array
- substr() -> divide un array en un punto determinado // 0 es el punto inicial
```
email.subtr(0,posicion); 
```
- charAt(); -> regresa un caracter(i) // permite validar en un correo q no tenga caracteres raros + los valores que no son aptos para un correo
- padStart(); -> cuidado con la compatibilidad (navegadores modernos)-> relleba al pp de un array
- padEnd(); -> rellena al final de un array
```
var x= "5";
x.padStart(5,"0"); // el priemero es la cantidad de caracteres en total / el segundo es con que lo rellenas
x.padEnd(5,"0");
```
- replace() -> genera una nueva cadena / no modifica la que estamos remplazando (la original)+ cuidado con las mayusculas y minusculas
```
var cadena="hola mis amigos, ¿como estan? espero q estamos bien";
var nuevaCadena= cadena.replace("amigos", "compañeros");
var cadena3=cadena.replace(/bien/i, "joya"); -> bandera i // si hayy mayusculas o minsculas
var cadena6= cadena4.replace(/playa/g, "campo"); -> bandera g // reemplazar mas de una ocurrencia
```
- trim() = limpia los valores en blanco del formulario
- concat() = concatenacion de las cadenas
- split() = conversion de strings a arrays

- los templates de cadenas o back-ticks -> son las comillas "diagonales" se pueden hacer expresiones
```
${``}
```

## Section7 Arreglos y Objetos
### Colecciones de Arreglos y Objetos
array = arreglos / vectores

variable = una pequeña caja que queda en la memoria de la computadora
```
// variable asociada
var array= new Array();
var array2= [];

// vamos a poblar un array
array[0]="Lunes";
array[1]="Martes";

```

### Poblar y Barrer un arreglo
introducir datos en un objeto = "poblar"
recorrer el arreglo = "barrer"

recorrer = for / for ...in
arreglar = push()

```
 arreglos por referencia
 months["enero"] = 4822; 

 for (alumnos in months) {
    document.write("Alumnos inscriptos en el mes de " + alumnos + " es de " + months[alumnos] + "<br>");
}

```

### Metodos para manipular arrays

-shift -> extrae el primer elemento del array
-pop -> elimina el ultimo elementos
-unshift -> agrega el primer elmento del array
-splice -> extraer los elementos a partir de un elemento n
-join -> union de un array por medio de un separador
```
document.write("Los jugadores por orden alfabetico: "  + jugadores.sort() + "<br/> <br/>");
jugadores.push("Lisa", "Agus");

```

### Objetos (arrays)
varibles agregadas // objeto q tenga arrays o funciones etc

```

var alumno = new Object();
alumno.nombre = "Mario";
alumno.apellido ="Marcos";
alumno.edad = 44;
alumno.empleado = "Profesor";
alumno.califaciones = [4,2,5,8,6,4];
alumno.direccion = {calle:"Rio Negro", num:55, ciudad: "Viedma"};

document.write("Nombre del alumno: "+ alumno.nombre +"<br>"+ "Apellido del alumno: "+alumno.apellido  +"<br>"+ "Edad del alumno: "+ alumno.edad+ "El empleo del alumno: " + alumno.empleado + "Califaciones del alumno: " + alumno.califaciones + "La direccion del alumno es: " + alumno.direccion.calle + " " + alumno.direccion.num + " " + alumno.direccion.ciudad);

```

### Objeto Date

newDate();
getDate() -> traeme el dato // la info pp viene de la compu (por ejemplo que dia de hoy es )
getDay() // te devuelve una "posicion"
getHours()
getMinutes()
getMonth() // te devuelve una "posicion"
getSecond()
getTime()
getTimeZoneoofset()
getYear()


setDate(valor) -> seteo el dato // toma el dato inicial de la computadoa y no del servidor
setHours(valor)
setMinutes(valor)
setMonth(valor)
setSeconds(valor)
setTime(valor)
setYear(valor)


```

let date = new Date();
let today = date.getDay();


```
### Objeto Boolean

convertir objetos no booleanos en booleanos

Boolean()

```

let boolean2 = new Boolean(true)

```

### Objeto Math
Tiene propiedades y metodos que representan constantes y funciones matematicas // constants qye se utilizan dentro de los calculos matematicos 

propiedades del objeto Math

E = constante de Euler o numero e 
LN2 = logaritmo de 2
LN10 = logaritmo de 10
LOG2E = Logaritmo de e en base 2
LOG10E = Logaritmo de e en base 10
PI = Numero PI
SQRT1_2 = Raiz cuadrada de 0.5
SQRT2 = Raiz cuadrada de 2

metodos como 

round(n)
rand0m(n)
sqrt(n)
ceil(n)
etccc....

```
let numerorandom = Math.random();
let nuemroredondo = Math.round();

```
