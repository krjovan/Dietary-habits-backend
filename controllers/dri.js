var mongoose = require('mongoose');
var Dri = mongoose.model('Dri');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getAll = function(req, res) {
	Dri.find({})
	.sort({ _id: -1 })
	.exec(function (err, doc) {
		console.log(doc);
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
};

module.exports.getUserActiveDri = function(req, res) {
	var id = mongoose.Types.ObjectId(req.params.id);
	Dri.aggregate([
		{   
			$match: {
				user_id: id,
				active: true
			}
		}
	]).exec( (err, list) => {
        if (err) throw err;
		res.status(200);
		res.json(list);
    }); 
};

module.exports.addDri = function(req, res) {
	var dri = new Dri(req.body);
	var id = mongoose.Types.ObjectId(req.body.user_id);
	
	Dri.update({"user_id": id}, {"$set": {"active": false}}, {"multi": true}, 
		(err, writeResult) => {
			dri.save(function(err) {
				if(err) {
					console.log(err);
					res.status(400);
					res.send(err);
				}
				else {
					res.status(200);
					res.json({
						message:'Successfully created DRI!'
					});
				}
			});
		}
	);
	
	/*Dri.update({"user_id": id}, {"$set":{"active": "false"}});
	dri.save(function(err) {
        if(err) {
            console.log(err);
            res.status(400);
            res.send(err);
        }
        else {
            res.status(200);
            res.json({
                message:'Successfully created DRI!'
            });
        }
    });*/
};

module.exports.updateDri = function(req, res) {
	Dri.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
    .then(function (success) {
      res.json();
    })
    .catch(function (error) {
        res.status(404).send(err);
    });
};

module.exports.deleteDri = function(req, res) {
  Dri.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};