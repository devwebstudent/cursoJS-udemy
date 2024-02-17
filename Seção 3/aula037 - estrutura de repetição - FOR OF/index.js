// FOR OF é específico para estruturas iteráveis, como strings, arrays, etc.
// Como uma string tem índices, podemos iterar (percorrer) ela

//            012345678910
const nome = 'Luiz Otávio';
console.log(nome.length) // 11 elementos

// Iterando essa string utilizando o FOR clássico:
for (let i = 0; i < nome.length; i++) { // Isso vai acessar cada letra da nossa string
    console.log(nome[i]); 
}