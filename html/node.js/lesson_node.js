var http = require("http");

var server = http.createServer((request, response)=>{
  console.log(request.method);
  console.log(request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello");
  response.end();
});
server.listen(8080);