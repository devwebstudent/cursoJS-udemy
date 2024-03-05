// Outra coisa que podemos fazer, que é perigoso, é fazer um gerador infinito
// Imagina que tenho um contador aqui e não quero ele inteiro de cara, não quero que ele me entregue todos os valores de uma vez.
// Quero que a cada vez que eu chame a geradora2 ela me entregue um valor: 0, 1, 2, etc.

function* geradora2() {
    let i = 0
    
    // Criando um loop infinito dentro da nossa função geradora
    // Esse gerador não tem fim, é infinito
    while(true) {
        yield i;
        i++
    }
}

const g2 = geradora2()
// A cada vez ele vai me entregar um valor
console.log(g2.next().value) // 0
console.log(g2.next().value) // 1
console.log(g2.next().value) // 2
console.log(g2.next().value) // 3