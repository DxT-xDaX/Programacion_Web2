let frutas = ["manzana","pera","fresa","uva"];
/*
console.log(frutas);

console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[5]);

for(let i = 0; i<=frutas.length; i++){
    console.log(frutas[i]); 
}
console.log("Termino el programa");
*/

/*
// for of para sacar elementos
for(let fruta of frutas){
    console.log(fruta);
    
}

// for in para sacar indices
for(let fruta in frutas){
    console.log(fruta);
}
*/

/*
function saludar(nombreUsuario){
    console.log("Hola como estas " + nombreUsuario);
    
}

saludar("Victorelnoob");
*/

/*
function sumar(n1,n2){
    let resultado = parseInt(n1) + parseInt (n2);
    return resultado;
}

function restar(n1,n2){
    let resultado = parseInt(n1) - parseInt (n2);
    return resultado;
}

function multi(n1,n2){
    let resultado = parseInt(n1) * parseInt (n2);
    return resultado;
}

var numero1 = prompt("Numero 1:");
var numero2 = prompt("Numero 2:");

let resultadoSuma = sumar(numero1,numero2);
console.log("El resultado es: " +resultadoSuma);
let resultadoResta = restar(numero1,numero2);
console.log("El resultado es: " +resultadoResta);
let resultadoMulti = multi(numero1,numero2);
console.log("El resultado es: " +resultadoMulti);
*/

/*
let mensaje = "Huron Marron";
console.log("Hola como estas \n Huron Marron \n c:");
console.log(`
Hola como estas 
${mensaje}
c:    
    `);
*/

/*
let nombre = "Axel";
console.log(`Hola como estas: ${nombre.toLocaleUpperCase()}`);
*/

//Equisdax
let user = "Axel";
let compuerta = false;

console.log(`
    ${compuerta ? 'Ingresa':'A fuera'} ${user}
    `);
