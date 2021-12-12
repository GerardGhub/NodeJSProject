const express = require('express');
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "123456c",
    database:"laravel"
});


app.get("/", (req,res) =>{
    res.send("This is a api");
});

app.get("/users", (req, res)=>{
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) =>{
        if(err)throw err;
        res.send(result);
    });
});



app.listen(5000, () => console.log("server started"));
