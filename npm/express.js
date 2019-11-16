var http  = require("http");
var express = require("express");

//Expressアプリケーションを定義します
var app = express();

app.get("/", (req, res)=>{
  res.contentType("text/plain");
  res.send("HELLO");
});

app.get("/page2", (req, res)=>{
  res.contentType("text/html");
  res.send('<span style="color:red">page2</span>');
});

//HTTPサーバーを作成します
var server = http.createServer(app);

//HTTPサーバーを起動します
server.listen(8080);