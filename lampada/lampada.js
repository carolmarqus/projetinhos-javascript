const ligarBotao = document.getElementById("ligarBotao");
const desligarBotao = document.getElementById("desligarBotao");
const lampada = document.getElementById("lampada");
// a função retorna verdadeiro ou falso. se estiver quebrada
// retorna verdadeiro.
function verificaQuebra() {
  return lampada.src.indexOf("quebrada") > -1;
}
function lampadaLigada() {
  if (!verificaQuebra()) {
    lampada.src = "./img/ligada.jpg";
  }
}
function lampadaDesligada() {
  if (!verificaQuebra()) {
    lampada.src = "./img/desligada.jpg";
  }
}
function lampadaQuebrada() {
  lampada.src = "./img/quebrada.jpg";
}

ligarBotao.addEventListener("click", lampadaLigada);
desligarBotao.addEventListener("click", lampadaDesligada);
lampada.addEventListener("mouseover", lampadaLigada);
lampada.addEventListener("mouseleave", lampadaDesligada);
lampada.addEventListener("dblclick", lampadaQuebrada);
