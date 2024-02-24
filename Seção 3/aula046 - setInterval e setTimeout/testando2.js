function mostraNum(num) {
    return num
} 

let numero = mostraNum(15)

let mostraNumero = setInterval(() => {
    console.log(numero)
}, 1000);

setTimeout(() => {
    clearInterval(mostraNumero)
    console.log('Pausando função')
}, 5000);