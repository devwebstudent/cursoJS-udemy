// As coisas podem ficar mais confusas quando passamos a utilizar uma programação mais funcional, utilizando mais funções.
// Exemplo: Suponha que temos uma outra função que usa falaNome().

let nome = 'Luiz';

function falaNome() {
    const nome = 'Otávio'; 
    console.log(nome)
}


// O trabalho desta função é simplesmente usar a função falaNome()
function usaFalaNome() {
    falaNome();
}

usaFalaNome(); // Chamando essa função, ela vai executar o que está na outra função falaNome(). // Resultado: Otávio -> a função falaNome() buscou a variável nome dentro dela e exibiu esse valor.