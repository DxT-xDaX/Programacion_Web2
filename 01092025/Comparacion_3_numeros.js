let numeroa = 5;
let numerob = 100;
let numeroc = 54;

//Verificar si los tres numeros son iguales
if(numeroa==numerob && numeroa==numeroc){
    console.log("Los tres numeros son iguales");
}else{

//Verificar si hay al menos dos numeros iguales y mostrar cuales son
if (numeroa == numerob || numeroa == numeroc || numerob == numeroc) {
  if (numeroa == numerob) {
    console.log("Los numeros iguales son: " + numeroa + " y " + numerob);
  } else if (numeroa == numeroc) {
    console.log("Los numeros iguales son: " + numeroa + " y " + numeroc);
  } else {
    console.log("Los numeros iguales son: " + numerob + " y " + numeroc);
  }} else {
    console.log("No hay numeros iguales");
  }

  //Verificar cual es el mayor y cual es el menor
if (numeroa > numerob && numeroa > numeroc) {
  console.log("El numero mayor es: " + numeroa);
} else if (numerob > numeroa && numerob > numeroc) {
  console.log("El numero mayor es: " + numerob);
} else {
  console.log("El numero mayor es: " + numeroc);
}       
if (numeroa < numerob && numeroa < numeroc) {
  console.log("El numero menor es: " + numeroa);
} else if (numerob < numeroa && numerob < numeroc) {
  console.log("El numero menor es: " + numerob);
} else {
  console.log("El numero menor es: " + numeroc);
}       
}
