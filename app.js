const http = require('http');
const path = require('path'); 
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('express'));

// URL padrão do site
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/website/express/index.html'));
});

const server = http.createServer(app);
const port = 3000;
   
server.listen(port);

console.debug('Server inicializado na porta ' + port);
console.debug('Running at local http://localhost:' + port);
console.debug('Running at production http://mugac.com.br');