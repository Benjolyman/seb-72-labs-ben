require('dotenv').config();
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    age: Boolean
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
