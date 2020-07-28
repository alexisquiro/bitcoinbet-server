const express=require('express');
const app=express();


//setting

app.set('port',process.env.PORT||4000);



//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
  
  });



//routes 

app.use(require('./routes /user/index'));
app.use(require('./routes /bet/index.bet'));
app.use(require('./routes /betUser/index'));
app.use(require('./routes /game/index.Game'));
app.use(require('./routes /betGame/index.betGame'));


//start server
app.listen(app.get('port'));









