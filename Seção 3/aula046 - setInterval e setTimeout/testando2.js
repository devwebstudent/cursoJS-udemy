let min = 1
let max = 101

function numAleatorio(min, max) {
    let random = Math.round(Math.random() * (max - min) + min)
    return random
}

let aleatorio = setInterval(() => {
    console.log(numAleatorio(min, max))
}, 1000)