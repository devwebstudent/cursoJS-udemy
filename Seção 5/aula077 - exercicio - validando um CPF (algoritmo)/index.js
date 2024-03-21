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

ValidaCPF.prototype.valida = function () {
    // Validações:
    // Se não for enviado o CPF, vai retornar false
    // Colocamos this aqui, pq 'cpfLimpo' é de dentro do meu objeto
    if (typeof this.cpfLimpo === 'undefined') return false;

    // Se o tamanho do CPF for diferente de 11, retorna false
    if (this.cpfLimpo.length !== 11) return false;

    // Temos que chamar esse método para ele executar. Vamos mandar nosso 'cpfParcial' aqui
    // Essa variável 'cpfParcial' não tem nada a ver com o parâmetro do método criaDigito, não é a mesma variável.
    const cpfParcial = this.cpfLimpo.slice(0, -2) // Pegando 9 primeiros números do CPF
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1) 
    
    // Para fazermos um novo CPF e comparar com o CPF que foi enviado pra gente
    const novoCpf = cpfParcial

    return true;
}

// Método que recebe os números do CPF e faz cálculo dos dígitos
// Vamos receber o parâmetro 'cpfParcial', pois vamos receber os 9 primeiros números para gerar os digitos. De acordo com oq vou receber, fazemos essa conta.
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    // Convertendo 'cpfParcial' em um Array
    const cpfArray = Array.from(cpfParcial)

    // Fazendo o cálculo dos digitos utilizando reduce(). Vamos precisar de um acumulador que vai me dar o valor total e também vamos precisar de um contador regressivo.
    // Vamos criar uma variável de contador regressivo. Temos 9 números no nosso 'cpfArray'. Na primeira rodada precisamos de 10, 9, 8, 7, etc. até 2. Na segunda rodada precisamos de 11 até 2.
    let regressivo = cpfArray.length + 1 // regressivo = tamanho do array + 1 -> o regressivo vai iniciar de 10

    // O digito tem que ter o valor do acumulador, que é 237
    let total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor))
        regressivo--; // Pro regressivo contar de frente pra trás
        return ac; // No acumulador sempre temos que retornar algo, se não vai ficar undefined
    }, 0) // Fazendo o acumulador começar de 0


    // Agora vamos fazer -> 11 - (237 % 11) = 5
    const digito = 11 - (total % 11)
    // Se o digito for maior que 9, retorna 0, caso contrário retorna o próprio digito
    return digito > 9 ? 0 : digito


}

const cpf = new ValidaCPF('705.484.450-52')
console.log(cpf.valida())