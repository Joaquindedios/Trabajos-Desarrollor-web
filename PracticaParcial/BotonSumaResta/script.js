let numero=0
const BotonSuma=document.querySelector('.suma')
const BotonResta=document.querySelector('.resta')
const BotonReset=document.querySelector('.reset')
function aumentar(
){
    
    numero++
    document.querySelector('.texto').textContent=numero
}
BotonSuma.addEventListener('click', aumentar)

function restar(){
    numero--
    document.querySelector('.texto').textContent=numero

}
BotonResta.addEventListener('click',restar)

function resetear(){
    numero=0
    document.querySelector('.texto').textContent=numero
}
BotonReset.addEventListener('click',resetear)
