const numeros = [15, 20, 25, 30, 35, 40]

const dobro = numeros.map((num) => {
    return num * 2
})

console.log(dobro)


// Aqui temos um problema que o array original também será alterado - ver index5.js e testemap2.js para ver a forma que o array original não é modificado
const pessoas = [{nome: 'João', sobrenome: 'Silva'}, {nome: 'Carlos', sobrenome: 'Aguiar'}]
const mapeando = pessoas.map((objeto, indice) => {
  objeto.id = indice
  return objeto
});

console.log(pessoas)
console.log(mapeando)