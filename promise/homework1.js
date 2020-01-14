const fs = require("fs");

//宿題1
//この関数は、fileで指定されたファイルを読み込んで、callbackに通知します。
//callback(err, data)
//errは、エラー時に設定されます。
//エラーが発生しなかった場合は、errはnullで、dataに内容が設置されます。
function loadFile(file, callback) {
  fs.readFile(file, {encoding:"UTF8"}, (err, data)=>{
    if(err){
      callback(err);
      return;
    }
    callback(null, data);
  });
}

//ファイルを読み込んで、内容を返します
loadFile("./hello.txt", (err, data)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(data);
});

loadFile("./nashi.txt", (err, data)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(data);
});

  