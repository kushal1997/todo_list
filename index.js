const express=require('express');
const bodyParser=require('body-parser')
const port = 8000;
const app=express();
app.use(bodyParser.json());
const db=require('./config/mongoose')

app.use(express.static('./assets'))

app.use(express.urlencoded({ extended: true }));
app.use('/',require('./routes'))

app.set('view engine','ejs')
app.set('views','./views')

app.listen(port,(err)=>{
    if(err){
        console.log(`Error is ${err}`)
    }
    console.log(`Server is running on port: ${port}`)
})