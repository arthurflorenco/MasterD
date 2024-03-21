const array =  [1, 2, 3, 4, 5];

const novoArray = array.map(item => {return item * 2;}) //diferente do metodo forEach(), o map() pode adicionar uma funçao dentro dele

document.body.innerText = JSON.stringify(novoArray) // return => [2,4,6,8,10]