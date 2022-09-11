const textInput = document.querySelector('#frase');
const textInputEncriptada = document.querySelector('#frase-encriptada');

const sugerencia = document.querySelector('.form_sugerencia');
const desencriptarMsg = document.querySelector('.desencriptar_mensaje');
const desencriptarResultado = document.querySelector('.desencriptar_resultado');

const btnEncriptar = document.querySelector('#btn-encriptar');
const btnDesencriptar = document.querySelector('#btn-desencriptar');
const btnCopy = document.querySelector('#btn-copiar');

const regexInput = /^[a-z0-9 ]*$/;

let mensaje = true;
let resultado = false;

// Evalúa la frase usando una expresión regular
function encriptarFrase() {
  if (!regexInput.test(textInput.value) || textInput.value.length === 0) {
    sugerencia.style.display = "flex";

    mensaje = true;
    mostrarMensaje()
    resultado = false;
    mostrarResultado();
  } else {
    sugerencia.style.display = "none";

    let fraseEncriptada = textInput.value.
                          replaceAll("e", "enter").
                          replaceAll("i", "imes").
                          replaceAll("a", "ai").
                          replaceAll("o", "ober").
                          replaceAll("u", "ufat");

    textInputEncriptada.value = fraseEncriptada

    mensaje = false;
    mostrarMensaje()
    resultado = true;
    mostrarResultado();

    textInput.value = '';
  }
}
btnEncriptar.addEventListener('click', encriptarFrase);

// Función que copia la frase encriptada en el textarea para desencriptar
function copy() {
  textInputEncriptada.select();
  document.execCommand("copy");
  textInputEncriptada.setAttribute('disabled', true);
  textInputEncriptada.value = '';
  alert("El texto ha sido copiado")
}
btnCopy.addEventListener('click', copy);

// Función inversa, para desencriptar
function desencriptarFrase() {
  let fraseDesencriptada = textInput.value.
                            replaceAll("ufat", "u").
                            replaceAll("ober", "o").
                            replaceAll("ai", "a").
                            replaceAll("imes", "i").
                            replaceAll("enter", "e");
  textInputEncriptada.value = fraseDesencriptada;

  mensaje = false;
  mostrarMensaje()
  resultado = true;
  mostrarResultado();

  textInput.value = '';
}
btnDesencriptar.addEventListener('click', desencriptarFrase);

// Función que muestra el mensaje de error si no se ingresa un texto
function mostrarMensaje() {
  if(mensaje) {
    desencriptarMsg.style.display = "flex";
  } else {
    desencriptarMsg.style.display = "none";
  }
}

// Función que muestra el resultado
function mostrarResultado() {
  if(resultado) {
    desencriptarResultado.style.display = "flex";
  } else {
    desencriptarResultado.style.display = "none";
  }
}