const personas = [
    "Juan",
    "Pedro",
    "María",
    "Sofía",
    "Joaquín",
    "Lucía"
];

const lista = document.querySelector("#listaPersonas");
const buscador = document.querySelector("#buscador");

function mostrarPersonas(personas) {
    lista.innerHTML = personas.map(persona => `
        <li>${persona}</li>
    `).join("");
}

mostrarPersonas(personas);

buscador.addEventListener("input", function() {

    const texto = buscador.value;

    const resultados = personas.filter(persona =>
        persona.toLowerCase().includes(texto.toLowerCase())
    );

    mostrarPersonas(resultados);
});