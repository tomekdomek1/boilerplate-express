let express = require('express');
let app = express();

/*
console.log("Hello World");
*/ //first challenge

/*
app.get("/", function (req, res){
    res.send("Hello Express");
});
*/ //second challenge

app.get("/", function (req, res){
    res.sendFile(__dirname + "/views/index.html");
})
//third challenge

app.use("/public", express.static(__dirname + "/public"));
//forth

app.get("/json", function(req, res){
    res.json({"message": "Hello json"});
})
//fifth




























 module.exports = app;
