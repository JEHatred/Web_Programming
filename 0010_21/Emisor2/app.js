var Emitter = require("events");
var eventsConfig = require("./config").events; //Solo quiero que extraiga ese event de archivo de la configuracion

var emtr = new Emitter(); 

emtr.on(eventsConfig.GREET, function(){ //El primer parametro es igual a la variable que requiere el evento de la clase configuracion
    console.log('Somewhere, someone said Hello');
});

emtr.on(eventsConfig.GREET, function(){//Esto permite que podamos acceder a las cadenas mediante una propiedad de un objeto que es igual a un string
    console.log('A greeting has ocurred');
});

console.log('Hello');
emtr.emit(eventsConfig.GREET);