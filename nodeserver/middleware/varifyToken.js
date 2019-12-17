const jwt = require('jsonwebtoken');

module.exports={
    // varifyToken:(req,res,next)=>{
    //     if(!req.headers.authorization){
    //         return res.send({success:false,message:'Unauthorized'})
    //     }
    //     let token = req.headers.authorization.split(' ')[1];
    //     if(token==null){
    //         return res.send({success:false,message:'Unauthorized'})
    //     }
    //     let payload = jwt.verify(token,'mysecretkey');
    //     if(!payload){
    //         return res.send({success:false,message:'Unauthorized'})
    //     }
    //     next();
    // }

    verifyToken:(req,res,next)=>{
        if(!req.headers.authorization){
            return res.status(401).send('Unauthorized Request')
        }
        let token = req.headers.authorization.split(' ')[1];
        if(token==='null'){
            return res.status(401).send('Unauthorized Request')
        }
        jwt.verify(token,'mysecretkey',(err,decode)=>{
            if(err){
                return res.status(401).send('Unauthorized Request')
            }else{
                next();
            }
        });
    }
}