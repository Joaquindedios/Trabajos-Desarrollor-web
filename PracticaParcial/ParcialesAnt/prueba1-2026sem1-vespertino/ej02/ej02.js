/*
# Ejercicio 02.

Implementar la función que toma una lista de datos de países como los del
archivo `americas.json` y retorna los códigos CCA2 de los países que usan una
moneda dada. Por ejemplo:

```js
import americas from "./americas.json";

countriesForCurrency(americas, "EUR") // Euro
```

debería devolver:

```js
["BL", "GF", "MF", "GP", "PM", "MQ"]
```

Si un elemento no tiene alguna de las propiedades requeridas, se debe arrojar un
error.
*/
import americas from "./americas.json" with {type:"json"};
export function countriesForCurrency(data, currency) {
const resultado=[];
data.forEach( pais => {
  if(!pais.cca2 || !pais.currencies){
    throw new Error('datos invalidos')
  }
  if(currency in pais.currencies){
    resultado.push(pais.cca2)
  }
});
return resultado
  
}
console.log(countriesForCurrency(americas, "EUR"));