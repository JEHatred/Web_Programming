var obj = { //Creacion de objeto
    name: 'John Doe', //Atributo de nombre prefdefinido
    greet: function(param){//Funcion que contiene un pramatero
        console.log(`Helloz ${this.name}, this is the ${param}`);//COntenido de la funcion
    }
}

var param = 'pa'; //Definiciond el parametro

obj.greet(param);//Funcion nativa con el metodo del punto con el parametro definido
obj.greet.call({name: 'Jane Doe'}, param); //Llama al parametro name pero con el valor entre comillas, lo sobreescribe y lo llama con el nuevo nombre
obj.greet.apply({name: 'Jane Doe'}, [param]); //{} es el this, [] son los parametros separados por comillas