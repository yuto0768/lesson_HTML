const router = require("express").Router(); //変わらない変数
const userManager = require("./UserManager");
const User = require("./User");

router.get("/login", (req, res)=>{
  res.render("member/login.ejs", {error:null});
});

router.post("/login", (req, res)=>{
  userManager.getUser(req.body.email, req.body.password)
    .then((user)=>{
      if(user != null){
        req.session.user = user;
        res.redirect("/member");
      }else{
        res.render("member/login", {error:"ユーザー名、パスワードを確認してください"});
      }
    });
});

router.get("/signup", (req, res)=>{
  res.render("member/signup.ejs", {error:null});
});

router.post("/signup", (req, res)=>{
  try {
    if(!req.body.email){
      throw "Emailを入力してください";
    }
    if(!req.body.name){
      throw "なまえを入力してください";
    }
    if(!req.body.password){
      throw "パスワードを入力してください";
    }
    if(req.body.password != req.body.password_confirm){
      throw "確認用パスワードが一致しません";
    }

    let user = new User(req.body.email, req.body.name, req.body.password);
    userManager.add(user)
      .then(()=>{
        req.session.user = user;
        res.redirect("/member");
      })
      .catch((error)=>{
        res.render("member/signup.ejs", {error});
      });
  } catch (error) {
    res.render("member/signup.ejs", {error});
  }
});

router.get("/logout", (req, res)=>{
  req.session.destroy();//セッションを破棄する
  res.redirect("/member/login");
});

router.get("/", (req, res)=>{
  res.render("member/index.ejs", {user:req.session.user});
});

module.exports = router; 