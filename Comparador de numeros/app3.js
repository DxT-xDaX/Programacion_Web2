 document.getElementById('comparador').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                result = 'Por favor, ingresa números válidos.';
            } else if (num1 > num2) {
                result = num1 + ' es mayor que ' + num2;
            } else if (num1 < num2) {
                result = num1 + ' es menor que ' + num2;
            } else {
                result = num1 + ' es igual a ' + num2;
            }

            document.getElementById('result').textContent = 'Resultado: ' + result;
        });