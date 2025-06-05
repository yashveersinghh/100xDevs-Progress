const express = require("express");

const app = express();

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="yashveer" && password!="pass"){
        res.status(403).json({
            msg: "incorrect inputs",
        })
    }else {
        next();
    }
};

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    }else {
        next();
    }
};

app.get("/health-check", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your health is good");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your kidneys are healthy");
});

app.get("/heart-check", userMiddleware, (req, res) => {
    res.send("Your heart is fine");
});

app.listen(3000);