const express = require('express')
const app = express();

app.set('view engine', 'ejs')
app.get('/about', (req, res) => {
    console.log(res.headersSent)
    res.render('pages/about', {name: "Bangladesh"})
    console.log(res.headersSent)
})

//kono akta module jodi kono akta place tekey response patay de.
// .r tokon check korar jonno headerssent use kortey pare

app.listen(3000,()=>{
    console.log('listening on port 3000')
})