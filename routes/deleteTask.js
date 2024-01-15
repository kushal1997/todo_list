const express=require('express')

const router=express.Router();

const deleteListSchema=require('../controllers/delete_task_controller')

console.log("delte router touched")

router.post('/delete-tasks',deleteListSchema.delete)

module.exports=router;