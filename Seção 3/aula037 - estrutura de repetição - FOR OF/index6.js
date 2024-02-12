// Se tentarmos iterar o mesmo objeto utilizando FOR OF, vai dar erro e dizer que o objeto não é iterável, pois objeto não tem índices

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

for (let valor of pessoa) {
    console.log(valor) // Resultado: TypeError: pessoa is not iterable
}