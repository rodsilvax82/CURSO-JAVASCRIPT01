console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
    `Salvado`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
listaDeDestinos.push(`Recife`); //Adicionando um item na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //Deleta itens da lista 
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);