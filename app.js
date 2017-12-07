// Dependencies
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path    = require('path');
var port  = 3000;
//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; was not able to parse data directly from the urls



// Router Setup
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.get('/',(req,res) =>{
res.send('Hello World -- Ankit Yadav');
});

app.get('/authors',(req,res) => {

app.locals.author = require('./Routes/author.json');
app.locals.post = require('./Routes/posts.json');
    
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
	

});
// Setting cookies
app.get('/setcookies',(req,res) => {

	var cookie = req.cookie
	if(cookie === undefined)
	{
	res.cookie('Ankit',21);
	res.end('Cookie has been set')
	console.log('Cookie has been set');
    }
    else 
    {
    	console.log('Cookie Alredy exist');
    }
});

// Getting  Cookies

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
	secret: 'Hasura -- IMAD',
	saveUninitialized: true,
	resave: true
}));

app.get('/getcookies',(req,res) => {
	res.render('cookies Retrieved in Console');
	console.log(req.cookies);
	console.log('**************');
	console.log(req.session);

});

app.get('/robots.txt/:id?',(req,res) => {
	if(req.params.id  == '123')
	{
		fs = require('fs');
        fs.readFile('./Routes/robots.txt', 'utf8', function (err,data) {
        if (err) {
        return console.log(err);
     }
       console.log(data);
       var txtf = data;
       res.send(txtf);
    });
		
	}
    else
    {
	res.redirect('https://httpbin.org/deny');
    }
});

app.get('/html',(req,res) => {
	res.sendFile(path.join(__dirname+'/Routes/ankit.html'));
});

app.get('/input',(req,res) => {
	res.send('input')
});





//starting the node server 
app.listen(port);
console.log('MyFirstApp Started on port ' + port);

