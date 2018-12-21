var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("This is our landing page");
});

app.listen(3000 , function(){
    console.log("Camp share sever has started");
})