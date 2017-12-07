var mongodb = require('mongodb'),
	dbServer = new mongodb.Server('localhost', 27017, {
		auto_reconnect: true
	}),
	db = new mongodb.Db('mydb', dbServer, {w: 1});

db.open(function (err, conn){
	db.collection('newCollection', function (err, collection){
		collection.find({}, {sort: ['num'], limit: 3}).toArray(function (err, result){
			console.log(result);
			db.close();
		});
	});
});