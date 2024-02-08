// Vamos fazer o mesmo exercício de uma forma mais simples

const h1 = document.querySelector('.container h1'); // Para selecionar o h1 dentro da classe container
const data = new Date(); // Criando data atual
const opcoes = {
    dateStyle: "full",
    timeStyle: "short"
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes)