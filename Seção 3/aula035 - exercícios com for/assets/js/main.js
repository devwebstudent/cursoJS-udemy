// Tudo relacionado a 'document' é relacionado com o DOM
// Com querySelector, no caso das classes, se tiver mais de uma classe com o mesmo nome, ele vai selecionar apenas a primeira classe que for encontrada

const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'section', texto: 'Frase 3'}, // 2
    {tag: 'footer', texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container'); // Selecionando nossa section container
const div = document.createElement('div') // Criando uma div que vai conter todos os elementos que vamos criar. A div vai ficar dentro do nosso container.

for (let i = 0; i < elementos.length; i++) { // Pegando as coisas do 'elementos'
    // A cada iteração do laço, vamos fazer a desestruturação de um objeto
    // Vamos desestruturar tag e texto do nosso array
    let { tag, texto } = elementos[i];
    
    // Agora precisamos criar esses elementos a cada iteração do laço
    let tagCriada = document.createElement(tag) // A cada iteração, vou criar um valor de tag (ou p, ou div, ou section, ou footer)

    // Agora vamos colocar um texto associado a cada tag criada
    tagCriada.innerHTML = texto; // Dentro da tag criada (ex: p) vamos colocar um texto
    div.appendChild(tagCriada); // Para adicionar a tag que foi criada a nossa div


    // Agora vamos ter nossa div com todos esses elementos criados dentro dela e com os textos dentro desses elementos
}

container.appendChild(div)


/* RESUMINDO: 
- selecionamos o container que já existia na página
- criamos a div
- criamos as tags dentro do for e adicionamos ela na nossa div
- a cada iteração do laço criamos uma tag e adicionamos um texto nela
- depois de termos todas as tags criadas, adicionamos ela dentro da div que criamos
- por fim colocamos essa div dentro do nosso container

*/