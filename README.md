# Hasura-Task-1
TASK -1 (Testing App )Hasura Internship

This project is a basic backend api that performs following task 

1 A simple hello-world at http://localhost:8080/ that displays a simple string like "Hello World - Arpit"; replace "Arpit" with your own first name).

2 Add a route, for e.g. http://localhost:8080/authors, which:
    a fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users
    b fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts
  Respond with only a list of authors and the count of their posts (a newline for each author).

3 Set a simple cookie (if it has not already been set) at http://localhost:8080/setcookie with the following values: name=<your-first-name> and age=<your-age>.

4 Fetch the set cookie with http://localhost:8080/getcookies and display the stored key-values in it. (Cookies details will be shown in the command line interface where you have executed the server

5 Deny requests to your http://localhost:8080/robots.txt page. (or you can use the response at http://httpbin.org/deny if needed)

6 Render an HTML page at http://localhost:8080/html or an image at http://localhost:8080/image.

7 A text box at http://localhost:8080/input which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.

Getting Started
1 You need to enure you have node js installed in your system you can get it from here 
  https://nodejs.org/en/
2 Ensure NPM is installed which comes bundled with the node js install 
  
    
Prerequisites 
Basic knowledge of using a command line based intrerface and using a web-browser 

Dependencied 
install the following modules using npm install command in the command line 
$ npm install express 
$ npm install express-session
$ npm install cookie-parser
$ npm install http-server
$ npm install body-parser
$ npm install morgan
$ npm install --save path
$ npm install get-json
$ npm install xml2json

What things you need to install the software and how to install them

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Step - 1 Start the Comand Prompt ( 1-click on the Windows button 2-Type CMD 3-Select Command Prompt)

Step -2 Direct the Command Prompt Dierectory to the one where the git repo has been cloned (Eg C:\Users\abc\Desktop\Hasura_Development_Internship)

Step -3 Finally Run the Command { node app.js) 

Step-4 finally you have your local server running at port 3000 with this app

Usage of the app

Hence to perform the above tasks you have to open your Web browser (chrome , Edge etc)

Type one of the following to acces the home of the local app
 --> http://127.0.0.1:3000/
 --> http://localhost:3000/
 
 hence with this task one is completed for the remianing task we type these urls
 
 Task -2 http://127.0.0.1:3000/authors/noInternet
 Task -3 http://127.0.0.1:3000/setcookies
 Task -4 http://127.0.0.1:3000/getcookies
 Task -5 http://127.0.0.1:3000/robots.txt (Ensure that the network is running ) To acces the robots.txt type following url http://127.0.0.1:3000/robots.txt/pass  [Default pass = 123]
 Task -6 http://127.0.0.1:3000/html
 Task -7 http://127.0.0.1:3000/input {Type the text you desire to type in the Box, Press submit , you will be redirected to the end point http://127.0.0.1:3000/ankit with your text being displayed}
 
 Support 
 For any furthure queries or bug reporting please drop a mail at
 drkkgy@gmail.com

Versioning

This is Version -1.0.0.0
Authors

Ankit Yadav

Acknowledgments

Stack Overflow Community
W3Schools.com
And my Team of fellow interns at Haura
