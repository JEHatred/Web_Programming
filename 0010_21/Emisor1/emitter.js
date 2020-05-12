function Emitter(){ //Creacion de una clase
    this.events = {}; //Creacion de un evento
}

Emitter.prototype.on = function(type, listener){ //Funciones creadas en un prototipo 
    this.events[type] = this.events[type] || []; //Obtiene lo que esta guardado en un vector y si no hay nada lo inciializa
    this.events[type].push(listener); //Empuja nuevos listeners al vector 
}

Emitter.prototype.emit = function(type){ //Funcion creadas en un prototipo
    if(this.events[type]){//Si el vector tiene algo...
        this.events[type].forEach(function(listener){ //...Para cada funcion
            listener(); //... Ejecuta la funcion
        });
    }
}

module.exports = Emitter; //Exporta la clase