var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;
var fruitSchema = mongoose.Schema({
		name: {
			type: String,
			require: true,
			trim: true,
			unique: true
		},
		color: {
			type: String,
			require: true
		},
		quantity: Number,
		ripe: Boolean
	}),
	Fruit = mongoose.model('fruit', fruitSchema);

db.on('error', function (msg){
	console.log(msg);
});
db.once('open', function (){
	Fruit.find({}, function (err, fruits){
		if (err){
			console.log(err);
		} else {
			fruits.forEach(function (fruit){
				console.log(fruit.name);
			});
		}
	});
});