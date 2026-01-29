// iniciando o canvas
var canvas = document.getElementById('progress')
var ctx = canvas.getContext('2d');

// configurações
var x = 0;
var y = 0;
var altura = 10;
var largura = 0;
var fator = 60;
var resolucao = 1280;

// cor da barra requisitada pela equipe
ctx.fillStyle = "#1ede58ff";

// função que anima a barra de progresso
function animacao() {
    ctx.fillRect(x, y, largura = largura+fator, altura) ;
}

// código avançado: interrompe a função SetInterval() para evitar carregamento excessivo
if(largura > resolucao) {
    clearInterval(atualiza) ;

}
