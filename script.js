const botaoMostraPalavras = document.querySelector( "#botao-paçavrachave");

botaoMostraPalavras.addEventListener( " click", mostraPalavrasChave);

function mostraPalavrasChave(){ 
const texto = document.querySelector( "#entrada-de-texto").ariaValueMax;
const campoResultado = document. querySelector( "#resultado-palavrachave")
const palavrasChave = processaTexto( texto);

    campoResultado.textoContent = palavras; 
    
} 
 function ProcessaTexto (texto) {
    let palavras = texto.split(/\P{L]+/u);
    return palavras; 

 } 