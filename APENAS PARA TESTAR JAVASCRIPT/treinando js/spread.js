const num = [10, 20, 30, 40, 50, 60]
const [n1, n2, n3, ...resto] = num
console.log(n1, n2, n3)
console.log(resto)

const num1 = [70, 80, 90]
const num2 = [100, 110, 120]
const spread = [...num1, ...num2]
console.log(spread)