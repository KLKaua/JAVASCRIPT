//TAREFA 05 

       let idades=[18, 22, 19, 21, 25, 20, 18, 23, 19, 24, 20, 22, 21, 18, 19, 26, 27, 20, 22, 21,19, 20, 23, 25, 26, 24, 18, 19, 22, 20,21, 23, 24, 19, 20, 22, 25, 26, 21, 20];

        let soma=idades.reduce((total,idades)=>total+idades,0);
        let media = soma/idades.length;


        let maior = idades [0];
        let menor = idades [0];

        for (i=1; i<idade.length; i++){
            if(idade[i] > maior){
                maior =idade[i];
            }
            if(idade[i]<menor){
                menor = idade[i];
            }
        }

       
        alert("a media de idades e de :"+media)
        alert("a maior idade e :"+maior)
        alert("a menor idade e :"+menor)
