//Find the average time your server is taking to handle requests

const express = require("express");
const app = express();

let count = 0;
let totalTime = 0;
app.use((req,res,next)=>{
    const start = Date.now();

    res.on('finish', ()=>{
        timeTaken = Date.now() - start;
        totalTime += timeTaken;
        count++;

        console.log(`Total time taken is ${totalTime}`);
        console.log(`Average time is ${totalTime/count}`)
    });
    next();
})

app.get("/hit", (req, res)=>{
    res.json({
        msg: "Done!!",
    })
})

app.listen(3000);