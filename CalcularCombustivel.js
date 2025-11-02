// TAREFA 1 

    function calcularCombustivel(litros, tipoCombustivel) {
  let precoPorLitro;
  let desconto;

  if (tipoCombustivel === 'A') {
    // Álcool
    precoPorLitro = 2.90;
    desconto = litros <= 20 ? 0.03 : 0.05;

  }
  
  else if (tipoCombustivel === 'G') {
    // Gasolina
    precoPorLitro = 3.30;
    desconto = litros <= 20 ? 0.04 : 0.06;
  } 
  
  else {
     alert("Tipo de combustível inválido");
  }

  let valorSemDesconto = litros * precoPorLitro;
  let valorDesconto = valorSemDesconto * desconto;
  let valorFinal = valorSemDesconto - valorDesconto;

 alert(+valorFinal);
}

// Exemplo de uso:
console.log(calcularCombustivel(25, 'A')); // Álcool com 25 litros
console.log(calcularCombustivel(15, 'G')); // Gasolina com 15 litros
