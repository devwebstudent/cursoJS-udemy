/* RESUMO CHATGPT:

Getter e setter em JavaScript são usados para acessar e modificar os valores de propriedades de um objeto de uma maneira controlada. Isso ajuda a manter a consistência e a segurança dos dados em seu código.

Vamos começar com uma explicação simples:

Getter: Um getter é uma função que você pode usar para obter o valor de uma propriedade de um objeto. Ele permite que você recupere o valor de uma propriedade de maneira controlada. Por exemplo, digamos que você tenha um objeto pessoa com uma propriedade idade, você pode definir um getter para idade que calcula a idade em anos a partir da data de nascimento.

Setter: Um setter é uma função que você pode usar para definir o valor de uma propriedade de um objeto. Ele permite que você atualize o valor de uma propriedade de maneira controlada. Por exemplo, se você tiver uma propriedade senha em um objeto conta, você pode definir um setter para senha que verifica se a nova senha atende aos critérios de segurança.


*/

// Exemplo: 

// Definindo um objeto Pessoa
const pessoa = {
    _nome: 'João', // _nome é uma convenção para indicar que é uma propriedade privada
    _idade: 30,
    
    // Getter para obter o nome
    get nome() {
      return this._nome;
    },
    
    // Getter para obter a idade
    get idade() {
      return this._idade;
    },
    
    // Setter para definir a idade
    set idade(novaIdade) {
      if (novaIdade > 0 && novaIdade < 150) {
        this._idade = novaIdade;
      } else {
        console.log('Idade inválida');
      }
    }
  };
  
  // Usando o getter para obter o nome
  console.log(pessoa.nome); // Saída: João
  
  // Usando o getter para obter a idade
  console.log(pessoa.idade); // Saída: 30
  
  // Usando o setter para definir uma nova idade
  pessoa.idade = 35;
  
  // Usando o getter para obter a nova idade
  console.log(pessoa.idade); // Saída: 35
  
  // Tentando definir uma idade inválida
  pessoa.idade = 200; // Saída: Idade inválida  