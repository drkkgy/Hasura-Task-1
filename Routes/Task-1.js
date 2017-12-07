const http = require('http');
const hostname = 'localhost';
const port = 3000;


const server  = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end(' Hello World - Ankit Yadav');
}
);

server.listen(port, hostname,() => {
	console.log('Server Started on port |' + port);
});
