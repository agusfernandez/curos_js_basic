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

var email = "agustina@gmail.com";
var email2= "Agustina@gmail.com";

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