

//Promiseとは、非同期実行をキレイに書く方法です。

//Promiseが無い場合
// setTimeout(()=>{
//   console.log("1秒後")
//   setTimeout(()=>{
//     console.log("2秒後")
//     setTimeout(()=>{
//       console.log("3秒後")
//     }, 1000);
//   }, 1000);
// }, 1000)

//Promiseがある場合
// new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     console.log("1秒後")
//     resolve();
//   }, 1000);
// }).then(()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("2秒後")
//       resolve();
//     }, 1000);
//     });  
// }).then(()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("3秒後")
//       resolve();
//     }, 1000);
//     });  
// });
