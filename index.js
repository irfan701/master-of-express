const express = require('express')
const app = express();

app.get('/', (req, res,next) => {
    for (let i=0;i<10;i++){
        if (i===5){
            next('there was an error')
        }else{
            res.write('a')
        }
    }
   // res.send(a)
    res.end()
})

app.use((req,res,next)=>{
    //res.status(404).send('Requested url was not found !')
    next('Requested url was not found !') //next er moddey msg means; error soho porer middleware e patano
})

const errorMiddleware=(err,req,res,next)=>{
   // console.log(err.message)
    if (res.headersSent){
        next('There was a problem !')
    }else {
        if (err.message) {
            res.status(500).send(err.message)
        } else {
            res.status(500).send('There was a server side error')
        }
    }
}

app.use(errorMiddleware)

//invisible default error handler
/*
app.use((req,res,next)=>{
  //handle error here
})

 */


const PORT=process.env.PORT||3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}}`)
})