/* RESUMO CHATGPT

Em JavaScript, cada objeto tem uma referência para outro objeto chamado de "protótipo". Quando você acessa uma propriedade em um objeto, o JavaScript primeiro verifica se essa propriedade existe no próprio objeto. Se não encontrar, ele busca essa propriedade no protótipo do objeto e continua essa busca até encontrar a propriedade desejada ou chegar ao topo da cadeia de protótipos.

*/



// EXEMPLO:

// Criando um objeto 'animal' com uma propriedade 'tipo'
let animal = {
    tipo: 'mamífero'
};

// Criando um objeto 'gato' que terá 'animal' como protótipo
let gato = {
    nome: 'Frajola'
};
gato.__proto__ = animal;

// Agora, 'gato' herda a propriedade 'tipo' de 'animal'
console.log(gato.tipo); // Saída: mamífero