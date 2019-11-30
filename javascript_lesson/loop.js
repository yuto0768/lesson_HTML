//繰り返し(while)
var a = 3;
while(a>0){
  console.log(`a=${a}`);
  a--;
}

console.log();

//繰り返し(for)
for (let i = 0; i < 3; i++) {
  console.log(`i=${i}`);
}

console.log();

//繰り返し(forEach)
var array = [1, 2, 3];
array.forEach(e => {
  console.log(`e = ${e}`)
});