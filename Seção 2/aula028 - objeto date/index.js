// Objeto Date serve para trabalharmos com datas no JavaScript. Vamos jogar esse objeto em uma variável e fazer algo
// A função Date() é uma função construtora - ainda vamos aprender a criar nossas próprias funções construtoras
// Essa função construtora Date() tem várias funções que nos ajudam a trabalhar com datas (data, hora, minuto, segundo, etc.)
// Neste momento a única coisa que devemos saber é que para utilizar o objeto Date(), precisamos utilizar a palavra new na frente. Sempre que utilizamos a palavra 'new', estou falando com uma função construtora
// Uma função construtora sempre vai começar com a primeira letra maiúscula

// Quando chamei a função Date() sem passar nenhum parâmetro, toda vez que eu executar esse código o JS vai gerar um novo objeto de data com a data atual(data, hora, minuto, segundo, etc.)


// Marco 0 = 01/01/1970 - Unix Timestamp ou época unix
// const tresHoras = 60 * 60 * 3 * 1000; // 60 segundos * 60 segundos  * 3 (horas) * 1000 (milisegundos) -> temos o valor em milésimos de segundos
// const umDia = 60 * 60 * 24 * 1000; // 1 dia em milésimos de segundos
// const data = new Date(0 + tresHoras + umDia); // Criando um objeto e salvando na variável - essa data é formada por milésimos de segundos contados a partir de 01/01/1970 (época unix)
// console.log(data.toString())


// O mês em JavaScript começa do 0 e termina no 11 -> 0 = Janeiro, 11 = Dezembro -> Se quero o mês real faço getMonth() + 1
// A semana vai de 0 a 6 -> 0 = Domingo, 6 = Sábado


// Criando data atual
const data1 = new Date(); // Não específicamos nenhum parâmetro, então ele vai criar a data atual
console.log(data1.toString());


// Criando data específica
const data2 = new Date(2023, 3, 25); // Vai criar uma data no dia especificado. -> ano, mês, dia, hora, minuto, segundo, milésimo de segundo // Obs.: mês no JS começa com 0 e vai até 11
console.log(data2.toString());


// Outro modo de criar data especificada - utilizando string
const data3 = new Date('2020-07-28 15:30:15'); // ano-mês-dia hora:minuto:segundo // Aqui podemos colocar a data normal utilizando string
console.log(data3.toString());

console.log('Dia', data3.getDate()) // Pegando o número do dia no mês // Resultado: Dia 28
console.log('Mês', data3.getMonth() + 1) // Pegando o mês // Resultado: Mês 7
console.log('Ano', data3.getFullYear()) // Pegando o ano // Resultado: Ano 2020
console.log('Hora', data3.getHours()) // Pegando a hora // Resultado: Hora 15
console.log('Minuto', data3.getMinutes()) // Pegando minutos // Resultado: Minuto 30
console.log('Dia da semana', data3.getDay() + 1) // Pegando o dia da semana // Resultado: Dia da semana 3

// Podemos obter os milésimos de segundo (ms) da data fazendo:
console.log(Date.now()) // Resultado: 1707260251723 -> Representa do marco 0 (01/01/1970) até hoje (06/02/2024) - É a data contada em milésimos de segundo (ms)


// VAMOS CRIAR UMA FUNÇÃO QUE FORMATA UMA DATA:
// Ver no index2.js desta aula