export function genExp(resultado) {

  const operacion = Math.floor(Math.random() * 4);

  if (operacion === 0) {

    const left = Math.floor(Math.random() * resultado);
    const right = resultado - left;

    return {
      operator: '+',
      left: left,
      right: right
    };

  } else if (operacion === 1) {

    const right1 = Math.floor(Math.random() * resultado);
    const left1 = resultado + right1;

    return {
      operator: '-',
      left: left1,
      right: right1
    };

  } else if (operacion === 2) {

    let left2;

    do {
      left2 = Math.floor(Math.random() * resultado) + 1;
    } while (resultado % left2 !== 0);

    const right2 = resultado / left2;

    return {
      operator: '*',
      left: left2,
      right: right2
    };

  } else {

    const right3 = Math.floor(Math.random() * 10) + 1;
    const left3 = resultado * right3;

    return {
      operator: '/',
      left: left3,
      right: right3
    };
  }
}

console.log(genExp(12));