"use strict";

var imagem=null;

var timer = 0;
var indice=1;

function btn_parar () {

}

function btn_recomecar () {

}

function btn_proximo () {

}

function btn_anterior () {

}

function iniciarTemporizador(){
    timer = setInterval(proximaImagem,1000);
}

function limparTemporizador(){
    clearInterval(timer);
}

function proximaImagem(){
    definirIndice(indice + 1);
    atualizarImagem();
}

function atualizarImagem() {
    var caminho="+indice + "

    imagem.attr("src", caminho);
}

function definirIndice (novo_indice) {
    indice= novo_indice;

    if (indice>6) {
        indice = 1;
    }
    if (indice < 1) {
        indice=6;
    }
}

$(document).ready(function(){

    imagem=$("img");

    // imagem.attr();
    imagem.width("300");
    imagem.height("170");
    $(".slidesshow").css("text-align","center");

    $("button:eq(0)").click(btn_parar);
    $("button:eq(1)").click(btn_recomecar);
    $("button:eq(2)").click(btn_proximo);
    $("button:eq(3)").click(btn_anterior);

    iniciarTemporizador();

});