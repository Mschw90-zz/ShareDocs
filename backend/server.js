const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./models').User;
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoStore = require('connect-mongo')(session);
const Document = require('./models').Document;
const mongoose = require('mongoose');
const server = require('http').Server(app);
const io = require('socket.io')(server);
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

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
  });

  newUser.save((err, result) => {
    if(err){
      res.json( { success: false, error: err } );
    } else {
      res.json( { success: true });
    }
  });
});

app.post('/makeDoc', (req, res) => {
  const newDoc = new Document ({
    content: '',
    title: req.body.DocumentName,
    owner: req.user._id,
    password: req.body.Password,
    sharedWith: [req.user._id]
  });

  newDoc.save((err, result) => {
    if(err){
      res.json( { success: false, error: err } );
    } else {
      res.json( { success: true, doc: result });
    }
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true });
});

app.get('/docPage', (req, res) => {
  Document.find({sharedWith: req.user._id}, (err, docs) => {
    if(err) {
      console.log(err);
      res.json({success: false});
    }  else {
      res.json({success: true, firstName: req.user.firstName, docs: docs});
    }
  });
});

app.get('/editPage/:id', (req, res) => {
  Document.findById(req.params.id, (err, doc) => {
    if(err) {
      console.log(err);
      res.json({success: false});
    }  else {
      res.json({success: true, firstName: req.user.firstName, doc: doc});
    }
  });
});

app.post('/updateDoc/:id', (req, res) => {
  Document.findByIdAndUpdate({ _id: req.params.id }, { $set: { content: req.body.content, title: req.body.title }}, (err, result) => {
    if(err) {
      console.log(err);
      res.json({success: false});
    }  else {
      res.json({success: true, result: result });
    }
  });
});

app.post('/saveById', (req, res) => {
  Document.findByIdAndUpdate({_id: req.body.DocId}, {"$push": {sharedWith: req.user._id}}, (err,result) => {
    if(err) {
      console.log(err);
      res.json({success: false});
    } else {
      res.json({success: true, document: result});
    }
  });
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('change', (data) => {
    socket.broadcast.emit('globalChange', data);
  });
});

server.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!');
});
