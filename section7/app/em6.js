// ES6 

let x= 3;
let y = 20;

obj = {x,y};
console.log (obj.x , obj.y);

/// metodo assign

let objecto = {a:1 , b:8};
let objecto2 = {b:2};
let objecto3 = {c:3};

let objecto4 = Object.assign(objecto, objecto2, objecto3);
console.log(objecto4);


//maps y sets

/// sets

let set = new Set();
set.add('hola').add('como va').add('hola');
console.log(set.size ===2); //length -> true
console.log(set.has('agustina')); //> false

/// maps
let map = new Map();
map.set('hola', 42); //asigno la llave 'hola' con valor 42
map.set('como va', 20); //asigno la llave 'com va' con valor 20
//obtener el valor asociado a la llave
console.log(map.get('hola')); // me devuelve el 42
console.log(map.get('como va')); // me devuelve el 20