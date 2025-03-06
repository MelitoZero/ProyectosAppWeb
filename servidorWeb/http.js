const http = require('node:http');
const port = process.env.port ?? 3000;

const server = http.createServer((req, res)=>{
    console.log('Petición recibida');
    res.end('Hola mundo este es mi primer servidor con node.js');
})

server.listen(port, ()=>{
    console.log('Servidor escuchando en el puerto http://localhost:${port}');
})