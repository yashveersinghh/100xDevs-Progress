const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://dbUser:yashveergugu%40123@cluster0.nxp9ebu.mongodb.net/user_app");

const users = mongoose.model('user', {name:String, email: String,password: String});

//CRUD-create,read,update,delete
app.post("/signin", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const userExists = await users.findOne({email: email});
    if(userExists){
        res.status(400).send("User already exists.");
    }

    const user = new users({
        name: username,
        email: email,
        password: password,
    });
    user.save();
    res.json({
        "msg": "User created successfully"
    })
});

app.listen(3000);