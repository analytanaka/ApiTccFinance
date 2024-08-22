const express = require ('express')
const cors = require('cors');
const router = require('./routes/routes')
const porta = 3333; 

const app = express();
app.use(cors());
app.use(express.jsonO());
app.use(router);

app.listen(porta, () =>{
    console.log('Servidor iniciado na porta' + porta);
} );

app.get ('/', (request, response) => {
    response.send('hello world');
});