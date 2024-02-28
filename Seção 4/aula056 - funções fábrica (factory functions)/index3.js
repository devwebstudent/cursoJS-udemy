// Podemos simplificar nosso método removendo a palavra function e os dois pontos
// Em alguns momentos você não vai ter o valor no parâmetro, só a chave(propriedade)
// No exemplo abaixo, não temos o valor de peso no parâmetro
// Fazendo meu método utilizar o valor da propriedade utilizando this
// Quem chamou o 'fala'? O this se  refere a pessoa que chamou o que você tiver executando
// This vai ser quem chamar o objeto
// Quem chamou o 'fala' foi p1 -> this é o próprio objeto p1
// this.nome é a mesma coisa que fazermos p1.nome
// O this se refere ao objeto inteiro e estamos pegando o valor da propriedade nome

// Sempre que utilizarmos um objeto.método, o this vai se referir ao objeto


function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} fala ${assunto}`
        }, 
        peso: 80
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = criaPessoa('Maria', 'Joaquina')

console.log(p1.fala('sobre JS')) // Aqui o this assume o valor de p1
console.log(p2.fala('oi')) // Aqui o this assume o valor de p2