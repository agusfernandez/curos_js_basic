var num=5;
var num2=7;
console.log(num+num2);

var num= "6";
var num2= "6";
console.log(num+num2);

var num="6";
var num2=6;
console.log(num+num2);

// Number()
var num = Number("6"); // transforma el string en numero
var num2 = 6;
console.log(num+num2);

// Number()
var num = Number("seis"); // me da NaN porq no e un numero // aca cambia
var num2 = 6;
var total= num + num2;
console.log(total);

if(isNaN(total)){
    console.log("no es un numero");
}else{
    console.log("es un numero");
}

var num = Number("9"); // me da NaN porq no e un numero // aca cambia
var num2 = 6;
var total= num + num2;
console.log(total);

if(isNaN(total)){
    console.log("no es un numero");
}else{
    console.log("es un numero");
}

/***
 * 
 * Lowercase / Uppercase /length
 * 
 */

// tranformamos todo a lowercase para q entre en eñ true

var email = "agustinass@gmail.com";
var email2= "Agustinass@gmail.com";
var posicion = email2.indexOf("@");
console.log("posicion "+posicion);
var punto =email2.indexOf(".", posicion+1);
console.log("punto "+punto);

if(email== email2){
    console.log("Los mails coinciden");
}else{
    console.log("los emails no coinciden");
}

if(email.toLowerCase() == email2.toLowerCase()){
    console.log("Los mails coinciden");
}else{
    console.log("los emails no coinciden");
}

if(email.toUpperCase() == email2.toUpperCase()){
    console.log("Los mails coinciden");
}else{
    console.log("los emails no coinciden");
}

console.log("la longitud del mail de " + email + " es de: " + email.length );
if (email.length<20){
    console.log("es muy corta");
} else {
    console.log("esta bien de larga");
    if(email.toLowerCase() == email2.toLowerCase()){
        console.log("Los mails coinciden");
    }else{
        console.log("los emails no coinciden");
    }
}

/*****
 * 
 * indexOf() -> validacion de un email
 * 
 */

 if (email.length<20){
    console.log("la clave de acceso es muy corta");
    } else if(posicion == -1){
    console.log("el correo no tiene @");
    }
    else if(punto == -1){
        console.log("el correo debe tener un punto");

    }
    else if(!email.toLowerCase() == email2.toLowerCase()){
        console.log("los emails no coinciden aqui");
    }else{
        console.log("Los mails coinciden aqui");

}

/******
 * 
 *  subtr()
 * 
 *  usar el servicio del email
 */

 if (email.length<20){
    console.log("la clave de acceso es muy corta");
    } else if(posicion == -1){
    console.log("el correo no tiene @");
    }
    else if(punto == -1){
        console.log("el correo debe tener un punto");

    }
    else if(!email.toLowerCase() == email2.toLowerCase()){
        console.log("los emails no coinciden aqui");
    }else{
        let servicio= email2.slice(posicion + 1); // +1 significa un lugar despues de posicion(@)
        usuario= email2.substr(0, posicion).toLowerCase();  
        console.log("tu servicio es " +servicio);
        console.log("tu usuario de correo es " + usuario);
        console.log("Los mails coinciden aqui");
}

/*****
 * 
 * 
 *  charAt()
 *  validacion de caracteres
 */


function validar (array){
    var invalidos= "Ññ~!@#$%^&*()+={}|[]\:;<>,.?/</> ";
    var bandera= false;
    for(i=0; i<invalidos.length; i++){
        var cadena= invalidos.charAt(i);
        //vamos a buscar a los invalidos + si esto es dirente a -1 = si lo encontro. Si encuentra un solo valor entonces cortalo
        if(array.indexOf(cadena)!=-1){  
            bandera= true;
            break;
        }
    }
    return bandera;
}

if (email.length<20){
    console.log("la clave de acceso es muy corta");
    } else if(posicion == -1){
    console.log("el correo no tiene @");
    }
    else if(punto == -1){
        console.log("el correo debe tener un punto");

    }
    else if(validar(email2)){
        console.log("el correo tiene caracteres invalidos");
    }
    else if(!email.toLowerCase() == email2.toLowerCase()){
        console.log("los emails no coinciden aqui");
    }else{
        let servicio= email2.slice(posicion + 1).toLowerCase(); // +1 significa un lugar despues de posicion(@)
        usuario= email2.substr(0, posicion).toLowerCase();  
        console.log("tu servicio es " +servicio);
        console.log("tu usuario de correo es " + usuario);
        console.log("Los mails coinciden aqui");
}



/****
 * 
 * padStart();
 * padEnd();
 * 
 *
 * 
 ***/

let x="5";
var str="buenas";
document.write("lista de ceros al inicio " , x.padStart(5,"0"), "<br>");
document.write("lista de ceros al inicio " , x.padEnd(5,"0"), "<br>");
document.write("al pp va " , str.padStart(15,"."), "<br>");
document.write("al final va " , str.padEnd(15,"."), "<br>");
console.log(str.length);


/******
 * 
 * replace();
 * 
 *****/

var cadena="hola mis amigos, ¿como estan? espero q estamos BIEN";
var nuevaCadena= cadena.replace("amigos", "compañeros");
var cadena2=cadena.replace("bien", "joya"); // no distingue de las mayusculas
var cadena3=cadena.replace(/bien/i, "joya"); // expresion regular permite el remplazo /dsd/i
var cadena4= "hola mis amigos, ¿como estan? nos estamos yendo a la playa,  y la vamos a pasar bien en la playa";
var cadena5= cadena4.replace("playa", "campo"); // se reemplaza en la primera playa
var cadena6= cadena4.replace(/playa/g, "campo"); // se reemplaza en todas las palabras "playa"

document.write(nuevaCadena, '<br>');
document.write(cadena2, '<br>'); 
document.write(cadena3, '<br>'); 
document.write(cadena5, '<br>'); 
document.write(cadena6, '<br>'); 