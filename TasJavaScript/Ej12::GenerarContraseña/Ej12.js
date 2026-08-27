let length=8

function genPassword(length){
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let numeros = "0123456789";
    let simbolos = "!@#$%^&*";
    if (length<8) {
        return "La contrasenia debe de ser de 8 caracteres o mas"
    }
    let password=[]
    
    password.push(mayusculas[Math.floor(Math.random()*mayusculas.length)])
    password.push(minusculas[Math.floor(Math.random()*minusculas.length)])
    password.push(numeros[Math.floor(Math.random()*numeros.length)])
    password.push(simbolos[Math.floor(Math.random()*simbolos.length)])
    let todos=mayusculas+minusculas+numeros+simbolos
    for (let i = 4; i < length; i++) {
       password.push(todos[Math.floor(Math.random()* todos.length)])
        
    }
    console.log(password)
}
genPassword(8)