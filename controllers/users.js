var mongoose = require('mongoose');
var User = mongoose.model('User');

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