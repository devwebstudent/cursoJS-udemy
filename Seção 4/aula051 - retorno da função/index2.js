// Outra coisa que podemos fazer que já vimos em aulas anteriores é o exemplo de função que não retorna nada, mas faz alguma coisa útil
// Nesse parâmetro tem uma função que não retorna nada, mas pode fazer alguma coisa útil, como mudar a cor de fundo do body
// Essa função não está retornando nada, pois não preciso que o valor retorne

document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue'
})