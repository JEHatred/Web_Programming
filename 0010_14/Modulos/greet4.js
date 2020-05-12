//Manera de exportar un constructor

function Greetr(){
    this.greeting='Hello 4';
    this.greet=function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr; //No tiene el trabajo de instanciar el objeto