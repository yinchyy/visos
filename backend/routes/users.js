var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')
var passport = require('passport')
const db = require('../db/database');
const { findEmployeeByLogin, createEmployee, getAllEmployees } = require('../db/createUser');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/',async(req,res) => {
  try{
    if(!req.isAuthenticated()){
      return res.send(401,"You need to log-in, to access this resource.");
    }
    return res.status(200);
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

router.get('/employees', async (req, res) => {
  try {
    if(req.isAuthenticated()){
    const result = await getAllEmployees()
    return res.json(result);
    }
    else{
      res.redirect('/users')
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/employee/add', async (req, res) => {
  try {
    if(req.isAuthenticated()){
      data = req.body;
      const result = await createEmployee(data.name,data.surname,data.login,data.password,data.pesel);
      return res.status(200).json(result);
    }
    else{
      return res.send(400);
    }
  } catch (err) {
    res.status(500);
  }
});

router.get('/inituser',async(req,res) => {
  try{
    data = {
      name: "Jan",
      surname: "Kowalski",
      login: "jkowalski",
      password: "hashme",
      pesel: "12094175908537"
    }
    const result = await createEmployee(data.name,data.surname,data.login,data.password,data.pesel);
    return result
  }catch(error){
    return res.json({error});
  }
})

router.get("/session", (req, res) => {
  if (req.isAuthenticated()) {
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
