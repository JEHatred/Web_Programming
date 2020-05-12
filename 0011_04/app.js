setTimeout(()=>{console.log(`Hola 1`);}, 0); //Se imprime a los 4 segundos
setTimeout(()=>{console.log(`Hola 2`);}, 0); //Se agrega a la cola del event loop
console.log(`Hola 3`); //Esta se agrega directamente al stack

//Las 2 primeas lineas acceden al event loop mientras que la otra no