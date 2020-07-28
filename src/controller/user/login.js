const pool=require('../../database/database.js');


const logIn= async (req,res)=>{

    const {name,email,password}=req.body;
    const response= await pool.query('SELECT * FROM users WHERE email=$1 AND name=$2 AND password=$3',[email,name,password]);
    if(response.rows){
    console.log(response.rows); 
     return res.json(response.rows);
     }else 
     res.error();
 };



module.exports={
    logIn
   
}