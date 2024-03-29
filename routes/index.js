const express=require('express');

const router = express.Router();

const homeController=require('../controllers/home_controller')

router.get('/',homeController.home)
router.post('/add-in-list',require('./list'))
router.post('/delete-tasks',require('./deleteTask'))

module.exports=router;