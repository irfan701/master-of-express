const handler=(req,res)=>{
    //console.log(req.secure) //false
    console.log(req.app.get('view engine'))  //req er  moddey app er object/refernce bind kora asey ;tai externally amra bahir tekey app ke use kortey parvo
    res.send("http://localhost:3000/user/2?filter=shirt")

}

module.exports=handler;