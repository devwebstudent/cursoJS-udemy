let cpf = '705.484.450-52'


// Para remover os pontos e o traço, vamos utilizar expressões regulares
// Isso é uma representação numérica que representa qualquer coisa que não é um número
// Tudo que não for um número vai ser substituído por nada
let cpfLimpo = cpf.replace(/\D+/g, '')

// Convertendo essa string em array, para podermos utilizar reduce()
cpfArray = Array.from(cpfLimpo) // ['7', '0', '5', '4', '8', '4', '4', '5', '0', '5', '2']

console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0))