//DBサーバー（Postgresql）
const { Client } = require("pg");

const config = {
  user: 'sakai0768',
  host: 'samurai-test.cl5rilsmm17j.ap-northeast-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'Siamshade0768',
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
        return client.query(`create table if not exists users
        (id serial NOT NULL,
        name      varchar(64),
        user_type varchar(64),
        uset_type2 varchar(64),
        check      int)`);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        client.end();
      });
  }

  add(user) {
    let client = new Client(config);
    return client.connect()
      .then(() => {
        return client.query("insert into users(name, user_type, user_type2, check) values($1, $2, $3, $4)",
          [user.name, user.]);
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
