//Passo 1:
const btnAvancar = document.getElementById("btn-avancar");// Busca o ID btn-avanar dentro do objeto documento e carrega o html para a variável
const btnVoltar = document.getElementById("btn-voltar");// Busca o ID btn-avanar dentro do objeto 
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao"); //Buscar pela classe por isso usa o ponto

//Passo 2
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    console.log(cartaoAtual);
    if (ehUltimoCartao) return;
    //Passo 4
    esconderCartaoSelecionado();
    //Passo 3

    cartaoAtual++;
    mostrarCartao();


})
btnVoltar.addEventListener("click", function () {
      ;
    const ehPrimeiroCartao = cartaoAtual === 0;
    console.log(cartaoAtual);
    if (ehPrimeiroCartao) return;
 
     //Passo 4
     esconderCartaoSelecionado()
    //Passo 3
    cartaoAtual--;
    mostrarCartao();


});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
