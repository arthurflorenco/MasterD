//Rest Operator

const array = [1, 2, 3, 4, 5, 6, 7];

// uso do "...rest"
// e  Desestruturaçao

const [x, y, ...z] = array; //Utilizando os "...(tres pontos)" ele retorna o restante do numeros apos o y

document.body.innerText = JSON.stringify(Object.entries({x, y, z})) 
/* 
return =>   [["x",1],
            ["y",2],
            ["z",[3,4,5,6,7]]]
*/