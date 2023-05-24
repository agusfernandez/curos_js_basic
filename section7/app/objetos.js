var alumno = new Object();
alumno.nombre = "Mario";
alumno.apellido ="Marcos";
alumno.edad = 44;
alumno.empleado = "Profesor";
alumno.califaciones = [4,2,5,8,6,4];
alumno.direccion = {calle:"Rio Negro", num:55, ciudad: "Viedma"};

document.write("Nombre del alumno: "+ alumno.nombre +"<br>"+ "Apellido del alumno: "+alumno.apellido  +"<br>"+ "Edad del alumno: "+ alumno.edad + "<br>" + "El empleo del alumno: " + alumno.empleado +"<br>" + "Califaciones del alumno: " + alumno.califaciones +"<br>"+ "La direccion del alumno es: " + alumno.direccion.calle + " " + alumno.direccion.num + " " + alumno.direccion.ciudad  +"<br>" );

// Date
let dias = new Array("Domingo", "Lunes", "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sabado");
let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agusto", "Septiembre",  "Octubre", "Noviembre" , "Diciembre");

let date = new Date();
let today = date.getDay(); // te devuelve una "posicion"
let month_day = date.getDate();
let month = date.getMonth(); // te devuelve una "posicion"
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let mil = date.getMilliseconds();

document.write('hoy es ' + month_day + ' de ' + meses[month] + ' del año ' + year  + ' y es ' + dias[today] + " y son las " + hour + ':' +  min + ':' + sec  +':' + ('(' +mil + "mil)")  +"<br><br><br>");
console.log(month_day);

// Boolean

let alumnos = new Array ('')

let boolean = new Boolean(); // sin parametro por default es false
let boolean2 = new Boolean(true); // con parametro
let boolean3 = new Boolean(1); // con parametro // true
let boolean4 = new Boolean('Hola Mundo'); // con parametro string - lo convierte en boolean
let boolean5 = new Boolean(''); // con parametro
let boolean6 = new Boolean(0); // con parametro // false


document.write('Boolean dato uno: ' + boolean +"<br>");
document.write('Boolean dato dos: ' + boolean2 +"<br>");
document.write('Boolean dato tres: ' + boolean3 +"<br>");
document.write('Boolean dato cuatro: ' + boolean4 +"<br>");
document.write('Boolean dato quinto: ' + boolean5 +"<br>");
document.write('Boolean dato sexto: ' + boolean6 +"<br><br><br>");

// Objetc Math()

// Elegir de manera random un alumno

let gente = new Array ('Maria', 'Sofia', 'Marcos', 'Mariano', 'Paz', 'Mercedes');
let nuemerorandom = Math.random();
document.write('Numero aleatorio: ' + nuemerorandom +"<br>");
//genero un numero random con el array de gente
nuemerorandom = nuemerorandom * gente.length; // numerorandom *= gente.length
document.write('Numero aleatorio: ' + nuemerorandom +"<br>");
//necsito pasarlo a un entero 
// si elijo round -> decimal de 2.8 -> redondeo en 3
// si elijo floor -> decimal de 2 -> redondeo en 2 // uso este para usarlo para el posicionamineto del array
nuemerorandom = Math.floor(nuemerorandom); // redondeo el numero hacia le numero entero inferioir
document.write('Numero aleatorio: ' + nuemerorandom +"<br>");
document.write('El alumno elegido es: ' + gente[nuemerorandom] +"<br>") ;





