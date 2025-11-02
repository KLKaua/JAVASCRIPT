//TAREFA 03

 let n = [];

    for (let i=1; i<=10; i++){
        n.push(i)
    }

    let pares = n.filter(n=> n % 2===0 );
        alert("NUMEROS PARES: " +pares)
