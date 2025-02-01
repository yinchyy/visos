var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')
var passport = require('passport')
const db = require('../db/database');
const { findEmployeeByLogin } = require('../db/createUser');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/',async(req,res) => {
  try{
    const sessionCookie = req.cookies.session;
    if(!sessionCookie){
      return res.send("You need to log-in, to access this resource.");
    }
    return res.json("Success");
  }catch(error){
    return res.json({error});
  }
})

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/users/employee',
    // failureRedirect: '/',
    failureFlash: false
  })
);

router.get('/auth',async(req,res) => {
  try{
    return res.json("Success");
  }catch(error){
    return res.json({error});
  }
})

router.get('/employee', async (req, res) => {
  try {
    if(true){
    const result = await findEmployeeByLogin('janeq')
    // const result = await db.one(`SELECT * FROM employee WHERE login = 'janeq'`);
    console.log(result)
    return res.status(200).json(result);
    // return res.status(200).json({success:"true"})
    }
    else{
      res.redirect('../')
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/session", (req, res) => {
  if (req.session.user) {
      res.json({ session: req.session });
  } else {
      res.status(401).json({ message: "No active session" });
  }
});
router.get('/success',async(req,res) => {
  try{
    return res.json("Session successfully set");
  }catch(error){
    return res.json({error});
  }
})

module.exports = router;
