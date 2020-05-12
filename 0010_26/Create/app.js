var person = { //Object literal
    firstname: '', //Parametro vacio
    lastname: '', //Parametro vacio
    greet: function(){
        return this.firstname + ' ' + this.lastname; //Funcion como atributo
    }
}

var john = Object.create(person); //Otra forma de crear objetos 
john.firstname = 'Jhon';
john.lastname = 'Doe';

var jane = Object.create(person); //Crear otra instancia
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());