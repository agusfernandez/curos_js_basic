var alumno = new Object();
alumno.nombre = "Mario";
alumno.apellido ="Marcos";
alumno.edad = 44;
alumno.empleado = "Profesor";
alumno.califaciones = [4,2,5,8,6,4];
alumno.direccion = {calle:"Rio Negro", num:55, ciudad: "Viedma"};

document.write("Nombre del alumno: "+ alumno.nombre +"<br>"+ "Apellido del alumno: "+alumno.apellido  +"<br>"+ "Edad del alumno: "+ alumno.edad+ "El empleo del alumno: " + alumno.empleado + "Califaciones del alumno: " + alumno.califaciones + "La direccion del alumno es: " + alumno.direccion.calle + " " + alumno.direccion.num + " " + alumno.direccion.ciudad);