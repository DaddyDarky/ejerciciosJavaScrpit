// a. Desestructura día, mes y año e imprime la fecha dado el array ['06', 'Octubre', '2021'];
const fechaLuis = ['06', 'Octubre', '2021'];
const [dia, mes, ano] = fechaLuis;
console.log(`${dia} de ${mes} de ${ano}`);

// b. Dado un array de números, desestructura los números en posiciones impares.
const numerosLuis = [1, 2, 3, 4, 5];
const [, segundo, , cuarto, ] = numerosLuis;
console.log(segundo, cuarto);

// c. Desestructura el primer número, el segundo y el resto en otra variable.
const [primerNumero, segundoNumero, ...restoNumeros] = numerosLuis;
console.log(primerNumero, segundoNumero, restoNumeros);

// d. Desestructura nombre, apellidos y teléfono del siguiente objeto.
const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433'};
const { nombre, apellidos, telefono } = person;
console.log(nombre, apellidos, telefono);

// e. Cambia el siguiente bucle para desestructurar cada entrada e imprimir llave, valor por separado.
for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

// f. Dado [{x: 1, y: 2}, {x: 3, y: 4}], desestructura los puntos en las variables x1, y1, x2, y2
const puntosLuis = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = puntosLuis;
console.log(x1, y1, x2, y2);

// g. Crea una función a la que le pasas un único objeto como parámetro con 5 propiedades cualquiera incluida la propiedad nombre y apellidos.
// Desestructura en la función la propiedad nombre y apellidos e imprime el nombre completo.
function imprimirNombreCompleto({ nombre, apellidos, ...resto }) {
  console.log(`${nombre} ${apellidos}`);
}

// Ejemplo de uso:
imprimirNombreCompleto({ nombre: 'John', apellidos: 'Doe', edad: 25, ciudad: 'New York', pais: 'USA' });

// h. Dados dos objetos, combínalos en uno solo utilizando el operador spread. Después elimina alguna de las propiedades.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// Eliminar alguna propiedad (por ejemplo, 'b'):
const { b, ...obj1WithoutB } = obj1;
console.log(obj1WithoutB);

// i. Crea una función que retorna un array con 3 valores. Usa la función y desestructura los valores.
function obtenerLuis() {
  return [10, 20, 30];
}

const [valor1, valor2, valor3] = obtenerLuis();
console.log(valor1, valor2, valor3);

// j. Realiza una clonación profunda de un objeto que contiene otros objetos o arrays como propiedades.
function clonarProfundamente(objeto) {
  return JSON.parse(JSON.stringify(objeto));
}

const objetoOriginal = { a: 1, b: { c: 2 }, d: [3, 4] };
const objetoClonado = clonarProfundamente(objetoOriginal);
console.log(objetoClonado);
