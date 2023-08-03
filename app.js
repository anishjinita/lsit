const bodyParser = require("body-parser");
const express=require("express");
const app=express();

// const express = require('express');
// const bodyParser = require('body-parser');

const port=3000;

app.use(bodyParser.urlencoded({extended:true}));



 //handling home route 
app.get("/",(req,res)=>{
    res.render("index.ejs");
});


//creating tasklist to collect itemList to do 
const taskList=[];


//handeling post request of submiting 
app.post("/sub",(req,res)=>{

    const newList=req.body.task;
    taskList.push(newList);

//    res.render("index.ejs",{tasks:taskList});
      res.render("index.ejs",{taskList});

});
console.log(taskList);


app.listen(port,()=>{
    console.log(`server is runnning at ${port}"`);
});