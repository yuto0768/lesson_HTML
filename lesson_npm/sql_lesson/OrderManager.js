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
      .then(() => {
        return client.query(`create table if not exists orders
        (id serial NOT NULL,
        name varchar(64),
        product varchar(64),
        amount int)`);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        client.end();
      });
  }

  add(order) {
    let client = new Client(config);
    return client.connect()
      .then(() => {
        return client.query("insert into orders(name, product, amount) values($1, $2, $3)",
          [order.name, order.product, order.amount]);
      }).finally(() => {
        client.end();
      });
  }

  getOrders() {
    let client = new Client(config);
    return client.connect()
      .then(() => {
        return client.query("select name, product, amount from orders");
      })
      .then((result) => {
        //console.log(result);
        return result.rows.map((row) => new Order(row.name, row.product, row.amount));
      }).finally(() => {
        client.end();
      });
  }

  execSql(sql, params) {
    let client = new Client(config);
    return client.connect()
      .then(() => {
        return client.query(sql, params);
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        client.end();
      });

  }
}

//サンプル
module.exports = new OrderManager();
