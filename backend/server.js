const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./models').User;
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoStore = require('connect-mongo')(session);

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);


app.use(session({
  secret: 'keyboard cat',
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// passport strategy
passport.use(new LocalStrategy(function(username, password, done) {
  // Find the user with the given username
  User.findOne({ username: username }, function (err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    if (err) {
      console.log(err);
      return done(err);
    }
    // if no user present, auth failed
    if (!user) {
      console.log(user);
      return done(null, false, { message: 'Incorrect username.' });
    }
    // if passwords do not match, auth failed
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    // auth has has succeeded
    return done(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());





app.use(bodyParser.json());

app.post('/register', (req, res) => {
  console.log("make user", req.body);

  const newUser = new User(req.body);

  newUser.save((err, result) => {
    if(err){
      res.json( { success: false, error: err } );
    } else {
      res.json( { success: true });
    }
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true });
});

app.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});
