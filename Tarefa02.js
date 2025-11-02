//TAREFA 02 

 let n1 = []

      for(i = 10; i > 0; i--){
        n1.push(i);
      }

      alert("Numeros em ordem invertidas são:")
      n1.reverse().forEach((n1) => {
        alert(n1);
        
      });
