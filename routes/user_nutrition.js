var express = require('express');
var router = express.Router();
const User_nutrition = require('../models/user_nutrition');
var ctrlUser_nutrition = require('../controllers/user_nutrition');

//retreving data from database
router.get('/all', ctrlUser_nutrition.getAll);
router.post('/add', ctrlUser_nutrition.addUser_nutrition);
router.put('/update/:id', ctrlUser_nutrition.updateUser_nutrition);
router.delete('/delete/:id', ctrlUser_nutrition.deleteUser_nutrition);

module.exports = router;