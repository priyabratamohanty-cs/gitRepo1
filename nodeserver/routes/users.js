const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const dbDetails = require('../config/db');
const Users = require('../models/Users');
const tokenMiddleware = require('../middleware/varifyToken');



mongoose.connect(
    dbDetails.dbUrl,
    { useNewUrlParser: true,useUnifiedTopology: true },
(err)=>{
    if(err) throw err;
    else{
        console.log('Mongodb connected successfully');
    }
})

Router.post('/register',(req,res)=>{
    let newuserRecord = req.body;
    let user = new Users(newuserRecord);
    user.save((err,registeredUser)=>{
        if(err){
            res.send({success:false,message:'Error Ocuured in backend while registering',error:err});
        }else{
            let payload = {userid : registeredUser._id };
            let token = jwt.sign(payload,'mysecretkey');

            res.send({
                success:true,
                message:'User Created Successfuly',
                token:token
            })
        }
    })
});

Router.post('/login',(req,res)=>{
    let userData = req.body;
    let findUser = Users.findOne({userID:userData.userID}).lean();
    findUser.exec((err,userDetails)=>{
        if(err){
            res.send({success:false,message:'Error occured While retriving user in backend',error:err});
        }else{
            if(!userDetails){
                res.send({success:false,message:'No User Found'})
            }else if(userData.password!=userDetails.password){
                res.send({success:false,message:'Credential Mismatched'})
            }else{
                delete userDetails.password;
                let payload = {userid : userDetails._id };
                let token = jwt.sign(payload,'mysecretkey');
                res.send({success:true,message:"user found",token:token});
            }
        }
    })
})

Router.get('/events',tokenMiddleware.verifyToken,(req,res)=>{
    let myevents = [
        {
            _id:"1",
            name:"name1",
            desc:"desc1",
            date:'Mon Dec 16 2019 18:12:16 GMT+0530'
        },
        {
            _id:"2",
            name:"name2",
            desc:"desc2",
            date:'Mon Dec 16 2019 18:12:16 GMT+0530'
        },
        {
            _id:"3",
            name:"name3",
            desc:"desc3",
            date:'Mon Dec 16 2019 18:12:16 GMT+0530'
        },
    ];
    res.json(myevents);
})


Router.get('/special',tokenMiddleware.verifyToken,(req,res)=>{
    let myevents = [
        {
            _id:"1",
            name:"spname1",
            desc:"desc1",
            date:'Mon Dec 16 2019 18:12:16 GMT+0530'
        },
        {
            _id:"2",
            name:"spname2",
            desc:"desc2",
            date:'Mon Dec 16 2019 18:12:16 GMT+0530'
        },
        {
            _id:"3",
            name:"spname3",
            desc:"desc3",
            date:'Mon Dec 16 2019 18:12:16 GMT+0530'
        },
    ];
    res.json(myevents);
})

module.exports = Router;