const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter.js');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes' ,dishRouter);

app.get('/dishes/:dishId' ,(req ,res ,next) => {
    res.end('Will send the details of dish :!! '+req.params.dishId);
});

app.post('/dishes/:dishId' ,(req ,res ,next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+req.params.dishId);
});

app.put('/dishes/:dishId' ,(req ,res ,next) => {
    res.write('Updating the dish '+req.params.dishId + '\n');
    res.end('Will update the '+req.body.name + ' '+req.body.description);
});

app.delete('/dishes/:dishId' ,(req ,res ,next) => {
    res.end('Deleting the dish '+req.params.dishId);
});

app.use(express.static(__dirname+'/public'));

app.use((req ,res ,next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    res.end('<html><body><h1>Express Server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname ,() => {
    console.log(`Server running at http://${hostname}:${port}`);
});
