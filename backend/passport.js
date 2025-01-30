var LocalStrategy = require('passport-local');

// const db = require('db/database');

module.exports = function (passport){
  passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM employee WHERE login = $1', [ username ], function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }

      crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, user);
      });
    });
  }));

  passport.serializeUser((user, done) => {
      done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
      const user = users.find(u => u.id === id);
      done(null, user);
    });
}