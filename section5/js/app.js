function saludo(){
    alert("hola buenas bienvenido!!");
}

//ejecucion

saludo();

let nombre =prompt("Ingrese su nombre");
let mensaje =" un placer conocerte"
function saludos2(persona , mensaje){
    document.write("hola mi nombre es " + persona + mensaje + '<br>');
}
saludos2(nombre , mensaje);


/***
 * 
 * function return
 * 
 */

let names = prompt("Ingrese su nombre");
function saludotres(name, mensaje3){
    //document.write("buen dia" + name + " " + mensaje3);
    let salida = "buen dia" + name + " " + mensaje3;
    return salida;
}
document.write(saludotres(names,"buen dia" ));