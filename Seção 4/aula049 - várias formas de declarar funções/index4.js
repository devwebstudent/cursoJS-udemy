// Dentro de um objeto também podemos ter uma função
// Em um atributo desse objeto posso criar uma função

const obj = {
    falar: function() {
        console.log('Estou falando...')
    }
}
// Utilizando a notação de ponto para executar a função
obj.falar()


// Nas versões mais novas do JS, posso criar esse método sem a palavra function e sem os 2 pontos

const obj2 = {
    falar() {
        console.log('Também estou falando...')
    }
}

obj2.falar() // Resultado:  Também estou falando...