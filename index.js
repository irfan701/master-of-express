const express=require('express')
const app=express();

const adminRouter=express.Router()

adminRouter.get('/dashboard',(req,res)=>{
    console.log(req.baseUrl)         // /admin
    console.log(req.originalUrl)    //  /admin/dashboard
    console.log(req.path)    //  /dashboard
    console.log(req.hostname)    //  localhost
    console.log(req.protocol)    //  http
    console.log(req.ip)    //  ::1
    console.log(req.method)    //  GET

    res.send('Admin Dashboard')

})
app.use('/admin',adminRouter)
//  http://localhost:3000/user/2?filter=shirt

app.get('/user/:id',(req,res)=>{
    console.log(req.baseUrl)
    console.log(req.originalUrl)   // /user/2?filter=shirt
    console.log(req.path)   // /user/2 [query string will not come]

    console.log(req.hostname)    //  localhost
    console.log(req.protocol)    //  http
    console.log(req.ip)    //  ::1
    console.log(req.method)    //  GET
    res.send('This is home page')
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})