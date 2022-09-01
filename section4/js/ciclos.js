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
document.write('valor final es '+ ini)


/*****
 * 
 * 
 * break and continue
 * 
 * 
 */