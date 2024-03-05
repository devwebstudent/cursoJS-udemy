// A função splice() faz o que pop(), push(), shift(), unshift() fazem e mais um pouco
// Essa função mexe no array original, assim como pop() e push()

// nomes.splice():
//  -> no primeiro parâmetro - colocamos o índice que quero começar a mexer
//  -> no segundo parâmetro - quantos elementos quero remover do meu array
//  -> no terceiro parâmetro posso colocar elementos para eu adicionar separados por vírgula

// Fica assim: nomes.splice(índice atual, remove, adiciona elem1, elem2, elem3)


//              0        1       2          3          4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']


// Simulando o método array.pop() -> para remover o último elemento do meu array
const removidos = nomes.splice(4, 1) // Qual elemento quero remover (último elemento, índice 4), quantos elementos quero remover (1 elemento) -> removemos do índice 4 um elemento

// A função splice() também retorna o elemento que foi removido, mas dentro de um ARRAY, pq posso remover mais de 1 elemento 
console.log(removidos) // [ 'Júlia' ]
console.log(nomes) // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]