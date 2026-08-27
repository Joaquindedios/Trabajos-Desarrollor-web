function convertToCelsius(temperatureC){
    conversion=0
    conversion=(temperatureC*1.8)+32
    console.log(conversion.toFixed(2))

}
function convertToFahrenheit (temperatureF){
     conversion=0
    conversion=(temperatureF-32)/1.8
    console.log(conversion.toFixed(2))
}
convertToCelsius(20)
convertToFahrenheit(70)