//ルーターを使用します
const router = require("express").Router(); //変わらない変数
const OrderManager = require("./OrderManager");
const Order = require("./Order");

//初期状態の注文リストを読み込む
OrderManager.load();

router.get("/", (req, res)=>{
  res.render("form_lesson/form.ejs",{
    orders:OrderManager.orders
  });
});

router.post("/save", (req, res)=>{  
  let user_name = req.body.user_name;

  let user_type = req.body.user_type;

  let user_type2 = req.body.user_type2;

  let check = req.body.check;

  let kakushi = req.body.kakushi;
  
  res.render("form_lesson/report.ejs",{
    user_name, //省略すると、変数名がプロパティ名になる
    user_type,
    user_type2,
    check,
    kakushi
  });
});

router.get("/search", (req, res)=>{  
  let keyword = req.query.keyword; //queryで取る
  
  res.render("form_lesson/search.ejs",{
    keyword
  });
});

router.get("/photo/:name", (req, res)=>{  
  let keyword = req.params.name; //paramsは変数を作成できる
  
  res.render("form_lesson/search.ejs",{
    keyword
  });
});

router.post("/save_file", (req, res)=>{  
  let name    = req.body.name;
  let product = req.body.product;
  let amount  = parseInt(req.body.amount);


  let order = new Order(name, product, amount);
  OrderManager.add(order);
  res.redirect("/form_lesson/");
});


//ファイルアップロードに使用します
// const multer = require("multer");
// const upload = multer({dest:"./upload"});

// router.get("/file", (req, res)=>{  
//   res.render("form_lesson/file.ejs");
// });

// router.post("/file", upload.array("file"), (req, res)=>{  
//   let file = req.file;
//   console.log(`file = ${file.originalname} -> ${file.filename}`);
//   res.redirect("/form_lesson/file");
// });

module.exports = router;