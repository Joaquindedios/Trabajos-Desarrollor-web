const boton=document.querySelector('.boton')
const buscador=document.querySelector('#buscador')
let paises=[]
function cargarPais(){
    fetch('https://countries.dev/region/Americas')
        .then((response) => response.json())
        .then((datos) => {
            paises=datos;
            mostrarPaises(paises)

        });}
boton.addEventListener('click', cargarPais)

buscador.addEventListener("input",function(){
    const texto= buscador.value
    const resultados = paises.filter(pais => pais.capital &&
        pais.capital.toLowerCase().includes(texto.toLowerCase())
    );
    mostrarPaises(resultados);
})


function mostrarPaises(listaPaises){
    const lista=document.querySelector('.listaPaises')
    while(lista.hasChildNodes()){
        lista.removeChild(lista.firstChild)
    }
    listaPaises.forEach((pais)=>{
        const elemento=document.createElement("div")
        elemento.className="tarjeta"
        elemento.textContent=" " + pais.flag + " " + pais.name;
        lista.appendChild(elemento)
        
    })
}