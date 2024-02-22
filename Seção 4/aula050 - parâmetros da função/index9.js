// Também podemos utilizar o rest operator para pegar os argumentos, mesmo que não utilizemos a palavra function
// Podemos pegar os argumentos de uma arrow function, por exemplo:

const conta = (...argumentos) => {
    console.log(argumentos); // Resultado: [ '+', 0, 20, 30, 40, 50 ]
};

conta('+', 0, 20, 30, 40, 50)