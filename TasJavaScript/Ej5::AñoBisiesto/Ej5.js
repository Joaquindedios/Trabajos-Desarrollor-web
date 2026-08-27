function leapYear(anio){
    if(anio%400 ===0 ||( anio%4===0 && anio%100!==0)){
        console.log('es bisiesto')

    }
    else{
        console.log("no es bisiesto")
    }
}
leapYear(1900);