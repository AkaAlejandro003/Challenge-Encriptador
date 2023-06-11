var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var persona = document.querySelector(".container-persona");
var container = document.querySelector(".container-parrafo");
var resultado = document.querySelector(".container-resultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".texto1")
    return cajatexto.value
}

function ocultarAdelante() {
    persona.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }else if (texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".container-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    })