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

var email = "agustinadsdsadasdsadasdasgmail.com";
var email2= "agustinadsdsadasdsadasd@asgmail.com";
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
if (email.length<=20){
    console.log("esta bn de largo");
} else {
    console.log("esta muy larga");
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
    console.log("esta bn de largo0000");
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