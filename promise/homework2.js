const fs = require("fs");

//宿題2
//loadFile()は、エラーが発生した際に、throwされ、実行が中断されます。
//エラーが発生した時に、実行が中断されず、戻り地がnullになるようにしてください
function loadFile(file, callback) {
  let data = fs.readFileSync(file);
  return data;
}

//ファイルを読み込んで、内容を返します
var data = loadFile("./hello.txt");
console.log(data);

//ファイルを読み込んで、内容を返します
var nashi = loadFile("./nachi.txt");
console.log(nashi);
