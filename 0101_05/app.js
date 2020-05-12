const express = require('express');//Inyeccion de dependencia express
const app = express();//App con la dependencia
const port = 3000;//Consatante que define el puerto de escucha

app.use('/assets', express.static(__dirname + '/public'));//Mapeo del estilo referenciado como assets

app.get('/', (req, res)=>{//Route handler para la ruta raiz
    res.send(`
        <html>
            <head>
                <title>Page Title</title>
                <link href="/assets/style.css" type="text/css" rel="stylesheet">
            </head>
            <body>
                <h1>My first main title</h1>
                <p>My first paragraph.</p>
            </body>
        </html>
    `);
});

app.get('/person/:id', (req, res)=>{//Route handler para obtener un dato del querystring
    //console.log(`El id que estas enviando es ${req.params.id}`);//Imprime en la consola de visual
    res.send(`
        <html>
            <head>
                <title>Page Title</title>
                <link href="/assets/style.css" type="text/css" rel="stylesheet">
            </head>
            <body>
                <h1>El id enviado es: ${req.params.id}</h1>
                <p></p>
            </body>
        </html>
    `);
});

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
})
