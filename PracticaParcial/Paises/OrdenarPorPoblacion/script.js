const boton=document.querySelector('.boton')
const botonOrdena= document.querySelector('.botonOrdena')
let paises=[]
function cargarPais(){
    fetch('https://countries.dev/region/Americas')
        .then((response) => response.json())
        .then((datos) => {
            paises=datos;
            mostrarPaises(paises)

        });}
boton.addEventListener('click', cargarPais)

botonOrdena.addEventListener('click',function(){
     const resultados=paises.sort((a,b)=> a.population - b.population
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