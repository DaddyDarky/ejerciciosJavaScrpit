function calcularFactorial(numeroMagico){
    if (numeroMagico ===0 || numeroMagico ===1) {
        return 1
    } else{
        let resultado = 1;
        for (let i = 2; i<=numeroMagico; i++){
            resultado *= i
        }
        return resultado
    }
}
let numeroDePrueba = 10;
let factorialResultado =calcularFactorial(numeroDePrueba);
console.log('el factorial de '+numeroDePrueba +" es : "+ factorialResultado)