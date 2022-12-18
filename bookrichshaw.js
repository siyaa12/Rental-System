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
router.post('/richshaw',(req,res)=>{
   
    // var vechile_id = 1;
    var time_of_booking = req.body.time_of_booking;
    var date_of_booking = req.body.date_of_booking;
    var startingpoint = req.body.startingpoint;
    var destination = req.body.destination;
    var distance = req.body.distance;
    var rent = req.body.rent;
    var email_id = req.body.email_id;

    var sql  = "INSERT INTO bookrichsaw(time_of_booking,date_of_booking,starting_point,destination,distance,rent,email_id) VALUES('" + time_of_booking + "','" + date_of_booking + "','" + startingpoint + "','" + destination + "','" + distance + "','" + rent + "','" + email_id + "')";
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