const express = require ('express');
const app = express();


const users = [{
  name: 'Yashveer Singh',
  kidney: [{
    healthy: true,
  },
  {
    healthy: false,
  }]
}]

app.use(express.json());

app.get('/', function(req, res){
  const userKidneys = users[0].kidney;
  const numOfKidneys = userKidneys.length;
  let numOfHealthyKidneys = 0;
  for(let i = 0; i<userKidneys.length; i++){
    if (userKidneys[i].healthy){
      numOfHealthyKidneys = numOfHealthyKidneys + 1;
    }
  }
  const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
  res.json({
    numOfKidneys,
    numOfHealthyKidneys,
    numOfUnhealthyKidneys
  })
})
app.post('/', function(req, res){
  if(users[0].kidney.length == 1){
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
      healthy: isHealthy
    })
    res.json({
      msg: "Done!"
    })
  }else {
    res.status(400).json({
      msg: "you already have 2 kidneys"
    })
  }
})
app.put('/', function(req, res){
  if (KidneyCheck()){
    for(let i=0; i<users[0].kidney.length; i++){
      users[0].kidney[i].healthy = true;
    }
    res.json({});
  } else {
    res.status(400).json({
      msg: "your both kidneys are good"
    })
  }
})
app.delete('/', function(req, res){
  if (KidneyCheck()){
    const newKidneys = [];
    for(let i = 0; i<users[0].kidney.length; i++){
      if(users[0].kidney[i].healthy){
        newKidneys.push({
          healthy: true
        })
      }
    }
      users[0].kidney = newKidneys;
      res.json({})
    } else {
        res.status(400).json({
          msg: "You have no bad kidneys"
        });
   }
})

function KidneyCheck(){
  let atleastOneUnhealthyKidney = false;
  for(let i = 0; i<users[0].kidney.length; i++){
    if(!users[0].kidney[i].healthy){
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney
}

app.listen(3000);