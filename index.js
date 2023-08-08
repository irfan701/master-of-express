const express=require('express')
const app=express();

const adminRouter=express.Router()

adminRouter.get('/dashboard',(req,res)=>{
    console.log(req.baseUrl)
    res.send('Admin Dashboard')
})
app.use('/admin',adminRouter)

app.get('/user/:id',(req,res)=>{
    console.log(req.baseUrl)
    res.send('This is home page')
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})