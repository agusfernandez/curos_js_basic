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

## Seccion 4 - Bucles

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