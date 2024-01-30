let numero = Number(window.prompt('Digite um número:')); // O que for digitado no prompt vai ficar como STRING; Convertemos para NUMBER
let numeroTitulo = document.getElementById('numero-titulo'); // Para salvar o elemento que selecionamos na variável
let texto = document.getElementById('texto'); // Salvando nossa div dentro da variável

numeroTitulo.innerHTML = numero; // O número que eu digitar no prompt vai aparecer no elemento título
texto.innerHTML = '' // Para limpar a div antes de aparecer qualquer resultado.
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;