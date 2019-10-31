"use strict";

var imagem = null;

function escondeMostra() {
    /*console.log("esconde/mostra");

    var visiblidade = getComputedStyle(imagem).getPropertyValue("visibility");

    console.log("Estilo atual"+ visiblidade);
    if (imagem.style.visibility === "visible") {
        imagem.style.visibility="hidden";
    } else {
        imagem.style.visibility="visible";
    }*/
    //var visiblidade = getComputedStyle(imagem).getPropertyValue("visibility");
    var visiblidade= imagem.css("visibility");
    if (imagem.style.visibility === "visible") {
        //imagem.style.visibility="hidden";
        imagem.css("visibility","hidden");
    } else {
        //imagem.style.visibility="visible";
        imagem.css("visibility","visible");
    }

}

function esconde() {
    console.log("esconde");
    //imagem.style.display = "none";
    imagem.hide();
}

function mostra() {
    console.log("mostra");
    //imagem.style.display = "inline-block";
    imagem.css("display","inline-block");
    imagem.show();
}


document.addEventListener("DOMContentLoaded",function (){
    imagem = document.getElementsByTagName("img")[0];
    var botao = document.getElementById("botao");
    botao.addEventListener("mouseover", mostra);
});


//document.addEventListener("DOMContentLoaded",function (){});
$(document).ready(function(){
    //imagem = document.getElementsByTagName("img")[0];
    imagem = $("img");
    //var botao = document.getElementById("botao");
    //botao.addEventListener("mouseover", mostra);
    $("#botao").mouseover(mostra);
})


