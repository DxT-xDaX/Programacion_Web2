var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];
let carrito = [];

//Funcion para mostrar menu
function menu(){
    alert(`
        Buenas :D
        Bienvenido a la tiendita
        Porfavor eliga una opcion:
        `);
    let opcion;
    do{
        opcion=prompt(`
            Opciones Disponibles:
            1.-Mostrar productos disponibles
            2.-Agregar Producto al carrito
            3.-Mostrar lista de productos del carrito
            4.-Salir y comprar 
            5.-Salir
            "Elige una opcion"
            `);

        switch(opcion){
            case "1":
                mostrarProductos();
                break;
            case "2":
                agregarProducto();      
                break;
            case "3":
                mostrarCarrito();
                break;      
            case "4":
                alert("Gracias por su compra :3, usted a comprado los siguientes productos:");
                mostrarCarrito();
                break;  
            case "5":
                alert("Gracias por su visita :3");
                break;    
            default:
                alert("Eso no")
        }
    }while(opcion !== '4' && opcion !== '5');
}

//Funcion para mostrar productos disponibles\
function mostrarProductos(){
    let mensaje = "Productos Disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
}

//Funcion para agregar productos al carrito
function agregarProducto(){
    let mensaje = "Productos Disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
    });
    let eleccion = prompt(mensaje + "Elige el número del producto que deseas agregar al carrito:");
    let indice = parseInt(eleccion) - 1;
    if (indice >= 0 && indice < productos.length) {
        carrito.push(productos[indice]);
        alert(`Has agregado ${productos[indice].nombre} al carrito.`);
    } else {
        alert("Opción inválida.");
    }   
}

//Funcion para mostrar los productos en el carrito
function mostrarCarrito(){
    if (carrito.length === 0) {
        alert("El carrito está vacío.");    
    } else {
        let mensaje = "Productos en el carrito:\n";
        let total = 0;
        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
            total += producto.precio;
        });
        mensaje += `Total: $${total}`;
        alert(mensaje);
    }   
}

menu();

