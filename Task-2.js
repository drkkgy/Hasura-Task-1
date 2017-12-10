/**
 * Created by Ankit on 07-12-2017.
 */

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html',(err,html) => {
    if(err) {
        throw err;
    }
    else
        {
            console.log("NO big Error Detected");
}
});
const server  = http.createServer((req,res) => {
    res.statusCode = 200;
res.setHeader('Content-type','text/plain');
res.write(html);
res.end('Hello World');
});

server.listen(port, hostname,() => {
    console.log('Server Started on port |' + port);
});

