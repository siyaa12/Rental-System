var express = require('express')
// var jwt = require('jsonwebtoken');
var router = express.Router();
// const JWT_SECRET = 'sandeep brand';
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
router.post('/richsaw',(req,res)=>{
    var email_id = req.body.email_id;
    var sql = "SELECT * FROM bookrichsaw WHERE email_id = '"+ email_id +"'";
    connection.query(sql, (error,result)=>{
      if(error)
      console.log(error);
      else{
        console.log(result);
        return res.json({result});
      }
    })
})
router.post('/cycle',(req,res)=>{
  var email_id = req.body.email_id;
  var sql = "SELECT * FROM bookcycle WHERE email_id = '"+ email_id +"'";
  connection.query(sql, (error,result)=>{
    if(error)
    console.log(error);
    else{
      console.log(result);
      return res.json({result});
    }
  })
})
module.exports = router