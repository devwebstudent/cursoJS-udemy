// Solução para que o array original não seja modificado
const pessoas = [{nome: 'João', sobrenome: 'Silva'}, {nome: 'Carlos', sobrenome: 'Aguiar'}]
const mapeando = pessoas.map((objeto, indice) => {
  console.log(objeto)
  let novoObjeto = {...objeto}
  novoObjeto.id = indice + 1
  return novoObjeto
});

console.log(pessoas)
console.log(mapeando)