var mongoose = require('mongoose');
var User = mongoose.model('User');
var crypto = require('crypto');

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