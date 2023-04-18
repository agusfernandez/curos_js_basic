// Arrays
console.log("arreglos");

var days= new Array();
var months= [];

// vamos a poblar un array
days[0]= "Lunes";
days[1]= "Martes";
days[2]= "Miercoles";
days[3]= "Jueves";
days[4]= "Viernes";
days[5]= "Sabado";
days[6]= "Domingo";
document.write(days[0]+ "<br>");

for (let index = 0; index < days.length; index++) {
    document.write(days[index] + "<br>");
    
}

// arrays por referencia o asociados

//en enero hubo 4822 alumnnis
months["enero"] = 4822; 
months["febrero"] = 48224343; 
months["marzo"] = 434342; 

document.write("almunos inscriptos en enero son " + months["febrero"] + "<br>");

for (alumnos in months) {
    document.write("Alumnos inscriptos en el mes de " + alumnos + " es de " + months[alumnos] + "<br>");
}

var jugadores = new Array("Jose", "Mariana", "Pepita");
jugadores.push("Monica");
for(var i=0 ; i<=jugadores.length ; i++){
    document.write(jugadores[i] + '<br>');  
}

//metodos para manipular arrays

//sort()

document.write("Los jugadores por orden alfabetico: "  + jugadores.sort() + "<br/> <br/>");
jugadores.push("Lisa", "Agus");

//reverse()
document.write("Los jugadores por orden no alfabetico: "  + jugadores.reverse() + "<br/> <br/>");

//pop() // elimina el ultimo elmento y depsues podemos recuperarlo
var ultimojugador = jugadores.pop();
document.write("la lista nueva de juadores es: "  + jugadores + "<br/> <br/>");
document.write("el jugador expulsados es " + ultimojugador +"<br/> <br/>" );

//unshift > agrego elmento al pp de array
jugadores.unshift("Marcos");
document.write("la nueva lista es " + jugadores +"<br/> <br/>" );

//shift -> extrae el ultimo elemento y lo podemos usar
var primerpuesto = jugadores.shift();
document.write("la lista final es " + jugadores +"<br/> <br/>" );
document.write("el que salio primero es " + primerpuesto +"<br/> <br/>" );

//Splice -> eliminar elementos desde un elemento n
var expulsados = jugadores.splice(2,3, "Cristiano", "Javier");
document.write("la lista final es " + jugadores +"<br/> <br/>" );

document.write ("la nueva lista  de jugadores " + jugadores.join(" * "));

