var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getAll = function(req, res) {
  User.find(function(err, users){
        if(err) {
            res.json(err);
        }
        else {
            res.json(users);
        }
    });
};

module.exports.addUser = function(req, res) {
	if(!req.body.name || !req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  User.findOne({email: req.body.email}, function(err, user){
    if(err) {
      console.log(err);
    }
    if(user) {
      sendJSONresponse(res, 400, {
        "message": "Email taken"
      });
      return;
    } else {
      var user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.setPassword(req.body.password);
	  res.status(200);
	  res.json({
	    "message" : "User created successfully"
	  });
      user.save();
    }
  });
};

module.exports.updateUser = function(req, res) {
	if(req.body.newPassword !== '') {
		User.findOneAndUpdate({_id: req.params.id},{
			$set:{
			  hash: crypto.pbkdf2Sync(req.body.newPassword, req.body.salt, 1000, 64, 'sha512').toString('hex')
			}
		},
		function(err,result){
			if(err) {
				console.log(err);
			}
			else {
				console.log(result);
			}
		});
	}
	User.findOneAndUpdate({_id: req.params.id},{
		$set:{
			name:req.body.name,
			email:req.body.email
		}
	},
	function(err,result){
		if(err) {
			res.json(err);
		}
		else {
			res.json(result);
		}	
	});
};

module.exports.getHash = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ hash: crypto.pbkdf2Sync(req.body.currentPassword, req.body.salt, 1000, 64, 'sha512').toString('hex')  }));
};

module.exports.deleteUser = function(req, res) {
  User.remove({_id: req.params.id}, function(err, result){
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
};