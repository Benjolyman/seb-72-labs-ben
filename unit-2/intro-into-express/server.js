const express = require('express');
const { type } = require('os');

const server = express();

server.listen(4000, () => {
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

// 4. Filter Shoes by Query Parameters

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];



server.get('/shoes/minprice/:price', (req, res) => {
    let priceString = req.params.price;
    let price = Number(priceString);
    let shoeArray = [];

    shoes.forEach((shoe) => {
        if (shoe.price <= price) {
            shoeArray.push(shoe);
        }
    })
    res.send(shoeArray);
})


server.get('/shoes/maxprice/:price', (req, res) => {
    let priceString = req.params.price;
    let price = Number(priceString);
    let shoeArray = [];

    shoes.forEach((shoe) => {
        if (shoe.price >= price) {
            shoeArray.push(shoe);
        }
    })
    res.send(shoeArray);
})


server.get('/shoes/type/:shoes', (req, res) => {
    let shoeType = req.params.shoes;
    let shoeArray = [];

    shoes.forEach((shoe) => {
        if (shoe.type === shoeType) {
            shoeArray.push(shoe);
        }
    })
    res.send(shoeArray);
})


server.get('/shoes/', (req, res) => {
    res.send(shoes)
})

'/shoes/minprice:price'
'/shoes/minprice/:price'