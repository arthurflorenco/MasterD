//Objetos

const user = {
    name: 'Diego',
    idade: 27,
    adress: {
        street: "Rua dos Bobos",
        number: 1004
    },
}
//acessando os dados do usuario

document.body.innerText = Object.keys(user); // return => name,idade,adress

document.body.innerText = Object.values(user); //return => Diego,27,[object Object]

document.body.innerText = JSON.stringify(Object.values(user)); //return => ["Diego",27,{"street":"Rua dos Bobos","number":1004}]

document.body.innerText = JSON.stringify(Object.entries(user)); //return => [["name","Diego"],["idade",27],["adress",{"street":"Rua dos Bobos","number":1004}]]


//Desestruturaçao

const {name, idade: age, nickname = "arthurflorenco"} = user;

document.body.innerText = JSON.stringify({name,age,nickname}); // return => {"name":"Diego","age":27,"nickname":"arthurflorenco"}

//Desestruturaçao em uma function

const mostrarIdade = (user) => user.idade;

document.body.innerText = mostrarIdade(user); // return => 27

//ou

const mostrarIdadeAgain = ({idade}) => idade;
document.body.innerText = mostrarIdadeAgain(idade);
