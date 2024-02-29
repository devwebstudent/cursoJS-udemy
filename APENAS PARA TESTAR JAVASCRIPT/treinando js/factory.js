function criarPessoa(nome, idade) {
    return {
        nome, 
        idade,
        get saudadao() {
            return 'oi'
        }
    }

}

let p1 = criarPessoa('Júnior', 30)
console.log(p1)

console.log(p1.saudadao)