const pool=require('../../database/database.js');
const uuid=require('uuid');
const moment=require('moment');

const getBet=async  (req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT * FROM bet');
        if(response.rows){
      return res.json(response.rows);
    }
       else{
        res.error();

     }   

 };

 const createBet =async(req,res)=>{
    const {winner}=req.body;   
    const idGame=req.params.idGame                        
    const id=uuid()
    const idUser=req.params.idUser
    const wallet=req.params.wallet
    //day=moment(new Date()).format('YYYY-MM-DD') === moment(postgreDate).format('YYYY-MM-DD') ;
    //console.log(day)
     const response= await pool.query("INSERT INTO bet VALUES ($1,$2);",[id,winner]);                     
    const response2= await pool.query('INSERT INTO "betGame" VALUES ($1,$2);',[id,idGame]);    
  const response3= await pool.query('INSERT INTO "betUser" VALUES ($1,$2);',[idUser,id,id, wallet]);    

     console.log("klkl")
     if(response.rows){
      return res.json(response.rows);
    }
     else{
        res.error();
       
     console.log("error")
     }                  
                              
}

 module.exports={
    getBet,
    createBet,
    }
  