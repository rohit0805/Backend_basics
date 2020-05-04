var express=require("express");
var app=express();

app.listen(3000,function(){
    console.log("Server Started");
});

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/fall/:puppy",function(req,res){
    var thing=req.params.puppy;
    res.render("love",{thingvar:thing});
});

app.get("/posts",function(req,res){
    var posts=[{title:"one",author:"zegrod"},
        {title:"two",author:"tanger"},
        {title:"three",author:"desiley"}]
    res.render("posts",{posts:posts});
});