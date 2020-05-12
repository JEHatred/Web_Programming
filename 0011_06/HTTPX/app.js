const request = require('request');//Cada que se vea una inyeccion de dependencia se tiene que hacer la instalacion del paquete npm en la terminal
const fahrenheitToCelsius = require('fahrenheit-to-celsius');

const url = 'https://api.darksky.net/forecast/78ce1f1f4a6b6b19384821f422c46484/19.2433,-103.725?lang=es';//URL de mi llave en Dark Sky API

//Cuando un object literal tiene un key value air con el mismo nombre se puede dejar como aparece a continuacion ({url:url})
request({url:url, json:true},(error, response)=>{//Request tiene 2 parametros, object literal y un callback que recibe 2 parametros: error y response
    //analiza una cadena de texto como JSON y parsea al .body
    let sumy = response.body.daily.data[0].summary;//Asi se sacan los datos
    let fTmp = response.body.currently.temperature;//asi se sacan los datos
    let cTmp = fahrenheitToCelsius(fTmp);
    let kTmp = cTmp+273;
    console.log("El pronostico del tiempo es: "+sumy);//data.currently.temperature me permite acceder a ese objeto JSON y a ese valor
    console.log("La temperatura actual es: "+fTmp+" grados fahrenhet, equivalente a "+cTmp+" grados celcius y "+kTmp+" kelvins");
});