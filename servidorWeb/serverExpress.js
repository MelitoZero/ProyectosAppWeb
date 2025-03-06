const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

//Método get
app.get('/algo', (req, res)=> {
    res.send('Hola mundo desde algo');
});
app.get('/algo/:id', (req, res)=> {
    res.send(`Hola mundo desde algo ${req.params.id}`);
});
app.get('/algoquery', (req, res)=> {
    res.send(`Hola mundo desde algo ${req.query.nombre}`);
});
app.get('/redirect', (req, res)=> {
    res.redirect('https://google.com');
});
app.get('/descargar', (req, res)=> {
    const imagePath = path.join(__dirname, 'public', 'nodeyexpress.png');
    res.download(imagePath, 'imagen.jpg', error=> {
        if (error) {
            res.status(500).send('Error al descargar la imagen');
        } else {
            console.log('La imagen se ha descargado correctamente');
        }
    }); 
});

//Método post
app.post('/algo', (req, res)=> {
    console.log(req.body);
    res.json(req.body);
});
//Método put
app.put('/algo', (req, res)=>{
    console.log(req.body);
    res.json(req.body);
});
//Metodo all
app.all('*', (req, res)=> {
    res.send('No se encontro la ruta');
});
//Metodo listen
app.listen(3000, ()=> {
    console.log('Servidor escuchando a traves de la url http://localhost:3000');
});