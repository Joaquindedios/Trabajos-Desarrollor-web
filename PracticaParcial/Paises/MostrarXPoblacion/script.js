const boton=document.querySelector('.boton')
const botonPoblacion= document.querySelector('.botonPoblacion')
let paises=[]
function cargarPais(){
    fetch('https://countries.dev/region/Americas')
        .then((response) => response.json())
        .then((datos) => {
            paises=datos;
            mostrarPaises(paises)

        });}
boton.addEventListener('click', cargarPais)

botonPoblacion.addEventListener('click',function(){
    const poblacion= 10000000;
    const resultados = paises.filter(pais => pais.population > poblacion 
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