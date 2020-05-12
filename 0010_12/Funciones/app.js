// function statement
/*function greet(){
    console.log('hi1');
}
greet();*/

// Function expression 
/*let greet = ()=>{
    console.log(`hi2`); // Para llamar a variables dentro de los backtick hay que llamarla con ${variable}
}

// function are first-class
let logGreeting = (fn)=>{//Funcion que recibe parametro fn / con un solo parametro, no se necesitan parentesis
    fn();//Invoca lo que se recibio como funcion
}
logGreeting(greet);*///Invoca a la funcion con el parametro, que tambien es una funcion
//let logGreeting=fn=>fn(); - Nivel de escritura deseada

//Function expression on the fly
let logGreeting = (() =>{
    console.log(`hi3`);
});
logGreeting();