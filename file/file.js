var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer((req, res)=>{
  console.log("path=" + req.url);
  console.log("method=" + req.method);

  fs.readFile(`.${req.url}`, (err, data)=>{
    if(err){
      res.writeHead(404, err.message);
      res.end();
      return;
    }
    var ext = path.extname(req.url);
    if(ext == ".png"){
      res.writeHead(200, {"Content-Type": "image/png"});
    }else if(ext == ".jpg"){
      res.writeHead(200, {"Content-Type": "image/jpeg"});
    }else if(ext == ".gif"){
      res.writeHead(200, {"Content-Type": "image/gif"});
    }else{
      res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
    }
    res.write(data);
    res.end();
  });
});

server.listen(8080);
