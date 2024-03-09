const nums = [10, 20, 30]
const soma = nums.reduce((acum, valor) => {
    acum += valor
    return acum
    
}, 0)

console.log(soma)