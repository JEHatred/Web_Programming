'use strict';//Coloca el codigo en uso estricto, si una cosa falla ya no compila na'

var EventEmitter = require('events');//Require a las librerias 
var util = require('util');//Require a las librerias

class Greetr extends EventEmitter{//La clase greetr extiende de Emitter
    constructor(){
        super();//Se llama al constructor de la clase EventEmitter
        this.greeting = 'Hello world!';
    }

    greet(data){//Funcion miembro, dentro de la clase 
        console.log(`${this.greeting}: ${data}`);//LLama a la funcion nativa de la clase del objeto definido en la linea 5 (parametro data)
        this.emit('greet', data);//El emisor de eventos llama a greet (parametro data), despues se llama a la lista de parametros
    }
}

var data = 'Corona';
var greeter1 = new Greetr();

greeter1.on('greet', function(data){//Evento on llama primero al evento greet y despues ejecuta su fincion (parametro data)
    console.log(`Someone greeted! ${data}`);//Despliega la funcion al leer greet (parametro data)
});

greeter1.greet(data);

/*

function Greetr(){ //Definicion de una funcion constructora
    this.greeting = 'Hellp world'; //Atributo de la clase
}

util.inherits(Greetr, EventEmitter); //Se hereda la clase Greetr y al emisor de eventos

Greetr.prototype.greet = function(data){//Ademas de lo que contiene la clase, protoype define otra funcion llamada "greet"
    
}

var greeter1 = new Greetr();//Creacion del objeto greet mediante la clase Greetr

greeter1.on('greet', function(data){//Evento on llama primero al evento greet y despues ejecuta su fincion (parametro data)
    console.log('Someone greeted!' + data);//Despliega la funcion al leer greet (parametro data)
});

greeter1.greet(' Tony Stark');//Ejecucion de la funcion greet agregada al prototipo (parametro Tony)

*/