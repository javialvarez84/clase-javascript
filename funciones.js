// funciones

/* function mayorDeDosNumeros(ingresoUno, ingresoDos){
if(ingresoUno > ingresoDos){
    console.log(ingresoUno + " Es mayor que " + ingresoDos)
} else {
    console.log(ingresoDos + " Es mayor que " + ingresoUno)
}
}

mayorDeDosNumeros(40, 391) */


let mensaje = "Hola clase de JavaScript Ada School";

console.log(mensaje.length);



function constainsWord(mensaje, texto) {
const resultado = mensaje.indexOf("clase");

if(resultado){
    console.log("La palabra " + texto + " se encuentra en el mensaje ")
}

console.log(resultado)
console.log(texto)

}

constainsWord("Hola clase de JavaScript Ada School" , "clase")