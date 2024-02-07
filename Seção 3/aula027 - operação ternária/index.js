// OPERAÇÃO TERNÁRIA -> ? : 
// -> isso pode substituir partes do seu código e encurtar muito seu código em partes onde você precisa de IF e ELSE
// Exemplo: imagina que temos um fórum onde temos usuários VIPS e usuários normais e dependendo da pontuação do usuário ele ganhe pontos ao longo de respostas deles no fórum. Baseado na pontuação do usuário vamos dar uma flag pra ele dizendo se ele é VIP ou usuário normal.


// Vamos supor que o usuário tem 999 pontos. Se o usuário tem 1000 ou mais pontos = usuário VIP, menos de 1000 = usuário normal

// Fazendo com operação ternária, de modo a encurtar nosso código - ? :
const pontuacaoUsuario = 1000; 
//                         condição ? 'Valor para verdadeiro' : 'Valor para falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario)


const corUsuario = null; // Usuário não selecionou nenhuma cor
const corPadrao = corUsuario || 'Preto'; // Quando utilizamos isso, estamos setando um valor padrão para a variável. Essa variável sempre vai ter um valor padrão baseado na variável corUsuario. No caso vai ser preto (verdadeiro), pois null é avaliado como falso
console.log(corPadrao) // Resultado: Preto





/* Fazendo da maneira tradicional - utilizando IF e ELSE
const pontuacaoUsuario = 999;
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}

*/