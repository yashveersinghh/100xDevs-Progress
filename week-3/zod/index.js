const express = require("express");
const z = require("zod");
const app = express();

const schema = z.array(z.number());

app.use(express.json());

app.post("/health-check", (req, res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msh: "wrong inputs"
        })
    }else{
        res.send({
            response,
        })
    }
});

app.listen(3000);