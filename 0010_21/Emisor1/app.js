var Emitter = require("./Emitter");

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Somewhere, someone said Hello');
});

emtr.on('greet', function(){
    console.log('A greeting has ocurred');
});

console.log('Hello');
emtr.emit('greet');