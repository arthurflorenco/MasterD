//Optional Chaining

const user = {
    name: 'Diego',
    idade: 27,
    adress: {
        street: "Rua dos Bobos",
        number: 1004,
        /*zip: {
            code: 373829739,
            city: "Brasília"
        }*/
    },
}

// O uso do "?" antes do "." é usado para verificar se  um objeto tem esse atributo antes

document.body.innerText = JSON.stringify(user.adress?.zip?.code ?? "nao informado") //return => Nao Informado. (retornou isto porque neste caso o "zip" nao existe)