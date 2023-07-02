// Suama, resta, multipliacion y division 

function calculadora(a, b, signo) {
    if (arguments.length < 3) {
        return "Se requieren al menos 3 parámetros.";
    }

    if (typeof a !== "number" || typeof b !== "number") {
        return "Los primeros dos parámetros deben ser números.";
    }

    if (typeof signo !== "string") {
        return "El tercer parámetro debe ser una cadena.";
    }

    if (signo == '+') {
        let suma = a + b;
        return `La suma de ${a} + ${b} es: ${suma}`;
    } else if (signo == '-') {
        let resta = a - b;
        return `La resta de ${a} - ${b} es: ${resta}`;
    } else if (signo == '*') {
        let multi = a * b;
        return `La multiplicación de ${a} * ${b} es: ${multi}`;
    } else if (signo == '/') {
        let division = a / b;
        return `La división de ${a} / ${b} es: ${division}`;
    }

    return "Operación no válida.";
}
let operacion = prompt('elige la operación')
let valor1 = parseInt(prompt('ingresa el primer valor'))
let valor2 = parseInt(prompt('ingresa el segundo valor'))
console.log(calculadora(valor1,valor2,operacion));