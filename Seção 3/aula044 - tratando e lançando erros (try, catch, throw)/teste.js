// Testando try, catch e throw

function verificarIdade(idade) {
    if (idade < 18) {
        throw new Error("A idade mínima é 18 anos."); // Lança uma exceção
    } else {
        console.log("Você pode prosseguir."); // Isso será executado se a idade for >= 18
    }
}

try {
    verificarIdade(15); // Isso vai lançar uma exceção
    
} catch (error) {
    console.log("Ocorreu um erro:", error.message); // Exibe a mensagem de erro
}