const{Router}=require('express');
const router =Router();
const {createBetGames,getBetGames}=require ('../../controller/betGame/betGame');


//routes
router.get('api/betGame',getBetGames);
router.post('/api/betGame/',function(req,res){
   createBetGames
});
module.exports=router; 