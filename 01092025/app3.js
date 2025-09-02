/*
multiplicacion=3;
numero=1;
while(numero<=10){
multiplicación=multiplicacion * numero;
console.log("la multiplicación de 3 x " +numero+ " es: " +multiplicación);
numero++;
*/

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

alert(`Adivina el numero que saldra del 1 al 10
    Tienes 3 vidas
    Buena suerte!
    `);

var numerorandom=random(1,10);
console.log(numerorandom);
var numero = parseInt(prompt("Ingresa el numero que crees que saldra"));
var vidas = 3;

while(vidas>=0){
    if(numero==numerorandom){
        alert("Felicidades, adivinaste el numero");
        break;
    }else{
        vidas--;
        alert("Numero incorrecto, te quedan " +vidas+ " vidas");
        if(vidas==0){
            alert("Perdiste, el numero era: " +numerorandom);
            break;
        }
        numero = prompt("Ingresa el numero que crees que saldra");
    }
}
