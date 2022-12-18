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
router.post('/e-richsaw',(req,res)=>{
    var booking_id = req.body.booking_id;
    var sql = "DELETE FROM bookrichsaw where booking_id = '"+booking_id +"'";
    connection.query(sql, (error,result)=>{
      if(error)
      console.log(error);
      else{
        console.log("deleted succesfully");
        return res.json({result});
      }
    })
})
router.post('/cycle',(req,res)=>{
  var booking_id = req.body.booking_id;
  var sql = "DELETE FROM bookcycle where booking_id = '"+booking_id +"'";
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