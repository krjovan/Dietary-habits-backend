var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');
var nodemailer = require('nodemailer');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getAll = function(req, res) {
  User.find()
	.sort({ _id: -1 })
	.exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
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

module.exports.updateUserByAdmin = function(req, res) {
	User.findOneAndUpdate({_id: req.params.id},{
		$set:{
		  name:req.body.name,
		  email:req.body.email,
		  role:req.body.role
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

function makeid(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

module.exports.resetPassword = function(req, res) {
	var password = makeid(10);
	User.findOneAndUpdate({_id: req.body._id},{
			$set:{
			  hash: crypto.pbkdf2Sync(password, req.body.salt, 1000, 64, 'sha512').toString('hex')
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
	let transport = nodemailer.createTransport({
		host: 'smtp.mailtrap.io',
		port: 2525,
		auth: {
		   user: '02231501925661',
		   pass: '61cbb1dce65639'
		}
	});
	var mailOptions = {
		from: 'no-reply@e-residency.com', // Sender address
		to: req.body.email,         // List of recipients
		subject: 'Reset password', // Subject line
		text: password // Plain text body
	};

	transport.sendMail(mailOptions, function(err, info) {
		if (err) {
		  console.log(err)
		} else {
		  console.log(info);
		  res.status(200);
		  res.json({
			"message" : "Password reset successfully!"
		  });
		}
	});
}

module.exports.getUsersByPagination = function(req, res) {
	const pageOptions = {
		page: parseInt(req.query.page, 10) || 0,
		limit: parseInt(req.query.limit, 10) || 10
	}

	User.find()
	.sort({ _id: -1 })
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
}