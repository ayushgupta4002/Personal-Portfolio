const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
mongoose.connect("mongodb+srv://Ayush:ayushishere@cluster0.fohsg.mongodb.net/PortfolioDatabase", {useNewUrlParser: true});
const Contact = {

    Name: String, 
    Subject: String,
    Message: String
   
   };
   const Contactmodel = mongoose.model("Contactcollection", Contact);

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/contact",function(req,res){
    const Post = new Contactmodel({
        Name: req.body.name, 
        Subject: req.body.subject,
        Message: req.body.message
    });
  
 
    Post.save(function(err){

        if (!err){
     

          
        console.log("hi");
     

     
        };

      });
  
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port); 