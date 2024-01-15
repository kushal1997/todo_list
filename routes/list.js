const express=require('express')

const router=express.Router();

const listController=require('../controllers/list_controller')

console.log('list router is loaded')

router.post('/add-in-list',listController.list)

module.exports=router;