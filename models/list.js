const mongoose=require('mongoose')

const listShema=new mongoose.Schema({
    descr:{
        type:String,
        required:[this,'Please add a description']
    },
    category:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        required: true
    }
});
const List=mongoose.model('List',listShema);

module.exports=List;