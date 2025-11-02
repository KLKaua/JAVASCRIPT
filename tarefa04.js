//TAREFA 04 

        // Array de 20 números inteiros
const N = [34, 12, 56, 7, 89, 24, 5, 78, 2, 45, 67, 98, 1, 23, 15, 9, 4, 88, 55, 3];

// Encontrar o menor elemento e sua posição
let menor = N[0];
let posicao = 0;

for (let i = 1; i < N.length; i++) {
  if (N[i] < menor) {
    menor = N[i];
    posicao = i;
  }
}

// Exibir o resultado
alert(`O menor elemento de N é ${menor}, e sua posição dentro do array é: ${posicao}.`);



