const mongoose =require('mongoose')

const url = "mongodb+srv://kushalrao103:u61WuUdnLhDjJK24@cluster0.peevqcr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url)
.then(()=>console.info('Conected to mongo db'))
.catch((err)=>console.log("error: ",err))