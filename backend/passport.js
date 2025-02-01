var LocalStrategy = require('passport-local');
const {
  createHash,
  pbkdf2Sync
} = require('node:crypto');
const db = require('./db/database');
var bcrypt = require('bcrypt');
const { findEmployeeByLogin } = require('./db/createUser');

module.exports = function(passport){

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (login, done) => {
    try {
			const findUser = await findEmployeeByLogin(login);
      if (!findUser) throw new Error("User Not Found");
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  });

 passport.use(
	new LocalStrategy(
    {
      usernameField:"login",
      passwordField:"password"
    },
    async (login, password, done) => {
		try {
			const findUser = await findEmployeeByLogin(login);
			if (!findUser) return done(null,false, { message: 'Invalid username or password '})
      if (!bcrypt.compareSync(password,findUser.password)) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      return done(null, findUser);
    } catch (err) {
      done(err, null);
		}
	})
);
}
// module.exports = function (passport){
//   passport.use(new LocalStrategy(function verify(login, password, cb) {
//     db.get(`SELECT * FROM employee WHERE login = $1`, [ login ], function(err, user) {
//       console.log(login)
//       if (err) { 
//         console.log(login)
//         return cb(err); }
//       if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }

//       crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//         if (err) { return cb(err); }
//         if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
//           return cb(null, false, { message: 'Incorrect username or password.' });
//         }
//         return cb(null, user);
//       });
//     });
//   }));

//   passport.serializeUser((user, done) => {
//       done(null, user.id);
//   });
//   passport.deserializeUser((id, done) => {
//       const user = users.find(u => u.id === id);
//       done(null, user);
//     });
// }