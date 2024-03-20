//Nullish Coalescing Operator

const idade  = null;

document.body.innerText = 'Sua idade é: ' + (idade ?? "Desconhecido"); // (??) retorna somente se nao tiver nenhum valor, se no caso idade fosse igual "0" o console retornaria "0". Se fosse usado o "||(ou)", retornaria null.

