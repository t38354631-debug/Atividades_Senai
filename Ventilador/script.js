const ventilador = document.getElementById("ventilador");
const funcaoLigar = document.getElementById("funcaoLigar");

const helice = document.getElementById("helices");
 

funcaoLigar.addEventListener("click", function(){
    ventilador.classList.toggle("ligado");

    if (ventilador.classList.contains("ligado")){
        ventilador.textContent = "Desligar"

    }else {
       ventilador.textContent = "Ligar"
    }

});

    function mudarVelocidade(velocidade){
        helice.classList.add("velocidade" + velocidade)
        console.log(velocidade);
        console.log(helice)

    }