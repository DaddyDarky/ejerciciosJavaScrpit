function buscarOcurrencias(texto, palabra) {
    // Convertir el texto y la palabra a minúsculas para hacer la búsqueda insensible a mayúsculas
    const textoMinusculas = texto.toLowerCase();
    const palabraMinusculas = palabra.toLowerCase();

    const posiciones = [];
    let indice = textoMinusculas.indexOf(palabraMinusculas);

    while (indice !== -1) {
        posiciones.push(indice);
        indice = textoMinusculas.indexOf(palabraMinusculas, indice + 1);
    }

    return posiciones;
}

// Ejemplo de uso:
const textoEjemplo = "Pues hoy tengo el examen de js pal cual no he estuidado nada";
const palabraBuscada = "pal";

const resultado = buscarOcurrencias(textoEjemplo, palabraBuscada);
console.log(resultado);
