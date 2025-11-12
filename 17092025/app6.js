/*
function suma(n1,n2)
{
    return parseInt(n1) + parseInt(n2);

}

let numeroUno = prompt("Imgresa numero 1"); 
let numeroDos = prompt("Ingresa numero 2");
let resultado = suma(numeroUno,numeroDos);
alert(resultado);
*/

/*
var nombreusuario = "Aaron";
console.log("Tu nombre es: \n"+nombreusuario+"\n");

var nombreUsuario="Yenni";
console.log(`
    Tu nombre es:
    `+nombreUsuario);
*/

/*
//Operador ternario
let nombreUsuario="ekisdax";
let estado = false;
console.log(`
${estado ? 'Bienvenido! ':'Adios!'} ${nombreUsuario}    
    `);
*/

/*
//Es variable global siempre se usa
var estado = true;
if(estado){
    var estado = false;
}
console.log(estado);

//No global
let estado_let = true;
if(estado_let){
    let estado_let = false;
}
console.log(estado_let)
*/

/*
//Constante pero si mutable
const miArreglo=[];
//miArreglo = ["nuevo arreglo"];

//Es mutable
miArreglo[0]=["pera"];
console.log(miArreglo);
*/

/*
const frutas = ["Banana"];
frutas.push=("Sandia"); //Agrega al final
frutas.unshift("Manzana"); //Agrega al inicio
console.log(frutas);
frutas.pop(); //Quita el ultimo
console.log(frutas);
frutas.shift(); //Quita el primero
console.log(frutas);
*/

if (confirm("¿Realmente quieres salir?")) {
  window.open("https://www.ejemplo.com/gracias", "Gracias por Visitar!");
} else {
  alert("Continuar en la página.");
}


