// Exercício: vamos criar uma função que retorna a hora atual
// Quero que essa data seja exatamente um objeto do Date. Vamos checar isso utilizando o IF.


// Se eu enviar uma data, tem que ser uma instância de Date()
function retornaHora(data) {
    if (data && !(data instanceof Date)) { // Se a data for enviada e se essa data não for uma instância de Date, vai dar erro. Só vai ser uma instância de Date se utilizarmos new Date().
        throw new TypeError('Esperando instância de Date') // Lançando um erro se não for uma data.
    }

    // Se eu não enviar uma data, ele vai gerar uma data automática pra mim.
    if (!data) {
        data = new Date(); 
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}


// Tratando nosso valor
try {
    const data = new Date()
    const hora = retornaHora(data) // Se mandarmos um número, vai retornar um erro, pois a função só aceita se for uma instância de Date()
    console.log(hora)
} catch(e) {
    // Tratar erro
    console.log(e) // Para vermos o erro
} finally {
    console.log('FINALLY: Tenha um bom dia')
}

// No nosso exercício, só vai ser mostrada a hora e o FINALLY, pois não tem erro nenhum, pq enviamos uma instância de Date().
// Caso enviemos um número pra nossa função, vai retornar um erro, pois ela só aceita se for uma instância de Date().