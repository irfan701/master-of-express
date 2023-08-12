const express = require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send("This is External Router")
})
// router.param('user',(req,res,next,id)=>{
//     req.user=id==='1'?'Admin':"Anonymous"
//     next()
// })
router.get('/:user',(req,res)=>{
    res.send(`Hello ${req.user}`)
})

router.get('/about',(req,res,next)=>{
   // res.send("This is External Router")
   next()
})


module.exports=router
