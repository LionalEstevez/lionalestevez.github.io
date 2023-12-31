var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();

    if (cajatexto.trim() !== "") { 
        resultado.textContent = encriptarTexto(cajatexto);
    } else {
        alert("No hay texto para encriptar.");
    }
}

// https://github.com/LionalEstevez/lionalestevez.github.io.git

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();

    if (cajatexto.trim() !== "") { // Verifica si hay texto para desencriptar
        resultado.textContent = desencriptarTexto(cajatexto);
    } else {
        alert("No hay texto para desencriptar. Copie el texto encriptado y péguelo en el área 'Ingrese el texto aquí'.");
    }
}
    // Mostrar el mensaje de confirmación
    var confirmar = confirm("¿Quieres limpiar la caja de texto?");
    if (confirmar) {
        limpiarCajaTexto();
    } else {
        setTimeout(function() {
            var confirmarNuevamente = confirm("¿Quieres limpiar la caja de texto?");
            if (confirmarNuevamente) {
                limpiarCajaTexto();
            }
        }, 10000); // Esperar 10 segundos antes de preguntar nuevamente
    }

function limpiarCajaTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    cajatexto.value = "";
}


function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

    //Laves de encriptacion
    // `La letra "a" es convertida para "ai"`
    // `La letra "e" es convertida para "enter"`
    // `La letra "i" es convertida para "imes"`
    // `La letra "o" es convertida para "ober"`
    // `La letra "u" es convertida para "ufat"`

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";


    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.addEventListener("click", () => {
    const contenido = document.querySelector(".texto-resultado").textContent;
    const textarea = document.createElement("textarea");
    textarea.value = contenido;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Texto copiado");
});