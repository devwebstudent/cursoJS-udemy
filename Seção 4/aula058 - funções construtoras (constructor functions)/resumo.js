// Tanto as factory functions quanto as funções construtoras criam objetos, elas fazem coisas similares.
// A única diferença é que a factory function retorna um objeto, a gente faz ela retornar um objeto.
// A factory function é uma função normal em que a gente pede que retorne um objeto.
// A função construtora já faz muita coisa automaticamente para nós: ela já cria o objeto, já retorna o objeto. A única coisa que precisamos é criar ela.


// Aqui está o que new faz:

// Cria um novo objeto vazio.
// Faz this como referência ao novo objeto criado dentro da função construtora.
// Executa o código dentro da função construtora, onde você pode definir propriedades e métodos para o objeto usando this.
// Retorna o objeto criado, a menos que a função construtora tenha uma instrução return explícita que retorna outro objeto. Se não houver um return, o objeto recém-criado é retornado automaticamente.