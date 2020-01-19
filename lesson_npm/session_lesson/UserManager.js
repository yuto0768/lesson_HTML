//UserManager
//ユーザーの一覧
//ユーザーの登録
//ユーザーの取得
//ユーザーの更新
//ユーザーの削除


//DBサーバー（Postgresql）
const { Client } = require("pg");
const TABLE = "users10";

const config = {
  user: 'postgres',
  host: 'samurai-test1.ckmiwi9xqwvp.us-east-2.rds.amazonaws.com',
  database: 'testdb1',
  password: 'samurai-test1',
  port: 5432,
};

const User = require("./User");

class UserManager {
  constructor() {
  }

  setup() {
    let client = new Client(config);
    client.connect()
      .then(() => {
        return client.query(`create table if not exists ${TABLE}
        (id serial NOT NULL primary key,
        email varchar(64) unique,
        name  varchar(64),
        address varchar(64),
        password varchar(64) )`);
      })
      .then(()=>{
        console.log(`${TABLE} setup complete`);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        client.end();
      });
  }

  add(user) {
    return this.execSql(`insert into ${TABLE}(email, name, address, password) values($1, $2, $3, $4)`,
      [user.email, user.name, user.address, user.password]);
    //let client = new Client(config);
    // return client.connect()
    //   .then(() => {
    //     return client.query(`insert into ${TABLE}(email, name, address, password) values($1, $2, $3, $4)`,
    //       [user.email, user.name, user.address, user.password]);
    //   }).finally(() => {
    //     client.end();
    //   });
  }

  //一覧では、処理の高速化のため、email, nameのみ取得しています。
  //SQLでは、必要な情報以外を省略することで、速度アップ可能です
  listUsers() {
    return this.execSql(`select email, name from ${TABLE}`)
      .then((result) => {
        return result.rows.map((row) => new User(row.email, row.name));
      });
    //let client = new Client(config);
    // return client.connect()
    //   .then(() => {
    //     return client.query(`select email, name from ${TABLE}`);
    //   })
    //   .then((result) => {
    //     return result.rows.map((row) => new User(row.email, row.name));
    //   }).finally(() => {
    //     client.end();
    //   });
  }

  getUser(email, password){
    return this.execSql(`select email, name, address, password from ${TABLE} where email=$1`, [email])
      .then((result)=>{
        if(result.rows.length == 1){
          let user = result.rows[0];
          if(user.password === password){
            return new User(user.email, user.name, user.address, user.password);  
          }else{
            //パスワードが一致しない
            return null;
          }
        }else{
          //未登録
          return null;
        }
      });
  }



  execSql(sql, params) {
    let client = new Client(config);
    return client.connect()
      .then(() => {
        return client.query(sql, params);
      })
      .finally(() => {
        client.end();
      });

  }
}

const um = new UserManager();
um.setup();

//サンプル
module.exports = um;
