fetch('https://countries.dev/region/Americas')
    .then((response) => response.json())
    .then((paises) => {

        const lista = document.querySelector('.listaPaises');  

        paises.forEach((pais) => {
            lista.innerHTML += `<li> ${pais.alpha2Code} - ${pais.name} - ${pais.flag}</li>`; 
            //por cada pais agrego un item a la lista(inner.html)
        });

    });