const express = require('express')
const app = express();

app.set('view engine', 'ejs')
app.get('/about', (req, res) => {
    console.log(res.headersSent)
    res.render('pages/about', {name: "Bangladesh"})
    console.log(res.headersSent)
})

app.get('/', (req, res) => {
    //  res.send("With Data") //with data and also finish response
    //  res.end()//without data to finish response
    //  res.sendStatus(200)
    //  res.json({name:'Bangladesh'}) //json stringify and set application/json in response header
    res.status(200).send('execution finished')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})