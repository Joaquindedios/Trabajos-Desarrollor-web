const formulario = document.querySelector("#formulario");

const nombre = document.querySelector("#nombre");
const password = document.querySelector("#password");
const email = document.querySelector("#email");

const errorNombre = document.querySelector("#errorNombre");
const errorPassword = document.querySelector("#errorPassword");
const errorEmail = document.querySelector("#errorEmail");


function validarNombre() {

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        return false;
    }

    errorNombre.textContent = "";
    return true;
}


function validarPassword() {

    if (password.value.trim() === "") {
        errorPassword.textContent = "La contraseña es obligatoria";
        return false;
    }

    if (password.value.length < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
        return false;
    }

    errorPassword.textContent = "";
    return true;
}


function validarEmail() {

    if (email.value.trim() === "") {
        errorEmail.textContent = "El correo es obligatorio";
        return false;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email.value)) {
        errorEmail.textContent = "El correo no es válido";
        return false;
    }

    errorEmail.textContent = "";
    return true;
}


// Validación en tiempo real
nombre.addEventListener("input", validarNombre);
password.addEventListener("input", validarPassword);
email.addEventListener("input", validarEmail);


// Validación al enviar
formulario.addEventListener("submit", function(event) {

    const nombreValido = validarNombre();
    const passwordValida = validarPassword();
    const emailValido = validarEmail();

    if (!nombreValido || !passwordValida || !emailValido) {
        event.preventDefault();
    }
});