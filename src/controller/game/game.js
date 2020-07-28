const pool=require('../../database/database.js');
const uuid=require('uuid');

const getGames=async  (req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT * FROM game');
        if(response.rows){
      return res.json(response.rows);
    }
       else{
        res.error();

     }   

 };

 const createGame =async(req,res)=>{
    const {team1,team2,result,porcent1,porcent2}=req.body;                        
     const response= await pool.query("INSERT INTO game VALUES ($1,$2,$3,$4,$5,$6);",[team1,team2,uuid(),'0',porcent1,porcent2]);                     
      if(response.rows){
      return res.json(response.rows);
    }
     else{
        res.error();

     }                  
                              
}

 module.exports={
    getGames,
    createGame,
    }
  