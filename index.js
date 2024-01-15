const express=require('express');
const port = 8000;
const app=express();

app.use('/',require('./routes'))

app.set('view engine','ejs')
app.set('views','./views')

app.listen(port,(err)=>{
    if(err){
        console.log(`Error is ${err}`)
    }
    console.log(`Server is running on port: ${port}`)
})