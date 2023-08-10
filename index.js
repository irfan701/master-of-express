const express=require('express')
const app=express();
const handler=require('./handler')

app.get('/user',handler)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})