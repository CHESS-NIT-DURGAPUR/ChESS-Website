const { Alumni } = require('../models/alumni');

let auth = (req,res,next) => {
    let token = req.cookies.w_auth;

    Alumni.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error: true
        });

        req.token = token;
        req.user = user;
        next();
    })

}


module.exports = { auth }