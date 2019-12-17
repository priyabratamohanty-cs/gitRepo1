const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const dbDetails = require('./config/db');
const api = require('./routes/users');
const PORT = dbDetails.port;

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
app.use('/api',api);

app.listen(PORT,(err)=>{
    if(err){
        console.log('Error occured while listening');
        console.log(err);
    }else{
        console.log('server is running on port no : '+PORT);
        console.log('hello')
    }
})