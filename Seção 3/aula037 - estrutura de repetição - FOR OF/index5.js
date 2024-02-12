// FOR clássico não iria funcionar no nosso exemplo se quiséssemos iterar

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

// Iterando com FOR IN

for (let propriedade in pessoa) {
    console.log(propriedade) // Me retorna a propriedade do objeto pessoa // Resultado: nome, sobrenome, idade
    console.log(pessoa[propriedade]) // Me retorna o valor de cada propriedade // Resultado: Luiz, Otávio, 30
}