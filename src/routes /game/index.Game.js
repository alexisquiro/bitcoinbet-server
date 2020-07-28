const{Router}=require('express');
const router =Router();
const {createGame,getGames}=require ('../../controller/game/game');


//routes
router.get('/api/Game',getGames);
router.post('/api/Game',createGame);


module.exports=router; 