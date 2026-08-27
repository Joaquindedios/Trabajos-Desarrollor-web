function MostrarOcultar(){


    const tarjeta= document.querySelector('.productos')
    if(tarjeta.style.display==='none'){
    tarjeta.style.display='flex'
    }
    else{
    tarjeta.style.display='none'
    }
    
}
const boton= document.querySelector('.boton')
    boton.addEventListener('click', MostrarOcultar)


function Comprar(){
    const botones= document.getElementsByClassName('Bcompra')
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click',function(){
            const tarjeta= botones[i].parentElement;
            const producto=tarjeta.querySelector('h3')
            this.textContent="Comprado";
           console.log("Compraste " + producto.textContent);
            
        });
        
    }
}
Comprar();

