var GoogleStrategy = require('passport-google-oauth20').Strategy;
var passport = require('passport')
 
passport.use(new GoogleStrategy({
    clientID: "264891288908-1ntfsoqooipjbqkfjs64k4va7kkcmncp.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost"
  },
  function(accessToken, refreshToken, profile, cb) {
     {
      return cb(null, profile);
    };
  }
));