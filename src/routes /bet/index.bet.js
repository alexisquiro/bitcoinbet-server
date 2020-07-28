const{Router}=require('express');
const router =Router();
const {createBet,getBet}=require ('../../controller/bet/bet');


//routes
router.get('/api/bet',getBet);
router.post('/api/bet/:idGame/:idUser/:wallet',createBet);
module.exports=router; 