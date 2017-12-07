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
	Fruit = mongoose.model('fruit', fruitSchema),
	apple = new Fruit({
		name: 'apple',
		color: 'red',
		quantity: 3,
		ripe: true
	}),
	orange = new Fruit({
		name: 'orange',
		color: 'orange',
		quantity: 5,
		ripe: true
	}),
	banana = new Fruit({
		name: 'banana',
		color: 'green',
		quantity: 3,
		ripe: false
	});


db.on('error', function (msg){
	console.log(msg);
});
db.once('open', function (){
	apple.save(function (err, apple){
		if (err){
			console.log(err);
		} else {
			console.log(apple);
		}
	});
	orange.save(function (err, orange){
		if (err){
			console.log(err);
		} else {
			console.log(orange);
		}
	});
	banana.save(function (err, banana){
		if (err){
			console.log(err);
		} else {
			console.log(banana);
		}
	});
});