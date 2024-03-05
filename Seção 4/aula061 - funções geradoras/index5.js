// Suponha que tenho um sistema que tenho etapas onde uma função executa uma tarefa, outra função executa outra tarefa
// Preciso que essas funções sejam executadas na ordem

function* geradora5() {
    yield function() {
        console.log('Vim do yield 1')
    }

    yield function() {
        console.log('Vim do yield 2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value // Vai me entregar o valor do primeiro yield
const func2 = g5.next().value // Vai me entregar o valor do segundo yield

func1() // Resultado: Vim do yield 1
func2() // Resultado: Vim do yield 2