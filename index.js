const express=require('express')
const app=express();

app.use(express.text())  //which function will be used,it's called [Content-Type:text/plain]

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.post('/',(req,res)=>{

    console.log(req.body)
    res.send('This is home page with post request')
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})