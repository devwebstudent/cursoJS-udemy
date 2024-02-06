// É uma boa prática de programação você colocar tudo dentro de uma função e executar ela, para não poluir o escopo global.
// Neste exercício não vamos fazer isso. Vamos criar várias funções de modo a ficar mais fácil de entender.

const form = document.querySelector('#formulario'); // Selecionando nosso formulário.

// Parando envio do formulário
form.addEventListener('submit', function(e) { // Evento que quero escutar e função que ele executa ao clicarmos no enviar.
    // Vamos capturar o evento. Ao invés de chamar de 'evento', vamos chamar de 'e'. Todo mundo quer ler o código vai saber que é um evento. 
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // Como sei de onde está vindo esse evento, tb podemos usar e.target (ou seja, de quem está vindo esse evento, quem que tá recebendo esse evento); e.target vai me informar o elemento que está recebendo o evento (se é um clique, o e.target vai me informar qual elemento foi clicado na página)
    const inputAltura = e.target.querySelector('#altura'); // O e.target, de onde eu estou selecionando, eu quero pegar desse elemento que no caso é o form, eu quero pegar a altura.

    const peso = Number(inputPeso.value); // Agora quero pegar só o valor, pois em cima selecionamos o input inteiro. Feito isso, convertemos para Number.
    const altura = Number(inputAltura.value);

    // Se os valores são NaN (falsy value), podemos utilizar nossa estrutura condicional para checarmos se esse valor é falso.
    // Vamos fazer da utilizando o seguinte raciocínio: como estou dentro de uma função, se utilizo a palavra 'return', nada abaixo de return é executado. Então posso em algum momento dentro dessa função falar 'return' e a função vai parar naquele momento e vai me retornar um valor que não vou fazer nada com ele. Sabendo disso, posso fazer essa lógica:
    if (!peso) { // Se peso for avaliado como verdadeiro, preciso fazer alguma coisa. Nesse caso em específico quero fazer o contrário disso: se peso não for avaliado como verdadeiro (se for NaN), quero executar isso
        // if !peso = se o peso for falso (se for NaN), no nosso caso, vai executar isso:
        setResultado('Peso inválido', false); // A partir do momento que o peso é inválido, quero parar minha função.
        return; // Então colocamos return para parar a execução da nossa função neste local, pois tudo abaixo de return não é executado. Antes disso vamos executar nossa ação de colocar peso inválido no nosso setResultado (linha 32).
    }

    if (!altura) { // Se a altura for um NaN, não for válida.
        setResultado('Altura inválida', false); // Pro nosso paragrafo ter um fundo vermelho
        return;
    }
    
    // Agora vamos calcular nosso IMC
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true);

}) 

// Função para saber que nível a pessoa está de peso
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    // Nossas condições ficam assim:
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3]; 
    if (imc >= 24.9) return nivel[2];    
    if (imc >= 18.5) return nivel[1]; 
    if (imc < 18.5)  return nivel[0];

    // Obs.: Estamos vendo que na função estamos utilizando a palavra 'return' e quando é encontrada essa palavra a função para e não é mais executada. Nesse caso, não precisariamos de else if, só se if.
    // return vai parar a execução da função: se observarmos, chegando no primeiro return do primeiro if, os de baixo não serão mais executados caso o primeiro if tenha condição VERDADEIRA, mas se essa condição for FALSA, o código nem é executado e pula para os códigos de baixo.
    // Professor não recomenda fazer assim, mas pra simplicidade do código e para o que estamos aprendendo, temos que saber disso.
    // Obs.2: Se temos apenas uma linha de código no nosso if, podemos remover as chaves {} que demarcam os blocos, podemos colocar tudo na mesma linha.
    // Feita esta função, podemos ir onde estamos pegando nosso evento submit (linha 31)
}

// Função para calcular o imc:
function getImc(peso, altura) {
    const imc = peso / (altura * altura) // Calculando IMC.
    return imc.toFixed(2); // Para retornar o IMC com 2 casas decimais
}

// Função especializada em criar parágrafos
function criaP() {
    const p = document.createElement('p'); // Criei o parágrafo mas não adicionei em lugar nenhum ainda. Tenho que adicionar ele no resultado.
    return p; // Vai retornar o parágrafo criado.
}

// Criando função especializada em adicionar algo na div resultado
function setResultado(msg, isValid) { // Passamos outro parâmetro pra nossa função: se isValid verdadeiro, mensagem terá fundo verde, se falso, mensagem terá fundo vermelho
    // Podemos mandar uma mensagem no parâmetro e o que eu mandar vai ser exibido na div resultado.
    const resultado = document.querySelector('#resultado'); // Selecionando nossa div resultado.

    resultado.innerHTML = ''; // Para limpar a div resultado toda vez que chamarmos essa função.
    
    const p = criaP(); // Temos a mesma coisa que no p, que é o elemento que foi criado pela função (linha 15)

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)

}



/* Primeira coisa: Parar o envio do formulário ao clicarmos no enviar (linha 6)
Para pararmos envio do formulário, vamos utilizar um evento. Para utilizar um evento utilizamos a função addEventListener().
Primeiro parâmetro colocamos o evento que queremos escutar, que no caso é um evento de submit. Depois colocamos uma função. Posso tanto criar uma função fora do eventlistener, como posso colocar uma função anônima diretamente. Isso é muito comum. */

/* Segunda coisa: vamos tentar ao longo do código ir dividindo, sempre fazendo funções pequenas que fazem poucas coisas. Num código real vamos criar uma função para cada coisa que for feita.
Agora vamos criar uma função que a especialidade dela é adicionar alguma coisa dentro da div resultado (linha 13) */

/* Terceira coisa: criar uma função especializada em criar parágrafos (linha 13) */

/* Agora na função onde estamos capturando o evento (linha 6), vamos fazer o seguinte: 
Vamos pegar os valores dos inputs

*/

/* Agora vamos calcular nosso IMC (linha 41) com nossa function getImc()

Obs.: posso criar nossa função em qualquer lugar do nosso código e utilizar ela, pois o javascript faz algo chamado hoisting. 
*/

/* Agora que temos o valor do IMC, precisamos checar os valores e obter o resultado de acordo com esse range. Vamos ver na linha 36 uma função para saber que nível de IMC a pessoa está */




/* RECAPITULANDO NOSSO CÓDIGO: 
- Linha 4: selecionamos nosso formulário;
- Linha 7: adicionamos um escutador de evento no nosso formulário ouvindo o evento de submit;
- Linha 9: previnimos o default, para não deixar o formulário ser enviado e atualizar a página ao clicar em enviar;
- Linhas 10 e 11: selecionamos nossos inputs;
- Linhas 13 e 14: convertemos os valores digitados nos inputs para NUMBER; se retornar um NaN (que avalia como falso no JS) -> então fazemos linha 18 e/ou 24
- Linha 18: checamos -> se o peso não for avaliado como VERDADEIRO, seta o resultado 'Peso inválido' com a flag 'false' para colocarmos nossa classe e retorna (para parar a execução do código da função);
- Linha 24: fazemos basicamente a mesma checagem, só que com a altura;
- Linha 30: a gente calculou o IMC, criamos uma função específica para calcular o IMC na linha 57;
- Linha 31: pegamos o nível do IMC, que é o texto (Abaixo do peso, peso normal, etc.) que também tem uma função específica para isso na linha 39;
- Linha 32: criamos nossa mensagem mostrando o valor do IMC e o Nível do IMC;
- Linha 34: mandamos setar o resultado agora com a flag 'true' para colocar a nossa classe VERDADEIRA;
- Linha 39: fizemos a função getNivelImc() que criamos um Array com uma lista de valores;
- Linha 42: baseado no IMC que vamos receber nessa função, vamos retornar determinado valor de determinado índice do nosso Array; invertemos a lógicas e começamos a checar de trás pra frente; à medida que a função encontre a palavra return, ela não vai mais ser executada, vai parar por ali a execução do código da função - ela vai retornar o valor ali e pronto;

- Linha 57: fizemos nossa função getImc() para calcularmos o IMC;
- Linha 63: criamos uma função criaP() que só cria um parágrafo;
- Linha 69: criamos uma função setResultado() que seta o resultado - ela recebe uma mensagem e se o resultado é válido;
- Linha 71: dentro dessa função selecionamos nossa div resultado;
- Linha 73: limpamos o texto da div resultado;
- Linha 75: criamos um parágrafo como nossa função criaP();
- Linha 77: checamos -> essa flag foi enviada como VERDADEIRA ou FALSA? Baseada nela, se for VERDADEIRA significa que é válida, então executamos o bloco e colocamos a classe do nosso parágrafo para que ele tenha fundo VERDE; Se for FALSO, não é válido, então a classe é 'bad', que vai mudar o fundo para VERMELHO.

- Linha 83: seta o innerHTML do parágrafo com a mensagem que estamos recebendo;
- Linha 84: por fim adicionamos nosso parágrafo dentro da nossa div resultado;







*/