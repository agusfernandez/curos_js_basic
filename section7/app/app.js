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

months["enero"] = 4822; 
months["febrero"] = 48224343; 
months["marzo"] = 434342; 

document.write("almunos inscriptos en enero son " + months["febrero"] + "<br>");

for (alumnos in months) {
    document.write("Alumnos inscriptos en el mes de " + alumnos + " es de " + months[alumnos] + "<br>");
}