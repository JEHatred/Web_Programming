var http = require('http');//Inyeccion de dependiencia 

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'}); //Escribe los headers del paquete, contiene el estatus code (100, 200, 300, ...), contenido es texto plano
    res.end('Hello World\n');//Impresion en texto plano 
}).listen(1337, '127.0.0.1');//Quedate a la escucha de una peticion http por este puerto

//Contiene un emissonr de eventos que responde a las solicitudes 
//node server.js //Levanta el servidor
//Vamos al navegador y ponemos: localhost:1337

//Modifico servidor- Lo levanto- Voy al navegador
//Si algo no chacha: 1.- consola de web en Network  2.-La terminal donde se echa a andar el server

//Ctrl+Myus+i /Network, ahi viene el estatus que le dimos 200
//Si hay un problema, hay que ir a la terminal 