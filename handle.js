
//another way handling with req

const handle= (req, res) => {
    console.log(req.app.locals.title)
    res.send("This is outside page with request")
}

module.exports=handle