// Fazendo com FOR (clássico)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= numeros.length; i++) {
    let valor = numeros[i]
    if (valor === 2) {
        console.log('Pulei o número 2')
        continue;
    }

    console.log(valor)
    if (valor === 7) {
        console.log('7 encontrado, saindo')
        break; 
    }
}