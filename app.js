var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");

app.set(" view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));

var friends = [ "Sameer", "Shivam", "Prachi"];


app.get("/", (req,res)=>{

   res.render("home.ejs");

});


app.get("/friends", (req,res)=>{

	res.render("friends.ejs", {friends : friends});

});


app.post("/addfriend", (req,res)=>{

var newfriend = req.body.newfriend;
friends.push(newfriend);

res.redirect("friends")

});


app.listen(port, ()=>{

console.log(`Server Running on ${port}`);

})