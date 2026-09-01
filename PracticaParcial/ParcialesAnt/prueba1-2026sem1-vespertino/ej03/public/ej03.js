/*
# Ejercicio 03.

Reemplazar este código con lo necesario para implementar lo solicitado en el
ejercicio.
*/
let color;
let textoFondo;
 async function onLoad() {
  generarCombinacion();
  await cargarHistorial();
}
function generarCombinacion(){
  const preview=document.querySelector("#preview")
   color=randomColor();
   textoFondo=randomColor();
  preview.style.color=color;
  preview.style.backgroundColor=textoFondo;
}

 async function onApprove() {
  const combo={
    id: crypto.randomUUID(),
    textColor: color,
    backgroundColor:textoFondo,
    approved:true
  };
  await fetchJSON("/combos",{
    method: "POST",
    body:JSON.stringify(combo)
  })
  generarCombinacion();
  await cargarHistorial();

}

async function onReject() {
  
  const combo={
    id: crypto.randomUUID(),
    textColor: color,
    backgroundColor:textoFondo,
    approved:false
  };
  await fetchJSON("/combos",{
    method: "POST",
    body:JSON.stringify(combo)
  })
  generarCombinacion();
  await cargarHistorial();
}
 async function cargarHistorial(){
  const combos= await fetchJSON("/combos");
  const history= document.querySelector("#history")
  while(history.hasChildNodes()){
    history.removeChild(history.firstChild)
  }
  combos.forEach(combo => {
    const elemento=document.createElement("div")
    elemento.classList.add("combo");
    const colores =document.createElement("span");
    const final =document.createElement("span");
    colores.classList.add("combo-colors")
    final.classList.add("combo-final")
    colores.textContent= combo.backgroundColor + "/" + combo.textColor;
    if (combo.approved) {
      final.textContent="👍"
    }else{
      final.textContent="👎"
    }
    elemento.appendChild(colores)
    elemento.appendChild(final)
    history.appendChild(elemento);
  });
  
}

async function fetchJSON(path, options) {
  const resource = new URL(path, window.location);
  const response = await window.fetch(resource, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
}

function randomColor() {
  return `#${Array.from(
    { length: 3 },
    () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0'),
  ).join('')}`;
}
