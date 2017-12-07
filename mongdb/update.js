var mongodb = require('mongodb'),
	dbSever = new mongodb.Server('localhost', 27017, {
		auto_reconnect: true
	}),
	db = new mongodb.Db('mydb', dbSever, {w: 1});

db.open(function (err, conn){
	db.collection('newCollection', function (err, collection){
		collection.findAndModify({
			num: 4
		}, ['_id', 'asc'], {
			num: 25
		}, {
			safe: true
		}, function (err, result){
			if (err){
				console.log(err);
			} else {
				console.log(result);
			}
			db.close();
		});
		collection.find({num: {$gt: 1}}, {sort: ['num']}).toArray(function (err, result){
			console.log(result);
			db.close();
		});
	});
});