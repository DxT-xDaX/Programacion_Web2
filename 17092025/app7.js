/*
const frutas=[];
const fruta = prompt("Que fruta quieres agregar a tu carrito");
frutas.push(fruta);
while(confirm("Quieres agregar una nueva fruta?")){
    const fruta = prompt("Que otra fruta quieres agregar");
    frutas.push(fruta);
}
console.log("usted compro:");

for(let fruta of frutas){
    console.log(fruta)
}
*/

//Iniciar un arreglo vacio 
let nombres=[];

//Funcion para agregar nombres
function agregarNombre(){
    let nombre = prompt("Ingresa un nombre:");
    if(nombre){
        nombres.push(nombre);
        alert(`Nombre que agrego fue ${nombre}`);
    }else{
        alert("Sin datos");
    }
}

//Funcion para mostrar nombres 
function mostrarNombres(){
    if (nonbres.lenght === 0){
        alert("Sin nombres");

    }else{
        let mensaje="Nombres almacenados \n";
        nombres.forEach((nombre,index)=>{
            mensaje += `${index+1}.-${nombre} \n`
        });
        alert(mensaje);
    }
}

//Funcion para mostrar menu
function mostrarMenu(){
    let opcion;
    
    do{
        opcion=prompt(`
            Opciones Disponibles:
            1.-Agregar Nombre
            2.-Mostrar lista de nombres
            3.-Salir
            "Elige una opcion"
            `);

        switch(opcion){
            case "1":
                agregarNombre();
                break;
            case "2":
                mostrarNombres();
                break;
            case "3":
                alert("Saliendo");
                break;
            default:
                alert("Eso no")
        }
    }while(opcion !== '3')

}

mostrarMenu();