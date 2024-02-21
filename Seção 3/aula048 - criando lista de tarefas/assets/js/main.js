const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

// Sempre vamos tentar jogar serviços para outras funções. Não vamos ter apenas uma função fazendo tudo.

// Essa função vai apenas criar um li para depois ele ser adicionado no ul
function criaLi() {
    const li = document.createElement('li');
    return li;
}


// Quando eu digitar alguma coisa no input, vou ter um evento, que é o evento de tecla pressionada
// Pegando a tecla enter sendo pressionada dentro do input - keypress = capturando o evento de tecla sendo pressionada
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        // Se o ENTER for pressionado, criamos a tarefa
        if (!inputTarefa.value) return; // Se não colocar nada no input, vai retornar nada
        criaTarefa(inputTarefa.value); // Se o input tiver algum valor, cria a tarefa com esse valor
    }
})


// Outra coisa que queremos é quando uma tarefa for criada, ele limpe o input e volte o ponteiro do mouse de novo para o input para digitarmos outra tarefa
function limpaInput() {
    inputTarefa.value = ''; // Para limpar o valor que tiver no input
    inputTarefa.focus(); // Para o cursor do mouse voltar para o input
}


// Essa função cria o botão de apagar ao lado de cada tarefa
// Ela vai receber um li, pra sabermos qual local o botão deve ser adicionado o botão de apagar
function criaBotaoApagar(li) {
    li.innerText += ' ' // Só para dar um espaço entre o li e o botão
    const botaoApagar = document.createElement('button') // Criando o botão de apagar
    botaoApagar.innerText = 'Apagar' // Esse botão terá o texto 'Apagar'
    // botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('class', 'apagar'); // Setando uma classe com valor apagar no botão
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar) // Adicionando o botão de apagar ao lado do li
}


// Abaixo vamos mandar o texto do input para essa função
function criaTarefa(textoInput) {
    const li = criaLi() // Chamando a função criaLi() e retornando o li criado para essa constante.    
    tarefas.appendChild(li) // Adicionando nosso li criado dentro do ul
    li.innerHTML = textoInput // Exibindo nosso li na página
    limpaInput(); // Quando termino minha tarefa de adicionar o li, eu limpo o input
    criaBotaoApagar(li); // Chamando a função para adicionar botão assim que criar a tarefa
    salvarTarefas(); // Chamando a função que vai salvar nossas tarefas em algum lugar
}


// Capturando evento de click no botão de adicionar tarefa
// Quando clico no botão, pego o texto que tá no input e jogo para uma função
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; // Se não colocar nada no input, vai retornar nada
    criaTarefa(inputTarefa.value); // Chamando a função criaTarefa() e mandando o que for digitado no input para ela.
});


// Função de apagar
// Vamos pegar um evento de click no nosso document
document.addEventListener('click', function(e) {
    const el = e.target
    
    // Quero checar se o botão que está sendo clicado é o botão de apagar
    // Quero que, ao clicar no botão apagar, nosso li seja apagado
    if (el.classList.contains('apagar')) { // Se esse botão contém a classe apagar, faça isso:
        // Apague o pai do botão apagar
        el.parentElement.remove() // Para apagarmos o pai do nosso botão, que no caso é o li
        salvarTarefas();
    }
});


// Essa função vai salvar as tarefas que adicionamos
// Vamos ver quantos lis tem na ul e desses li vou pegar os textos deles
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li') // Para pegarmos todos os li da minha ul tarefas

    // Vamos criar um array e vamos iterar sobre a NodeList e pegar todos os textos dos li
    const listaDeTarefas = []

    for (let tarefa of liTarefas) { // Vamos pegar o texto das nossas tarefas que estão na ul
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Para substituir a palavra apagar por nada. O trim() remove o espaço sobrando na string
        listaDeTarefas.push(tarefaTexto); // Jogando o texto dentro da lista de tarefas
        
    }

    // Jogamos nossos textos com nossas tarefas dentro de um ARRAY. Agora quero fazer com que seja criado um JSON e que seja criado em uma única string.
    // JSON = Um formato de textos utilizado para salvar dados entre sistemas. Vamos ver isso mais pra frente

    const tarefasJSON = JSON.stringify(listaDeTarefas) // Quero fazer com que ele vire uma STRING. Foi criada uma STRING do meu ARRAY convertido para JSON.
    // Ao mandarmos exibir, vai mostrar uma STRING muito similar a um ARRAY.
    // Agora podemos salvar isso em algum lugar e depois posso puxar ele do lugar que eu salvar e manipular do jeito que eu quiser.
    // O mais importante é que vamos converter essa STRING de volta em um ARRAY.

    // localStorage é um local no navegador onde você pode salvar coisas. Nesse caso, vamos salvar nossa STRING.
    localStorage.setItem('tarefas', tarefasJSON) // Vamos falar o que queremos salvar. Esse é o nome que vou recuperar depois de novo. É o nome que vamos usar para recuperar o valor de novo. O valor disso aqui é tarefasJSON
}


// Agora queremos que ao apagar nossa tarefa, ela também seja apagada do localStorage também (linha 74)
// Nesse momento, estamos salvado nossas tarefas no localStorage


// Agora quero que, quando o site for carregado, apareça as tarefas que criei da última vez
// Vamos criar outra função que vai ler as tarefas e vai jogar elas de volta na lista 
// A gente vai obter as tarefas do localStorage
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')    
    // Agora precisamos converter essas tarefas de volta de STRING para ARRAY
    const listaDeTarefas = JSON.parse(tarefas) // Convertemos nossa tarefas de string para ARRAY.
    

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()