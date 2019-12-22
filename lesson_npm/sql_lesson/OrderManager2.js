//DBサーバー（Postgresql）
const { Client } = require("pg");

const config = {
  user: 'postgres',
  host: 'samurai-test1.ckmiwi9xqwvp.us-east-2.rds.amazonaws.com',
  database: 'testdb1',
  password: 'samurai-test1',
  port: 5432,
};

const Order = require("./Order");


class OrderManager {
  constructor() {
  }

  setup() {
    let client = new Client(config);
    client.connect()
      .then(()=>{
        return client.query("begin");
      })
      .then(() => {
        return client.query(`create table if not exists orders
        (id serial NOT NULL,
        name varchar(64),
        product_id int,
        amount int)`);
      })
      .then(() => {
        return client.query(`create table if not exists products
        (id int primary key,
        name varchar(64),
        price int)`);
      })
      .then(()=>{
        return client.query("select count(*) as count from products");
      })
      .then((result)=>{
        console.log(`products = ${result.rows[0].count}`);
        if(result.rows[0].count == 0){
          const products = [
            {id:1, name:"ラーメン", prise:"800"},
            {id:2, name:"蕎麦", prise:"680"},
            {id:3, name:"うどん", prise:"350"},
          ];
          return Promise.all(
            products.map((p) =>
              client.query("insert into products(id, name, price) values($1,$2,$3)",
                [p.id, p.name, p.prise])
            ));
        }else{
          return Promise.resolve();
        }
      }) 
      .then(()=>{
        console.log("setup complete");
        return client.query("commit");
      })     
      .catch((err) =>{
        console.log(err);
        return client.query("rollback");
      })
      .finally(() => {
        client.end();
      });
  }


  add(order) {
    let client = new Client(config);
    return client.connect()
      .then(() => {
        return client.query("insert into orders(name, product_id, amount) values($1, $2, $3)",
          [order.name, order.productId, order.amount]);
      }).finally(() => {
        client.end();
      });
  }

  getOrders() {
    let client = new Client(config);
    return client.connect()
      .then(() => {
        return client.query(`select orders.name , products.name as product_name, amount from orders
                             inner join products on orders.product_id=products.id`);
      })
      .then((result) => {
        //console.log(result);
        return result.rows.map((row) => new Order(row.name, row.product_name, row.amount));
      }).finally(() => {
        client.end();
      });
  }
}

//サンプル
module.exports = new OrderManager();
