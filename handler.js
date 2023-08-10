const handler=(req,res)=>{

    if (req.accepts('html')){
        res.render();
    }else{
        res.json({ user: 'geek' })
    }
}

module.exports=handler;