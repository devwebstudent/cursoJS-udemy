// Simulando um reduce utilizando forEach()
// Vamos somar todos esses valores

const a1 = [10, 20, 30]
let total = 0
a1.forEach((valor) => {
    total += valor    
})

console.log(total) // 60