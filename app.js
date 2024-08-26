/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do Número Secreto!";
let texto = document.querySelector("p");
texto.innerHTML = "Por favor, escolha um número entre 1 a 10:";*/
let numerosSorteados = [];
let numeroLimite = 100;

function gerarNumeroAleatorio(){
    numeroEscolhido = parseInt(Math.random()*numeroLimite +1);

    if(numerosSorteados.length == numeroLimite){
        numerosSorteados = [];
    }
    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados); 
        return numeroEscolhido;
    }
    
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function iniciarJogo() { 
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    numeroDeTentativas = 1;   
    exibirTextoNaTela("h1", "Jogo do Número Secreto!");
    exibirTextoNaTela("p", `Por favor, escolha um número entre 1 e ${numeroLimite}:`);
    
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = null;
}

function reiniciarJogo() {    
    limparCampo();
    iniciarJogo();    
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

/*let numeroSecreto;
let numeroDeTentativas; 
let numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);*/

iniciarJogo();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Parabéns!!");
        let tentativa = numeroDeTentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${numeroDeTentativas} ${tentativa}!!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é menor!");
        numeroDeTentativas++;
        limparCampo();
    }
    else if (chute < numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é maior!")
        numeroDeTentativas++;
        limparCampo();
    }
}








