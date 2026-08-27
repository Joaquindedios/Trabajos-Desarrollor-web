const boton= document.querySelector('.boton')
   
function cargarPais(){
fetch('https://countries.dev/region/Americas')
    .then((response) => response.json())
    .then((paises) => {

        const lista = document.querySelector('.listaPaises');  

        paises.forEach((pais) => {
            const elemento=document.createElement("li")
    

             elemento.textContent= pais.name + " " +pais.flag; 

            //por cada pais agrego un item a la lista(inner.html)
           lista.appendChild(elemento)
        });

    });}
     boton.addEventListener('click', cargarPais)
