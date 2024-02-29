// Para treinarmos, vamos criar uma factory function (que cria um objeto) e vou criar essa calculadora como se fosse um objeto
// Meu objeto vai ter acesso a tudo que tiver dentro da função
// O this é quem está chamando a função. Quem chama o método é quem é o this.
// O this varia de acordo com quem está chamando ele
// Se utilizarmos arrow function, o this vai ser sempre o próprio objeto, que no caso é a calculadora
// A arrow function não permite a alteração do this
// eval() é uma função perigosa, muito cuidado com o que é passado para ela, pois ela tenta executar códigos JavaScript

function criaCalculadora() {
    return {
        // Atributos
        display: document.querySelector('.display'), // Display dentro de um atributo do objeto.





        // Tudo que for método, vamos colocar daqui pra baixo


        // Esse método vai inicializar a calculadora. Esse inicia já vai iniciar minha calculadora de cara.
        inicia() {

            // Sempre que quero referenciar um atributo(propriedade) do meu objeto, temos que utilizar a palavra this.
            // Se preciso inicializar o método cliqueBotoes() dentro do inicia():            
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        // Método que chama a função realiza conta ao pressionarmos enter
        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        // Método que faz a conta
        realizaConta() {
            // Pega o texto do display
            let conta = this.display.value; // Essa é a conta que vai ser executada


            // O que está dentro do display, vai ser o texto do display
            try {
                conta = eval(conta); // Aqui ele vai tentar realizar a conta

                if (!conta) { // Se a conta for NaN ou qualquer valor falso, como 0
                    alert('Conta inválida, tente novamente')
                    return;
                }

                this.display.value = String(conta)
            } catch (erro) {
                alert('Conta inválida, tente novamente')
                this.clearDisplay()
                return
            }
        },

        // Método que limpa o display
        clearDisplay() {
            this.display.value = ''
        },

        // Método que apaga um número
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1) // O tamanho da string - 1
        },

        // Vamos capturar os cliques e pegar o valor de dentro do botão
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                // Jogando valores dos botões no display
                // Abaixo o evento está chegando aqui do addEventListener
                // Já vai chegar no evento o e.target, ou seja, qual botão estou clicando na página
                const el = e.target

                // O this aqui é document, mas quero que ele aponte para minha calculadora

                // Se o elemento contém essa classe eu quero fazer um link do que tá no botão que vai pro display
                if (el.classList.contains('btn-num')) {
                    // Como esse método vai ser chamado aqui de dentro de outro método, preciso do this
                    this.btnParaDisplay(el.innerText); // Aqui vamos enviar o innerText do elemento(botão) que está sendo clicado para nosso método btnParaDisplay()
                }

                if (el.classList.contains('btn-clear')) { // Se o botão clicado for o clear, chama o método que limpa o display
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) { // Se o botão clicado for a setinha, apaga um número
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) { // Se clicar no botão de igual, faz a conta
                    this.realizaConta();
                }
            })
        },

        // Nesse método vamos receber o valor do botão
        btnParaDisplay(valor) {
            this.display.value += valor // Vamos colocar no valor do display o botão clicado
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia() // Executando o método que vai inicializar a calculadora