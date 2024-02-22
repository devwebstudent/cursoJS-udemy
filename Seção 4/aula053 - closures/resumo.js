/* RESUMO CHAT GPT:
Escopo léxico:
Em resumo, quando você define uma função dentro de outra função, a função interna tem acesso ao escopo da função externa.
Isso significa que a função interna pode acessar as variáveis e parâmetros da função externa, mas não o contrário.


Closure:
É uma função interior que tem acesso a variáveis de uma função exterior, mesmo após a função exterior ter retornado.
Ela "lembra" do escopo onde foi criada e pode acessar e manipular variáveis desse escopo, mesmo após a função externa ter concluído sua execução.

*/

function externa() {
    var mensagem = 'Olá';

    function interna() {
        console.log(mensagem); // A função interna pode acessar a variável 'mensagem' da função externa
    }

    return interna;
}

var minhaFuncao = externa(); // Retorna a função interna, mas a função externa já executou

minhaFuncao(); // Ainda assim, a função interna retém acesso à variável 'mensagem' através do closure

// Resultado: Olá