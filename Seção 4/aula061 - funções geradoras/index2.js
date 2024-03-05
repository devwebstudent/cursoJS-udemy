// Outra coisa que podemos fazer é iterar sobre isso
// O for sabe quando a função termina. Ele vai fazer a iteração até o último valor

function* geradora1() {
    yield 'valor 1';
    yield 'valor 2'
    yield 'valor 3'
}

const g1 = geradora1();
for(let valor of g1) {
    console.log(valor)
}