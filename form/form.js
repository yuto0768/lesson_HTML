var http = require("http");
var fs   = require("fs")

var server = http.createServer((request, response)=>{
  console.log(request.method);
  console.log(request.url);
if(request.method == "GET"){
    fs.readFile("./form.html", (err, data)=>{
      response.write(data);
      response.end();
    });
  }else{
    request.on("data", (chunk)=>{
      console.log("data:" + chunk);
    });

    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("post success!");
    response.end();
  }
});
server.listen(8080);
