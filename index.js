const express=require('express')
const app=express();

app.use(express.json())  //which function will be used,it's called [Content-Type:application/json]

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.post('/',(req,res)=>{
    console.log(typeof req.body) //[sending json data and receiving as an object with json]
    console.log(req.body.name)
    res.send('This is home page with post request')
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})