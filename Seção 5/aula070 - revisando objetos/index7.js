// Lembrando: a gente começa o nome da função com letra maiúscula quando usamos Constructor Function
// Colocamos só o nome da coisa que queremos
// Nunca esquecer de usar a palavra 'new'
// O 'this' varia de acordo com quem está criando o objeto. O this fica atrelado ao objeto.

// Note que ao darmos console.log(p1), aparece a palavra 'Pessoa' antes do objeto. 'Pessoa' representa o construtor desse objeto. Construtor é a função que construiu esse objeto.

// Utilizando Constructor Function para criar objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda')
console.log(p1)



/* O que 'new' faz:
  - cria um objeto vazio {}
  - atrela o 'this' ao objeto
  - retorna automaticamente o objeto(this)
*/