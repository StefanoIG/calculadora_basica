function calcular(operacion) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    switch (operacion) {
        case 1:
            resultado = num1 + num2;
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        case 5:
            resultado = num1 % num2;
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
