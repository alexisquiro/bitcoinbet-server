const pool=require('../../database/database.js');
const uuid=require('uuid');

const getBetGames=async  (req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT * FROM betGame');
        if(response.rows){
      return res.json(response.rows);
    }
       else{
        res.error();

     }   

 };

 const createBetGame =async(req,res)=>{
    const {idBet,idGame}=req.body;                        
     const response= await pool.query("INSERT INTO betGame VALUES ($1,$2);",[idBet,idGame]);                     
      if(response.rows){
      return res.json(response.rows);
    }
     else{
        res.error();

     }                  
                              
}

 module.exports={
    getBetGames,
   createBetGame,
    }
  