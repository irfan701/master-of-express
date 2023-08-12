const express = require('express')
const app = express();
const adminRouter=express.Router()



const logger=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} -${req.originalUrl} -${req.protocol} - ${req.hostname} - ${req.ip}` )
    next()
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


const PORT=process.env.PORT||3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}}`)
})