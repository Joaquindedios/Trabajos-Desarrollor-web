function reverseString(texto){
    let reverse=" ";
    for (let i= texto.length -1; i>=0; i--) {
        reverse= reverse+ texto[i];
    }
    console.log(reverse);
}
reverseString("hola")
