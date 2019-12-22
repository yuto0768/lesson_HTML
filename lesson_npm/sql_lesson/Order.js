//1件の注文を表す
class Order{
  //全てのプロパティをコンストラクターの引数にする必要はありません
  constructor(name, product, amount){
    this.name = name;
    this.product = product;
    this.amount = amount;
  }

  toString(){
    return `${this.name}:${this.product} x ${this.amount}`;
  }
}

module.exports = Order;