var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
const User = require('../models/users');
const multer = require('multer');
const path=require('path');

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload',
  algorithms: ['HS256']
});


var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


//retreving data from database
router.get('/all',(req, res, next)=>{
	User.find(function(err, users){
		if(err){
			res.json(err);
		}
		else{
			res.json(users);
		}
	});
});

router.delete('/delete/:id', (req, res, next)=>{
    User.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
  });

module.exports = router;