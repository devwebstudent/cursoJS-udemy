// Nessa função construtora vamos remover os pontos do CPF e deixar uma string só com números do CPF
// Vamos criar um método que valida o CPF no prototype dessa função ValidaCPF

function ValidaCPF(cpfEnviado) {    
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            // Vamos mandar uma expressão regular que substitui tudo que não for número para nada (string vazia)
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

// Criando o método valida(), que vai validar nosso CPF enviado
// Quero que esse valida() retorne ou VERDADEIRO (caso o CPF seja válido) ou FALSO (caso inválido)
// A qualquer hora na validação se der qualquer erro, vou retornar FALSE
// Na hora que essa função ValidaCPF for chamada, quero saber se esse parâmetro cpfEnviado foi enviado. Se não foi, já vou retornar de cara FALSE.
// Nesse prototype não tenho acesso ao parâmetro 'cpfEnviado', então tamos ter que acessar 'cpfLimpo'

ValidaCPF.prototype.valida = function() {
    // Validações:
    // Se não for enviado o CPF, vai retornar false
    // Colocamos this aqui, pq 'cpfLimpo' é de dentro do meu objeto
    if(typeof this.cpfLimpo === 'undefined') return false;
    
    // Se o tamanho do CPF for diferente de 11, retorna false
    if(this.cpfLimpo.length !== 11) return false;
    
    // Temos que chamar esse método para ele executar. Vamos mandar nosso 'cpfParcial' aqui
    // Essa variável 'cpfParcial' não tem nada a ver com o parâmetro do método criaDigito, não é a mesma variável.
    const cpfParcial = this.cpfLimpo.slice(0, -2) // Pegando 9 primeiros números do CPF
    const digito1 = this.criaDigito(cpfParcial)
    
    return true;
}

// Método que recebe os números do CPF e faz cálculo dos dígitos
// Vamos receber o parâmetro 'cpfParcial', pois vamos receber os 9 primeiros números para gerar os digitos. De acordo com oq vou receber, fazemos essa conta.
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    // Convertendo 'cpfParcial' em um Array
    const cpfArray = Array.from(cpfParcial)

    // Fazendo o cálculo dos digitos utilizando reduce(). Vamos precisar de um acumulador que vai me dar o valor total e também vamos precisar de um contador regressivo
    const regressivo = 
}

const cpf = new ValidaCPF('705.484.450-52')
console.log(cpf.valida())