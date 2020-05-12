// Propiedades y metodos de objetos

var obj = { //Creacion de un objeto
    greet: 'Hello', //Key value pair
    myFunc: function(){
        console.log('This is a function');
    }
}

console.log(obj.greet); //Acceso al key por medio del punto
console.log(obj['greet']); //acceso al key mediante los brackets

var prop = 'greet';//Variable con el nombre de la key a la que quiero acceder
console.log(obj[prop]);//Acceso a la key mediante una variable ... Si se esta llamando una key va entre comillas, si es una variable no y lleva parentesis

var func = 'myFunc';//Variable que accede a la funcion del objeto
obj[func]();//Invocacion de la funcion del objeto

/*
var obj = {
    onClcick: function(){},
    onMouseOver: function(){},
    doubleClick: function(){}
}

obj[onClick]();

Esto es un emisor de eventos en su parte mas basica
Esas funciones pueden ser guardadas en variables para llamarlas de manera sencilla
*/

//Funciones y vectores

var arr = [];

arr.push(function(){
    console.log('Hello world 1');
});
arr.push(function(){
    console.log('Hello world 2');
});
arr.push(function(){
    console.log('Hello world 3');
});

arr.forEach(function(item){//Con cada elemento
    item();//Has esto
});

