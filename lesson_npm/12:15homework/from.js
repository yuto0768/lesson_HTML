const router = require("express").Router();

var user_type2 = "normal";
var check = [];
var user_name = ""
var user_type = "男性"

router.get("/", (req, res)=>{
    var keyword = 0
    res.render("form_lesson/12:15lesson_homework.ejs",{
        user_name,
        user_type,
        user_type2,
        check
    })
  })

router.get("/form_lesson2", (req, res)=>{
    var keyword = req.query.keyword
    res.render("form_lesson/12:15lesson_homework_get.ejs", {
    word:keyword
    });
 })
 router.post("/save", (req, res)=>{
     user_type2 = req.body.user_type2
     check = req.body.check
     user_name = req.body.user_name
     user_type = req.body.user_type
     res.render("form_lesson/12:15lesson_homework_post.ejs",{
        user_name:req.body.user_name,
        user_type:req.body.user_type,
        user_type2,
        check
     })
 })
  module.exports = router;