// A única coisa que devemos nos preocupar é quando a função deve parar de se chamar de volta
// A função recursiva tem um limite máximo do quanto ela pode executar (call stack)

function recursiva(max) {
    console.log(max)
    if (max >= 50) return;
    max++;
    recursiva(max)
}


recursiva(0)