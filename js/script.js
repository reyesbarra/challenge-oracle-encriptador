// Encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Desencriptar el texto
function desencriptar(textoEncriptado) {
    let textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoOriginal;
}

// Botón para encriptar
document.getElementById("botonEncriptar").onclick = function() {
    const texto = document.getElementById("textoEntrada").value;
    if (texto.trim() === "") {
        document.getElementById("textoSalida").textContent = "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById("botonCopiar").style.display = "none";
        
    } else {
        const textoEncriptado = encriptar(texto);
        document.getElementById("textoSalida").textContent = textoEncriptado;
        document.getElementById("botonCopiar").style.display = "block"; 
        document.getElementById("imagenLupa").style.display = "none";
        document.getElementById("h2Mensaje").style.display = "none";
    }
};

// Botón para desencriptar
document.getElementById("botonDesencriptar").onclick = function() {
    const textoEncriptado = document.getElementById("textoEntrada").value;
    if (textoEncriptado.trim() === "") {
        document.getElementById("textoSalida").textContent = "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById("botonCopiar").style.display = "none"; 
    } else {
        const textoDesencriptado = desencriptar(textoEncriptado);
        document.getElementById("textoSalida").textContent = textoDesencriptado;
        document.getElementById("botonCopiar").style.display = "block";
    }
};


// Función para copiar el texto al portapapeles
document.getElementById("botonCopiar").onclick = function() {
    const texto = document.getElementById("textoSalida").textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Hubo un error al copiar el texto");
    });
};