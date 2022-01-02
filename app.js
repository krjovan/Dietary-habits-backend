const express= require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const config=require('./config/database');
const logger = require('morgan');
var passport = require('passport');

//load services
const users = require('./routes/users');

const app=express();
//connecting to database
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log('Connected to database: ' + config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('Error with connection to database: ' + err);
});

require('./config/passport');

app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));
app.use(bodyParser.json());

//nasted routes from services
app.use('/users', users);

app.get('**', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

//start server on port 8080
const port= process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("Server started on port: " + port);
});