const express = require('express')
const app = express();

app.route('/about/mission')
    .get((req,res)=>{
        res.send("Get Request")
    })
    .post((req,res)=>{
        res.send("Post Request")
    })
    .put((req,res)=>{
        res.send("Put Request")
    })
app.listen(3000, () => {
    console.log('listening on port 3000')
})