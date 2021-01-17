console.log("\nTrabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = true;
const destino = "Curitiba";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

// while(contador < listaDeDestinos.length){
//     if(listaDeDestinos[contador] == destino){
//         destinoExiste = true;
//         break;
//     }
//     contador ++;
// }
for (let i = 0; i < listaDeDestinos.length; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

console.log("Destino existe: ", destinoExiste);


