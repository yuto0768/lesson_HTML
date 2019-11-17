var http  = require("http");
var express = require("express");

//Expressアプリケーションを定義します
var app = express();

//ファイルを配信する
app.use("/files", express.static("files"));

//HTTPサーバーを作成します
var server = http.createServer(app);

//HTTPサーバーを起動します
server.listen(8080);