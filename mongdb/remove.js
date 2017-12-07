var mongodb = require('mongodb'),
	dbServer = new mongodb.Server('localhost', 27017, {
		auto_reconnect: true
	}),
	db = new mongodb.Db('mydb', dbServer, {w: 1});

db.open(function (err, conn){
	db.collection('newCollection', function (err, collection){
		collection.remove({num: 7}, function (err){
			if (err){
				console.log(err);
			} else {
				console.log('Successfully removed');
			}
			db.close();
		});
		collection.find({}, {safe: true}).toArray(function (err, result){
			if (err){
				console.log(err);
			} else {
				console.log(result);
			}
			db.close();
		});
	});
});