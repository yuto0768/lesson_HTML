const router = require("express").Router();

router.get("/", (req, res)=>{
    var keyword = 0
    res.render("form_lesson/12:15lesson_homework.ejs");
  });

router.get("/form_lesson2", (req, res)=>{
    var keyword = req.query.keyword
    res.render("form_lesson/12:15lesson_homework_get.ejs", {
    word:keyword
    });
 })
 router.post("/edit", (req, res)=>{
     let user_type2 = req.body.user_type2
     let check = req.body.check
     res.render("form_lesson/12:15lesson_homework_post.ejs",{
        user_name:req.body.user_name,
        user_type:req.body.user_type,
        user_type2,
        check
     })
 })
  module.exports = router;