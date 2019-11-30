var http = require("http");
var fs   = require("fs")

var server = http.createServer((request, response)=>{
  console.log(request.method);
  console.log(request.url);
  fs.readFile("."+request.url, (err, data)=>{
    if(err){
      response.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
      response.end();
    }else{
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write(data);
    response.end();
    }
  });
});
server.listen(8080);