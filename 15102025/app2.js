document.getElementById('calculadora').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    // Obtiene los valores de los campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;
    let result;
    switch (operacion) {
        case 'sumar':
            result = num1 + num2;
            break;
        case 'restar':
            
            result = num1 - num2;
            break;
        case 'multiplicar':
            result = num1 * num2;
            break;
        case 'dividir':
            result = num1 / num2;
            break;
        default:
            result = 'Operación no válida';
    }
    console.log(result);
    // Muestra el resultado en el elemento designado
    document.getElementById('result').textContent = 'Resultado: ' + result;
});