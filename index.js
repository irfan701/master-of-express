const express = require('express')
const router = require('./router')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/admin',router)

const errorMiddleware=(err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send('There was a server side error')
}

router.use(errorMiddleware)
const PORT=process.env.PORT||3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}}`)
})