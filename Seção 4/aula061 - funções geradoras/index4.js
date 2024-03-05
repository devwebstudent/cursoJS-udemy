// Outro exemplo: vamos fazer um gerador que delega tarefa para outro gerador
// A geradora3 faz 0, 1 e 2 pra mim

// Deleguei para essa função fazer 0, 1 e 2
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

// Nessa geradora4 quero delegar parte do serviço dela pra geradora3
// Daqui eu continuo: 3, 4, 5...
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

// Aqui chamamos geradora4, pois ela já usa a geradora3
const g4 = geradora4()

for (valor of g4) {
    console.log(valor)
}