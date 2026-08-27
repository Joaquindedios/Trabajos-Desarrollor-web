const boton =document.getElementById('myboton')
const lista= document.getElementById('mylista')
const boton1 = document.getElementById('myboton1')

boton.addEventListener('click', function(){
    const nuevoItem=document.createElement('li')
    nuevoItem.textContent='Nuevo item añadido'
    lista.appendChild(nuevoItem)

    
})
boton1.addEventListener('click', function(){
    if(lista.lastElementChild){
        lista.lastElementChild.remove();
    }
})