//配列
var array = [1,2,3];
console.log(`array = ${array}`);
//配列に要素を追加
array.push(4);
console.log(`array.push(4) = ${array}`);
//配列から要素を削除
array.shift();
console.log(`array.shift() = ${array}`);
//配列の一部を抜き出す
var array_slice = [1,2,3,4].slice(1,3);
console.log(`array_slice = ${array_slice}`);


//配列の便利な操作
var names = ["山田", "田中", "鈴木", "佐藤"];

//条件にあった要素を抜き出す
var array_filter = names.filter(e => e.includes("田"));//=>
console.log(array_filter);

var array_filter2 = names.filter((e) => {
  if(e == "山田" || e=="佐藤"){
    return true;
  }else{
    return false;
  }
});
console.log(array_filter2);

//配列の要素を加工して、新しい配列を作る
var array_map = names.map(e=>e+"さん");
console.log(array_map);
