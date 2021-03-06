const Nutrition = mongoose.model('Nutrition');
const isValidObjectId = require('../config/is-object-id');

module.exports.getAll = (req, res) => {
    if (req.query.search) {
        let nameFilter = req.query.search.split(" ").map((s) => {
            return { name: { $regex: s, $options: "i" } };
        });
        Nutrition.find({ $and: nameFilter })
            .sort({ _id: -1 })
            .exec((err, doc) => {
                if (err)
                    return res.status(500).json(err);
                res.status(200).json(doc);
            });
    } else {
        Nutrition.find()
            .sort({ _id: -1 })
            .exec((err, doc) => {
                if (err)
                    return res.status(500).json(err);
                res.status(200).json(doc);
            });
    }
};

module.exports.getNutritionsNameAndId = (req, res) => {
    if (req.query.search) {
        let nameFilter = req.query.search.split(" ").map((s) => {
            return { name: { $regex: s, $options: "i" } };
        });
        Nutrition.find({ $and: nameFilter }, 'name')
            .sort({ _id: -1 })
            .exec((err, doc) => {
                if (err)
                    return res.status(500).json(err);
                res.status(200).json(doc);
            });
    } else {
        Nutrition.find({}, 'name')
            .sort({ _id: -1 })
            .exec((err, doc) => {
                if (err)
                    return res.status(500).json(err);
                res.status(200).json(doc);
            });
    }
};

module.exports.addNutrition = (req, res) => {
    const nutrition = new Nutrition(req.body);
    nutrition.save((err) => {
        if (err)
            res.status(400).json(err);
        else
            res.status(200).json({ message: req.body.name + ' successfully created!' });
    });
};

module.exports.updateNutrition = (req, res) => {
    if (!isValidObjectId(req.params.id))
        return res.status(400).json({ message: "Invalid nutrition id format" })
    Nutrition.update({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
        .then(() => {
            res.status(200).json();
        })
        .catch((err) => {
            res.status(404).send(err);
        });
};

module.exports.deleteNutrition = (req, res) => {
    if (!isValidObjectId(req.params.id))
        return res.status(400).json({ message: "Invalid nutrition id format" })
    Nutrition.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
};


module.exports.getNutritionsByPagination = (req, res) => {
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 10
    }
    Nutrition.find()
        .sort({ _id: -1 })
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .exec((err, doc) => {
            if (err)
                return res.status(500).json(err);
            res.status(200).json(doc);
        });
}

module.exports.numberOfNutritions = (req, res) => {
    Nutrition.countDocuments()
        .exec((err, doc) => {
            if (err)
                return res.status(500).json(err);
            res.status(200).json({ "numberOfNutritions": doc });
        });
}