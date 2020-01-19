const fs = require("fs");

//宿題1
//この関数は、fileで指定されたファイルを読み込んで、callbackに通知します。
//callback(err, data)
//errは、エラー時に設定されます。
//エラーが発生しなかった場合は、errはnullで、dataに内容が設置されます。
function loadFile(file) {
  return new Promise((resolve, reject)=>{
    fs.readFile(file, {encoding:"UTF8"}, (err, data)=>{
      if(err){
        reject(err);
        //return;
      }else{
        resolve(data);
        //return;
      } 
    });
  });
} 
//ファイルを読み込んで、内容を返します
loadFile("./hello.txt")
  .then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});
loadFile("./nachi.txt")
  .then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});
