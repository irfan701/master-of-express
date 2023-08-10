const express=require('express')
const app=express();
app.use(express.json())

app.get('/user',(req,res)=>{

    console.log(req.secure)
    res.send("http://localhost:3000/user/2?filter=shirt")

})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})