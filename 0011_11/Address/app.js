/*var randomNum = require("random-num");
const request = require('request');

let r = randomNum(0, 88);

const url = "https://swapi.co/api/people/"+r+"/";

request({url, json:true},(error, response)=>{
    let name = response.body;
    console.log(name);
});
*/
const address = require("./address");
const randomNum = require("random-num");
const request = require("request");
const fahrenheitToCelsius = require('fahrenheit-to-celsius');

let rPerson = randomNum(0, 88);
let rAdd = randomNum(0, 19);

const url = "https://swapi.co/api/people/"+rPerson+"/";
request({url, json:true},(error, response)=>{
    let name = response.body.name;

    const url = 'https://api.darksky.net/forecast/78ce1f1f4a6b6b19384821f422c46484/19.2433,-103.725?lang=es';
    request({url, json:true},(error, response)=>{
        let fTmp = response.body.currently.temperature;//asi se sacan los datos
        let cTmp = fahrenheitToCelsius(fTmp);
        
        const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=eIxMdJO5nASjUtL7HQHSqtbXRK2MmqBs&location=Washingtong,DC';
        request({url, json:true},(error, response)=>{
            let geo = response.body.results[0].displayLatLng;
            
            console.log(geo);
            //console.log(`${name} vive en ${geo.location} y esta a ${cTmp} Grados Celcius`);
            //console.log(`${name} vive en la calle ${geo} y esta a ${cTmp} Grados Celcius`);
        });
    });
});

