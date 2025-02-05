const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
//sendFile
app.get("/", function(req, res){
  // res.send("<h1>Hello, World!</h1>");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  // res.send("Posted Successfully");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result is "+result);
});

app.listen(3000, function(){
  console.log("Server listening at Port 3000");
});
