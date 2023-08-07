const express = require('express')
const {mountpath} = require("express/lib/application");


const app = express();
const admin = express();


app.get('/', (req, res) => {
    res.send("welcome to application home")
})

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath)
    res.send("welcome to admin dashboard")
})

app.use('/admin',admin)
app.listen(3000, () => {
    console.log('listening on port 3000')
})