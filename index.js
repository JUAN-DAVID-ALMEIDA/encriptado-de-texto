function encriptar(){
    let texto=document.getElementById("texto").value;
    let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muñeco=document.getElementById("muñeco");
    let textoCifrado=texto
    .replace(/e/gi,"enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    if (document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent= "texto encriptado con exito";
        parrafo.textContent="";
        muñeco.src= "./img/crab-42880_1280.png";
    }else{
        muñeco.src= "./img/honey-bee-469560_1280.png";
        tituloMensaje.textContent="ningun mensaje fue encontrado"
    parrafo.textContent="ingrese el texto que deseas encriptar o desencriptar"
    alert ("debes ingresar algun texto");

    }
}
function desencriptar(){
    let texto=document.getElementById("texto").value;
    let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muñeco=document.getElementById("muñeco");
    let textoCifrado=texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    if (document.getElementById("texto").value.length !=0){
    document.getElementById("texto").value=textoCifrado;
    tituloMensaje.textContent="texto desencriptado con exito";
    parrafo.textContent="";
    muñeco.src="./img/crab-42880_1280.png";
}else{
    muñeco.src= "./img/teddy-bear-447422_1280.png";
    tituloMensaje.textContent="ningun mensaje fue encontrado"
parrafo.textContent="ingrese el texto que deseas encriptar o desencriptar"
alert("Debes ingresar algun texto");
   }
}