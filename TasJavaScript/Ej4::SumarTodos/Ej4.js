
function sumAll(a, b) {
    let resultado = 0;

    while (a <= b) {
        resultado += a;
        a++;
    }

    console.log(resultado);
}

sumAll(2, 10);
