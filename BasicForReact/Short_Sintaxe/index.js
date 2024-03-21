//Short Sintaxe

const name = 'Arthur';
const age = 24;

const user = {name, age} // na short sintaxe quando se coloca apenas o nome da constante o JS entende como "name: name" e "age: age", por isso nao precisa por tudo.

document.body.innerText = JSON.stringify(user); // return => {"name":"Arthur","age":24}