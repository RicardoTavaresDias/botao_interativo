
document.getElementById("bt").addEventListener("click", acao);

function acao() {
    if(document.getElementById("bt").classList.contains("bt-fechado")){

      document.getElementById("bt").classList.remove("bt-fechado")
      document.getElementById("div").classList.remove("div-fechado")

    } else{

      document.getElementById("bt").classList.add("bt-fechado")
      document.getElementById("div").classList.add("div-fechado")
    }
  }
