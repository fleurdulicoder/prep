var http = require('http'); // add http module 
var myServer = http.createServer(function(request, response){
	response.writeHead(200, {"Content-type": "text/html"});
	response.write("<b>Hello!</b> World");
	response.end();
}); // create a server

myServer.listen(3000);
console.log("Go to http://localhost:3000/ on your browser");

