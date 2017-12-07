// Dependencies
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var port  = 3000;
var url1 = 'https://jsonplaceholder.typicode.com/users';
var url2 = 'https://jsonplaceholder.typicode.com/posts';
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// Defining Get Jason for retreiving data 
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

// Router Setup
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.get('/',(req,res) =>{
res.send('Hello World -- Ankit Yadav');
});

app.get('/authors',(req,res) => {

	getJSON(url1, function(err, data) {
  
    if (err != null) {
    alert('Something went wrong: ' + err);
    }  
    else {
    alert('Your Json result is:  ' + data.result);
    
    result.innerText = data.result;
    }
    });

	//app.locals.author = require('./Routes/author.json');//--------------------------------
    app.locals.author = result.innerText;
	getJSON(url2, function(err, data) {
  
    if (err != null) {
    alert('Something went wrong: ' + err);
    }  
    else {
    alert('Your Json result is:  ' + data.result);
    var result;
    result.innerText1 = data.result;
    }
    });

    //app.locals.post = require('./Routes/posts.json');//-------------------------
    app.locals.post = result.innerText1;
    var count = 0;
    
    app.locals.author.forEach(function(item)
	{   
		app.locals.post.forEach(function(item1){
		
		if(item.id == item1.userId)
		{
          count++;
		}
        });
        res.send('Author = ' + item.name + " No of Posts done = " + count +"\n");
        count = 0;
	});

	res.send('./Routes/author.json')
});

app.get('/setcookie',(req,res) => {
	res.send('setcookie')
});

app.get('/getcookies ',(req,res) => {
	res.send('getcookies ')
});

app.get('/robots.txt ',(req,res) => {
	res.send('robots.txt ')
});

app.get('/html',(req,res) => {
	res.send('html')
});

app.get('/image',(req,res) => {
	res.send('image')
});

app.get('/input',(req,res) => {
	res.send('input')
});

//starting the node server 
app.listen(port);
console.log('MyFirstApp Started on port ' + port);