const{Router}=require('express');
const router =Router();
const {getBetUsers,createBetUser}=require ('../../controller/betUser/index.betUser.js');


//routes
router.get('/api/users',getBetUsers);
router.post('/api/users',createBetUser);


module.exports=router; 