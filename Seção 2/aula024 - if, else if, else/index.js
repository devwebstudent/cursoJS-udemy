/* ESTRUTURAS CONDICIONAIS> IF, ELSE IF, ELSE -> Servem para desviarmos o curso da nossa aplicação quando necessário 

Imagina que temos um sistema que fala bom dia pro usuário dependendo do horário. Nosso sistema precisa saber o horário para falarmos bom dia para o usuário.
O if vai checar a condição: a condição é VERDADEIRA? Se for VERDADEIRA, ele executa o bloco. Caso seja FALSA, ele não faz nada ou executa o bloco do ELSE IF ou ELSE.
O que está dentro do bloco {} somente será executado se a condição dentro dos () for VERDADEIRA.



Entre 0 - 11  - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/


// ESTRUTURA CONDICIONAL SIMPLES: IF (pode ser executado sozinho, sem precisar de else e else if)
const hora1 = 11;

//   condição
if (hora1 <= 12) {
    console.log('Bom dia');    
}


// ESTRUTURA CONDICIONAL COMPOSTA: IF, ELSE IF (Serve para caso precisamos de mais condições) - ELSE = senão
const hora2 = 50;

//   condição
if (hora2 >= 0 && hora2 <= 11) {
    console.log('Bom dia');
} else if (hora2 >= 12 && hora2 <= 17) {
    console.log('Boa tarde');
} else if (hora2 >= 18 && hora2 <= 23) {
    console.log('Boa noite');
} else {
    // Se a hora não tiver entre 0 e 23, quero fazer alguma coisa padrão.
    console.log('Olá'); // Se nenhuma condição acima for atendida, ele vai executar esse bloco do else.
}




// OUTRO EXEMPLO: Se eu tiver dinheiro, vou sair de casa. Se eu não tiver, fico em casa:
const tenhoGrana = false;

if (tenhoGrana === true) {
    console.log('Vou sair!')
} else {
    console.log('Não vou sair!')
}



/*
RESUMINDO:
IF = pode ser usado sozinho
ELSE = preciso de um IF antes
ELSE IF = posso ter quantos ELSE IF eu quiser

Só posso ter um ELSE na checagem (não posso utilizar mais de um ELSE)
O ELSE não tem condição, ele só será executado se nenhuma condição for VERDADEIRA
Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE
*/