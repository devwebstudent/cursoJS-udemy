function mostraNumero(numero) {
    if (numero > 10) {
        throw new Error('Número não pode ser maior que 10')
    }

    return numero
}

try {
    let numero = mostraNumero(15)
    console.log(numero)
} catch (erro) {
    console.log('Número precisa ser menor que 10')
    console.log(erro)
} finally {
    console.log('FINALLY: Sempre sou exibido')
}