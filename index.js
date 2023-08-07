const express = require('express')
const handle=require('./handle')
const app = express();

app.locals.title = "My App"

//Method 1
app.get('/', (req, res) => {
    console.log(app.locals.title)
    res.send("This is Home page")
})

//Method 2
app.get('/handle',handle)

app.listen(3000, () => {
    console.log('listening on port 3000')
})