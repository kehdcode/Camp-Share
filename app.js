var express = require("express");

var app = express();

//This helps to avoid writting our file extention in the routes
app.set("view engine", "ejs");

//Routes
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    
    var campGround = [
        {name: "Yankari Reserve", images: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
        {name: "Lekke Reserve", images: "https://www.photosforclass.com/download/flickr-2602356334"},
        {name: "Salmon Reserve", images: "https://www.photosforclass.com/download/flickr-2984119099"}
    ]
    res.render("campgrounds", {camps: campGround});
})


app.listen(4001 , function(){
    console.log("Camp share sever has started");
})