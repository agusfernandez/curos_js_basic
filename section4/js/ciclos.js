/*****
 * 
 * 
 * while
 * 
 * 
 */
//valor inicial
let i = 0;
while (i<=10){
   document.write ( i + '<br>');
   i++;
}

document.write ('fin del ciclo ' + i + '<br>');



/*****
 * 
 * 
 * do while
 * 
 * 
 */
let clave="";
let intentos= 0;
do{
    clave= prompt("Escribe tu clave de acceso");
    intentos++;
    if(intentos>3){
        alert("lo sentimos pero hasta aca");
        break;
    }
} while (clave!="007")
if(clave == "007"){
    document.write ("bienvenido 007");

}

// su la clave no es igual a 007 entonces se queda en un loop hasta que se ponga la clave correcta

/*****
 * 
 * 
 * for
 * 
 * 
 */

for(var ini = 0; ini<10 ; ini++){
    document.write(ini + "<br>");
}
document.write('valor final es '+ ini + '<br>');


/*****
 * 
 * 
 * break and continue
 * 
 * 
 */

// continue

for(var index=0; index<=10;index++){
    if(index%2==1){
        continue;
        // cada vez q sea impar se va a regresar y solo imprimira los pares
    }
    document.write("el valor de i es " + index + '<br>');
}

//break

let numero = 0;
let magico = 7;
let pruebas=0;

while(numero!=magico){
    numero = prompt("Adivina el numero magico entre el 0 al 10");
    if(numero == magico){
        // si acierta joya
        alert("El " + magico + " es el numero magico");
        break;
    }
    pruebas ++;
    if(pruebas ==3){
        alert("El numero de intentos ha llegado a su fin");
        break;
    }
    
}
