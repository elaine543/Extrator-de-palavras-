const botaoMostraPalavras = document.querySelector( "#botao-paçavrachave");

botaoMostraPalavras.addEventListener( " click", mostraPalavrasChave);

function mostraPalavrasChave(){ 
const texto = document.querySelector( "#entrada-de-texto").ariaValueMax;
const campoResultado = document. querySelector( "#resultado-palavrachave")
const palavrasChave = processaTexto( texto);

    campoResultado.textoContent = palavras.join(","); 
    
} 
 function ProcessaTexto (texto) {
    let palavras = texto.split(/\P{L]+/u);

    let frequencias = { };
    for (let i of palavras) { 
        frequencias [i] =0;
        for ( let j of palavras) 
            
        }
        
        return palavras; 

 } 
