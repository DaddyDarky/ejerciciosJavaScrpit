// a. Crear un array "datos" vacío con un literal.
let datos = [];

// b. Añadir a "datos" los números del 1 al 50 con un bucle for.
for (let i = 1; i <= 50; i++) {
  datos.push(i);
}

// c. Eliminar los elementos del 25 al 50 asignando un nuevo tamaño a la propiedad length.
datos.length = 25;

// d. Usar el operador spread para hacer una copia del array anterior.
let copiaDatos = [...datos];

// e. Crear un array de tamaño 50 con el constructor Array.
let arrayConstructor = new Array(50);

// f. Copiar el array anterior a otro con la factoría from.
let copiaFrom = Array.from(copiaDatos);

// g. Crear un array multidimensional de 10 filas (i) y 10 columnas (j). Inicializar cada celda con el valor i*j.
let arrayMultidimensional = [];
for (let i = 0; i < 10; i++) {
  arrayMultidimensional[i] = [];
  for (let j = 0; j < 10; j++) {
    arrayMultidimensional[i][j] = i * j;
  }
}

// h. Crear un array con la factoría of con los números del 1 al 5. Después añadir un elemento en la posición 10 y otro en la 50.
let arrayFactoriaOf = Array.of(1, 2, 3, 4, 5);
arrayFactoriaOf[9] = 10;
arrayFactoriaOf[49] = 50;

// Recorrer el array con for e imprimir valores.
console.log("Recorrido con for:");
for (let i = 0; i < arrayFactoriaOf.length; i++) {
  console.log(arrayFactoriaOf[i]);
}

// Recorrer el array con forEach.
console.log("Recorrido con forEach:");
arrayFactoriaOf.forEach(valor => {
  console.log(valor);
});

// La diferencia entre for y forEach es que forEach es más declarativo y simplificado, mientras que el bucle for es más flexible.

// Tamaño del array.
console.log("Tamaño del array:", arrayFactoriaOf.length);

// i. Eliminar dos elementos con delete.
delete arrayFactoriaOf[0];
delete arrayFactoriaOf[1];

// j. Calcular el producto de todos los números del array "datos" con forEach.
let producto = 1;
datos.forEach(valor => {
  producto *= valor;
});

// k. Cada elemento x del array datos debe cambiarse por x*x. Usar forEach.
datos.forEach((valor, indice, array) => {
  array[indice] = valor * valor;
});

// l. Crear un nuevo array con map recorriendo cada elemento x de "datos", donde cada elemento sea un string "El valor es: x". Usar template string.
let arrayStrings = datos.map(valor => `El valor es: ${valor}`);

// m. Crear un array nuevo mediante map que incremente cada elemento de "datos" en 5 unidades.
let arrayIncrementado = datos.map(valor => valor + 5);

// n. Mediante filter quédate con los números impares en un nuevo array impares.
let impares = datos.filter(valor => valor % 2 !== 0);

// o. Usar find para buscar el número 13.
let numeroEncontrado = datos.find(valor => valor === 13);

// p. Usar every para comprobar si todos los números son positivos.
let todosPositivos = datos.every(valor => valor > 0);

// q. Calcular la sumatoria del array datos mediante reduce.
let sumatoria = datos.reduce((acumulador, valor) => acumulador + valor, 0);

// r. Calcular el valor más pequeño del array mediante reduce.
let valorMinimo = datos.reduce((minimo, valor) => (valor < minimo ? valor : minimo), Infinity);

// s. Usar flat para aplanar el array multidimensional.
let arrayAplanado = arrayMultidimensional.flat();

// t. Tenemos la cadena: "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays".
// Separar mediante split las distintas frases.
let cadena = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays";
let frases = cadena.split(". ");

// Después mediante map quitar los espacios sobrantes (trim).
let frasesSinEspacios = frases.map(frase => frase.trim());

// A continuación, usar flatMap para extraer todas las palabras de cada frase en un único array.
let palabras = frasesSinEspacios.flatMap(frase => frase.split(" "));

// u. Crear el array a [1,2,3,4,5] y b [6,7,8,9,10] con literales. Concatenar los arrays a y b con concat.
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let concatenadosConcat = a.concat(b);

// Después con operador spread.
let concatenadosSpread = [...a, ...b];

// Crear una variable const cola. Usar unshift y shift para añadir y quitar elementos.
const cola = [];
cola.unshift(1);
cola.unshift(2);
cola.unshift(3);
let elementoEliminado = cola.shift();

// Dado el array resultante de la concatenación de a y b, obtener el subarray desde el índice 2 al penúltimo elemento (slice).
let subarray = concatenadosSpread.slice(2, -1);

// Usar splice para quitar los 2 últimos elementos de un array.
concatenadosSpread.splice(-2);

// v. Rellenar con fill un array de 100 elementos con -1.
let arrayFill = new Array(100).fill(-1);

// w. Crear un array de cadenas. Buscar con indexOf una cadena.
let arrayCadenas = ["hola", "adios", "buenos días"];
let indiceHola = arrayCadenas.indexOf("hola");

// x. Comprobar si la cadena "hola" está dentro del array anterior.
let incluyeHola = arrayCadenas.includes("hola");

// y. Ordenar la lista de cadenas anterior de forma alfabética con sort.
arrayCadenas.sort();

// z. Crear un array vacío de 50 posiciones. Con forEach asignar valores aleatorios entre 0 y 100.
let arrayAleatorio = [];
for (let i = 0; i < 50; i++) {
  arrayAleatorio[i] = Math.floor(Math.random() * 101);
}

// Después ordenar con sort de menor a mayor.
arrayAleatorio.sort((a, b) => a - b);

// Cambiar y ordenar de mayor a menor.
arrayAleatorio.sort
