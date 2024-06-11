const express = require('express');
const { type } = require('os');

const server = express();

server.listen(4000, () => {
    console.log('aa');
});


// 1. Be Polite, Greet the User

server.get('/greetings/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}`);
});



// 2. Rolling the Dice

server.get('/roll/:numberParameter', (req, res) => {
    let dieString = req.params.numberParameter;
    let dieSize = Number(dieString);

    if (!isNaN(dieSize)){
        res.send(`You rolled a ${Math.floor(Math.random()*dieSize)}`);
    } else {
        res.send('give us a number')
    }
});



// 3. I Want THAT One!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

server.get('/collectibles/:indexParameter', (req, res) => {
    let arrayString = req.params.indexParameter;
    let arrayNumber = Number(arrayString);

    if (arrayNumber >= 0 && arrayNumber < 3){ 
        res.send(`So you want the ${collectibles[arrayNumber].name}? For ${collectibles[arrayNumber].price} it can be yours!`)
    } else {
        res.send('This item is out of stock')
    }
    
})

4. Filter Shoes by Query Parameters