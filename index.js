const express=require('express')
const app=express();
app.use(express.json())

app.get('/user/:id',(req,res)=>{

    console.log(req.params)   // { id: '2' } // [query string/parameter will not come]
    console.log(req.query)   // { filter: 'shirt' } // [only query string/parameter come]
    res.send("http://localhost:3000/user/2?filter=shirt")

})

app.post('/user',(req,res)=>{

    console.log(req.body)   // { name: 'irfan' }
    res.send("http://localhost:3000/user")
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})