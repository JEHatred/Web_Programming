//Prototipos

function Person(firstName, lastName){//Primer letra mayuscula para definir que es una funcion contructora
    this.firstName = firstName;
    this.lastName = lastName;
}

//Si veo prototype, se esta agregando funcionalidad o propiedades
Person.prototype.greet = function (){//Le agrega funcionalidad a una clase ya definida
    console.log(`Hello ${this.firstName} ${this.lastName}`);//Tengo acceso al this aun ya fuera de la definicon de la clase
};

var john = new Person('Jhon', 'Doe');
john.greet();//Se llama a la funcionalidad agregada meiante el prototype

var jane = new Person('Jane', 'Doe');
jane.greet();//Se llama a la funcionalidad agregada meiante el prototype