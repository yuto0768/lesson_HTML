
//ファイルシステム
//HDD(SSD)にアクセスします
const fs = require("fs");

//ファイル名に関連する機能が含まれています
const path = require("path");

//Orderクラスを使用可能にします
const Order = require("./Order");

const FILE_NAME = "config.json";

class OrderManager{
  constructor(){
    this.orders = [];
  }
  
  add(order){
    this.orders.push(order);
    this.save();
  }

  load(){
    //フルパスを取得
    //__dirnameはソースコードのあるフォルダ
    //joinはフォルダ名とファイル名をつなぐ
    let fullpath = path.join(__dirname, FILE_NAME);
    console.log(fullpath);

    //ファイル名
    let basename = path.basename(fullpath);
    console.log(basename);

    //拡張子
    let ext = path.extname(FILE_NAME);
    console.log(ext);

    //ファイルがある？
    if(fs.existsSync(fullpath)){
      //ファイル読み込み
      let file = fs.readFileSync(fullpath);
      let json = JSON.parse(file);

      //一度空にする
      this.orders = [];
      json.orders.forEach(p => {
        console.log(p);
        let o = Object.assign(new Order(), p);
        this.orders.push(o);        
      });
    }
  }

  save(){
    //フルパスを取得
    //__dirnameはソースコードのあるフォルダ
    //joinはフォルダ名とファイル名をつなぐ
    let fullpath = path.join(__dirname, FILE_NAME);
    let json = {
      orders:this.orders
    };

    let jsonString = JSON.stringify(json);
    fs.writeFileSync(fullpath, jsonString);
    console.log(`Saved ${this.orders.length}`);
  }
}

//サンプル
module.exports = new OrderManager();
