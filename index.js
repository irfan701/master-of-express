const express = require('express')
const app = express();


const logger=(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} -${req.originalUrl} -${req.protocol} - ${req.hostname} - ${req.ip}` )
    res.end()
}
app.use(logger)
app.get('/', (req, res) => {

    res.send('Hello World')
})


const PORT=process.env.PORT||3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}}`)
})