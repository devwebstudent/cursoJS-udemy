// Podemos colocar o que eu quiser nesse retorno
// Exemplo: função que vai criar objeto de pessoa

function criaPessoa(nome, sobrenome) {
    // Como essas variáveis tem o mesmo nome, o JS já assume que será a propriedade nome e que tenha o valor dessa propriedade que vier no parâmetro
    return {nome, sobrenome} // Esse nome e sobrenome são propriedades do objeto. Essa função vai retornar um objeto literal
}

const p1 = criaPessoa('Luiz', 'Otávio') // Essa variável vai conter um objeto

// Seria a mesma coisa que fazer:
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(p1)
console.log(p2)


// p1 e p2 são exatamente a mesma coisa, a única diferença é que agora não preciso criar vários objetos, pois temos uma funçào que faz isso pra mim
