const fs = require("fs");

//loadFile()は、エラーが発生した際に、throwされ、実行が中断されます。
//エラーが発生した時に、実行が中断されず、戻り地がnullになるようにしてください
//ファイルを読み込んで、内容を返します
function loadFile(file, callback) {
  try{
    let data = fs.readFileSync(file, {encoding:"UTF-8"});
    return data;

  }catch(error){
    return null;
  }  
  
}
  


var data = loadFile("./hello.txt");
console.log(data);


var nashi = loadFile("./nachi.txt");
console.log(nashi);
