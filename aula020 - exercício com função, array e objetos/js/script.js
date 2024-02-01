// Escopo global é onde todo mundo está
// Na nossa função meuEscopo quero previnir que nosso formulário seja enviado quando clicamos no botão de enviar, pois se eu enviar, a página será atualizada e não queremos isso neste exercício.
// Queremos prevenir que a página seja atualizada.

// Não função meuEscopo() quero previnir que minha página seja atualizada.
function meuEscopo() {
    const form = document.querySelector('.form'); // Estamos selecionando o form que está dentro de document. Poderiamos selecionar ele pelo nome da tag, pela classe que ele tem, por ID, etc.
    const resultado = document.querySelector('.resultado'); // Selecionando nossa div de resultado.
    
    const pessoas = []; // Array que vai salvar os objetos. Quem vai preencher o meu array é o envio do formulário.

    // O que queremos: a cada vez que o formulário for enviado, preciso capturar o valor de nome, sobrenome, peso e altura.
    // Para fazer isso, precisamos selecionar os elementos, por isso criamos as classes. Veja abaixo:
    function recebeEventoForm(evento) {
        evento.preventDefault(); // Para prevenir que o navegador faça o padrão de atualizar a página ao clicarmos no botão de enviar.
        
        // Aqui quero selecionar inputs que estão dentro do formulário. Se quero diminuir o local onde quero fazer a pesquisa, se quero pesquisar num lugar menor, pq eu sei que ele está ali, utilizamos o form. Ou seja, estamos buscando coisas que estão dentro do form e não dentro do corpo inteiro do HTML.
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Para criarmos o objeto, podemos pegar direto o array pessoas.push() e enviar um objeto dentro
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`; // Dessa maneira pegamos o valor que a pessoa digitou no input e escrevemos no nosso HTML.
    }
    
    // Recurso mais moderno, utilizando EventListener (escutador de evento)
    // Colocando espiões na página pra ele ficar vigiando algum evento (Se isso acontecer, faça alguma coisa):
    form.addEventListener('submit', recebeEventoForm) // Ao clicarmos no Enviar, ele vai executar essa função. Quando ela for executada, vai prevenir o padrão de atualizar a página (linha 14).
    // Adiciona um escutador de evento no meu formulário e dentro colocamos qual evento queremos escutar, que no caso é o evento de submit (enviar). O escutador também vai receber uma função
    // Feito isso, já resolvemos o problema da página atualizar assim que enviamos o formulário.
}

meuEscopo()