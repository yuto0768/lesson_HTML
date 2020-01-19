module.exports = function (req, res, next) {

  // セッションが無ければ ログイン画面へ                                                                           
  if (!req.session.user) {
    //URLが/loginの時はログインできていなくても許可する
    if(req.url != "/login" && req.url != "/signup"){
      res.redirect("/member/login");
      return true;
    }
  }

  next();
};
