// Se quisermos acessar pessoa e o nome da pessoa, podemos fazer como fazemos no ARRAY

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

console.log(pessoa.nome) // Resultado: Luiz
console.log(pessoa['sobrenome']) // Outro modo de acessarmos atributos no objeto: colocamos colchetes, aspas e dentro das aspas o atributo que queremos acessar // Resultado: Otávio

for (let propriedade in pessoa) { // Percorre cada propriedade (atributo) do nosso objeto pessoa
    console.log(propriedade, pessoa[propriedade]) // propriedade equivale a cada propriedade do nosso objeto em cada volta da repetição // Estamos pegando a chave e dessa chave pegamos o valor de cada chave -> Resultado: nome Luiz, sobrenome Otávio, idade 30
}