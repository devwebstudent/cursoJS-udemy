// Se eu mudo a const nome de lugar e coloco ela dentro da função usaFalaNome(), o que vai acontecer?
// Resposta: vai exibir 'Luiz'
let nome = 'Luiz';

function falaNome() {
    console.log(nome)
}


// O trabalho desta função é simplesmente usar a função falaNome()
function usaFalaNome() {
    // Nada do que está aqui nesse código vai interferir na execução da minha função falaNome()
    const nome = 'Otávio';
    falaNome();
}

usaFalaNome();

// Resultado: vai mostrar 'Luiz', pois a função usaFalaNome() vai executar o que está dentro da função falaNome(). A consta nome dentro de usaFalaNome() foi declarada, mas não está sendo usada por nada.