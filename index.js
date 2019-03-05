var express = require('express');
var app     = express();


app.get("/url",(req,res, next) => {
    res.json(["aku","kamu","dia","mereka"]);
});

app.listen(8081,() => {
    console.log("server running on port 8081");
});