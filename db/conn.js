const mongoose = require('mongoose');
const DB = "mongodb+srv://admin:admin@cluster0.fumk2z3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no connection\n'+err.message));
