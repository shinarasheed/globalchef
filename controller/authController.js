const User = require('../models/userModel')
const Jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res)=>{


    
    try {

        if(req.body.password === req.body.name){
            return res.status(401).json({msg: 'you can not use your name as password'})
            
        }
       
        const newUser = await User.create({
            name:req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
        });

        
        const token = Jwt.sign({id: newUser._id}, process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        
        res.status(201).json({
            status:'success',
            token,
            data:{
                user: newUser
            }
        })


    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message
          });
    }
}



exports.login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        // 1, if email and password exist
        if(!email || !password){
            return res.status(400).json({ msg: 'Please input password and email' });
        }
        //2 check if user exist and password is correct 
        const user =await User.findOne({email}).select('+password')

        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({ msg: 'incorrect email or password' });
        }


        //3  return jwt
        const token  = Jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
        res.status(200).json({
            status: 'success',
            token
        })


    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message
          });
    }
}

// protect route middleware
exports.protect = async (req, res, next)=>{
    // 1, Get the token and check if it there 
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }else{
        return res.status(401).json({msg: 'No token, authorization denied'})
    }

    try {
        // verify Token
        const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
        // check if user exist
        const currentUser = await User.findById(decoded.id)
        if(!currentUser){
            return res.status(401).json({msg: 'The user with tis token no longer exist'})
        }
        // check if user changed password after token was issued
        if(currentUser.changedPasswordAfter(decoded.iat)){
            return res.status(401).json({
                msg: 'User recently changed paswword. Please login again'
              });
        }

        req.user = currentUser
        next()
    } catch (err) {
        res.status(401).json({ msg: ` Token Error (${err.message}) ` });
    }

}

exports.restrictTo =(...roles) =>{
    // roles is an array
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({ msg: ` You do not have permission to perfrom this action ` });
        }

        next()
    }
}


