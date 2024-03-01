// Nesse exercício vamos converter nossa calculadora feita com função fábrica para função construtora

function Calculadora() {
    this.display = document.querySelector('.display') // Selecionando o input

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    // Método que captura o enter
    this.capturaEnter = (e) => {
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.realizaConta()
            }
        })
    }

    this.capturaCliques = () => {
        // No document, ele vai 'ouvir' cliques, ou seja, qual botão foi pressionado
        document.addEventListener('click', (event) => {
            // Aqui vamos jogar o target do evento, qual botão está sendo clicado, dentro da variável el
            // Sempre que eu usar el, estou me referindo ao botão que está sendo clicado
            
            const el = event.target; // event.target -> vai pegar o target do event, pegar qual botão foi pressionado


            // Se na lista de classes do botão que tá sendo clicado conter a classe btn-num, criamos um método que adiciona o número que está sendo clicado no display
            // Abaixo, os métodos estão recebendo o elemento
            if (el.classList.contains('btn-num')) {
                // Aqui vamos enviar o botão que tá sendo clicado para o método que mostra o numero no display(input)
                // Mandando elemento que está vindo do event.target
                this.addNumDisplay(el);
            }

            if (el.classList.contains('btn-clear')) {
                this.clear();
            }

            if (el.classList.contains('btn-del')) {
                this.del();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }

        })
    }


    // Método que faz a conta
    this.realizaConta = () => {
        try {
            // Vamos avaliar isso com eval: se passar como código JavaScript, é uma conta válida
            // Capturando a conta
            const conta = eval(this.display.value)

            // Se diferente de conta (se for NaN ou falsa)
            if (!conta) {
                alert('Conta inválida, tente novamente!')
                return;
            }


            this.display.value = conta;

        } catch (erro) {
            alert('Conta inválida, tente novamente!')
            return; // Só para garantir que vamos sair do método
        }
    }

    // Método que adiciona número no display
    this.addNumDisplay = (el) => {
        // Pegando valor do input e alterando; Colocamos += que é o que já tá no display + texto do botão que for clicado
        // el.innerText -> o texto interno do botão
        this.display.value += el.innerText;
        this.display.focus(); // Sempre que adicionarmos um número no display, o foco vai pro display
    }

    // Método que limpa o display, que vai receber um elemento
    this.clear = () => {
        // Limpando display da calculadora
        this.display.value = ''
    }

    // Método que limpa o último botão clicado
    this.del = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

}




// Estamos falando pro JS usar o meu molde da função construtora para criar um novo objeto de calculadora
const calculadora = new Calculadora();
calculadora.inicia(); // Iniciando nosso método inicia()