// Quando chamamos () estamos chamando uma função, e uma função executa uma ação.
// window.alert('Olá, mundo'); // Exibe janela de alerta
// window.confirm('Tem certeza que quer apagar essa mensagem?') // Exibe janela de confirmação
// window.prompt('Digite o seu nome.') // Pede pro usuário digitar algo


// Podemos salvar dentro das variáveis os valores retornados das nossas funções confirm() e prompt()
// Fica assim:

const confirma = window.confirm('Realmente deseja apagar?') // Se clicar 'OK', o valor fica true; se clicar 'Cancelar', o valor fica false.

let num = window.prompt('Digite um número') // Se digitarmos, por exemplo, 15, o valor da variável fica como '15'. 
console.log(num) // Resultado: '15'
// Note que o valor fica como STRING. Isso é uma característica do que é digitado no prompt(). 

// Para convertermos esse valor de STRING para NUMBER, fazemos assim:

let num1 = Number(prompt('Digite um número'));
let num2 = Number(prompt('Digite outro número'));
let soma = num1 + num2; 

let resultado = alert(`O resultado foi de ${soma}`)