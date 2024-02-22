// Posso passar ou 1 ou vários parâmetros para a função, separados por vírgula
// Podemos ou não enviar argumentos para a função; podemos ou não criar parâmetros para a função
// A função criada com a palavra FUNCTION tem uma variável especial chamada 'arguments' que guarda todos os argumentos enviados

function funcao() {
    console.log(arguments) // arguments vai guardar todos os argumentos que enviei para minha função
    console.log(arguments[0]) // Resultado: valor
}

funcao('valor', 1, 2, 3, 4, 5, 6); // Chamando a função e executando ela com (). Aqui podemos enviar argumentos para suprir o valor de parâmetros da nossa função acima, separados por vírgula.