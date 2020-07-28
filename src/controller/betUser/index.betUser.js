const pool=require('../../database/database.js');
const uuid=require('uuid');


const createBetUser=async(req,res)=>{
    const {idUs,idBet,wallet,bet}=req.body;                        
     const response= await pool.query("INSERT INTO betUser VALUES ($1,$2,$3,$4);",[idUs,idBet,wallet,bet]);                     
      if(response.rows){
      return res.json(response.rows);
    }
     else{
        res.error();

     }                  
                              
}
const getBetUsers=async  (req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT * FROM betUser where idUser=$1 ', [id]);
        if(response.rows){
      return res.json(response.rows);
    }
       else{
        res.error();

     }   

 };

 module.exports={
  createBetUser,
  getBetUsers,
  }

