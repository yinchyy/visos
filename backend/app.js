var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
const passport = require('passport');
const PgSession = require("connect-pg-simple")(session);
// const pgp = require('pg-promise')(/* options */)

// const db = pgp('postgres://postgres:password@localhost:5431/postgres')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors')

var app = express();
// const memoryStore = new session.memoryStore();
const db = require('./db/database')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(passport.initialize());
app.use(
  session({
      store: new PgSession({
          pgPromise: db, // Use pg-promise connection
          tableName: "sessions", // PostgreSQL table for storing sessions
      }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
          maxAge: 1000 * 60 * 60 * 24, // 1 day
          secure: false, // Set to true if using HTTPS
          httpOnly: true,
      },
  })
);

require('./passport')(passport);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
