/** Ejercicios JavaScript 
 *  Autor: Luis Manuel
 *  Edicion: SuiL LeunaM
*/ 
//1. Haz los siguientes ejercicios simples de cadenas:
    
//a. Crea una cadena multilínea con comillas dobles.
var luisMultiLinea = 'Modernia ' + ' Nihilister ' + ' Red Hood';
console.log(luisMultiLinea);

//b. Añade a la cadena algún retorno de carro y tabuladores con el símbolo de escape
var luisMultiLinea2 = 'Modernia\n\tNihilister\n\t\tRed Hood';
console.log(luisMultiLinea2);

//c. Añade a la cadena el carácter \
var luisMultiLinea3 =  "\\Modernia \n\t \\Nihilister \n\t\t \\Red Hood";
console.log(luisMultiLinea3)

//d. Concatena otra cadena con el operador +
var concatenarLinea = 'Illo te digo que '
var concatenarAenil = 'Vaya culo tengo '
console.log(concatenarLinea+concatenarAenil)

//e. Concatena cadenas usando una template string, muestra el valor de varias
    //variables en el template string
var waifu1 = 'Nihilister';
var waifu2 = 'Red Hood';
var juntarSting = `${waifu1}, ${waifu2}!`;
console.log(juntarSting);
    
//f. Separa un texto que tenga varias frases en un array que tenga cada frase por
    //separado.
var textoConWaifus = 'Esta es la frase de Nihilister. Esta es la frase de Red Hood.';
var array = textoConWaifus.split('. ');
console.log(array);

//g. Convierte un texto dado a minúsculas.
var waifuMinuscula = "AAAAAAAAAAAAMACARENA"
console.log(waifuMinuscula.toLowerCase());

//h. Convierte un texto dado a mayúsculas.
var waifuMayuscula = "me gusta el pan con aceite"
console.log(waifuMayuscula.toUpperCase());

//i. Recorre con un bucle el texto caracter a caracter imprimiéndolo.
var vayaTexto = 'Recorriendo las waifus';
for (var i = 0; i < vayaTexto.length; i++) {
  console.log(vayaTexto[i]);
}
//j. Busca una subcadena en un texto.
var busqueda = 'Este es un texto para buscar las waifus que quieres, es una pena que tenga que escribir tanto';
var yTanto = 'tanto';
console.log(busqueda.includes(yTanto));

//k. Extrae en una variable la subcadena desde la posición 3 hasta el final del
    //texto.
var extraerVariable = busqueda.slice(3);
console.log(extraerVariable);

//l. Extrae en una variable la subcadena desde la posición 3 hasta la primera
    //ocurrencia de una palabra en el texto.
var queTeEvaluo = 'texto';
var queContraEsUnaSubcadena = busqueda.slice(3, busqueda.indexOf(queTeEvaluo));
console.log(queContraEsUnaSubcadena);

//m. Reemplaza todos los espacios del texto por un -
var lateral = '   Texto con espacios laterales   ';
var textoSinEspaciosLaterales = lateral.trim();
console.log(textoSinEspaciosLaterales);

//n. Elimina los espacios antes y después del texto.
var espacioParaMi = 'vaya waifu con espacios eh?';
var textoSinEspacios = espacioParaMi.replace(/ /g, '-');
console.log(textoSinEspacios);

//o. Crea una cadena que no tenga ningún espacio partiendo de otra dada.
var cadenaConEspacios = 'Cadena con espacios';
var cadenaSinEspacios = cadenaConEspacios.replace(/ /g, '');
console.log(cadenaSinEspacios);

//p. Crea una función que invierta una cadena de texto.
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  var textoParaInvertir = 'Texto para invertir';
  console.log(invertirCadena(textoParaInvertir));

//q. Usa una expresión regular para comprobar que la cadena tiene números.
var cadenaConNumeros = 'Cadena con 123 números';
var tieneNumeros = /\d/.test(cadenaConNumeros);
console.log(tieneNumeros);

//r. Usa una expresión regular para comprobar que la cadena termina en punto.
var cadenaQueTerminaEnPunto = 'Cadena que termina en punto.';
var terminaEnPunto = /\.$/.test(cadenaQueTerminaEnPunto);
console.log(terminaEnPunto);

//s. Usa una expresión regular para comprobar que la cadena comienza por una
    //mayúscula.
var cadenaConMayusculaAlInicio = 'Cadena con mayúscula al inicio';
var comienzaConMayuscula = /^[A-Z]/.test(cadenaConMayusculaAlInicio);
console.log(comienzaConMayuscula);

//t. Usa una expresión regular para comprobar si la cadena contiene un teléfono
    //con código internacional.
var cadenaConTelefono = '+123-456-789';
var tieneTelefonoInternacional = /^\+\d{1,}-\d{1,}-\d{1,}$/.test(cadenaConTelefono);
console.log(tieneTelefonoInternacional);

//u. Reemplaza cualquier ocurrencia de un + seguido de números por la cadena
    //SECRETO
var cadenaConSecreto = 'Este es el número secreto: +12345';
var cadenaConSecretoReemplazado = cadenaConSecreto.replace(/\+\d+/g, 'SECRETO');
console.log(cadenaConSecretoReemplazado);