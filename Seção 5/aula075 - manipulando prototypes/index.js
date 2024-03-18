// Sempre que crio um objeto literal o JS faz automaticamente a chamada da função construtora de objetos. É o mesmo que fazer new Object

// Também sabemos que todas as funções construtoras tem um prototype. A função construtora tem um objeto atrelado a ela que é o Object.prototype


const objA = {
    // Esse prototype vem implicitamente numa chave(propriedade) que a gente vê no navegador chamada '__proto__'
    chaveA: 'A'

    // Seria mais ou menos assim:
    // __proto__: Object.prototype
};

// Tudo isso acontece por baixo dos panos sem a gente falar nada. Só de eu criar um objeto isso tudo já ocorreu.

// Ao vermos objA no console do navegador, vemos que dentro do __proto__ temos o Object.prototype. Como sabemos que isso é o Object.prototype?
// Ele não tem __proto__, ele não tem pai, ele é o último da cadeia. O Object.prototype não tem a propriedade __proto__.


// Outra coisa que podemos fazer para confirmar é:
// objA.__proto__ === Object.prototype -> resultado: true