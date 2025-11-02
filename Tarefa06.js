//TAREFA 06 

  // Declarar um array para armazenar os números
let numeros = [];

// Ler 10 números inteiros do usuário
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
  numeros.push(numero);
}

// Ler o valor de x
let x = parseInt(prompt("Digite o valor de x:"));

// Contar quantas vezes x aparece no array
let contador = 0;
numeros.forEach((numero) => {
  if (numero === x) {
    contador++;
  }
});

// Exibir o resultado
console.log(`O número ${x} aparece ${contador} vezes no array.`);

