// O nome das funções tem as mesmas regras das variáveis. Geralmente, o nome da função é a ação que ela vai executar. Quando declaramos a função, não precisamos do ponto e vírgula.

function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`)
    return 123456; // O return vai ficar salvo dentro da variavel que usamos para guardar a chamada.
}

// CHAMANDO A FUNÇÃO: sempre que chamo uma função, preciso colocar () após o nome da função para eu dizer que a função está sendo executada.
saudacao('Luiz'); // Agora, quando eu executo essa ação, o código dentro da função vai ser executado.
saudacao('Maria')
saudacao('Felipe')

const variavel = saudacao('João') // O valor do return vai voltar pra chamada e ficar guardado dentro da variável
console.log(variavel); // Se mandarmos exibir a variavel, ele vai mostrar o valor que retornou do return // Resultado: 123456



// SIMPLIFICANDO A FUNÇÃO ACIMA
function saudacao2(nome) {
    return `Bom dia, ${nome}!`
}

const variavel2 = saudacao2('José'); 
console.log(variavel2);



// CRIANDO FUNÇÃO QUE SOMA ENTRE 2 VALORES
function soma(x=0, y=0) { // Nossa função vai precisar receber 2 números. Caso não receba um dos valores ou os 2 valores, o valor padrão vai ser 0 para x ou y
    const soma = x + y;
    return soma;
}

let resultado = soma(10, 5); // Função dentro da variável resultado; Ela vai fazer a chamada e depois vai guardar o que vier do return
console.log(resultado); // Ao mandarmos exibir, vai exibir o que foi do return e está guardado dentro da variável resultado // Resultado: 15
console.log(soma(10, 20)); // Também podemos fazer direto, colocando nossa função com os parâmetros dentro do console.log // Resultado: 30