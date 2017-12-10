// Dependencies
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path    = require('path');
var port  = 3000;
var getJSON = require('get-json');
var convert = require('xml-js');
var url1 = 'https://jsonplaceholder.typicode.com/users';
var url2 = 'https://jsonplaceholder.typicode.com/posts';
//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;// was not able to parse data directly from the urls



// Router Setup
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes

// Task 1
app.get('/',(req,res) =>{
res.send('Hello World -- Ankit Yadav');
});

// Task -2 
//---------------------------------------------------------------------------------------------------
app.get('/authors',(req,res) => {

getJSON(url1,function(error,response){
    if(!response.ok)
    {
	console.log("Error in geting the Author data and error is = " + error);
    }
var  author = JSON.parse(response);// convert.xml2json(response,{compact: true, spaces: 4})
// -----
getJSON(url2,function(error,response){
	 if(!response.ok)
    {
	console.log("Error in geting the Post data and error is = " + error);
    }
var post = JSON.parse(response);
// ------

    var count = 0;
    author.forEach(function(item)//app.locals.authors
	{
		post.forEach(function(item1){// app.locals.post
		if(item.id == item1.userId)
		{
          count++;
		}

        });
        
        res.write('Author = ' + item.name + " No of Posts done = " + count +"\n");
        count = 0;
	});
	});
});
     res.end('Task Completed');

     
});
//--------------------------------------------------------------------------------------------------------
// Task 2 Backup Mode or Hardwired incase of no network
app.get('/authors/noInternet',(req,res) => {
app.locals.authors = require('./Routes/author.json');
app.locals.post = require('./Routes/posts.json');

    var count = 0;
    app.locals.authors.forEach(function(item)
	{
		app.locals.post.forEach(function(item1){
		if(item.id == item1.userId)
		{
          count++;
		}

        });
        
        res.write('Author = ' + item.name + " No of Posts done = " + count +"\n");
        count = 0;
	});
     res.end('Task Completed');
});

app.get('/authors/noInternet/author_list',(req,res) => {
app.locals.authors1 = require('./Routes/author.json');

    app.locals.authors1.forEach(function(item)
	{
        
        res.write('Author = ' + item.name +"\n" );
	});
     res.end('Task Completed');
});

app.get('/authors/noInternet/post_list',(req,res) => {
app.locals.post = require('./Routes/posts.json');

    app.locals.post.forEach(function(item1)
	{
		
        
        res.write('id = ' + item1.id + 'Post = ' + item1.title +  "\n");
    });
     res.end('Task Completed');
});

// Task -3 Setting cookies
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

// Task -4 Getting  Cookies

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
	secret: 'Hasura -- IMAD',
	saveUninitialized: true,
	resave: true,
}));

app.get('/getcookies',(req,res) => {
	res.send('cookies Retrieved in Console');
	console.log(req.cookies);
	console.log('**************');
	console.log(req.session);

});

// Task -5 Dening acces to robots.txt
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

// Task -6 Rendering a html file
app.get('/html',(req,res) => {
	res.sendFile(path.join(__dirname+'/Routes/ankit.html'));
});


// Task -7 Inputing a text and posting to a end point
app.get('/input',(req,res) => {
	res.render('edit-form.jade');
});

// Post response handling endpoint
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/ankit',urlencodedParser,(req,res) => {
	
	var text22 = req.body.name;
	res.send('Entered Text is = '+ text22);
});

//starting the node server 
app.listen(port);
console.log('MyFirstApp Started on port ' + port);
