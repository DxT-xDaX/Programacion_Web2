document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtiene los valores de los campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    console.log(result);

    // Muestra el resultado en el elemento designado
    document.getElementById('result').textContent = 'Resultado: ' + result;
}