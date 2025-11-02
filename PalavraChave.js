//TAREFA 1

 for(let n1 = 1;  n1 <= 10; n1++){
      alert(n1)
     }

//TAREFA 2

for (;;) { 
        let numero = parseInt(prompt("Digite um número maior que 5:"));
        
        if (numero > 5) {
            alert(`Você digitou o número ${numero}, que é maior que 5!`);
            break; 
        } else {
            alert("Número inválido. O número deve ser maior que 5.");
        }
    }

//TAREFA 3

     for (;;) { 
        
      let soma = parseInt(prompt("Digite um valor:"));

      let soma2 = parseInt(prompt("Digite outro valor para fazer a soma:"));

      let res = soma + soma2;

      if(res >= 20){
        alert('O resultado final foi igual ou maior que 20')
        break;
    
      }
      else{
        alert("O resultado não foi igual a 20 \nDigite o valor novamente.")
      }
    }


//TAREFA 4

    for(;;){

      let encerrar = prompt("Digite um nome:");

      if(encerrar == 'fim' | encerrar == "Fim"){
        alert("Programa foi fechado")
        break;
      }
      else{
        alert("Continue digitando um nome ou digite Fim para fechar o programa")
      }

    }

//TAREFA 5

     for (let i = 5; i >= 1; i--) {
        alert(i); 
        
    }

//TAREFA 6

 for (;;) { 
        let numero = parseInt(prompt("Digite um número positivo:"));
        
        if (numero >= 0) {
            alert(`Você digitou o número ${numero}, que é positivo!`);
            break;
        } else {
            alert("Número inválido. O número deve ser positivo.");
        }
    }

//TAREFA 7

 for(;;){

      let numero=parseInt(prompt("Digite um numero maior que o valor esperado (50):"));

      if(numero >= 50){
        alert("Numero digitado é maior ou igual à 50")
        break;
      
      }
      else{
        alert("Numero digitado não é maior ou maior que 50 ")
      }
    }

//TAREFA 8
 let soma = 0;

    for (;;) { 
        let numero = parseInt(prompt("Digite um número (insira um número negativo para parar):"));
        
        if (numero < 0) {
            alert(`Você inseriu um número negativo. A soma dos números pares é: ${soma}`);
            break;

        if (numero % 2 === 0) { 
            soma += numero;
        }
    }

    }

//TAREFA 9

   for (;;) {  
        let nome = prompt("Digite seu nome:");
        
        if (nome === "João" | nome === "joão") {
            alert("Bem vindo, João!");
            break; 
        } else {
            alert("Nome incorreto.");
        }
    }

//TAREFA 10

 for (;;) { 
        let frase = prompt("Digite uma frase ou escreva 'sair' para encerrar:");
        
        if (frase === "sair" | frase === "Sair" ) {
            alert("Você encerrou o programa.");
            break; 
        } else {
            alert(`Você escreveu: ${frase}`);
        }
    }
