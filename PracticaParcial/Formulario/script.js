const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");
const email = document.querySelector("#mail");
const formulario=document.querySelector("#formulario")
const resultado=document.querySelector("#resultado")

function validarNombre() {

    if (nombre.value.trim() === "") {
        
        return false;
    }
    return true;
}

function validarMensaje(){
    if(mensaje.value.trim() === ""){
        return false;
    }
    return true;
}
function validarEmail() {

    if (email.value.trim() === "") {
        return false;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email.value)) {

        return false;
    }

    
    return true;
}
nombre.addEventListener("input", validarNombre);
mensaje.addEventListener("input", validarMensaje);
email.addEventListener("input", validarEmail);


// Validación al enviar
formulario.addEventListener("submit", function(event) {

    const nombreValido = validarNombre();
    const mensajeValido = validarMensaje();
    const emailValido = validarEmail();

    if (!nombreValido || !mensajeValido || !emailValido) {
        event.preventDefault();
    }
    if (nombreValido && mensajeValido &&emailValido) {
        
        resultado.textContent="mensaje enviado"
    }
    else{
    resultado.textContent="no se pudo enviar el mensaje"}
});