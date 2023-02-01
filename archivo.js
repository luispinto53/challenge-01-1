var botonEncritar = document.querySelector(".btn-encriptar");
var botonDesencritar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var resultado = document.querySelector(".mensaje");
var h6 = document.querySelector(".texto");
var imagen = document.querySelector(".mensaje");

botonCopiar.style.visibility = "hidden";
botonEncritar.onclick = encriptar;
botonDesencritar.onclick = desencriptar
botonCopiar.onclick = copiar

function encriptar() {
  ocultarAdelante();
  var area = recuperarTexto();
  resultado.textContent = encriptarTexto(area);
}

function desencriptar() {
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
  }

  function copiar() {
    var texto = document.querySelector(".mensaje");
    texto.select();
    
    document.execCommand('copy');
  }

function recuperarTexto() {
  var area = document.querySelector(".tex-area");
  return area.value;
}

function ocultarAdelante() {
  if (h6.style.display === "none") {
    /* h6.style.display = "block"; */
  } else {
    h6.style.display = "none";
  }
  if (imagen.style.backgroundImage === "none") {
    /* imagen.style.backgroundImage = "block";*/
  } else {
    imagen.style.backgroundImage = "none";
  }
  if (botonCopiar.style.visibility === "visible") {
  } else {
    botonCopiar.style.visibility = "visible";
  }
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal ="";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal ="";
  
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == "a") {
        textoFinal = textoFinal + "a"
        i = i+1;
      } else if (texto[i] == "e") {
        textoFinal = textoFinal + "e"
        i = i+4;
      } else if (texto[i] == "i") {
        textoFinal = textoFinal + "i"
        i = i+3;
      } else if (texto[i] == "o") {
        textoFinal = textoFinal + "o"
        i = i+3;
      } else if (texto[i] == "u") {
        textoFinal = textoFinal + "u"
        i = i+3;
      } else {
        textoFinal = textoFinal + texto[i];
      }
    }
    return textoFinal;
}