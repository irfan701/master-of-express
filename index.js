const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(a)
})

const errorMiddleware=(err,req,res,next)=>{
    console.log(err.message)
    if (err.message){
        res.status(500).send(err.message)
    }else{
        res.status(500).send('There was a server side error')
    }

}

app.use(errorMiddleware)
const PORT=process.env.PORT||3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}}`)
})