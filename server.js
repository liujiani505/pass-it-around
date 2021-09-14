const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send(`
        <p>99 Bottles of beer on the wall</p>
        <a href ="/98">Take one down, pass it around</a>
    `)
});

app.get("/:number_of_bottles", (req, res) =>{
    const bottleNumbers = req.params.number_of_bottles;
    if (bottleNumbers > 0) {
        res.send(`
        <p>${bottleNumbers} Bottles of beer on the wall</p>
        <a href ="/${bottleNumbers -1}">Take one down, pass it around</a>
        `)
    }else{
        res.send(`
        <p>No more beers!</p>
        <a href ="/">Please start over</a>
        `)
    }
});


app.listen(port, ()=>{
    console.log("Listening")
});