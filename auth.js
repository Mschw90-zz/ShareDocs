import express from 'express'
var router = express.Router();
import User from './Models/user';


export default function(passport) {

  router.post('/signup', function(req,res){
    var User1 = new User({
      username: req.body.username,
      password: req.body.password,
    });
    User1.save(function(err){
      if(err){
        console.log('could not save user')
      }
      else {
        res.redirect('/login')
      }
    })
  });

  router.post('/login',  passport.authenticate('local', {
    successRedirect: '/homepage',
    failureRedirect: '/login'
  })
);


router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
})


return router;
}
