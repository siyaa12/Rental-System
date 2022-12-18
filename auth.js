var express = require('express')
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var router = express.Router();
const JWT_SECRET = 'sandeep brand';
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '20bcs195'
});

connection.connect(function (err) {
  if (err) {
    console.log('error connecting: ');
    return;
  }

  console.log('connected with database successfully');
});

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route

/// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);

  try {
    let success = false;
    var name = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;
    var mobile_number = req.body.mobile_number;
    // if (password != confirmpassword) {
    //   // return window.alert("password and confirmpassword are not macthing");
    // }
    var sql = "SELECT * FROM user  WHERE email_id = '" + email + "'";
    connection.query(sql, (error, result) => {
      if (error)
        console.log(error);
      else {
        if (result.length === 1) {
          console.log("user with this email is already exist");
          // return res.json({success, "error" : "user with this email is already exist"});
          res.json({success:false});

        }
        else if (result.length === 0) {
          console.log("user does not exist");
          var sql1 = "INSERT INTO user VALUES('" + name + "','" + email + "','" + password + "','" + mobile_number + "')";
          // var sql = "INSERT INTO USER VALUES('sandeep','sandeep','sandeepq')";

          connection.query(sql1, (error) => {
            if (error)
              return res.json(success,error);
            else {
              success = true;
              console.log("rows inserted");
              const data = {
                user: {
                  email_id: email
                }
              }
    
              const authtoken = jwt.sign(data, JWT_SECRET);
    
    
              // res.json(user)
              res.json({ success, authtoken })
    
            }
          });
         
        }

      }
    })
     // const salt = await bcrypt.genSalt(10);
          // const secPass = await bcrypt.hash(req.body.password, salt);
          // password = secPass;

         

         




  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  
  try {
    var sql = "SELECT * FROM USER  WHERE email_id = '" + email + "'  &&  password = '" + password + "'";
    // var sql = "SELECT EXISTS (SELECT email FROM USER  WHERE user.email = '"+email+"' AND user.password  = '"+password+"')";
    
    connection.query(sql, (error, result) => {
      if (error)
        console.log(error);
      else {
        console.log(result);
        if (result.length === 0) {
          success = false
          return res.status(400).json({ error: "Please try to login with correct credentials" });

        }

        else {
          console.log("login successfully");
          // storedpassword = result[0].password;
          // console.log(result[0].password);
          const data = {
            user: {
              email_id: email
            }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
          success = true;
          let username = result[0].username;
          res.json({ success, authtoken, result })
        }
        // console.log(result);
      }
    });


    //  const passwordCompare = await bcrypt.compare(password, storedpassword);
    // if (!passwordCompare) {
    //   success = false
    //   return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    // }
    // console.log("suakshiahdihd");



  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


module.exports = router