const express = require('express');
const app = express(); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 


//Import Routes
const authRoute = require('./routes/auth'); 

dotenv.config(); 


// connect to database mongo atlas
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true },
    () => console.log('connected to db!')
); 

// Middleware
app.use(express.json()); 



//Routes Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server up and running'));

