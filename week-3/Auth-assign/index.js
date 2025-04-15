const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username: "yashveer@gmail.com",
        password: "123",
        name: "Yashveer Singh"
    },
    {
        username: "Sudiksha@gmail.com",
        password: "123456",
        name: "Sudiksha Singh"
    },
    {
        username: "Shruti@gmail.com",
        password: "12369696",
        name: "Shruti rana"
    }
];

function userExists(username,password){
    const matches = ALL_USERS.filter((user)=>{
        if(user.username===username && user.password===password){
            return true;
        }else{
            return false;
        }
    });
    return matches.length > 0;
}

app.post('/signin', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "user doesn't exists in out memory db",
        });
    }
    var token = jwt.sign({username: username}, jwtPassword);
    return res.send({
        token,
    });
});

app.get("/users", (req, res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const otherusers = ALL_USERS.filter((users)=>{
            return users.username !== username;
        });
        res.json({
            users: otherusers,
        });
    } catch(err){
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});
app.listen(3000);

