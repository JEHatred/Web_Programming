//Manera de exportar una instancia u objeto

function Greetr(){
    this.greeting = 'Hello 3';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();//despues del new va el nombre de una clase
                              //Se denomina clase por empezar con mayuscula
                              //Exporta la clase ya creada
                              //El modulo instancia el objeto