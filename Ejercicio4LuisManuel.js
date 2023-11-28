// a. Generar array con 1000 números aleatorios del 0 al 99.
let arrayAleatorio1000 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));

// b. Calcular la media aritmética.
function calcularMedia(array) {
  const sumatoria = array.reduce((acumulador, valor) => acumulador + valor, 0);
  return sumatoria / array.length;
}

// c. Calcular la frecuencia de cada número.
function calcularFrecuencia(array) {
  let frecuencia = Array(100).fill(0);
  array.forEach(numero => {
    frecuencia[numero]++;
  });
  return frecuencia;
}

// d. Ordenar el array de menor a mayor sin usar métodos de JavaScript.
function ordenarSinMetodos(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        // Intercambiar elementos si están en el orden incorrecto.
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// Ordenar el array utilizando una función de JavaScript.
function ordenarConMetodo(array) {
  return array.sort((a, b) => a - b);
}

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
function buscarOcurrencias(palabra, texto) {
    let posiciones = [];
    let indice = texto.indexOf(palabra);
    while (indice !== -1) {
      posiciones.push(indice);
      indice = texto.indexOf(palabra, indice + 1);
    }
    return posiciones;
  }
  

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  