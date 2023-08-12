const express = require('express')
const cookieParser=require('cookie-parser')
const adminRouter=express.Router()

const app = express();

app.use(cookieParser())  //3rd party middleware in application level
app.use(express.json())  // built-in middleware


const logger=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} -${req.originalUrl} -${req.protocol} - ${req.hostname} - ${req.ip}` )
    //next()
    throw new Error("This is an error")
}
adminRouter.use(logger)

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