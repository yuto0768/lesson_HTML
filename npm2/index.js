console.log("hello world")
var http  = require("http");//includeと同様 ライブラリ使用のため
var express = require("express");//コンソールからインストールしたもの

//Expressアプリケーションを定義します
var app = express();

app.get("/lesson1", (req, res)=>{
  res.contentType("text/plain");
  res.send("HELLO");
});
var count = 0;
app.get("/page2", (req, res)=>{
  res.render("lesson.ejs",{count});
  count++;
});

//ファイルを配信する
app.use("/files", express.static("files"));//filesの階層に来た時にfilesフォルダの中身を送る

//テンプレートエンジンにEJSを使用します
app.set("view engine", "ejs");

//HTTPサーバーを作成します
var server = http.createServer(app);

//HTTPサーバーを起動します
server.listen(80);