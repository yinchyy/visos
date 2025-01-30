var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')
var passport = require('passport')
const db = require('../db/database');

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
    successRedirect: '/dashboard',
    failureRedirect: '/',
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
    if(req.isAuthenticated()){

    const result = await db.one('SELECT * FROM employee');
    console.log(result)
    res.json(result);
    }
    else{
      res.redirect('../')
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
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
