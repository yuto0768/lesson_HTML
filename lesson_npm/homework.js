console.log("hello world")
var http  = require("http");//includeと同様 ライブラリ使用のため
var express = require("express");//コンソールからインストールしたもの

//Expressアプリケーションを定義します
var app = express();

app.get("/lesson1", (req, res)=>{
  res.contentType("text/plain");
  res.send("HELLO");
});
var count = 0;//カウント用の変数定義
app.get("/page2", (req, res)=>{
  res.render("lesson.ejs",{count});//使用する変数を第２引数としてかく
  count++;
});

//ファイルを配信する
app.use("/picfile/image", express.static("./picfile/image"));

app.use("/stylesheet", express.static("./stylesheet"));

//テンプレートエンジンにEJSを使用します
app.set("view engine", "ejs");

app.get("/lesson_npm", (req, res)=>{
    res.render("./html/lesson2.ejs");//使用する変数を第２引数としてかく
  });

//フォーム入力を可能にします
const bodyParser = require("body-parser"); //bodyParser使用しないとPOST取れない
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/form_lesson", require("./form_lesson/form_lesson"));//form_lesosonにアクセスしたら、form_lessonのなかにあるform_lessonを実行する。
app.use("/form_homework", require("./12:15homework/from"))

//HTTPサーバーを作成します
var server = http.createServer(app);

//HTTPサーバーを起動します
server.listen(80);