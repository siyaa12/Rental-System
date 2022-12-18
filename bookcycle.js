var express = require('express')
// var jwt = require('jsonwebtoken');
var router = express.Router();
 
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
router.post('/cycle',(req,res)=>{
    // var vechile_id = 1;
    var from_time = req.body.from_time;
    var to_time = req.body.to_time;
    var date_of_booking = req.body.date_of_booking;
    var duration_of_booking = req.body.duration_of_booking;
    var rent = req.body.rent;
    var email_id = req.body.email_id;

    var sql  = "INSERT INTO bookcycle (from_time,to_time,date_of_booking,duration_of_booking,rent,email_id) VALUES('" + from_time + "','" + to_time + "','" + date_of_booking + "','" + duration_of_booking + "','" + rent + "','" + email_id + "')";
    connection.query(sql,(error)=>{
      if(error)
      throw error;
      else
      {
        console.log('data inserted successfully');
        res.json("success data inserted successfully");
      }
      
    })
})
module.exports = router