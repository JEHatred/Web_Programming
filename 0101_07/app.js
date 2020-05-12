const express = require('express');//Inyeccion de dependencia express
const app = express();//App con la dependencia
const port = 3000;//Consatante que define el puerto de escucha

app.use('/assets', express.static(__dirname + '/public'));//Mapeo del estilo referenciado como assets

app.set('view engine', 'ejs');

//app.get('/', (req, res)=>{//Route handler para la ruta raiz
 //   res.render(`index`);
//});

app.get('/person/:id', (req, res)=>{//Route handler para obtener un dato del querystring
    //console.log(`El id que estas enviando es ${req.params.id}`);//Imprime en la consola de visual
    res.render('index', {ID: req.params.id});
});

app.listen(port, () =>{
    console.log(`Escuchando en el puerto ${port}`)
});

