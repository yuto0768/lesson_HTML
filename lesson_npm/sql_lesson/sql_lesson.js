//ルーターを使用します
const router = require("express").Router(); //変わらない変数
const orderManager = require("./OrderManager");
//const orderManager = require("./OrderManager2");
const Order = require("./Order");

//初期状態の注文リストを読み込む
orderManager.setup();

router.get("/", (req, res)=>{
  orderManager.getOrders()
    .then((orders)=>{
      res.render("sql_lesson/form.ejs",{
        orders
      });
    }).catch((err)=>{
      console.log(err);
      res.status(500).end();
    });
});

router.get("/order_form", (req, res)=>{
  orderManager.getOrders()
    .then((orders)=>{
      res.render("sql_lesson/form.ejs",{
        orders
      });
    }).catch((err)=>{
      console.log(err);
      res.status(500).end();
    });
});


router.post("/order", (req, res)=>{  
  let name    = req.body.name;
  let product = req.body.product;
  let amount  = parseInt(req.body.amount);


  let order = new Order(name, product, amount);
  orderManager.add(order)
    .then(()=>{
      res.redirect("/sql_lesson/");
    }).catch((err)=>{
      console.log(err);
      res.status(500).end();
    });
});

router.post("/order2", (req, res)=>{  
  let name      = req.body.name;
  let productId = parseInt(req.body.product_id);
  let amount    = parseInt(req.body.amount);

  let order = new Order(name, null, amount);
  order.productId = productId;
  orderManager.add(order)
    .then(()=>{
      res.redirect("/sql_lesson/");
    }).catch((err)=>{
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;