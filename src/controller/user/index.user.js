
const pool=require('../../database/database.js');
const uuid=require('uuid');

const getUsers=async  (req,res)=>{
    const response= await pool.query('SELECT * FROM users');
        res.json(response.rows);
       
        

 };

const createUser=async(req,res)=>{
     const {name,email,password }=req.body;                        
      const response= await pool.query("INSERT INTO users VALUES ($1,$2,$3,$4,$5);",[email,uuid(),name,password,'0']);                     
      console.log();   
      res.send(response.rows);                    
                               
}


const updateUser=async(req,res)=>{
    const {name,email}=req.body;  
    const id=req.params.id;
const response=await pool.query("UPDATE users SET email = $1, name = $2, WHERE id=$3",[email,name,id]);                           
}



module.exports={
    getUsers,
    createUser,
    updateUser
}