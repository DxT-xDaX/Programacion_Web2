let inventario = [];

function mostrarMenu() {
    return prompt(`
        Opciones Disponibles\n
        "1.- Agregar Producto\n
        "2.- Motrar todos los productos\n
        "3.- Buscar producto por nombre\n
        "4.- Salir\n
        Elige una opcion:
    `);
}

function agregarProducto() {
    let nombre = prompt("Ingresa el nombre del producto:");
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto:"));
    let precio = parseInt(prompt("Ingresa el precio del producto:"));
    if(cantidad > 0 && precio > 0){
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado exitosamente.");
    } else {
        alert("Cantidad y precio deben ser mayores a 0.");
    }
        }

function mostrarProductos() {
    if(inventario.length === 0) {
        alert("No hay productos en el inventario.");
    } else {
        let mensaje = "Productos en el inventario:\n";
        for(let i = 0; i < inventario.length; i++) {
        mensaje += `Producto: ${i+1}:\n`+
                   `Nombre: ${inventario[i].nombre}\n`+
                   `Cantidad: ${inventario[i].cantidad}\n`+
                   `Precio: ${inventario[i].precio}\n`+
                   `-----------------------\n`;
        }
        alert(mensaje);
    }
}


function buscarProducto() {
    let nombreBusqueda = prompt("Ingresa el nombre del producto a buscar:");
    let encontrado = false;
    for(let i = 0; i < inventario.length; i++) {
        if(inventario[i].nombre.toLowerCase() === nombreBusqueda.toLowerCase()) {
            alert(`Producto encontrado:\n
                Nombre: ${inventario[i].nombre}\n
                Cantidad: ${inventario[i].cantidad}\n
                Precio: ${inventario[i].precio}`
            );
            encontrado = true;
            break;
        }
}
    if(!encontrado) {
        alert("Producto no encontrado.");
    }
}

function main() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch(opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                mostrarProductos();
                break;
            case "3":
                buscarProducto();
                break;
            case "4":
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opcion no valida, intenta de nuevo.");
        }
    } while(opcion !== "4");
}

main();

