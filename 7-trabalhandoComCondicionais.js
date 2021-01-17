console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvado`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem");
    listaDeDestinos.splice(1, 1); //Deleta itens da lista 
}
else {
    console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

//Operadores lógicos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
