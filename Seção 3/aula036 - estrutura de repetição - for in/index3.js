// Objetos são coisas do mundo real que podemos dar atributos e ações pra ele
// Já vimos como utilizar FOR IN com ARRAY
// Agora vamos ver como utilizar FOR IN com OBJETO
// Ele vai iterar (percorrer) as propriedades (atributos) do objeto -> nome, sobrenome, idade

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let propriedade in pessoa) {
    console.log(propriedade) // Resultado: nome, sobrenome, idade
}