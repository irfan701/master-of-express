const express = require('express')
const app = express();


app.get('/', (req, res) => {

    res.cookie('name',"Irfan",{})
    res.send('cookie set')
})

app.get('/dubai', (req, res) => {
    res.send('Hello World')
})
app.get('/bangladesh', (req, res) => {
   res.redirect('/dubai')
    res.end()
})

app.get('/setData', (req, res) => {
    res.set('user',"irfanhossain701@gmail.com") //set response headers
    console.log(res.get('user'))
    res.end()
})


app.listen(3000, () => {
    console.log('listening on port 3000')
})