//JavaScriptの基礎

//デバッグ出力
console.log("Hello \"js\"");// ¥"で
console.log('Hello "js" ');//シングルクォーテーション
console.log(`Hello "js" `);//`` @+shift　中に変数が書ける

//変数と型

//数値
var n = 1;
var f = 1.0;
console.log(`n = ${n}`);
console.log(`f = ${f}`);
console.log(`f.fixed() = ${f.toFixed(2)}`);//変数名.fixedで小数点表示
console.log(`f+n = ${f+n}`);
console.log("")

//文字
var str = "moji"
var str_n = "123"
console.log(`str = ${str}`);
console.log(`str_n = ${str_n}`);
console.log(`str_n+100 = ${str_n+100}`);//文字は+でくっつけられる

//文字列から数値に変換する
var str_to_n = parseInt(str_n);//parseIntで数字にする
console.log(`str_to_n+100 = ${str_to_n+100}`);
//数値から文字に変換する
var n_to_str = String(100);//Stringで文字にする
console.log(`n_to_Str+100 = ${n_to_str+100}`);


//文字列の一部を抜き出す
var str_sub = "moji".substring(1, 3);//substring(1文字目、３文字目の１つ前の文字)
console.log(`str_sub = ${str_sub}`);
console.log();

//オブジェクト
var obj = {name:"hello", count:1}; //DB作成に便利。会員名簿など
console.log(obj);
//オブジェクトに要素を追加
obj.address = "a@a.com"
console.log(obj);
//オブジェクトの要素を削除
delete obj.address
console.log(obj);
