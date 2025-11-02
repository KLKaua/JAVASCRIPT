///TAREFA 01 

// Declarar um array para armazenar os números
let numeros = [];

// Ler 10 números inteiros do usuário
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
  numeros.push(numero);
}

// Exibir os números ímpares
numeros.forEach((numero) => {
  if (numero % 2 !== 0) {
    alert(numero);
  }
});
