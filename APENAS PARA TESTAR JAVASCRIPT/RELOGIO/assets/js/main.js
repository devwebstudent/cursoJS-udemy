(() => {
    let container = document.querySelector('.container')
    let h1 = document.querySelector('#timer')

    function relogio() {
        let hora = new Date()
        return hora.toLocaleTimeString('pt-br')
    }

    setInterval(() => {
        h1.innerHTML = `${relogio()}`
    }, 1000)
})()