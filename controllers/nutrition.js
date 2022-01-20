var mongoose = require('mongoose');
var Nutrition = mongoose.model('Nutrition');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getAll = function(req, res) {
	const regex = new RegExp(req.query.search, 'i')
	Nutrition.find({name: {$regex: regex}})
	.sort({ _id: -1 })
	.exec(function (err, doc) {
		console.log(doc);
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
};

module.exports.addNutrition = function(req, res) {
	if(!req.body.name || !req.body.calories || !req.body.total_fat_g) {
		sendJSONresponse(res, 400, {
		  "message": "All fields required"
		});
    return;
	}

  Nutrition.findOne({name: req.body.name}, function(err, nutrition){
    if(err) {
      console.log(err);
    }
    if(nutrition) {
      sendJSONresponse(res, 400, {
        "message": "Name taken"
      });
      return;
    } else {
		Nutrition.insertOne(req.body)
			.then(result => {
				console.log(result);
				res.status(200);
			    res.json({
				  "message" : "Nutrition created successfully"
			    });
			})
		.catch(error => console.error(error))
		/*
      var nutrition = new Nutrition();

      nutrition.country = req.body.country;
      nutrition.city = req.body.city;
	  nutrition.street = req.body.street;
      nutrition.street_number = req.body.street_number;
      nutrition.contact_email = req.body.contact_email;

	  res.status(200);
	  res.json({
	    "message" : "Nutrition created successfully"
	  });
      nutrition.save();*/
    }
  });
};

module.exports.updateNutrition = function(req, res) {
	if(!req.body.name || !req.body.calories || !req.body.total_fat_g) {
		sendJSONresponse(res, 400, {
		  "message": "All fields required"
		});
		return;
	}
	
	Nutrition.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
    .then(function (success) {
      res.json();
    })
    .catch(function (error) {
        res.status(404).send(err);
    });
	/*
	Nutrition.findOneAndUpdate({_id: req.params.id},{
		$set:{
		  country: req.body.country,
		  city: req.body.city,
		  street: req.body.street,
		  street_number: req.body.street_number,
		  contact_email: req.body.contact_email
		}
	},
	function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}	
	});*/
};

module.exports.deleteNutrition = function(req, res) {
  Nutrition.remove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
};


module.exports.getNutritionsByPagination = function(req, res) {
	const pageOptions = {
		page: parseInt(req.query.page, 10) || 0,
		limit: parseInt(req.query.limit, 10) || 10
	}

	Nutrition.find()
	.sort({ _id: -1 })
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
}

module.exports.numberOfNutritions = function(req, res) {
	Nutrition.countDocuments()
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json({"numberOfNutritions":doc});
    });
}