var http  = require("http");
var express = require("express");

//Expressアプリケーションを定義します
var app = express();

//ファイルを配信する
app.use("/files", express.static("files"));


//テンプレートエンジンにEJSを使用します
app.set("view engine", "ejs");

//カウンターです
var count = 0;

app.get("/", (req, res)=>{
  res.render("./top_page.ejs", {count});
  count++;
});

//HTTPサーバーを作成します
var server = http.createServer(app);

//HTTPサーバーを起動します
server.listen(8080);