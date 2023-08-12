const express = require('express')
const adminRouter=express.Router()
const app = express();

const loggerWrapper=(options)=>{
    return function(req,res,next){
        if (options.log){
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} -${req.originalUrl} -${req.protocol} - ${req.hostname} - ${req.ip}` )
            next()
        }else{
            throw new Error("Failed to log")
        }
    }
}

adminRouter.use(loggerWrapper({log:false}))

//made a subapp
adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard')
})

app.use('/admin',adminRouter)


app.get('/', (req, res) => {
    res.send('Hello World')
})

const errorMiddleware=(err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send('There was a server side error')
}
adminRouter.use(errorMiddleware)

const PORT=process.env.PORT||3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}}`)
})