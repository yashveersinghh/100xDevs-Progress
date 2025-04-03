//Count the number of requests (Middleware)
const express  = require("express");
const app = express();

let numberOfRequests = 0;

function calculateReq(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}
app.use(calculateReq);

app.post("/hit-req", (req, res)=>{
    res.json({
        msg: "Request done!",
    })
})
app.listen(3000);