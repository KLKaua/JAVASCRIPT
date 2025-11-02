// TAREFA 3

function calcularValorTotal(morangosKg, macasKg) {
    let precoMorango, precoMaca;

    if (morangosKg <= 5) {
        precoMorango = 2.50;
    } else {
        precoMorango = 2.20;
    }

    if (macasKg <= 5) {
        precoMaca = 1.80;
    } else {
        precoMaca = 1.50;
    }

    // Calcular o valor total da compra
    let valorMorango = morangosKg * precoMorango;
    let valorMaca = macasKg * precoMaca;
    let valorTotal = valorMorango + valorMaca;

    // Verificar se tem desconto de 10%
    let quantidadeTotal = morangosKg + macasKg;
    if (quantidadeTotal > 8 || valorTotal > 25) {
        // Aplicar desconto de 10%
        valorTotal = valorTotal * 0.90; // aplica 10% de desconto corretamente
    }

    // Retorna o valor total
    return valorTotal;
}

// Ler entradas do usuário
let morangosKg = parseFloat(prompt("Digite a quantidade de morangos (kg):"));
let macasKg = parseFloat(prompt("Digite a quantidade de maçãs (kg):"));

// Calcular o valor a ser pago
let valorAPagar = calcularValorTotal(morangosKg, macasKg);

// Exibir o resultado
alert(`O valor a ser pago pelo cliente é: R$ ${valorAPagar.toFixed(2)}`);

