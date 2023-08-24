const mongoose = require('mongoose');
const DB = "mongodb+srv://parth:parth@cluster0.fumk2z3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no connection'));
