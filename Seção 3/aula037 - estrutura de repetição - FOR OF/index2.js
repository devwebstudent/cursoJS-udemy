// Iterando a mesma string utilizando FOR IN
// Perceba que em ambos, FOR e FOR IN, temos um padrão: nos 2 temos que utilizar o índice para pegarmos cada valor correspondente àquele índice

const nome = 'Luiz Otávio';

for (let i in nome) { // Percorrendo cada índice da nossa STRING nome
    console.log(nome[i])
}