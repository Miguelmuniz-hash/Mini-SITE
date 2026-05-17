function estilizarbotao(){


    let nomezinha = document.getElementById("bloco-1").value;
    let senhazinha = document.getElementById("bloco").value;
 
    if(nomezinha == "Miguel Muniz" && senhazinha == "12345") {
        console.log("Usuário autentico!")
        alert("Usuário autentico!")

         window.location.href = "home.html"; 
    }else{
        console.log("Senha incorreta! Tente novamente.")
         alert("Senha incorreta! Tente novamente.")
          
    }


}
