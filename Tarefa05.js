// TAREFA 5 

alert("Somente pessoas de 18 a 67 podem doar sangue!");

    let sangue= parseFloat(prompt("Qual sua idade?"));

    if(sangue == 18 || sangue == 67 || sangue >= 18 && sangue <= 67){
      alert("Você pode doar sangue");

    }

    else if(sangue <= 17 && sangue >= 67  ){
      alert("Você não pode doar sangue");
    }

    else{
      alert("Você não pode doar sangue")
    }