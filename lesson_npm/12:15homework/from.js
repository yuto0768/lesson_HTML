const router = require("express").Router();

const { Client } = require("pg");

const config = {
    user: 'sakai0768',
    host: 'samurai-test.cl5rilsmm17j.ap-northeast-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'Siamshade0768',
    port: 5432,
};

function setup() {
    let client = new Client(config);
    client.connect()
        .then(() => {
            return client.query(`create table if not exists users
        (id serial NOT NULL,
        name      varchar(64),
        user_type varchar(64),
        user_type2 varchar(64),
        skil integer)`);
        })
        .then(() => {
            console.log("ssetup complete");
        })
        .catch((err) => {
            console.log(err);
        }).finally(() => {
            client.end();
        });
}


function add(user) {
    let client = new Client(config);
    return client.connect()
        .then(() => {
            return client.query("insert into users(name, user_type, user_type2, skil) values($1, $2, $3, $4)",
                [user.name, user.user_type, user.user_type2, user.skil]);
        })
        .then(() => {
            console.log("insert complete");
        })
        .catch((err) => {
            console.log(err);
        }).finally(() => {
            client.end();
        });

}

var user_type2 = "normal";
var check = [];
var user_name = ""
var user_type = "男性"

setup();
add({ name: "SUZUKI", user_type: "男性", user_type2: "normal", skil: 1 });
router.get("/", (req, res) => {
    var keyword = 0
    res.render("form_lesson/12:15lesson_homework.ejs", {
        user_name,
        user_type,
        user_type2,
        check
    })
})

router.get("/form_lesson2", (req, res) => {
    var keyword = req.query.keyword
    res.render("form_lesson/12:15lesson_homework_get.ejs", {
        word: keyword
    });
})
router.post("/save", (req, res) => {
    user_type2 = req.body.user_type2
    check = req.body.check
    user_name = req.body.user_name
    user_type = req.body.user_type
    res.render("form_lesson/12:15lesson_homework_post.ejs", {
        user_name: req.body.user_name,
        user_type: req.body.user_type,
        user_type2,
        check
    })
})
module.exports = router;