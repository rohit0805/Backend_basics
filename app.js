var express=require("express");
var app=express();

app.listen(3000,function(){
    console.log("Server Started");
});

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/fall/:puppy",function(req,res){
    var thing=req.params.puppy;
    res.render("love.ejs",{thingvar:thing});
});

app.get("/posts",function(req,res){
    var posts=[{title:"one",author:"zegrod"},
        {title:"two",author:"tanger"},
        {title:"three",author:"desiley"}]
    res.render("posts.ejs",{posts:posts});
});