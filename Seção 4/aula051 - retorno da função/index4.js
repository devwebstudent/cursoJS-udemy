// A coisa começa a ficar mais complexa um pouco quando fazemos algo assim:
// Criamos uma função que escreva uma frase
// Criamos uma função dentro de outra função

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto // Aqui estou usando um parâmetro da função externa dentro da função interna
    }

    return falaResto; // Esse retorno é da função externa. A função maior está retornando a função interna sem executar ela. Quando retorno a função sem executar ela significa que estou retornando a função em si. Seria a mesma coisa que eu tivesse retornando a função interna direto.
}

const fala = falaFrase('Olá'); // fala está chamando falaFrase() e depois vai receber falaResto(); fala vai ser a própria função falaResto()
// A função falaResto veio para dentro dessa variável, pq retornei ela na função externa. Isso significa que agora essa variável se tornou uma função e para eu executar uma função, utilizo (). Veja abaixo.

const resto = fala('mundo!') // Passando argumento para a função falaResto() e retornando ela

console.log(resto) // Resultado: Olá mundo!