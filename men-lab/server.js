//todo

//force datatype requirements, no blanks

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require("path");

const server = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log('connected');
});
mongoose.connection.on('error', (err) => {
    console.error('Database connection error:', err);
});

//set server
server.set('view engine', 'ejs');
server.use(express.urlencoded({extended: true}));
server.use(methodOverride('_method'));
server.use(morgan('prod'));
server.use(express.static(path.join(__dirname, "public")));

//load model
const Items = require('./models/items');

//start server
server.listen(4000, () => {
    console.log('sever live at 4000')
});


//routes//

//index
server.get('/', (req, res) => {
    res.render('index.ejs');
});

//show
server.get('/items/submit', (req, res) => {
    res.render('submit.ejs');
});

//show
server.get('/items', async (req, res) => {
    const item = await Items.find({});
    res.render('itemList.ejs', { item: item});
});

//create
server.post('/items/submit', async (req, res) => {
    await Items.create(req.body)
    res.redirect('/items');
});

//show
server.get('/items/:id', async (req, res) => {
    const item = await Items.findById(req.params.id);
    res.render('itemPage.ejs', {item: item});
});

//edit
server.get('/items/:id/edit', async (req, res) => {
    const item = await Items.findById(req.params.id);
    res.render('edit.ejs', {item: item});
});

//update
server.put('/items/:id', async (req, res) => {
    await Items.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/items/' + req.params.id)
});

//destroy

server.delete('/items/:id', async (req, res) => {
    await Items.findByIdAndDelete(req.params.id);
    res.redirect('/items')
})