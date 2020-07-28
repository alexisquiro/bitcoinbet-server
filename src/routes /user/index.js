const{Router}=require('express');
const router =Router();
const {getUsers, createUser,updateUser}=require('../../controller/user/index.user.js');
const {logIn}=require('../../controller/user/login.js')


//user 
router.get('/api/users/',getUsers);
router.post('/api/users/',createUser);
router.put('/api/users/:id',updateUser);

//Login 
router.post('/api/logIn/',logIn);



module.exports=router; 