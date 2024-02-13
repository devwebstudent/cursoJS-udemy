// NodeList = apesar de não ser um array, ele se comporta de maneira similar a um array
// O que queremos nesse exercício: vamos pegar a cor de fundo do body e colocar nos parágrafos. Os parágrafos vão ficar com a cor de fundo do nosso body.

const div = document.querySelector('.paragrafos'); // Selecionando nossa div
const paragrafos = div.querySelectorAll('p') // Selecionando todos os parágrafos de dentro da div

const estilosBody = getComputedStyle(document.body) // Pegando os estilos computados que o navegador computou do CSS do body. Nessa const estilosBody tem tudo de CSS que foi computado pelo navegador no body.
// getComputedStyle(elemento que queremos pegar)

const backgroundColorBody = estilosBody.backgroundColor; // Aqui estamos pegando a cor de fundo do body


// Feito isso, queremos colocar a cor de fundo dos parágrafos da mesma cor de fundo do nosso body e colocar a cor do texto como branco.
for (let p of paragrafos) { // Iterando sobre cada parágrafo. A cada iteração do laço, ele percorre um parágrafo.
    console.log(p)
    p.style.backgroundColor = backgroundColorBody; // Colocando nossos parágrafos com a mesma cor de fundo do body
    p.style.color = 'white'; // Colocando a cor do texto branca em todos os parágrafos
}