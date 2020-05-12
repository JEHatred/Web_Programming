//Manera de hacer require a una funcion
var greet = require('./greet'); //Con la definicon de la variable a tengo acceso a la funcion qu esta definida dentro del modulo cada que lo necesite
greet();                        

var greet2 = require('./greet2').greet; //se esta requiriendo solo la funcion que se ha exportado escribiendola despues del punto
greet2();

//Manera de hacer require a un objeto
var greet3 = require('./greet3');
greet3.greet(); //Se accede al metodo mediante la notacion del punto 
                //.greet es la funcion que se definio dentro de la clase exportada 
                //Recibe un objeto construido
greet3.greeting = 'Changed Hello 3'; //Cambia el valor del atributo Greeting por lo que se encuentra en comillas
                                    //Sobreescribe el valor de la localidad o direccion de la variable

var greet3b = require('./greet3');//Hace nuevamente el llamado del modulo
greet3b.greet();//Sin embargo, el valor del atributo fue cambiado anteriormente y al solo hacer referencia al espacsio, nos retorna el valor editado

//Manera de hacer require a una classe
var greet4 = require('./greet4');
var grtr = new greet4(); //Se requiere instanciar el objeto ya que el modulo no lo instancia a la hora de exportarlo
grtr.greet();//Nuevamente, se llama al objeto y su funcion por medio de la notacion de punto

