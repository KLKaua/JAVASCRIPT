// TAREFA 7

alert("Peso 2 para a prova P1;\nPeso 3 para a prova P2;\nPeso 4 para a prova P3")
    
    let notaP1 = parseFloat(prompt("Nota da primeira prova:"));

    let notaP2 = parseFloat(prompt("Nota da segunda prova:"));

    let notaP3 = parseFloat(prompt("Nota da terceira prova:"));
    
    let res = (notaP1 + notaP2 + notaP3) /3;

    if(res >= 5.0){
      alert("Nota final : "+res+ "\nAprovado");

    }
    
    else{
      alert("Nota final : "+res+ "\nReprovado");
    }

