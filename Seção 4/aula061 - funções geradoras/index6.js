// O return vai retornar o valor e vai fazer com que a função geradora termine ali

function* geradora5() {
    yield function() {
        console.log('Vim do yield 1')
    }

    // A função vai terminar aqui no return, nada mais abaixo vai ser executado
    return function() {
        console.log('Vim do return')
    }

    // Esse código não vai mais ser executado, pois estou usando return
    // Esse yield não existe mais pq estou utilizando a palavra return
    yield function() {
        console.log('Vim do yield 2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1() // Resultado: Vim do yield 1
func2() // Resultado: Vim do return