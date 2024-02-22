let horaAgora = () => {
    let data = new Date()
    return data.toLocaleTimeString('pt-br')
}

console.log(horaAgora())

let hora = setInterval(() => {
    console.log(horaAgora())
}, 1000);