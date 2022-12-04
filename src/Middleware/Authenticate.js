const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const credentials = require("../config/config")
const User = require("../models/user")


passport.serializeUser((user,cb)=>{
    cb(null,user.id)
})

passport.deserializeUser((id,cb)=>{
    User.findById(id).then((user)=>{
        cb(null,user)
    })
})


passport.use(new GoogleStrategy({
    clientID: credentials.credentials.Client_Id,
    clientSecret: credentials.credentials.secret_key,
    callbackURL: credentials.credentials.cb_url
  }, (accessToken, refreshToken, profile, cb) =>{
 
  User.findOne({google_id:profile.id})
  .then((user)=>{
    if(user) {
        console.log("user logged in")
        cb(null,user)
    }

    else{

        new User({
            username:profile.displayName,
            google_id:profile.id
        }).save().then((newUser)=>{
            console.log("new user is:"+newUser)
            cb(null,newUser)
        })

    }
    console.log(accessToken)
  })
    
   

  }
 
))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const authCheck = (req,res,next) =>{

   // console.log(req.user)
    if(!req.user){
        res.status(401).send({status:false,msg:"Can't authenticatie user..login first !!"})
    }

    else {
        next()
    }
}


module.exports = {authCheck}

