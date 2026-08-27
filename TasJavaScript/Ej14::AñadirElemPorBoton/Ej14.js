const boton =document.getElementById('myboton')
const lista= document.getElementById('mylista')

boton.addEventListener('click', function(){
    const nuevoItem=document.createElement('li')
    nuevoItem.textContent='Nuevo item añadido'
    lista.appendChild(nuevoItem)
})